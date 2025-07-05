// src/components/BusinessIdeaTemplate/QuickFacts.jsx
import React from 'react';

const QuickFacts = ({ investmentRange, revenuePotential, timeToProfit, difficulty }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold mb-6">Quick Facts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-500">Investment Needed</h3>
          <p className="text-lg font-semibold">{investmentRange}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-500">Revenue Potential</h3>
          <p className="text-lg font-semibold">{revenuePotential}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-500">Time to Profit</h3>
          <p className="text-lg font-semibold">{timeToProfit}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-500">Difficulty Level</h3>
          <p className={`text-lg font-semibold ${
            difficulty === 'Beginner' ? 'text-green-600' :
            difficulty === 'Intermediate' ? 'text-yellow-600' :
            'text-red-600'
          }`}>
            {difficulty}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickFacts;