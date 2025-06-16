"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

export function TimeSpent() {
  const [timeSpent, setTimeSpent] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const interval = setInterval(() => {
      const currentTime = Date.now()
      const elapsed = Math.floor((currentTime - startTime) / 1000)
      setTimeSpent(elapsed)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes > 0 ? minutes + 'm ' : ''}${remainingSeconds}s`
  }

  return (
    <div className="flex items-center gap-2 bg-muted/40 rounded-full px-4 py-2 min-w-[120px] justify-center">
      <Clock className="h-4 w-4 text-muted-foreground" />
      <span className="text-xs font-medium text-muted-foreground">Time Spent</span>
      <span className="ml-2 text-base font-bold text-foreground">{formatTime(timeSpent)}</span>
    </div>
  )
} 