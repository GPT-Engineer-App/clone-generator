import React, { useState } from 'react';

const CloneSettings = () => {
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [webPagePassword, setWebPagePassword] = useState('');
  const [webPageLink, setWebPageLink] = useState('');
  const [firstMessage, setFirstMessage] = useState('');
  const [systemPrompt, setSystemPrompt] = useState('');
  const [knowledgeBase, setKnowledgeBase] = useState(null);
  const [language, setLanguage] = useState('');
  const [voiceEdit, setVoiceEdit] = useState(null);
  const [voiceConfig, setVoiceConfig] = useState(null);
  const [provider, setProvider] = useState('');
  const [model, setModel] = useState('');
  const [temperature, setTemperature] = useState('');
  const [maxTokens, setMaxTokens] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Clone Settings</h1>
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
          <label className="block text-sm font-medium mb-2">WebPage Password / Public</label>
          <input
            type="text"
            value={webPagePassword}
            onChange={(e) => setWebPagePassword(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">WebPage Link</label>
          <input
            type="text"
            value={webPageLink}
            onChange={(e) => setWebPageLink(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">First Message</label>
          <textarea
            value={firstMessage}
            onChange={(e) => setFirstMessage(e.target.value)}
            className="textarea textarea-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">System Prompt</label>
          <textarea
            value={systemPrompt}
            onChange={(e) => setSystemPrompt(e.target.value)}
            className="textarea textarea-bordered w-full"
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
          <label className="block text-sm font-medium mb-2">Voice Edit</label>
          <input
            type="file"
            onChange={(e) => setVoiceEdit(e.target.files)}
            className="input input-bordered w-full"
            multiple
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Voice Config</label>
          <input
            type="file"
            onChange={(e) => setVoiceConfig(e.target.files)}
            className="input input-bordered w-full"
            multiple
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Provider</label>
          <input
            type="text"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Model</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Temperature</label>
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Max Tokens</label>
          <input
            type="number"
            value={maxTokens}
            onChange={(e) => setMaxTokens(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Settings</button>
      </form>
    </div>
  );
};

export default CloneSettings;