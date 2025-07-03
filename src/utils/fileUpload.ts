'use server';

import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { getUploadDir } from './serverFileUtils';

/**
 * Uploads a file to the server filesystem
 * @param file File object to upload
 * @param destination Path relative to the upload directory
 * @returns The public path to the uploaded file
 */
export async function uploadFile(file: File, destination: string): Promise<string> {
  try {
    // Get the upload directory
    const UPLOAD_DIR = await getUploadDir();
    
    // Create the full directory path
    const dirPath = path.join(UPLOAD_DIR, destination);
    
    // Ensure the directory exists
    await mkdir(dirPath, { recursive: true });
    
    // Create a safe filename with timestamp to avoid conflicts
    const timestamp = Date.now();
    const fileName = `${timestamp}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const filePath = path.join(dirPath, fileName);
    
    // Convert file to buffer and write to disk
    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    await writeFile(filePath, uint8Array);
    
    // Calculate the public URL (relative to /public)
    const publicPath = `/uploads/${destination}/${fileName}`;
    return publicPath;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error(`Failed to upload file: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Generate a destination path for content files
 */
export async function getContentFilePath(
  contentType: string, 
  classNum: string, 
  subject: string, 
  chapter?: string
): Promise<string> {
  let destination = path.join(contentType, `class-${classNum}`, subject);
  if (chapter) {
    destination = path.join(destination, `chapter-${chapter}`);
  }
  return destination;
} 