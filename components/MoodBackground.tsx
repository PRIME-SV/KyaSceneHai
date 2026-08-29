"use client";

import { useState } from "react";
import type { Mood } from "@/data/moods";

type MoodBackgroundProps = {
  mood: Mood;
};

function WallpaperLayer({
  mood,
  className,
  onAnimationEnd,
}: {
  mood: Mood;
  className?: string;
  onAnimationEnd?: () => void;
}) {
  return (
    <div
      className={`absolute inset-0 ${className ?? ""}`}
      onAnimationEnd={onAnimationEnd}
    >
      <picture>
        <source media="(max-width: 767px)" srcSet={mood.wallpaper.mobile} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mood.wallpaper.desktop}
          alt=""
          className="h-full w-full object-cover"
        />
      </picture>
    </div>
  );
}

export function MoodBackground({ mood }: MoodBackgroundProps) {
  const [baseMood, setBaseMood] = useState(mood);
  const [incoming, setIncoming] = useState<Mood | null>(null);
  const [trackedId, setTrackedId] = useState(mood.id);

  if (mood.id !== trackedId) {
    setTrackedId(mood.id);
    setIncoming(mood);
  }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <WallpaperLayer mood={baseMood} />
      {incoming ? (
        <WallpaperLayer
          key={incoming.id}
          mood={incoming}
          className="wallpaper-fade-in"
          onAnimationEnd={() => {
            setBaseMood(incoming);
            setIncoming(null);
          }}
        />
      ) : null}
    </div>
  );
}
