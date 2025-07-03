import { NextResponse } from 'next/server';
import { auth as adminAuth } from 'firebase-admin';
import { initializeFirebaseAdmin } from '@/lib/firebase-admin';
import { createContent } from '@/services/contentService';
import { ContentType } from '@/models/Content';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { getUploadDir } from '@/utils/serverFileUtils';
import { getContentFilePath } from '@/utils/fileClient';

// Initialize Firebase Admin (if not already initialized)
initializeFirebaseAdmin();

export async function POST(request: Request) {
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
    let userId;
    
    try {
      // Verify Firebase token
      const decodedToken = await adminAuth().verifyIdToken(token);
      userId = decodedToken.uid;
      
      // You can check for specific claims or roles here if needed
      // For example: if (decodedToken.role !== 'admin') { ... }
      
    } catch (error) {
      console.error('Token verification failed:', error);
      return new NextResponse(JSON.stringify({ error: 'Unauthorized: Invalid token' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Parse form data
    const formData = await request.formData();
    const type = formData.get('type') as string;
    const classNum = formData.get('class') as string;
    const subject = formData.get('subject') as string;
    const chapter = formData.get('chapter') as string;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string || title;
    const fileInput = formData.get('pdfFile') as File | null;

    // Validate required fields
    if (!type || !classNum || !subject || !title) {
      return new NextResponse(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Check if the content type is valid
    if (!Object.values(ContentType).includes(type as ContentType)) {
      return new NextResponse(JSON.stringify({ error: 'Invalid content type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Handle PDF upload if provided
    let pdfPath = '';
    
    if (fileInput) {
      try {
        // Generate the destination path
        const destination = getContentFilePath(type, classNum, subject.toLowerCase(), chapter);
        const uploadDir = await getUploadDir();
        const dirPath = join(uploadDir, destination);
        
        // Ensure the directory exists
        await mkdir(dirPath, { recursive: true });
        
        // Create a safe filename with timestamp
        const timestamp = Date.now();
        const fileName = `${timestamp}_${fileInput.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
        const filePath = join(dirPath, fileName);
        
        // Convert file to buffer and write to disk
        const arrayBuffer = await fileInput.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        await writeFile(filePath, uint8Array);
        
        // Calculate the public URL (relative to /public)
        pdfPath = `/uploads/${destination}/${fileName}`;
      } catch (error) {
        console.error('Error uploading file:', error);
        return new NextResponse(JSON.stringify({ 
          error: 'Failed to upload file', 
          details: (error as Error).message 
        }), { status: 500 });
      }
    }

    // Create content in Firebase
    const content = await createContent({
      title,
      type: type as ContentType,
      classNum,
      subject: subject.toLowerCase(),
      chapter: chapter || undefined,
      description,
      pdfPath,
      createdBy: userId
    });

    return new NextResponse(JSON.stringify({ 
      success: true,
      message: 'Content uploaded successfully',
      content
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Upload error:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal server error', details: (error as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 