"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CONTENT_PRIMARY = "#353839";
const CONTENT_SECONDARY = "#7F8283";
const RESUME_URL = "https://drive.google.com/drive/u/4/folders/1cveusnjEsvfO4bC_Ij-9L4XpYTFjyp66";

const ResumePage = () => (
  <div className="relative h-full w-full overflow-hidden bg-white" style={{ borderRadius: 12, boxShadow: "0px 16px 24px 8px rgba(0,0,0,0.10)" }}>
    <Image src="/resume.png" alt="Palak Jain resume" fill className="object-cover object-top" quality={100} sizes="356px" />
  </div>
);

const ResumeBentoCard = ({ index }: { index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
    className="h-full w-full min-h-0"
  >
    <motion.a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full w-full"
      aria-label="Open resume in a new tab"
      initial="rest"
      whileHover="hovered"
    >
      <div
        className="relative h-full w-full overflow-hidden shadow-[0_2px_12px_rgba(53,56,57,0.06)]"
        style={{ backgroundColor: "#FFFFFF", borderRadius: 20, transform: "translateZ(0)" }}
      >
        <p className="absolute left-1/2 top-5 z-10 -translate-x-1/2 font-fragment-serif text-[14px] italic leading-none" style={{ color: CONTENT_PRIMARY }}>
          2026
        </p>
        {/* Back page — orange, fixed */}
        <div className="absolute" style={{ width: 356, height: 205, bottom: -40, left: 26, borderRadius: 12, backgroundColor: "#EDAC65" }} />
        {/* Middle page — purple */}
        <motion.div
          className="absolute"
          variants={{ rest: { bottom: -56, left: 74 }, hovered: { bottom: -48, left: 58 } }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ width: 356, height: 205, borderRadius: 12, backgroundColor: "#7B72EE" }}
        />
        {/* Front page — resume image */}
        <motion.div
          className="absolute overflow-hidden"
          variants={{ rest: { bottom: -72, left: 122 }, hovered: { bottom: -56, left: 90 } }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ width: 356, height: 205, borderRadius: 12 }}
        >
          <ResumePage />
        </motion.div>
      </div>
    </motion.a>
  </motion.div>
);

const BentoBox = ({ children, borderColor = "#e5e7eb" }: { children: React.ReactNode; borderColor?: string }) => (
  <div
    className="relative h-full w-full overflow-hidden"
    style={{
      backgroundColor: "#fff",
      borderRadius: 20,
      border: `2px solid ${borderColor}`,
      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    }}
  >
    {children}
  </div>
);

const slide = {
  rest:    { x: 0,  y: 0,  rotate: 0 },
  hovered: { x: 32, y: 80, rotate: -5 },
};
const slideDown = {
  rest:    { x: 0,  y: 0,  rotate: 0 },
  hovered: { x: 6, y: 80, rotate: -6 },
};
const slideLeft = {
  rest:    { x: 0,  y: 0, rotate: 0 },
  hovered: { x: -32, y: 80, rotate: 5 },
};
const slideTransition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

