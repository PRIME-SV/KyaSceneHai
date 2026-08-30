import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import {
  defaultMoodId,
  getMoodById,
  getRoutableMoodIds,
} from "@/data/moods";
import { buildMoodJsonLd, buildMoodMetadata } from "@/data/seo";

type MoodPageProps = {
  params: Promise<{ mood: string }>;
};

export function generateStaticParams() {
  return getRoutableMoodIds().map((mood) => ({ mood }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: MoodPageProps): Promise<Metadata> {
  const { mood: moodId } = await params;
  const mood = getMoodById(moodId);
  if (!mood || mood.id === defaultMoodId) {
    return {};
  }
  return buildMoodMetadata(mood, "mr");
}

/** Metadata + JSON-LD only — player lives in `(play)/layout`. */
export default async function MoodPage({ params }: MoodPageProps) {
  const { mood: moodId } = await params;
  const mood = getMoodById(moodId);

  if (!mood || mood.id === defaultMoodId) {
    notFound();
  }

  return <JsonLd data={buildMoodJsonLd(mood, "mr")} />;
}
