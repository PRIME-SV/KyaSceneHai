import Image from "next/image";
import { SITE_NAME } from "@/data/site";

type SiteLogoProps = {
  size?: number;
  /** Show Devanagari wordmark मराठी म्यूजिक कट्टा beside the mark. */
  showWordmark?: boolean;
  className?: string;
};

/** Marathi brand mark — Devanagari "म" for Marathi Music Katta. */
export function SiteLogo({
  size = 36,
  showWordmark = false,
  className = "",
}: SiteLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.png"
        alt=""
        width={size}
        height={size}
        className="rounded-[22%] shadow-[0_0_0_1px_rgba(197,157,95,0.35)]"
        priority
      />
      {showWordmark ? (
        <span className="font-display text-xl font-bold tracking-wide text-[var(--gold)] sm:text-2xl">
          मराठी संगीत कट्टा
          <span className="sr-only"> ({SITE_NAME})</span>
        </span>
      ) : (
        <span className="sr-only">{SITE_NAME}</span>
      )}
    </span>
  );
}
