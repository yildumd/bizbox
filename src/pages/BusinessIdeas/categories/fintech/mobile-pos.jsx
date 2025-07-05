// src/pages/BusinessIdeas/categories/fintech/mobile-pos.jsx
import React from 'react';
import IdeaLayout from '../../../components/BusinessIdeaTemplate/IdeaLayout';
import { ideas } from '../../../data/ideas';

const MobilePOSPage = () => {
  const idea = ideas.find(item => item.id === 'mobile-pos');

  return (
    <IdeaLayout>
      {/* Hero Section with Image */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={idea.image}
            alt="Mobile POS Business"
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
            <div className="bg-green-600 inline-flex px-6 py-3 rounded-lg font-medium">
              Market Growth: 18% Annual Increase
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              Why This Business?
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Revolutionizing Cashless Payments for Informal Markets
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {idea.whyThisBusiness}
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Transaction Fees</h3>
              </div>
              <p className="text-gray-600">
                Earn 0.5-1.5% on every transaction with potential for ₦50-₦200M monthly processing volume.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Market Potential</h3>
              </div>
              <p className="text-gray-600">
                Nigeria has 40M+ informal merchants with less than 15% POS penetration currently.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Regulatory Support</h3>
              </div>
              <p className="text-gray-600">
                CBN's cashless policy drives adoption with favorable licensing for fintech solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Real Success: <span className="text-green-600">PagaTranz</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                "Started with 200 agents in Lagos, now processing ₦12B monthly across 15 states with 8,000+ agents."
              </p>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                    alt="Testimonial"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">Emeka Okonkwo</p>
                  <p className="text-base text-gray-500">CEO, PagaTranz</p>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Streams</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Transaction Fees</span>
                      <span className="text-sm font-medium text-gray-700">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Agent Commissions</span>
                      <span className="text-sm font-medium text-gray-700">20%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Value Added Services</span>
                      <span className="text-sm font-medium text-gray-700">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Your 6-Month Launch Plan
          </h2>
          <div className="space-y-8">
            {[
              {
                month: 'Month 1-2',
                title: 'Regulatory & Tech Setup',
                tasks: ['Obtain CBN license', 'Develop core POS software', 'Partner with banks']
              },
              {
                month: 'Month 3-4',
                title: 'Agent Network',
                tasks: ['Recruit/train first 500 agents', 'Distribute POS devices', 'Setup support system']
              },
              {
                month: 'Month 5-6',
                title: 'Market Expansion',
                tasks: ['Launch in 3 states', 'Integrate bill payments', 'Run merchant promotions']
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="absolute left-4 h-full w-0.5 bg-green-200 top-8"></div>
                <div className="relative flex items-start group">
                  <div className="flex-shrink-0 bg-green-600 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      <span className="text-green-600">{phase.month}:</span> {phase.title}
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

export default MobilePOSPage;