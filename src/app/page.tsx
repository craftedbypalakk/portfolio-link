"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Sparkles } from "lucide-react";

type CaseStudy = {
  slug: string;
  year: string;
  title: string;
  subtitle: string;
};

const caseStudies: CaseStudy[] = [
  {
    slug: "/groww-stocks-explore",
    year: "2025",
    title: "Making stock discovery easy",
    subtitle:
      "Turning Stocks Explore into a place to research and trade.",
  },
  {
    slug: "/open-interest-tool",
    year: "2026",
    title: "Designing an Open Interest Trading Tool",
    subtitle:
      "Building a tool where traders can understand market's mood in a blink.",
  },
  {
    slug: "/ipo-journey-redesign",
    year: "2024",
    title: "IPO Journey Redesign",
    subtitle:
      "Making IPO investing simpler, faster, and more transparent.",
  },
];

const Navbar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      className="flex items-center justify-between px-6 h-16 border-b border-gray-100"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Left — Logo */}
      <div className="flex items-center gap-1.5">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7.77637 0.885729C7.91705 0.815398 8.08293 0.81547 8.22363 0.885729L8.22656 0.887682C8.24145 0.895428 8.27707 0.914019 8.29688 0.924792C8.33947 0.947958 8.39899 0.981377 8.4707 1.0244C8.61367 1.11018 8.8086 1.23643 9.01562 1.39745C9.32268 1.63631 9.6954 1.98434 9.94922 2.42479C10.3785 2.25848 10.845 2.16702 11.333 2.16698C11.6092 2.16698 11.833 2.39084 11.833 2.66698V5.33299C11.833 7.28052 10.3807 8.88668 8.5 9.13182V11.1719C9.32497 10.1522 10.5862 9.49999 12 9.49999C12.2761 9.49999 12.5 9.72384 12.5 9.99999C12.5 10.2761 12.2761 10.5 12 10.5C10.067 10.5 8.5 12.067 8.5 14V14.667C8.49982 14.943 8.27603 15.167 8 15.167C7.72397 15.167 7.50018 14.943 7.5 14.667V14C7.5 12.067 5.933 10.5 4 10.5C3.72386 10.5 3.5 10.2761 3.5 9.99999C3.5 9.72384 3.72386 9.49999 4 9.49999C5.41378 9.49999 6.67503 10.1522 7.5 11.1719V9.13182C5.61931 8.88668 4.16699 7.28052 4.16699 5.33299V2.66698C4.16699 2.39084 4.39085 2.16698 4.66699 2.16698C5.15454 2.16702 5.62071 2.25866 6.0498 2.42479C6.30358 1.98416 6.67722 1.63641 6.98438 1.39745C7.19138 1.23645 7.38633 1.11018 7.5293 1.0244C7.60097 0.981397 7.66051 0.947969 7.70312 0.924792C7.72292 0.914025 7.75854 0.895435 7.77344 0.887682L7.77637 0.885729ZM8 1.90819C7.88811 1.9771 7.7466 2.07143 7.59863 2.18651C7.33201 2.39391 7.08329 2.64034 6.92676 2.90331C7.07649 3.01274 7.21753 3.13322 7.34961 3.26268C7.54677 3.45596 7.55064 3.77251 7.35742 3.96971C7.16418 4.16684 6.8476 4.16966 6.65039 3.97655C6.25193 3.58593 5.73908 3.31276 5.16699 3.21092V5.33299C5.16699 6.8978 6.43519 8.16698 8 8.16698L8.29004 8.15233C9.71861 8.00709 10.833 6.79989 10.833 5.33299V3.21092C9.50685 3.44723 8.5 4.60592 8.5 5.99999C8.5 6.27613 8.27614 6.49999 8 6.49999C7.72386 6.49999 7.5 6.27613 7.5 5.99999C7.5 4.728 8.11946 3.60061 9.07324 2.90331C8.91668 2.64033 8.66801 2.3939 8.40137 2.18651C8.2534 2.07143 8.11189 1.9771 8 1.90819Z"
            fill="#C73A75"
          />
        </svg>
        <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-gray-500">
          Design Portfolio
        </span>
      </div>

      {/* Center — Nav Links */}
      <div className="hidden sm:flex items-center gap-8">
        {["Work", "Resume"].map((item) => (
          <button
            key={item}
            className="text-[11px] font-medium tracking-[0.12em] uppercase text-gray-500 hover:text-gray-900 transition-colors"
            tabIndex={0}
            aria-label={item}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Right — Time */}
      <div className="flex items-center gap-1.5 text-gray-500">
        <Globe size={14} strokeWidth={1.5} aria-hidden="true" />
        <span className="text-[11px] font-medium tracking-wide">
          {time}
        </span>
      </div>
    </nav>
  );
};

const CaseStudyCard = ({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
  >
    <Link
      href={study.slug}
      className="group block"
      aria-label={`Read case study: ${study.title}`}
    >
      <div className="overflow-hidden rounded-xl bg-[#F5F5F5] transition-shadow duration-300 hover:shadow-lg">
        {/* Image placeholder — blank white space */}
        <div
          className="w-full bg-white"
          style={{ aspectRatio: "407 / 240" }}
        />

        {/* Text content */}
        <div className="px-4 pt-4 pb-5">
          <p className="text-[11px] font-normal tracking-[0.2em] uppercase text-[#9CA3AF] mb-2">
            {study.year}
          </p>
          <h3 className="text-[16px] font-semibold leading-snug text-[#1F2937]">
            {study.title}
          </h3>
          <p className="mt-0.5 text-[13px] leading-relaxed text-[#9CA3AF]">
            {study.subtitle}
          </p>
        </div>
      </div>
    </Link>
  </motion.div>
);

const Divider = () => (
  <div
    className="flex items-center justify-center w-full mx-auto"
    style={{ maxWidth: "370px" }}
  >
    <div className="flex-1 h-px bg-[#E5E7EB]" />
    <div className="px-2 flex items-center justify-center">
      <Sparkles size={14} className="text-[#D1D5DB]" aria-hidden="true" />
    </div>
    <div className="flex-1 h-px bg-[#E5E7EB]" />
  </div>
);

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Content container — centered, matching Figma 687px of 1080px */}
      <div className="mx-auto px-6" style={{ maxWidth: "720px" }}>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center pt-4"
        >
          {/* Hero Video — rounded, scaled up to crop past letterbox bars */}
          <div
            className="w-full overflow-hidden"
            style={{ aspectRatio: "687 / 356" }}
          >
            <video
              className="w-full h-full object-cover scale-[1.35]"
              src="/mp_.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Cherry blossom hero video"
            />
          </div>

          {/* Intro text */}
          <div className="mt-6 text-center" style={{ maxWidth: "545px" }}>
            <h1 className="text-[17px] font-semibold text-[#1F2937]">
              Hi, I&apos;m Palak
            </h1>
            <p className="mt-1.5 text-[13px] leading-[1.7] text-[#9CA3AF]">
              I&apos;m a product design, with 4+ years of experience. I&apos;m
              currently working at a fintech company called Groww
            </p>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="my-8">
          <Divider />
        </div>

        {/* My Work Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="pb-24"
        >
          <h2 className="text-center text-[20px] font-semibold text-[#1F2937] mb-10">
            My work
          </h2>

          <div
            className="flex flex-col mx-auto"
            style={{ maxWidth: "407px", gap: "40px" }}
          >
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default LandingPage;
