// src/components/BusinessIdeaTemplate/RequirementsCard.jsx
import React from 'react';

const RequirementsCard = ({ requirements }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6">Requirements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {requirements.map((req, index) => (
          <div key={index} className="border-l-4 border-indigo-500 pl-4">
            <h3 className="text-lg font-semibold mb-1">{req.title}</h3>
            <p className="text-gray-600">{req.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequirementsCard;