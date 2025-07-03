import Link from 'next/link';

export const metadata = {
  title: 'NCERT Solutions for Class 6 to 12 - StudyZen',
  description: 'Free NCERT Solutions for classes 6 to 12. Access chapter-wise solutions for Maths, Science, English, Hindi, Social Science, Physics, Chemistry, and Biology.',
  keywords: 'NCERT solutions, free NCERT solutions, class 6-12 solutions, CBSE NCERT solutions',
};

export default function NCERTSolutions() {
  // Class-wise NCERT solutions data
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
      subjects: ['Maths', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science'],
    },
    {
      class: 12,
      subjects: ['Maths', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science'],
    },
  ];

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">NCERT Solutions for Class 6 to 12</h1>
      
      {/* Introduction */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <p className="mb-4">
          Welcome to StudyZen's comprehensive collection of NCERT Solutions for Classes 6 to 12. Our solutions are designed to help students understand concepts better and excel in their studies.
        </p>
        <p>
          These solutions are prepared by expert teachers and follow the latest CBSE curriculum. They provide step-by-step explanations to help students solve problems efficiently.
        </p>
      </div>

      {/* Ad Section */}
      <div className="ad-container h-24 mb-8">
        {/* HilltopsAds placeholder */}
        <p className="text-gray-500">Advertisement</p>
      </div>

      {/* Class-wise Solutions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Select Your Class</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {classData.map((item) => (
            <div key={item.class} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary text-white p-4">
                <h3 className="text-xl font-bold">Class {item.class}</h3>
              </div>
              <div className="p-4">
                <ul className="divide-y divide-gray-100">
                  {item.subjects.map((subject) => (
                    <li key={subject} className="py-2">
                      <Link href={`/ncert-solutions/class-${item.class}/${subject.toLowerCase().replace(' ', '-')}`} className="flex items-center text-gray-700 hover:text-primary">
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
        <h2 className="text-2xl font-bold mb-4">Benefits of NCERT Solutions</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Step-by-step explanations for better understanding</li>
          <li>Prepared by expert teachers following the latest CBSE curriculum</li>
          <li>Helps in quick revision before exams</li>
          <li>Improves problem-solving skills</li>
          <li>Available for free download in PDF format</li>
        </ul>
      </div>

      {/* Bottom Ad */}
      <div className="ad-container h-24">
        {/* HilltopsAds placeholder */}
        <p className="text-gray-500">Advertisement</p>
      </div>
    </div>
  );
} 