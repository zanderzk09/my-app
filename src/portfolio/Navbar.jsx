import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../providers/ThemeContext'; 

export const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();  

  return (
    <div className={`relative ${ isDarkMode ? 'bg-slate-950' : 'bg-white' }`}>
      <nav className={`fixed top-0 left-0 w-full z-50 flex justify-end items-center px-4 py-3 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
        <a
          href="/"
          className={`mx-2 px-4 py-2 font-light text-sm rounded ${isDarkMode ? 'bg-slate-950 text-white hover:bg-slate-900' : 'bg-white text-neutral-800 hover:bg-gray-100'}`}
        >
          Back
        </a>
        <button
          className={`mx-2 px-4 py-2 text-xl font-light ${isDarkMode ? 'bg-slate-950 text-white hover:bg-slate-900' : 'bg-white text-neutral-800 hover:bg-gray-100'}`}
          onClick={toggleTheme}  
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </nav>
    </div>
  );
};