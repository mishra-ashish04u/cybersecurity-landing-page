import { createClient } from "redis"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  let redis

  try {
    // 🔹 Get visitor IP (works correctly on Vercel)
    const forwardedFor = request.headers.get("x-forwarded-for")
    const ip = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : "unknown"

    // 🔹 Connect Redis (serverless-safe)
    redis = createClient({
      url: process.env.REDIS_URL,
    })

    await redis.connect()

    const countKey = "visitors:count"
    const ipKey = `visitors:ip:${ip}`

    // 🔹 Check if this IP already visited
    const alreadyVisited = await redis.exists(ipKey)

    // 🔹 If new visitor → increment counter
    if (!alreadyVisited) {
      await redis.incr(countKey)
      await redis.set(ipKey, "1")
    }

    // 🔹 Read total visitors
    const totalVisitors = await redis.get(countKey)

    await redis.disconnect()

    return NextResponse.json({
      visitors: Number(totalVisitors || 0),
      newVisitor: !alreadyVisited,
    })
  } catch (error: any) {
    if (redis) {
      try {
        await redis.disconnect()
      } catch {}
    }

    return NextResponse.json(
      {
        error: "Visitor count failed",
        details: error.message,
      },
      { status: 500 }
    )
  }
}
