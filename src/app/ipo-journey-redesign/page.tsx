"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
};

const Navbar = () => (
  <nav
    className="flex items-center justify-between px-[72px] h-[88px]"
    role="navigation"
    aria-label="Case study navigation"
  >
    <Link href="/" aria-label="Back to home">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="20" fill="#5367FF" />
        <path
          d="M20 8C13.373 8 8 13.373 8 20s5.373 12 12 12c3.314 0 6.314-1.343 8.485-3.515"
          stroke="#00D09C"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M20 8c6.627 0 12 5.373 12 12s-5.373 12-12 12"
          fill="#00D09C"
          opacity="0.9"
        />
      </svg>
    </Link>
    <span
      className="text-xs font-medium tracking-[0.2em] uppercase text-[#1F2937]"
      style={{ fontSize: "12px", letterSpacing: "0.2em" }}
    >
      CASE STUDY
    </span>
  </nav>
);

const HeroSection = () => (
  <section className="px-[72px] pt-[32px] pb-0">
    <div
      className="relative flex items-start justify-between"
      style={{ height: "507px" }}
    >
      <motion.div
        {...fadeUp}
        className="pt-[70px]"
        style={{ maxWidth: "362px" }}
      >
        <h1
          className="font-bold text-[#1F2937] leading-[1.15]"
          style={{ fontSize: "56px" }}
        >
          IPO Journey
          <br />
          Redesign
        </h1>
        <p
          className="mt-5 text-[#6B7280]"
          style={{ fontSize: "16px", lineHeight: "20px" }}
        >
          Making IPO investing simpler, faster, and more transparent
        </p>
      </motion.div>

      {/* Graphic placeholder */}
      <div
        className="flex-shrink-0"
        style={{ width: "646px", height: "507px" }}
        aria-hidden="true"
      />
    </div>
  </section>
);

const SectionDivider = () => (
  <div className="flex justify-center" style={{ padding: "0 340px 0 340px" }}>
    <hr
      className="border-t border-[#E5E7EB] w-full"
      style={{ maxWidth: "400px" }}
    />
  </div>
);

const ContentDivider = () => (
  <hr className="border-t border-[#E5E7EB]" style={{ width: "100px" }} />
);

type CheckItemProps = {
  text: string;
};

const CheckItem = ({ text }: CheckItemProps) => (
  <div className="flex items-start gap-2" style={{ height: "20px" }}>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="mt-[2px] flex-shrink-0"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="8" fill="#00D09C" opacity="0.15" />
      <path
        d="M5 8l2 2 4-4"
        stroke="#00D09C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span
      className="text-[#374151]"
      style={{ fontSize: "14px", lineHeight: "20px" }}
    >
      {text}
    </span>
  </div>
);

type NumberedItemProps = {
  number: number;
  text: string;
};

const NumberedItem = ({ number, text }: NumberedItemProps) => (
  <div className="flex items-start gap-[6px]" style={{ height: "20px" }}>
    <div
      className="flex items-center justify-center rounded-sm bg-[#F3F4F6] flex-shrink-0"
      style={{ width: "20px", height: "20px" }}
    >
      <span
        className="text-[#6B7280] font-medium"
        style={{ fontSize: "12px" }}
      >
        {number}
      </span>
    </div>
    <span
      className="text-[#374151]"
      style={{ fontSize: "14px", lineHeight: "20px" }}
    >
      {text}
    </span>
  </div>
);

type ProblemBoxProps = {
  children: React.ReactNode;
};

const ProblemBox = ({ children }: ProblemBoxProps) => (
  <div
    className="bg-[#FEF2F2] border-l-[3px] border-[#EF4444] rounded-r-lg"
    style={{ padding: "16px" }}
  >
    {children}
  </div>
);

type DesignPrincipleBoxProps = {
  children: React.ReactNode;
};

const DesignPrincipleBox = ({ children }: DesignPrincipleBoxProps) => (
  <div
    className="bg-[#FEF2F2] border-l-[3px] border-[#EF4444] rounded-r-lg"
    style={{ padding: "16px" }}
  >
    {children}
  </div>
);

