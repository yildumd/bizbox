// src/components/BusinessIdeaTemplate/PurchaseButton.jsx
import React from 'react';
import { pricing, getPricingForIdea } from '../../data/pricing';
import { useNavigate, useParams } from 'react-router-dom';
import { ideas } from '../../data/ideas';

export default function PurchaseButton({ ideaId }) {
  const navigate = useNavigate();
  const { category } = useParams();
  
  // Find the idea to get its title for the checkout page
  const idea = ideas.find(item => item.id === ideaId);
  
  // Get the pricing package for this idea
  const ideaPricing = getPricingForIdea(ideaId);
  const packageDetails = ideaPricing.packages[0] || {
    name: 'Basic',
    price: 50000,
    currency: '₦',
    inclusions: [
      'Detailed business plan',
      'Market analysis report',
      'Supplier contacts list',
      '1-year support'
    ],
    delivery: "24h"
  };

  const handlePurchase = () => {
    navigate(`/checkout?idea=${ideaId}&category=${category}&title=${encodeURIComponent(idea?.title || '')}`);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h3 className="font-bold text-lg mb-4">Get Complete Business Package</h3>
      <p className="text-2xl font-bold text-indigo-600 mb-2">
        {packageDetails.currency}{packageDetails.price.toLocaleString()}
      </p>
      <p className="text-sm text-gray-500 mb-4">(One-time payment)</p>
      
      <ul className="space-y-2 mb-6">
        {packageDetails.inclusions.map((item, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <button 
        onClick={handlePurchase}
        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-medium transition-colors"
      >
        Purchase Now
      </button>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>7-day money back guarantee</p>
        <p className="mt-1">Includes 30 minutes free consultation</p>
      </div>
    </div>
  );
}