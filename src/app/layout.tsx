import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ppFragmentGlare } from "@/fonts/ppFragmentGlare";
import { ppFragmentSerifLightItalic, ppFragmentSerifLight } from "@/fonts/ppFragmentSerifLightItalic";
import { matter } from "@/fonts/matter";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Palak's Portfolio",
  description:
    "A collection of product design case studies — deep dives into real product problems, process, and outcomes.",
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
  ],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" style={{ backgroundColor: "#0C0C0C" }}>
      <body
        className={`${inter.className} ${inter.variable} ${ppFragmentGlare.variable} ${ppFragmentSerifLightItalic.variable} ${ppFragmentSerifLight.variable} ${matter.variable} min-h-screen antialiased`}
        style={{ backgroundColor: "#0C0C0C" }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
