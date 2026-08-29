import type { Locale } from "@/data/i18n";

export type MoodCopy = {
  label: string;
  headline: string;
  subtitle: string;
  flavor: string;
  tagline: string;
  title: string;
  description: string;
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
      mobile: "/wallpapers/marathi-mobile.svg",
    },
    theme: { accent: "#c4a06a", overlay: "rgba(12, 8, 4, 0.5)" },
    copy: {
      mr: {
        label: "मराठी धमाल",
        headline: "मराठी धमाल",
        subtitle: "मराठी धमाल म्युझिक",
        flavor: "मराठी धमाल गाणी, एक टॅप दूर",
        tagline: "मराठी धमाल वाला म्युझिक, एक टॅप दूर",
        title: "मराठी धमाल गाणी",
        description:
          "मराठी धमाल गाणी ऐका — लोकप्रिय, भावपूर्ण आणि उत्साही ट्रॅक्स एका क्लिकवर.",
        introHeading: "मराठी धमाल गाण्यांचा प्लेलिस्ट, एका टॅपवर",
        introBody:
          "VibePlay Marathi Dhamaal हे मराठी धमाल गाण्यांसाठीचे मोफत प्लेलिस्ट आहे — चित्रपट गीते, लोकप्रिय हिट्स आणि भावपूर्ण धुन. पेज उघडा, प्ले दाबा आणि ऐकत रहा. साइनअप नको, काहीही गोंधळ नाही.",
      },
      en: {
        label: "Marathi Dhamaal",
        headline: "Marathi Dhamaal",
        subtitle: "MARATHI DHAMAAL MUSIC",
        flavor: "Marathi Dhamaal songs, one tap away",
        tagline: "Marathi Dhamaal music, one tap away",
        title: "Marathi Dhamaal Songs",
        description:
          "Listen to Marathi Dhamaal songs — popular, soulful, and high-energy tracks one tap away.",
        introHeading: "The Marathi Dhamaal playlist, one tap away",
        introBody:
          "VibePlay Marathi Dhamaal is a free playlist for Marathi Dhamaal songs — film hits, popular favourites, and soulful tunes. Open the page, press play, and keep listening. No signup, no fuss.",
      },
    },
  },
  {
    id: "ganapati",
    emoji: "🕉️",
    playlistId: "RDCLAK5uy_ncYAxWDFN4U0ZVBGSTOZDVHy3LOuspIgo",
    wallpaper: {
      desktop: "/wallpapers/ganapati.png",
      mobile: "/wallpapers/ganapati-mobile.svg",
    },
    theme: { accent: "#d4a05a", overlay: "rgba(12, 8, 4, 0.45)" },
    copy: {
      mr: {
        label: "गणपती",
        headline: "गणपती",
        subtitle: "गणपती म्युझिक",
        flavor: "गणपती गाणी, एक टॅप दूर",
        tagline: "गणपती वाला म्युझिक, एक टॅप दूर",
        title: "गणपती गाणी",
        description:
          "गणपती गाणी ऐका — भक्तिमय आरती, उत्साही गणेश गीते आणि सणाची धमाल एका क्लिकवर.",
        introHeading: "गणपती गाण्यांचा प्लेलिस्ट, एका टॅपवर",
        introBody:
          "VibePlay Ganapati हे गणपती गाण्यांसाठीचे मोफत प्लेलिस्ट आहे — आरती, भक्तिगीते आणि सणासुदीची धमाल. पेज उघडा, प्ले दाबा आणि ऐकत रहा. साइनअप नको, काहीही गोंधळ नाही.",
      },
      en: {
        label: "Ganapati",
        headline: "Ganapati",
        subtitle: "GANAPATI MUSIC",
        flavor: "Ganapati songs, one tap away",
        tagline: "Ganapati music, one tap away",
        title: "Ganapati Songs",
        description:
          "Listen to Ganapati songs — aartis, festive favourites, and high-energy Ganesh tracks one tap away.",
        introHeading: "The Ganapati playlist, one tap away",
        introBody:
          "VibePlay Ganapati is a free playlist for Ganapati songs — aartis, devotionals, and festive favourites. Open the page, press play, and keep listening. No signup, no fuss.",
      },
    },
  },
  {
    id: "preeti",
    emoji: "🎤",
    playlistId: "RDATmdl5X",
    wallpaper: {
      desktop: "/wallpapers/preeti.png",
      mobile: "/wallpapers/preeti-mobile.svg",
    },
    theme: { accent: "#e8a045", overlay: "rgba(8, 10, 16, 0.4)" },
    copy: {
      mr: {
        label: "प्रीती",
        headline: "प्रीती",
        subtitle: "प्रीती म्युझिक",
        flavor: "प्रीती गाणी, एक टॅप दूर",
        tagline: "प्रीती वाला म्युझिक, एक टॅप दूर",
        title: "प्रीती गाणी",
        description:
          "प्रीती गाणी ऐका — प्रेमगीते, भावपूर्ण धुन आणि मऊ रोमँटिक ट्रॅक्स एका क्लिकवर.",
        introHeading: "प्रीती गाण्यांचा प्लेलिस्ट, एका टॅपवर",
        introBody:
          "VibePlay Preeti हे प्रेमगीतांसाठीचे मोफत प्लेलिस्ट आहे — भावपूर्ण गाणी आणि मऊ रोमँटिक धुन. पेज उघडा, प्ले दाबा आणि ऐकत रहा. साइनअप नको, काहीही गोंधळ नाही.",
      },
      en: {
        label: "Preeti",
        headline: "Preeti",
        subtitle: "PREETI MUSIC",
        flavor: "Preeti songs, one tap away",
        tagline: "Preeti music, one tap away",
        title: "Preeti Songs",
        description:
          "Listen to Preeti songs — romantic favourites, soulful tunes, and soft love tracks one tap away.",
        introHeading: "The Preeti playlist, one tap away",
        introBody:
          "VibePlay Preeti is a free playlist for love songs — romantic favourites and soft, soulful tunes. Open the page, press play, and keep listening. No signup, no fuss.",
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

export function getYouTubeMusicUrl(playlistId: string): string {
  return `https://music.youtube.com/playlist?list=${playlistId}`;
}
