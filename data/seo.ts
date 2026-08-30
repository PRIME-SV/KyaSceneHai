import type { Metadata } from "next";
import {
  defaultMoodId,
  getMoodCopy,
  getYouTubeMusicUrl,
  type Mood,
} from "@/data/moods";
import { FAQ_KEYS, t, type Locale } from "@/data/i18n";
import { SITE_NAME, SITE_URL } from "@/data/site";

/** Public path for a mood. Default mood lives at `/`. */
export function getMoodPath(moodId: string): string {
  return moodId === defaultMoodId ? "/" : `/${moodId}`;
}

export function getMoodAbsoluteUrl(moodId: string): string {
  const path = getMoodPath(moodId);
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function buildMoodMetadata(
  mood: Mood,
  locale: Locale = "mr",
): Metadata {
  const copy = getMoodCopy(mood, locale);
  const url = getMoodAbsoluteUrl(mood.id);
  const title = copy.seoTitle;
  const description = copy.seoDescription;

  return {
    title: {
      absolute: `${title} | ${SITE_NAME}`,
    },
    description,
    keywords: copy.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: locale === "mr" ? "mr_IN" : "en_IN",
      images: [
        {
          url: mood.wallpaper.desktop,
          alt: copy.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [mood.wallpaper.desktop],
    },
    other: {
      "theme-color": "#0a0807",
    },
  };
}

export function buildMoodJsonLd(mood: Mood, locale: Locale = "mr") {
  const copy = getMoodCopy(mood, locale);
  const url = getMoodAbsoluteUrl(mood.id);
  const playlistUrl = getYouTubeMusicUrl(mood.playlistId);

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: t(locale, "metaDescription"),
    inLanguage: locale === "mr" ? "mr-IN" : "en-IN",
    potentialAction: {
      "@type": "ListenAction",
      target: url,
    },
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `${copy.seoTitle} | ${SITE_NAME}`,
    description: copy.seoDescription,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: locale === "mr" ? "mr-IN" : "en-IN",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: new URL(mood.wallpaper.desktop, SITE_URL).toString(),
    },
  };

  const playlist = {
    "@type": "MusicPlaylist",
    name: copy.title,
    description: copy.seoDescription,
    url,
    image: new URL(mood.wallpaper.desktop, SITE_URL).toString(),
    genre: copy.keywords.slice(0, 6),
    sameAs: playlistUrl,
  };

  const faq = {
    "@type": "FAQPage",
    mainEntity: FAQ_KEYS.map((item) => ({
      "@type": "Question",
      name: t(locale, item.questionKey),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(locale, item.answerKey),
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [website, webpage, playlist, faq],
  };
}