type NewOldToggleProps = {
  className?: string;
};

const NewOldToggle = ({ className = "" }: NewOldToggleProps) => (
  <div
    className={`flex items-center justify-center ${className}`}
  >
    <div
      className="flex rounded-full border border-[#E5E7EB] overflow-hidden"
      style={{ height: "34px" }}
    >
      <div
        className="flex items-center justify-center bg-[#1F2937] text-white rounded-full"
        style={{
          width: "56px",
          height: "26px",
          margin: "4px",
          fontSize: "14px",
        }}
      >
        New
      </div>
      <div
        className="flex items-center justify-center text-[#6B7280]"
        style={{
          width: "56px",
          height: "26px",
          margin: "4px",
          fontSize: "14px",
        }}
      >
        Old
      </div>
    </div>
  </div>
);

const ContextSection = () => (
  <motion.div {...fadeUp} className="flex" style={{ gap: "0" }}>
    <div className="flex-shrink-0" style={{ width: "340px" }}>
      <span
        className="uppercase font-medium tracking-[0.15em] text-[#6B7280]"
        style={{ fontSize: "12px" }}
      >
        Context
      </span>
    </div>
    <div style={{ width: "400px" }}>
      <div style={{ marginBottom: "32px" }}>
        <p
          className="text-[#374151] font-medium"
          style={{ fontSize: "14px", lineHeight: "20px" }}
        >
          IPO is a high-intent but confusing journey. Users struggle with:
        </p>
        <div className="flex flex-col" style={{ gap: "12px", marginTop: "16px" }}>
          <NumberedItem number={1} text="Discovering relevant IPOs" />
          <NumberedItem number={2} text="Applying without friction" />
          <NumberedItem
            number={3}
            text="Aftermath after applying & Waiting for the IPO allotment"
          />
        </div>
      </div>

      <div
        className="bg-[#F9FAFB] rounded-lg"
        style={{ padding: "16px", marginLeft: "-88px", width: "576px" }}
      >
        <p
          className="text-[#374151] font-medium"
          style={{ fontSize: "14px", lineHeight: "18px" }}
        >
          We redesigned the end to end IPO journey across:
        </p>
        <div
          className="flex items-center"
          style={{ gap: "16px", marginTop: "16px" }}
        >
          <div
            className="bg-white rounded-md border border-[#E5E7EB]"
            style={{ width: "144px", padding: "12px" }}
          >
            <p
              className="font-medium text-[#374151]"
              style={{ fontSize: "14px", lineHeight: "18px" }}
            >
              Listing Page
            </p>
            <p
              className="text-[#9CA3AF]"
              style={{ fontSize: "14px", lineHeight: "18px" }}
            >
              Discovery
            </p>
          </div>
          <svg width="24" height="1" aria-hidden="true">
            <line
              x1="0"
              y1="0.5"
              x2="24"
              y2="0.5"
              stroke="#D1D5DB"
              strokeWidth="1"
            />
          </svg>
          <div
            className="bg-white rounded-md border border-[#E5E7EB]"
            style={{ width: "144px", padding: "12px" }}
          >
            <p
              className="font-medium text-[#374151]"
              style={{ fontSize: "14px", lineHeight: "18px" }}
            >
              Order Card
            </p>
            <p
              className="text-[#9CA3AF]"
              style={{ fontSize: "14px", lineHeight: "18px" }}
            >
              Conversion
            </p>
          </div>
          <svg width="24" height="1" aria-hidden="true">
            <line
              x1="0"
              y1="0.5"
              x2="24"
              y2="0.5"
              stroke="#D1D5DB"
              strokeWidth="1"
            />
          </svg>
          <div
            className="bg-white rounded-md border border-[#E5E7EB]"
            style={{ width: "144px", padding: "12px" }}
          >
            <p
              className="font-medium text-[#374151]"
              style={{ fontSize: "14px", lineHeight: "18px" }}
            >
              Status Page
            </p>
            <p
              className="text-[#9CA3AF]"
              style={{ fontSize: "14px", lineHeight: "18px" }}
            >
              Post-application clarity
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

type PartSectionProps = {
  partLabel: string;
  title: string;
  problemContent: React.ReactNode;
  goalText: string;
  solutionContent: React.ReactNode;
  graphicPlaceholderHeight?: number;
  afterSolution?: React.ReactNode;
};

const PartSection = ({
  partLabel,
  title,
  problemContent,
  goalText,
  solutionContent,
  graphicPlaceholderHeight = 412,
  afterSolution,
}: PartSectionProps) => (
  <motion.div {...fadeUp} style={{ width: "400px" }}>
    <div style={{ marginBottom: "0" }}>
      <span
        className="uppercase font-medium tracking-[0.15em] text-[#6B7280]"
        style={{ fontSize: "12px", lineHeight: "12px" }}
      >
        {partLabel}
      </span>
      <h2
        className="font-semibold text-[#1F2937]"
        style={{ fontSize: "18px", lineHeight: "24px", marginTop: "8px" }}
      >
        {title}
      </h2>
    </div>

    <div style={{ marginTop: "40px" }}>
      <ProblemBox>{problemContent}</ProblemBox>
    </div>

    <div style={{ marginTop: "40px" }}>
      <ContentDivider />
    </div>

    <div style={{ marginTop: "40px" }}>
      <p
        className="font-semibold text-[#1F2937]"
        style={{ fontSize: "18px", lineHeight: "24px" }}
      >
        🎯 Goal
      </p>
      <p
        className="text-[#374151]"
        style={{ fontSize: "14px", lineHeight: "20px", marginTop: "8px" }}
      >
        {goalText}
      </p>
    </div>

    <div style={{ marginTop: "40px" }}>
      <ContentDivider />
    </div>

    <div style={{ marginTop: "40px" }}>
      <p
        className="font-semibold text-[#1F2937]"
        style={{ fontSize: "18px", lineHeight: "24px" }}
      >
        Solution
      </p>
      <div style={{ marginTop: "8px" }}>{solutionContent}</div>
    </div>

    {/* Graphic placeholder */}
    <div
      className="w-full"
      style={{ height: `${graphicPlaceholderHeight}px`, marginTop: "40px" }}
      aria-hidden="true"
    />

    {afterSolution}
  </motion.div>
);

const Part1Discovery = () => (
  <PartSection
    partLabel="PART 1: DISCOVERY"
    title="Listing Page — From clutter to clarity"
    problemContent={
      <>
        <p
          className="font-semibold text-[#1F2937]"
          style={{ fontSize: "14px", lineHeight: "20px" }}
        >
          Problem
        </p>
        <div style={{ marginTop: "8px" }}>
          <p
            className="text-[#374151]"
            style={{ fontSize: "14px", lineHeight: "20px" }}
          >
            <span className="font-semibold">
              The earlier experience had everything in one long scroll:
            </span>{" "}
            Open IPOs, Applied, Closed, Upcoming. This created{" "}
            <span className="font-semibold">cognitive overload</span> and{" "}
            <span className="font-semibold">
              poor discoverability of relevant IPOs
            </span>
          </p>
          <p
            className="text-[#374151]"
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              marginTop: "8px",
            }}
          >
            <span className="font-semibold">
              Users couldn&apos;t revisit past IPO applications:
            </span>{" "}
            <span className="text-[#9CA3AF]">
              This was not handled from the tech side from a very long time.
            </span>
          </p>
        </div>
      </>
    }
    goalText="Give users intent-based navigation with clear lifecycle visibility."
    solutionContent={
      <>
        <p
          className="text-[#374151]"
          style={{ fontSize: "14px", lineHeight: "20px" }}
        >
          We restructured the entire listing into clear tabs: Open, Applied,
          Closed, Upcoming.
        </p>
        <div
          className="flex flex-col"
          style={{ gap: "12px", marginTop: "24px" }}
        >
          <CheckItem text="Removed long scroll → intent-based tab navigation" />
          <CheckItem text="Each tab shows only relevant information" />
          <CheckItem text="Introduced Past Applications section" />
        </div>
        <NewOldToggle className="mt-10" />
        {/* 4x screen graphic placeholder */}
        <div
          className="w-full"
          style={{ height: "412px", marginTop: "32px" }}
          aria-hidden="true"
        />
      </>
    }
    graphicPlaceholderHeight={0}
    afterSolution={
      <motion.div {...fadeUp} style={{ marginTop: "40px" }}>
        <p
          className="font-semibold text-[#1F2937]"
          style={{ fontSize: "18px", lineHeight: "24px" }}
        >
          Why it works
        </p>
        <div
          className="flex flex-col"
          style={{ gap: "16px", marginTop: "16px" }}
        >
          <CheckItem text="Reduces cognitive load" />
          <CheckItem text="Matches user intent directly" />
          <CheckItem text="Creates a clear lifecycle view of IPOs" />
          <CheckItem text="Adds continuity (before → after investing)" />
        </div>
      </motion.div>
    }
  />
);

