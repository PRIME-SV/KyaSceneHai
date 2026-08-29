import { SITE_NAME } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto pt-8 text-center text-sm text-white/45 sm:text-left">
      <p>
        Made with care for every mood · {SITE_NAME}
      </p>
    </footer>
  );
}
