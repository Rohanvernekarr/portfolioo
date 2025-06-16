"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Pause, Play, Music } from "lucide-react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="flex items-center gap-2 bg-muted/40 rounded-full px-4 py-2 min-w-[120px] justify-center">
      <Music className="h-4 w-4 text-muted-foreground" />
      <span className="text-xs font-medium text-muted-foreground">Music</span>
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlay}
        className="h-7 w-7 ml-2"
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
        <span className="sr-only">
          {isPlaying ? "Pause music" : "Play music"}
        </span>
      </Button>
      <audio
        ref={audioRef}
        src="/background-music.mp3"
        loop
        className="hidden"
      />
    </div>
  )
} 