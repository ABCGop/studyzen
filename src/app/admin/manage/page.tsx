'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { getAllContents, deleteContent } from '@/services/contentService';
import { Content, getContentTypeDisplayName, formatSubjectName } from '@/models/Content';

export default function ContentManagement() {
  const router = useRouter();
  const { currentUser, loading } = useAuth();
  const [contentItems, setContentItems] = useState<Content[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !currentUser) {
      router.push('/admin/login');
    }
  }, [currentUser, loading, router]);

  // Fetch content data
  useEffect(() => {
    const fetchContent = async () => {
      if (loading || !currentUser) return;
      
      try {
        setIsLoading(true);
        const contents = await getAllContents();
        setContentItems(contents);
      } catch (err) {
        console.error('Error fetching content:', err);
        setError('Failed to load content. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchContent();
  }, [loading, currentUser]);
  
  const handleDeleteContent = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this content?')) {
      return;
    }
    
    try {
      await deleteContent(id);
      setContentItems(contentItems.filter(item => item.id !== id));
    } catch (err) {
      console.error('Error deleting content:', err);
      alert('Failed to delete content. Please try again.');
    }
  };
  
  if (loading || isLoading) {
    return (
      <div className="container-custom min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800"></div>
      </div>
    );
  }
  
  if (!currentUser) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="container-custom py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Content</h1>
        <Link href="/admin/upload" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Upload New Content
        </Link>
      </div>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {contentItems.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p className="mb-4">No content found.</p>
            <p>Upload your first content to get started!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chapter</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Modified</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contentItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {getContentTypeDisplayName(item.type)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Class {item.classNum}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatSubjectName(item.subject)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.chapter || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(item.updatedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        href={`/content/${item.id}`}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                        target="_blank"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleDeleteContent(item.id!)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
} 