"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ContentSections } from "@/components/ContentSections";
import { Footer } from "@/components/Footer";
import { HeroCopy } from "@/components/HeroCopy";
import { MoodBackground } from "@/components/MoodBackground";
import { MoodGrid } from "@/components/MoodGrid";
import { Player } from "@/components/Player";
import { PlayerBar } from "@/components/PlayerBar";
import { TopBar } from "@/components/TopBar";
import { getMoodById, moods, type Mood } from "@/data/moods";
import { SITE_NAME, STORAGE_KEYS } from "@/data/site";
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
  const moodsRef = useRef<HTMLDivElement>(null);

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
    track,
    currentTime,
    duration,
    togglePlay,
    toggleMute,
    next,
    previous,
    seek,
    loadMood,
    play,
  } = useYouTubePlayer({
    initialPlaylistId: initialMood.playlistId,
    startMuted,
  });

  useMoodTheme(activeMood);

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

  const handleChangeTheme = useCallback(() => {
    const idx = moods.findIndex((m) => m.id === activeMood.id);
    const nextMood = moods[(idx + 1) % moods.length];
    handleSelectMood(nextMood.id);
    moodsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [activeMood.id, handleSelectMood]);

  const handleTogglePlay = useCallback(() => {
    setHasUserStarted(true);
    togglePlay();
  }, [togglePlay]);

  return (
    <>
      <Player elementId={playerElementId} />

      <section className="relative flex min-h-dvh flex-col overflow-hidden">
        <MoodBackground mood={activeMood} />
        <TopBar onChangeTheme={handleChangeTheme} />

        <div className="relative z-10 flex flex-1 flex-col justify-center gap-7 py-4 sm:gap-9 sm:py-6">
          <HeroCopy
            headline={activeMood.headline}
            subtitle={activeMood.subtitle}
          />
          <div ref={moodsRef}>
            <MoodGrid
              moods={moods}
              activeId={activeMood.id}
              onSelect={handleSelectMood}
              compact
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center px-4 pb-4 sm:px-6 sm:pb-5">
          <a
            href="#about"
            className="mb-3 flex flex-col items-center gap-0.5 text-[0.65rem] font-semibold tracking-[0.28em] text-white/55 uppercase transition hover:text-white/80"
          >
            Scroll
            <ChevronDownIcon />
          </a>
          <PlayerBar
            isReady={isReady}
            isPlaying={isPlaying}
            isMuted={isMuted}
            title={hasUserStarted ? track.title : "Press play"}
            videoId={track.videoId}
            currentTime={currentTime}
            duration={duration}
            onTogglePlay={handleTogglePlay}
            onPrevious={previous}
            onNext={next}
            onSeek={seek}
            onToggleMute={toggleMute}
          />
        </div>
      </section>

      <ContentSections
        siteName={SITE_NAME}
        introHeading={activeMood.introHeading}
        introBody={activeMood.introBody}
        playlistId={activeMood.playlistId}
      />
      <Footer playlistId={activeMood.playlistId} />
    </>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 16.5 4.5 9l1.4-1.4L12 13.7l6.1-6.1L19.5 9 12 16.5z" />
    </svg>
  );
}
