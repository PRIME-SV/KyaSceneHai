"use client";

import { useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type PlayerBarProps = {
  isReady: boolean;
  isPlaying: boolean;
  title: string;
  videoId: string | null;
  currentTime: number;
  duration: number;
  onTogglePlay: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onSeek: (seconds: number) => void;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function PlayerBar({
  isReady,
  isPlaying,
  title,
  videoId,
  currentTime,
  duration,
  onTogglePlay,
  onPrevious,
  onNext,
  onSeek,
}: PlayerBarProps) {
  const { t } = useLanguage();
  const barRef = useRef<HTMLDivElement>(null);
  const progress = duration > 0 ? Math.min(1, currentTime / duration) : 0;
  const thumb = videoId
    ? `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`
    : null;

  function handleSeek(clientX: number) {
    const el = barRef.current;
    if (!el || duration <= 0 || !isReady) return;
    const rect = el.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    onSeek(ratio * duration);
  }

  return (
    <div className="player-glass mx-auto flex w-full max-w-3xl items-center gap-3 rounded-[1.35rem] px-3 py-2.5 sm:gap-5 sm:rounded-[1.75rem] sm:px-5 sm:py-3.5">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-white/10 sm:h-14 sm:w-14 sm:rounded-xl">
        {thumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumb} alt="" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-white/40">
            <MusicNoteIcon />
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-[#f5efe6] sm:text-[0.95rem]">
          {title}
        </p>
        <p className="truncate text-xs text-white/50">{t("creditsYoutube")}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="w-8 shrink-0 text-[0.65rem] tabular-nums text-white/45">
            {formatTime(currentTime)}
          </span>
          <div
            ref={barRef}
            role="slider"
            aria-label={t("seek")}
            aria-valuemin={0}
            aria-valuemax={Math.floor(duration)}
            aria-valuenow={Math.floor(currentTime)}
            tabIndex={isReady ? 0 : -1}
            className="group relative h-5 flex-1 cursor-pointer touch-none"
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId);
              handleSeek(e.clientX);
            }}
            onPointerMove={(e) => {
              if (e.buttons !== 1) return;
              handleSeek(e.clientX);
            }}
          >
            <div className="absolute top-1/2 right-0 left-0 h-[3px] -translate-y-1/2 rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-[var(--player-accent)] transition-[width] duration-150"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>
          <span className="w-8 shrink-0 text-right text-[0.65rem] tabular-nums text-white/45">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-0.5 sm:gap-1.5">
        <button
          type="button"
          disabled={!isReady}
          onClick={onPrevious}
          aria-label={t("previousTrack")}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white/85 transition enabled:hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <PrevIcon />
        </button>
        <button
          type="button"
          disabled={!isReady}
          onClick={onTogglePlay}
          aria-label={isPlaying ? t("pause") : t("play")}
          className="control-primary flex h-12 w-12 items-center justify-center rounded-full text-[#1a0d0a] transition enabled:hover:scale-105 enabled:active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 sm:h-14 sm:w-14"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button
          type="button"
          disabled={!isReady}
          onClick={onNext}
          aria-label={t("nextTrack")}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white/85 transition enabled:hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <NextIcon />
        </button>
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5.5v13l11-6.5L8 5.5z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 5h3.5v14H7V5zm6.5 0H17v14h-3.5V5z" />
    </svg>
  );
}

function PrevIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18 6v12L9.5 12 18 6zM6 6h2.5v12H6V6z" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 6v12l8.5-6L6 6zm9.5 0H18v12h-2.5V6z" />
    </svg>
  );
}

function MusicNoteIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
    </svg>
  );
}