const Part2Application = () => (
  <PartSection
    partLabel="PART 2: APPLICATION"
    title="Order Card — From multi-step to one-flow"
    problemContent={
      <>
        <p
          className="font-semibold text-[#1F2937]"
          style={{ fontSize: "14px", lineHeight: "20px" }}
        >
          Problem
        </p>
        <div style={{ marginTop: "8px" }}>
          <p
            className="text-[#374151]"
            style={{ fontSize: "14px", lineHeight: "20px" }}
          >
            Applying for an IPO was{" "}
            <span className="font-semibold">unnecessarily long</span>. The flow
            was: Enter lots → Confirmation (multiple bids) → Payment selection.
          </p>
          <p
            className="text-[#374151]"
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              marginTop: "8px",
            }}
          >
            This led to drop-offs between steps, repetitive confirmations and
            too many page transitions.
          </p>
        </div>
      </>
    }
    goalText='Make IPO application feel like a "one-click experience" without overwhelming users.'
    solutionContent={
      <>
        <p
          className="text-[#374151]"
          style={{ fontSize: "14px", lineHeight: "20px" }}
        >
          We redesigned the order experience into a single unified interface.
        </p>
        <div
          className="flex flex-col"
          style={{ gap: "12px", marginTop: "12px" }}
        >
          <CheckItem text="Lots input + bid details → same screen" />
          <CheckItem text="All bids shown in a scrollable structure" />
          <CheckItem text="Payment selection → integrated within the same flow" />
          <CheckItem text="No page transitions" />
          <CheckItem text="Fundamental improvements on the screen" />
        </div>
        <NewOldToggle className="mt-10" />
        {/* 2-screen graphic placeholder */}
        <div
          className="w-full"
          style={{ height: "421px", marginTop: "32px" }}
          aria-hidden="true"
        />
      </>
    }
    graphicPlaceholderHeight={0}
    afterSolution={
      <>
        <motion.div {...fadeUp} style={{ marginTop: "40px" }}>
          <DesignPrincipleBox>
            <p
              className="font-semibold text-[#1F2937]"
              style={{ fontSize: "14px", lineHeight: "20px" }}
            >
              Design Principle
            </p>
            <p
              className="text-[#374151] italic"
              style={{
                fontSize: "14px",
                lineHeight: "20px",
                marginTop: "6px",
              }}
            >
              Progressive disclosure (show more only when needed) — like payment
              method selection.
            </p>
          </DesignPrincipleBox>
        </motion.div>
        <motion.div {...fadeUp} style={{ marginTop: "40px" }}>
          <p
            className="text-[#1F2937] font-medium"
            style={{ fontSize: "18px", lineHeight: "24px" }}
          >
            ⚡️ Result - Reduces steps → faster completion.
          </p>
        </motion.div>
      </>
    }
  />
);

