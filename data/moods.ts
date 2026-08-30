import type { Locale } from "@/data/i18n";

export type MoodCopy = {
  label: string;
  headline: string;
  subtitle: string;
  flavor: string;
  tagline: string;
  title: string;
  description: string;
  /** Search-facing title (no site name — appended in metadata helpers). */
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  introHeading: string;
  introBody: string;
};

export type Mood = {
  id: string;
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
  copy: Record<Locale, MoodCopy>;
};

/**
 * Demo playlist IDs are public YouTube lists so playback works out of the box.
 * Replace each playlistId with your own curated list before going live.
 * Marathi stays first as the default home mood.
 */
export const moods: Mood[] = [
  {
    id: "marathi",
    emoji: "🎶",
    playlistId: "PLZnrfG2Bq2mM",
    wallpaper: {
      desktop: "/wallpapers/marathi.png",
      mobile: "/wallpapers/marathi.png",
    },
    theme: { accent: "#c4a06a", overlay: "rgba(12, 8, 4, 0.5)" },
    copy: {
      mr: {
        label: "मराठी धमाल",
        headline: "मराठी गाणी",
        subtitle: "मराठी गाणी · MARATHI GANI",
        flavor: "मराठी गाणी, एक टॅप दूर",
        tagline: "मराठी गाणी — Marathi Gani, एक टॅप दूर",
        title: "मराठी गाणी | Marathi Gani",
        description:
          "मराठी गाणी आणि Marathi gane ऐका — लोकप्रिय, भावपूर्ण आणि धमाल ट्रॅक्स एका क्लिकवर.",
        seoTitle: "मराठी गाणी | Marathi Gani Online",
        seoDescription:
          "मराठी गाणी ऐका ऑनलाइन — Marathi Gani, Marathi songs आणि मराठी धमाल हिट्स मोफत प्लेलिस्टवर. साइनअप नको, एका टॅपवर प्ले.",
        keywords: [
          "मराठी गाणी",
          "marathi gani",
          "marathi gaani",
          "marathi songs",
          "marathi music",
          "मराठी गाणी",
          "marathi dhamaal",
          "मराठी धमाल",
          "free marathi songs online",
        ],
        introHeading: "मराठी गाणी (Marathi Gani) — मोफत ऑनलाइन प्लेलिस्ट",
        introBody:
          "Marathi Music Katta हे मराठी गाणी / Marathi Gani ऐकण्यासाठीचे मोफत ब्राउझर प्लेलिस्ट आहे — चित्रपट गीते, लोकप्रिय मराठी गाने, धमाल हिट्स आणि भावपूर्ण धुन. पेज उघडा, प्ले कराआणि ऐकत रहा. साइनअप नको, अॅप नको — फक्त मराठी songs ऑनलाइन, दिवसरात्र.",
      },
      en: {
        label: "Marathi Dhamaal",
        headline: "Marathi Gani",
        subtitle: "MARATHI SONGS · मराठी गाणी",
        flavor: "Marathi songs, one tap away",
        tagline: "Marathi Gani — Marathi songs, one tap away",
        title: "Marathi Gani | मराठी गाणी",
        description:
          "Listen to Marathi Gani and Marathi songs — popular, soulful, and high-energy tracks one tap away.",
        seoTitle: "Marathi Gani | Marathi Songs Online",
        seoDescription:
          "Listen to Marathi Gani online — free Marathi songs playlist with film hits and dhamaal favourites. No signup. Press play and keep listening.",
        keywords: [
          "marathi Gani",
          "marathi gaane",
          "marathi songs",
          "मराठी गाणी",
          "marathi music",
          "marathi dhamaal",
          "free marathi songs online",
          "marathi playlist",
        ],
        introHeading: "Marathi Gani — the free Marathi songs playlist",
        introBody:
          "Marathi Music Katta is a free browser playlist for Marathi Gani (मराठी गाणी) — film hits, popular Marathi songs, and soulful favourites. Open the page, press play, and keep the music running all day. No signup, no app — just Marathi songs online.",
      },
    },
  },
  {
    id: "ganapati",
    emoji: "🕉️",
    playlistId: "PLSkpD-A7hg7c",//"RDCLAK5uy_ncYAxWDFN4U0ZVBGSTOZDVHy3LOuspIgo",
    wallpaper: {
      desktop: "/wallpapers/ganapati.png",
      mobile: "/wallpapers/ganapati.png",
    },
    theme: { accent: "#d4a05a", overlay: "rgba(12, 8, 4, 0.45)" },
    copy: {
      mr: {
        label: "गणपती",
        headline: "गणेशोत्सवातील गाणी",
        subtitle: "गणेशोत्सवातील गाणी · GANAPATI GANI",
        flavor: "गणपती गाणी, एक टॅप दूर",
        tagline: "गणपती गाणी — Ganapati gane, एक टॅप दूर",
        title: "गणपती गाणी | Ganapati Gane",
        description:
          "गणपती गाणी आणि Ganapati gane ऐका — आरती, भक्तिगीते आणि गणेश सणाची धमाल एका क्लिकवर.",
        seoTitle: "गणपती गाणी | Ganapati Gane Online",
        seoDescription:
          "गणपती गाणी ऐका ऑनलाइन — Ganapati gane, गणेश आरती, भक्तिगीते आणि सणासुदीची धमाल मोफत. साइनअप नको, एका टॅपवर प्ले.",
        keywords: [
          "गणपती गाणी",
          "ganapati gane",
          "ganapati gaane",
          "ganesh songs",
          "गणेश आरती",
          "ganesh aarti",
          "ganpati songs",
          "गणपती आरती",
          "free ganapati songs online",
        ],
        introHeading: "गणपती गाणी (Ganapati Gane) — मोफत ऑनलाइन प्लेलिस्ट",
        introBody:
          "Marathi Music Katta Ganapati हे गणपती गाणी / Ganapati gane ऐकण्यासाठीचे मोफत प्लेलिस्ट आहे — आरती, गणेश भक्तिगीते, गणपती बाप्पा मोरया आणि सणासुदीची धमाल. पेज उघडा, प्ले कराआणि गणेश उत्सवाची ऊर्जा ऐकत रहा. साइनअप नको — फक्त ganpati songs ऑनलाइन.",
      },
      en: {
        label: "Ganapati",
        headline: "Ganapati Gani",
        subtitle: "GANPATI SONGS · गणेशोत्सव गाणी",
        flavor: "Ganapati songs, one tap away",
        tagline: "Ganapati gane — Ganesh songs, one tap away",
        title: "Ganapati Gane | गणेशोत्सव गाणी",
        description:
          "Listen to Ganapati gane and Ganesh songs — aartis, devotionals, and festive tracks one tap away.",
        seoTitle: "Ganapati Gane | Ganesh Songs Online",
        seoDescription:
          "Listen to Ganapati gane online — free Ganesh aarti, bhajans, and festive ganpati songs. No signup. Press play and keep the celebration going.",
        keywords: [
          "ganapati gane",
          "ganapati gaane",
          "ganpati songs",
          "ganesh songs",
          "गणपती गाणी",
          "गणेशोत्सव",
          "ganesh aarti",
          "गणेश आरती",
          "free ganapati songs online",
          "ganpati playlist",
        ],
        introHeading: "Ganapati Gane — free Ganesh songs online",
        introBody:
          "Marathi Music Katta Ganapati is a free browser playlist for Ganapati gane (गणपती गाणी) — aartis, Ganesh bhajans, and festive favourites for Ganesh Chaturthi and beyond. Open the page, press play, and keep listening. No signup, no app — just ganpati songs online.",
      },
    },
  },
  {
    id: "premache-gane",
    emoji: "❤️",
    playlistId: "PLW-SIPf6blZs",//"RDATmdl5X",
    wallpaper: {
      desktop: "/wallpapers/premache-gane.png",
      mobile: "/wallpapers/premache-gane.png",
    },
    theme: { accent: "#e8a045", overlay: "rgba(8, 10, 16, 0.4)" },
    copy: {
      mr: {
        label: "प्रेमाचे गाणे",
        headline: "प्रेमाचे गाणे",
        subtitle: "प्रेमगीते · LOVE SONGS",
        flavor: "प्रेमाचे गाणे, एक टॅप दूर",
        tagline: "प्रेमाचे गाणे — प्रेमगीते, एक टॅप दूर",
        title: "प्रेमाचे गाणे | Love Songs",
        description:
          "प्रेमाचे गाणे आणि प्रेमगीते ऐका — भावपूर्ण धुन आणि मऊ रोमँटिक ट्रॅक्स एका क्लिकवर.",
        seoTitle: "प्रेमाचे गाणे | Marathi Love Songs Online",
        seoDescription:
          "प्रेमाचे गाणे आणि प्रेमगीते ऐका ऑनलाइन — रोमँटिक Marathi love songs मोफत प्लेलिस्टवर. साइनअप नको, एका टॅपवर प्ले.",
        keywords: [
          "प्रेमाचे गाणे",
          "प्रेमगीते",
          "premache gane",
          "marathi love songs",
          "romantic marathi songs",
          "love songs marathi",
        ],
        introHeading: "प्रेमाचे गाणे — मोफत प्रेमगीतांचा प्लेलिस्ट",
        introBody:
          "Marathi Music Katta Premache Gane हे प्रेमगीते आणि प्रेमाचे गाणे ऐकण्यासाठीचे मोफत प्लेलिस्ट आहे — भावपूर्ण रोमँटिक धुन आणि मऊ love songs. पेज उघडा, प्ले कराआणि ऐकत रहा. साइनअप नको.",
      },
      en: {
        label: "Love Songs",
        headline: "Premache Gane",
        subtitle: "LOVE SONGS · प्रेमाचे गाणे",
        flavor: "Love songs, one tap away",
        tagline: "Premache gane — romantic songs, one tap away",
        title: "Premache Gane | Love Songs",
        description:
          "Listen to Premache gane and Marathi love songs — romantic favourites and soft soulful tracks one tap away.",
        seoTitle: "Premache Gane | Marathi Love Songs Online",
        seoDescription:
          "Listen to Premache gane online — free romantic Marathi love songs playlist. No signup. Press play and keep listening.",
        keywords: [
          "premache gane",
          "marathi love songs",
          "romantic marathi songs",
          "प्रेमाचे गाणे",
          "प्रेमगीते",
          "love songs marathi",
        ],
        introHeading: "Premache Gane — free Marathi love songs",
        introBody:
          "Marathi Music Katta Premache Gane is a free browser playlist for love songs and Premache gane — romantic Marathi favourites and soft, soulful tunes. Open the page, press play, and keep listening. No signup, no fuss.",
      },
    },
  },
];

if (moods.length === 0) {
  throw new Error("moods must contain at least one mood");
}

/** Prefer Marathi when present; otherwise the first mood in the list. */
export const marathiMood: Mood =
  moods.find((mood) => mood.id === "marathi") ?? moods[0];

export const defaultMoodId = marathiMood.id;

export function getMoodById(id: string): Mood | undefined {
  return moods.find((mood) => mood.id === id);
}

export function getDefaultMood(): Mood {
  return marathiMood;
}

export function getMoodCopy(mood: Mood, locale: Locale): MoodCopy {
  return mood.copy[locale] ?? mood.copy.mr;
}

export function getMoodIds(): string[] {
  return moods.map((mood) => mood.id);
}

/** Moods that get their own URL path (`/ganapati`, etc.). Default mood is `/`. */
export function getRoutableMoodIds(): string[] {
  return moods.filter((mood) => mood.id !== defaultMoodId).map((mood) => mood.id);
}

export function getYouTubeMusicUrl(playlistId: string): string {
  //return `https://music.youtube.com/playlist?list=${playlistId}`;
  return `https://www.youtube.com/`;
}
