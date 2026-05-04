import localFont from "next/font/local";

/** PP Mondwest — bitmap, personal-use (Pangram Pangram). */
export const ppMondwest = localFont({
  src: "./bitmap-pack/PPMondwest-Regular.otf",
  weight: "400",
  style: "normal",
  variable: "--font-pp-mondwest",
  display: "swap",
});

/** PP Neue Bit — bitmap bold, personal-use (Pangram Pangram). */
export const ppNeueBit = localFont({
  src: "./bitmap-pack/PPNeueBit-Bold.otf",
  weight: "700",
  style: "normal",
  variable: "--font-pp-neue-bit",
  display: "swap",
});
