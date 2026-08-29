"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/data/i18n";
import { SUPPORT_URL } from "@/data/site";

export function TopBar() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <header className="relative z-20 flex items-start justify-between gap-2 px-3 pt-3 sm:items-center sm:px-5 sm:pt-4">
      <div className="pill-glass inline-flex min-h-9 items-center gap-2 rounded-full px-3 text-xs text-white/90 sm:min-h-10 sm:text-sm">
        <span
          className="live-dot h-2 w-2 shrink-0 rounded-full bg-emerald-400"
          aria-hidden
        />
        <span>{t("listening")}</span>
      </div>

      <LanguageToggle locale={locale} setLocale={setLocale} label={t("language")} />

      <nav className="flex items-center gap-1.5 sm:gap-2" aria-label="Page">
        <a
          href="#about"
          className="pill-glass hidden min-h-9 items-center rounded-full px-3 text-xs text-white/85 transition hover:bg-black/50 sm:inline-flex sm:min-h-10 sm:text-sm"
        >
          {t("about")}
        </a>
        <a
          href="#faq"
          className="pill-glass hidden min-h-9 items-center rounded-full px-3 text-xs text-white/85 transition hover:bg-black/50 sm:inline-flex sm:min-h-10 sm:text-sm"
        >
          {t("faq")}
        </a>
        <a
          href={SUPPORT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-pink-400/40 bg-pink-500/85 px-3 text-xs font-medium text-white shadow-[0_0_20px_rgba(236,72,153,0.35)] transition hover:bg-pink-500 sm:min-h-10 sm:px-3.5 sm:text-sm"
        >
          <HeartIcon />
          <span className="hidden sm:inline">{t("supportUs")}</span>
          <span className="sm:hidden">{t("support")}</span>
        </a>
      </nav>
    </header>
  );
}

function LanguageToggle({
  locale,
  setLocale,
  label,
}: {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="pill-glass absolute left-1/2 inline-flex min-h-9 -translate-x-1/2 items-center gap-0.5 rounded-full p-0.5 text-xs font-medium sm:min-h-10 sm:text-sm"
    >
      <button
        type="button"
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
        className={[
          "rounded-full px-3 py-1.5 transition sm:px-3.5",
          locale === "en"
            ? "bg-white/20 text-white"
            : "text-white/65 hover:text-white/90",
        ].join(" ")}
      >
        EN
      </button>
      <button
        type="button"
        aria-pressed={locale === "mr"}
        onClick={() => setLocale("mr")}
        className={[
          "rounded-full px-3 py-1.5 transition sm:px-3.5",
          locale === "mr"
            ? "bg-white/20 text-white"
            : "text-white/65 hover:text-white/90",
        ].join(" ")}
      >
        मराठी
      </button>
    </div>
  );
}

function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 21s-7.2-4.35-9.6-8.4C.6 9.3 2.1 6 5.4 6c1.8 0 3.15 1.05 3.9 2.1C10.05 7.05 11.4 6 13.2 6c3.3 0 4.8 3.3 3 6.6C19.2 16.65 12 21 12 21z" />
    </svg>
  );
}
