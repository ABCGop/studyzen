import { NextResponse } from 'next/server';
import { auth as adminAuth, firestore } from 'firebase-admin';
import { initializeFirebaseAdmin } from '@/lib/firebase-admin';
import { deleteFileFromServer } from '@/utils/serverFileUtils';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { getUploadDir } from '@/utils/serverFileUtils';
import { getContentFilePath } from '@/utils/fileClient';
import { FieldValue } from 'firebase-admin/firestore';

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
    
    // Parse form data
    const formData = await request.formData();
    const fileInput = formData.get('pdfFile') as File | null;
    const contentId = formData.get('contentId') as string;
    const oldFilePath = formData.get('oldFilePath') as string;
    const type = formData.get('type') as string;
    const classNum = formData.get('class') as string;
    const subject = formData.get('subject') as string;
    const chapter = formData.get('chapter') as string;

    // Validate required fields
    if (!contentId || !type || !classNum || !subject || !fileInput) {
      return new NextResponse(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Delete old file if it exists
    if (oldFilePath && oldFilePath.startsWith('/uploads/')) {
      await deleteFileFromServer(oldFilePath);
    }
    
    // Upload new file
    let newFilePath = '';
    
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
      newFilePath = `/uploads/${destination}/${fileName}`;
      
      // Update Firestore document with new file path
      const db = firestore();
      await db.collection('contents').doc(contentId).update({ 
        pdfPath: newFilePath,
        updatedAt: FieldValue.serverTimestamp()
      });
      
    } catch (error) {
      console.error('Error updating file:', error);
      return new NextResponse(JSON.stringify({ 
        error: 'Failed to update file', 
        details: (error as Error).message 
      }), { status: 500 });
    }
    
    return new NextResponse(JSON.stringify({
      success: true,
      message: 'File updated successfully',
      pdfPath: newFilePath
    }), { status: 200 });
  } catch (error) {
    console.error('Error updating file:', error);
    return new NextResponse(JSON.stringify({ 
      success: false, 
      error: 'Failed to update file',
      details: (error as Error).message
    }), { status: 500 });
  }
} 