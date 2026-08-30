"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getMoodCopy, type Mood } from "@/data/moods";
import { getMoodPath } from "@/data/seo";

type MoodCarouselProps = {
  moods: Mood[];
  activeId: string;
  onSelect: (moodId: string) => void;
};

export function MoodCarousel({ moods, activeId, onSelect }: MoodCarouselProps) {
  const { locale, t } = useLanguage();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLAnchorElement>(null);
  const [overflows, setOverflows] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const hasOverflow = el.scrollWidth > el.clientWidth + 2;
    setOverflows(hasOverflow);
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateScrollState();

    const observer = new ResizeObserver(() => {
      updateScrollState();
    });
    observer.observe(el);

    for (const child of el.children) {
      observer.observe(child);
    }

    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [moods, locale, updateScrollState]);

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    const timer = window.setTimeout(updateScrollState, 320);
    return () => window.clearTimeout(timer);
  }, [activeId, moods, updateScrollState]);

  if (moods.length === 0) return null;

  const showArrows = overflows && moods.length > 1;

  function scrollByDir(dir: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(240, Math.max(120, el.clientWidth * 0.65));
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <div
      className="mx-auto w-full max-w-3xl"
      role="group"
      aria-label={t("chooseMood")}
    >
      <div className="flex items-center gap-1.5 sm:gap-2">
        {showArrows ? (
          <button
            type="button"
            aria-label={t("previousMood")}
            disabled={!canScrollLeft}
            onClick={() => scrollByDir(-1)}
            className="pill-glass hidden h-10 w-10 shrink-0 items-center justify-center rounded-full text-white/80 transition hover:bg-black/50 disabled:pointer-events-none disabled:opacity-30 sm:inline-flex"
          >
            <ChevronLeftIcon />
          </button>
        ) : null}

        <div
          ref={scrollerRef}
          className={[
            "mood-carousel flex min-w-0 flex-1 gap-2 px-1 py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            overflows
              ? "snap-x snap-mandatory overflow-x-auto"
              : "justify-center overflow-x-hidden",
          ].join(" ")}
          role="listbox"
          aria-label={t("chooseMood")}
        >
          {moods.map((mood) => {
            const active = mood.id === activeId;
            const label = getMoodCopy(mood, locale).label;
            const href = getMoodPath(mood.id);
            return (
              <Link
                key={mood.id}
                href={href}
                ref={active ? activeRef : undefined}
                role="option"
                aria-selected={active}
                title={label}
                scroll={false}
                onClick={(event) => {
                  event.preventDefault();
                  onSelect(mood.id);
                }}
                className={[
                  "mood-button inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-sm transition duration-300",
                  overflows ? "snap-center" : "",
                  "pill-glass hover:bg-black/50",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                  active
                    ? "active border-[var(--accent)] text-white"
                    : "border-white/20 text-white/85",
                ].join(" ")}
              >
                <span className="text-base leading-none" aria-hidden>
                  {mood.emoji}
                </span>
                <span className="whitespace-nowrap font-medium tracking-wide">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>

        {showArrows ? (
          <button
            type="button"
            aria-label={t("nextMood")}
            disabled={!canScrollRight}
            onClick={() => scrollByDir(1)}
            className="pill-glass hidden h-10 w-10 shrink-0 items-center justify-center rounded-full text-white/80 transition hover:bg-black/50 disabled:pointer-events-none disabled:opacity-30 sm:inline-flex"
          >
            <ChevronRightIcon />
          </button>
        ) : null}
      </div>
    </div>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4L10.8 12l4.6-4.6z" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M9.6 6 8.2 7.4 12.8 12l-4.6 4.6L9.6 18l6-6-6-6z" />
    </svg>
  );
}
