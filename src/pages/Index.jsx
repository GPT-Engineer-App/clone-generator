import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to AI Clones</h1>
      <p className="mb-4">Create and manage your AI clones with ease.</p>
      <div className="flex space-x-4">
        <Link to="/clones" className="btn btn-primary">View Clones</Link>
        <Link to="/create-clone" className="btn btn-secondary">Create New Clone</Link>
      </div>
    </div>
  );
};

export default Index;