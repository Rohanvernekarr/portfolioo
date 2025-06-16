"use client"

import { useEffect, useState } from "react"
import { Users } from "lucide-react"

export function VisitorCount() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch("/api/visitor-count")
        const data = await response.json()
        setCount(data.count)
      } catch (error) {
        console.error("Failed to fetch visitor count:", error)
      }
    }
    fetchCount()
  }, [])

  return (
    <div className="flex items-center gap-2 bg-muted/40 rounded-full px-4 py-2 min-w-[120px] justify-center">
      <Users className="h-4 w-4 text-muted-foreground" />
      <span className="text-xs font-medium text-muted-foreground">Visitors</span>
      <span className="ml-2 text-base font-bold text-foreground">{count !== null ? count.toLocaleString() : "-"}</span>
    </div>
  )
} 