import { getContentById } from '@/services/contentService';
import { formatSubjectName, getContentTypeDisplayName } from '@/models/Content';
import { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Import the PdfViewer component dynamically with client-side only rendering
const PdfViewer = dynamic(() => import('@/components/PdfViewer'), {
  ssr: false,
});

interface ContentPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ContentPageProps): Promise<Metadata> {
  // Fetch content
  const content = await getContentById(params.id);

  if (!content) {
    return {
      title: 'Content Not Found - StudyZen',
    };
  }

  return {
    title: `${content.title} - ${getContentTypeDisplayName(content.type)} - StudyZen`,
    description: content.description || `${getContentTypeDisplayName(content.type)} for Class ${content.classNum} ${formatSubjectName(content.subject)}`,
  };
}

export default async function ContentPage({ params }: ContentPageProps) {
  const content = await getContentById(params.id);

  if (!content) {
    return (
      <div className="container-custom py-12">
        <div className="bg-red-50 p-6 rounded-lg">
          <h1 className="text-2xl font-bold text-red-700 mb-4">Content Not Found</h1>
          <p className="text-red-600 mb-4">Sorry, the content you're looking for doesn't exist or has been removed.</p>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  // Generate breadcrumb path
  const breadcrumbs = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: getContentTypeDisplayName(content.type),
      href: `/${content.type}`,
    },
    {
      title: `Class ${content.classNum}`,
      href: `/${content.type}/class-${content.classNum}`,
    },
    {
      title: formatSubjectName(content.subject),
      href: `/${content.type}/class-${content.classNum}/${content.subject}`,
    },
  ];

  if (content.chapter) {
    breadcrumbs.push({
      title: `Chapter ${content.chapter}`,
      href: `/${content.type}/class-${content.classNum}/${content.subject}/chapter-${content.chapter}`,
    });
  }

  breadcrumbs.push({
    title: content.title,
    href: `/content/${content.id}`,
  });

  return (
    <div className="container-custom py-8">
      {/* Breadcrumbs */}
      <nav className="flex flex-wrap text-sm mb-6 text-gray-500">
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {index === breadcrumbs.length - 1 ? (
              <span className="font-medium text-gray-800">{crumb.title}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-blue-600 hover:underline">
                {crumb.title}
              </Link>
            )}
          </div>
        ))}
      </nav>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{content.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {getContentTypeDisplayName(content.type)}
          </span>
          
          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Class {content.classNum}
          </span>
          
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {formatSubjectName(content.subject)}
          </span>
          
          {content.chapter && (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
              Chapter {content.chapter}
            </span>
          )}
        </div>
        
        {content.description && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Description</h2>
            <p className="text-gray-600">{content.description}</p>
          </div>
        )}
        
        {content.pdfPath ? (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Content</h2>
            <PdfViewer pdfUrl={content.pdfPath} />
          </div>
        ) : (
          <div className="bg-yellow-50 p-4 rounded-lg text-yellow-700">
            No PDF content available.
          </div>
        )}
      </div>
    </div>
  );
} 