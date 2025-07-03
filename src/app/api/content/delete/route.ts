import { NextResponse } from 'next/server';
import { auth as adminAuth } from 'firebase-admin';
import { initializeFirebaseAdmin } from '@/lib/firebase-admin';
import { deleteContent } from '@/services/contentService';

// Initialize Firebase Admin (if not already initialized)
initializeFirebaseAdmin();

export async function DELETE(request: Request) {
  try {
    // Get the authorization header
    const authHeader = request.headers.get('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized: No token provided' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Extract the token
    const token = authHeader.split('Bearer ')[1];
    
    try {
      // Verify Firebase token
      const decodedToken = await adminAuth().verifyIdToken(token);
      
      // You can check for specific claims or roles here if needed
      // For example: if (decodedToken.role !== 'admin') { ... }
      
    } catch (error) {
      console.error('Token verification failed:', error);
      return new NextResponse(JSON.stringify({ error: 'Unauthorized: Invalid token' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    const body = await request.json();
    const { id } = body;
    
    if (!id) {
      return new NextResponse(JSON.stringify({ 
        success: false, 
        error: 'Missing content ID' 
      }), { status: 400 });
    }
    
    // Delete content from Firebase
    await deleteContent(id);
    
    return new NextResponse(JSON.stringify({
      success: true,
      message: 'Content deleted successfully'
    }), { status: 200 });
  } catch (error) {
    console.error('Error deleting content:', error);
    return new NextResponse(JSON.stringify({ 
      success: false, 
      error: 'Failed to delete content',
      details: (error as Error).message
    }), { status: 500 });
  }
} 