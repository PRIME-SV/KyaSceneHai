"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { FEATURE_KEYS } from "@/data/i18n";

export function FeatureCards() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto grid w-full max-w-5xl gap-4 px-5 sm:grid-cols-3 sm:gap-5 sm:px-8">
      {FEATURE_KEYS.map((feature) => (
        <article
          key={feature.titleKey}
          className="salon-card px-5 py-6 sm:px-6 sm:py-7"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--gold)]/45 text-[var(--gold)]">
            <FeatureIcon name={feature.icon} />
          </div>
          <h3 className="text-lg font-semibold tracking-tight text-[var(--gold)]">
            {t(feature.titleKey)}
          </h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-white/55">
            {t(feature.bodyKey)}
          </p>
        </article>
      ))}
    </section>
  );
}

function FeatureIcon({ name }: { name: (typeof FEATURE_KEYS)[number]["icon"] }) {
  if (name === "music") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
      </svg>
    );
  }
  if (name === "mic") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2z" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.6 3.5 2.1-.8 1.3L11 13V6h2v6.6z" />
    </svg>
  );
}
