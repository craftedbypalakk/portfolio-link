"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Globe, Sparkles } from "lucide-react";

/** Figma Frame 7 — Case studies landing (node 153:13752) */
const BG_PRIMARY = "#060809";
const BG_SECONDARY = "#151819";
const BG_MEDIA = "#252a2c";
const BORDER_PRIMARY = "#252a2c";
const CONTENT_PRIMARY = "#f2f5f7";
const CONTENT_SECONDARY = "#989ea0";

const ARTBOARD_MAX_PX = 1080;
const CONTENT_MAX_PX = 687;
const CARD_MAX_PX = 400;
/** Hero media viewport — Figma d_f_a_b_ce_mp (800×325); wider than the 687 text column. */
const HERO_VIDEO_WIDTH_PX = 800;
const HERO_VIDEO_HEIGHT_PX = 325;
const HERO_VIDEO_SRC = "/hero.mp4";
/** Uniform zoom so the frame fills the hero (parent overflow:hidden); hides BG_MEDIA gaps. Increase if any backdrop still shows. */
const HERO_VIDEO_ZOOM = 1.08;

const SECTION_WORK_ID = "case-studies-work";

const RESUME_URL =
  "https://drive.google.com/file/d/18gOLcOj2GBm0LblX_2mVZulPjZTH1tv7/view?usp=drive_link";

type CaseStudy = {
  slug: string;
  year: string;
  title: string;
  subtitle: string;
  thumbnailSrc?: string;
};

