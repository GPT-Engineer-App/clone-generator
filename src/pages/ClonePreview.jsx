import React from 'react';

const ClonePreview = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Clone Preview</h1>
      <div className="mb-4">
        {/* Clone interaction UI will go here */}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Shareable Link</label>
        <input
          type="text"
          value="https://example.com/clone-link"
          className="input input-bordered w-full"
          readOnly
        />
        <button className="btn btn-secondary mt-2">Copy Link</button>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Public / Private</label>
        <select className="select select-bordered w-full">
          <option>Public</option>
          <option>Private</option>
        </select>
      </div>
    </div>
  );
};

export default ClonePreview;