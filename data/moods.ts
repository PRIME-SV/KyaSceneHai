export type Mood = {
  id: string;
  label: string;
  emoji: string;
  /** YouTube playlist ID (list= param). Swap for your own playlists before launch. */
  playlistId: string;
  wallpaper: {
    desktop: string;
    mobile: string;
  };
  theme: {
    accent: string;
    overlay: string;
  };
  tagline: string;
  title: string;
  description: string;
};

/**
 * Demo playlist IDs are public YouTube lists so playback works out of the box.
 * Replace each playlistId with your own curated list before going live.
 */
export const moods: Mood[] = [
  {
    id: "chai",
    label: "Chai",
    emoji: "☕",
    playlistId: "PLYw6urbXucJX5U8jLeTqap2nhIRXL6yPb",
    wallpaper: {
      desktop: "/wallpapers/chai-desktop.svg",
      mobile: "/wallpapers/chai-mobile.svg",
    },
    theme: { accent: "#c98a3a", overlay: "rgba(20,12,4,0.58)" },
    tagline: "Garma garam chai aur perfect gaane",
    title: "Chai Time Songs",
    description:
      "Sip chai and unwind with a warm playlist made for slow mornings and golden evenings.",
  },
  {
    id: "driving",
    label: "Driving",
    emoji: "🚗",
    playlistId: "PLMC9KNkIncKvYin_USF1qoJQnIyMAfRxl",
    wallpaper: {
      desktop: "/wallpapers/driving-desktop.svg",
      mobile: "/wallpapers/driving-mobile.svg",
    },
    theme: { accent: "#3a8ac9", overlay: "rgba(4,8,20,0.58)" },
    tagline: "Highway pe bas tu aur ye gaane",
    title: "Driving Songs",
    description:
      "Open-road energy for long drives — beat-forward tracks that keep the miles moving.",
  },
  {
    id: "working",
    label: "Working",
    emoji: "💼",
    playlistId: "PLrAXtmRdnEQy6nuLMHjMZOz3rDtZAuOhE",
    wallpaper: {
      desktop: "/wallpapers/working-desktop.svg",
      mobile: "/wallpapers/working-mobile.svg",
    },
    theme: { accent: "#6b8f71", overlay: "rgba(8,14,10,0.58)" },
    tagline: "Focus mode on, distractions off",
    title: "Working Focus Songs",
    description:
      "Steady, low-distraction music for deep work sessions and productive afternoons.",
  },
  {
    id: "rain",
    label: "Rain",
    emoji: "🌧️",
    playlistId: "PL4fGSI1pDJn6jXS_TvRNjiTFCVJGCX1OJ",
    wallpaper: {
      desktop: "/wallpapers/rain-desktop.svg",
      mobile: "/wallpapers/rain-mobile.svg",
    },
    theme: { accent: "#7a9bb8", overlay: "rgba(6,10,16,0.6)" },
    tagline: "Barsaat aur soft beats",
    title: "Rainy Day Songs",
    description:
      "Moody rain vibes — soft, atmospheric tracks for grey skies and window-watching.",
  },
  {
    id: "studying",
    label: "Studying",
    emoji: "📚",
    playlistId: "PLrAXtmRdnEQy6nuLMHjMZOz3rDtZAuOhE",
    wallpaper: {
      desktop: "/wallpapers/studying-desktop.svg",
      mobile: "/wallpapers/studying-mobile.svg",
    },
    theme: { accent: "#b8956c", overlay: "rgba(14,10,6,0.58)" },
    tagline: "Quiet focus for long study nights",
    title: "Study Songs",
    description:
      "Calm concentration playlists for reading, revising, and late-night study sessions.",
  },
  {
    id: "cant-sleep",
    label: "Can't sleep",
    emoji: "🌙",
    playlistId: "PLYw6urbXucJX5U8jLeTqap2nhIRXL6yPb",
    wallpaper: {
      desktop: "/wallpapers/cant-sleep-desktop.svg",
      mobile: "/wallpapers/cant-sleep-mobile.svg",
    },
    theme: { accent: "#8b7ec8", overlay: "rgba(8,6,18,0.62)" },
    tagline: "Soft sounds for restless nights",
    title: "Can't Sleep Songs",
    description:
      "Gentle late-night music when sleep won't come — soft, slow, and soothing.",
  },
  {
    id: "missing-someone",
    label: "Missing someone",
    emoji: "💭",
    playlistId: "PLMC9KNkIncKvYin_USF1qoJQnIyMAfRxl",
    wallpaper: {
      desktop: "/wallpapers/missing-someone-desktop.svg",
      mobile: "/wallpapers/missing-someone-mobile.svg",
    },
    theme: { accent: "#c47a8a", overlay: "rgba(16,8,12,0.58)" },
    tagline: "For the ones on your mind",
    title: "Missing Someone Songs",
    description:
      "Tender, emotional tracks for when someone is far away but close in your thoughts.",
  },
  {
    id: "chilling",
    label: "Chilling",
    emoji: "😎",
    playlistId: "PLMC9KNkIncKvYin_USF1qoJQnIyMAfRxl",
    wallpaper: {
      desktop: "/wallpapers/chilling-desktop.svg",
      mobile: "/wallpapers/chilling-mobile.svg",
    },
    theme: { accent: "#d4a054", overlay: "rgba(12,10,6,0.55)" },
    tagline: "No plans, just vibes",
    title: "Chill Songs",
    description:
      "Laid-back grooves for weekends, lazy evenings, and doing absolutely nothing.",
  },
];

export const defaultMoodId = moods[0].id;

export function getMoodById(id: string): Mood | undefined {
  return moods.find((mood) => mood.id === id);
}

export function getMoodIds(): string[] {
  return moods.map((mood) => mood.id);
}
