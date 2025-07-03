import { notFound } from 'next/navigation';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

// Define parameters for the dynamic route
interface ContentPageParams {
  params: {
    contentType: string;
    classNum: string;
    subject: string;
    chapterNum: string;
  };
}

// Function to process markdown content
async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// Function to read the markdown file
async function getMarkdownContent(contentType: string, classNum: string, subject: string, chapterNum: string) {
  try {
    const contentDir = path.join(
      process.cwd(), 
      'public', 
      'uploads', 
      contentType,
      `class-${classNum}`,
      subject,
      `chapter-${chapterNum}`
    );
    
    // Check if directory exists
    try {
      await fs.access(contentDir);
    } catch (error) {
      console.error('Directory does not exist:', contentDir);
      return null;
    }
    
    // Read the directory to find markdown files
    const files = await fs.readdir(contentDir);
    
    // First, check for content.md (our standard file name)
    if (files.includes('content.md')) {
      const filePath = path.join(contentDir, 'content.md');
      const content = await fs.readFile(filePath, 'utf-8');
      const htmlContent = await markdownToHtml(content);
      return {
        title: 'Chapter ' + chapterNum,
        htmlContent
      };
    }
    
    // Otherwise, look for any markdown file
    const mdFiles = files.filter(file => file.endsWith('.md'));
    
    if (mdFiles.length === 0) {
      return null;
    }
    
    // Read the first markdown file found
    const filePath = path.join(contentDir, mdFiles[0]);
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Convert markdown to HTML
    const htmlContent = await markdownToHtml(content);
    
    // Return the title and HTML content
    return {
      title: mdFiles[0].replace('.md', '').replace(/-/g, ' '),
      htmlContent
    };
  } catch (error) {
    console.error('Error reading content:', error);
    return null;
  }
}

export default async function ContentPage({ params }: ContentPageParams) {
  const { contentType, classNum, subject, chapterNum } = params;
  
  // Get content from the markdown file
  const content = await getMarkdownContent(contentType, classNum, subject, chapterNum);
  
  // If content doesn't exist, return 404
  if (!content) {
    notFound();
  }
  
  // Format content type for display
  const contentTypeDisplay = {
    'ncert': 'NCERT Solutions',
    'rd-sharma': 'RD Sharma',
    'notes': 'Notes',
    'sample-paper': 'Sample Paper'
  }[contentType] || contentType;
  
  return (
    <div className="container-custom py-8">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <Link href={`/${contentType}`} className="hover:text-blue-600">{contentTypeDisplay}</Link>
        <span>/</span>
        <Link href={`/${contentType}/class-${classNum}`} className="hover:text-blue-600">Class {classNum}</Link>
        <span>/</span>
        <Link href={`/${contentType}/class-${classNum}/${subject}`} className="hover:text-blue-600">
          {subject.charAt(0).toUpperCase() + subject.slice(1).replace(/-/g, ' ')}
        </Link>
        <span>/</span>
        <span className="text-blue-600">Chapter {chapterNum}</span>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        {contentTypeDisplay} for Class {classNum} - {subject.charAt(0).toUpperCase() + subject.slice(1).replace(/-/g, ' ')} - Chapter {chapterNum}
      </h1>
      
      {/* Content */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.title}</h2>
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: content.htmlContent }} 
        />
      </div>
    </div>
  );
} 