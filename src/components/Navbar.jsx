import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/useTheme';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = ['Home', 'Products', 'About', 'Contact'];

  const getLink = (item) => {
    if (item === 'Home') return '/';
    return `/#${item.toLowerCase()}`;
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-theme-light-bg/80 dark:bg-theme-dark-bg/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link to="/" className="flex-shrink-0 cursor-pointer text-2xl font-bold tracking-tighter text-theme-light-heading dark:text-theme-dark-heading transition-colors">
            Gyan<span className="text-brand-orange">Setu</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link 
                key={item} 
                to={getLink(item)} 
                className="text-sm font-medium uppercase tracking-widest text-theme-light-body dark:text-theme-dark-body hover:text-brand-orange dark:hover:text-brand-orange transition-colors"
                onClick={(e) => {
                  if (item !== 'Home' && window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item}
              </Link>
            ))}
            
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all focus:outline-none"
            >
              <div className="relative w-6 h-6">
                <Sun size={24} className={`absolute transition-all duration-500 transform ${theme === 'light' ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-0'}`} />
                <Moon size={24} className={`absolute transition-all duration-500 transform ${theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-0'}`} />
              </div>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400">
               {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-theme-light-heading dark:text-theme-dark-heading">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-theme-light-bg dark:bg-theme-dark-bg shadow-xl border-t border-gray-100 dark:border-gray-800 p-6 flex flex-col space-y-4">
           {navLinks.map((item) => (
              <Link 
                key={item} 
                to={getLink(item)} 
                className="text-lg font-medium text-theme-light-heading dark:text-theme-dark-heading hover:text-brand-orange"
                onClick={(e) => {
                  setIsOpen(false);
                  if (item !== 'Home' && window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item}
              </Link>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
