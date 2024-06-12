import React, { useState } from 'react';

const CreateClone = () => {
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [knowledgeBase, setKnowledgeBase] = useState(null);
  const [voiceSamples, setVoiceSamples] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create New Clone</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Profile Picture</label>
          <input
            type="file"
            onChange={(e) => setProfilePic(e.target.files[0])}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Language</label>
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Knowledge Base Files</label>
          <input
            type="file"
            onChange={(e) => setKnowledgeBase(e.target.files)}
            className="input input-bordered w-full"
            multiple
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Voice Samples</label>
          <input
            type="file"
            onChange={(e) => setVoiceSamples(e.target.files)}
            className="input input-bordered w-full"
            multiple
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Clone</button>
      </form>
    </div>
  );
};

export default CreateClone;