import type { MetadataRoute } from "next";
import { getMoodIds } from "@/data/moods";
import { SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const moodEntries = getMoodIds().map((mood) => ({
    url: `${SITE_URL}/${mood}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...moodEntries,
  ];
}
