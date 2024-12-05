import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../providers/ThemeContext'; 

export const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();  

  return (
    <div>
      <nav className={`fixed top-0 left-0 w-full shadow-md z-50 flex justify-end items-center px-4 py-3 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <a
          href="#home"
          className={`mx-2 px-4 py-2 font-light text-sm rounded ${isDarkMode ? 'bg-black text-white hover:bg-neutral-800' : 'bg-white text-neutral-800 hover:bg-gray-100'}`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`mx-2 px-4 py-2 font-light text-sm ${isDarkMode ? 'bg-black text-white hover:bg-neutral-800' : 'bg-white text-neutral-800 hover:bg-gray-100'}`}
        >
          About Me
        </a>
        <a
          href="#contact"
          className={`mx-2 px-4 py-2 font-light text-sm rounded ${isDarkMode ? 'bg-black text-white hover:bg-neutral-800' : 'bg-white text-neutral-800 hover:bg-gray-100'}`}
        >
          Contact
        </a>
        <button
          className={`mx-2 px-4 py-2 text-xl font-light ${isDarkMode ? 'bg-black text-white hover:bg-neutral-800' : 'bg-white text-neutral-800 hover:bg-gray-100'}`}
          onClick={toggleTheme}  
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </nav>
    </div>
  );
};



