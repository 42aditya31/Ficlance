import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine, RiNotification3Line } from 'react-icons/ri';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Hamburger */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="text-2xl font-['Pacifico'] text-primary">
            Ficlance
          </Link>

          {/* Hamburger - Mobile Only */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-gray-700 md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex ml-10 space-x-4">
          <Link to="/dashboard" className="px-3 py-2 text-gray-700 hover:text-primary font-medium">
            Dashboard
          </Link>
          <Link to="/projects" className="px-3 py-2 text-gray-700 hover:text-primary font-medium">
            Projects
          </Link>
          <Link to="/learning" className="px-3 py-2 text-gray-700 hover:text-primary font-medium">
            Learning Path
          </Link>
          <Link to="/portfolio" className="px-3 py-2 text-gray-700 hover:text-primary font-medium">
            Portfolio
          </Link>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition whitespace-nowrap">
            Start Simulation
          </button>

          <div className="relative w-10 h-10 flex items-center justify-center">
            <RiNotification3Line className="text-gray-600 text-lg" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520young%2520tech%2520professional%2C%2520neutral%2520expression%2C%2520clean%2520background%2C%2520high%2520quality%2520portrait%2C%2520professional%2520lighting&width=200&height=200&seq=user1&orientation=squarish"
              alt="User profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <nav className="flex flex-col space-y-2 mt-2">
            <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-primary font-medium">
              Dashboard
            </Link>
            <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-primary font-medium">
              Projects
            </Link>
            <Link to="/learning" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-primary font-medium">
              Learning Path
            </Link>
            <Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-primary font-medium">
              Portfolio
            </Link>
            <button className="mt-4 bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-primary/90 transition">
              Start Simulation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
