export const SITE_NAME = "VibePlay";
export const SITE_TAGLINE = "Music for every mood";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vibeplay.local";

export const SUPPORT_URL =
  process.env.NEXT_PUBLIC_SUPPORT_URL ?? "https://buymeacoffee.com";

export const CREATOR = {
  name: "Harshit",
  url: process.env.NEXT_PUBLIC_CREATOR_URL ?? "https://example.com",
} as const;

export const STORAGE_KEYS = {
  lastMood: "vibeplay:lastMood",
  muted: "vibeplay:muted",
} as const;

export const FEATURES = [
  {
    title: "Made for the moment",
    body: "A non-stop mood playlist with simple controls that work on mobile and desktop.",
    icon: "music" as const,
  },
  {
    title: "Every vibe in one tap",
    body: "Chai, driving, rain, study nights, late hours — switch moods without leaving the page.",
    icon: "mic" as const,
  },
  {
    title: "No account needed",
    body: "Start listening here, or open the same playlist on YouTube Music whenever you want.",
    icon: "clock" as const,
  },
] as const;

export const FAQ = [
  {
    question: "What is VibePlay?",
    answer:
      "VibePlay is a browser-based mood music player — pick a vibe, press play, and listen without creating an account.",
  },
  {
    question: "Is VibePlay free to use?",
    answer:
      "Yes. Listening here is free. Optional support helps keep the project running, but nothing is required to play.",
  },
  {
    question: "Does it work on a phone?",
    answer:
      "Yes. The player is designed for mobile screens, with large play, skip and seek controls for easy use.",
  },
  {
    question: "Where does the music play from?",
    answer:
      "Songs play through YouTube's player. You can also open the same playlist on YouTube Music anytime.",
  },
  {
    question: "Is there a playlist I can follow?",
    answer:
      "Each mood has its own YouTube playlist. Use the YouTube Music button in the footer to open and save it.",
  },
] as const;
