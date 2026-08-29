"use client";

import { useEffect } from "react";
import type { Mood } from "@/data/moods";
import { STORAGE_KEYS } from "@/data/site";

export function useMoodTheme(mood: Mood) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", mood.theme.accent);
    root.style.setProperty("--overlay", mood.theme.overlay);
    root.style.setProperty("--theme-color", mood.theme.accent);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", mood.theme.accent);
    }

    try {
      localStorage.setItem(STORAGE_KEYS.lastMood, mood.id);
    } catch {
      // ignore private mode / blocked storage
    }
  }, [mood]);
}
