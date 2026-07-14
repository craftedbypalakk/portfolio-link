"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BG = "#0C0C0C";
const PRIMARY = "#F0F0F0";
const SECONDARY = "#5A5A5A";
const BORDER = "#1E1E1E";

const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/palakjain2701" },
  { label: "Linkedin", href: "https://www.linkedin.com/in/palak-blooms/" },
  { label: "email", href: "mailto:hey.palakblooms@gmail.com" },
  {
    label: "resume",
    href: "https://drive.google.com/drive/u/4/folders/1cveusnjEsvfO4bC_Ij-9L4XpYTFjyp66",
  },
];

type Project = {
  category: string;
  company: string;
  title: React.ReactNode;
  alt: string;
  href?: string;
  image: string;
};

const PROJECTS: Project[] = [
  {
    category: "INVESTMENT DISCOVERY",
    company: "Groww",
    title: (
      <>
        Reimagining how investors{" "}
        <span className="font-fragment-serif" style={{ fontWeight: 300, fontStyle: "italic" }}>
          discover
        </span>{" "}
        their next opportunity.
      </>
    ),
    alt: "Stocks Explore case study",
    href: "https://www.figma.com/proto/brOGHqVGkVva60GtvxtTJX/Case-studies?page-id=1%3A41872&node-id=181-236108&t=tyjuXdJ4Sfamoan0-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=181%3A236108&show-proto-sidebar=1",
    image: "/img-stocks-explore.png",
  },
  {
    category: "0→1 TRADING TOOL",
    company: "915 by Groww",
    title: (
      <>
        Building an{" "}
        <span className="font-fragment-serif" style={{ fontWeight: 300, fontStyle: "italic" }}>
          Open Interest
        </span>{" "}
        tool for informed trading decisions.
      </>
    ),
    alt: "Open Interest tool case study",
    href: "https://www.figma.com/proto/brOGHqVGkVva60GtvxtTJX/Case-studies?page-id=1%3A41872&node-id=193-58887&t=tyjuXdJ4Sfamoan0-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=193%3A58887&show-proto-sidebar=1",
    image: "/img-oi-tool.png",
  },
  {
    category: "HIGH-INTENT JOURNEY",
    company: "Groww",
    title: (
      <>
        Designing a seamless{" "}
        <span className="font-fragment-serif" style={{ fontWeight: 300, fontStyle: "italic" }}>
          IPO journey
        </span>{" "}
        from discovery to application.
      </>
    ),
    alt: "IPO Journey case study",
    image: "/img-ipo-journey.png",
  },
  {
    category: "0→1 PRODUCT",
    company: "Groww",
    title: (
      <>
        Building a{" "}
        <span className="font-fragment-serif" style={{ fontWeight: 300, fontStyle: "italic" }}>
          motor insurance
        </span>{" "}
        experience from strategy to launch.
      </>
    ),
    alt: "Motor insurance case study",
    image: "/img-insurance.png",
  },
];

const FEATURED = PROJECTS.slice(0, 2);
const ARCHIVED = PROJECTS.slice(2);

const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: "var(--font-matter)",
  fontSize: 16,
  fontWeight: 400,
  color: "#FFF",
  margin: 0,
};

