"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const PLAYER_ELEMENT_ID = "vibeplay-yt-player";

let apiLoading: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.YT?.Player) {
    return Promise.resolve();
  }

  if (apiLoading) {
    return apiLoading;
  }

  apiLoading = new Promise<void>((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve();
    };

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.youtube.com/iframe_api"]',
    );
    if (!existing) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      document.body.appendChild(tag);
    }

    if (window.YT?.Player) {
      resolve();
    }
  });

  return apiLoading;
}

type UseYouTubePlayerOptions = {
  initialPlaylistId: string;
  startMuted?: boolean;
};

export function useYouTubePlayer({
  initialPlaylistId,
  startMuted = false,
}: UseYouTubePlayerOptions) {
  const playerRef = useRef<YT.Player | null>(null);
  const initialPlaylistRef = useRef(initialPlaylistId);
  const startMutedRef = useRef(startMuted);

  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(startMuted);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      await loadYouTubeApi();
      if (cancelled || !window.YT?.Player) return;

      // Avoid recreating if hot-reload left a player
      if (playerRef.current) return;

      const mount = document.getElementById(PLAYER_ELEMENT_ID);
      if (!mount) return;

      playerRef.current = new window.YT.Player(PLAYER_ELEMENT_ID, {
        height: "0",
        width: "0",
        playerVars: {
          listType: "playlist",
          list: initialPlaylistRef.current,
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          loop: 1,
        },
        events: {
          onReady: (event) => {
            if (startMutedRef.current) {
              event.target.mute();
              setIsMuted(true);
            }
            setIsReady(true);
          },
          onStateChange: (event) => {
            // YT.PlayerState: ENDED=0, PLAYING=1, PAUSED=2
            if (event.data === 1) setIsPlaying(true);
            if (event.data === 2) setIsPlaying(false);
            if (event.data === 0) {
              event.target.nextVideo();
            }
          },
        },
      });
    }

    void init();

    return () => {
      cancelled = true;
      try {
        playerRef.current?.destroy();
      } catch {
        // player may already be gone
      }
      playerRef.current = null;
      setIsReady(false);
    };
  }, []);

  const play = useCallback(() => {
    playerRef.current?.playVideo();
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    playerRef.current?.pauseVideo();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (!playerRef.current) return;
    const state = playerRef.current.getPlayerState();
    if (state === 1) {
      pause();
    } else {
      play();
    }
  }, [pause, play]);

  const mute = useCallback(() => {
    playerRef.current?.mute();
    setIsMuted(true);
  }, []);

  const unmute = useCallback(() => {
    playerRef.current?.unMute();
    setIsMuted(false);
  }, []);

  const toggleMute = useCallback(() => {
    if (!playerRef.current) return;
    if (playerRef.current.isMuted()) {
      unmute();
    } else {
      mute();
    }
  }, [mute, unmute]);

  const next = useCallback(() => {
    playerRef.current?.nextVideo();
  }, []);

  const loadMood = useCallback((playlistId: string, autoplay = true) => {
    const player = playerRef.current;
    if (!player) return;

    player.loadPlaylist({
      list: playlistId,
      listType: "playlist",
      index: 0,
    });

    if (autoplay) {
      // loadPlaylist often starts playback; call playVideo to satisfy gesture policies
      window.setTimeout(() => {
        player.playVideo();
        setIsPlaying(true);
      }, 100);
    }
  }, []);

  return {
    playerElementId: PLAYER_ELEMENT_ID,
    isReady,
    isPlaying,
    isMuted,
    play,
    pause,
    togglePlay,
    mute,
    unmute,
    toggleMute,
    next,
    loadMood,
  };
}
