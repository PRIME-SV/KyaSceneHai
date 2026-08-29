import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MoodExperience } from "@/components/MoodExperience";
import { getMoodById } from "@/data/moods";
import { SITE_NAME, SITE_URL } from "@/data/site";

type MoodLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ mood: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ mood: string }>;
}): Promise<Metadata> {
  const { mood: moodId } = await params;
  const mood = getMoodById(moodId);
  if (!mood) {
    return { title: "Mood not found" };
  }

  const title = mood.title;
  const description = mood.description;
  const ogImage = mood.wallpaper.desktop;

  return {
    title,
    description,
    openGraph: {
      title: `${title} — ${SITE_NAME}`,
      description,
      url: `${SITE_URL}/${mood.id}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
    other: {
      "theme-color": "#0a0807",
    },
  };
}

export default async function MoodLayout({ children, params }: MoodLayoutProps) {
  const { mood: moodId } = await params;
  const mood = getMoodById(moodId);

  if (!mood) {
    notFound();
  }

  return (
    <>
      <MoodExperience initialMood={mood} />
      {children}
    </>
  );
}
