"use client";

import type { Mood } from "@/data/moods";

type MoodGridProps = {
  moods: Mood[];
  activeId: string;
  onSelect: (moodId: string) => void;
  compact?: boolean;
};

export function MoodGrid({ moods, activeId, onSelect, compact = false }: MoodGridProps) {
  const visible = compact
    ? pickFeaturedMoods(moods, activeId)
    : moods;

  return (
    <div
      className="mx-auto flex w-full max-w-lg flex-wrap items-center justify-center gap-2 px-4 sm:gap-2.5"
      role="listbox"
      aria-label="Choose a mood"
    >
      {visible.map((mood) => {
        const active = mood.id === activeId;
        return (
          <button
            key={mood.id}
            type="button"
            role="option"
            aria-selected={active}
            onClick={() => onSelect(mood.id)}
            title={mood.label}
            className={[
              "mood-button inline-flex min-h-11 items-center gap-2 rounded-full border px-3.5 py-2 text-sm transition duration-300",
              "pill-glass hover:bg-black/50",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
              active ? "active border-[var(--accent)] text-white" : "border-white/20 text-white/85",
            ].join(" ")}
          >
            <span className="text-base leading-none" aria-hidden>
              {mood.emoji}
            </span>
            <span className="font-medium tracking-wide">{mood.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function pickFeaturedMoods(moods: Mood[], activeId: string): Mood[] {
  const active = moods.find((m) => m.id === activeId);
  const rest = moods.filter((m) => m.id !== activeId);
  const featured = active ? [active, ...rest.slice(0, 2)] : rest.slice(0, 3);
  return featured;
}