const StocksExploreCard = () => (
  <a
    href="https://www.figma.com/proto/brOGHqVGkVva60GtvxtTJX/Case-studies?node-id=105-230799&t=P3J5AiU2EzKfZovN-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A41873"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full"
    aria-label="Stocks Explore case study"
  >
    <motion.div initial="rest" whileHover="hovered" className="relative w-full overflow-hidden" style={{ borderRadius: 20 }}>
      {/* Backdrop */}
      <div className="absolute inset-0" style={{ backgroundColor: "#4B47E5", borderRadius: 20 }}>
        <div style={{ position: "absolute", top: 24, left: 24, color: "#fff", fontSize: 20, fontWeight: 500, letterSpacing: "-0.01em" }}>
          Stocks Explore →
        </div>
      </div>
      {/* Sliding card */}
      <motion.div variants={slide} transition={slideTransition} style={{ position: "relative", width: "100%", transformOrigin: "top left", willChange: "transform", transform: "translateZ(0)" }}>
        <div className="relative w-full overflow-hidden" style={{ backgroundColor: "#fff", borderRadius: 20, border: "2px solid #7C6DFF", boxShadow: "0 10px 30px rgba(0,0,0,0.12)" }}>
          <div className="flex w-full flex-col">
            <div className="relative w-full shrink-0" style={{ aspectRatio: "8192 / 10240" }}>
              <Image src="/stocks-explore-thumb.png" alt="" fill className="object-cover" sizes="280px" quality={100} />
            </div>
            <div style={{ paddingTop: 14, paddingLeft: 18, paddingRight: 18, paddingBottom: 24, textAlign: "center" }}>
              <div style={{ fontSize: 9, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.15em", color: CONTENT_SECONDARY }}>
                3.8M Daily Visits
              </div>
              <div className="font-fragment-glare" style={{ marginTop: 16, fontSize: 20, fontWeight: 400, lineHeight: "normal", color: CONTENT_PRIMARY }}>
                Turning <span className="font-fragment-serif italic">Stocks Explore</span> into
                <br />a place to research <span className="font-fragment-serif italic">&amp;</span> trade.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </a>
);

const OICard = () => (
  <a href="https://www.figma.com/proto/brOGHqVGkVva60GtvxtTJX/Case-studies?node-id=105-264389&t=P3J5AiU2EzKfZovN-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A41873" target="_blank" rel="noopener noreferrer" className="block h-full w-full" aria-label="Open Interest case study">
    <motion.div initial="rest" whileHover="hovered" className="relative h-full w-full overflow-hidden" style={{ borderRadius: 20 }}>
      <div className="absolute inset-0" style={{ backgroundColor: "#87BD44", borderRadius: 20 }}>
        <div style={{ position: "absolute", top: 24, left: 24, color: "#fff", fontSize: 20, fontWeight: 500 }}>
          Open Interest →
        </div>
      </div>
      <motion.div variants={slideDown} transition={slideTransition} style={{ position: "relative", height: "100%", width: "100%", transformOrigin: "top left", willChange: "transform", transform: "translateZ(0)" }}>
        <BentoBox borderColor="#87BD44">
          <div className="flex h-full w-full flex-col">
            <div style={{ padding: "20px 20px 0" }}>
              <div className="font-fragment-glare" style={{ fontSize: 18, fontWeight: 400, lineHeight: 1.35, color: CONTENT_PRIMARY }}>
                Designing an <span className="font-fragment-serif italic">Open Interest</span> Trading Tool
              </div>
            </div>
            <div className="relative flex-1 overflow-hidden" style={{ marginTop: 8 }}>
              <Image src="/oi-thumb.png" alt="" fill className="object-cover object-top" sizes="280px" quality={100} />
            </div>
            <div style={{ padding: "8px 20px 16px" }}>
              <div style={{ fontSize: 12, fontWeight: 500, lineHeight: "18px", color: CONTENT_SECONDARY }}>
                Building a tool where traders can understand market&apos;s mood in a blink.
              </div>
            </div>
          </div>
        </BentoBox>
      </motion.div>
    </motion.div>
  </a>
);

const IPOCard = () => (
  <a href="https://www.figma.com/proto/brOGHqVGkVva60GtvxtTJX/Case-studies?node-id=105-267058&t=P3J5AiU2EzKfZovN-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A41873" target="_blank" rel="noopener noreferrer" className="block h-full w-full" aria-label="IPO case study">
    <motion.div initial="rest" whileHover="hovered" className="relative h-full w-full overflow-hidden" style={{ borderRadius: 20 }}>
      <div className="absolute inset-0" style={{ backgroundColor: "#EDAC65", borderRadius: 20 }}>
        <div style={{ position: "absolute", top: 24, left: 24, color: "#fff", fontSize: 20, fontWeight: 500 }}>
          IPO Journey →
        </div>
      </div>
      <motion.div variants={slideLeft} transition={slideTransition} style={{ position: "relative", height: "100%", width: "100%", transformOrigin: "top left", willChange: "transform", transform: "translateZ(0)" }}>
        <BentoBox borderColor="#FABF6C">
          <div className="flex h-full w-full flex-col">
            <div style={{ padding: "20px 20px 0" }}>
              <div className="font-fragment-glare" style={{ fontSize: 18, fontWeight: 400, lineHeight: 1.35, color: CONTENT_PRIMARY }}>
                Making <span className="font-fragment-serif italic">IPO</span> investing simpler, faster, and more transparent
              </div>
            </div>
            <div className="relative flex-1 overflow-hidden" style={{ marginTop: 8 }}>
              <Image src="/ipo-thumb.png" alt="" fill className="object-cover object-top" sizes="280px" quality={100} />
            </div>
          </div>
        </BentoBox>
      </motion.div>
    </motion.div>
  </a>
);

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ padding: "80px 96px" }}>

      {/* ── Main layout ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>

        {/* LEFT: About */}
        <div style={{ width: 380, flexShrink: 0, height: "calc(100vh - 200px)", display: "flex", flexDirection: "column" }}>
          <h1 className="font-fragment-glare" style={{ fontSize: 44, fontWeight: 400, lineHeight: 1, marginBottom: 16, flexShrink: 0 }}>
            Hi 👋🏻
          </h1>

          {/* Sticky notes — flex:1 so they fill space between heading and resume */}
          <div className="relative" style={{ flex: 1, minHeight: 320 }}>
            {/* Blue note */}
            <div className="absolute" style={{ width: 224, top: 0, left: 0, backgroundColor: "#A9DFFF", borderRadius: 3, padding: "20px 18px 16px", transform: "rotate(-2deg)", boxShadow: "0 4px 20px rgba(0,0,0,0.12)", zIndex: 1, fontFamily: "var(--font-matter)" }}>
              <p style={{ fontSize: 14, lineHeight: 1.55, fontWeight: 500, color: "#1a1a1a" }}>
                I&apos;m Palak, a Product Designer at{" "}
                <a href="https://www.linkedin.com/company/groww.in/posts/?feedView=all" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Groww</a> with 4+ years of experience in fintech.
              </p>
              <p style={{ marginTop: 48, fontSize: 10, color: "#666" }}>Palak</p>
            </div>
            {/* Yellow note */}
            <div className="absolute" style={{ width: 212, top: 120, left: 110, backgroundColor: "#F7FF5D", borderRadius: 3, padding: "20px 18px 14px", transform: "rotate(1deg)", boxShadow: "0 4px 20px rgba(0,0,0,0.12)", zIndex: 2, fontFamily: "var(--font-matter)" }}>
              <p style={{ fontSize: 14, lineHeight: 1.55, fontWeight: 500, color: "#1a1a1a" }}>
                When I&apos;m not designing, I&apos;m usually watering my plants or planning my next trip.
              </p>
              <p style={{ marginTop: 20, fontSize: 10, color: "#333" }}>Palak</p>
            </div>
            {/* Leaf icon — where flower sticker was */}
            <div className="absolute pointer-events-none" style={{ top: 280, left: 244, zIndex: 2 }}>
              <svg width="44" height="26" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.2261 10.8874C6.47914 10.8618 2.78423 7.52683 1.01113 4.81295C0.462544 3.9733 0.817311 2.87693 1.71104 2.42174C9.60384 -1.59819 13.4165 2.49919 14.92 6.88096C16.4236 2.49919 20.2362 -1.59819 28.129 2.42174C29.0227 2.87693 29.3775 3.9733 28.8289 4.81295C26.8923 7.77712 22.663 11.4822 15.9715 10.807L16.1389 15.6838C16.1684 16.5405 15.4818 17.251 14.6246 17.251C13.8899 17.251 13.261 16.7238 13.1327 16.0003L12.2261 10.8874Z" fill="#14AE5C"/>
                <path d="M12.2261 10.8874L12.9645 10.7565C12.9013 10.3996 12.5918 10.1391 12.2294 10.1374L12.2261 10.8874ZM1.01113 4.81295L1.639 4.40274H1.639L1.01113 4.81295ZM1.71104 2.42174L1.37066 1.75343H1.37066L1.71104 2.42174ZM14.92 6.88096L14.2106 7.12439C14.3146 7.42744 14.5996 7.63096 14.92 7.63096C15.2404 7.63096 15.5254 7.42744 15.6294 7.12439L14.92 6.88096ZM28.129 2.42174L27.7886 3.09005V3.09005L28.129 2.42174ZM28.8289 4.81295L28.2011 4.40273V4.40274L28.8289 4.81295ZM15.9715 10.807L16.0468 10.0608C15.8314 10.0391 15.6171 10.1115 15.459 10.2594C15.3009 10.4073 15.2145 10.6164 15.2219 10.8327L15.9715 10.807ZM16.1389 15.6838L16.8885 15.658V15.658L16.1389 15.6838ZM13.1327 16.0003L12.3942 16.1313L13.1327 16.0003ZM12.2261 10.8874L12.2294 10.1374C6.80354 10.1132 3.31682 6.97077 1.639 4.40274L1.01113 4.81295L0.383259 5.22317C2.25165 8.08289 6.15474 11.6103 12.2227 11.6374L12.2261 10.8874ZM1.01113 4.81295L1.639 4.40274C1.36116 3.97748 1.51032 3.36565 2.05143 3.09005L1.71104 2.42174L1.37066 1.75343C0.124303 2.38822 -0.436074 3.96912 0.383259 5.22317L1.01113 4.81295ZM1.71104 2.42174L2.05143 3.09005C5.8631 1.1487 8.52773 1.24238 10.3746 2.17081C12.2563 3.11668 13.491 5.02714 14.2106 7.12439L14.92 6.88096L15.6294 6.63754C14.8455 4.35301 13.4221 2.0239 11.0483 0.830615C8.63986 -0.380108 5.45178 -0.325154 1.37066 1.75343L1.71104 2.42174ZM28.129 2.42174L28.4694 1.75343C24.3883 -0.325154 21.2002 -0.380108 18.7917 0.830615C16.4179 2.0239 14.9945 4.35301 14.2106 6.63754L14.92 6.88096L15.6294 7.12439C16.3491 5.02714 17.5838 3.11668 19.4654 2.17081C21.3123 1.24238 23.977 1.1487 27.7886 3.09005L28.129 2.42174ZM28.8289 4.81295L29.4568 5.22317C30.2761 3.96912 29.7158 2.38822 28.4694 1.75343L28.129 2.42174L27.7886 3.09005C28.3297 3.36565 28.4789 3.97748 28.2011 4.40273L28.8289 4.81295ZM15.9715 10.807L15.8962 11.5532C22.9438 12.2643 27.4147 8.34883 29.4568 5.22317L28.8289 4.81295L28.2011 4.40274C26.3699 7.20541 22.3823 10.7 16.0468 10.0608L15.9715 10.807ZM16.1389 15.6838L16.8885 15.658L16.7211 10.7813L15.9715 10.807L15.2219 10.8327L15.3894 15.7095L16.1389 15.6838ZM14.6246 17.251V18.001C15.9061 18.001 16.9325 16.9388 16.8885 15.658L16.1389 15.6838L15.3894 15.7095C15.4042 16.1421 15.0575 16.501 14.6246 16.501V17.251ZM13.1327 16.0003L12.3942 16.1313C12.586 17.2128 13.5262 18.001 14.6246 18.001V17.251V16.501C14.2536 16.501 13.936 16.2347 13.8712 15.8694L13.1327 16.0003ZM12.2261 10.8874L11.4876 11.0184L12.3942 16.1313L13.1327 16.0003L13.8712 15.8694L12.9645 10.7565L12.2261 10.8874Z" fill="#1A1A1A"/>
                <path d="M17.9002 6.97554C20.0584 5.44049 22.4738 4.40624 24.3513 3.79146C24.8664 3.62276 24.8304 2.88501 24.2883 2.87862C20.7642 2.83708 18.4933 4.69835 17.2733 6.46604C16.9793 6.89207 17.4784 7.27557 17.9002 6.97554Z" fill="#036838"/>
                <path d="M10.9436 6.97554C8.78534 5.44049 6.36991 4.40624 4.49249 3.79146C3.97732 3.62276 4.01338 2.88501 4.55544 2.87862C8.07959 2.83708 10.3504 4.69835 11.5704 6.46604C11.8644 6.89207 11.3654 7.27557 10.9436 6.97554Z" fill="#036838"/>
              </svg>
            </div>
            {/* Suitcase sticker — right of flower */}
            <div className="absolute pointer-events-none" style={{ top: 230, left: 294, zIndex: 3 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/travel-suitcase-sticker.png" alt="" width="100" style={{ transform: "rotate(8deg)", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))" }} />
            </div>
            {/* Polaroid photo — top right, behind sticky notes */}
            <div className="absolute" style={{ top: -50, left: 195, backgroundColor: "#ffffff", padding: "8px 8px 28px", boxShadow: "0 6px 24px rgba(0,0,0,0.18)", transform: "rotate(6deg)", zIndex: 0, borderRadius: 2 }}>
              <div style={{ width: 155, height: 185, overflow: "hidden", borderRadius: 1 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/palak.jpeg" alt="Palak" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              </div>
            </div>
          </div>

          {/* Resume section — normal flex child below sticky notes, no overlap */}
          <div style={{ flexShrink: 0, marginTop: 68 }}>
            <div style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#C2E5FF", borderRadius: 8, padding: "4px 16px", fontSize: 14, fontWeight: 500, fontFamily: "var(--font-matter)", color: "#000000", marginBottom: 4 }}>
              Resume
            </div>
            <div style={{ border: "2px solid #93CCEA", borderRadius: 24, backgroundColor: "rgba(194, 229, 255, 0.25)", padding: 12, height: 240, overflow: "hidden" }}>
              <ResumeBentoCard index={3} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
              <a href="https://x.com/palakjain2701" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0859 2.625C21.3718 2.62498 23.9527 2.62462 25.9678 2.89551C28.0327 3.17314 29.6717 3.75375 30.959 5.04102C32.2463 6.32831 32.8269 7.96724 33.1045 10.0322C33.3754 12.0473 33.375 14.6282 33.375 17.9141V18.0859C33.375 21.3718 33.3754 23.9527 33.1045 25.9678C32.8269 28.0328 32.2463 29.6717 30.959 30.959C29.6717 32.2463 28.0328 32.8269 25.9678 33.1045C23.9527 33.3754 21.3718 33.375 18.0859 33.375H17.9141C14.6282 33.375 12.0473 33.3754 10.0322 33.1045C7.96724 32.8269 6.32831 32.2463 5.04102 30.959C3.75375 29.6717 3.17314 28.0327 2.89551 25.9678C2.62462 23.9527 2.62498 21.3718 2.625 18.0859V17.9141C2.62498 14.6282 2.62462 12.0473 2.89551 10.0322C3.17314 7.96725 3.75373 6.32831 5.04102 5.04102C6.32831 3.75372 7.96724 3.17314 10.0322 2.89551C12.0473 2.62461 14.6282 2.62498 17.9141 2.625H18.0859ZM18 4.875C14.6095 4.875 12.1799 4.87756 10.332 5.12598C8.51654 5.37006 7.43238 5.83325 6.63281 6.63281C5.83325 7.43238 5.37006 8.51656 5.12598 10.332C4.87756 12.1799 4.875 14.6095 4.875 18C4.875 21.3904 4.87757 23.8201 5.12598 25.668C5.37006 27.4834 5.83327 28.5676 6.63281 29.3672C7.43238 30.1668 8.51654 30.6299 10.332 30.874C12.1799 31.1224 14.6095 31.125 18 31.125C21.3904 31.125 23.8201 31.1224 25.668 30.874C27.4835 30.6299 28.5686 30.1668 29.3682 29.3672C30.1674 28.5677 30.63 27.4831 30.874 25.668C31.1224 23.8201 31.125 21.3904 31.125 18C31.125 14.6095 31.1224 12.1799 30.874 10.332C30.63 8.51688 30.1675 7.43234 29.3682 6.63281C28.5686 5.83325 27.4835 5.37006 25.668 5.12598C23.8201 4.87757 21.3904 4.875 18 4.875ZM14.667 9.375C15.0281 9.37509 15.3677 9.54902 15.5791 9.8418L19.3486 15.0605L24.7041 9.7041C25.1434 9.26478 25.8566 9.26481 26.2959 9.7041C26.7352 10.1434 26.7352 10.8566 26.2959 11.2959L20.6826 16.9082L26.4121 24.8418C26.6592 25.1841 26.694 25.6358 26.502 26.0117C26.3096 26.3879 25.9225 26.625 25.5 26.625H21.333C20.9719 26.6249 20.6323 26.4519 20.4209 26.1592L16.6514 20.9395L11.2959 26.2959C10.8566 26.7352 10.1434 26.7352 9.7041 26.2959C9.26481 25.8566 9.26479 25.1434 9.7041 24.7041L15.3174 19.0918L9.58789 11.1592C9.34064 10.8168 9.30599 10.3643 9.49805 9.98828C9.69037 9.61215 10.0776 9.37502 10.5 9.375H14.667ZM21.9082 24.375H23.2998L14.0918 11.625H12.7002L21.9082 24.375Z" fill="#9D70C4"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/palak-blooms/" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0859 33.375C21.3718 33.375 23.9527 33.3754 25.9678 33.1045C28.0328 32.8269 29.6717 32.2463 30.959 30.959C32.2463 29.6717 32.8269 28.0328 33.1045 25.9678C33.3754 23.9527 33.375 21.3718 33.375 18.0859V17.9141C33.375 14.6282 33.3754 12.0473 33.1045 10.0322C32.8269 7.96724 32.2463 6.32831 30.959 5.04102C29.6717 3.75372 28.0328 3.17314 25.9678 2.89551C23.9527 2.62462 21.3718 2.62498 18.0859 2.625H17.9141C14.6282 2.62498 12.0473 2.62462 10.0322 2.89551C7.96724 3.17314 6.32831 3.75372 5.04102 5.04102C3.75372 6.32831 3.17314 7.96724 2.89551 10.0322C2.62462 12.0473 2.62498 14.6282 2.625 17.9141V18.0859C2.62498 21.3718 2.62462 23.9527 2.89551 25.9678C3.17314 28.0328 3.75372 29.6717 5.04102 30.959C6.32831 32.2463 7.96724 32.8269 10.0322 33.1045C12.0473 33.3754 14.6282 33.375 17.9141 33.375H18.0859ZM18 31.125C14.6095 31.125 12.1799 31.1224 10.332 30.874C8.51654 30.6299 7.43238 30.1668 6.63281 29.3672C5.83325 28.5676 5.37006 27.4835 5.12598 25.668C4.87756 23.8201 4.875 21.3905 4.875 18C4.875 14.6095 4.87756 12.1799 5.12598 10.332C5.37006 8.51654 5.83325 7.43238 6.63281 6.63281C7.43238 5.83325 8.51654 5.37006 10.332 5.12598C12.1799 4.87756 14.6095 4.875 18 4.875C21.3905 4.875 23.8201 4.87756 25.668 5.12598C27.4835 5.37006 28.5676 5.83325 29.3672 6.63281C30.1668 7.43238 30.6299 8.51654 30.874 10.332C31.1224 12.1799 31.125 14.6095 31.125 18C31.125 21.3905 31.1224 23.8201 30.874 25.668C30.6299 27.4835 30.1668 28.5676 29.3672 29.3672C28.5676 30.1668 27.4835 30.6299 25.668 30.874C23.8201 31.1224 21.3905 31.125 18 31.125ZM10.5117 12C11.3401 12 12.0117 11.3284 12.0117 10.5C12.0117 9.67157 11.3401 9 10.5117 9H10.498C9.66971 9.00011 8.99805 9.67164 8.99805 10.5C8.99805 11.3284 9.66971 11.9999 10.498 12H10.5117ZM10.5 26.625C11.1213 26.625 11.625 26.1213 11.625 25.5V15C11.625 14.3787 11.1213 13.875 10.5 13.875C9.87868 13.875 9.375 14.3787 9.375 15L9.375 25.5C9.375 26.1213 9.87868 26.625 10.5 26.625ZM25.5 26.625C26.1213 26.625 26.625 26.1213 26.625 25.5V19.5C26.625 16.3934 24.1066 13.875 21 13.875C19.7337 13.875 18.5651 14.2938 17.625 15C17.6248 14.3789 17.1212 13.875 16.5 13.875C15.8787 13.875 15.375 14.3787 15.375 15V25.5C15.375 26.1213 15.8787 26.625 16.5 26.625C17.1213 26.625 17.625 26.1213 17.625 25.5V19.5C17.625 17.636 19.136 16.125 21 16.125C22.864 16.125 24.375 17.636 24.375 19.5V25.5C24.375 26.1213 24.8787 26.625 25.5 26.625Z" fill="#76C236"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: My work */}
        <div style={{ flexShrink: 0, position: "relative", marginTop: -56 }}>
          {/* Pill */}
          <div style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#DDD6FE", borderRadius: 8, padding: "4px 16px", fontSize: 14, fontWeight: 500, fontFamily: "var(--font-matter)", color: "#000000", marginBottom: 4, position: "relative", zIndex: 10 }}>
            My work
          </div>
          {/* Container — draft 1 card sizes: SE 392×660, OI 392×580, IPO 392×372 */}
          <div style={{ border: "2px solid #C4B5FD", borderRadius: 24, backgroundColor: "rgba(237,233,254,0.3)", padding: 20, display: "flex", gap: 16, position: "relative" }}>

            {/* Left: Stocks Explore 323×544 */}
            <div style={{ width: 323, flexShrink: 0, position: "relative", marginTop: 80 }}>
              {/* Star sticker top-right of card */}
              <div className="absolute pointer-events-none" style={{ top: -16, right: -20, zIndex: 20 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/star-sticker.svg" width="60" height="58" alt="" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.18))", transform: "rotate(30deg)" }} />
              </div>
              <div style={{ height: 544 }}><StocksExploreCard /></div>
            </div>

            {/* Right: OI 323×478 + IPO 323×307 */}
            <div style={{ width: 323, flexShrink: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ height: 478 }}><OICard /></div>
              <div style={{ height: 307 }}><IPOCard /></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 40, fontFamily: "var(--font-matter)", fontSize: 24, fontWeight: 500, color: "#9B9B9B" }}>
        <span>Palak&apos;s portfolio</span>
        <span>Updated June 2026</span>
      </div>
    </div>
  );
}
