"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import {
  Loader2,
  RefreshCw,
  Download,
  Flower2,
  Moon,
  Sun,
  MonitorPlay,
} from "lucide-react";

type PetalData = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
};

const FallingPetals = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const petalCount = 35;
  const petals: PetalData[] = useMemo(
    () =>
      Array.from({ length: petalCount }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * -20,
        duration: 12 + Math.random() * 18,
        size: 1 + Math.random() * 4,
        opacity: isDarkMode
          ? 0.3 + Math.random() * 0.6
          : 0.5 + Math.random() * 0.4,
      })),
    [isDarkMode]
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-10"
      aria-hidden="true"
    >
      {petals.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-sm ${isDarkMode ? "bg-pink-100" : "bg-pink-400"}`}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: "-5%",
            opacity: p.opacity,
            animation: `fall ${p.duration}s linear ${p.delay}s infinite, sway ${p.duration / 3}s ease-in-out ${p.delay}s infinite alternate`,
            boxShadow: `0 0 8px ${isDarkMode ? "rgba(255, 255, 255, 0.5)" : "rgba(244, 114, 182, 0.3)"}`,
          }}
        />
      ))}
    </div>
  );
};

const DARK_PROMPT =
  "Masterpiece pixel art, 16-bit aesthetic. Lush, intricate cherry blossom canopy framing the edges in deep obsidian-blue silhouette. Ethereal, glowing white and pale-pink blossoms with soft moonlight glints. A large, brilliant full moon centered in a dark indigo sky. Cinematic lighting, nostalgic and serene.";
const LIGHT_PROMPT =
  "Masterpiece pixel art, 16-bit aesthetic. Lush cherry blossom canopy framing a bright, clear morning sky. Vibrant pink blossoms catching warm, soft morning sunlight. Fluffy pixel clouds in a pale pastel blue sky. High saturation, clean edges, peaceful and airy daytime atmosphere.";

const HeroSection = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const isDarkMode = theme === "dark";

  const generateArtwork = useCallback(
    async (overrideTheme?: "dark" | "light") => {
      const activeTheme = overrideTheme ?? theme;
      setLoading(true);
      setError(null);

      const prompt = activeTheme === "dark" ? DARK_PROMPT : LIGHT_PROMPT;

      try {
        const res = await fetch("/api/generate-artwork", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        });

        if (!res.ok) {
          throw new Error("Generation failed.");
        }

        const data = await res.json();
        const base64Data: string | undefined = data?.image;

        if (base64Data) {
          setImage(`data:image/png;base64,${base64Data}`);
        } else {
          throw new Error("No image data received.");
        }
      } catch {
        setError("The digital blossoms failed to bloom.");
      } finally {
        setLoading(false);
      }
    },
    [theme]
  );

  const handleToggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    generateArtwork(newTheme);
  }, [theme, generateArtwork]);

  const handleDownload = useCallback(() => {
    if (!image) return;
    const link = document.createElement("a");
    link.href = image;
    link.download = `blossom-${theme}.png`;
    link.click();
  }, [image, theme]);

  useEffect(() => {
    generateArtwork();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className={`min-h-screen transition-colors duration-1000 flex flex-col font-serif selection:bg-pink-500/30 overflow-hidden relative ${isDarkMode ? "bg-[#030306] text-slate-200" : "bg-[#fcfcfd] text-slate-800"}`}
    >
      {/* Navigation */}
      <nav className="px-12 py-10 flex justify-between items-center z-20 font-mono">
        <div className="flex items-center gap-4 group cursor-default">
          <div className="relative">
            <Flower2
              className={`w-5 h-5 transition-transform duration-700 group-hover:rotate-180 ${isDarkMode ? "text-white" : "text-pink-600"}`}
              aria-hidden="true"
            />
            <div
              className={`absolute inset-0 blur-md scale-150 animate-pulse ${isDarkMode ? "bg-white/20" : "bg-pink-500/10"}`}
              aria-hidden="true"
            />
          </div>
          <span
            className={`text-[10px] tracking-[0.6em] uppercase font-light ${isDarkMode ? "text-white/60" : "text-slate-500"}`}
          >
            {isDarkMode ? "Nocturnal" : "Diurnal"}
          </span>
        </div>

        <div className="flex items-center gap-6 text-[9px] tracking-[0.4em] uppercase">
          <button
            onClick={handleToggleTheme}
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-500 ${isDarkMode ? "border-white/10 hover:bg-white/5 text-white/40 hover:text-white" : "border-slate-200 hover:bg-slate-100 text-slate-400 hover:text-slate-900"}`}
          >
            {isDarkMode ? (
              <Sun size={12} aria-hidden="true" />
            ) : (
              <Moon size={12} aria-hidden="true" />
            )}
            <span>{isDarkMode ? "Daylight" : "Midnight"}</span>
          </button>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 relative">
        {/* Cinematic Frame */}
        <div
          className={`w-full max-w-6xl aspect-[21/9] relative group overflow-hidden rounded-sm border transition-all duration-1000 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] ${isDarkMode ? "border-white/5 shadow-black" : "border-slate-200 shadow-slate-100"}`}
        >
          {/* Scanlines Overlay */}
          <div
            className="absolute inset-0 z-20 pointer-events-none opacity-[0.1] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_3px,3px_100%]"
            aria-hidden="true"
          />

          {/* Main Visual */}
          <div
            className={`absolute inset-0 flex items-center justify-center overflow-hidden transition-colors duration-1000 ${isDarkMode ? "bg-[#08080c]" : "bg-[#e2e8f0]"}`}
          >
            {loading ? (
              <div className="flex flex-col items-center gap-6">
                <Loader2
                  className={`w-5 h-5 animate-spin ${isDarkMode ? "text-white/20" : "text-slate-400"}`}
                />
                <p
                  className={`text-[9px] uppercase tracking-[0.5em] font-mono italic ${isDarkMode ? "text-white/20" : "text-slate-400"}`}
                >
                  {isDarkMode ? "Cultivating Night" : "Catching Sunlight"}
                </p>
              </div>
            ) : error ? (
              <div className="text-center space-y-6">
                <p
                  className={`text-[10px] tracking-widest uppercase italic ${isDarkMode ? "text-white/30" : "text-slate-400"}`}
                >
                  {error}
                </p>
                <button
                  onClick={() => generateArtwork()}
                  aria-label="Retry generating artwork"
                  className={`text-[9px] border-b pb-1 transition-all uppercase tracking-widest ${isDarkMode ? "text-white/60 border-white/10 hover:text-white hover:border-white" : "text-slate-600 border-slate-200 hover:text-slate-900 hover:border-slate-900"}`}
                >
                  Retry Render
                </button>
              </div>
            ) : image ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt="Living Creative"
                  className={`w-full h-full object-cover pixelated animate-breath ${isDarkMode ? "opacity-80" : "opacity-100"}`}
                  style={{ imageRendering: "pixelated" }}
                />
                <div
                  className={`absolute inset-0 pointer-events-none ${isDarkMode ? "shadow-[inset_0_0_150px_rgba(0,0,0,0.6)]" : "shadow-[inset_0_0_100px_rgba(255,255,255,0.2)]"}`}
                  aria-hidden="true"
                />
                <FallingPetals isDarkMode={isDarkMode} />
              </>
            ) : null}
          </div>

          {/* Controls */}
          {!loading && image && (
            <div className="absolute bottom-8 right-8 flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-1000 transform translate-y-2 group-hover:translate-y-0 z-30">
              <button
                onClick={() => generateArtwork()}
                className={`transition-all hover:scale-110 ${isDarkMode ? "text-white/30 hover:text-white" : "text-slate-400 hover:text-slate-900"}`}
                title="Regenerate"
                aria-label="Regenerate artwork"
              >
                <RefreshCw size={14} />
              </button>
              <button
                onClick={handleDownload}
                className={`transition-all hover:scale-110 ${isDarkMode ? "text-white/30 hover:text-white" : "text-slate-400 hover:text-slate-900"}`}
                title="Capture"
                aria-label="Download artwork"
              >
                <Download size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Hero Text */}
        <div className="mt-16 text-center space-y-6 max-w-2xl">
          <div
            className={`flex items-center justify-center gap-4 ${isDarkMode ? "text-white/10" : "text-slate-200"}`}
            aria-hidden="true"
          >
            <MonitorPlay size={16} />
          </div>
          <h2
            className={`text-2xl md:text-3xl font-light italic tracking-tight leading-tight transition-colors duration-1000 ${isDarkMode ? "text-white/80" : "text-slate-800"}`}
          >
            The quiet breath of an{" "}
            <span className={isDarkMode ? "text-white" : "text-pink-600"}>
              {isDarkMode ? "obsidian spring." : "ethereal morning."}
            </span>
          </h2>
          <p
            className={`text-[10px] uppercase tracking-[0.5em] font-mono font-light leading-loose max-w-lg mx-auto ${isDarkMode ? "text-white/20" : "text-slate-400"}`}
          >
            Procedural art exploring the intersection of digital decay and
            botanical serenity.
          </p>
        </div>
      </main>

      <footer
        className={`p-10 flex justify-between items-center font-mono text-[8px] tracking-[0.4em] transition-colors duration-1000 ${isDarkMode ? "text-white/5" : "text-slate-300"}`}
      >
        <span>STATUS: ACTIVE</span>
        <span className="uppercase">&copy; 2026 Midnight Collective</span>
        <span>STREAM_01</span>
      </footer>
    </section>
  );
};

export default HeroSection;
