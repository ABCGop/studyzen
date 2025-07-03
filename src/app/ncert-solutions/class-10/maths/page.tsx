import Link from 'next/link';

export const metadata = {
  title: 'NCERT Solutions for Class 10 Maths - StudyZen',
  description: 'Free NCERT Solutions for Class 10 Maths. Access chapter-wise solutions with step-by-step explanations for all exercises.',
  keywords: 'NCERT solutions class 10 maths, class 10 maths solutions, CBSE class 10 maths, class 10 mathematics',
};

export default function Class10Maths() {
  // Chapter data for Class 10 Maths
  const chapters = [
    { number: 1, title: 'Real Numbers', exercises: 5 },
    { number: 2, title: 'Polynomials', exercises: 4 },
    { number: 3, title: 'Pair of Linear Equations in Two Variables', exercises: 7 },
    { number: 4, title: 'Quadratic Equations', exercises: 4 },
    { number: 5, title: 'Arithmetic Progressions', exercises: 4 },
    { number: 6, title: 'Triangles', exercises: 6 },
    { number: 7, title: 'Coordinate Geometry', exercises: 4 },
    { number: 8, title: 'Introduction to Trigonometry', exercises: 4 },
    { number: 9, title: 'Some Applications of Trigonometry', exercises: 1 },
    { number: 10, title: 'Circles', exercises: 2 },
    { number: 11, title: 'Constructions', exercises: 2 },
    { number: 12, title: 'Areas Related to Circles', exercises: 3 },
    { number: 13, title: 'Surface Areas and Volumes', exercises: 5 },
    { number: 14, title: 'Statistics', exercises: 4 },
    { number: 15, title: 'Probability', exercises: 2 },
  ];

  return (
    <div className="container-custom py-8">
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/ncert-solutions" className="hover:text-primary">NCERT Solutions</Link>
        <span>/</span>
        <Link href="/ncert-solutions/class-10" className="hover:text-primary">Class 10</Link>
        <span>/</span>
        <span className="text-primary">Maths</span>
      </div>

      <h1 className="text-3xl font-bold mb-6">NCERT Solutions for Class 10 Maths</h1>
      
      {/* Introduction */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <p className="mb-4">
          Welcome to StudyZen's comprehensive NCERT Solutions for Class 10 Maths. These solutions are designed to help students understand mathematical concepts better and excel in their CBSE Class 10 board exams.
        </p>
        <p>
          Our expert teachers have prepared these solutions following the latest CBSE curriculum. They provide step-by-step explanations to help students solve problems efficiently.
        </p>
      </div>

      {/* Download PDF Button */}
      <div className="flex justify-center mb-8">
        <a href="#" className="pdf-download">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Download Complete PDF
        </a>
      </div>

      {/* Ad Section */}
      <div className="ad-container h-24 mb-8">
        {/* HilltopsAds placeholder */}
        <p className="text-gray-500">Advertisement</p>
      </div>

      {/* Chapters List */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Chapter-wise Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chapters.map((chapter) => (
            <div key={chapter.number} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <Link href={`/ncert-solutions/class-10/maths/chapter-${chapter.number}`} className="block">
                <h3 className="text-lg font-semibold mb-2">Chapter {chapter.number}: {chapter.title}</h3>
                <p className="text-sm text-gray-600">{chapter.exercises} Exercises • Step-by-step Solutions</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Important Topics */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Important Topics in Class 10 Maths</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Quadratic Equations and their applications</li>
          <li>Trigonometry and its applications</li>
          <li>Coordinate Geometry</li>
          <li>Circles and constructions</li>
          <li>Surface Areas and Volumes</li>
          <li>Statistics and Probability</li>
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