import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Case study — Open Interest trading tool (Figma)",
  description: "Case study frame exported from the Figma file; no extra graphics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-zinc-950 text-zinc-100">
      <body
        className={`${inter.className} ${inter.variable} min-h-screen bg-zinc-950 text-zinc-100 antialiased`}
        style={{ color: "#f4f4f5" }}
      >
        {children}
        <noscript>Enable JavaScript to view the full case study, including live charts.</noscript>
      </body>
    </html>
  );
}
