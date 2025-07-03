'use client';

import { AuthProvider } from '@/lib/AuthContext';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  return (
    <AuthProvider>
      {isLoginPage ? (
        <>{children}</>
      ) : (
        <div className="flex flex-col min-h-screen">
          <nav className="bg-gray-800 text-white shadow-md">
            <div className="container-custom py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-8">
                  <Link href="/admin" className="font-bold text-xl text-white">
                    StudyZen Admin
                  </Link>
                  <div className="hidden md:flex space-x-4">
                    <Link href="/admin" className={`text-white ${pathname === '/admin' ? 'font-bold' : 'hover:text-gray-200'}`}>
                      Dashboard
                    </Link>
                    <Link href="/admin/upload" className={`text-white ${pathname === '/admin/upload' ? 'font-bold' : 'hover:text-gray-200'}`}>
                      Upload Content
                    </Link>
                    <Link href="/admin/manage" className={`text-white ${pathname.startsWith('/admin/manage') ? 'font-bold' : 'hover:text-gray-200'}`}>
                      Manage Content
                    </Link>
                  </div>
                </div>
                <div>
                  <Link href="/" className="text-white hover:text-gray-200">
                    View Site
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          
          <main className="flex-grow">
            {children}
          </main>
          
          <footer className="bg-gray-100 border-t border-gray-200">
            <div className="container-custom py-4 text-center text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} StudyZen Admin Panel
            </div>
          </footer>
        </div>
      )}
    </AuthProvider>
  );
} 