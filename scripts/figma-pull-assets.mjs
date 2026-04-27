/**
 * Download rendered PNGs from a Figma file (exact pixels as Figma’s export / render).
 * Requires: FIGMA_ACCESS_TOKEN in the environment (Settings → Figma → Security → personal access token).
 * Usage: FIGMA_ACCESS_TOKEN=... node scripts/figma-pull-assets.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const projectRoot = join(__dirname, "..");
const outDir = join(projectRoot, "public", "figma-assets");

// Node id from: Case-studies file, “Frame 1” and key media (same file key as your link)
const FILE_KEY = "G6o2gwolW3yxA3PcOskAft";
const EXPORTS = [
  { id: "4:11798", out: "frame-case-study.png", label: "Full case study (Frame 1)" },
];

const loadToken = () => {
  const t = process.env.FIGMA_ACCESS_TOKEN?.trim() || process.env.FIGMA_TOKEN?.trim();
  if (t) {
    return t;
  }
  const envFile = join(projectRoot, ".env.local");
  if (existsSync(envFile)) {
    for (const line of readFileSync(envFile, "utf8").split("\n")) {
      const m = line.match(
        /^\s*FIGMA_(?:ACCESS_)?TOKEN\s*=\s*(?:"([^"]*)"|'([^']*)'|([^#]+))\s*$/,
      );
      if (m) {
        return (m[1] ?? m[2] ?? m[3] ?? "").trim();
      }
    }
  }
  return "";
};

const fetchJson = async (url) => {
  const res = await fetch(url, {
    headers: { "X-FIGMA-TOKEN": loadToken() },
  });
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`Not JSON (HTTP ${res.status}): ${text.slice(0, 200)}`);
  }
  if (!res.ok) {
    const msg = data?.err || data?.message || text;
    throw new Error(`Figma API ${res.status}: ${msg}`);
  }
  return data;
};

const main = async () => {
  const token = loadToken();
  if (!token) {
    throw new Error(
      "Set FIGMA_ACCESS_TOKEN (Figma account → Security → personal access token) in .env.local or the environment, then re-run this script.",
    );
  }
  if (!token.length) {
    throw new Error("Token is empty.");
  }

  await mkdir(outDir, { recursive: true });

  for (const item of EXPORTS) {
    const idEnc = item.id;
    // Full frame is very tall: keep max dimension &lt; 4096
    const scale = 0.45;
    const u = new URL(`https://api.figma.com/v1/images/${FILE_KEY}`);
    u.searchParams.set("ids", idEnc);
    u.searchParams.set("format", "png");
    u.searchParams.set("scale", String(scale));

    process.stdout.write(`Rendering ${idEnc} (${item.label}, scale ${scale})…\n`);
    const imgJson = await fetchJson(u);
    const url = imgJson?.images?.[idEnc] || imgJson?.images?.[idEnc.replace(":", "-")];
    if (!url) {
      const keys = imgJson?.images ? Object.keys(imgJson.images) : [];
      throw new Error(`No image URL for node ${idEnc}. Keys: ${keys.join(", ") || "none"}`);
    }

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`GET render URL failed: ${res.status} ${res.statusText}`);
    }
    const buf = Buffer.from(await res.arrayBuffer());
    const dest = join(outDir, item.out);
    await writeFile(dest, buf);
    process.stdout.write(`Wrote ${item.out} (${(buf.length / 1024).toFixed(0)} KB)\n`);
  }

  process.stdout.write("Done. Refresh the app — the case study should show the Figma image.\n");
};

main().catch((e) => {
  process.stderr.write(`${e.message}\n`);
  process.exit(1);
});
