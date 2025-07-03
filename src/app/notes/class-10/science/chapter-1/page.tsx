import Link from 'next/link';

export const metadata = {
  title: 'Class 10 Science Chapter 1 Notes - Chemical Reactions and Equations - StudyZen',
  description: 'Free Class 10 Science Chapter 1 Notes on Chemical Reactions and Equations with detailed explanations, important questions, and diagrams.',
  keywords: 'class 10 science chapter 1 notes, chemical reactions and equations, CBSE class 10 science notes, chapter 1 science',
};

export default function ChemicalReactionsNotes() {
  return (
    <div className="container-custom py-8">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/notes" className="hover:text-primary">Notes</Link>
        <span>/</span>
        <Link href="/notes/class-10" className="hover:text-primary">Class 10</Link>
        <span>/</span>
        <Link href="/notes/class-10/science" className="hover:text-primary">Science</Link>
        <span>/</span>
        <span className="text-primary">Chapter 1: Chemical Reactions and Equations</span>
      </div>

      <h1 className="text-3xl font-bold mb-6">Class 10 Science Chapter 1: Chemical Reactions and Equations</h1>
      
      {/* Download PDF Button */}
      <div className="flex justify-center mb-8">
        <a href="#" className="pdf-download">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Download PDF Notes
        </a>
      </div>

      {/* Ad Section */}
      <div className="ad-container h-24 mb-8">
        {/* HilltopsAds placeholder */}
        <p className="text-gray-500">Advertisement</p>
      </div>

      {/* Notes Content */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <div className="content-area">
          <h2 className="text-2xl font-bold mb-4">Introduction to Chemical Reactions</h2>
          <p className="mb-4">
            A chemical reaction is a process in which one or more substances, called reactants, are converted to one or more different substances, called products. Substances are either chemical elements or compounds.
          </p>
          <p className="mb-4">
            A chemical reaction rearranges the constituent atoms of the reactants to create different substances as products.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Chemical Equations</h3>
          <p className="mb-4">
            A chemical equation is the symbolic representation of a chemical reaction in the form of symbols and formulae, wherein the reactant entities are given on the left-hand side and the product entities on the right-hand side.
          </p>
          <p className="mb-4">
            For example, when hydrogen gas (H₂) reacts with oxygen gas (O₂), they form water (H₂O).
          </p>
          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="text-center font-medium">2H₂ + O₂ → 2H₂O</p>
          </div>

          <h3 className="text-xl font-bold mt-6 mb-3">Types of Chemical Reactions</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li>
              <strong>Combination Reaction:</strong> Two or more substances combine to form a new single substance.
              <div className="bg-gray-50 p-3 rounded my-2">
                <p>Example: C + O₂ → CO₂</p>
              </div>
            </li>
            <li>
              <strong>Decomposition Reaction:</strong> A single substance decomposes to give two or more substances.
              <div className="bg-gray-50 p-3 rounded my-2">
                <p>Example: 2H₂O → 2H₂ + O₂</p>
              </div>
            </li>
            <li>
              <strong>Displacement Reaction:</strong> A more reactive element displaces a less reactive element from its compound.
              <div className="bg-gray-50 p-3 rounded my-2">
                <p>Example: Fe + CuSO₄ → FeSO₄ + Cu</p>
              </div>
            </li>
            <li>
              <strong>Double Displacement Reaction:</strong> When two compounds react and exchange their ions to form two new compounds.
              <div className="bg-gray-50 p-3 rounded my-2">
                <p>Example: NaOH + HCl → NaCl + H₂O</p>
              </div>
            </li>
            <li>
              <strong>Redox Reaction:</strong> Reactions that involve both reduction and oxidation processes.
              <div className="bg-gray-50 p-3 rounded my-2">
                <p>Example: ZnO + C → Zn + CO</p>
              </div>
            </li>
          </ol>

          <h3 className="text-xl font-bold mt-6 mb-3">Balancing Chemical Equations</h3>
          <p className="mb-4">
            According to the Law of Conservation of Mass, mass can neither be created nor destroyed in a chemical reaction. Therefore, the total mass of elements present in reactants must be equal to the total mass of elements present in products.
          </p>
          <p className="mb-4">
            Steps to balance a chemical equation:
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li>Write the correct formulae of reactants and products.</li>
            <li>Count the number of atoms of each element present in the unbalanced equation.</li>
            <li>Balance the equation by using appropriate coefficients.</li>
            <li>Check if the number of atoms of each element is balanced on both sides.</li>
          </ol>

          <h3 className="text-xl font-bold mt-6 mb-3">Effects of Oxidation Reactions in Everyday Life</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Corrosion:</strong> When a metal is attacked by substances around it such as moisture, acids, etc.</li>
            <li><strong>Rancidity:</strong> The oxidation of fats and oils in food that causes them to become rancid and develop an unpleasant taste and smell.</li>
          </ul>
        </div>
      </div>

      {/* Important Questions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Important Questions</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold mb-2">1. What is a balanced chemical equation? Why should chemical equations be balanced?</h3>
            <p className="text-gray-700">A balanced chemical equation has an equal number of atoms of each element on both the reactant and product sides. Chemical equations should be balanced to satisfy the law of conservation of mass, which states that matter can neither be created nor destroyed in a chemical reaction.</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold mb-2">2. Write the balanced chemical equations for the following reactions:</h3>
            <p className="text-gray-700">a) Calcium hydroxide + Carbon dioxide → Calcium carbonate + Water</p>
            <p className="text-gray-700">b) Zinc + Silver nitrate → Zinc nitrate + Silver</p>
            <p className="text-gray-700">c) Aluminum + Copper chloride → Aluminum chloride + Copper</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold mb-2">3. What is a redox reaction? Identify the substances that are oxidized and reduced in the following reactions:</h3>
            <p className="text-gray-700">a) ZnO + C → Zn + CO</p>
            <p className="text-gray-700">b) CuO + H₂ → Cu + H₂O</p>
          </div>
        </div>
      </div>

      {/* Bottom Ad */}
      <div className="ad-container h-24 mb-8">
        {/* HilltopsAds placeholder */}
        <p className="text-gray-500">Advertisement</p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <span className="text-gray-400">Previous Chapter</span>
        <Link href="/notes/class-10/science/chapter-2" className="text-primary hover:underline">
          Next Chapter: Acids, Bases and Salts →
        </Link>
      </div>
    </div>
  );
} 