'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getContentsByClass } from '@/services/contentService';
import { ContentType, getContentTypeDisplayName, formatSubjectName } from '@/models/Content';

export default function ClassPage({ params }: { params: { contentType: string; classNum: string } }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [subjects, setSubjects] = useState<string[]>([]);
  
  const { contentType, classNum } = params;
  const sanitizedClassNum = classNum.replace('class-', '');
  const contentTypeDisplay = getContentTypeDisplayName(contentType);

  useEffect(() => {
    // Validate content type
    if (!Object.values(ContentType).includes(contentType as ContentType)) {
      router.push('/not-found');
      return;
    }

    async function fetchSubjects() {
      try {
        setIsLoading(true);
        const contents = await getContentsByClass(contentType as ContentType, sanitizedClassNum);
        
        // Extract unique subjects
        const uniqueSubjects = Array.from(new Set(contents.map(item => item.subject))).sort();
        setSubjects(uniqueSubjects);
      } catch (err) {
        console.error('Error fetching subjects:', err);
        setError('Failed to load subjects. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchSubjects();
  }, [contentType, sanitizedClassNum, router]);

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
        <span className="text-blue-600">Class {sanitizedClassNum}</span>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        {contentTypeDisplay} for Class {sanitizedClassNum}
      </h1>
      
      <div className="mb-8">
        <p className="text-lg text-gray-600">
          Select a subject to view available content.
        </p>
      </div>
      
      {subjects.length === 0 ? (
        <div className="bg-yellow-50 p-6 rounded-lg text-center">
          <h2 className="text-lg font-medium text-yellow-800 mb-2">No Content Available Yet</h2>
          <p className="text-yellow-700">We're working on adding content for this class. Please check back later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subjects.map((subject) => (
            <Link 
              key={subject} 
              href={`/${contentType}/class-${sanitizedClassNum}/${subject}`}
              className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{formatSubjectName(subject)}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 