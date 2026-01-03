import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl

  // Redirect only the ROOT path
  if (url.pathname === "/") {
    url.pathname = "/launchpad"
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/"],
}
