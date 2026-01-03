import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect root "/" to "/launchpad"
  if (pathname === "/") {
    return NextResponse.redirect(
      new URL("/launchpad", request.url),
      301
    )
  }

  return NextResponse.next()
}
