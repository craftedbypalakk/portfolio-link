import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "intraday-filters-marquee": {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-50%, 0, 0)" },
        },
      },
      animation: {
        "intraday-filters-marquee":
          "intraday-filters-marquee 52s linear infinite",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        /** Figma: PP Neue Bit Bold — nav chrome (nodes 143:173012, 143:173013) */
        "pp-neue-bit": ["var(--font-pp-neue-bit)", "monospace"],
        /** Figma: Groww Sans Variable — body (e.g. 143:173049) */
        "groww-sans": ["var(--font-groww-sans)", "sans-serif"],
        /** Figma: PP Fragment Glare Regular — display hero (143:173019) */
        "fragment-glare": ["var(--font-pp-fragment-glare)", "sans-serif"],
        /** Figma: PP Fragment Serif Light Italic — "resume" label */
        "fragment-serif": ["var(--font-pp-fragment-serif-light-italic)", "serif"],
        /** PP Fragment Serif Light (with italic fallback) — title body copy */
        "fragment-serif-light": ["var(--font-pp-fragment-serif-light)", "serif"],
        /** Inter — subcopy & meta where Figma uses Inter (not Söhne) */
        "case-inter": ["var(--font-case-inter)", "sans-serif"],
        /**
         * Figma: Sohne Kräftig for eyebrows + heading-small (500).
         * "Söhne UI" loads from public/fonts/sohne/*.woff2 when present; else Inter via --font-case-inter.
         */
        sohne: [
          "Söhne UI",
          "var(--font-case-inter)",
          "ui-sans-serif",
          "sans-serif",
        ],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
