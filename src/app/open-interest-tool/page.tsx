"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useState,
  type KeyboardEvent,
} from "react";

const SECTION_LABEL_CLASSES =
  "text-[12px] font-semibold uppercase tracking-[0.2em] text-[#44E5A0]";

const BODY_TEXT_CLASSES = "text-[14px] leading-[20px] text-[#9B9B9B]";

const HEADING_CLASSES = "text-[16px] font-semibold leading-[24px] text-white";

const ITALIC_CAPTION_CLASSES =
  "text-[14px] italic leading-[20px] text-[#6B6B6B]";

/** Lossless WebP paths — preloaded on mount so tab / lens switches feel instant. */
const OPEN_INTEREST_PRELOAD_URLS = [
  "/open-interest/hero-main.webp",
  "/open-interest/problem-option-chain.webp",
  "/open-interest/problem-traders-graphic.webp",
  "/open-interest/process-upstox.webp",
  "/open-interest/process-sensibull.webp",
  "/open-interest/design-feature-color.webp",
  "/open-interest/design-feature-labels.webp",
  "/open-interest/design-feature-pcr.webp",
  "/open-interest/switch-open-interest.webp",
  "/open-interest/switch-oi-change.webp",
  "/open-interest/switch-pcr.webp",
  "/open-interest/time-historical.webp",
  "/open-interest/oi-action-cues.webp",
] as const;

type TimeLens = "intraday" | "historical";

type SwitchViewTab = "openInterest" | "oiChange" | "pcr";

const TIME_LENS_MEDIA: Record<TimeLens, { src: string; alt: string }> = {
  intraday: {
    src: "/open-interest/switch-open-interest.webp",
    alt: "Intraday lens: live open interest across strikes",
  },
  historical: {
    src: "/open-interest/time-historical.webp",
    alt: "Historical lens: broader OI context over sessions",
  },
};

const SWITCH_TAB_ORDER: readonly SwitchViewTab[] = [
  "openInterest",
  "oiChange",
  "pcr",
] as const;

const SWITCH_TAB_MEDIA: Record<
  SwitchViewTab,
  { src: string; alt: string; label: string }
> = {
  openInterest: {
    src: "/open-interest/switch-open-interest.webp",
    alt: "Open Interest tab showing strike-wise OI bars",
    label: "Open Interest",
  },
  oiChange: {
    src: "/open-interest/switch-oi-change.webp",
    alt: "OI change tab showing how open interest moved",
    label: "OI change",
  },
  pcr: {
    src: "/open-interest/switch-pcr.webp",
    alt: "PCR tab showing put–call ratio and sentiment",
    label: "PCR",
  },
};

const Divider = () => (
  <div className="mx-auto w-[400px] max-w-full px-6 sm:px-0">
    <hr className="border-t border-[#2A2A2A]" />
  </div>
);

/* ─── Nav — Figma 143:144184 (60px bar, CASE STUDY + year) ─ */

const Nav = () => (
  <header className="sticky top-0 z-50 border-b border-[#2A2A2A] bg-[#0C0C0C]">
    <nav
      className="mx-auto flex h-[60px] max-w-[1080px] items-center justify-between px-[72px]"
      aria-label="Case study navigation"
    >
      <Link
        href="/"
        className="flex items-center gap-[6px] text-[12px] font-semibold uppercase tracking-[0.2em] text-[#44E5A0] transition-opacity hover:opacity-80"
        aria-label="Back to home"
        tabIndex={0}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 12L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        CASE STUDY
      </Link>
      <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#9B9B9B]">
        2026
      </span>
    </nav>
  </header>
);

/* ─── Hero — Figma 143:144189 (stacked copy + Role / Team + image slot) ─ */

const Hero = () => (
  <section className="relative px-[72px] pb-[112px] pt-[36px]">
    <div className="mx-auto w-full max-w-[936px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-[32px] font-bold leading-[1.15] tracking-tight text-white">
          Designing an Open Interest Trading Tool
        </h1>
        <p className="mt-[8px] text-[14px] leading-[20px] text-[#9B9B9B]">
          Turning Stocks Explore into a place to research and trade.
        </p>

        <div className="mt-[56px] flex flex-wrap items-start justify-between gap-y-[16px]">
          <div className="min-w-[98px] shrink-0">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#9B9B9B]">
              Role
            </p>
            <p className="mt-[4px] text-[15px] leading-normal text-white">
              Product designer
            </p>
          </div>
          <div className="max-w-[300px] shrink-0 text-left sm:ml-auto sm:text-right">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#9B9B9B]">
              Team
            </p>
            <p className="mt-[4px] text-[15px] leading-normal text-white sm:text-right">
              1 Product designer, 1 Product Manager, 2 Developers
            </p>
          </div>
        </div>
      </motion.div>

      <div className="relative mt-[12px] w-full overflow-hidden rounded-[8px] border border-[#2A2A2A] bg-[#1A1A1A]">
        <Image
          src="/open-interest/hero-main.webp"
          alt="Hero mockup for the Open Interest trading tool across analysis and trading flows"
          width={936}
          height={360}
          className="h-auto w-full object-cover"
          priority
          sizes="(max-width: 936px) 100vw, 936px"
        />
      </div>
    </div>
  </section>
);

