"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { MoodExperience } from "@/components/MoodExperience";
import {
  defaultMoodId,
  getMoodById,
  getRoutableMoodIds,
  marathiMood,
  type Mood,
} from "@/data/moods";

function moodFromPathname(pathname: string): Mood | null {
  const segment = pathname.replace(/^\//, "").split("/")[0] ?? "";
  if (!segment || segment === defaultMoodId) {
    return marathiMood;
  }
  if (getRoutableMoodIds().includes(segment)) {
    return getMoodById(segment) ?? null;
  }
  // Unknown path (e.g. 404) — don't mount the player over error UI.
  return null;
}

/**
 * Shared player shell so switching `/` ↔ `/ganapati` keeps audio mounted.
 * Per-route `page.tsx` files only supply metadata + JSON-LD.
 */
export function PlayerShell() {
  const pathname = usePathname();
  const mood = useMemo(() => moodFromPathname(pathname), [pathname]);

  if (!mood) return null;

  return <MoodExperience initialMood={mood} />;
}
