import Link from 'next/link';

export const metadata = {
  title: 'RD Sharma Solutions for Class 6 to 12 - StudyZen',
  description: 'Free RD Sharma textbook solutions for classes 6 to 12. Access chapter-wise solutions for Maths with step-by-step explanations.',
  keywords: 'RD Sharma solutions, RD Sharma answers, RD Sharma maths solutions, class 6-12 RD Sharma',
};

export default function RDSharmaSolutions() {
  // Class-wise RD Sharma solutions data
  const classData = [
    {
      class: 6,
      chapters: 20,
    },
    {
      class: 7,
      chapters: 22,
    },
    {
      class: 8,
      chapters: 25,
    },
    {
      class: 9,
      chapters: 28,
    },
    {
      class: 10,
      chapters: 16,
      featured: true,
    },
    {
      class: 11,
      chapters: 33,
    },
    {
      class: 12,
      chapters: 30,
      featured: true,
    },
  ];

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">RD Sharma Solutions for Class 6 to 12</h1>
      
      {/* Introduction */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <p className="mb-4">
          Welcome to StudyZen's comprehensive collection of RD Sharma textbook solutions for Classes 6 to 12. RD Sharma is one of the most popular mathematics textbooks that helps students develop strong problem-solving skills.
        </p>
        <p>
          Our solutions are prepared by expert mathematics teachers and provide step-by-step explanations to help you understand complex mathematical concepts and solve problems efficiently.
        </p>
      </div>

      {/* Featured Classes */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Board Exam Special</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {classData.filter(item => item.featured).map((item) => (
            <div key={item.class} className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl overflow-hidden shadow-lg text-white">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Class {item.class}</h3>
                  <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{item.chapters} Chapters</span>
                </div>
                <p className="mb-5 opacity-90">Complete solutions to all exercises in the RD Sharma Class {item.class} textbook with detailed explanations.</p>
                <Link href={`/rd-sharma/class-${item.class}`} className="inline-block bg-white text-blue-800 font-medium px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  View Solutions
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {classData.filter(item => !item.featured).map((item) => (
            <Link 
              key={item.class} 
              href={`/rd-sharma/class-${item.class}`} 
              className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow hover:border-blue-300"
            >
              <h3 className="text-xl font-bold mb-2">Class {item.class}</h3>
              <p className="text-gray-600 text-sm mb-3">{item.chapters} Chapters</p>
              <span className="text-blue-600 text-sm">View Solutions →</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Why RD Sharma */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Why RD Sharma Solutions?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Comprehensive Coverage</h3>
            <p className="text-gray-600">
              RD Sharma textbooks cover a wide range of mathematical concepts and provide extensive practice problems for each topic. The comprehensive coverage helps students develop a strong foundation in mathematics.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Problem-Solving Approach</h3>
            <p className="text-gray-600">
              The textbooks follow a problem-solving approach that helps students develop analytical thinking and logical reasoning skills, which are essential for higher studies and competitive exams.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Exam Preparation</h3>
            <p className="text-gray-600">
              RD Sharma books include a variety of problems ranging from basic to advanced levels, helping students prepare thoroughly for school exams, board exams, and competitive exams like JEE, NEET, etc.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Concept Clarity</h3>
            <p className="text-gray-600">
              The textbooks focus on building clear conceptual understanding rather than rote learning, which helps students apply mathematical principles to solve new and challenging problems.
            </p>
          </div>
        </div>
      </div>

      {/* How Our Solutions Help */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">How Our Solutions Help You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Step-by-Step Solutions</h3>
            <p className="text-gray-600">Detailed explanations for each step to help you understand the problem-solving process.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Concept Explanations</h3>
            <p className="text-gray-600">Brief theoretical explanations to reinforce your understanding of key mathematical concepts.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.38A7.968 7.968 0 0014.5 14c1.255 0 2.443.29 3.5.804v-10A7.969 7.969 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">All Exercises Covered</h3>
            <p className="text-gray-600">Solutions to all exercises in the RD Sharma textbook, including optional exercises.</p>
          </div>
        </div>
      </div>

      {/* Bottom Ad */}
      <div className="ad-container h-24">
        <p className="text-gray-500">Advertisement</p>
      </div>
    </div>
  );
} 