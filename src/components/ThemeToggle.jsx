import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext'; // Ensure this path is correct

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  if (!toggleTheme || typeof theme === 'undefined') {
    // This might happen if the component is rendered outside ThemeProvider
    // Or if the default context value was not destructured correctly.
    // For debugging, you could render null or a message.
    // console.warn("ThemeToggle: theme or toggleTheme is undefined. Check ThemeProvider.");
    return null; 
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={20} className="hover:text-blue-600 transition-colors" />
      ) : (
        <Sun size={20} className="hover:text-blue-400 transition-colors" />
      )}
    </button>
  );
};

export default ThemeToggle;