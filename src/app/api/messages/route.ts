import { NextResponse } from "next/server"
import { redis } from "@/lib/redis"

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    const timestamp = Date.now()
    await redis.lpush("messages", JSON.stringify({ message, timestamp }))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error saving message:", error)
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const messages = await redis.lrange("messages", 0, -1)
    const parsedMessages = messages.map((msg) => JSON.parse(msg))

    return NextResponse.json({ messages: parsedMessages })
  } catch (error) {
    console.error("Error fetching messages:", error)
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    )
  }
} 