const Part3PostApplication = () => (
  <PartSection
    partLabel="PART 3: POST-APPLICATION"
    title="IPO Status Page — From ambiguity to transparency"
    problemContent={
      <>
        <p
          className="font-semibold text-[#1F2937]"
          style={{ fontSize: "14px", lineHeight: "20px" }}
        >
          Problem
        </p>
        <div style={{ marginTop: "8px" }}>
          <p
            className="text-[#374151]"
            style={{ fontSize: "14px", lineHeight: "20px" }}
          >
            We faced a surge in queries when there were lots of large IPOs in the
            market. IPO application involves multiple steps dependent on other
            parties: Application confirmation (exchange), UPI mandate (bank),
            Allotment status (RTA), Refund (bank).
          </p>
          <p
            className="text-[#374151]"
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              marginTop: "24px",
            }}
          >
            We didn&apos;t have access to all updates
            <br />
            Users had no visibility into what&apos;s happening
            <br />
            High support queries
          </p>
        </div>
      </>
    }
    goalText="Make the journey transparent and trustworthy."
    solutionContent={
      <>
        <p
          className="text-[#374151] font-medium"
          style={{ fontSize: "14px", lineHeight: "20px" }}
        >
          What can be done
        </p>
        <div
          className="flex flex-col"
          style={{ gap: "12px", marginTop: "12px" }}
        >
          <div className="flex items-start gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="mt-[2px] flex-shrink-0"
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="8" fill="#00D09C" opacity="0.15" />
              <path
                d="M5 8l2 2 4-4"
                stroke="#00D09C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-[#374151]"
              style={{ fontSize: "14px", lineHeight: "20px" }}
            >
              Groww UPI to track mandates, if users applies through Groww UPI, we
              can get from user&apos;s bank to give exact estimates, of sending
              mandates, refund statuses, also even if user doesn&apos;t uses Groww
              UPI, we might not get exact estimates if case of smaller banks, but
              for biggers banks we can ask them to send us estimates
            </span>
          </div>
          <div className="flex items-start gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="mt-[2px] flex-shrink-0"
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="8" fill="#00D09C" opacity="0.15" />
              <path
                d="M5 8l2 2 4-4"
                stroke="#00D09C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-[#374151]"
              style={{ fontSize: "14px", lineHeight: "20px" }}
            >
              For other steps we&apos;ll provide clear information and highlight
              timelines at each step
            </span>
          </div>
        </div>
      </>
    }
    graphicPlaceholderHeight={0}
  />
);

