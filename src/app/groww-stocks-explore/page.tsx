"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const SectionLabel = ({ label }: { label: string }) => (
  <p
    className="uppercase tracking-[2px] text-[10px] font-medium leading-[12px] text-[#353839]"
    style={{ fontFamily: "'Inter', sans-serif" }}
  >
    {label}
  </p>
);

const Divider = () => (
  <div className="w-full max-w-[400px] mx-auto">
    <div className="h-px bg-[#e0e0e0]" />
  </div>
);

const AccentCard = ({
  borderColor,
  children,
}: {
  borderColor: string;
  children: React.ReactNode;
}) => (
  <div
    className="bg-[#f7f7f7] rounded-tr-[8px] rounded-br-[8px] p-[16px] flex items-start"
    style={{ borderLeft: `3px solid ${borderColor}` }}
  >
    {children}
  </div>
);

const TopBar = () => (
  <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e5e7eb]">
    <div className="max-w-[1080px] mx-auto flex items-center justify-between px-[72px] h-[88px]">
      <Link
        href="/"
        className="flex items-center gap-2 text-[10px] font-medium tracking-[2px] uppercase text-[#353839] hover:opacity-70 transition-opacity"
        aria-label="Back to case studies"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 12L6 8L10 4" stroke="#353839" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        CASE STUDY
      </Link>
    </div>
  </header>
);

const Hero = () => (
  <motion.section
    {...fadeIn}
    className="max-w-[1080px] mx-auto px-[72px] pt-[119px] pb-0"
  >
    <div className="flex gap-0 items-start">
      <div className="pt-[70px] w-[400px] shrink-0">
        <h1
          className="text-[40px] font-medium leading-[48px] text-[#353839] tracking-[0px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Making Stock Discovery Easy on Groww
        </h1>
        <p className="mt-[20px] text-[14px] font-normal leading-[20px] text-[#7f8283]">
          Turning Stocks Explore into a place to research and trade.
        </p>
      </div>
      <div className="flex-1 ml-[14px]" style={{ minHeight: 507 }} />
    </div>
  </motion.section>
);