function ProjectCard({ project, index, viewCursor }: { project: Project; index: number; viewCursor?: boolean }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const cursorHandlers = viewCursor ? {
    onMouseMove: (e: React.MouseEvent) => setPos({ x: e.clientX, y: e.clientY }),
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  } : {};

  const inner = (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
        <span style={{ fontFamily: "var(--font-matter)", fontSize: 12, fontWeight: 500, letterSpacing: "1.2px", textTransform: "uppercase", color: "#8E8E93" }}>
          {project.category}
        </span>
        <span style={{ fontFamily: "var(--font-matter)", fontSize: 12, fontWeight: 500, letterSpacing: "1.2px", textTransform: "uppercase", color: "#8E8E93", textAlign: "right" }}>
          {project.company}
        </span>
      </div>
      <h2 className="font-fragment-glare" style={{ fontSize: 32, fontWeight: 400, lineHeight: "normal", color: "#FFF", margin: "0 0 24px" }}>
        {project.title}
      </h2>
      <Image src={project.image} alt={project.alt} width={1904} height={1000} unoptimized priority={index === 0} style={{ width: "100%", height: "auto", display: "block", borderRadius: 12 }} />
      {viewCursor && hovered && (
        <div style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          width: 72,
          height: 72,
          borderRadius: "50%",
          backgroundColor: "#FFF",
          color: "#0C0C0C",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-matter)",
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.5px",
        }}>
          View
        </div>
      )}
    </>
  );

  if (project.href) {
    return (
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", display: "block", cursor: viewCursor ? "none" : "pointer" }}
        {...cursorHandlers}
      >
        {inner}
      </Link>
    );
  }
  return <div>{inner}</div>;
}

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: BG,
        minHeight: "100vh",
        color: PRIMARY,
      }}
    >
      {/* ── Nav ── */}
      <header
        style={{
          borderBottom: `1px solid ${BORDER}`,
          height: 78,
          display: "flex",
          alignItems: "center",
          paddingLeft: 24,
          position: "sticky",
          top: 0,
          backgroundColor: BG,
          zIndex: 10,
        }}
      >
        <span
          className="font-fragment-glare"
          style={{ fontSize: 32, fontWeight: 400, color: PRIMARY }}
        >
          Palak Jain
          <span style={{ color: "#FF2D55" }}>.</span>
        </span>
      </header>

      {/* ── Two-column body ── */}
      <div style={{ display: "flex" }}>

        {/* Left sidebar */}
        <aside
          style={{
            width: 440,
            flexShrink: 0,
            borderRight: `1px solid ${BORDER}`,
            position: "sticky",
            top: 78,
            height: "calc(100vh - 78px)",
            display: "flex",
            flexDirection: "column",
            padding: "24px 24px 24px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontFamily: "var(--font-matter)",
                fontSize: 16,
                fontWeight: 400,
                lineHeight: "24px",
                color: "#8E8E93",
                maxWidth: 392,
                margin: 0,
              }}
            >
              Hey! I&apos;m Palak, been working at Groww for the last 4 years as a product designer.
            </p>
            <p
              style={{
                fontFamily: "var(--font-matter)",
                fontSize: 16,
                fontWeight: 400,
                lineHeight: "24px",
                color: "#8E8E93",
                maxWidth: 392,
                marginTop: 32,
                marginBottom: 0,
              }}
            >
              When I&apos;m not designing, you&apos;ll probably find me planning
              my next trip, curled up with a book, or convincing myself I have
              room for one more plant.
            </p>
            <p
              style={{
                fontFamily: "var(--font-matter)",
                fontSize: 16,
                fontWeight: 400,
                lineHeight: "24px",
                color: "#8E8E93",
                maxWidth: 392,
                marginTop: 32,
                marginBottom: 0,
              }}
            >
              Curiosity is a big part of who I am and it&apos;s what shapes the
              way I design—asking questions, exploring ideas, and creating
              experiences that are simple, useful, and thoughtfully crafted.
            </p>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: 32, flexShrink: 0 }}>
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                style={{
                  fontFamily: "var(--font-matter)",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#FFF",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </aside>

        {/* Right content */}
        <main
          style={{
            flex: 1,
            padding: "24px 24px 80px",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-matter)",
              fontSize: 16,
              fontWeight: 400,
              color: "#FFF",
              margin: "0 0 72px",
            }}
          >
            Key projects I have worked on
          </p>

          {/* Featured projects */}
          {FEATURED.map((project, i) => (
            <div key={project.category}>
              <ProjectCard project={project} index={i} />
              {i < FEATURED.length - 1 && <div style={{ height: 72 }} />}
            </div>
          ))}

          {/* Archive divider + heading */}
          <div style={{ height: 72 }} />
          <div style={{ height: 1, backgroundColor: BORDER, marginLeft: -24, marginRight: -24, marginBottom: 24 }} />
          <p style={{ ...sectionHeadingStyle, marginBottom: 72 }}>Archive</p>

          {/* Archived projects */}
          {ARCHIVED.map((project, i) => (
            <div key={project.category}>
              <ProjectCard project={project} index={FEATURED.length + i} />
              {i < ARCHIVED.length - 1 && <div style={{ height: 72 }} />}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
