import { getMoodIds } from "@/data/moods";

export function generateStaticParams() {
  return getMoodIds().map((mood) => ({ mood }));
}

export const dynamicParams = false;

export default function MoodPage() {
  return null;
}
