import { t, DEFAULT_LOCALE, type Locale } from "@/data/i18n";

export const SITE_NAME = "Marathi Music Katta";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://marathikatta.local";

export const SUPPORT_URL =
  process.env.NEXT_PUBLIC_SUPPORT_URL ?? "https://buymeacoffee.com/primesv";

export const CREATOR = {
  name: "SDV",
  url: process.env.NEXT_PUBLIC_CREATOR_URL ?? "https://example.com",
} as const;

export const STORAGE_KEYS = {
  locale: "marathikatta:locale",
} as const;

export function getSiteTagline(locale: Locale = DEFAULT_LOCALE) {
  return t(locale, "siteTagline");
}

export function getSiteDescription(locale: Locale = DEFAULT_LOCALE) {
  return t(locale, "metaDescription");
}

/** Default English-facing tagline for static metadata */
export const SITE_TAGLINE = getSiteTagline("en");
