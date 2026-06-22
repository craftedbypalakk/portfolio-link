import localFont from "next/font/local";

export const matter = localFont({
  src: [
    { path: "./matter/Matter-Light.ttf",          weight: "300", style: "normal" },
    { path: "./matter/Matter-LightItalic.ttf",    weight: "300", style: "italic" },
    { path: "./matter/Matter-Regular.ttf",        weight: "400", style: "normal" },
    { path: "./matter/Matter-RegularItalic.ttf",  weight: "400", style: "italic" },
    { path: "./matter/Matter-Medium.ttf",         weight: "500", style: "normal" },
    { path: "./matter/Matter-MediumItalic.ttf",   weight: "500", style: "italic" },
    { path: "./matter/Matter-SemiBold.ttf",       weight: "600", style: "normal" },
    { path: "./matter/Matter-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./matter/Matter-Bold.ttf",           weight: "700", style: "normal" },
    { path: "./matter/Matter-BoldItalic.ttf",     weight: "700", style: "italic" },
    { path: "./matter/Matter-Heavy.ttf",          weight: "800", style: "normal" },
    { path: "./matter/Matter-HeavyItalic.ttf",    weight: "800", style: "italic" },
  ],
  variable: "--font-matter",
  display: "swap",
});
