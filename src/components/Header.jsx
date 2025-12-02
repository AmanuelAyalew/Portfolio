
import React from "react";
import Data from "../utils/Data";
import { useState } from "react";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Projects", "Experience", "Contact"];

  return (
    <header className="fixed w-full z-50 bg-gray-950/90 backdrop-blur-md shadow-2xl p-4 md:px-12 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 text-xl font-bold text-indigo-400 hover:text-indigo-300 transition duration-300 group">
          {/* <Aperture className="w-6 h-6 group-hover:rotate-180 transition-transform duration-700"/> */}
          <span className="hidden sm:inline">Amanuel' Portfolio</span>
        </a>
        
        <nav className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} 
               className="text-gray-300 hover:text-indigo-400 text-sm font-medium transition-colors duration-300 p-2 relative group">
              {item}
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <a href="#contact" className="hidden sm:block px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
            Get In Touch
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-gray-300 hover:text-indigo-400 transition duration-300 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* {isOpen ? <X className="w-6 h-6 animate-spin-once" /> : <Menu className="w-6 h-6" />} */}
          </button>
        </div>
      </div>

      {/* Mobile Menu with slide animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <div className="bg-gray-800 rounded-2xl p-4 space-y-2 shadow-inner">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} 
               onClick={() => setIsOpen(false)} 
               className="block text-gray-300 hover:text-indigo-400 hover:bg-gray-700/50 px-4 py-3 rounded-xl transition duration-300">
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;