/* ─── Context ───────────────────────────────────────────── */

const Context = () => (
  <section className="px-6 sm:px-0">
    <div className="mx-auto w-[400px] max-w-full">
      <AnimatedSection>
        <span className={SECTION_LABEL_CLASSES}>Context</span>
        <div className="mt-[28px]">
          <p className={BODY_TEXT_CLASSES}>
            In the stock market, most people react to what already happened. But
            the &quot;Big Players&quot; — the banks and institutions — leave clues about
            where they are moving their money before the price shifts. These
            clues are hidden in Open Interest (OI). OI is a market X-ray.
            Direction of the market.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── What is OI ────────────────────────────────────────── */

const WhatIsOI = () => (
  <section className="px-6 sm:px-0">
    <div className="mx-auto w-[400px] max-w-full">
      <AnimatedSection>
        <span className={SECTION_LABEL_CLASSES}>
          What is Open Interest (OI)?
        </span>

        {/* Highlight box */}
        <div className="mt-[28px] rounded-[4px] border-l-[3px] border-[#44E5A0] bg-[#1A1A1A] px-[16px] py-[16px]">
          <p className="text-[14px] italic leading-[20px] text-[#9B9B9B]">
            Let&apos;s understand with and example
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-[56px]">
        <p className={BODY_TEXT_CLASSES}>
          Imagine a stadium full of mini tug-of-war matches happening at the
          same time. Each match has exactly two people: One backing Team Red, One
          backing Team Green.
        </p>

        <p className="mt-[32px] text-[14px] leading-[20px] text-[#9B9B9B]">
          <span aria-hidden="true">&#x1F449; </span>
          One match = 1 contract (1 active bet)
        </p>

        <p className="mt-[32px] text-[14px] leading-[20px] text-[#9B9B9B]">
          <span aria-hidden="true">&#x1F449; </span>
          Open Interest (OI) = total number of matches currently being played
        </p>

        <p className="mt-[32px] text-[14px] leading-[20px] text-[#9B9B9B]">
          Only the matches still happening right now count — not the ones already
          finished.
        </p>
      </AnimatedSection>

      {/* How OI changes */}
      <AnimatedSection delay={0.15} className="mt-[40px]">
        <h3 className={HEADING_CLASSES}>How OI changes</h3>
        <div className="mt-[16px] space-y-[16px]">
          <div>
            <p className="text-[14px] leading-[20px]">
              <span className="text-[#44E5A0]">OI &#x2191;</span>
            </p>
            <p className="text-[14px] leading-[20px] text-[#9B9B9B]">
              Two new people start a fresh match (new money enters the market)
            </p>
          </div>
          <div>
            <p className="text-[14px] leading-[20px]">
              <span className="text-[#FF5252]">OI &#x2193;</span>
            </p>
            <p className="text-[14px] leading-[20px] text-[#9B9B9B]">
              A pair settles and leaves(positions closed, money exits)
            </p>
          </div>
          <div>
            <p className="text-[14px] leading-[20px]">
              <span className="text-[#9B9B9B]">OI &#x2192;</span>
            </p>
            <p className="text-[14px] leading-[20px] text-[#9B9B9B]">
              One player swaps with another (position changes hands, but the bet
              is still active)
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Why important */}
      <AnimatedSection delay={0.2} className="mt-[40px]">
        <h3 className={HEADING_CLASSES}>Why it is important in trading?</h3>
        <p className="mt-[16px] text-[14px] leading-[20px] text-[#9B9B9B]">
          A price change alone doesn&apos;t tell you much. OI tells you who&apos;s
          behind it — fresh money entering the market, or existing players cashing
          out. — which is what makes the move strong or weak.
        </p>
      </AnimatedSection>

      {/* OI Interpretation Table */}
      <AnimatedSection delay={0.25} className="mt-[32px]">
        <div className="overflow-hidden rounded-[8px] border border-[#2A2A2A]">
          {/* Table Header */}
          <div className="grid grid-cols-[63px_63px_1fr] border-b border-[#2A2A2A] bg-[#1A1A1A]">
            <div className="px-[16px] py-[12px] text-[14px] font-medium text-[#9B9B9B]">
              Price
            </div>
            <div className="px-[16px] py-[12px] text-[14px] font-medium text-[#9B9B9B]">
              OI
            </div>
            <div className="px-[16px] py-[12px] text-[14px] font-medium text-[#9B9B9B]">
              What it means
            </div>
          </div>
          {/* Table Rows */}
          {[
            {
              price: "↑",
              oi: "↑",
              meaning: "New buyers joining → uptrend is strong",
              priceColor: "text-[#44E5A0]",
              oiColor: "text-[#44E5A0]",
            },
            {
              price: "↑",
              oi: "↓",
              meaning: "Old sellers leaving → uptrend is weak",
              priceColor: "text-[#44E5A0]",
              oiColor: "text-[#FF5252]",
            },
            {
              price: "↓",
              oi: "↑",
              meaning: "New sellers joining → downtrend is strong",
              priceColor: "text-[#FF5252]",
              oiColor: "text-[#44E5A0]",
            },
            {
              price: "↓",
              oi: "↓",
              meaning: "Old buyers leaving → downtrend is weak",
              priceColor: "text-[#FF5252]",
              oiColor: "text-[#FF5252]",
            },
          ].map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[63px_63px_1fr] ${
                i < 3 ? "border-b border-[#2A2A2A]/60" : ""
              }`}
            >
              <div
                className={`flex items-center justify-center px-[16px] py-[12px] text-[16px] font-bold ${row.priceColor}`}
              >
                {row.price}
              </div>
              <div
                className={`flex items-center justify-center px-[16px] py-[12px] text-[16px] font-bold ${row.oiColor}`}
              >
                {row.oi}
              </div>
              <div className="px-[16px] py-[12px] text-[14px] text-[#9B9B9B]">
                {row.meaning}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Bottom highlight */}
      <AnimatedSection delay={0.3} className="mt-[32px]">
        <div className="rounded-[4px] border-l-[3px] border-[#44E5A0] bg-[#1A1A1A] px-[16px] py-[16px]">
          <p className="text-[14px] italic leading-[20px] text-[#9B9B9B]">
            <span className="text-white">Price</span> tells you what is
            happening.
            <br />
            <span className="text-white">OI</span> tells you whether traders
            actually believe in it.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Problem ───────────────────────────────────────────── */

const Problem = () => (
  <section className="px-6 sm:px-0">
    <div className="mx-auto w-full max-w-[1080px]">
      <div className="mx-auto w-[400px] max-w-full">
        <AnimatedSection>
          <span className={SECTION_LABEL_CLASSES}>Problem</span>
          <div className="mt-[28px]">
            <h2 className="text-[16px] font-semibold leading-[24px] text-white">
              OI data existed — but it was unusable
            </h2>
            <p className="mt-[16px] text-[14px] leading-[20px] text-[#9B9B9B]">
              Currently on the platform we show OI in option chain/chart — very
              small bars just for indication but no detailed info is given
              anywhere.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.1} className="mt-[56px]">
        <div className="mx-auto w-[560px] max-w-full overflow-hidden rounded-[8px] border border-[#2A2A2A]">
          <Image
            src="/open-interest/problem-option-chain.webp"
            alt="Existing platform: open interest only as small bars in the option chain"
            width={560}
            height={300}
            className="h-auto w-full"
            sizes="(max-width: 560px) 100vw, 560px"
          />
        </div>
      </AnimatedSection>

      <div className="mx-auto w-[400px] max-w-full">
        <AnimatedSection delay={0.15} className="mt-[56px]">
          <p className={BODY_TEXT_CLASSES}>
            Also according to market analysis Standard trading tools show this
            data in massive, boring tables. Pre-market and post-market,
            that&apos;s fine — you have time to analyze.
          </p>
          <p className="mt-[16px] text-[14px] font-medium leading-[20px] text-white">
            But In the heat of a fast trade, trying to read a spreadsheet is a
            great way to lose money.
          </p>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.2} className="mt-[56px]">
        <div className="mx-auto max-w-[525px]">
          <div className="overflow-hidden rounded-[8px] border border-[#2A2A2A]">
            <Image
              src="/open-interest/problem-traders-graphic.webp"
              alt="Examples of spreadsheets and informal layouts traders use when discussing open interest"
              width={525}
              height={216}
              className="h-auto w-full"
              sizes="(max-width: 525px) 100vw, 525px"
            />
          </div>
          <p className="mt-[12px] text-center text-[12px] leading-[18px] text-[#6B6B6B]">
            What traders use to discuss
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Solution ──────────────────────────────────────────── */

const Solution = () => (
  <section className="px-6 sm:px-0">
    <div className="mx-auto w-[400px] max-w-full">
      <AnimatedSection>
        <span className={SECTION_LABEL_CLASSES}>solution</span>
        <div className="mt-[28px]">
          <p className="text-[14px] leading-[20px] text-white">
            Create a tool where a trader can understand the market&apos;s
            &quot;mood&quot; in blink of an eye.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Process ──────────────────────────────────────────── */

const Process = () => (
  <section className="px-6 sm:px-0">
    <div className="mx-auto w-[400px] max-w-full">
      <AnimatedSection>
        <span className={SECTION_LABEL_CLASSES}>Process</span>
        <div className="mt-[28px]">
          <p className={BODY_TEXT_CLASSES}>
            Before pixels hit the screen, I conducted a deep dive into how other
            platforms handle Open Interest. I found that the market was split
            into two extremes, leaving a massive gap for a better user
            experience.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-[56px]">
        <h3 className="text-[16px] font-semibold leading-[24px] text-white">
          Market analysis
        </h3>
      </AnimatedSection>

      {/* Feature-Poor */}
      <AnimatedSection delay={0.15} className="mt-[40px]">
        <p className={BODY_TEXT_CLASSES}>
          <span className="font-semibold text-white">
            The &quot;Feature-Poor&quot; Platforms:
          </span>{" "}
          Some players tried to keep it simple but ended up being useless. They
          lacked critical data Time-Basis tracking, leaving traders with an
          incomplete picture
        </p>
        <div className="mt-[32px]">
          <div className="overflow-hidden rounded-[8px] border border-[#2A2A2A]">
            <Image
              src="/open-interest/process-upstox.webp"
              alt="Upstox open interest tool reference"
              width={400}
              height={292}
              className="h-auto w-full"
              sizes="(max-width: 400px) 100vw, 400px"
            />
          </div>
          <p className="mt-[12px] text-[12px] leading-[18px] text-[#6B6B6B]">
            Upstox open interest tool
          </p>
        </div>
      </AnimatedSection>

      {/* Data-Dump */}
      <AnimatedSection delay={0.2} className="mt-[56px]">
        <p className={BODY_TEXT_CLASSES}>
          <span className="font-semibold text-white">
            The &quot;Data-Dump&quot; Platforms:
          </span>{" "}
          On the other end, professional tools were &quot;over-doing it.&quot;
          They were cluttered with 50 buttons, confusing jargon, and messy
          layouts. They were powerful, but they required a PhD to navigate.
        </p>
        <div className="mt-[32px]">
          <div className="overflow-hidden rounded-[8px] border border-[#2A2A2A]">
            <Image
              src="/open-interest/process-sensibull.webp"
              alt="Sensibull open interest tool reference"
              width={400}
              height={211}
              className="h-auto w-full"
              sizes="(max-width: 400px) 100vw, 400px"
            />
          </div>
          <p className="mt-[12px] text-[12px] leading-[18px] text-[#6B6B6B]">
            Sensibull open interest tool
          </p>
        </div>
      </AnimatedSection>

      {/* Gap highlight */}
      <AnimatedSection delay={0.25} className="mt-[16px]">
        <div className="rounded-[4px] border-l-[3px] border-[#44E5A0] bg-[#1A1A1A] px-[16px] py-[16px]">
          <p className="text-[14px] leading-[20px] text-[#9B9B9B]">
            <span className="font-semibold text-white">The gap:</span> Nobody
            was building a tool that had the{" "}
            <span className="font-bold text-white">&quot;muscle&quot;</span> of
            a professional platform but the{" "}
            <span className="font-bold text-white">
              &quot;cleanliness&quot;
            </span>{" "}
            of a consumer app.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Design Solution ──────────────────────────────────── */

const DesignSolution = () => {
  const [timeLens, setTimeLens] = useState<TimeLens>("intraday");
  const [switchTab, setSwitchTab] =
    useState<SwitchViewTab>("openInterest");

  const handleTimeTabKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      setTimeLens((prev) => {
        const idx = prev === "intraday" ? 0 : 1;
        const delta = e.key === "ArrowRight" ? 1 : -1;
        const next = (idx + delta + 2) % 2;
        return next === 0 ? "intraday" : "historical";
      });
    },
    []
  );

  const handleSwitchTabKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      setSwitchTab((prev) => {
        const idx = SWITCH_TAB_ORDER.indexOf(prev);
        const delta = e.key === "ArrowRight" ? 1 : -1;
        const next =
          (idx + delta + SWITCH_TAB_ORDER.length) %
          SWITCH_TAB_ORDER.length;
        return SWITCH_TAB_ORDER[next];
      });
    },
    []
  );

  const timeMedia = TIME_LENS_MEDIA[timeLens];
  const switchMedia = SWITCH_TAB_MEDIA[switchTab];

  const tabPillInactive =
    "text-[#6B6B6B] hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44E5A0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]";
  const tabPillActive =
    "bg-[#2A2A2A] font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44E5A0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]";

  return (
    <section className="px-6 sm:px-0">
      <div className="mx-auto w-full max-w-[936px]">
        <div className="mx-auto w-[400px] max-w-full">
          <AnimatedSection>
            <span className={SECTION_LABEL_CLASSES}>
              The Design Solution: Sophisticated Simplicity
            </span>
            <div className="mt-[28px]">
              <p className={BODY_TEXT_CLASSES}>
                My goal was to bridge this gap. I wanted to build a tool that had
                the &quot;muscle&quot; of a professional platform but the
                &quot;cleanliness&quot; of a consumer app.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.05} className="mt-[32px]">
            <div className="rounded-[4px] border-l-[3px] border-[#44E5A0] bg-[#1A1A1A] px-[16px] py-[16px]">
              <h3 className="text-[14px] font-semibold leading-[18px] text-white">
                The Philosophy: &quot;Don&apos;t Make Me Think&quot;
              </h3>
              <p className="mt-[16px] text-[14px] leading-[20px] text-[#9B9B9B]">
                In trading, cognitive load is the enemy. By choosing the
                visual-first approach, I stripped away the &quot;noise.&quot; I
                didn&apos;t just give users more data; I gave them better
                clarity. We focused on making the most important numbers
                impossible to miss.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1} className="mt-[32px]">
          <video
            className="mx-auto w-full max-w-[658px] overflow-hidden rounded-[8px] border border-[#2A2A2A] bg-black"
            controls
            playsInline
            preload="auto"
            aria-label="Short walkthrough of the Open Interest tool interaction and layout"
          >
            <source src="/open-interest/design-intro.mp4" type="video/mp4" />
          </video>
        </AnimatedSection>

        <div className="mx-auto w-[400px] max-w-full">
          <AnimatedSection delay={0.15} className="mt-[40px]">
            <h3 className="text-[16px] font-semibold leading-[24px] text-white">
              Key disctinctions
            </h3>
            <p className="mt-[8px] text-[14px] leading-[20px] text-[#6B6B6B]">
              These were the choices that made the biggest impact.
            </p>
          </AnimatedSection>
        </div>

        <div className="mx-auto w-[400px] max-w-full">
          <AnimatedSection delay={0.1} className="mt-[48px]">
            <h4 className="text-[16px] font-semibold leading-[24px] text-white">
              Color &amp; Pattern Language for Call vs Put OI
            </h4>
            <p className="mt-[16px] text-[14px] leading-[20px] text-[#9B9B9B]">
              Calls and Puts are the two sides of every options trade —
              confusing them is a real, costly mistake. We built a clear visual
              language: distinct colors for Call vs Put bars, distinct patterns
              for OI increase vs decrease.
            </p>
            <div className="mt-[16px] flex justify-center">
              <div className="overflow-hidden rounded-[8px] border border-[#2A2A2A]">
                <Image
                  src="/open-interest/design-feature-color.webp"
                  alt="Color and pattern language for call versus put open interest"
                  width={320}
                  height={320}
                  className="h-[320px] w-[320px] object-cover"
                  sizes="320px"
                />
              </div>
            </div>
            <p className={`mt-[16px] ${ITALIC_CAPTION_CLASSES}`}>
              A trader can read the entire chart&apos;s story — who&apos;s
              buying, who&apos;s selling, on which side — without reading a
              single number.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-[72px]">
            <h4 className="text-[16px] font-semibold leading-[24px] text-white">
              Smart Labels — &quot;Strong Support&quot; / &quot;Strong
              Resistance&quot;
            </h4>
            <p className="mt-[16px] text-[14px] leading-[20px] text-[#9B9B9B]">
              Instead of forcing users to scan every strike and figure out which
              ones matter, the tool calls them out directly. Tags like
              &quot;Strong Support&quot; and &quot;Strong Resistance&quot; sit
              right on the most important bars.
            </p>
            <div className="mt-[16px] flex justify-center">
              <div className="overflow-hidden rounded-[8px] border border-[#2A2A2A]">
                <Image
                  src="/open-interest/design-feature-labels.webp"
                  alt="Smart labels for strong support and resistance on the OI chart"
                  width={320}
                  height={320}
                  className="h-[320px] w-[320px] object-cover"
                  sizes="320px"
                />
              </div>
            </div>
            <p className={`mt-[16px] ${ITALIC_CAPTION_CLASSES}`}>
              The user doesn&apos;t go looking for the signal — the signal finds
              them.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-[72px]">
            <h4 className="text-[16px] font-semibold leading-[24px] text-white">
              The Sentiment Pulse — PCR Gauge
            </h4>
            <p className="mt-[16px] text-[14px] leading-[20px] text-[#9B9B9B]">
              I placed the Put-Call Ratio (PCR) in the top-right &quot;Prime Real
              Estate.&quot;
            </p>
            <p className="mt-[16px] text-[14px] leading-[20px] text-[#9B9B9B]">
              Instead of just a raw number, the gauge includes a clear text badge
              (e.g., &quot;1.22 Bullish&quot;). This gives the trader a
              &quot;Market Pulse&quot; the moment the page loads, setting the
              context for the rest of their analysis.
            </p>
            <div className="mt-[16px] flex justify-center">
              <div className="overflow-hidden rounded-[8px] border border-[#2A2A2A]">
                <Image
                  src="/open-interest/design-feature-pcr.webp"
                  alt="Put–call ratio gauge with sentiment badge"
                  width={320}
                  height={320}
                  className="h-[320px] w-[320px] object-cover"
                  sizes="320px"
                />
              </div>
            </div>
            <p className={`mt-[16px] ${ITALIC_CAPTION_CLASSES}`}>
              The user doesn&apos;t go looking for the signal — the signal finds
              them.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1} className="mt-[72px]">
          <div className="mx-auto w-[400px] max-w-full">
            <h4 className="text-[16px] font-semibold leading-[24px] text-white">
              Time-Based Views — Intraday &amp; Historical
            </h4>
            <p className="mt-[16px] text-[14px] leading-[20px] text-[#9B9B9B]">
              OI data changes every minute during live trading. A trader needs two
              lenses: what&apos;s happening{" "}
              <span className="text-white">right now</span> (intraday) and
              what&apos;s been building over{" "}
              <span className="text-white">days</span> (historical). We gave
              both in one screen, toggled with a single tap.
            </p>

            <div className="mt-[16px] flex justify-center">
              <div
                role="tablist"
                aria-label="Time lens"
                className="flex rounded-full border border-[#2A2A2A] bg-[#1A1A1A] p-[4px]"
                onKeyDown={handleTimeTabKeyDown}
              >
                <button
                  type="button"
                  role="tab"
                  id="tab-time-intraday"
                  aria-selected={timeLens === "intraday"}
                  aria-controls="panel-time-lens"
                  tabIndex={timeLens === "intraday" ? 0 : -1}
                  className={`rounded-full px-[20px] py-[8px] text-[14px] ${
                    timeLens === "intraday" ? tabPillActive : tabPillInactive
                  }`}
                  onClick={() => setTimeLens("intraday")}
                >
                  Intraday
                </button>
                <button
                  type="button"
                  role="tab"
                  id="tab-time-historical"
                  aria-selected={timeLens === "historical"}
                  aria-controls="panel-time-lens"
                  tabIndex={timeLens === "historical" ? 0 : -1}
                  className={`rounded-full px-[20px] py-[8px] text-[14px] ${
                    timeLens === "historical" ? tabPillActive : tabPillInactive
                  }`}
                  onClick={() => setTimeLens("historical")}
                >
                  Historical
                </button>
              </div>
            </div>
          </div>

          <div
            id="panel-time-lens"
            role="tabpanel"
            aria-labelledby={
              timeLens === "intraday"
                ? "tab-time-intraday"
                : "tab-time-historical"
            }
            className="mx-auto mt-[16px] w-full max-w-[749px] overflow-hidden rounded-[8px] border border-[#2A2A2A]"
          >
            <Image
              key={timeLens}
              src={timeMedia.src}
              alt={timeMedia.alt}
              width={749}
              height={460}
              className="h-auto w-full"
              sizes="(max-width: 749px) 100vw, 749px"
            />
          </div>

          <div className="mx-auto w-[400px] max-w-full">
            <p className={`mt-[16px] ${ITALIC_CAPTION_CLASSES}`}>
              The user doesn&apos;t go looking for the signal — the signal finds
              them.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-[72px]">
          <div className="mx-auto w-[400px] max-w-full">
            <h4 className="text-[16px] font-semibold leading-[24px] text-white">
              Switchable Views — OI, OI Change, PCR
            </h4>
            <p className="mt-[16px] text-[14px] leading-[20px] text-[#9B9B9B]">
              Different decisions need different lenses. Tabs let users toggle
              between OI, OI Change, and PCR views without losing their place.
            </p>

            <div className="mt-[16px] flex justify-center">
              <div
                role="tablist"
                aria-label="Open interest metric"
                className="flex flex-wrap justify-center gap-0 rounded-full border border-[#2A2A2A] bg-[#1A1A1A] p-[4px]"
                onKeyDown={handleSwitchTabKeyDown}
              >
                {SWITCH_TAB_ORDER.map((id) => {
                  const { label } = SWITCH_TAB_MEDIA[id];
                  const selected = switchTab === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      role="tab"
                      id={`tab-switch-${id}`}
                      aria-selected={selected}
                      aria-controls="panel-switch-view"
                      tabIndex={selected ? 0 : -1}
                      className={`rounded-full px-[16px] py-[8px] text-[14px] ${
                        selected ? tabPillActive : tabPillInactive
                      }`}
                      onClick={() => setSwitchTab(id)}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            id="panel-switch-view"
            role="tabpanel"
            aria-labelledby={`tab-switch-${switchTab}`}
            className="mx-auto mt-[16px] w-full max-w-[936px] overflow-hidden rounded-[8px] border border-[#2A2A2A]"
          >
            <Image
              key={switchTab}
              src={switchMedia.src}
              alt={switchMedia.alt}
              width={800}
              height={492}
              className="h-auto w-full"
              sizes="(max-width: 936px) 100vw, 936px"
            />
          </div>

          <div className="mx-auto w-[400px] max-w-full">
            <p className={`mt-[16px] ${ITALIC_CAPTION_CLASSES}`}>
              One screen, three perspectives — chosen by the trader, not forced
              by the layout.
            </p>
          </div>
        </AnimatedSection>

        <div className="mx-auto w-[400px] max-w-full">
          <AnimatedSection delay={0.1} className="mt-[72px]">
            <h4 className="text-[16px] font-semibold leading-[24px] text-white">
              OI Action Cues on the Chart
            </h4>
            <p className="mt-[16px] text-[14px] leading-[20px] text-[#9B9B9B]">
              This was quietly the most important one. Visual cues directly on
              the chart show what&apos;s happening at each strike — long
              buildup, short covering, fresh shorts, unwinding — without the
              trader needing to compare numbers across rows.
            </p>
            <div className="mt-[16px] flex justify-center">
              <div className="w-full max-w-[560px] overflow-hidden rounded-[8px] border border-[#2A2A2A]">
                <Image
                  src="/open-interest/oi-action-cues.webp"
                  alt="Open interest in context: PCR, strike stepping, call and put OI, and long buildup cue on the chart"
                  width={1024}
                  height={969}
                  className="h-auto w-full"
                  sizes="(max-width: 560px) 100vw, 560px"
                />
              </div>
            </div>
            <p className={`mt-[16px] ${ITALIC_CAPTION_CLASSES}`}>
              You glance. You know the trend at that strike. You move on.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

/* ─── Results ──────────────────────────────────────────── */

const Results = () => {
  const metrics = [
    {
      metric: "Daily users",
      result: "1 in 3 use it daily",
      meaning: "One of the mos used tool",
    },
    {
      metric: "Traders using it",
      result: "1 in 3 check before trading",
      meaning: "Impacts real trades",
    },
    {
      metric: "Clicks per user",
      result: "3.8 (highest)",
      meaning: "High engagement",
    },
    {
      metric: "Retention",
      result: "30.8% return often",
      meaning: "People build a habit",
    },
  ];

  return (
    <section className="px-6 sm:px-0">
      <div className="mx-auto w-[400px] max-w-full">
        <AnimatedSection>
          <span className={SECTION_LABEL_CLASSES}>THE RESULT</span>
          <div className="mt-[28px]">
            <p className={BODY_TEXT_CLASSES}>
              What started as a fix for messy data became a go-to tool for making
              trading decisions.
            </p>
          </div>
        </AnimatedSection>

        {/* For users */}
        <AnimatedSection delay={0.1} className="mt-[32px]">
          <p className="text-[14px] leading-[20px]">
            <span aria-hidden="true">&#x1F464; </span>
          </p>
          <h3 className="mt-[4px] text-[16px] font-semibold leading-[24px] text-white">
            For users
          </h3>

          <div className="mt-[24px] space-y-[24px]">
            <div>
              <h4 className="text-[14px] font-semibold leading-[20px] text-white">
                Faster decisions
              </h4>
              <p className="mt-[4px] text-[14px] leading-[20px] text-[#6B6B6B]">
                Users stopped reading rows of numbers and started understanding
                the market at a glance.
              </p>
            </div>
            <div>
              <h4 className="text-[14px] font-semibold leading-[20px] text-white">
                More clarity, less guesswork
              </h4>
              <p className="mt-[4px] text-[14px] leading-[20px] text-[#6B6B6B]">
                Seeing high OI zones helped users know where big money is and
                what matters.
              </p>
            </div>
            <div>
              <h4 className="text-[14px] font-semibold leading-[20px] text-white">
                Helps users learn
              </h4>
              <p className="mt-[4px] text-[14px] leading-[20px] text-[#6B6B6B]">
                With past data, users could review moves, test ideas, and improve
                over time.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* For business */}
        <AnimatedSection delay={0.15} className="mt-[32px]">
          <p className="text-[14px] leading-[20px]">
            <span aria-hidden="true">&#x1F4C8;</span>
          </p>
          <h3 className="mt-[4px] text-[16px] font-semibold leading-[24px] text-white">
            For the business
          </h3>
          <p className="mt-[16px] text-[14px] leading-[20px] text-[#6B6B6B]">
            The tool wasn&apos;t just explored — people started using it every
            day while trading.
          </p>
        </AnimatedSection>

        {/* Metrics table — wider than text column per Figma (503px) */}
        <AnimatedSection delay={0.2} className="mt-[32px]">
          <div className="-mx-[52px] overflow-hidden rounded-[8px] border border-[#2A2A2A]">
            {/* Table Header */}
            <div className="grid grid-cols-[125px_195px_1fr] border-b border-[#2A2A2A] bg-[#1A1A1A]">
              <div className="px-[16px] py-[12px] text-[14px] font-medium text-[#9B9B9B]">
                Metric
              </div>
              <div className="px-[16px] py-[12px] text-[14px] font-medium text-[#9B9B9B]">
                Result
              </div>
              <div className="px-[16px] py-[12px] text-[14px] font-medium text-[#9B9B9B]">
                Meaning
              </div>
            </div>
            {/* Table Rows */}
            {metrics.map((row, i) => (
              <motion.div
                key={row.metric}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`grid grid-cols-[125px_195px_1fr] ${
                  i < metrics.length - 1
                    ? "border-b border-[#2A2A2A]/60"
                    : ""
                }`}
              >
                <div className="px-[16px] py-[12px] text-[14px] text-[#9B9B9B]">
                  {row.metric}
                </div>
                <div className="px-[16px] py-[12px] text-[14px] font-medium text-[#44E5A0]">
                  {row.result}
                </div>
                <div className="px-[16px] py-[12px] text-[14px] text-[#9B9B9B]">
                  {row.meaning}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

/* ─── Footer ────────────────────────────────────────────── */

const Footer = () => (
  <footer className="px-6 py-[40px] text-center sm:px-0">
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-[14px] font-medium text-[#6B6B6B] transition-colors hover:text-white"
      aria-label="Back to all case studies"
      tabIndex={0}
    >
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      All case studies
    </Link>
  </footer>
);

/* ─── Page ──────────────────────────────────────────────── */

const OpenInterestPage = () => {
  useEffect(() => {
    for (const src of OPEN_INTEREST_PRELOAD_URLS) {
      const img = document.createElement("img");
      img.src = src;
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#0C0C0C]">
      <Nav />
      <Hero />

      <div className="space-y-[56px] pb-[80px]">
        <Context />
        <Divider />
        <WhatIsOI />
        <Divider />
        <Problem />
        <Divider />
        <Solution />
        <Divider />
        <Process />
        <Divider />
        <DesignSolution />
        <Divider />
        <Results />
      </div>

      <Footer />
    </main>
  );
};

export default OpenInterestPage;
