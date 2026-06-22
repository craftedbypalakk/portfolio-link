import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ppFragmentGlare } from "@/fonts/ppFragmentGlare";
import { ppFragmentSerifLightItalic, ppFragmentSerifLight } from "@/fonts/ppFragmentSerifLightItalic";
import AuthGate from "@/components/AuthGate";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Design Case Studies",
  description:
    "A collection of product design case studies — deep dives into real product problems, process, and outcomes.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="bg-white text-zinc-900">
      <body
        className={`${inter.className} ${inter.variable} ${ppFragmentGlare.variable} ${ppFragmentSerifLightItalic.variable} ${ppFragmentSerifLight.variable} min-h-screen bg-white text-zinc-900 antialiased`}
      >
        <AuthGate>{children}</AuthGate>
      </body>
    </html>
  );
};

export default RootLayout;
