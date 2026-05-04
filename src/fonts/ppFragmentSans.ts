import localFont from "next/font/local";

/**
 * PP Fragment Sans — personal-use license (Pangram Pangram).
 * Files live under ./pp-fragment/
 */
export const ppFragmentSans = localFont({
  src: [
    {
      path: "./pp-fragment/PPFragment-SansLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./pp-fragment/PPFragment-SansLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./pp-fragment/PPFragment-SansRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./pp-fragment/PPFragment-SansRegularitalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./pp-fragment/PPFragment-SansExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./pp-fragment/PPFragment-SansExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-pp-fragment-sans",
  display: "swap",
});
