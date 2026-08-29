"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ContentSections } from "@/components/ContentSections";
import { Footer } from "@/components/Footer";
import { HeroCopy } from "@/components/HeroCopy";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { MoodBackground } from "@/components/MoodBackground";
import { MoodCarousel } from "@/components/MoodCarousel";
import { Player } from "@/components/Player";
import { PlayerBar } from "@/components/PlayerBar";
import { TopBar } from "@/components/TopBar";
import { getMoodById, getMoodCopy, moods, type Mood } from "@/data/moods";
import { SITE_NAME, STORAGE_KEYS } from "@/data/site";
import { useMoodTheme } from "@/hooks/useMoodTheme";
import { useYouTubePlayer } from "@/hooks/useYouTubePlayer";

type MoodExperienceProps = {
  initialMood: Mood;
};

export function MoodExperience({ initialMood }: MoodExperienceProps) {
  return (
    <LanguageProvider>
      <MoodExperienceInner initialMood={initialMood} />
    </LanguageProvider>
  );
}

function MoodExperienceInner({ initialMood }: MoodExperienceProps) {
  const { locale, t } = useLanguage();
  const [activeMood, setActiveMood] = useState(
    () => getMoodById(initialMood.id) ?? moods[0] ?? initialMood,
  );
  const [hasUserStarted, setHasUserStarted] = useState(false);

  // Keep selection valid if the active mood was removed from data.
  useEffect(() => {
    if (moods.length === 0) return;
    if (!moods.some((mood) => mood.id === activeMood.id)) {
      setActiveMood(moods[0]);
    }
  }, [activeMood.id]);

  const copy = getMoodCopy(activeMood, locale);

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
    playerKey,
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

      const sameMood = nextMood.id === activeMood.id;
      setActiveMood(nextMood);
      setHasUserStarted(true);

      if (sameMood) {
        if (isReady) play();
        return;
      }

      // Always request the playlist for this mood. loadMood queues if the
      // player is not ready yet, so the UI mood and audio stay in sync.
      loadMood(nextMood.playlistId, true);
    },
    [activeMood.id, isReady, loadMood, play],
  );

  const handleTogglePlay = useCallback(() => {
    setHasUserStarted(true);
    togglePlay();
  }, [togglePlay]);

  return (
    <>
      <Player elementId={playerElementId} instanceKey={playerKey} />

      <section className="relative flex min-h-dvh flex-col overflow-hidden">
        <MoodBackground mood={activeMood} />
        <TopBar />

        <div className="relative z-10 flex flex-1 flex-col justify-center gap-7 py-4 sm:gap-9 sm:py-6">
          <HeroCopy headline={copy.headline} subtitle={copy.subtitle} />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-3 px-4 pb-4 sm:gap-3.5 sm:px-6 sm:pb-5">
          <a
            href="#about"
            className="flex flex-col items-center gap-0.5 text-[0.65rem] font-semibold tracking-[0.28em] text-white/55 uppercase transition hover:text-white/80"
          >
            {t("scroll")}
            <ChevronDownIcon />
          </a>

          <MoodCarousel
            moods={moods}
            activeId={activeMood.id}
            onSelect={handleSelectMood}
          />

          <PlayerBar
            isReady={isReady}
            isPlaying={isPlaying}
            isMuted={isMuted}
            title={hasUserStarted ? track.title : t("pressPlay")}
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
        introHeading={copy.introHeading}
        introBody={copy.introBody}
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
