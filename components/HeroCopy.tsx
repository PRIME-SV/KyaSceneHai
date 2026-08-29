type HeroCopyProps = {
  headline: string;
  subtitle: string;
};

export function HeroCopy({ headline, subtitle }: HeroCopyProps) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-5 text-center">
      <h1
        key={headline}
        className="tagline-fade font-display text-[clamp(2.85rem,11vw,5.25rem)] leading-[1.02] font-bold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
      >
        {headline}
      </h1>
      <p
        key={subtitle}
        className="tagline-fade pill-glass mt-4 inline-flex min-h-8 items-center gap-2 rounded-full px-3.5 text-[0.7rem] font-medium tracking-[0.12em] text-white/90 uppercase sm:text-xs"
      >
        <CloudIcon />
        {subtitle}
      </p>
    </div>
  );
}

function CloudIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="text-amber-200/90">
      <path d="M17.5 19h-11A4.5 4.5 0 0 1 6 10.05 5.5 5.5 0 0 1 16.9 9.1 3.5 3.5 0 0 1 17.5 19z" />
    </svg>
  );
}
