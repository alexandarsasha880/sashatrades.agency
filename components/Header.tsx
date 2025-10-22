import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-300 hover:text-sky-400 transition-colors duration-300 px-3 py-2 text-sm font-medium">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#events', label: 'Events' },
    { href: '#fund-plans', label: 'Fund Plans' },
    { href: '#contact', label: 'Contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="border-b border-gray-500/20 bg-dark-primary/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <a href="#" className="flex-shrink-0 flex items-center gap-2">
                <img 
                  src="/logo.PNG" 
                  alt="SofiaTrades Logo" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold text-white ml-2">SofiaTrades</span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <a
                href="#fund-plans"
                className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-2 rounded-md transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transform hover:-translate-y-0.5"
              >
                Invest Now
              </a>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-dark-secondary inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-tertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-primary focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                 <a key={link.href} href={link.href} onClick={closeMenu} className="text-gray-300 hover:bg-dark-tertiary hover:text-white block px-3 py-2 rounded-md text-base font-medium">{link.label}</a>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
               <div className="px-5">
                  <a
                    href="#fund-plans"
                    className="block w-full text-center bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 shadow-lg shadow-sky-500/20"
                  >
                    Invest Now
                  </a>
               </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;