const Context = () => (
  <motion.section
    {...fadeIn}
    className="max-w-[1080px] mx-auto"
    style={{ paddingLeft: 340, paddingRight: 340 }}
  >
    <div className="w-[400px]">
      <SectionLabel label="Context" />
      <div className="mt-[28px] flex flex-col gap-[32px]">
        <p className="text-[14px] font-normal leading-[20px] text-[#7f8283]">
          Groww <em className="not-italic font-normal italic">grows</em> in transacting users every quarter.
          {"\n"}Users came to Groww only to trade. Everything before that — the
          research, the comparison, the decision — happened somewhere else.
        </p>
        <p className="text-[14px] font-normal leading-[20px] text-[#7f8283]">
          To find out what was working on Groww for the users, we looked at the
          data and noticed:{" "}
          <span className="font-semibold text-[#353839]">
            60% of orders from Stocks Explore came from just two sections:
          </span>{" "}
          Top Market Movers and Most Bought on Stocks Explore.
        </p>
      </div>

      <div className="mt-[32px]">
        <p className="text-[14px] font-normal leading-[17px] text-[#7f8283] mb-[8px]">
          Most used sections on stocks explore
        </p>
        <div className="border border-[#e0e0e0] rounded-[12px] p-[16px] flex flex-col gap-[46px]">
          {[
            { label: "Top market movers", pct: "38%", width: 160 },
            { label: "Most bought on Groww", pct: "22%", width: 110 },
            { label: "Top intraday", pct: "14%", width: 70 },
            { label: "ETFs by Groww", pct: "10%", width: 60 },
            { label: "Stocks in news", pct: "8%", width: 40 },
            { label: "Others", pct: "8%", width: 40 },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-[12px]">
                <span className="text-[14px] leading-[18px] text-[#353839]">
                  {item.label}
                </span>
                <span className="text-[14px] leading-[18px] text-[#353839]">
                  {item.pct}
                </span>
              </div>
              <div className="relative h-[6px]">
                <div className="absolute inset-0 h-px bg-[#e0e0e0] top-[3px]" />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: item.width }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute top-0 h-[6px] rounded-[3px] bg-[#00B386]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

const DataInsight = () => (
  <motion.section
    {...fadeIn}
    className="bg-[#f7f7f7] py-[56px]"
  >
    <div className="max-w-[1080px] mx-auto" style={{ paddingLeft: 340, paddingRight: 340 }}>
      <div className="w-[400px]">
        <SectionLabel label="DATA insight" />
        <div className="mt-[28px] flex flex-col gap-[32px]">
          <p className="text-[14px] font-normal leading-[20px] text-[#7f8283]">
            This meant that the rest of the sections on stocks explore
            wasn&apos;t giving users enough reasons to scroll down, let alone
            interact.
          </p>
          <p className="text-[14px] font-normal leading-[20px] text-[#7f8283]">
            But the traffic was there:{" "}
            <span className="font-semibold text-[#353839]">
              2.8M users visit Explore every day — roughly 35% of app DAU.
            </span>{" "}
            There was a real opportunity: if we could make the rest of the page
            useful, users wouldn&apos;t need to leave Groww for research.
          </p>
        </div>

        <div className="mt-[56px] flex flex-col gap-[16px]">
          {[
            { bold: "2.8M", rest: "daily explore visitors" },
            { bold: "35%", rest: "of daily app DAU" },
            { bold: "60%", rest: "orders from just 2 sections" },
          ].map((item) => (
            <div
              key={item.bold}
              className="bg-white rounded-tr-[8px] rounded-br-[8px] p-[16px] flex items-start"
              style={{ borderLeft: "3px solid #c73a75" }}
            >
              <p className="text-[14px] leading-[normal] text-[#353839]">
                <span className="font-medium italic">{item.bold}</span>{" "}
                <span className="italic text-[#7f8283]">{item.rest}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

const CurrentState = () => (
  <motion.section
    {...fadeIn}
    className="max-w-[1080px] mx-auto py-0"
    style={{ paddingLeft: 340, paddingRight: 340 }}
  >
    <div className="w-[400px]">
      <SectionLabel label="Current state of stocks explore" />
      <div className="mt-[28px] flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[16px]">
          <h2
            className="text-[16px] font-medium leading-[24px] text-[#353839]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            What the page looked like before
          </h2>
          <p className="text-[14px] font-normal leading-[20px] text-[#7f8283]">
            The existing Explore page had basic sections — Most Traded, Top
            Movers, Sectors, ETFs, and News. But they were all flat lists with
            minimal context.
          </p>
        </div>
        <div
          className="mx-auto rounded-[24px] overflow-hidden shadow-lg"
          style={{ width: 199, height: 437 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            aria-label="Screen recording of the old Stocks Explore page"
          >
            <source src="/current-state-explore.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </motion.section>
);

const Problem = () => (
  <motion.section
    {...fadeIn}
    className="max-w-[1080px] mx-auto py-0"
    style={{ paddingLeft: 340, paddingRight: 340 }}
  >
    <div className="w-[400px]">
      <SectionLabel label="problem" />
      <div className="mt-[28px] flex flex-col gap-[24px]">
        <h2
          className="text-[16px] font-medium leading-[24px] text-[#353839]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Stock Explore was a dead-end — not a starting point
        </h2>

        <AccentCard borderColor="#ed5533">
          <p className="text-[14px] font-normal italic leading-[normal] text-[#353839]">
            We were missing users at the start of their journey. People
            weren&apos;t spending much time in the app — they were leaving to
            research elsewhere.
          </p>
        </AccentCard>

        <div className="flex flex-col gap-[16px]">
          {[
            {
              num: "1.",
              bold: "No research layer.",
              rest: " Users couldn\u2019t compare, filter, or deep-dive into stocks without leaving the app.",
            },
            {
              num: "2.",
              bold: "One-size-fits-all.",
              rest: " Beginners and experienced traders saw the same generic surface.",
            },
            {
              num: "3.",
              bold: "Shallow news.",
              rest: " Giving just stock tickers when they trend in news was bland \u2014 no context on what the news was about or why it mattered.",
            },
            {
              num: "4.",
              bold: "No trading signals.",
              rest: " Active traders couldn\u2019t find volume spikes, breakout patterns, or strategy-based screens.",
            },
          ].map((item) => (
            <p
              key={item.bold}
              className="text-[14px] leading-[20px] text-[#7f8283]"
            >
              <span className="text-[#7f8283]">{item.num} </span>
              <span className="font-medium text-[#353839]">{item.bold}</span>
              {item.rest}
            </p>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

const Solution = () => (
  <motion.section
    {...fadeIn}
    className="max-w-[1080px] mx-auto py-0"
    style={{ paddingLeft: 340, paddingRight: 340 }}
  >
    <div className="w-[400px]">
      <SectionLabel label="solution" />
      <p className="mt-[28px] text-[14px] font-normal leading-[20px] text-[#7f8283]">
        We picked Stocks Explore and decided to add more collections because it
        was already the place users came to when they didn&apos;t know what to
        buy — it just wasn&apos;t doing its job. We decided to make a single
        place where users can research, discover, and trade — without leaving the
        app.
      </p>
    </div>
  </motion.section>
);

const UserDiagramConnectors = () => (
  <div className="relative h-[140px] w-[920px] shrink-0" aria-hidden="true">
    <svg
      className="absolute inset-0 size-full text-[#d0d0d0]"
      viewBox="0 0 920 140"
      fill="none"
    >
      {/* Junction centred on 920px canvas; branches align with card centres at 180 and 740 */}
      <path
        d="M460 0 V44 M180 44 H740 M180 44 V140 M740 44 V140"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="square"
      />
    </svg>
  </div>
);

const UnderstandingUsers = () => (
  <motion.section
    {...fadeIn}
    className="w-full bg-[#f7f7f7] pt-[56px] pb-[56px]"
  >
    <div className="mx-auto max-w-[1080px]">
      {/* Frame 119:161421 — x 339, w 402 */}
      <div className="pl-[339px]">
        <div className="w-[402px]">
          <h2
            className="text-[16px] font-medium leading-[24px] text-[#353839]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Understanding our users
          </h2>
          <p className="mt-[16px] text-[14px] font-normal leading-[20px] text-[#7f8283]">
            Groww has a wide mix of users — from someone placing their first trade to
            someone who lives on the charts. We grouped them into two broad types,
            with a few specific styles inside.
          </p>
        </div>
      </div>

      {/* Frame 119:161424 — scroll on narrow viewports so layout isn’t “half” clipped */}
      <div className="mt-[24px] overflow-x-auto overflow-y-visible [-webkit-overflow-scrolling:touch]">
        <div className="ml-[80px] min-w-[920px] pb-[8px]">
          <UserDiagramConnectors />

          {/* Frame 119:161425 — gap 200px; cards min-height from Figma, grow if copy wraps */}
          <div className="flex gap-[200px]">
            <div className="w-[360px] min-h-[182px] shrink-0 rounded-[16px] bg-white p-[24px] shadow-[0px_4px_24px_rgba(53,56,57,0.08)]">
              <p className="text-[30px] leading-[30px]">🤓</p>
              <div className="mt-[12px] max-w-[312px]">
                <h3
                  className="text-[16px] font-medium leading-[24px] text-[#353839]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Beginners
                </h3>
                <div className="mt-[12px] space-y-[12px]">
                  <p className="text-[14px] font-normal italic leading-[20px] text-[#7f8283]">
                    New to investing.
                  </p>
                  <p className="text-[14px] font-normal leading-[20px] text-[#7f8283]">
                    They don&apos;t know where to start, what to look for, or how to read
                    the market. They need ideas, not data.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[360px] min-h-[182px] shrink-0 rounded-[16px] bg-white p-[24px] shadow-[0px_4px_24px_rgba(53,56,57,0.08)]">
              <p className="text-[30px] leading-[30px]">🥸</p>
              <div className="mt-[12px] max-w-[312px]">
                <h3
                  className="text-[16px] font-medium leading-[24px] text-[#353839]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Experienced traders
                </h3>
                <div className="mt-[12px] space-y-[12px]">
                  <p className="text-[14px] font-normal italic leading-[20px] text-[#7f8283]">
                    They know what they want.
                  </p>
                  <p className="text-[14px] font-normal leading-[20px] text-[#7f8283]">
                    They have a strategy and just need quick access to the right
                    information to act on it
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Frame 119:161461 */}
          <div className="mt-[89px] ml-[655px] flex min-h-[28px] w-[180px] items-center rounded-[6px] bg-white px-[10px] py-[4px] shadow-[0px_2px_12px_rgba(53,56,57,0.06)]">
            <p className="text-[14px] leading-[20px] text-[#7f8283] italic">
              within experienced traders
            </p>
          </div>

          {/* Frame 119:161440 */}
          <div className="mt-[105px] ml-[10px] flex min-w-[900px] gap-[90px]">
            {[
              {
                emoji: "📊",
                title: "Intraday traders",
                desc: "Buy and sell within the same day. They watch for sudden spikes in volume and price.",
              },
              {
                emoji: "📈",
                title: "Technical traders",
                desc: "Rely on chart patterns and indicators like RSI, MACD, and Breakouts to decide.",
              },
              {
                emoji: "📰",
                title: "News followers",
                desc: "Track how industries and the broader market are moving, and pick stocks based on those trends.",
              },
            ].map((user) => (
              <div
                key={user.title}
                className="min-h-[148px] w-[240px] shrink-0 rounded-[16px] bg-white p-[16px] shadow-[0px_4px_24px_rgba(53,56,57,0.08)]"
              >
                <p className="text-[16px] leading-[16px]">{user.emoji}</p>
                <div className="mt-[12px] max-w-[208px]">
                  <h3 className="text-[14px] font-medium leading-[20px] text-[#353839]">
                    {user.title}
                  </h3>
                  <p className="mt-[8px] text-[14px] font-normal leading-[20px] text-[#7f8283]">
                    {user.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

const WhatThisMeant = () => (
  <motion.section
    {...fadeIn}
    className="max-w-[1080px] mx-auto py-0"
    style={{ paddingLeft: 339, paddingRight: 339 }}
  >
    <div className="w-[402px] flex flex-col gap-[16px]">
      <h2
        className="text-[16px] font-medium leading-[24px] text-[#353839]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        What this meant for design?
      </h2>
      <p className="text-[14px] font-normal leading-[20px] text-[#7f8283]">
        Each group needed something different on the same screen. So instead of
        one generic &quot;explore&quot; feed, we had to build separate
        collections — each one shaped around how that user actually thinks.
      </p>
    </div>
  </motion.section>
);

const IdealSolution = () => (
  <motion.section
    {...fadeIn}
    className="max-w-[1080px] mx-auto py-0"
    style={{ paddingLeft: 339, paddingRight: 339 }}
  >
    <div className="w-[402px] flex flex-col gap-[16px]">
      <div>
        <p className="text-[32px] leading-[32px]">💡</p>
        <h2
          className="mt-[4px] text-[16px] font-medium leading-[24px] text-[#353839]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          The ideal solution
        </h2>
      </div>
      <div className="text-[14px] font-normal leading-[20px] text-[#7f8283] flex flex-col gap-[16px]">
        <p>
          A fully personalised Stocks Explore, different for every user.
          In theory, we could take existing user data, analyse trading patterns,
          and surface stocks that match each person&apos;s behaviour.
        </p>
        <p>
          For existing users, that&apos;s doable. But new users are a different
          problem — some know investing, some don&apos;t. Even if we ask them
          what they want upfront during onboarding, a beginner often doesn&apos;t
          know the answer yet and might feel overwhelmed.
        </p>
        <p>
          And beyond the user problem, personalisation at that scale is expensive
          — in data, engineering, and time.
        </p>
      </div>

      <AccentCard borderColor="#5669ff">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[14px] font-normal leading-[18px] text-[#353839]">
            So we asked a simpler question first:
          </p>
          <p className="text-[14px] font-semibold leading-[20px] text-[#353839]">
            If we added more, better collections to Stocks Explore — would users
            actually use them?
          </p>
          <p className="text-[14px] font-normal leading-[20px] text-[#7f8283]">
            That answer would tell us whether the demand was there before we
            committed to building something much bigger. New collections were our
            way to validate the need, and lay the foundation for personalisation
            later.
          </p>
        </div>
      </AccentCard>
    </div>
  </motion.section>
);

const DesignPhilosophies = () => (
  <motion.section
    {...fadeIn}
    className="max-w-[1080px] mx-auto py-0"
    style={{ paddingLeft: 339, paddingRight: 339 }}
  >
    <div className="w-[402px]">
      <h2
        className="text-[16px] font-medium leading-[24px] text-[#353839]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Design philosophies to keep in mind
      </h2>
      <div className="mt-[32px] flex flex-col gap-[24px]">
        {[
          {
            bold: "Everyone uses our app:",
            rest: " We have experienced traders who know exactly what they want, and also beginners who need a lot of help and ideas. Our new features had to work for everyone.",
          },
          {
            bold: "Keep it simple:",
            rest: " Groww likes to keep things simple, even when the topic is complicated like finance. So, our new features needed to offer deep info without being confusing or overwhelming.",
          },
          {
            bold: "Easy to find stocks:",
            rest: " We needed to make it super easy for users to find and understand stocks without leaving our app.",
          },
          {
            bold: "Don\u2019t over load the data:",
            rest: " Too much information can scare people away. We had to show enough, but not too much.",
          },
          {
            bold: "Make them come back:",
            rest: " We wanted users to visit the Explore page every day to stay updated on the market.",
          },
        ].map((item) => (
          <AccentCard key={item.bold} borderColor="#5669ff">
            <p className="text-[14px] leading-[20px] text-[#7f8283]">
              <span className="font-medium text-[#353839]">{item.bold}</span>{" "}
              <span className="italic">{item.rest}</span>
            </p>
          </AccentCard>
        ))}
      </div>
    </div>
  </motion.section>
);

const NewCollections = () => (
  <motion.section
    {...fadeIn}
    className="max-w-[1080px] mx-auto py-0"
    style={{ paddingLeft: 340, paddingRight: 340 }}
  >
    <div className="w-[400px]">
      <p className="text-[40px] leading-[40px]">🥁</p>
      <div className="mt-[16px]">
        <SectionLabel label="new stocks explore collections" />
      </div>
      <div className="mt-[28px] flex flex-col gap-[16px]">
        <p className="text-[14px] font-normal leading-[20px] text-[#7f8283]">
          We wanted each collection to be unique and not look like a copy of
          another.
        </p>
        <p className="text-[14px] font-normal leading-[20px] text-[#7f8283]">
          We also made sure to show the right kind of information for each
          section — not just price and price change like we&apos;re doing in
          Most Bought and Top Movers today.
        </p>
      </div>
    </div>
  </motion.section>
);

type CollectionSectionProps = {
  number?: string;
  title: string;
  description: string;
  /** When set, replaces the twin grey mock placeholders with this asset (e.g. Volume shockers flow). */
  figureSrc?: string;
  figureAlt?: string;
};

const CollectionSection = ({
  number,
  title,
  description,
  figureSrc,
  figureAlt,
}: CollectionSectionProps) => (
  <motion.section
    {...fadeIn}
    className="max-w-[1080px] mx-auto py-0"
    style={{ paddingLeft: 197, paddingRight: 197 }}
  >
    <div className="mx-auto" style={{ width: 686 }}>
      <div style={{ paddingLeft: 142 }}>
        <div style={{ width: 402 }}>
          <h3
            className="text-[16px] font-medium leading-[24px] text-[#353839]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {number && <span>{number} </span>}
            {title}
          </h3>
          <p className="mt-[16px] text-[14px] font-normal leading-[20px] text-[#7f8283]">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-[72px] flex justify-center gap-[68px]">
        {figureSrc ? (
          <figure className="m-0 w-full max-w-[686px] px-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={figureSrc}
              alt={
                figureAlt ??
                "Mobile mockup illustrating this Explore collection."
              }
              width={1024}
              height={906}
              className="block h-auto w-full rounded-[12px]"
              loading="lazy"
              decoding="async"
            />
          </figure>
        ) : (
          <>
            <div
              className="rounded-[12px] bg-[#f7f7f7]"
              style={{ width: 240, height: 520 }}
            />
            <div
              className="rounded-[12px] bg-[#f7f7f7]"
              style={{ width: 240, height: 520 }}
            />
          </>
        )}
      </div>
    </div>
  </motion.section>
);

const SectorCollection = () => (
  <motion.section
    {...fadeIn}
    className="max-w-[1080px] mx-auto py-0"
    style={{ paddingLeft: 72, paddingRight: 72 }}
  >
    <div className="mx-auto" style={{ width: 937 }}>
      <div className="mx-auto" style={{ width: 402 }}>
        <h3
          className="text-[16px] font-medium leading-[24px] text-[#353839]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Sector based collections
        </h3>
        <p className="mt-[16px] text-[14px] font-normal leading-[20px] text-[#7f8283]">
          Real advance/decline ratios, not just price changes. Users see how many
          stocks in a sector are up vs down, with visual indicators. On the main
          page, we only show the top 2 best-performing sectors and top 2
          worst-performing sectors. This prevents too much information at once.
          We show the percentage change in price for that sector today. Users can
          then click into a sector to see all the stocks within it.
        </p>
      </div>

      <div className="mt-[72px] flex justify-center gap-[68px]">
        <div
          className="rounded-[12px] bg-[#f7f7f7]"
          style={{ width: 240, height: 520 }}
        />
        <div
          className="rounded-[12px] bg-[#f7f7f7]"
          style={{ width: 240, height: 520 }}
        />
        <div
          className="rounded-[12px] bg-[#f7f7f7]"
          style={{ width: 240, height: 520 }}
        />
      </div>
    </div>
  </motion.section>
);

const NewsRedesign = () => (
  <motion.section
    {...fadeIn}
    className="max-w-[1080px] mx-auto py-0"
    style={{ paddingLeft: 197, paddingRight: 197 }}
  >
    <div className="mx-auto" style={{ width: 565 }}>
      <div className="mx-auto" style={{ width: 402 }}>
        <h3
          className="text-[16px] font-medium leading-[24px] text-[#353839]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          News based - redesign
        </h3>
        <p className="mt-[16px] text-[14px] font-normal leading-[20px] text-[#7f8283]">
          Not just &apos;Stock X is trending&apos; — show the headline, the
          impact, and whether the news is positive or negative for the stock.
          Giving just the stocks when they are trending in news makes it bland —
          news could be about anything. Is it relevant? If yes, what is the news
          about? That&apos;s why we revamped the news section to show stocks with
          news context, impact indicators, and actionable CTAs.
        </p>
      </div>

      <div className="mt-[72px] flex justify-center gap-[68px]">
        <div
          className="rounded-[12px] bg-[#f7f7f7]"
          style={{ width: 240, height: 520 }}
        />
        <div
          className="rounded-[12px] bg-[#f7f7f7]"
          style={{ width: 240, height: 520 }}
        />
      </div>
    </div>
  </motion.section>
);

const FinalLook = () => (
  <motion.section
    {...fadeIn}
    className="bg-[#f7f7f7] py-[56px]"
  >
    <div className="max-w-[1080px] mx-auto" style={{ paddingLeft: 340, paddingRight: 340 }}>
      <div className="w-[400px]">
        <SectionLabel label="Final Look" />
        <h2
          className="mt-[16px] text-[16px] font-medium leading-[24px] text-[#353839] italic"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          The redesigned Explore
        </h2>
        <p className="mt-[16px] text-[14px] font-normal leading-[20px] text-[#7f8283]">
          Our aim was to give enough useful information without making it too
          complicated. Each section had its own look and showed specific data.
        </p>
      </div>
    </div>
    <div className="max-w-[1080px] mx-auto flex justify-center mt-[40px]">
      <div
        className="rounded-[12px] bg-white"
        style={{ width: 200, height: 444 }}
      />
    </div>
  </motion.section>
);

const TestingRollout = () => (
  <motion.section
    {...fadeIn}
    className="max-w-[1080px] mx-auto py-0"
    style={{ paddingLeft: 340, paddingRight: 340 }}
  >
    <div className="w-[400px]">
      <SectionLabel label="Testing & Rollout" />
      <p className="mt-[28px] text-[14px] font-normal leading-[20px] text-[#7f8283]">
        We first tested with an internal roll out, then after the green flag,
        we eventually rolled it out to 100% users.
      </p>

      <div className="mt-[32px] flex items-center gap-0">
        {[
          { num: "1", label: "Internal Alpha", active: false },
          { num: "2", label: "Beta (10%)", active: false },
          { num: "3", label: "Gradual Rollout", active: false },
          { num: "4", label: "100% Users", active: true },
        ].map((step, i) => (
          <div key={step.num} className="flex items-center">
            {i > 0 && (
              <div className="w-[24px] h-px bg-[#d0d0d0] mx-[4px]" />
            )}
            <div className="flex items-center gap-[8px]">
              <div
                className={`w-[24px] h-[24px] rounded-full flex items-center justify-center text-[11px] font-medium ${
                  step.active
                    ? "bg-[#00B386] text-white"
                    : "bg-[#f0f0f0] text-[#7f8283]"
                }`}
              >
                {step.num}
              </div>
              <span className="text-[12px] leading-[14px] text-[#7f8283] whitespace-nowrap">
                {step.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

const Results = () => (
  <motion.section
    {...fadeIn}
    className="max-w-[1080px] mx-auto py-0"
    style={{ paddingLeft: 340, paddingRight: 340 }}
  >
    <div className="w-[400px]">
      <SectionLabel label="THE RESULT" />
      <p className="mt-[28px] text-[14px] font-normal leading-[20px] text-[#7f8283]">
        The redesign turned a high-traffic surface into a real
        research-to-trade destination — more visits, deeper exploration, and a
        clear lift in revenue.
      </p>

      <div className="mt-[32px] flex flex-col gap-[24px]">
        {/* For users */}
        <div>
          <p className="text-[24px] leading-[24px]">👤</p>
          <p className="mt-[8px] text-[14px] font-normal leading-[20px] text-[#7f8283]">
            For users
          </p>
        </div>

        <div className="flex flex-col gap-[24px]">
          <div>
            <h3 className="text-[14px] font-semibold leading-[20px] text-[#353839]">
              Faster discovery
            </h3>
            <p className="text-[14px] font-normal leading-[20px] text-[#7f8283]">
              2.8M users open Explore every day — roughly 35% of app DAU —
              and now find what they need without leaving the app.
            </p>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold leading-[20px] text-[#353839]">
              Right depth for every user
            </h3>
            <p className="text-[14px] font-normal leading-[20px] text-[#7f8283]">
              Beginners get curated sectors, pros get strategy-based collections,
              and intraday traders get volume signals — all on the same screen.
            </p>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold leading-[20px] text-[#353839]">
              From idea to order, in fewer taps
            </h3>
            <p className="text-[14px] font-normal leading-[20px] text-[#7f8283]">
              Search-to-order and watchlist-to-order paths got noticeably
              shorter, removing friction between &quot;interesting&quot; and
              &quot;ordered.&quot;
            </p>
          </div>
        </div>

        {/* For the business */}
        <div className="mt-[16px]">
          <p className="text-[24px] leading-[24px]">📈</p>
          <p className="mt-[8px] text-[14px] font-normal leading-[20px] text-[#7f8283]">
            For the business
          </p>
          <p className="mt-[16px] text-[14px] font-normal leading-[20px] text-[#7f8283]">
            Higher engagement compounding into revenue — across orders,
            brokerage, and turnover.
          </p>
        </div>

        {/* Metrics table */}
        <div className="border border-[#e0e0e0] rounded-[8px] overflow-hidden">
          <div className="flex bg-[#f7f7f7]">
            <div className="flex-1 px-[16px] py-[12px]">
              <span className="text-[14px] font-medium leading-[20px] text-[#353839]">
                Metric
              </span>
            </div>
            <div className="w-[79px] px-[16px] py-[12px] text-right">
              <span className="text-[14px] font-medium leading-[20px] text-[#353839]">
                Lift
              </span>
            </div>
          </div>
          {[
            { metric: "Turnover per active user", lift: "+5.2%" },
            { metric: "Brokerage revenue", lift: "+3.5%" },
            { metric: "Orders per active user", lift: "+1.5%" },
            { metric: "MTF trading", lift: "+19.6%" },
            { metric: "Explore page visits", lift: "+3.12%" },
            { metric: "Search → Order conversion", lift: "+4.9%" },
            { metric: "Watchlist → Order conversion", lift: "+3.4%" },
          ].map((row) => (
            <div
              key={row.metric}
              className="flex border-t border-[#e0e0e0]"
            >
              <div className="flex-1 px-[16px] py-[12px]">
                <span className="text-[14px] leading-[20px] text-[#353839]">
                  {row.metric}
                </span>
              </div>
              <div className="w-[79px] px-[16px] py-[12px] text-right">
                <span className="text-[14px] leading-[20px] text-[#00B386] font-medium">
                  {row.lift}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Standout */}
        <AccentCard borderColor="#00B386">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[14px] font-semibold leading-[18px] text-[#353839]">
              The standout
            </p>
            <p className="text-[14px] font-normal italic leading-[20px] text-[#7f8283]">
              MTF trading jumped{" "}
              <span className="text-[#00B386] font-medium">+19.6%</span> — the
              biggest signal that experienced traders were acting on the new
              Strategy and Volume Shockers collections. Discovery wasn&apos;t
              just driving more orders; it was driving higher-conviction ones.
            </p>
          </div>
        </AccentCard>
      </div>
    </div>
  </motion.section>
);

const FutureScope = () => (
  <motion.section
    {...fadeIn}
    className="max-w-[1080px] mx-auto py-0"
    style={{ paddingLeft: 340, paddingRight: 340 }}
  >
    <div className="w-[400px]">
      <SectionLabel label="future scope" />
      <p className="mt-[28px] text-[14px] font-normal leading-[20px] text-[#7f8283]">
        Based on the data we&apos;ll get from these collections, we&apos;ll work
        on building profiles for every user and will give them more personalised
        sections on explore
      </p>

      <div className="mt-[32px] flex flex-col gap-[16px]">
        {[
          {
            num: "1.",
            bold: "User profiling.",
            rest: " Build trading profiles based on order history, watchlists, and explore behavior to personalize collections.",
          },
          {
            num: "2.",
            bold: "AI-Powered Suggestions.",
            rest: " Use ML to surface relevant stocks and sectors based on individual trading patterns.",
          },
          {
            num: "3.",
            bold: "Custom Collections.",
            rest: " Let users create and pin their own curated collections for quick access.",
          },
          {
            num: "4.",
            bold: "Social Signals.",
            rest: " Integrate community sentiment and trending discussions into stock discovery.",
          },
        ].map((item) => (
          <p
            key={item.bold}
            className="text-[14px] leading-[20px] text-[#7f8283]"
          >
            <span>{item.num} </span>
            <span className="font-medium text-[#353839]">{item.bold}</span>
            {item.rest}
          </p>
        ))}
      </div>
    </div>
  </motion.section>
);

const Footer = () => (
  <footer className="border-t border-[#e0e0e0] mt-[56px]">
    <div className="max-w-[1080px] mx-auto px-[72px] py-[40px] text-center">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[14px] text-[#7f8283] hover:text-[#353839] transition-colors"
        aria-label="Back to all case studies"
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
    </div>
  </footer>
);

const GrowwStocksExplore = () => (
  <main className="min-h-screen bg-white">
    <TopBar />
    <Hero />

    <div className="mt-[56px]">
      <Context />
    </div>

    <div className="mt-[56px]">
      <DataInsight />
    </div>

    <div className="mt-[56px]">
      <CurrentState />
    </div>

    <div className="mt-[56px] mb-[56px]">
      <Divider />
    </div>

    <Problem />

    <div className="mt-[56px] mb-[56px]">
      <Divider />
    </div>

    <Solution />

    <div className="mt-[56px]">
      <UnderstandingUsers />
    </div>

    <WhatThisMeant />

    <div className="mt-[56px]">
      <IdealSolution />
    </div>

    <div className="mt-[56px] mb-[56px]">
      <Divider />
    </div>

    <DesignPhilosophies />

    <div className="mt-[56px] mb-[56px]">
      <Divider />
    </div>

    <NewCollections />

    <div className="mt-[56px]">
      <CollectionSection
        number="1."
        title="Volume based"
        description="Instead of just showing stock prices, we focused on how much trading volume happened today compared to the average. Intraday users look at these stocks to find sudden big spikes — they don't care about just the price."
        figureSrc="/groww-volume-shockers-flow.png"
        figureAlt="Volume shockers collection: bottom sheet listing stocks above weekly average volume with See more, and full-screen list with sparklines and volume versus one-week average."
      />
    </div>

    <div className="mt-[56px] mb-[56px]">
      <Divider />
    </div>

    <CollectionSection
      number="2."
      title="Technicals based"
      description='We decided to show the names of popular strategies (like "RSI" or "Breakouts") first. Users could then click on a strategy to see the stocks related to it. This way, users can pick a strategy they understand first, instead of being overwhelmed by a list of random stock names.'
    />

    <div className="mt-[56px]">
      <CollectionSection
        title="Intraday screener"
        description="We built a screener specially for intraday traders to give them the technicals they use to find stocks."
      />
    </div>

    <div className="mt-[56px]">
      <SectorCollection />
    </div>

    <div className="mt-[56px] mb-[56px]">
      <Divider />
    </div>

    <NewsRedesign />

    <div className="mt-[56px]">
      <FinalLook />
    </div>

    <div className="mt-[56px]">
      <TestingRollout />
    </div>

    <div className="mt-[56px] mb-[56px]">
      <Divider />
    </div>

    <Results />

    <div className="mt-[56px] mb-[56px]">
      <Divider />
    </div>

    <FutureScope />

    <Footer />
  </main>
);

export default GrowwStocksExplore;
