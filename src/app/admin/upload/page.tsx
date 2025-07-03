'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ContentType } from '@/models/Content';
import { useAuth } from '@/lib/AuthContext';
import { getContentFilePath } from '@/utils/fileClient';

export default function UploadPage() {
  const router = useRouter();
  const { currentUser, loading } = useAuth();
  
  const [title, setTitle] = useState('');
  const [type, setType] = useState<ContentType>(ContentType.NCERT);
  const [classNum, setClassNum] = useState('');
  const [subject, setSubject] = useState('');
  const [chapter, setChapter] = useState('');
  const [description, setDescription] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    // If not loading and no user, redirect to login
    if (!loading && !currentUser) {
      router.push('/admin/login');
    }
  }, [currentUser, loading, router]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    
    // Validate required fields
    if (!title || !type || !classNum || !subject) {
      setErrorMsg('Please fill all required fields');
      return;
    }
    
    // Validate file upload
    if (!pdfFile) {
      setErrorMsg('Please upload a PDF file');
      return;
    }
    
    if (!pdfFile.type.includes('pdf')) {
      setErrorMsg('Please upload a PDF file');
      return;
    }
    
    try {
      setIsUploading(true);
      
      // Get auth token
      const token = await currentUser?.getIdToken();
      
      if (!token) {
        throw new Error('Not authenticated');
      }
      
      // Create form data
      const formData = new FormData();
      formData.append('title', title);
      formData.append('type', type);
      formData.append('class', classNum);
      formData.append('subject', subject);
      formData.append('description', description || title);
      if (chapter) formData.append('chapter', chapter);
      formData.append('pdfFile', pdfFile);
      
      // Upload content via API
      const response = await fetch('/api/content/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to upload content');
      }
      
      // Success
      setSuccessMsg('Content uploaded successfully!');
      
      // Reset form
      setTitle('');
      setType(ContentType.NCERT);
      setClassNum('');
      setSubject('');
      setChapter('');
      setDescription('');
      setPdfFile(null);
      
      // Redirect to manage page after a short delay
      setTimeout(() => {
        router.push('/admin/manage');
      }, 1500);
    } catch (error) {
      console.error('Upload error:', error);
      setErrorMsg(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsUploading(false);
    }
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!currentUser) {
    return null; // Will redirect to login
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Upload Content</h1>
      
      {errorMsg && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {errorMsg}
        </div>
      )}
      
      {successMsg && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {successMsg}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label className="block mb-2 font-medium">
              Content Type <span className="text-red-500">*</span>
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as ContentType)}
              className="w-full p-2 border rounded"
              required
            >
              {Object.values(ContentType).map((contentType) => (
                <option key={contentType} value={contentType}>
                  {contentType.replace(/-/g, ' ').toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block mb-2 font-medium">
              Class <span className="text-red-500">*</span>
            </label>
            <select
              value={classNum}
              onChange={(e) => setClassNum(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Class</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  Class {num}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block mb-2 font-medium">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="E.g., maths, science, english"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label className="block mb-2 font-medium">
              Chapter Number (optional)
            </label>
            <input
              type="text"
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
              placeholder="E.g., 1, 2, 3"
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div>
            <label className="block mb-2 font-medium">
              Description (optional)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded"
              rows={3}
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">
              PDF File <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setPdfFile(file);
              }}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>
        
        <div>
          <button
            type="submit"
            disabled={isUploading}
            className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded ${
              isUploading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isUploading ? 'Uploading...' : 'Upload Content'}
          </button>
        </div>
      </form>
    </div>
  );
} 