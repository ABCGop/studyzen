import path from 'path';

/**
 * Generate a destination path for content files
 * This is a client-side helper that doesn't use fs
 */
export function getContentFilePath(
  contentType: string, 
  classNum: string, 
  subject: string, 
  chapter?: string
): string {
  let destination = path.join(contentType, `class-${classNum}`, subject);
  if (chapter) {
    destination = path.join(destination, `chapter-${chapter}`);
  }
  return destination;
} 