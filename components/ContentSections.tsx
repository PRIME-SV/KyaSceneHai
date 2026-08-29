"use client";

import { useState } from "react";
import { FeatureCards } from "@/components/FeatureCards";
import { useLanguage } from "@/components/LanguageProvider";
import { FAQ_KEYS } from "@/data/i18n";
import { getYouTubeMusicUrl } from "@/data/moods";

type ContentSectionsProps = {
  siteName: string;
  introHeading: string;
  introBody: string;
  playlistId: string;
};

export function ContentSections({
  siteName,
  introHeading,
  introBody,
  playlistId,
}: ContentSectionsProps) {
  const { t } = useLanguage();

  return (
    <div className="relative z-10 bg-[var(--background)]">
      <section
        id="about"
        className="mx-auto max-w-3xl scroll-mt-8 px-5 pt-16 pb-12 text-center sm:px-8 sm:pt-24 sm:pb-16"
      >
        <p className="text-[0.7rem] font-semibold tracking-[0.28em] text-[var(--gold)] uppercase sm:text-xs">
          {t("welcomeTo")}
        </p>
        <h2 className="mt-4 font-serif text-[clamp(1.85rem,4.8vw,2.85rem)] leading-tight font-bold tracking-tight text-white">
          {siteName} — {t("siteTagline")}
        </h2>
        <p className="mt-3 font-serif text-lg text-white/90 sm:text-xl">
          {introHeading}
        </p>
        <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
          {introBody}{" "}
          <a
            href={getYouTubeMusicUrl(playlistId)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--gold)] underline decoration-[var(--gold)]/35 underline-offset-2 transition hover:decoration-[var(--gold)]"
          >
            {t("openOnYouTubeMusic")}
          </a>
          .
        </p>
      </section>

      <div className="pb-16 sm:pb-20">
        <FeatureCards />
      </div>

      <FaqAccordion />
    </div>
  );
}

function FaqAccordion() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="mx-auto max-w-3xl scroll-mt-8 px-5 pb-16 sm:px-8 sm:pb-24"
    >
      <h2 className="mb-8 text-center font-serif text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold tracking-tight text-white sm:mb-10">
        {t("faqHeading")}
      </h2>
      <div className="flex flex-col gap-3">
        {FAQ_KEYS.map((item, index) => {
          const open = openIndex === index;
          const question = t(item.questionKey);
          return (
            <div key={item.questionKey} className="salon-card overflow-hidden">
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              >
                <span className="text-[0.95rem] font-semibold text-[var(--gold)] sm:text-base">
                  {question}
                </span>
                <span
                  className={[
                    "shrink-0 text-[var(--gold)] transition-transform duration-200",
                    open ? "rotate-180" : "",
                  ].join(" ")}
                  aria-hidden
                >
                  <ChevronIcon />
                </span>
              </button>
              {open ? (
                <div className="border-t border-white/[0.06] px-5 pt-1 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-[0.95rem] leading-relaxed text-white/65">
                    {t(item.answerKey)}
                  </p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 16.5 4.5 9l1.4-1.4L12 13.7l6.1-6.1L19.5 9 12 16.5z" />
    </svg>
  );
}
