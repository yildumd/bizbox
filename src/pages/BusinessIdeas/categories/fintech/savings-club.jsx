// src/pages/BusinessIdeas/categories/fintech/savings-club.jsx
import React from 'react';
import IdeaLayout from '../../../components/BusinessIdeaTemplate/IdeaLayout';
import { ideas } from '../../../data/ideas';

const SavingsClubPage = () => {
  // Make sure this ID matches exactly what's in your ideas.js file
  const idea = ideas.find(item => item.id === 'savings-club');

  // Add defensive check in case idea isn't found
  if (!idea) {
    return (
      <IdeaLayout>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold">Business idea not found</h1>
        </div>
      </IdeaLayout>
    );
  }

  return (
    <IdeaLayout>
      {/* Hero Section - identical structure to working template */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={idea.image || '/default-savings.jpg'} // Fallback image
            alt={idea.title}
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {idea.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {idea.shortDescription}
            </p>
            <div className="bg-yellow-600 inline-flex px-6 py-3 rounded-lg font-medium">
              {idea.tagline || 'Digitizing Traditional Savings Groups'}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - same structure as working template */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">
              Why This Business?
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {idea.valueProposition || 'Modernizing Community Savings'}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {idea.whyThisBusiness}
            </p>
          </div>

          {/* Value Cards - identical to working template */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Revenue Streams",
                description: "Earn 2-5% transaction fees, interest spreads, and premium subscription income."
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Market Reach",
                description: "Over 40 million Nigerians participate in informal savings groups (esusu/ajo)."
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Trust Factor",
                description: "Digital escrow and blockchain verification solve the #1 problem - trust in collectors."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                    {item.icon}
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story - same structure */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Real Success: <span className="text-yellow-600">SafeCollect</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                "Grew from 200 users to 250,000 in 18 months, managing ₦3.2B in collective savings with 98% repayment rate."
              </p>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                    alt="Testimonial"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">Folake Adebayo</p>
                  <p className="text-base text-gray-500">CEO, SafeCollect</p>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">User Growth</h3>
                <div className="space-y-4">
                  {[
                    { label: "Individual Savers", percentage: 65 },
                    { label: "Small Businesses", percentage: 25 },
                    { label: "Cooperatives", percentage: 10 }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                        <span className="text-sm font-medium text-gray-700">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-yellow-600 h-2.5 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap - identical structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Your 6-Month Launch Plan
          </h2>
          <div className="space-y-8">
            {[
              {
                month: 'Month 1-2',
                title: 'Platform Development',
                tasks: ['Build core savings features', 'Implement escrow system', 'Obtain CBN approval']
              },
              {
                month: 'Month 3-4',
                title: 'Pilot Launch',
                tasks: ['Onboard first 50 groups', 'Test repayment systems', 'Gather user feedback']
              },
              {
                month: 'Month 5-6',
                title: 'Full Launch',
                tasks: ['Marketing campaign', 'Partner with cooperatives', 'Launch premium features']
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="absolute left-4 h-full w-0.5 bg-yellow-200 top-8"></div>
                <div className="relative flex items-start group">
                  <div className="flex-shrink-0 bg-yellow-600 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      <span className="text-yellow-600">{phase.month}:</span> {phase.title}
                    </h3>
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      {phase.tasks.map((task, i) => (
                        <li key={i} className="text-gray-600">{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </IdeaLayout>
  );
};

export default SavingsClubPage;