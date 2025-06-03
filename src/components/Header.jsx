import React, { useState } from 'react';
import { Menu, X, Home, User, Briefcase, FolderKanban, Mail } from 'lucide-react';

const Header = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: 'Home', href: '#home', icon: <Home size={20} /> },
    { title: 'About', href: '#about', icon: <User size={20} /> },
    { title: 'Skills', href: '#skills', icon: <Briefcase size={20} /> },
    { title: 'Projects', href: '#projects', icon: <FolderKanban size={20} /> },
    { title: 'Contact', href: '#contact', icon: <Mail size={20} /> },
  ];

  // Determine if the initial slightly scrolled background should apply
  // This logic is for the !scrolled (top nav) state
  // We only check window.scrollY if the component is mounted in a browser context
  const showTopNavBackground = typeof window !== 'undefined' && (isMenuOpen || window.scrollY > 20);

  return (
    <header
      className={`
        fixed z-50 transition-all duration-500 ease-in-out
        ${
          scrolled
            ? 'bottom-6 left-1/2 -translate-x-1/2 transform w-auto rounded-full shadow-xl bg-gray-300 dark:bg-gray-700/90 backdrop-blur-md px-4 py-2'
            : 'top-0 left-0 right-0 '
        }
      `}
    >
      {scrolled ? (
        // Scrolled: Small icon-based navigation
        <nav className="flex items-center justify-center gap-3 sm:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              title={link.title} // Good for accessibility on hover
              className="p-2 text-gray-300 hover:text-blue-400 rounded-full hover:bg-white/10 transition-colors duration-200 flex flex-col justify-center items-center"
            >
               {link.title}
            </a>
          ))}
        </nav>
      ) : (
        // Not Scrolled: Original navigation
        <div className={`container mx-auto px-6 py-4 transition-all duration-300 ${
            showTopNavBackground ? 'bg-gray-100 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button - Placed within a div to control its layout relative to centered nav */}
          <div className="md:hidden flex justify-end">
             {/* This div is a common pattern if your nav is centered and you want the button on the right.
                 If you had a logo on the left, the parent of logo, nav, and button would be flex justify-between. */}
            <button
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>


          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute left-0 right-0 top-full mt-2 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block py-3 px-6 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                  onClick={toggleMenu} // Close menu on click
                >
                  {link.title}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;