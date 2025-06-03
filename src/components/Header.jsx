import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Mail } from 'lucide-react';

// Define NavLink structure (optional, for clarity if you were using TypeScript)
// interface NavLinkItem {
//   title: string;
//   href: string;
//   icon: JSX.Element;
// }

const Header = ({ scrolled }) => { // `scrolled` prop now signifies that the page has scrolled enough to switch to the bottom sticky navbar
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to automatically close the mobile menu if the header state changes to 'scrolled' (bottom bar active)
  useEffect(() => {
    if (scrolled) {
      setIsMenuOpen(false);
    }
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: 'Home', href: '#home', icon: <Home size={20} aria-hidden="true" /> },
    { title: 'About', href: '#about', icon: <User size={20} aria-hidden="true" /> },
    { title: 'Skills', href: '#skills', icon: <Code size={20} aria-hidden="true" /> },
    { title: 'Projects', href: '#projects', icon: <Briefcase size={20} aria-hidden="true" /> },
    { title: 'Contact', href: '#contact', icon: <Mail size={20} aria-hidden="true" /> },
  ];

  return (
    <header
      className={`
        fixed z-50 transition-all duration-500 ease-in-out
        ${scrolled
          ? 'bottom-4 left-1/2 transform -translate-x-1/2 w-auto rounded-full bg-gray-800 dark:bg-gray-900/90 backdrop-blur-md shadow-xl' // Styles for the bottom sticky navbar
          : 'top-0 left-0 right-0 w-full bg-transparent' // Styles for the top navbar when not scrolled (initial state)
        }
      `}
      aria-label="Main Navigation"
    >
      {scrolled ? (
        // CONTENT WHEN SCROLLED (Bottom sticky navbar)
        // This navbar is compact and uses icons.
        <nav className="flex items-center justify-center gap-x-1 sm:gap-x-2 px-3 py-2" aria-label="Sticky Page Navigation">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              title={link.title} // Tooltip for accessibility, shows full title
              className="text-gray-200 hover:text-blue-300 dark:text-gray-300 dark:hover:text-blue-400 p-2.5 sm:p-3 rounded-full hover:bg-white/10 dark:hover:bg-white/20 transition-colors duration-200"
              aria-label={link.title} // Aria-label for screen readers
            >
              {link.title} {/* Icon for visual representation */}
            </a>
          ))}
        </nav>
      ) : (
        // CONTENT WHEN NOT SCROLLED (Top navbar)
        // This is the original header layout.
        <div className="container mx-auto px-6 py-4">
          {/* Desktop Navigation (Original) */}
          <nav className="hidden md:flex items-center justify-center gap-8" aria-label="Desktop Page Navigation">
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

          {/* Mobile Menu Button (Original) */}
          <div className="md:hidden flex justify-end">
            <button
              className="text-gray-700 dark:text-gray-300 focus:outline-none p-1" // Added padding for better touch target
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu-dropdown"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />} {/* Slightly larger icons for clarity */}
            </button>
          </div>

          {/* Mobile Navigation Dropdown (Original, shown when menu is open and not in 'scrolled' state) */}
          {isMenuOpen && (
            <div
              id="mobile-menu-dropdown"
              className="md:hidden absolute left-0 right-0 top-full mt-2 py-2 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg border-t border-gray-200 dark:border-gray-700"
              // `top-full` positions it below the header. `mt-2` adds a small gap.
            >
              <nav aria-label="Mobile Page Navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="block py-3 px-6 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                    onClick={toggleMenu} // Close menu on item click
                  >
                    {link.title}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;