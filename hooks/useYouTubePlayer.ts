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

export type TrackInfo = {
  title: string;
  videoId: string | null;
};

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
  const [track, setTrack] = useState<TrackInfo>({
    title: "Press play",
    videoId: null,
  });
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const syncTrack = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    try {
      const data = player.getVideoData();
      const title = data?.title?.trim();
      setTrack({
        title: title || "YouTube Music",
        videoId: data?.video_id ?? null,
      });
      const d = player.getDuration();
      if (Number.isFinite(d) && d > 0) setDuration(d);
    } catch {
      // player not fully ready
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      await loadYouTubeApi();
      if (cancelled || !window.YT?.Player) return;

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
            syncTrack();
          },
          onStateChange: (event) => {
            if (event.data === 1) {
              setIsPlaying(true);
              syncTrack();
            }
            if (event.data === 2) setIsPlaying(false);
            if (event.data === 0) {
              event.target.nextVideo();
            }
            if (event.data === 3 || event.data === 5) {
              syncTrack();
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
  }, [syncTrack]);

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
      const player = playerRef.current;
      if (!player) return;

      player.loadPlaylist({
        list: playlistId,
        listType: "playlist",
        index: 0,
      });

      setCurrentTime(0);
      setDuration(0);
      setTrack({ title: "Loading…", videoId: null });

      if (autoplay) {
        window.setTimeout(() => {
          player.playVideo();
          setIsPlaying(true);
          syncTrack();
        }, 100);
      }
    },
    [syncTrack],
  );

  return {
    playerElementId: PLAYER_ELEMENT_ID,
    isReady,
    isPlaying,
    isMuted,
    track,
    currentTime,
    duration,
    play,
    pause,
    togglePlay,
    mute,
    unmute,
    toggleMute,
    next,
    previous,
    seek,
    loadMood,
  };
}
