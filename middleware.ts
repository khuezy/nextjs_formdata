import { NextRequest, NextResponse } from "next/server";

export const runtime = 'nodejs'

export async function middleware(request: NextRequest) {
  console.log('midware')
  return NextResponse.next()
}

export const config = {
  runtime: 'nodejs',
  /**
   * Don't match:
   * _next/ - internal next resources
   * static/ - static assets
   * /api/auth - let auth go through
   * /api/og - let open graph go through
   */
  matcher: [
    '/((?!_next|favicon.ico|static|fonts))',
  ],
}
