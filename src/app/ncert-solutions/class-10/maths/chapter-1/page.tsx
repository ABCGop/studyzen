import Link from 'next/link';

export const metadata = {
  title: 'NCERT Solutions for Class 10 Maths Chapter 1 - Real Numbers - StudyZen',
  description: 'Free NCERT Solutions for Class 10 Maths Chapter 1 - Real Numbers with step-by-step explanations for all exercises. Download PDF solutions.',
  keywords: 'NCERT solutions class 10 maths chapter 1, real numbers, class 10 maths solutions, CBSE class 10 maths chapter 1',
};

export default function Chapter1() {
  return (
    <div className="container-custom py-8">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/ncert-solutions" className="hover:text-primary">NCERT Solutions</Link>
        <span>/</span>
        <Link href="/ncert-solutions/class-10" className="hover:text-primary">Class 10</Link>
        <span>/</span>
        <Link href="/ncert-solutions/class-10/maths" className="hover:text-primary">Maths</Link>
        <span>/</span>
        <span className="text-primary">Chapter 1: Real Numbers</span>
      </div>

      <h1 className="text-3xl font-bold mb-6">NCERT Solutions for Class 10 Maths Chapter 1 - Real Numbers</h1>
      
      {/* Download PDF Button */}
      <div className="flex justify-center mb-8">
        <a href="#" className="pdf-download">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Download PDF
        </a>
      </div>

      {/* Introduction */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Introduction to Real Numbers</h2>
        <p className="mb-4">
          Chapter 1 of Class 10 Maths deals with Real Numbers. This chapter covers important concepts like Euclid's division lemma, the Fundamental Theorem of Arithmetic, irrational numbers, and operations on real numbers.
        </p>
        <p>
          These NCERT solutions will help you understand the concepts better and prepare for your exams effectively.
        </p>
      </div>

      {/* Ad Section */}
      <div className="ad-container h-24 mb-8">
        {/* HilltopsAds placeholder */}
        <p className="text-gray-500">Advertisement</p>
      </div>

      {/* Exercise Solutions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Exercise-wise Solutions</h2>
        
        {/* Exercise 1.1 */}
        <div className="bg-white border border-gray-200 rounded-lg mb-6">
          <div className="bg-primary text-white p-4">
            <h3 className="text-xl font-bold">Exercise 1.1</h3>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Question 1: Use Euclid's division algorithm to find the HCF of 135 and 225.</h4>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-medium mb-2">Solution:</p>
                <p className="mb-2">Step 1: Apply Euclid's division lemma to get</p>
                <p className="mb-2">225 = 135 × 1 + 90</p>
                <p className="mb-2">Step 2: Apply the division lemma to 135 and 90 to get</p>
                <p className="mb-2">135 = 90 × 1 + 45</p>
                <p className="mb-2">Step 3: Apply the division lemma to 90 and 45 to get</p>
                <p className="mb-2">90 = 45 × 2 + 0</p>
                <p className="mb-2">Since the remainder is zero, the divisor 45 is the HCF of 135 and 225.</p>
                <p>Therefore, HCF (135, 225) = 45</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Question 2: Show that any positive odd integer is of the form 4q + 1 or 4q + 3, where q is some integer.</h4>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-medium mb-2">Solution:</p>
                <p className="mb-2">Let's consider a positive odd integer 'a'.</p>
                <p className="mb-2">When we divide 'a' by 4, the possible remainders are 0, 1, 2, or 3.</p>
                <p className="mb-2">So, a = 4q + r, where r = 0, 1, 2, or 3 and q is the quotient.</p>
                <p className="mb-2">Since 'a' is odd, r cannot be 0 or 2 (as 4q, 4q + 2 are even).</p>
                <p className="mb-2">Therefore, r can only be 1 or 3.</p>
                <p>Hence, any positive odd integer is of the form 4q + 1 or 4q + 3, where q is some integer.</p>
              </div>
            </div>

            {/* More questions would be added here */}
          </div>
        </div>

        {/* Exercise 1.2 */}
        <div className="bg-white border border-gray-200 rounded-lg mb-6">
          <div className="bg-primary text-white p-4">
            <h3 className="text-xl font-bold">Exercise 1.2</h3>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Question 1: Express each number as a product of its prime factors: (i) 140 (ii) 156 (iii) 3825</h4>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-medium mb-2">Solution:</p>
                <p className="mb-2">(i) 140 = 2² × 5 × 7</p>
                <p className="mb-2">(ii) 156 = 2² × 3 × 13</p>
                <p>(iii) 3825 = 3² × 5² × 17</p>
              </div>
            </div>

            {/* More questions would be added here */}
          </div>
        </div>

        {/* More exercises would be added here */}
      </div>

      {/* Important Concepts */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Important Concepts</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Euclid's Division Lemma:</strong> For positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 ≤ r &lt; b.</li>
          <li><strong>Fundamental Theorem of Arithmetic:</strong> Every composite number can be expressed as a product of primes, and this factorization is unique apart from the order of factors.</li>
          <li><strong>HCF and LCM:</strong> For two positive integers a and b, HCF(a, b) × LCM(a, b) = a × b</li>
          <li><strong>Irrational Numbers:</strong> Numbers that cannot be expressed in the form p/q, where p and q are integers and q ≠ 0.</li>
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