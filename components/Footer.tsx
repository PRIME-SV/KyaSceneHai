import { getYouTubeMusicUrl } from "@/data/moods";
import { CREATOR, SITE_NAME, SITE_TAGLINE, SUPPORT_URL } from "@/data/site";

type FooterProps = {
  playlistId: string;
};

export function Footer({ playlistId }: FooterProps) {
  return (
    <footer className="border-t border-white/[0.04] bg-[var(--background)] px-5 pt-10 pb-12 text-center sm:px-8 sm:pt-12 sm:pb-14">
      <p className="font-display text-2xl font-bold tracking-wide text-[var(--gold)] sm:text-3xl">
        {SITE_NAME}
      </p>
      <p className="mt-1 text-sm text-[var(--gold)]/80">
        {SITE_TAGLINE} — vibeplay
      </p>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <a
          href={getYouTubeMusicUrl(playlistId)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-red-400/50 px-5 text-sm font-medium text-red-300 shadow-[0_0_18px_rgba(248,113,113,0.2)] transition hover:bg-red-500/10"
        >
          <YouTubeIcon />
          YouTube Music
        </a>
        <a
          href={SUPPORT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-pink-400/45 px-5 text-sm font-medium text-pink-300 shadow-[0_0_18px_rgba(244,114,182,0.22)] transition hover:bg-pink-500/10"
        >
          <HeartIcon />
          Support us
        </a>
      </div>

      <p className="mx-auto mt-8 max-w-md text-xs leading-relaxed text-white/40">
        Audio plays through YouTube&apos;s player. VibePlay does not host or claim
        ownership of the music — all rights belong to their respective owners.
      </p>

      <p className="mt-6 text-sm text-white/45">
        Powered by{" "}
        <a
          href={CREATOR.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[var(--gold)] transition hover:underline"
        >
          {CREATOR.name}
        </a>
      </p>
    </footer>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2.2 5.8 7 4.2-7 4.2V7.8z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 21s-7.2-4.35-9.6-8.4C.6 9.3 2.1 6 5.4 6c1.8 0 3.15 1.05 3.9 2.1C10.05 7.05 11.4 6 13.2 6c3.3 0 4.8 3.3 3 6.6C19.2 16.65 12 21 12 21z" />
    </svg>
  );
}
