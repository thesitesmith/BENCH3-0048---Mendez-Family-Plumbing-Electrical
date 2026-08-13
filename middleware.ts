import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const claimed = (host: string | null | undefined): boolean =>
  process.env.SITESMITH_INDEX === 'allow' || !!(host && !host.endsWith('.vercel.app'));

export function middleware(request: NextRequest) {
  const res = NextResponse.next();
  if (!claimed(request.headers.get('host'))) {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
