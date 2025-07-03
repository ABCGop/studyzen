import { NextResponse } from 'next/server';

export async function GET() {
  // Only allow in development mode
  if (process.env.NODE_ENV === 'production') {
    return new NextResponse(JSON.stringify({ error: 'Not available in production' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new NextResponse(JSON.stringify({
    environment: process.env.NODE_ENV,
    envVars: {
      hasJwtSecret: !!process.env.JWT_SECRET,
      hasAdminEmail: !!process.env.ADMIN_EMAIL,
      hasAdminPassword: !!process.env.ADMIN_PASSWORD,
      // Don't expose actual values in response
    }
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
} 