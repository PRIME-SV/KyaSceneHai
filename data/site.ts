export const SITE_NAME = "VibePlay";
export const SITE_TAGLINE = "Music for every mood";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vibeplay.local";

export const STORAGE_KEYS = {
  lastMood: "vibeplay:lastMood",
  muted: "vibeplay:muted",
} as const;
