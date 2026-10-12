import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-50/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-slate-900 hover:text-indigo-600 transition-colors"
        >
          Shraddha Vinod Nargund<span className="text-indigo-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="hover:text-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <a 
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            /* Close "X" Icon */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-lg absolute w-full">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-600 hover:text-indigo-600"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex w-full items-center justify-center px-4 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
              >
                Let's Talk
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}