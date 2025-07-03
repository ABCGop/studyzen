import { NextResponse } from 'next/server';
import { auth as adminAuth } from 'firebase-admin';
import { initializeFirebaseAdmin } from '@/lib/firebase-admin';

// Initialize Firebase Admin (if not already initialized)
initializeFirebaseAdmin();

/**
 * Debug endpoint to test authentication
 * Only use this in development
 */
export async function GET(request: Request) {
  try {
    // Get authorization header
    const authHeader = request.headers.get('Authorization');
    
    if (!authHeader) {
      return new NextResponse(JSON.stringify({
        authenticated: false,
        error: 'No authorization header provided'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check for bearer token
    if (!authHeader.startsWith('Bearer ')) {
      return new NextResponse(JSON.stringify({
        authenticated: false,
        error: 'Invalid authorization format. Expected Bearer token'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Extract token
    const token = authHeader.substring(7);
    
    try {
      // Verify token
      const decodedToken = await adminAuth().verifyIdToken(token);
      
      // Return user info
      return new NextResponse(JSON.stringify({
        authenticated: true,
        user: {
          uid: decodedToken.uid,
          email: decodedToken.email,
          emailVerified: decodedToken.email_verified,
          displayName: decodedToken.name,
          photoURL: decodedToken.picture,
          role: decodedToken.role || 'user'
        }
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (tokenError) {
      // Token verification failed
      return new NextResponse(JSON.stringify({
        authenticated: false,
        error: 'Invalid token',
        details: (tokenError as Error).message
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    // General error
    return new NextResponse(JSON.stringify({
      authenticated: false,
      error: 'Debug error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 