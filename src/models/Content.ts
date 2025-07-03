// Content types enum
export enum ContentType {
  NCERT = 'ncert',
  RD_SHARMA = 'rd-sharma',
  NOTES = 'notes',
  SAMPLE_PAPER = 'sample-paper'
}

// Content model interface
export interface Content {
  id?: string;
  title: string;
  type: ContentType;
  classNum: string;
  subject: string;
  chapter?: string;
  description?: string;
  pdfPath?: string;
  createdAt: Date | number;
  updatedAt: Date | number;
  createdBy: string;
}

// Display names for content types
export const contentTypeDisplayNames: Record<ContentType, string> = {
  [ContentType.NCERT]: 'NCERT Solutions',
  [ContentType.RD_SHARMA]: 'RD Sharma',
  [ContentType.NOTES]: 'Notes',
  [ContentType.SAMPLE_PAPER]: 'Sample Papers'
};

// Function to get display name for a content type
export function getContentTypeDisplayName(type: string): string {
  return contentTypeDisplayNames[type as ContentType] || type;
}

// Function to format subject name for display
export function formatSubjectName(subject: string): string {
  return subject.charAt(0).toUpperCase() + subject.slice(1).replace(/-/g, ' ');
} 