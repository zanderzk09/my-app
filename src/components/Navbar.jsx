import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../providers/ThemeContext';

export const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`relative ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex justify-end items-center px-4 py-3 ${
          isDarkMode ? 'bg-slate-950' : 'bg-white'
        }`}
      >

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <a
            href="#home"
            className={`mx-2 px-4 py-2 font-light text-sm rounded ${
              isDarkMode ? 'bg-slate-950 text-white hover:bg-slate-900' : 'bg-white text-neutral-800 hover:bg-gray-100'
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`mx-2 px-4 py-2 font-light text-sm ${
              isDarkMode ? 'bg-slate-950 text-white hover:bg-slate-900' : 'bg-white text-neutral-800 hover:bg-gray-100'
            }`}
          >
            About Me
          </a>
          <a
            href="#contact"
            className={`mx-2 px-4 py-2 font-light text-sm rounded ${
              isDarkMode ? 'bg-slate-950 text-white hover:bg-slate-900' : 'bg-white text-neutral-800 hover:bg-gray-100'
            }`}
          >
            Contact
          </a>
          <button
            className={`mx-2 px-4 py-2 text-xl font-light ${
              isDarkMode ? 'bg-slate-950 text-white hover:bg-slate-900' : 'bg-white text-neutral-800 hover:bg-gray-100'
            }`}
            onClick={toggleTheme}
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
        </div>

        <button
          className={`block md:hidden text-2xl ${ isDarkMode ? 'text-white' : 'text-neutral-800'}`}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-1/2 z-40 flex flex-col justify-center items-center ${
            isDarkMode ? 'bg-slate-950 text-white' : 'bg-white text-neutral-800'
          }`}
        >
          <a
            href="#home"
            className={`my-2 px-6 py-3 font-light text-lg rounded ${ isDarkMode ? 'hover:bg-slate-900' : 'hover:bg-gray-100' }`}
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className={`my-2 px-6 py-3 font-light text-lg rounded ${ isDarkMode ? 'hover:bg-slate-900' : 'hover:bg-gray-100'}`}
            onClick={toggleMenu}
          >
            About Me
          </a>
          <a
            href="#contact"
            className={`my-2 px-6 py-3 font-light text-lg rounded ${ isDarkMode ? 'hover:bg-slate-900' : 'hover:bg-gray-100'}`}
            onClick={toggleMenu}
          >
            Contact
          </a>
          <button
            className={`my-2 px-6 py-3 text-xl font-light rounded ${ isDarkMode ? 'hover:bg-slate-900' : 'hover:bg-gray-100' }`}
            onClick={() => {
              toggleTheme();
              toggleMenu();
            }}
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
        </div>
      )}
    </div>
  );
};




