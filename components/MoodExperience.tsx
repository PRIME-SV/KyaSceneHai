"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MoodBackground } from "@/components/MoodBackground";
import { MoodGrid } from "@/components/MoodGrid";
import { Player } from "@/components/Player";
import { PlayerControls } from "@/components/PlayerControls";
import { getMoodById, moods, type Mood } from "@/data/moods";
import { STORAGE_KEYS } from "@/data/site";
import { useMoodTheme } from "@/hooks/useMoodTheme";
import { useYouTubePlayer } from "@/hooks/useYouTubePlayer";

type MoodExperienceProps = {
  initialMood: Mood;
};

export function MoodExperience({ initialMood }: MoodExperienceProps) {
  const router = useRouter();
  const [activeMood, setActiveMood] = useState(initialMood);
  const [routeMoodId, setRouteMoodId] = useState(initialMood.id);
  const [hasUserStarted, setHasUserStarted] = useState(false);
  const skipRouteLoadRef = useRef(false);

  // Sync local mood when the URL changes (back/forward) — adjust during render
  if (initialMood.id !== routeMoodId) {
    setRouteMoodId(initialMood.id);
    setActiveMood(initialMood);
  }

  const startMuted = useMemo(() => {
    if (typeof window === "undefined") return false;
    try {
      return localStorage.getItem(STORAGE_KEYS.muted) === "1";
    } catch {
      return false;
    }
  }, []);

  const {
    playerElementId,
    isReady,
    isPlaying,
    isMuted,
    togglePlay,
    toggleMute,
    next,
    loadMood,
    play,
  } = useYouTubePlayer({
    initialPlaylistId: initialMood.playlistId,
    startMuted,
  });

  useMoodTheme(activeMood);

  // Load playlist when route mood changes from outside (not from our own click)
  useEffect(() => {
    if (skipRouteLoadRef.current) {
      skipRouteLoadRef.current = false;
      return;
    }
    if (!hasUserStarted || !isReady) return;
    loadMood(initialMood.playlistId, true);
  }, [initialMood.id, initialMood.playlistId, hasUserStarted, isReady, loadMood]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.muted, isMuted ? "1" : "0");
    } catch {
      // ignore
    }
  }, [isMuted]);

  const handleSelectMood = useCallback(
    (moodId: string) => {
      const nextMood = getMoodById(moodId);
      if (!nextMood) return;

      skipRouteLoadRef.current = true;
      setActiveMood(nextMood);
      router.replace(`/${nextMood.id}`, { scroll: false });

      setHasUserStarted(true);
      if (isReady) {
        if (nextMood.id === activeMood.id) {
          play();
        } else {
          loadMood(nextMood.playlistId, true);
        }
      }
    },
    [activeMood.id, isReady, loadMood, play, router],
  );

  const handleTogglePlay = useCallback(() => {
    setHasUserStarted(true);
    togglePlay();
  }, [togglePlay]);

  return (
    <>
      <MoodBackground mood={activeMood} />
      <Player elementId={playerElementId} />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-5 py-8 sm:px-8 sm:py-10">
        <Header tagline={activeMood.tagline} />

        <main className="flex flex-1 flex-col justify-center gap-10 py-10 sm:gap-12">
          <section className="space-y-4">
            <h2 className="font-display text-sm uppercase tracking-[0.2em] text-white/50">
              Pick a vibe
            </h2>
            <MoodGrid
              moods={moods}
              activeId={activeMood.id}
              onSelect={handleSelectMood}
            />
          </section>

          <section className="space-y-3">
            <PlayerControls
              isReady={isReady}
              isPlaying={isPlaying}
              isMuted={isMuted}
              onTogglePlay={handleTogglePlay}
              onToggleMute={toggleMute}
              onNext={next}
            />
            {!hasUserStarted && (
              <p className="text-sm text-white/50">
                Tap a mood or press play to start the music.
              </p>
            )}
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
