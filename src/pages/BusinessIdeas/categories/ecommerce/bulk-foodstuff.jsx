// src/pages/BusinessIdeas/categories/ecommerce/bulk-foodstuff.jsx
import React from 'react';
import IdeaLayout from '../../../components/BusinessIdeaTemplate/IdeaLayout';
import { ideas } from '../../../data/ideas';

const BulkFoodstuffPage = () => {
  const idea = ideas.find(item => item.id === 'bulk-foodstuff');

  return (
    <IdeaLayout>
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={idea.image || "https://images.unsplash.com/photo-1542838132-92c53300491e"}
            alt="Bulk Foodstuff Business"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {idea.title || "Bulk Foodstuff Marketplace"}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {idea.shortDescription || "Connecting farmers directly with bulk buyers, eliminating middlemen and reducing food costs"}
            </p>
            <div className="bg-green-600 inline-flex px-6 py-3 rounded-lg font-medium">
              Nigeria's Food Import Bill: $10 Billion Annually
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              Food Security Solution
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Profitable While Making Impact
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform helps farmers get 40% better prices while making food 25% cheaper for consumers.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Volume Margins</h3>
              </div>
              <p className="text-gray-600">
                Earn 15-25% margins on bulk transactions of ₦500,000+ orders.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Recurring Demand</h3>
              </div>
              <p className="text-gray-600">
                Food is non-discretionary - 85% of customers reorder monthly.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Supply Chain Control</h3>
              </div>
              <p className="text-gray-600">
                Direct from 200+ verified farms to eliminate spoilage and markups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Products */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Highest Demand Commodities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Local Rice",
                price: "₦28,000 - ₦32,000/bag",
                margin: "18-22%",
                image: "https://images.unsplash.com/photo-1592921870789-045959c8ff9b"
              },
              {
                name: "Beans",
                price: "₦35,000 - ₦45,000/bag",
                margin: "15-20%",
                image: "https://images.unsplash.com/photo-1564758866210-1e9d6a6e0e1b"
              },
              {
                name: "Garri",
                price: "₦18,000 - ₦25,000/bag",
                margin: "25-30%",
                image: "https://images.unsplash.com/photo-1626804471359-3c56f2f8f78e"
              },
              {
                name: "Palm Oil",
                price: "₦15,000 - ₦20,000/gallon",
                margin: "20-25%",
                image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <p className="text-sm text-green-600 mt-1">{product.price}</p>
                  <p className="text-xs text-gray-500 mt-1">Margin: {product.margin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Proven Model: <span className="text-green-600">FarmConnect NG</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                "Started with 5 farmers in Oyo state, now aggregating from 300+ farms with ₦9M monthly revenue and 32% margins."
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
                  <p className="text-base font-medium text-gray-900">Adebayo Okeowo</p>
                  <p className="text-base text-gray-500">Founder, FarmConnect NG</p>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Customer Segments</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Restaurants/Caterers</span>
                      <span className="text-sm font-medium text-gray-700">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Schools/Hospitals</span>
                      <span className="text-sm font-medium text-gray-700">25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Retail Resellers</span>
                      <span className="text-sm font-medium text-gray-700">20%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Export Market</span>
                      <span className="text-sm font-medium text-gray-700">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            6-Month Operational Plan
          </h2>
          <div className="space-y-8">
            {[
              {
                month: 'Month 1-2',
                title: 'Farmer Network Setup',
                tasks: ['Identify 50 quality farms', 'Establish collection centers', 'Create quality standards']
              },
              {
                month: 'Month 3-4',
                title: 'Platform & Logistics',
                tasks: ['Launch ordering platform', 'Setup storage facilities', 'Develop delivery routes']
              },
              {
                month: 'Month 5-6',
                title: 'Market Expansion',
                tasks: ['Onboard institutional buyers', 'Implement subscription model', 'Expand to 2 new states']
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

      {/* Seasonal Opportunity */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-100 rounded-2xl p-8 md:p-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-900">Seasonal Profit Windows</h2>
                <p className="mt-4 text-gray-700">
                  Foodstuff prices fluctuate 30-60% between planting and harvest seasons. Our platform helps you buy low and sell high with predictive analytics.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <div className="inline-flex rounded-md shadow">
                  <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                    View Price Trends
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </IdeaLayout>
  );
};

export default BulkFoodstuffPage;