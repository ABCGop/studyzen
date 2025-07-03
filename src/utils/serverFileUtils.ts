'use server';

import fs from 'fs/promises';
import path from 'path';

// Base upload directory function (to avoid exporting a simple variable from a server file)
export async function getUploadDir(): Promise<string> {
  return process.env.UPLOAD_DIR || './public/uploads';
}

/**
 * Delete a file from the server filesystem
 * Note: This function should only be used in server-side code
 */
export async function deleteFileFromServer(publicPath: string): Promise<void> {
  try {
    if (publicPath && publicPath.startsWith('/uploads/')) {
      const filePath = path.join(process.cwd(), 'public', publicPath);
      await fs.unlink(filePath);
    }
  } catch (error) {
    console.warn('Error deleting file:', error);
  }
} 