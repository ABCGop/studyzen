import Link from 'next/link';

export const metadata = {
  title: 'Sample Papers for Class 6 to 12 - StudyZen',
  description: 'Free sample papers with solutions for classes 6 to 12. Practice papers for Maths, Science, English, Social Science, Physics, Chemistry, and Biology.',
  keywords: 'sample papers, CBSE sample papers, free sample papers, practice papers, model papers, class 6-12 sample papers',
};

export default function SamplePapers() {
  // Class-wise sample papers data
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
      featured: true,
    },
    {
      class: 11,
      subjects: ['Maths', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science'],
    },
    {
      class: 12,
      subjects: ['Maths', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science'],
      featured: true,
    },
  ];

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">Sample Papers for Class 6 to 12</h1>
      
      {/* Introduction */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <p className="mb-4">
          Welcome to StudyZen's comprehensive collection of sample papers for Classes 6 to 12. Our sample papers are designed to help students prepare effectively for their examinations by familiarizing them with the question patterns and marking schemes.
        </p>
        <p>
          These papers are crafted by experienced teachers and follow the latest exam patterns prescribed by CBSE and other major boards. Each paper comes with detailed solutions to help students evaluate their performance and identify areas for improvement.
        </p>
      </div>

      {/* Featured Classes */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Board Exam Special</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {classData.filter(item => item.featured).map((item) => (
            <div key={item.class} className="bg-gradient-to-r from-accent to-primary rounded-xl overflow-hidden shadow-lg text-white">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Class {item.class} Sample Papers</h3>
                <p className="mb-4 opacity-90">Prepare for your board exams with our specially designed sample papers following the latest CBSE pattern.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.subjects.map((subject) => (
                    <Link 
                      key={subject} 
                      href={`/sample-papers/class-${item.class}/${subject.toLowerCase().replace(' ', '-')}`}
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-full text-sm transition-all"
                    >
                      {subject}
                    </Link>
                  ))}
                </div>
                <Link href={`/sample-papers/class-${item.class}`} className="inline-block bg-white text-primary font-medium px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  View All Papers
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ad Section */}
      <div className="ad-container h-24 mb-8">
        <p className="text-gray-500">Advertisement</p>
      </div>

      {/* All Classes */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">All Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {classData.filter(item => !item.featured).map((item) => (
            <div key={item.class} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-accent text-white p-4">
                <h3 className="text-xl font-bold">Class {item.class}</h3>
              </div>
              <div className="p-4">
                <ul className="divide-y divide-gray-100">
                  {item.subjects.map((subject) => (
                    <li key={subject} className="py-2">
                      <Link href={`/sample-papers/class-${item.class}/${subject.toLowerCase().replace(' ', '-')}`} className="flex items-center text-gray-700 hover:text-accent">
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

      {/* Benefits Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Benefits of Practicing Sample Papers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Familiarity with Exam Pattern</h3>
              <p className="text-gray-600">Get accustomed to the latest exam pattern and question types.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Time Management</h3>
              <p className="text-gray-600">Learn to allocate time efficiently for different sections and questions.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Self-Assessment</h3>
              <p className="text-gray-600">Evaluate your preparation and identify areas that need improvement.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Boost Confidence</h3>
              <p className="text-gray-600">Build confidence by practicing under exam-like conditions.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Identify Weak Areas</h3>
              <p className="text-gray-600">Discover topics that require more attention and focused study.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Learning from Solutions</h3>
              <p className="text-gray-600">Learn the best approach to answer questions through detailed solutions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How to Use Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">How to Effectively Use Sample Papers</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Complete the syllabus before attempting the sample papers</li>
          <li>Simulate exam conditions - use the same time limit and no external help</li>
          <li>Evaluate your answers using the provided solutions</li>
          <li>Focus on improving areas where you lost marks</li>
          <li>Practice multiple papers to cover a wide range of question patterns</li>
        </ol>
      </div>

      {/* Bottom Ad */}
      <div className="ad-container h-24">
        <p className="text-gray-500">Advertisement</p>
      </div>
    </div>
  );
} 