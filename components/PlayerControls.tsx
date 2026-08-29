"use client";

type PlayerControlsProps = {
  isReady: boolean;
  isPlaying: boolean;
  isMuted: boolean;
  onTogglePlay: () => void;
  onToggleMute: () => void;
  onNext: () => void;
};

export function PlayerControls({
  isReady,
  isPlaying,
  isMuted,
  onTogglePlay,
  onToggleMute,
  onNext,
}: PlayerControlsProps) {
  return (
    <div className="flex items-center justify-center gap-4 sm:justify-start">
      <button
        type="button"
        disabled={!isReady}
        onClick={onTogglePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
        className="control-primary flex h-16 w-16 items-center justify-center rounded-full text-lg font-semibold text-[#0c0b0a] transition enabled:hover:scale-105 enabled:active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {isPlaying ? (
          <PauseIcon />
        ) : (
          <PlayIcon />
        )}
      </button>

      <button
        type="button"
        disabled={!isReady}
        onClick={onToggleMute}
        aria-label={isMuted ? "Unmute" : "Mute"}
        className="control-secondary flex h-12 w-12 items-center justify-center rounded-full text-white transition enabled:hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {isMuted ? <MuteIcon /> : <VolumeIcon />}
      </button>

      <button
        type="button"
        disabled={!isReady}
        onClick={onNext}
        aria-label="Next track"
        className="control-secondary flex h-12 w-12 items-center justify-center rounded-full text-white transition enabled:hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <NextIcon />
      </button>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5.5v13l11-6.5L8 5.5z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 5h3.5v14H7V5zm6.5 0H17v14h-3.5V5z" />
    </svg>
  );
}

function VolumeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 9v6h3.5L12 19V5L7.5 9H4zm11.5 3a3.5 3.5 0 0 0-1.8-3.05v6.1A3.5 3.5 0 0 0 15.5 12zm-1.8-7.45v2.06a5.5 5.5 0 0 1 0 10.78v2.06a7.5 7.5 0 0 0 0-14.9z" />
    </svg>
  );
}

function MuteIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 9v6h3.5L12 19V5L7.5 9H4zm12.7-2.3 1.4 1.4L16.4 10l1.7 1.9-1.4 1.4L15 11.4l-1.7 1.9-1.4-1.4L13.6 10l-1.7-1.9 1.4-1.4L15 8.6l1.7-1.9z" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 6v12l8.5-6L6 6zm9.5 0H18v12h-2.5V6z" />
    </svg>
  );
}
