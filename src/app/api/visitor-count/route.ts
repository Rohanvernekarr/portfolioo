import { NextResponse } from "next/server"
import { redis } from "@/lib/redis"

export async function GET() {
  try {
    const count = await redis.incr("visitor_count")
    return NextResponse.json({ count })
  } catch (error) {
    console.error("Error incrementing visitor count:", error)
    return NextResponse.json(
      { error: "Failed to increment visitor count" },
      { status: 500 }
    )
  }
} 