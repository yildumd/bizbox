// src/pages/BusinessIdeas/categories/ecommerce/farmers-produce.jsx
import React from 'react';
import IdeaLayout from '../../../components/BusinessIdeaTemplate/IdeaLayout';
import { ideas } from '../../../data/ideas';

const FarmersProducePage = () => {
  const idea = ideas.find(item => item.id === 'farmers-produce');

  return (
    <IdeaLayout>
      {/* Hero Section */}
      <section className="relative bg-amber-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={idea.image || "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"}
            alt="Farmers Produce Aggregation"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {idea.title || "Farmers' Produce Aggregation"}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {idea.shortDescription || "Bridge between smallholder farmers and bulk buyers while reducing food waste"}
            </p>
            <div className="bg-amber-600 inline-flex px-6 py-3 rounded-lg font-medium">
              Nigeria Loses 45% of Farm Produce to Poor Distribution
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">
              Agricultural Revolution
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Profitable Food Distribution
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Earn 15-30% margins while helping farmers increase their income by 40% and reducing urban food prices.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-amber-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Volume Discounts</h3>
              </div>
              <p className="text-gray-600">
                Buy directly from farmers at 20-30% below market rates by aggregating demand.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-amber-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Reduced Waste</h3>
              </div>
              <p className="text-gray-600">
                Our cold chain solutions reduce spoilage from 45% to under 10%.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-amber-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Quality Control</h3>
              </div>
              <p className="text-gray-600">
                Standardized grading system ensures consistent quality for buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Produce */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Highest Demand Produce
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: "Tomatoes",
                season: "Year-round (Peak: Nov-Feb)",
                price: "₦25,000 - ₦45,000/50kg",
                image: "https://images.unsplash.com/photo-1594282418426-62d45d29e49f"
              },
              {
                name: "Onions",
                season: "Mar-Jul, Nov-Jan",
                price: "₦18,000 - ₦30,000/50kg",
                image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924"
              },
              {
                name: "Peppers",
                season: "Year-round",
                price: "₦35,000 - ₦60,000/50kg",
                image: "https://images.unsplash.com/photo-1603048719537-93a6a5f1b2a1"
              },
              {
                name: "Plantains",
                season: "Year-round (Peak: Jun-Oct)",
                price: "₦12,000 - ₦20,000/bunch",
                image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25"
              }
            ].map((produce, index) => (
              <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={produce.image}
                    alt={produce.name}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">{produce.name}</h3>
                  <p className="text-sm text-amber-600 mt-1">{produce.price}</p>
                  <p className="text-xs text-gray-500 mt-1">Season: {produce.season}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                How It Works
              </h2>
              <div className="mt-8 space-y-8">
                {[
                  {
                    title: "Farmer Aggregation",
                    description: "We organize smallholder farmers into clusters of 50-100 for bulk collection"
                  },
                  {
                    title: "Collection Centers",
                    description: "Strategic locations near farming communities for produce aggregation"
                  },
                  {
                    title: "Quality Sorting",
                    description: "Standardized grading at our processing centers"
                  },
                  {
                    title: "Direct Distribution",
                    description: "Bypass multiple middlemen to deliver to final buyers"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 bg-amber-100 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                      <span className="text-amber-600 font-bold">{index + 1}</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                      <p className="mt-1 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-amber-100">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Streams</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Produce Markup (15-25%)</span>
                      <span className="text-sm font-medium text-gray-700">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Processing Fees</span>
                      <span className="text-sm font-medium text-gray-700">20%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Export Premium</span>
                      <span className="text-sm font-medium text-gray-700">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Value-Added Products</span>
                      <span className="text-sm font-medium text-gray-700">5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900">
                  Success Story: <span className="text-amber-600">AgriConnect North</span>
                </h2>
                <p className="mt-4 text-gray-600">
                  "Started with 35 farmers in Kaduna, now working with 1,200+ smallholders across 3 states, moving 50+ tons weekly with ₦12M monthly revenue."
                </p>
                <div className="mt-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                        alt="Testimonial"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Ibrahim Mohammed</p>
                      <p className="text-base text-gray-500">Founder, AgriConnect North</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-amber-100 p-8 md:p-12">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Key Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Farmers Connected", value: "1,200+" },
                    { label: "Produce Volume", value: "50+ tons/week" },
                    { label: "Farmer Income Increase", value: "42%" },
                    { label: "Buyer Savings", value: "28%" }
                  ].map((metric, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm text-gray-500">{metric.label}</p>
                      <p className="text-xl font-bold text-amber-600">{metric.value}</p>
                    </div>
                  ))}
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
            Your 6-Month Implementation Plan
          </h2>
          <div className="space-y-8">
            {[
              {
                month: 'Phase 1 (1-2 Months)',
                title: 'Farmer Network Development',
                tasks: ['Identify 3-5 farming clusters', 'Establish collection points', 'Train farmers on standards']
              },
              {
                month: 'Phase 2 (3-4 Months)',
                title: 'Buyer Acquisition',
                tasks: ['Onboard 10+ bulk buyers', 'Setup cold storage', 'Implement logistics network']
              },
              {
                month: 'Phase 3 (5-6 Months)',
                title: 'Scale Operations',
                tasks: ['Expand to new regions', 'Add processing capabilities', 'Develop export channels']
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="absolute left-4 h-full w-0.5 bg-amber-200 top-8"></div>
                <div className="relative flex items-start group">
                  <div className="flex-shrink-0 bg-amber-600 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      <span className="text-amber-600">{phase.month}:</span> {phase.title}
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

export default FarmersProducePage;