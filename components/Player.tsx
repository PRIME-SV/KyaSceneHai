"use client";

type PlayerProps = {
  elementId: string;
};

/** Hidden YouTube IFrame mount point — controls live in PlayerControls. */
export function Player({ elementId }: PlayerProps) {
  return (
    <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden>
      <div id={elementId} />
    </div>
  );
}
