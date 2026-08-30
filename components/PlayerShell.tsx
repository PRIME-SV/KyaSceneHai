"use client";

import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";
import { MoodExperience } from "@/components/MoodExperience";
import {
  defaultMoodId,
  getMoodById,
  getRoutableMoodIds,
  marathiMood,
  type Mood,
} from "@/data/moods";

function moodFromRoute(pathname: string, moodParam?: string): Mood | null {
  const segment =
    moodParam || pathname.replace(/^\//, "").split("/")[0] || "";
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
  const params = useParams<{ mood?: string }>();
  const mood = useMemo(
    () => moodFromRoute(pathname, params.mood),
    [pathname, params.mood],
  );

  if (!mood) return null;

  return <MoodExperience initialMood={mood} />;
}
