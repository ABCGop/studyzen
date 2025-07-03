'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Header height values for the spacer
export const HEADER_HEIGHT_MOBILE = 70; // mobile height in pixels
export const HEADER_HEIGHT_DESKTOP = 80; // desktop height in pixels

// Spacer component to prevent content from being hidden under the fixed header
export const HeaderSpacer = () => {
  return (
    <div
      style={{
        height: `${HEADER_HEIGHT_MOBILE}px`,
      }}
      className="md:h-[80px]" // Desktop height using Tailwind
    />
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-primary'}`}>
            StudyZen
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavDropdown 
              title="NCERT Solutions" 
              links={[
                { href: '/ncert-solutions/class-10/maths', label: 'Class 10 Maths' },
                { href: '/ncert-solutions/class-10/science', label: 'Class 10 Science' },
                { href: '/ncert-solutions/class-12/maths', label: 'Class 12 Maths' },
                { href: '/ncert-solutions', label: 'View All' }
              ]} 
            />
            <NavLink href="/rd-sharma">RD Sharma</NavLink>
            <NavLink href="/sample-papers">Sample Papers</NavLink>
            <NavLink href="/notes">Notes</NavLink>
            <NavLink href="/syllabus">Syllabus</NavLink>
            
            <button className="ml-6 btn btn-primary py-2 px-4">
              Sign In
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none transition-colors ${scrolled ? 'text-gray-800' : 'text-primary'}`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container-custom py-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/ncert-solutions" onClick={toggleMenu}>NCERT Solutions</MobileNavLink>
              <MobileNavLink href="/rd-sharma" onClick={toggleMenu}>RD Sharma</MobileNavLink>
              <MobileNavLink href="/sample-papers" onClick={toggleMenu}>Sample Papers</MobileNavLink>
              <MobileNavLink href="/notes" onClick={toggleMenu}>Notes</MobileNavLink>
              <MobileNavLink href="/syllabus" onClick={toggleMenu}>Syllabus</MobileNavLink>
              <div className="pt-2 border-t border-gray-200">
                <button className="w-full btn btn-primary py-2">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link 
      href={href} 
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-primary hover:bg-gray-100 transition-colors"
    >
      {children}
    </Link>
  );
};

const NavDropdown = ({ title, links }: { title: string; links: {href: string; label: string}[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative" onMouseLeave={() => setIsOpen(false)}>
      <button 
        className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-primary hover:bg-gray-100 transition-colors flex items-center"
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 animate-fade-in">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-100 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header; 