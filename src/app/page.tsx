"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BG_PRIMARY = "#EFF0F1";
const BG_CARD = "#FFFFFF";
const CONTENT_PRIMARY = "#353839";
const CONTENT_SECONDARY = "#7F8283";

const RESUME_URL =
  "https://drive.google.com/file/d/18gOLcOj2GBm0LblX_2mVZulPjZTH1tv7/view?usp=drive_link";
const LINKEDIN_URL = "https://www.linkedin.com/in/palak-blooms/";
const TWITTER_URL = "https://x.com/palakblooms";

type CaseStudy = {
  slug: string;
  eyebrow?: string;
  titleParts: { text: string; em?: boolean }[];
  subtitle?: string;
  imageSrc?: string;
  /** Exact image area height from Figma (px) */
  imageHeight?: number;
  /** Hover state backdrop color */
  hoverColor?: string;
  /** Hover state short label (e.g., "Open Interest") */
  hoverLabel?: string;
};

const caseStudyByKey: Record<string, CaseStudy> = {
  openInterest: {
    slug: "/open-interest-tool",
    titleParts: [
      { text: "Designing an " },
      { text: "Open Interest", em: true },
      { text: " Trading Tool" },
    ],
    subtitle:
      "Building a tool where traders can understand market’s mood in a blink.",
    imageSrc: "/oi-thumb.png",
    imageHeight: 410,
    hoverColor: "#7B72EE",
    hoverLabel: "Open Interest",
  },
  ipo: {
    slug: "/ipo-journey-redesign",
    titleParts: [
      { text: "Making " },
      { text: "IPO", em: true },
      { text: " investing simpler, faster, and more transparent" },
    ],
    imageSrc: "/ipo-thumb.png",
    imageHeight: 279,
    hoverColor: "#EDAC65",
    hoverLabel: "IPO Journey",
  },
};

type BentoBoxProps = { children: React.ReactNode; className?: string };

const BentoBox = ({ children, className = "" }: BentoBoxProps) => (
  <div
    className={`relative h-full w-full overflow-hidden rounded-[20px] shadow-[0_2px_12px_rgba(53,56,57,0.06)] ${className}`}
    style={{ backgroundColor: BG_CARD }}
  >
    {children}
  </div>
);

