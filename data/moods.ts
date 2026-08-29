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
  /** Large Devanagari (or display) hero line */
  headline: string;
  /** English subtitle under the headline */
  subtitle: string;
  /** Decorative folk / mood flavor line */
  flavor: string;
  tagline: string;
  title: string;
  description: string;
  introHeading: string;
  introBody: string;
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
    playlistId: "PLgObA3pAqvOh87Z03QG8Z4xE-uqlAWSBy",
    wallpaper: {
      desktop: "/wallpapers/chai.png",
      mobile: "/wallpapers/chai-mobile.svg",
    },
    theme: { accent: "#d4a05a", overlay: "rgba(12, 8, 4, 0.45)" },
    headline: "चाय टाइम",
    subtitle: "CHAI WALA MUSIC",
    flavor: "एक कप चाय, और सही गाना",
    tagline: "Chai wala music, one tap away",
    title: "Chai Time Songs",
    description:
      "Sip chai and unwind with a warm playlist made for slow mornings and golden evenings.",
    introHeading: "The chai-time playlist for slow mornings",
    introBody:
      "VibePlay Chai is a free playlist for warm, unhurried listening — soft Hindi favourites and easy grooves that pair with a hot cup. Open the page, press play, and let the kettle and the music do the rest. No signup, no fuss.",
  },
  {
    id: "driving",
    label: "Driving",
    emoji: "🚗",
    playlistId: "PLP2frnsrkdDA",
    wallpaper: {
      desktop: "/wallpapers/driving.png",
      mobile: "/wallpapers/driving-mobile.svg",
    },
    theme: { accent: "#e8a045", overlay: "rgba(8, 10, 16, 0.4)" },
    headline: "ट्रक ड्राइवर",
    subtitle: "TRUCK WALA MUSIC",
    flavor: "बुरी नज़र वाले तेरा मुँह काला",
    tagline: "Truck wala music, one tap away",
    title: "Driving Songs",
    description:
      "Open-road energy for long drives — beat-forward tracks that keep the miles moving.",
    introHeading: "The Indian truck driver playlist for long roads",
    introBody:
      "VibePlay Driving is a free playlist for the Punjabi, Hindi, Bhojpuri and 90s Bollywood highway songs heard in truck cabins and roadside dhabas across India. Open the page, press play, and keep the music running for the whole journey. No signup required.",
  },
  {
    id: "nfak",
    label: "Nushrat Fateh Ali Khan",
    emoji: "🎤",
    playlistId: "PLeHcbwsMVRm4RVm8cm9gbgCuivb_HKcar",
    wallpaper: {
      desktop: "/wallpapers/nfak.png",
      mobile: "/wallpapers/working-mobile.svg",
    },
    theme: { accent: "#7a9e78", overlay: "rgba(6, 12, 8, 0.5)" },
    headline: "नुश्रत फतेह अली खान",
    subtitle: "QAWWALI MUSIC",
    flavor: "फोकस ऑन, डिस्ट्रैक्शन ऑफ",
    tagline: "Qawwali wala music, one tap away",
    title: "Qawwali Songs",
    description:
      "Steady, low-distraction music for deep work sessions and productive afternoons.",
    introHeading: "The deep-work playlist for long desks",
    introBody:
      "VibePlay Working is a free focus playlist for deep work, coding sprints, and productive afternoons. Steady tracks that stay out of the way so you can stay in the zone. Press play once — no account needed.",
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
    theme: { accent: "#8aabc4", overlay: "rgba(4, 8, 14, 0.5)" },
    headline: "बारिश",
    subtitle: "RAIN WALA MUSIC",
    flavor: "बादल आए, बीट्स बजे",
    tagline: "Rain wala music, one tap away",
    title: "Rainy Day Songs",
    description:
      "Moody rain vibes — soft, atmospheric tracks for grey skies and window-watching.",
    introHeading: "The rainy-day playlist for grey skies",
    introBody:
      "VibePlay Rain is a free atmospheric playlist for monsoon moods, window-watching, and soft grey afternoons. Press play and let the weather and the music share the same tempo. No signup required.",
  },
  {
    id: "marathi",
    label: "Marathi",
    emoji: "🎤",
    playlistId: "PLZnrfG2Bq2mM",
    wallpaper: {
      desktop: "/wallpapers/marathi.png",
      mobile: "/wallpapers/marathi-mobile.svg",
    },
    theme: { accent: "#c4a06a", overlay: "rgba(12, 8, 4, 0.5)" },
    headline: "मराठी गाने",
    subtitle: "MARATHI WALA MUSIC",
    flavor: "मराठी गाने, एक टैप दूर",
    tagline: "Marathi wala music, one tap away",
    title: "Marathi Songs",
    description:
      "मराठी गाने, एक टैप दूर",
    introHeading: "The marathi playlist for long nights",
    introBody:
      "VibePlay Marathi is a free concentration playlist for reading, revising, and late-night exam prep. Calm tracks that help you stay with the page. One tap to start — no account needed.",
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
    theme: { accent: "#9a8ec8", overlay: "rgba(6, 4, 14, 0.55)" },
    headline: "नींद नहीं",
    subtitle: "NIGHT WALA MUSIC",
    flavor: "रात जागे, धुन सोए",
    tagline: "Night wala music, one tap away",
    title: "Can't Sleep Songs",
    description:
      "Gentle late-night music when sleep won't come — soft, slow, and soothing.",
    introHeading: "The late-night playlist when sleep won't come",
    introBody:
      "VibePlay Can't Sleep is a free soft playlist for restless nights and quiet hours. Gentle tracks that keep you company until sleep finally arrives. Press play — no signup required.",
  },
  {
    id: "missing-someone",
    label: "Missing someone",
    emoji: "💭",
    playlistId: "PLL5fFmQ_9Sao",
    wallpaper: {
      desktop: "/wallpapers/missing-someone-desktop.svg",
      mobile: "/wallpapers/missing-someone-mobile.svg",
    },
    theme: { accent: "#d48a9a", overlay: "rgba(14, 6, 10, 0.5)" },
    headline: "याद आती है",
    subtitle: "YAAD WALA MUSIC",
    flavor: "दूर है वो, पास है गाना",
    tagline: "Yaad wala music, one tap away",
    title: "Missing Someone Songs",
    description:
      "Tender, emotional tracks for when someone is far away but close in your thoughts.",
    introHeading: "The missing-someone playlist for quiet hearts",
    introBody:
      "VibePlay Missing Someone is a free emotional playlist for when someone is far away but close in your thoughts. Tender tracks for late replies and long gaps. One tap — no account needed.",
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
    theme: { accent: "#d4a054", overlay: "rgba(10, 8, 4, 0.45)" },
    headline: "आराम",
    subtitle: "CHILL WALA MUSIC",
    flavor: "कोई प्लान नहीं, बस वाइब्स",
    tagline: "Chill wala music, one tap away",
    title: "Chill Songs",
    description:
      "Laid-back grooves for weekends, lazy evenings, and doing absolutely nothing.",
    introHeading: "The chill playlist for lazy evenings",
    introBody:
      "VibePlay Chilling is a free laid-back playlist for weekends, nothing-days, and easy evenings. No plans required — just press play and float. No signup, no fuss.",
  },
];

export const defaultMoodId = moods[0].id;

export function getMoodById(id: string): Mood | undefined {
  return moods.find((mood) => mood.id === id);
}

export function getMoodIds(): string[] {
  return moods.map((mood) => mood.id);
}

export function getYouTubeMusicUrl(playlistId: string): string {
  return `https://music.youtube.com/playlist?list=${playlistId}`;
}
