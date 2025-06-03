import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// interface HeaderProps removed

const Header = ({ scrolled }) => { // Changed from React.FC<HeaderProps> and removed type from scrolled
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg- gray-800 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg' : ''
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400   transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full mt-2 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="block py-3 px-6 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {link.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;