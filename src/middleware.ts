import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Only run middleware on admin routes
  if (!request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  // Skip middleware for login page
  if (request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Skip middleware for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Check for auth cookie - we'll use a simple session cookie for now
  // The actual token verification will happen in the API routes
  const authCookie = request.cookies.get('firebase_auth');

  if (!authCookie) {
    console.log('No auth cookie found, redirecting to login');
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // If we have a cookie, allow the request to proceed
  // The actual pages will handle verification via the AuthContext
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*',
}; 