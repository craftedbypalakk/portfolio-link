import localFont from "next/font/local";

export const ppFragmentSerifLightItalic = localFont({
  src: [{ path: "./pp-fragment-glare/PPFragment-SerifLightItalic.otf", weight: "300", style: "italic" }],
  variable: "--font-pp-fragment-serif-light-italic",
  display: "swap",
});

export const ppFragmentSerifLight = localFont({
  src: [
    { path: "./pp-fragment-glare/PPFragment-SerifLight.otf", weight: "300", style: "normal" },
    { path: "./pp-fragment-glare/PPFragment-SerifLightItalic.otf", weight: "300", style: "italic" },
  ],
  variable: "--font-pp-fragment-serif-light",
  display: "swap",
});
