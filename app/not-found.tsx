import Link from "next/link";
import { SITE_NAME } from "@/data/site";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-[#0c0b0a] px-6 text-center text-white">
      <p className="font-display text-4xl">{SITE_NAME}</p>
      <p className="text-white/70">ही पेज सापडली नाही.</p>
      <Link
        href="/"
        className="rounded-full px-5 py-2 text-sm font-medium text-[#0c0b0a]"
        style={{ background: "var(--accent, #c98a3a)" }}
      >
        मुख्य पेजवर जा
      </Link>
    </div>
  );
}
