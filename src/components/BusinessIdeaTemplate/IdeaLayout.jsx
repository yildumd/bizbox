// src/components/BusinessIdeaTemplate/IdeaLayout.jsx
import React from 'react';
import PurchaseButton from './PurchaseButton';
import QuickFacts from './QuickFacts';
import RequirementsCard from './RequirementsCard';
import { useParams } from 'react-router-dom';
import { ideas } from '../../data/ideas';

const IdeaLayout = () => {
  const { category, id } = useParams();
  
  // Safely find the idea with comprehensive fallback
  const idea = ideas.find(item => item.id === id && item.category === category) || {
    id: '',
    title: 'Business Idea',
    category: 'general',
    image: '/default-idea-image.jpg',
    shortDescription: 'Comprehensive business package',
    whyThisBusiness: 'This business has strong market potential',
    investmentRange: 'Not specified',
    revenuePotential: 'Not specified',
    timeToProfit: 'Not specified',
    difficulty: 'Intermediate',
    marketPotential: 'Market data not available',
    whatYouGet: [
      'Complete business plan',
      'Implementation guide',
      'Resource materials'
    ],
    requirements: [
      { title: 'Space', description: 'Adequate working space' },
      { title: 'Team', description: 'Basic staff requirements' }
    ],
    purchaseIncludes: [
      'Documentation',
      'Support materials'
    ]
  };

  // Safely get arrays with fallbacks
  const whatYouGetItems = idea.whatYouGet || [];
  const purchaseIncludesItems = idea.purchaseIncludes || [];
  const requirementsItems = idea.requirements || [];

  // Image error handler
  const handleImageError = (e) => {
    e.target.src = '/default-idea-image.jpg';
    e.target.alt = 'Default business image';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Category indicator */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-sm font-semibold rounded-full">
          {idea.category?.toUpperCase() || 'GENERAL'}
        </span>
      </div>
      
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden bg-gray-100">
          <img
            src={idea.image || '/default-idea-image.jpg'}
            alt={idea.title}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{idea.title}</h1>
        <p className="text-xl text-gray-600 mb-6">
          {idea.shortDescription || 'Comprehensive business package'}
        </p>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Why This Business?</h2>
          <p className="text-gray-700">
            {idea.whyThisBusiness || 'This business has strong market potential and growth opportunities.'}
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <QuickFacts 
        investmentRange={idea.investmentRange} 
        revenuePotential={idea.revenuePotential}
        timeToProfit={idea.timeToProfit}
        difficulty={idea.difficulty}
      />

      {/* Business Details */}
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-6">Business Overview</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">What You'll Get</h3>
            {whatYouGetItems.length > 0 ? (
              <ul className="list-disc pl-5 space-y-2">
                {whatYouGetItems.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No items listed</p>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Market Potential</h3>
            <p className="text-gray-700">
              {idea.marketPotential || 'Market data not currently available'}
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <RequirementsCard requirements={requirementsItems} />

      {/* Purchase Includes */}
      {purchaseIncludesItems.length > 0 && (
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">Purchase Includes</h2>
          <ul className="list-disc pl-5 space-y-2">
            {purchaseIncludesItems.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Purchase CTA */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
        <p className="mb-6 text-gray-600">
          Get your complete business package including all resources
        </p>
        <PurchaseButton ideaId={idea.id} />
      </div>
    </div>
  );
};

export default IdeaLayout;