'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';

export default function AdminDashboard() {
  const router = useRouter();
  const { currentUser, loading, logOut } = useAuth();

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !currentUser) {
      router.push('/admin/login');
    }
  }, [currentUser, loading, router]);

  const handleSignOut = async () => {
    try {
      await logOut();
      router.push('/admin/login');
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  if (loading) {
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
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Content Management */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Content Management</h2>
          <p className="mb-6 text-gray-600">Upload, edit, and delete educational content for the website.</p>
          <div className="flex flex-col space-y-3">
            <Link 
              href="/admin/manage" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center"
            >
              Manage Content
            </Link>
            <Link 
              href="/admin/upload" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded text-center"
            >
              Upload New Content
            </Link>
          </div>
        </div>

        {/* User Profile */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">User Profile</h2>
          <div className="mb-6">
            <p className="text-gray-600">Logged in as:</p>
            <p className="font-medium text-gray-900">{currentUser.email}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded text-center"
          >
            Sign Out
          </button>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 text-blue-800 rounded-lg">
        <h2 className="font-semibold mb-2">Admin Tools</h2>
        <p className="text-sm text-blue-700">
          Use the content management tools to upload PDFs for NCERT solutions, RD Sharma, notes, and sample papers.
          The content will be accessible through the website's navigation system for students to view and download.
        </p>
      </div>
    </div>
  );
} 