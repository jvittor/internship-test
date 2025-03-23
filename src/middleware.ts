import { NextRequest, NextResponse } from 'next/server';

export const TOKEN_KEY = 'authToken';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(TOKEN_KEY);

  const isProtectedRoute = request.nextUrl.pathname.startsWith('/category');

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/category/:path*'],
};
