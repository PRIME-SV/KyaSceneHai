import { PlayerShell } from "@/components/PlayerShell";

/**
 * Layout shared by `/` and `/[mood]` so the YouTube player stays mounted
 * when users switch moods (and SEO URLs update).
 */
export default function PlayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <PlayerShell />
    </>
  );
}