const caseStudies: CaseStudy[] = [
  {
    slug: "/groww-stocks-explore",
    year: "2025",
    title: "Making stock discovery easy",
    subtitle:
      "Turning Stocks Explore into a place to research and trade.",
    thumbnailSrc: "/groww-stocks-explore-thumb.png",
  },
  {
    slug: "/open-interest-tool",
    year: "2026",
    title: "Designing an Open Interest Trading Tool",
    subtitle:
      "Building a tool where traders can understand market’s mood in a blink.",
    thumbnailSrc: "/open-interest-thumb.png",
  },
  {
    slug: "/ipo-journey-redesign",
    year: "2024",
    title: "IPO Journey Redesign",
    subtitle:
      "Making IPO investing simpler, faster, and more transparent",
    thumbnailSrc: "/ipo-journey-thumb.png",
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
    <header
      className="border-b"
      style={{
        borderColor: BORDER_PRIMARY,
        backgroundColor: BG_PRIMARY,
      }}
    >
      <nav
        className="mx-auto flex h-16 items-center justify-between px-6"
        style={{ maxWidth: ARTBOARD_MAX_PX }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-2">
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
          <span
            className="text-[10px] font-medium uppercase tracking-[0.2em]"
            style={{ color: CONTENT_SECONDARY }}
          >
            Design Portfolio
          </span>
        </div>

        <div className="hidden items-center gap-8 sm:flex">
          <a
            href={`#${SECTION_WORK_ID}`}
            className="text-[10px] font-medium uppercase tracking-[0.2em] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 rounded-sm"
            style={{ color: CONTENT_SECONDARY }}
          >
            Work
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-medium uppercase tracking-[0.2em] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 rounded-sm"
            style={{ color: CONTENT_SECONDARY }}
          >
            Resume
          </a>
        </div>

        <div
          className="flex items-center gap-2 text-[10px] font-medium tabular-nums"
          style={{ color: CONTENT_SECONDARY }}
        >
          <Globe size={16} strokeWidth={1.5} aria-hidden="true" />
          <span suppressHydrationWarning>{time}</span>
        </div>
      </nav>
    </header>
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
    className="w-full"
    style={{ maxWidth: CARD_MAX_PX }}
  >
    <Link
      href={study.slug}
      className="group block"
      aria-label={`Read case study: ${study.title}`}
    >
      <div
        className="w-full overflow-hidden rounded-[20px] transition-opacity duration-300 hover:opacity-95"
        style={{ backgroundColor: BG_SECONDARY }}
      >
        <div
          className="relative w-full shrink-0 overflow-hidden"
          style={{ height: 241, backgroundColor: BG_MEDIA }}
          aria-hidden="true"
        >
          {study.thumbnailSrc ? (
            <Image
              src={study.thumbnailSrc}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 480px) 100vw, 400px"
            />
          ) : null}
        </div>

        <div className="box-border min-h-[100px] px-4 pb-4 pt-4">
          <p
            className="mb-4 text-[10px] font-medium uppercase leading-3 tracking-[0.2em]"
            style={{ color: CONTENT_SECONDARY }}
          >
            {study.year}
          </p>
          <h3
            className="text-[16px] font-semibold leading-5"
            style={{ color: CONTENT_PRIMARY }}
          >
            {study.title}
          </h3>
          <p
            className="mt-0.5 text-xs font-normal leading-[18px]"
            style={{ color: CONTENT_SECONDARY }}
          >
            {study.subtitle}
          </p>
        </div>
      </div>
    </Link>
  </motion.div>
);

const Divider = () => (
  <div
    className="mx-auto flex w-full max-w-[400px] items-center gap-0"
    role="separator"
    aria-hidden="true"
  >
    <div className="h-px flex-1" style={{ backgroundColor: BORDER_PRIMARY }} />
    <div className="flex w-4 shrink-0 items-center justify-center px-0">
      <Sparkles
        size={16}
        strokeWidth={1.5}
        style={{ color: CONTENT_SECONDARY }}
        aria-hidden="true"
      />
    </div>
    <div className="h-px flex-1" style={{ backgroundColor: BORDER_PRIMARY }} />
  </div>
);

const LandingPage = () => {
  useEffect(() => {
    const previousBodyBg = document.body.style.backgroundColor;
    const previousHtmlBg = document.documentElement.style.backgroundColor;
    document.body.style.backgroundColor = BG_PRIMARY;
    document.documentElement.style.backgroundColor = BG_PRIMARY;
    return () => {
      document.body.style.backgroundColor = previousBodyBg;
      document.documentElement.style.backgroundColor = previousHtmlBg;
    };
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: BG_PRIMARY }}>
      <Navbar />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 pt-4"
        aria-labelledby="hero-heading"
      >
        <div
          className="relative mx-auto w-full max-w-[800px] overflow-hidden"
          style={{
            aspectRatio: `${HERO_VIDEO_WIDTH_PX} / ${HERO_VIDEO_HEIGHT_PX}`,
            backgroundColor: BG_MEDIA,
          }}
        >
          <video
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
            style={{
              transform: `scale(${HERO_VIDEO_ZOOM})`,
              transformOrigin: "center center",
            }}
            src={HERO_VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            aria-label="Hero media"
          />
        </div>

        <div
          className="mx-auto mt-6 w-full max-w-[590px] text-center"
          style={{ color: CONTENT_PRIMARY }}
        >
          <h1
            id="hero-heading"
            className="text-sm font-semibold leading-5"
          >
            Hi, I&apos;m Palak
          </h1>
          <p
            className="mt-2 text-xs font-normal leading-[18px] text-balance"
            style={{ color: CONTENT_SECONDARY }}
          >
            I&apos;m a product design, with 4+ years of experience. I&apos;m
            currently working at a fintech company called Groww
          </p>
        </div>
      </motion.section>

      <div
        className="mx-auto w-full px-6"
        style={{ maxWidth: CONTENT_MAX_PX }}
      >
        <div className="my-8">
          <Divider />
        </div>

        <motion.section
          id={SECTION_WORK_ID}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="scroll-mt-24 pb-24"
          aria-labelledby="work-heading"
        >
          <h2
            id="work-heading"
            className="mb-10 text-center text-xl font-semibold leading-8"
            style={{ color: CONTENT_PRIMARY }}
          >
            My work
          </h2>

          <div
            className="mx-auto flex flex-col items-center"
            style={{ maxWidth: CARD_MAX_PX + 7, gap: 40 }}
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
