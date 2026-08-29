import { SITE_NAME } from "@/data/site";

type HeaderProps = {
  tagline: string;
};

export function Header({ tagline }: HeaderProps) {
  return (
    <header className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
      <p className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
        {SITE_NAME}
      </p>
      <p
        key={tagline}
        className="tagline-fade max-w-md text-base text-white/75 sm:text-lg"
      >
        {tagline}
      </p>
    </header>
  );
}
