import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-['Pacifico'] text-primary">
            Ficlance
          </Link>

          <nav className="hidden md:flex ml-10">
            <Link to="/dashboard" className="px-4 py-2 text-gray-700 hover:text-primary font-medium">
              Dashboard
            </Link>
            <Link to="/projects" className="px-4 py-2 text-gray-700 hover:text-primary font-medium">
              Projects
            </Link>
            <Link to="/learning" className="px-4 py-2 text-gray-700 hover:text-primary font-medium">
              Learning Path
            </Link>
            <Link to="/portfolio" className="px-4 py-2 text-gray-700 hover:text-primary font-medium">
              Portfolio
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition whitespace-nowrap">
            Start Simulation
          </button>

          <div className="relative w-10 h-10 flex items-center justify-center">
            <i className="ri-notification-3-line text-gray-600 ri-lg"></i>
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
    </header>
  );
};

export default Nav;
