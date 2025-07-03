import Link from 'next/link';

export const metadata = {
  title: 'Class 10 Science Notes - StudyZen',
  description: 'Free and comprehensive Class 10 Science notes for CBSE board. Chapter-wise notes covering all important topics with diagrams and explanations.',
  keywords: 'class 10 science notes, CBSE science notes, free science notes, class 10 science study material',
};

export default function Class10ScienceNotes() {
  // Chapter data for Class 10 Science
  const chapters = [
    { number: 1, title: 'Chemical Reactions and Equations' },
    { number: 2, title: 'Acids, Bases and Salts' },
    { number: 3, title: 'Metals and Non-metals' },
    { number: 4, title: 'Carbon and its Compounds' },
    { number: 5, title: 'Periodic Classification of Elements' },
    { number: 6, title: 'Life Processes' },
    { number: 7, title: 'Control and Coordination' },
    { number: 8, title: 'How do Organisms Reproduce?' },
    { number: 9, title: 'Heredity and Evolution' },
    { number: 10, title: 'Light – Reflection and Refraction' },
    { number: 11, title: 'Human Eye and Colorful World' },
    { number: 12, title: 'Electricity' },
    { number: 13, title: 'Magnetic Effects of Electric Current' },
    { number: 14, title: 'Sources of Energy' },
    { number: 15, title: 'Our Environment' },
    { number: 16, title: 'Management of Natural Resources' },
  ];

  return (
    <div className="container-custom py-8">
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-secondary">Home</Link>
        <span>/</span>
        <Link href="/notes" className="hover:text-secondary">Notes</Link>
        <span>/</span>
        <Link href="/notes/class-10" className="hover:text-secondary">Class 10</Link>
        <span>/</span>
        <span className="text-secondary">Science</span>
      </div>

      <h1 className="text-3xl font-bold mb-6">Class 10 Science Notes</h1>
      
      {/* Introduction */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <p className="mb-4">
          Welcome to StudyZen's comprehensive collection of Class 10 Science notes. These notes are designed to help students understand the concepts clearly and prepare effectively for their CBSE board examinations.
        </p>
        <p>
          Our notes cover all chapters of the NCERT Science textbook for Class 10 and focus on important concepts, definitions, formulas, and diagrams that are essential for exams.
        </p>
      </div>

      {/* Download PDF Button */}
      <div className="flex justify-center mb-8">
        <a href="#" className="pdf-download">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Download All Notes (PDF)
        </a>
      </div>

      {/* Ad Section */}
      <div className="ad-container h-24 mb-8">
        <p className="text-gray-500">Advertisement</p>
      </div>

      {/* Chapters List */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Chapter-wise Notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chapters.map((chapter) => (
            <div key={chapter.number} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <Link href={`/notes/class-10/science/chapter-${chapter.number}`} className="block">
                <h3 className="text-lg font-semibold mb-2">Chapter {chapter.number}: {chapter.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">Comprehensive Notes</p>
                  <span className="text-secondary text-sm">Read More →</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Features of Our Science Notes</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Concise explanations of complex scientific concepts</li>
          <li>Important diagrams and figures with proper labels</li>
          <li>All necessary chemical equations and reactions</li>
          <li>Key formulas and their applications</li>
          <li>Important points for quick revision</li>
          <li>Practical applications of scientific principles</li>
        </ul>
      </div>

      {/* Important Topics */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Important Topics for Class 10 Science</h2>
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Chemistry</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Chemical reactions and their types</li>
            <li>Acids, bases and salts - properties and uses</li>
            <li>Metals and non-metals - physical and chemical properties</li>
            <li>Carbon compounds - nomenclature and functional groups</li>
            <li>Modern periodic table and periodicity of elements</li>
          </ul>
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Biology</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Life processes - nutrition, respiration, transportation and excretion</li>
            <li>Control and coordination in animals and plants</li>
            <li>Reproduction in plants and animals</li>
            <li>Heredity and evolution - Mendel's laws and Darwin's theory</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Physics</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Light reflection and refraction - laws and ray diagrams</li>
            <li>Lenses - types and image formation</li>
            <li>Electricity - Ohm's law and electrical circuits</li>
            <li>Magnetic effects of electric current - electromagnets and motors</li>
            <li>Sources of energy - renewable and non-renewable resources</li>
          </ul>
        </div>
      </div>

      {/* Exam Tips */}
      <div className="bg-secondary bg-opacity-10 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-secondary">Exam Preparation Tips</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Focus on understanding concepts rather than rote memorization</li>
          <li>Practice numerical problems in Physics and Chemistry regularly</li>
          <li>Draw and label diagrams clearly in your answers</li>
          <li>Write chemical equations with proper balancing</li>
          <li>Revise formulas and key definitions frequently</li>
          <li>Solve previous years' question papers to understand exam patterns</li>
        </ol>
      </div>

      {/* Bottom Ad */}
      <div className="ad-container h-24">
        <p className="text-gray-500">Advertisement</p>
      </div>
    </div>
  );
} 