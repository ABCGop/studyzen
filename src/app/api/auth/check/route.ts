import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verify, JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Define the type for our JWT payload
interface AdminJwtPayload extends JwtPayload {
  email?: string;
  role?: string;
}

export async function GET() {
  try {
    const token = cookies().get('auth_token')?.value;

    if (!token) {
      return new NextResponse(JSON.stringify({ 
        authenticated: false,
        error: 'No token found'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Verify token
    try {
      const decoded = verify(token, JWT_SECRET) as AdminJwtPayload;
      
      return new NextResponse(JSON.stringify({ 
        authenticated: true,
        user: {
          email: decoded.email,
          role: decoded.role
        }
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (tokenError) {
      console.error('Token verification failed:', tokenError);
      
      // Clear invalid token
      cookies().delete('auth_token');
      
      return new NextResponse(JSON.stringify({ 
        authenticated: false,
        error: 'Invalid token'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Auth check error:', error);
    return new NextResponse(JSON.stringify({ 
      authenticated: false,
      error: 'Server error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 