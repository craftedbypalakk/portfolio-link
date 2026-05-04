import localFont from "next/font/local";

/** Groww Sans Variable — matches Figma body token (Groww Sans Variable Regular / Italic). */
export const growwSans = localFont({
  src: [
    { path: "./groww/GrowwSans-Variable.ttf", style: "normal" },
    { path: "./groww/GrowwSans-VariableItalic.ttf", style: "italic" },
  ],
  variable: "--font-groww-sans",
  display: "swap",
});
