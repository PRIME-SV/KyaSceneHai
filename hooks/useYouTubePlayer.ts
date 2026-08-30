"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const PLAYER_ELEMENT_ID = "marathikatta-yt-player";
/** How long to wait for a playlist to start before treating it as missing. */
const PLAYLIST_LOAD_TIMEOUT_MS = 3500;

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

export type TrackInfo = {
  title: string;
  videoId: string | null;
};

type UseYouTubePlayerOptions = {
  initialPlaylistId: string;
};

/**
 * Recreates the YT player when the mood playlist changes.
 * That way a missing/invalid list cannot keep playing the previous mood —
 * the old player is destroyed first, so audio goes silent on failure.
 */
export function useYouTubePlayer({
  initialPlaylistId,
}: UseYouTubePlayerOptions) {
  const playlistIdRef = useRef(initialPlaylistId);
  const autoplayRef = useRef(false);
  const playerRef = useRef<YT.Player | null>(null);
  const readyRef = useRef(false);
  const loadTokenRef = useRef(0);
  const watchdogRef = useRef<number | null>(null);

  const [playerKey, setPlayerKey] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState<TrackInfo>({
    title: "Press play",
    videoId: null,
  });
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const clearWatchdog = useCallback(() => {
    if (watchdogRef.current != null) {
      window.clearTimeout(watchdogRef.current);
      watchdogRef.current = null;
    }
  }, []);

  const markUnavailable = useCallback(() => {
    clearWatchdog();
    try {
      playerRef.current?.stopVideo();
    } catch {
      // ignore
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setTrack({ title: "Playlist unavailable", videoId: null });
  }, [clearWatchdog]);

  const syncTrack = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    try {
      const data = player.getVideoData();
      const videoId = data?.video_id ?? null;
      if (!videoId) return false;
      const title = data?.title?.trim();
      setTrack({
        title: title || "YouTube Music",
        videoId,
      });
      const d = player.getDuration();
      if (Number.isFinite(d) && d > 0) setDuration(d);
      return true;
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    const token = loadTokenRef.current;
    const listId = playlistIdRef.current;
    const shouldAutoplay = autoplayRef.current;

    async function init() {
      await loadYouTubeApi();
      if (cancelled || !window.YT?.Player) return;
      if (token !== loadTokenRef.current) return;

      const mount = document.getElementById(PLAYER_ELEMENT_ID);
      if (!mount) return;

      playerRef.current = new window.YT.Player(PLAYER_ELEMENT_ID, {
        height: "0",
        width: "0",
        playerVars: {
          listType: "playlist",
          list: listId,
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
            if (cancelled || token !== loadTokenRef.current) return;

            readyRef.current = true;
            setIsReady(true);

            const hasVideo = Boolean(event.target.getVideoData()?.video_id);
            if (!hasVideo) {
              // Invalid / empty playlist — stay silent.
              markUnavailable();
              return;
            }

            if (shouldAutoplay) {
              event.target.playVideo();
              setIsPlaying(true);
            }
            syncTrack();

            // Some bad list IDs never error and never produce a playing state.
            clearWatchdog();
            watchdogRef.current = window.setTimeout(() => {
              if (token !== loadTokenRef.current) return;
              const state = playerRef.current?.getPlayerState();
              const playingOrCued =
                state === 1 || state === 3 || state === 5 || state === 2;
              const ok = syncTrack();
              if (shouldAutoplay && (!playingOrCued || !ok)) {
                markUnavailable();
              }
            }, PLAYLIST_LOAD_TIMEOUT_MS);
          },
          onStateChange: (event) => {
            if (cancelled || token !== loadTokenRef.current) return;

            if (event.data === 1) {
              clearWatchdog();
              setIsPlaying(true);
              syncTrack();
            }
            if (event.data === 2) setIsPlaying(false);
            if (event.data === 0) {
              event.target.nextVideo();
            }
            if (event.data === 3) {
              syncTrack();
            }
            if (event.data === 5) {
              clearWatchdog();
              const hasVideo = Boolean(event.target.getVideoData()?.video_id);
              if (!hasVideo) {
                markUnavailable();
                return;
              }
              syncTrack();
              if (shouldAutoplay && autoplayRef.current) {
                event.target.playVideo();
              }
            }
          },
          onError: () => {
            if (cancelled || token !== loadTokenRef.current) return;
            markUnavailable();
          },
        },
      });
    }

    void init();

    return () => {
      cancelled = true;
      clearWatchdog();
      readyRef.current = false;
      try {
        playerRef.current?.stopVideo();
      } catch {
        // ignore
      }
      try {
        playerRef.current?.destroy();
      } catch {
        // player may already be gone
      }
      playerRef.current = null;
      setIsReady(false);
    };
  }, [playerKey, clearWatchdog, markUnavailable, syncTrack]);

  useEffect(() => {
    if (!isReady || !isPlaying) return;

    const id = window.setInterval(() => {
      const player = playerRef.current;
      if (!player) return;
      try {
        const t = player.getCurrentTime();
        const d = player.getDuration();
        if (Number.isFinite(t)) setCurrentTime(t);
        if (Number.isFinite(d) && d > 0) setDuration(d);
      } catch {
        // ignore
      }
    }, 500);

    return () => window.clearInterval(id);
  }, [isReady, isPlaying]);

  const play = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    const data = player.getVideoData();
    if (!data?.video_id) {
      markUnavailable();
      return;
    }
    player.playVideo();
    setIsPlaying(true);
  }, [markUnavailable]);

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

  const next = useCallback(() => {
    playerRef.current?.nextVideo();
  }, []);

  const previous = useCallback(() => {
    playerRef.current?.previousVideo();
  }, []);

  const seek = useCallback((seconds: number) => {
    const player = playerRef.current;
    if (!player) return;
    player.seekTo(seconds, true);
    setCurrentTime(seconds);
  }, []);

  const loadMood = useCallback(
    (playlistId: string, autoplay = true) => {
      // Silence immediately — do not keep the previous mood playing.
      clearWatchdog();
      try {
        playerRef.current?.stopVideo();
      } catch {
        // ignore
      }

      playlistIdRef.current = playlistId;
      autoplayRef.current = autoplay;
      loadTokenRef.current += 1;

      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      setTrack({ title: "Loading…", videoId: null });

      // Remount host + rebuild player with only this playlist.
      // Effect cleanup destroys the old player so it cannot resume.
      setPlayerKey((key) => key + 1);
    },
    [clearWatchdog],
  );

  return {
    playerElementId: PLAYER_ELEMENT_ID,
    playerKey,
    isReady,
    isPlaying,
    track,
    currentTime,
    duration,
    play,
    pause,
    togglePlay,
    next,
    previous,
    seek,
    loadMood,
  };
}
