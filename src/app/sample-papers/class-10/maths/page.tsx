import Link from 'next/link';

export const metadata = {
  title: 'Class 10 Maths Sample Papers - CBSE Board Exam Preparation - StudyZen',
  description: 'Download free Class 10 Maths sample papers with solutions for CBSE board exam preparation. Includes previous year papers and practice sets.',
  keywords: 'class 10 maths sample papers, CBSE class 10 maths papers, class 10 maths practice papers, CBSE sample papers',
};

export default function Class10MathsSamplePapers() {
  // Sample papers data
  const samplePapers = [
    { id: 1, title: 'Sample Paper 1', marks: 80, questions: 38, time: '3 hours' },
    { id: 2, title: 'Sample Paper 2', marks: 80, questions: 38, time: '3 hours' },
    { id: 3, title: 'Sample Paper 3', marks: 80, questions: 38, time: '3 hours' },
    { id: 4, title: 'Sample Paper 4', marks: 80, questions: 38, time: '3 hours' },
    { id: 5, title: 'Sample Paper 5', marks: 80, questions: 38, time: '3 hours' },
  ];

  // Previous year papers data
  const previousYearPapers = [
    { id: 1, year: '2024', term: 'Term 2', marks: 80, questions: 38, time: '3 hours' },
    { id: 2, year: '2024', term: 'Term 1', marks: 40, questions: 50, time: '2 hours' },
    { id: 3, year: '2023', term: 'Term 2', marks: 80, questions: 38, time: '3 hours' },
    { id: 4, year: '2023', term: 'Term 1', marks: 40, questions: 50, time: '2 hours' },
    { id: 5, year: '2022', term: 'Term 2', marks: 80, questions: 38, time: '3 hours' },
  ];

  return (
    <div className="container-custom py-8">
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/sample-papers" className="hover:text-primary">Sample Papers</Link>
        <span>/</span>
        <Link href="/sample-papers/class-10" className="hover:text-primary">Class 10</Link>
        <span>/</span>
        <span className="text-primary">Maths</span>
      </div>

      <h1 className="text-3xl font-bold mb-6">Class 10 Maths Sample Papers</h1>
      
      {/* Introduction */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <p className="mb-4">
          Prepare for your CBSE Class 10 Maths Board Exam with our comprehensive collection of sample papers. These papers are designed according to the latest CBSE pattern and syllabus to help you practice effectively.
        </p>
        <p>
          Each sample paper comes with detailed solutions and marking scheme to help you understand the correct approach to solve problems.
        </p>
      </div>

      {/* Ad Section */}
      <div className="ad-container h-24 mb-8">
        {/* HilltopsAds placeholder */}
        <p className="text-gray-500">Advertisement</p>
      </div>

      {/* Sample Papers */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Latest Sample Papers (2024-25)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {samplePapers.map((paper) => (
            <div key={paper.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary text-white p-4">
                <h3 className="text-xl font-bold">{paper.title}</h3>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-3">
                  <span className="text-sm text-gray-600">Max Marks: {paper.marks}</span>
                  <span className="text-sm text-gray-600">Time: {paper.time}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Total Questions: {paper.questions}</p>
                <div className="flex space-x-2">
                  <a href="#" className="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition-colors">
                    Question Paper
                  </a>
                  <a href="#" className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors">
                    Solutions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Year Papers */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Previous Year Papers</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Year</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Term</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Max Marks</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Time</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Download</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {previousYearPapers.map((paper) => (
                <tr key={paper.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">{paper.year}</td>
                  <td className="px-4 py-3 text-sm">{paper.term}</td>
                  <td className="px-4 py-3 text-sm">{paper.marks}</td>
                  <td className="px-4 py-3 text-sm">{paper.time}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex space-x-2">
                      <a href="#" className="text-blue-600 hover:underline">Question Paper</a>
                      <a href="#" className="text-green-600 hover:underline">Solutions</a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Exam Tips */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Tips for CBSE Class 10 Maths Exam</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Practice at least 5-6 sample papers before the exam.</li>
          <li>Focus on NCERT examples and exercises as they form the base of the exam.</li>
          <li>Allocate time for each section according to marks distribution.</li>
          <li>Practice diagrams and constructions regularly.</li>
          <li>Revise formulas daily to memorize them effectively.</li>
          <li>Solve previous year papers to understand the exam pattern.</li>
        </ul>
      </div>

      {/* Important Resources */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Important Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/ncert-solutions/class-10/maths" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
            <h3 className="font-semibold mb-2">NCERT Solutions</h3>
            <p className="text-sm text-gray-600">Chapter-wise solutions for all exercises</p>
          </Link>
          <Link href="/notes/class-10/maths" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
            <h3 className="font-semibold mb-2">Class Notes</h3>
            <p className="text-sm text-gray-600">Comprehensive chapter-wise notes</p>
          </Link>
          <Link href="/important-questions/class-10/maths" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
            <h3 className="font-semibold mb-2">Important Questions</h3>
            <p className="text-sm text-gray-600">Chapter-wise important questions</p>
          </Link>
        </div>
      </div>

      {/* Bottom Ad */}
      <div className="ad-container h-24">
        {/* HilltopsAds placeholder */}
        <p className="text-gray-500">Advertisement</p>
      </div>
    </div>
  );
} 