const StatusPageFeatures = () => (
  <div style={{ width: "100%" }}>
    {/* Header */}
    <div className="flex" style={{ padding: "56px 0 0 0" }}>
      <div style={{ width: "340px", flexShrink: 0 }} />
      <motion.div {...fadeUp} style={{ width: "400px" }}>
        <span
          className="uppercase font-medium tracking-[0.15em] text-[#6B7280]"
          style={{ fontSize: "12px" }}
        >
          Status Page — Key Features
        </span>
        <h2
          className="font-semibold text-[#1F2937]"
          style={{ fontSize: "18px", lineHeight: "24px", marginTop: "8px" }}
        >
          Transparency at every step
        </h2>
      </motion.div>
    </div>

    {/* Subtitle text */}
    <div className="flex" style={{ marginTop: "16px" }}>
      <div style={{ width: "340px", flexShrink: 0 }} />
      <motion.div {...fadeUp} style={{ width: "400px" }}>
        <p
          className="text-[#374151]"
          style={{ fontSize: "14px", lineHeight: "20px" }}
        >
          Application confirmation from exchange → Happens instantly
          <br />
          Mandate approval → Dependent on bank
          <br />
          Application placement - involves RTA and exchange
          <br />
          Allotment announcement
        </p>
      </motion.div>
    </div>

    <div className="flex" style={{ marginTop: "32px" }}>
      <div style={{ width: "340px", flexShrink: 0 }} />
      <ContentDivider />
    </div>

    {/* Mandate tracking */}
    <div className="flex" style={{ marginTop: "32px" }}>
      <div style={{ width: "340px", flexShrink: 0 }} />
      <motion.div {...fadeUp} style={{ width: "400px" }}>
        <p
          className="font-semibold text-[#1F2937]"
          style={{ fontSize: "18px", lineHeight: "24px" }}
        >
          Mandate tracking
        </p>
        <p
          className="text-[#374151]"
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            marginTop: "12px",
          }}
        >
          Showing where the mandate will be sent — users can see exactly which
          bank will process their payment. For Groww UPI users, we show exact
          updates. For non-Groww UPI, we show estimates from the user&apos;s bank.
          For smaller banks still being integrated, we communicate clearly.
        </p>
        {/* Graphic placeholder */}
        <div
          style={{ height: "311px", marginTop: "24px" }}
          aria-hidden="true"
        />
      </motion.div>
    </div>

    {/* Actionable status updates */}
    <div className="flex" style={{ marginTop: "64px" }}>
      <div style={{ width: "340px", flexShrink: 0 }} />
      <motion.div {...fadeUp} style={{ width: "400px" }}>
        <p
          className="text-[#374151]"
          style={{ fontSize: "14px", lineHeight: "20px" }}
        >
          Actionable status updates - No need to hunt through the app — actions
          are right on the status screen when needed.
        </p>
        {/* 2 screen graphic placeholder */}
        <div
          style={{ height: "311px", marginTop: "24px" }}
          aria-hidden="true"
        />
      </motion.div>
    </div>

    <div className="flex" style={{ marginTop: "32px" }}>
      <div style={{ width: "340px", flexShrink: 0 }} />
      <ContentDivider />
    </div>

    {/* Allotment expectations & RTA link */}
    <div className="flex" style={{ marginTop: "32px" }}>
      <div style={{ width: "340px", flexShrink: 0 }} />
      <motion.div {...fadeUp} style={{ width: "400px" }}>
        <p
          className="font-semibold text-[#1F2937]"
          style={{ fontSize: "18px", lineHeight: "24px" }}
        >
          Allotment expectations &amp; RTA link
        </p>
        <p
          className="text-[#374151]"
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            marginTop: "12px",
          }}
        >
          If allotment is delayed, we provide a direct link to the RTA site so
          users can check status themselves — reducing support queries
          proactively.
        </p>
        {/* 2 screen graphic placeholder */}
        <div
          style={{ height: "311px", marginTop: "24px" }}
          aria-hidden="true"
        />
      </motion.div>
    </div>

    <div className="flex" style={{ marginTop: "32px" }}>
      <div style={{ width: "340px", flexShrink: 0 }} />
      <ContentDivider />
    </div>

    {/* Mandate tracking second */}
    <div className="flex" style={{ marginTop: "32px" }}>
      <div style={{ width: "340px", flexShrink: 0 }} />
      <motion.div {...fadeUp} style={{ width: "400px" }}>
        <p
          className="font-semibold text-[#1F2937]"
          style={{ fontSize: "18px", lineHeight: "24px" }}
        >
          Mandate tracking
        </p>
        <p
          className="text-[#374151]"
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            marginTop: "12px",
          }}
        >
          With Groww UPI, we show exact refund and allotment updates. Without it,
          we show the best estimates available from the user&apos;s bank.
        </p>
        {/* 2 screen graphic placeholder */}
        <div
          style={{ height: "311px", marginTop: "24px" }}
          aria-hidden="true"
        />
      </motion.div>
    </div>

    {/* Delightful callout */}
    <div className="flex" style={{ marginTop: "64px" }}>
      <div style={{ width: "340px", flexShrink: 0 }} />
      <motion.div {...fadeUp} style={{ width: "400px" }}>
        <div
          className="bg-[#FEF2F2] border-l-[3px] border-[#EF4444] rounded-r-lg"
          style={{ padding: "16px" }}
        >
          <p
            className="text-[#374151]"
            style={{ fontSize: "14px", lineHeight: "20px" }}
          >
            🎉 Delightful when allotted - A celebratory experience when users
            get their IPO shares — making the long wait worth it.
          </p>
        </div>
        {/* Single screen graphic placeholder */}
        <div
          className="flex justify-center"
          style={{ marginTop: "24px" }}
        >
          <div
            style={{ width: "160px", height: "311px" }}
            aria-hidden="true"
          />
        </div>
      </motion.div>
    </div>
  </div>
);

