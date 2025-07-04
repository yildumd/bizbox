import React from 'react';

export default function IdeaCard({ idea }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 hover:shadow-md transition">
      <img
        src={idea.image}
        alt={idea.title}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800">{idea.title}</h3>
      <p className="text-sm text-gray-500 mb-2">{idea.category} • {idea.price}</p>
      <p className="text-sm text-gray-600 mb-2">{idea.description}</p>
      <ul className="text-xs text-gray-500 list-disc list-inside mb-2">
        {idea.features.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>
      <p className="text-xs text-indigo-600 italic">Consultant: {idea.consultant}</p>
    </div>
  );
}