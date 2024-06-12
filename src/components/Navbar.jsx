import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">AI Clones</Link>
        <div className="flex space-x-4">
          <Link to="/clones" className="text-gray-300 hover:text-white">Clones</Link>
          <Link to="/create-clone" className="text-gray-300 hover:text-white">Create Clone</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;