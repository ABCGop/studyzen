'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getContentsBySubject } from '@/services/contentService';
import { Content, ContentType, getContentTypeDisplayName, formatSubjectName } from '@/models/Content';

export default function SubjectPage({ params }: { params: { contentType: string; classNum: string; subject: string } }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [contents, setContents] = useState<Content[]>([]);
  
  const { contentType, classNum, subject } = params;
  const sanitizedClassNum = classNum.replace('class-', '');
  const contentTypeDisplay = getContentTypeDisplayName(contentType);
  const subjectDisplay = formatSubjectName(subject);

  useEffect(() => {
    // Validate content type
    if (!Object.values(ContentType).includes(contentType as ContentType)) {
      router.push('/not-found');
      return;
    }

    async function fetchContents() {
      try {
        setIsLoading(true);
        const contentsData = await getContentsBySubject(
          contentType as ContentType, 
          sanitizedClassNum,
          subject
        );
        
        setContents(contentsData);
      } catch (err) {
        console.error('Error fetching content:', err);
        setError('Failed to load content. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchContents();
  }, [contentType, sanitizedClassNum, subject, router]);

  // Group contents by chapter
  const groupedContents: { [key: string]: Content[] } = {};
  const nonChapterContents: Content[] = [];

  contents.forEach(content => {
    if (content.chapter) {
      if (!groupedContents[content.chapter]) {
        groupedContents[content.chapter] = [];
      }
      groupedContents[content.chapter].push(content);
    } else {
      nonChapterContents.push(content);
    }
  });

  // Sort chapter keys numerically
  const sortedChapters = Object.keys(groupedContents).sort((a, b) => {
    const numA = parseInt(a);
    const numB = parseInt(b);
    return numA - numB;
  });

  if (isLoading) {
    return (
      <div className="container-custom min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-custom py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Go back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <Link href={`/${contentType}`} className="hover:text-blue-600">{contentTypeDisplay}</Link>
        <span>/</span>
        <Link href={`/${contentType}/class-${sanitizedClassNum}`} className="hover:text-blue-600">Class {sanitizedClassNum}</Link>
        <span>/</span>
        <span className="text-blue-600">{subjectDisplay}</span>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        {contentTypeDisplay} for Class {sanitizedClassNum} {subjectDisplay}
      </h1>
      
      <div className="mb-10">
        <p className="text-lg text-gray-600">
          Select from the available content below.
        </p>
      </div>
      
      {contents.length === 0 ? (
        <div className="bg-yellow-50 p-6 rounded-lg text-center">
          <h2 className="text-lg font-medium text-yellow-800 mb-2">No Content Available Yet</h2>
          <p className="text-yellow-700">We're working on adding content for this subject. Please check back later.</p>
        </div>
      ) : (
        <div className="space-y-10">
          {/* Display non-chapter contents first */}
          {nonChapterContents.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">General Content</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {nonChapterContents.map((content) => (
                  <Link 
                    key={content.id} 
                    href={`/content/${content.id}`}
                    className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{content.title}</h3>
                        {content.description && (
                          <p className="text-gray-600 text-sm line-clamp-2 mb-2">{content.description}</p>
                        )}
                        <div className="text-blue-600 text-sm font-medium mt-1">View Content →</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Display chapter-based contents */}
          {sortedChapters.map(chapter => (
            <div key={chapter}>
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">
                Chapter {chapter}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {groupedContents[chapter].map((content) => (
                  <Link 
                    key={content.id} 
                    href={`/content/${content.id}`}
                    className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{content.title}</h3>
                        {content.description && (
                          <p className="text-gray-600 text-sm line-clamp-2 mb-2">{content.description}</p>
                        )}
                        <div className="text-blue-600 text-sm font-medium mt-1">View Content →</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 