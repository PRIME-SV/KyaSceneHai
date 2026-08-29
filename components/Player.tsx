"use client";

import { useEffect, useRef } from "react";

type PlayerProps = {
  elementId: string;
  /** Bump to insert a fresh mount node after YT replaces the previous one with an iframe. */
  instanceKey: number;
};

/**
 * Hidden YouTube IFrame host.
 * YT.Player replaces its target DOM node with an iframe, so the mount element
 * must be created/removed imperatively — React cannot reconcile that swap.
 */
export function Player({ elementId, instanceKey }: PlayerProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const mount = document.createElement("div");
    mount.id = elementId;
    host.replaceChildren(mount);

    return () => {
      // Clear without touching nodes YT may have detached/replaced.
      host.replaceChildren();
    };
  }, [elementId, instanceKey]);

  return (
    <div
      ref={hostRef}
      className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
      aria-hidden
    />
  );
}
