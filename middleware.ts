import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('auth_token');

  // Protect /dashboard and all its sub-routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!authCookie) {
      // If not authenticated, redirect to login
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Redirect to dashboard if already logged in and visiting /login
  if (request.nextUrl.pathname === '/login') {
    if (authCookie) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

// Configure the matcher to run middleware only on these paths
export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
