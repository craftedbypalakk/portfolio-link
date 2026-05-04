"use client";

/**
 * Intraday screener — horizontal filter views strip (Figma Case-studies).
 * Link shared with frame node 143:173008 — confirm matching frame in file.
 * Screen bitmaps intentionally omitted until exports are ready.
 */

const TRACK_GAP_CLASS = "gap-10 pr-10";

export type FilterScreenSlide = {
  id: string;
  /** Title above each phone placeholder */
  title: string;
};

const DEFAULT_CAPTION =
  "Price change and price to show how market is going.";

type IntradayFilterScreensMarqueeProps = {
  slides: FilterScreenSlide[];
  /** Unified caption under each column (per design) */
  caption?: string;
};

const IntradayFilterScreensMarquee = ({
  slides,
  caption = DEFAULT_CAPTION,
}: IntradayFilterScreensMarqueeProps) => {
  if (slides.length === 0) {
    return null;
  }

  const renderSlide = (slide: FilterScreenSlide, keyPrefix: string) => (
    <li
      key={`${keyPrefix}-${slide.id}`}
      className="flex w-[200px] shrink-0 flex-col items-center gap-[14px]"
    >
      <p className="font-case-inter w-full px-1 text-center text-[14px] font-medium leading-[20px] text-[#7f8283]">
        {slide.title}
      </p>
      <div
        className="w-full rounded-[28px] bg-white shadow-[0_2px_14px_rgba(53,56,57,0.07)] ring-1 ring-black/[0.06]"
        style={{ aspectRatio: "390 / 844" }}
        aria-hidden="true"
      />
      <p className="font-groww-sans w-full max-w-[200px] px-1 text-center text-[12px] font-normal italic leading-[17px] text-[#a8acad]">
        {caption}
      </p>
    </li>
  );

  return (
    <section
      className="mt-[56px] w-full bg-[#f7f7f7] py-[56px]"
      aria-label="Intraday screener data views"
    >
      <div
        className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_6%,black_94%,transparent_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,black_6%,black_94%,transparent_100%)]"
      >
        <div
          className="flex w-max animate-intraday-filters-marquee motion-reduce:animate-none"
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          <ul className={`flex shrink-0 ${TRACK_GAP_CLASS}`}>
            {slides.map((s) => renderSlide(s, "a"))}
          </ul>
          <ul className={`flex shrink-0 ${TRACK_GAP_CLASS}`} aria-hidden="true">
            {slides.map((s) => renderSlide(s, "b"))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IntradayFilterScreensMarquee;
