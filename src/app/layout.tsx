import './globals.css'
import type { Metadata } from 'next'
import Header, { HeaderSpacer } from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'StudyZen - Your Complete Study Resource',
  description: 'Access free NCERT solutions, notes, and study materials for students in classes 6-12',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <div className="flex flex-col min-h-screen">
          <Header />
          <HeaderSpacer />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 