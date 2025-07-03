'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getContentsByType } from '@/services/contentService';
import { ContentType, getContentTypeDisplayName } from '@/models/Content';

export default function ContentTypePage({ params }: { params: { contentType: string } }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [classes, setClasses] = useState<string[]>([]);
  const contentType = params.contentType as ContentType;
  const contentTypeDisplay = getContentTypeDisplayName(contentType);

  useEffect(() => {
    // Validate content type
    if (!Object.values(ContentType).includes(contentType as ContentType)) {
      router.push('/not-found');
      return;
    }

    async function fetchClasses() {
      try {
        setIsLoading(true);
        const contents = await getContentsByType(contentType as ContentType);
        
        // Extract unique class numbers
        const uniqueClasses = Array.from(new Set(contents.map(item => item.classNum))).sort((a, b) => {
          // Convert to number for proper sorting
          return parseInt(a) - parseInt(b);
        });
        
        setClasses(uniqueClasses);
      } catch (err) {
        console.error('Error fetching classes:', err);
        setError('Failed to load classes. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchClasses();
  }, [contentType, router]);

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
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{contentTypeDisplay}</h1>
      
      <div className="mb-8">
        <p className="text-lg text-gray-600">
          {contentType === ContentType.NCERT && "Step-by-step solutions to NCERT textbook problems. Select your class below to get started."}
          {contentType === ContentType.RD_SHARMA && "Comprehensive solutions to RD Sharma textbook exercises. Select your class below."}
          {contentType === ContentType.NOTES && "Concise and well-organized notes on key topics. Choose your class to explore."}
          {contentType === ContentType.SAMPLE_PAPER && "Practice papers with solutions for exam preparation. Select your class to view available papers."}
        </p>
      </div>
      
      {classes.length === 0 ? (
        <div className="bg-yellow-50 p-6 rounded-lg text-center">
          <h2 className="text-lg font-medium text-yellow-800 mb-2">No Content Available Yet</h2>
          <p className="text-yellow-700">We're working on adding content for this section. Please check back later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {classes.map((classNum) => (
            <Link 
              key={classNum} 
              href={`/${contentType}/class-${classNum}`}
              className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-sm transition-all hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-gray-800">Class {classNum}</h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 