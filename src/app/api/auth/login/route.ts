import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sign } from 'jsonwebtoken';

// Use environment variables with fallbacks
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@studyzen.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;
    
    // Debug - log what we received (don't do this in production)
    console.log('Login attempt:', { 
      receivedEmail: email, 
      expectedEmail: ADMIN_EMAIL,
      passwordMatch: password === ADMIN_PASSWORD,
      envVars: {
        hasJwtSecret: !!process.env.JWT_SECRET,
        hasAdminEmail: !!process.env.ADMIN_EMAIL,
        hasAdminPassword: !!process.env.ADMIN_PASSWORD
      }
    });

    // Basic authentication check - case insensitive email comparison
    if (email?.toLowerCase() !== ADMIN_EMAIL?.toLowerCase() || password !== ADMIN_PASSWORD) {
      return new NextResponse(JSON.stringify({ 
        error: 'Invalid credentials',
        debug: { emailMatch: email?.toLowerCase() === ADMIN_EMAIL?.toLowerCase() } 
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Generate JWT token
    const token = sign({ email, role: 'admin' }, JWT_SECRET, { expiresIn: '1h' });

    // Set cookie
    cookies().set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60, // 1 hour
      path: '/',
    });

    return new NextResponse(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Login error:', error);
    return new NextResponse(JSON.stringify({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 