const ImpactSection = () => (
  <motion.div {...fadeUp} className="flex">
    <div className="flex-shrink-0" style={{ width: "340px" }}>
      <span
        className="uppercase font-medium tracking-[0.15em] text-[#6B7280]"
        style={{ fontSize: "12px" }}
      >
        impact
      </span>
    </div>
    <div style={{ width: "400px" }}>
      <p
        className="text-[#374151]"
        style={{ fontSize: "14px", lineHeight: "20px" }}
      >
        23.6% reduction in user queries (within 1 month)
        <br />
        Better user confidence post-application.
        <br />
        Users no longer needed to contact support to understand where their IPO
        application stood.
      </p>
    </div>
  </motion.div>
);

const ClosingSection = () => (
  <motion.div {...fadeUp} className="flex">
    <div className="flex-shrink-0" style={{ width: "340px" }}>
      <span
        className="uppercase font-medium tracking-[0.15em] text-[#6B7280]"
        style={{ fontSize: "12px" }}
      >
        closing note
      </span>
    </div>
    <div style={{ width: "400px" }}>
      <p
        className="text-[#374151]"
        style={{ fontSize: "14px", lineHeight: "20px" }}
      >
        This project wasn&apos;t just about UI changes. It was about aligning
        the product with how users think, act, and wait during an IPO journey.
      </p>
    </div>
  </motion.div>
);