const StocksExploreBentoCard = ({ index }: { index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
    className="h-full w-full min-h-0"
  >
    <Link
      href="/groww-stocks-explore"
      className="block h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C73A75]"
      aria-label="Read Stocks Explore case study"
    >
      <motion.div
        initial="rest"
        whileHover="hovered"
        className="relative h-full w-full overflow-hidden"
        style={{ borderRadius: 20 }}
      >
        {/* Colored backdrop — full card */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#4B47E5", borderRadius: 20 }}
        >
          <div
            style={{
              position: "absolute",
              top: 24,
              left: 24,
              color: "#fff",
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            Stocks Explore <span style={{ marginLeft: 4 }}>→</span>
          </div>
        </div>

        {/* Sliding white card */}
        <motion.div
          variants={{
            rest:    { x: 0,  y: 0,  rotate: 0 },
            hovered: { x: 32, y: 80, rotate: -5 },
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            transformOrigin: "top left",
          }}
        >
          <BentoBox className="shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
            <div className="flex h-full w-full flex-col">
              {/* Image — full image, no cropping */}
              <div className="relative w-full shrink-0" style={{ aspectRatio: "8192 / 10240" }}>
                <Image
                  src="/stocks-explore-thumb.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 25vw, 400px"
                  quality={100}
                />
              </div>
              {/* Text — Figma Frame 39: x=38, y=506, w=316, h=106 inside 660px card */}
              <div style={{ paddingTop: 16, paddingLeft: 20, paddingRight: 20, paddingBottom: 48, textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    lineHeight: "12px",
                    color: CONTENT_SECONDARY,
                  }}
                >
                  3.8M Daily Visits
                </div>
                <div
                  className="font-fragment-glare"
                  style={{
                    marginTop: 24,
                    fontSize: 24,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    color: CONTENT_PRIMARY,
                  }}
                >
                  <span style={{ whiteSpace: "nowrap" }}>Turning <span className="font-fragment-serif italic">Stocks Explore</span> into</span>
                  <br />
                  <span style={{ whiteSpace: "nowrap" }}>a place to research <span className="font-fragment-serif italic">&amp;</span> trade.</span>
                </div>
              </div>
            </div>
          </BentoBox>
        </motion.div>
      </motion.div>
    </Link>
  </motion.div>
);

const CaseStudyBentoCard = ({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
    className="h-full w-full min-h-0"
  >
    <Link
      href={study.slug}
      className="block h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C73A75]"
      aria-label="Read case study"
    >
      <motion.div
        initial="rest"
        whileHover="hovered"
        className="relative h-full w-full overflow-hidden"
        style={{ borderRadius: 20 }}
      >
        {/* Colored backdrop — fills the ENTIRE card, behind everything */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            backgroundColor: study.hoverColor ?? "#7B72EE",
            borderRadius: 20,
          }}
        >
          {study.hoverLabel && (
            <div
              style={{
                position: "absolute",
                top: 24,
                left: 24,
                color: "#fff",
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              {study.hoverLabel} <span style={{ marginLeft: 4 }}>→</span>
            </div>
          )}
        </div>

        {/* Sliding layer — the entire white card slides from the top */}
        <motion.div
          variants={{
            rest:    { x: 0,  y: 0,  rotate: 0 },
            hovered: { x: 32, y: 80, rotate: -5 },
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            transformOrigin: "top left",
          }}
        >
          <BentoBox className="shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
            <div className="flex h-full w-full flex-col">
              {/* Title */}
              <div style={{ padding: 24, paddingBottom: 0 }}>
                <div
                  className="font-fragment-glare"
                  style={{
                    fontSize: 24,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    color: CONTENT_PRIMARY,
                  }}
                >
                  {study.titleParts.map((part, i) =>
                    part.em ? (
                      <span key={i} className="font-fragment-serif italic">
                        {part.text}
                      </span>
                    ) : (
                      <span key={i}>{part.text}</span>
                    )
                  )}
                </div>
              </div>
              {/* Image */}
              {study.imageSrc && (
                <div
                  className="relative w-full shrink-0 overflow-hidden"
                  style={{ height: study.imageHeight ?? 280, marginTop: 2 }}
                >
                  <Image
                    src={study.imageSrc}
                    alt=""
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1280px) 25vw, 400px"
                    quality={100}
                  />
                </div>
              )}
              {/* Subtitle */}
              {study.subtitle && (
                <div style={{ padding: 24, paddingTop: 2 }}>
                  <div
                    style={{
                      fontSize: 16,
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "24px",
                      color: CONTENT_SECONDARY,
                    }}
                  >
                    {study.subtitle}
                  </div>
                </div>
              )}
            </div>
          </BentoBox>
        </motion.div>
      </motion.div>
    </Link>
  </motion.div>
);

/** Actual resume image shown as the front page. */
const ResumePage = () => (
  <div
    className="relative h-full w-full overflow-hidden bg-white"
    style={{ borderRadius: 12, boxShadow: "0px 16px 24px 8px rgba(0,0,0,0.10)" }}
  >
    <Image
      src="/resume.png"
      alt="Palak Jain resume"
      fill
      className="object-cover object-top"
      quality={100}
      sizes="356px"
    />
  </div>
);

const ResumeBentoCard = ({ index }: { index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
    className="h-full w-full min-h-0"
  >
    {/*
      whileHover="hovered" + initial="rest" propagates the variant name to all
      motion children — no useState, no re-renders, no jitter.
    */}
    <motion.a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C73A75]"
      aria-label="Open resume in a new tab"
      initial="rest"
      whileHover="hovered"
    >
      <div
        className="relative h-full w-full overflow-hidden shadow-[0_2px_12px_rgba(53,56,57,0.06)]"
        style={{
          backgroundColor: BG_CARD,
          borderRadius: 20,
          // Forces GPU compositing — fixes Safari overflow:hidden + border-radius clipping bug
          transform: "translateZ(0)",
        }}
      >
        {/* Label */}
        <p
          className="absolute left-1/2 top-5 z-10 -translate-x-1/2 font-fragment-serif text-[14px] italic leading-none"
          style={{ color: CONTENT_PRIMARY }}
        >
          resume
        </p>

        {/* Back page — orange, fixed */}
        <div
          className="absolute"
          style={{
            width: 356,
            height: 205,
            bottom: -40,
            left: 26,
            borderRadius: 12,
            backgroundColor: "#EDAC65",
          }}
        />

        {/* Middle page — purple */}
        <motion.div
          className="absolute"
          variants={{
            rest:    { bottom: -56, left: 74 },
            hovered: { bottom: -48, left: 58 },
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ width: 356, height: 205, borderRadius: 12, backgroundColor: "#7B72EE" }}
        />

        {/* Front page — resume image */}
        <motion.div
          className="absolute overflow-hidden"
          variants={{
            rest:    { bottom: -72, left: 122 },
            hovered: { bottom: -56, left: 90 },
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ width: 356, height: 205, borderRadius: 12 }}
        >
          <ResumePage />
        </motion.div>
      </div>
    </motion.a>
  </motion.div>
);

const CUBE_PX = 320;
const HALF = CUBE_PX / 2;
const FACE_OFFSET = HALF + 5; // push each face 5px outward → 10px gap between adjacent faces (matches tile gap)
const CUBE_FACES: { label: string; transform: string; shade: string }[] = [
  { label: "front",  transform: `translateZ(${FACE_OFFSET}px)`,                    shade: "rgba(255,255,255,0.0)" },
  { label: "back",   transform: `rotateY(180deg) translateZ(${FACE_OFFSET}px)`,    shade: "rgba(0,0,0,0.25)" },
  { label: "right",  transform: `rotateY(90deg) translateZ(${FACE_OFFSET}px)`,     shade: "rgba(0,0,0,0.15)" },
  { label: "left",   transform: `rotateY(-90deg) translateZ(${FACE_OFFSET}px)`,    shade: "rgba(0,0,0,0.20)" },
  { label: "top",    transform: `rotateX(90deg) translateZ(${FACE_OFFSET}px)`,     shade: "rgba(255,255,255,0.12)" },
  { label: "bottom", transform: `rotateX(-90deg) translateZ(${FACE_OFFSET}px)`,    shade: "rgba(0,0,0,0.30)" },
];

const RubiksCube3D = () => (
  <>
    <style>{`
      @keyframes spin-rubiks {
        0%   { transform: rotateX(0deg)   rotateY(0deg)   rotateZ(0deg); }
        33%  { transform: rotateX(120deg) rotateY(240deg) rotateZ(90deg); }
        66%  { transform: rotateX(240deg) rotateY(120deg) rotateZ(210deg); }
        100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
      }
      .rubiks-spin {
        animation: spin-rubiks 22s linear infinite;
        transform-style: preserve-3d;
      }
    `}</style>
    <div style={{ perspective: "600px" }} className="flex h-full w-full items-center justify-center">
      <div
        className="rubiks-spin"
        style={{ width: CUBE_PX, height: CUBE_PX, position: "relative" }}
      >
        {CUBE_FACES.map((face) => (
          <div
            key={face.label}
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(3, 1fr)",
              gap: 10,
              padding: 0,
              transform: face.transform,
              backgroundColor: "transparent",
            }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                style={{ backgroundColor: "#E4E6E8" }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  </>
);

const AboutBentoCard = ({ index }: { index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
    className="h-full w-full min-h-0"
  >
    <BentoBox>
      <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", paddingTop: 25, paddingLeft: 24, paddingRight: 24, paddingBottom: 24 }}>
        <div
          className="font-fragment-glare"
          style={{
            fontSize: 32,
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            color: CONTENT_PRIMARY,
          }}
        >
          Hi 👋🏻
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "24px",
            color: CONTENT_SECONDARY,
          }}
        >
          I&apos;m Palak, a Product Designer at{" "}
          <a
            href="https://groww.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
            style={{ color: CONTENT_PRIMARY }}
          >
            Groww
          </a>{" "}
          with 4+ years of experience in fintech.
          <br />
          When I&apos;m not designing, I&apos;m usually watering my plants, working on my small clothing brand, or planning my next trip.
        </div>
        {/* Rubik's cube — fills remaining space below the text */}
        <div style={{ flex: 1, minHeight: 0, marginTop: 16 }}>
          <RubiksCube3D />
        </div>
      </div>
    </BentoBox>
  </motion.div>
);

const ContactBentoCard = ({ index }: { index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
    className="h-full w-full min-h-0"
  >
    <BentoBox>
      <div className="flex h-full w-full items-center justify-center gap-10">
        {/* X (Twitter) */}
        <a
          href={TWITTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter) profile"
          className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#4B47E5] text-[#4B47E5] transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B47E5]"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.763l7.728-8.835L2.3 2.25h6.993l4.265 5.634L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#4B47E5] text-[#4B47E5] transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B47E5]"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </BentoBox>
  </motion.div>
);

// Artboard dimensions (matches Figma 1440×1024 canvas, 24px padding each side)
const GRID_W = 392 + 24 + 560 + 24 + 392; // 1392
const GRID_H = 976;
const ARTBOARD_W = GRID_W + 48; // 1440
const ARTBOARD_H = GRID_H + 48; // 1024

const LandingPage = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    document.body.style.backgroundColor = BG_PRIMARY;
    document.documentElement.style.backgroundColor = BG_PRIMARY;
    // Prevent document scroll — body overflow doesn't clip absolutely-positioned children
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const update = () => {
      setScale(Math.min(1, window.innerWidth / ARTBOARD_W, window.innerHeight / ARTBOARD_H));
    };
    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    // Full-viewport background — no overflow:hidden so scaled content is never clipped
    <div style={{ position: "fixed", inset: 0, backgroundColor: BG_PRIMARY }}>
      {/*
        Scale wrapper: explicitly sized to the artboard, centered via calc,
        then scaled as a single unit. transform-origin: center keeps it centered.
      */}
      <div
        style={{
          position: "absolute",
          width: GRID_W,
          height: GRID_H,
          top: `calc(50% - ${GRID_H / 2}px)`,
          left: `calc(50% - ${GRID_W / 2}px)`,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        <div className="grid gap-6" style={{ gridTemplateColumns: "392px 560px 392px" }}>
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <div style={{ width: 392, height: 292 }}><ResumeBentoCard index={0} /></div>
            <div style={{ width: 392, height: 660 }}><StocksExploreBentoCard index={1} /></div>
          </div>
          {/* Middle column */}
          <div className="flex flex-col gap-6">
            <div style={{ width: 560, height: 814 }}><AboutBentoCard index={2} /></div>
            <div style={{ width: 560, height: 138 }}><ContactBentoCard index={3} /></div>
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-6">
            <div style={{ width: 392, height: 580 }}><CaseStudyBentoCard study={caseStudyByKey.openInterest} index={4} /></div>
            <div style={{ width: 392, height: 372 }}><CaseStudyBentoCard study={caseStudyByKey.ipo} index={5} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
