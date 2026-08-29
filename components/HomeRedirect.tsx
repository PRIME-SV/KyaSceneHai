"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultMoodId, getMoodById } from "@/data/moods";
import { STORAGE_KEYS } from "@/data/site";

export function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    let target = defaultMoodId;
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.lastMood);
      if (saved && getMoodById(saved)) {
        target = saved;
      }
    } catch {
      // ignore
    }
    router.replace(`/${target}`);
  }, [router]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-[#0c0b0a] text-white/70">
      <p className="font-display text-lg tracking-wide">Loading your vibe…</p>
    </div>
  );
}
