// src/pages/BusinessIdeas/categories/ecommerce/afrocentric-fashion.jsx
import React from 'react';
import IdeaLayout from '../../../components/BusinessIdeaTemplate/IdeaLayout';
import { ideas } from '../../../data/ideas';

const AfrocentricFashionPage = () => {
  const idea = ideas.find(item => item.id === 'afrocentric-fashion');

  return (
    <IdeaLayout>
      {/* Hero Section with Image */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={idea.image}
            alt="Afrocentric Fashion"
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
            <div className="bg-indigo-600 inline-flex px-6 py-3 rounded-lg font-medium">
              Market Growth: 12% Annual Increase
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Why This Business?
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tap into the Global African Fashion Boom
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {idea.whyThisBusiness}
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Premium Margins</h3>
              </div>
              <p className="text-gray-600">
                International buyers pay 3-5x more for authentic African designs compared to mass-market fashion.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Global Demand</h3>
              </div>
              <p className="text-gray-600">
                Strong markets in USA, Europe, and Caribbean with growing African diaspora communities.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Cultural Movement</h3>
              </div>
              <p className="text-gray-600">
                Part of the broader Afrobeats cultural explosion gaining worldwide popularity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Real Success: <span className="text-indigo-600">Adire Collective</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                "Started with just 5 local artisans, now supplying 200+ boutiques worldwide with ₦85M monthly revenue."
              </p>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                    alt="Testimonial"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">Amina Yusuf</p>
                  <p className="text-base text-gray-500">Founder, Adire Collective</p>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Breakdown</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Online Sales</span>
                      <span className="text-sm font-medium text-gray-700">42%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Boutique Wholesale</span>
                      <span className="text-sm font-medium text-gray-700">35%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Corporate Orders</span>
                      <span className="text-sm font-medium text-gray-700">23%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '23%' }}></div>
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
                title: 'Setup & Supplier Onboarding',
                tasks: ['Register business', 'Build initial artisan network', 'Develop product catalog']
              },
              {
                month: 'Month 3-4',
                title: 'Platform Development',
                tasks: ['Launch e-commerce site', 'Setup payment processing', 'Implement inventory system']
              },
              {
                month: 'Month 5-6',
                title: 'Marketing & Sales',
                tasks: ['Run influencer campaigns', 'Attend trade shows', 'Secure first international orders']
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="absolute left-4 h-full w-0.5 bg-indigo-200 top-8"></div>
                <div className="relative flex items-start group">
                  <div className="flex-shrink-0 bg-indigo-600 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      <span className="text-indigo-600">{phase.month}:</span> {phase.title}
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

export default AfrocentricFashionPage;