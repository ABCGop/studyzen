'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ContentType, contentTypeDisplayNames } from '@/models/Content';

export default function Home() {
  const contentTypes = Object.values(ContentType);

  return (
    <main className="container-custom py-10">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Welcome to StudyZen
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Your one-stop platform for NCERT solutions, RD Sharma solutions, notes,
          and sample papers to excel in your academic journey.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">
          Study Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contentTypes.map((type) => (
            <div
              key={type}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {contentTypeDisplayNames[type]}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type === ContentType.NCERT && "Step-by-step solutions to NCERT textbook problems."}
                  {type === ContentType.RD_SHARMA && "Detailed solutions to RD Sharma exercises."}
                  {type === ContentType.NOTES && "Concise and comprehensive notes on key topics."}
                  {type === ContentType.SAMPLE_PAPER && "Practice papers with solutions for exam preparation."}
                </p>
                <Link
                  href={`/${type}`}
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Why Choose StudyZen?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Comprehensive Content
            </h3>
            <p className="text-gray-600">
              Access a wide range of educational materials covering multiple subjects and classes.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Step-by-Step Solutions
            </h3>
            <p className="text-gray-600">
              Detailed explanations to help you understand concepts better and solve problems confidently.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Well-Organized Resources
            </h3>
            <p className="text-gray-600">
              Easy navigation through classes, subjects, and chapters for a seamless learning experience.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Ready to excel in your studies?
        </h2>
        <Link
          href={`/${ContentType.NCERT}`}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
        >
          Get Started Now
        </Link>
      </section>
    </main>
  );
}

// Feature Card Component
function FeatureCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-5 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

// Subject Card Component
function SubjectCard({ name, color }: { name: string; color: string }) {
  return (
    <Link href={`/subjects/${name.toLowerCase()}`} className={`${color} p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center`}>
      <h3 className="text-xl font-semibold text-white">{name}</h3>
    </Link>
  );
}

// Testimonial Card Component
function TestimonialCard({ quote, name, designation }: { quote: string; name: string; designation: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic">"{quote}"</p>
      <div>
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <p className="text-gray-500 text-sm">{designation}</p>
      </div>
    </div>
  );
}

// Quick Link Card Component
function QuickLinkCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}

// Subject data
const subjects = [
  { name: "Mathematics", color: "bg-blue-600" },
  { name: "Physics", color: "bg-purple-600" },
  { name: "Chemistry", color: "bg-green-600" },
  { name: "Biology", color: "bg-red-600" },
  { name: "English", color: "bg-yellow-600" },
  { name: "Social Science", color: "bg-indigo-600" },
  { name: "Hindi", color: "bg-pink-600" },
  { name: "Computer Science", color: "bg-teal-600" },
]; 