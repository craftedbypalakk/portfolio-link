"use client";

import { useState, type KeyboardEvent, type ReactNode } from "react";

type NavItem = {
  id: string;
  label: string;
};

type FilterOption = {
  id: string;
  label: string;
};

type Announcement = {
  id: string;
  title: string;
  excerpt: string;
  dateLabel: string;
  categoryId: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "ir", label: "IR Home" },
  { id: "results", label: "Results" },
  { id: "announcements", label: "Announcements" },
  { id: "governance", label: "Governance" },
  { id: "impact", label: "Impact" },
];

const FILTER_OPTIONS: FilterOption[] = [
  { id: "all", label: "All" },
  { id: "board", label: "Board meeting" },
  { id: "investments", label: "Investments" },
  { id: "financial", label: "Financial results" },
  { id: "other", label: "Other" },
];

const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "1",
    title: "Outcome of board meeting",
    excerpt:
      "The board approved the audited financial statements for the period ended…",
    dateLabel: "12 Aug 2025",
    categoryId: "board",
  },
  {
    id: "2",
    title: "Investor presentation — Q1 FY26",
    excerpt:
      "Materials for the quarterly earnings call are now available on the investor relations section…",
    dateLabel: "5 Aug 2025",
    categoryId: "financial",
  },
];

const NavUnderlineLink = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className="relative pb-2 text-[13px] font-normal text-neutral-800 transition-colors hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
      aria-current={active ? "page" : undefined}
      aria-label={label}
    >
      {label}
      {active ? (
        <span
          className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-neutral-400"
          aria-hidden
        />
      ) : null}
    </button>
  );
};

const RoundedUnderlineLink = ({
  children,
  href = "#",
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  ariaLabel: string;
}) => (
  <a
    href={href}
    className="relative inline-flex pb-1 text-[13px] font-medium text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
    aria-label={ariaLabel}
  >
    <span className="relative">
      {children}
      <span
        className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-neutral-400"
        aria-hidden
      />
    </span>
  </a>
);

const CorporateAnnouncementsPage = () => {
  const [activeNav, setActiveNav] = useState("announcements");
  const [filterId, setFilterId] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = ANNOUNCEMENTS.filter((a) => {
    const q = query.trim().toLowerCase();
    if (q && !(`${a.title} ${a.excerpt}`).toLowerCase().includes(q)) {
      return false;
    }
    if (filterId === "all") return true;
    return a.categoryId === filterId;
  });

  const handleFilterChange = (id: string) => {
    setFilterId(id);
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-5">
          <span className="text-[18px] font-semibold tracking-tight lowercase">
            eternal
          </span>
          <nav
            className="flex flex-wrap items-center gap-8"
            aria-label="Investor relations"
          >
            {NAV_ITEMS.map((item) => (
              <NavUnderlineLink
                key={item.id}
                label={item.label}
                active={activeNav === item.id}
                onClick={() => setActiveNav(item.id)}
              />
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-[1100px] px-6 pb-16 pt-10">
        <div className="mb-10">
          <h1 className="text-[32px] font-semibold tracking-tight text-neutral-950">
            Corporate announcements
          </h1>
          {/* Thick accent: rounded caps via pill geometry */}
          <div
            className="mt-4 h-1 w-14 rounded-full bg-[#2563eb]"
            aria-hidden
          />
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <aside className="w-full shrink-0 lg:w-[280px]">
            <label htmlFor="announcement-search" className="sr-only">
              Search announcements
            </label>
            <input
              id="announcement-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search announcements"
              maxLength={200}
              className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-[14px] text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400/30"
            />

            <fieldset className="mt-10 border-0 p-0">
              <legend className="text-[13px] font-semibold text-neutral-900">
                Filters
              </legend>
              <div className="mt-4 flex flex-col gap-3">
                {FILTER_OPTIONS.map((opt) => {
                  const inputId = `filter-${opt.id}`;
                  return (
                    <label
                      key={opt.id}
                      htmlFor={inputId}
                      className="flex cursor-pointer items-center gap-2 text-[13px] text-neutral-700"
                    >
                      <input
                        id={inputId}
                        type="radio"
                        name="announcement-filter"
                        checked={filterId === opt.id}
                        onChange={() => handleFilterChange(opt.id)}
                        className="size-4 accent-neutral-800"
                      />
                      {opt.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </aside>

          <section className="min-w-0 flex-1" aria-label="Announcement list">
            <ul className="flex flex-col gap-6">
              {filtered.map((item) => (
                <li key={item.id}>
                  <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                    <p className="text-[12px] font-medium uppercase tracking-wide text-neutral-500">
                      {item.dateLabel}
                    </p>
                    <h2 className="mt-2 text-[18px] font-semibold leading-snug text-neutral-950">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-[14px] leading-relaxed text-neutral-600">
                      {item.excerpt}
                    </p>
                    <div className="mt-5">
                      <RoundedUnderlineLink ariaLabel={`Read more about ${item.title}`}>
                        Read more
                      </RoundedUnderlineLink>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
            {filtered.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-neutral-300 px-6 py-12 text-center text-[14px] text-neutral-500">
                No announcements match your search.
              </p>
            ) : null}
          </section>
        </div>
      </div>
    </main>
  );
};

export default CorporateAnnouncementsPage;
