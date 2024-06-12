import React from 'react';
import { Link } from 'react-router-dom';

const Clones = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your AI Clones</h1>
      <div className="flex space-x-4">
        <Link to="/create-clone" className="btn btn-secondary">Create New Clone</Link>
      </div>
      <div className="mt-4">
        {/* List of clones will go here */}
      </div>
    </div>
  );
};

export default Clones;