const IPOJourneyPage = () => {
  return (
    <main className="min-h-screen bg-white" style={{ maxWidth: "1080px", margin: "0 auto" }}>
      <Navbar />
      <HeroSection />

      {/* Main content area */}
      <div style={{ paddingTop: "56px" }}>
        {/* Context */}
        <div style={{ padding: "0 72px" }}>
          <ContextSection />
        </div>

        {/* Divider */}
        <div className="flex" style={{ margin: "56px 0", padding: "0 72px" }}>
          <div style={{ width: "340px", flexShrink: 0 }} />
          <hr
            className="border-t border-[#E5E7EB]"
            style={{ width: "400px" }}
          />
        </div>

        {/* Part 1: Discovery */}
        <div className="flex" style={{ padding: "0 72px" }}>
          <div style={{ width: "340px", flexShrink: 0 }} />
          <Part1Discovery />
        </div>

        {/* Divider */}
        <div className="flex" style={{ margin: "56px 0", padding: "0 72px" }}>
          <div style={{ width: "340px", flexShrink: 0 }} />
          <hr
            className="border-t border-[#E5E7EB]"
            style={{ width: "400px" }}
          />
        </div>

        {/* Part 2: Application */}
        <div className="flex" style={{ padding: "0 72px" }}>
          <div style={{ width: "340px", flexShrink: 0 }} />
          <Part2Application />
        </div>

        {/* Divider */}
        <div className="flex" style={{ margin: "56px 0", padding: "0 72px" }}>
          <div style={{ width: "340px", flexShrink: 0 }} />
          <hr
            className="border-t border-[#E5E7EB]"
            style={{ width: "400px" }}
          />
        </div>

        {/* Part 3: Post-Application */}
        <div className="flex" style={{ padding: "0 72px" }}>
          <div style={{ width: "340px", flexShrink: 0 }} />
          <Part3PostApplication />
        </div>

        {/* Status Page Key Features */}
        <div style={{ padding: "0 72px", marginTop: "56px" }}>
          <StatusPageFeatures />
        </div>

        {/* Divider before Impact */}
        <div className="flex" style={{ margin: "56px 0", padding: "0 72px" }}>
          <div style={{ width: "340px", flexShrink: 0 }} />
          <hr
            className="border-t border-[#E5E7EB]"
            style={{ width: "400px" }}
          />
        </div>

        {/* Impact */}
        <div style={{ padding: "0 72px" }}>
          <ImpactSection />
        </div>

        {/* Divider before Closing */}
        <div className="flex" style={{ margin: "56px 0", padding: "0 72px" }}>
          <div style={{ width: "340px", flexShrink: 0 }} />
          <hr
            className="border-t border-[#E5E7EB]"
            style={{ width: "400px" }}
          />
        </div>

        {/* Closing */}
        <div style={{ padding: "0 72px", paddingBottom: "80px" }}>
          <ClosingSection />
        </div>
      </div>
    </main>
  );
};

export default IPOJourneyPage;
