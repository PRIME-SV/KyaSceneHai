import type { MetadataRoute } from "next";
import { getMoodIds } from "@/data/moods";
import { getMoodAbsoluteUrl } from "@/data/seo";
import { SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const moodEntries = getMoodIds().map((moodId) => ({
    url: getMoodAbsoluteUrl(moodId),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: moodId === "marathi" ? 1 : 0.9,
  }));

  // Deduplicate in case default mood URL equals SITE_URL
  const seen = new Set<string>();
  const entries: MetadataRoute.Sitemap = [];

  for (const entry of [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...moodEntries,
  ]) {
    if (seen.has(entry.url)) continue;
    seen.add(entry.url);
    entries.push(entry);
  }

  return entries;
}
