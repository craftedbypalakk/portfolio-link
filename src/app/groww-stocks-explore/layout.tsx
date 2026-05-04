import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { growwSans } from "@/fonts/growwSans";
import { ppNeueBit } from "@/fonts/ppBitmapPack";
import { ppFragmentGlare } from "@/fonts/ppFragmentGlare";

/**
 * Inter weights 400–600: Figma uses Inter Regular for meta/subcopy (e.g. 143:173020, 143:173024).
 * Weight 500–600 approximates Sohne Kräftig for eyebrows & 16px headings until Sohne is added locally.
 */
const caseInter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-case-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Making Stock Discovery Easy — Case Study",
};

type GrowwStocksExploreLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const GrowwStocksExploreLayout = ({ children }: GrowwStocksExploreLayoutProps) => {
  return (
    <div
      className={`${growwSans.className} ${growwSans.variable} ${ppFragmentGlare.variable} ${caseInter.variable} ${ppNeueBit.variable} min-h-screen bg-white antialiased`}
    >
      {children}
    </div>
  );
};

export default GrowwStocksExploreLayout;
