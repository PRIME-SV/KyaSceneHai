"use client";

import type { Mood } from "@/data/moods";

type MoodGridProps = {
  moods: Mood[];
  activeId: string;
  onSelect: (moodId: string) => void;
};

export function MoodGrid({ moods, activeId, onSelect }: MoodGridProps) {
  return (
    <div
      className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
      role="listbox"
      aria-label="Choose a mood"
    >
      {moods.map((mood) => {
        const active = mood.id === activeId;
        return (
          <button
            key={mood.id}
            type="button"
            role="option"
            aria-selected={active}
            onClick={() => onSelect(mood.id)}
            className={[
              "mood-button group flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl border px-3 py-3 text-center transition duration-300",
              "bg-white/5 backdrop-blur-sm hover:bg-white/10",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
              active ? "active border-[var(--accent)]" : "border-white/15",
            ].join(" ")}
          >
            <span className="text-2xl leading-none" aria-hidden>
              {mood.emoji}
            </span>
            <span className="font-display text-sm tracking-wide text-white/90 sm:text-base">
              {mood.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
