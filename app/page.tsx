import type { Metadata } from "next";
import { MoodExperience } from "@/components/MoodExperience";
import { getMoodCopy, marathiMood } from "@/data/moods";
import { SITE_NAME, SITE_URL } from "@/data/site";

const copy = getMoodCopy(marathiMood, "mr");

export const metadata: Metadata = {
  title: copy.title,
  description: copy.description,
  openGraph: {
    title: `${copy.title} — ${SITE_NAME}`,
    description: copy.description,
    url: SITE_URL,
    images: [{ url: marathiMood.wallpaper.desktop }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${copy.title} — ${SITE_NAME}`,
    description: copy.description,
    images: [marathiMood.wallpaper.desktop],
  },
  other: {
    "theme-color": "#0a0807",
  },
};

export default function HomePage() {
  return <MoodExperience initialMood={marathiMood} />;
}
