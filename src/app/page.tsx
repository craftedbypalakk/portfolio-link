import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

const W = 1080;
const H = 8432;

const assetFile = () => join(process.cwd(), "public", "figma-assets", "frame-case-study.png");

// Re-check when the file appears (e.g. after `npm run figma:pull`) without a full rebuild
export const dynamic = "force-dynamic";

const NoAsset = () => {
  return (
    <main
      className="min-h-screen bg-zinc-100 px-6 py-10 text-slate-900"
      data-testid="figma-missing-asset"
    >
      <div className="mx-auto max-w-xl">
        <h1 className="text-2xl font-semibold text-slate-950">Nothing to show until the Figma export is in place</h1>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          The app only shows your case study as a single PNG from Figma. The file is not in the project yet, so the page
          would be empty.
        </p>
        <p className="mt-3 text-sm font-medium text-slate-800">Do this next:</p>
        <ol className="mt-2 list-decimal space-y-2 pl-5 text-slate-700">
          <li>
            In Figma: <strong>Settings</strong> → <strong>Security</strong> → create a <strong>personal access token</strong>
            (for your own account only).
          </li>
          <li>
            In the project root, add <code className="rounded bg-white px-1.5 py-0.5 font-mono text-slate-900">.env.local</code>{" "}
            with: <code className="block mt-1 rounded bg-white p-2 font-mono text-sm">FIGMA_ACCESS_TOKEN=your_token</code>
          </li>
          <li>
            From the same folder, run:{" "}
            <code className="rounded bg-white px-1.5 py-0.5 font-mono text-slate-900">npm run figma:pull</code>
          </li>
          <li>Confirm that this path exists: public/figma-assets/frame-case-study.png</li>
          <li>
            Run <code className="rounded bg-white px-1.5 py-0.5 font-mono">npm run dev</code> and open the URL from the
            terminal (local address).
          </li>
        </ol>
        <p className="mt-6 text-sm text-slate-600">After the PNG is there, refresh — the full Figma frame will show.</p>
      </div>
    </main>
  );
};

const WithAsset = () => {
  return (
    <main className="min-h-screen bg-black">
      <Image
        className="mx-auto h-auto w-full max-w-[1080px] select-none"
        src="/figma-assets/frame-case-study.png"
        width={W}
        height={H}
        alt="Case study: Designing an Open Interest Trading Tool — Figma"
        unoptimized
        priority
        sizes="(max-width: 1080px) 100vw, 1080px"
      />
    </main>
  );
};

const Home = () => {
  if (!existsSync(assetFile())) {
    return <NoAsset />;
  }
  return <WithAsset />;
};

export default Home;
