import React from 'react';
import { useTheme } from '../ThemeContextSection/ThemeContext'
import { CiDark } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';

const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <nav className={`p-6 ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-white'} shadow-lg `}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          Where in the World?
        </h1>
        <button
          className="focus:outline-none flex items-center"
          onClick={toggleTheme}
        >
          {isDarkTheme ? <MdDarkMode size={24} /> : <CiDark size={24} /> }
          <span className="ml-2">{isDarkTheme ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
