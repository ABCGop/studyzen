import Link from 'next/link';

export const metadata = {
  title: 'Study Notes for Class 6 to 12 - StudyZen',
  description: 'Access free study notes for classes 6 to 12. Chapter-wise notes for Maths, Science, English, Social Science, Physics, Chemistry, and Biology.',
  keywords: 'study notes, class notes, CBSE notes, NCERT notes, class 6-12 notes, revision notes',
};

export default function Notes() {
  // Class-wise notes data
  const classData = [
    {
      class: 6,
      subjects: ['Maths', 'Science', 'Social Science', 'English', 'Hindi', 'Sanskrit'],
    },
    {
      class: 7,
      subjects: ['Maths', 'Science', 'Social Science', 'English', 'Hindi', 'Sanskrit'],
    },
    {
      class: 8,
      subjects: ['Maths', 'Science', 'Social Science', 'English', 'Hindi', 'Sanskrit'],
    },
    {
      class: 9,
      subjects: ['Maths', 'Science', 'Social Science', 'English', 'Hindi', 'Sanskrit'],
    },
    {
      class: 10,
      subjects: ['Maths', 'Science', 'Social Science', 'English', 'Hindi', 'Sanskrit'],
    },
    {
      class: 11,
      subjects: ['Maths', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science', 'Economics', 'Business Studies'],
    },
    {
      class: 12,
      subjects: ['Maths', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science', 'Economics', 'Business Studies'],
    },
  ];

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">Study Notes for Class 6 to 12</h1>
      
      {/* Introduction */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <p className="mb-4">
          Welcome to StudyZen's comprehensive collection of study notes for Classes 6 to 12. Our notes are designed to help students grasp key concepts quickly and prepare effectively for their exams.
        </p>
        <p>
          These notes are prepared by experienced teachers and cover all important topics as per the latest CBSE curriculum. They are concise, accurate, and perfect for last-minute revision.
        </p>
      </div>

      {/* Ad Section */}
      <div className="ad-container h-24 mb-8">
        <p className="text-gray-500">Advertisement</p>
      </div>

      {/* Class-wise Notes */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Select Your Class</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {classData.map((item) => (
            <div key={item.class} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-secondary text-white p-4">
                <h3 className="text-xl font-bold">Class {item.class}</h3>
              </div>
              <div className="p-4">
                <ul className="divide-y divide-gray-100">
                  {item.subjects.map((subject) => (
                    <li key={subject} className="py-2">
                      <Link href={`/notes/class-${item.class}/${subject.toLowerCase().replace(' ', '-')}`} className="flex items-center text-gray-700 hover:text-secondary">
                        <span className="mr-2">•</span>
                        <span>{subject}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features of Our Notes */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose Our Study Notes?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Concise Format</h3>
              <p className="text-gray-600">Our notes focus on key concepts and formulas, making them perfect for quick revision.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Expert-Crafted</h3>
              <p className="text-gray-600">Prepared by experienced teachers with deep subject knowledge.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Exam-Oriented</h3>
              <p className="text-gray-600">Focused on topics that are important from an examination perspective.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Visual Learning</h3>
              <p className="text-gray-600">Includes diagrams, tables, and charts to enhance understanding.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Free PDF Download</h3>
              <p className="text-gray-600">Available for free download, allowing offline study anytime, anywhere.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Latest Curriculum</h3>
              <p className="text-gray-600">Updated regularly to align with the latest CBSE curriculum and patterns.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How to Use Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">How to Use These Notes Effectively</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>First understand the concepts from your textbooks or classroom learning</li>
          <li>Use our notes to reinforce your understanding and clarify doubts</li>
          <li>Highlight important points and formulas for quick revision</li>
          <li>Practice related problems to test your understanding</li>
          <li>Revisit the notes a day before your exam for last-minute preparation</li>
        </ol>
      </div>

      {/* Bottom Ad */}
      <div className="ad-container h-24">
        <p className="text-gray-500">Advertisement</p>
      </div>
    </div>
  );
} 