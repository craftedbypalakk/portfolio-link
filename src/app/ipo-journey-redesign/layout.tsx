import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { growwSans } from "@/fonts/growwSans";
import { ppNeueBit } from "@/fonts/ppBitmapPack";
import { ppFragmentGlare } from "@/fonts/ppFragmentGlare";
import "./sohne-face.css";

/**
 * Inter: hero subcopy, meta lines, and fallback when Söhne woff2 is not in public/fonts/sohne/.
 * Eyebrows & heading-small use Tailwind font-sohne → "Söhne UI" then this variable.
 */
const caseInter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-case-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IPO Journey Redesign — Case Study",
};

type IpoJourneyLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const IpoJourneyLayout = ({ children }: IpoJourneyLayoutProps) => {
  return (
    <div
      className={`${growwSans.className} ${growwSans.variable} ${ppFragmentGlare.variable} ${caseInter.variable} ${ppNeueBit.variable} min-h-screen bg-white antialiased`}
    >
      {children}
    </div>
  );
};

export default IpoJourneyLayout;
