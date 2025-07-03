import Link from 'next/link';

export const metadata = {
  title: 'Syllabus for Class 6 to 12 - CBSE Curriculum - StudyZen',
  description: 'Access detailed syllabus for classes 6 to 12 following the latest CBSE curriculum. Subject-wise and chapter-wise syllabus breakdown.',
  keywords: 'CBSE syllabus, class 6-12 syllabus, subject-wise syllabus, CBSE curriculum, exam syllabus',
};

export default function Syllabus() {
  // Class-wise syllabus data
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
      <h1 className="text-3xl font-bold mb-6">CBSE Syllabus for Class 6 to 12</h1>
      
      {/* Introduction */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <p className="mb-4">
          StudyZen provides the latest CBSE syllabus for classes 6 to 12. Understanding the syllabus is the first step towards effective exam preparation, as it helps you identify important topics and plan your studies accordingly.
        </p>
        <p>
          Our comprehensive syllabus guide includes subject-wise and chapter-wise breakdowns, marking schemes, and recommended books to help you prepare effectively for your exams.
        </p>
      </div>

      {/* Featured Classes */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Board Exam Syllabus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {classData.filter(item => item.featured).map((item) => (
            <div key={item.class} className="bg-gradient-to-r from-purple-700 to-indigo-600 rounded-xl overflow-hidden shadow-lg text-white">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Class {item.class} Syllabus</h3>
                <p className="mb-4 opacity-90">Complete syllabus details for all subjects as per the latest CBSE guidelines for the academic year 2024-25.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.subjects.map((subject) => (
                    <Link 
                      key={subject} 
                      href={`/syllabus/class-${item.class}/${subject.toLowerCase().replace(' ', '-')}`}
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-full text-sm transition-all"
                    >
                      {subject}
                    </Link>
                  ))}
                </div>
                <Link href={`/syllabus/class-${item.class}`} className="inline-block bg-white text-indigo-700 font-medium px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  View Full Syllabus
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
              <div className="bg-purple-600 text-white p-4">
                <h3 className="text-xl font-bold">Class {item.class} Syllabus</h3>
              </div>
              <div className="p-4">
                <ul className="divide-y divide-gray-100">
                  {item.subjects.map((subject) => (
                    <li key={subject} className="py-2">
                      <Link href={`/syllabus/class-${item.class}/${subject.toLowerCase().replace(' ', '-')}`} className="flex items-center text-gray-700 hover:text-purple-600">
                        <span className="mr-2">•</span>
                        <span>{subject}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={`/syllabus/class-${item.class}`} className="mt-4 block text-center bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors">
                  View All Subjects
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Updates */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Latest CBSE Updates for 2024-25</h2>
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>Competency-focused questions:</strong> The CBSE has increased the weightage of competency-focused questions to 40% for Classes 9 and 10, and 50% for Classes 11 and 12.
          </li>
          <li>
            <strong>Single annual exam pattern:</strong> CBSE has reverted to a single annual examination for all classes, discontinuing the term-based examination pattern.
          </li>
          <li>
            <strong>Applied Mathematics introduced:</strong> CBSE has introduced Applied Mathematics as an elective subject for students who do not want to pursue Mathematics at a higher level.
          </li>
          <li>
            <strong>Art-integrated projects:</strong> At least one art-integrated project in each subject is mandatory for classes 1 to 10.
          </li>
          <li>
            <strong>Experiential learning:</strong> Greater emphasis on experiential learning with practical applications of concepts.
          </li>
        </ul>
      </div>

      {/* Exam Preparation Tips */}
      <div className="bg-purple-50 border border-purple-100 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">How to Use the Syllabus for Exam Preparation</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Understand the weightage:</strong> Pay attention to the marks distribution for different chapters/topics to prioritize your studies.
          </li>
          <li>
            <strong>Create a study schedule:</strong> Based on the syllabus, create a realistic study schedule that covers all topics before your exams.
          </li>
          <li>
            <strong>Focus on NCERT:</strong> For CBSE exams, NCERT books should be your primary study material. Cover them thoroughly before referring to other resources.
          </li>
          <li>
            <strong>Practice sample papers:</strong> Solve sample papers based on the latest syllabus to understand the question pattern and improve time management.
          </li>
          <li>
            <strong>Regular revision:</strong> Allocate time for regular revision of completed topics to ensure better retention.
          </li>
        </ol>
      </div>

      {/* Bottom Ad */}
      <div className="ad-container h-24">
        <p className="text-gray-500">Advertisement</p>
      </div>
    </div>
  );
} 