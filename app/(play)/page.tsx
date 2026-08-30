import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { marathiMood } from "@/data/moods";
import { buildMoodJsonLd, buildMoodMetadata } from "@/data/seo";

export const metadata: Metadata = buildMoodMetadata(marathiMood, "mr");

/** Metadata + JSON-LD only — player lives in `(play)/layout`. */
export default function HomePage() {
  return <JsonLd data={buildMoodJsonLd(marathiMood, "mr")} />;
}
