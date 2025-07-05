// src/pages/BusinessIdeas/categories/ecommerce/used-electronics.jsx
import React from 'react';
import IdeaLayout from '../../../components/BusinessIdeaTemplate/IdeaLayout';
import { ideas } from '../../../data/ideas';

const UsedElectronicsPage = () => {
  const idea = ideas.find(item => item.id === 'used-electronics');

  return (
    <IdeaLayout>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={idea.image || "https://images.unsplash.com/photo-1518770660439-4636190af475"}
            alt="Refurbished Electronics Business"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {idea.title || "Premium Refurbished Electronics"}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {idea.shortDescription || "High-quality refurbished devices with warranty at 40-60% off retail prices"}
            </p>
            <div className="bg-blue-600 inline-flex px-6 py-3 rounded-lg font-medium">
              Global Refurbished Market: $100 Billion by 2025
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Tech Sustainability
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Profitable While Reducing E-Waste
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Africa imports 500,000+ tons of e-waste annually. We turn this challenge into opportunity by professionally refurbishing quality devices.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">High Margins</h3>
              </div>
              <p className="text-gray-600">
                Average 35-50% margins after refurbishment costs with popular devices.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Certified Quality</h3>
              </div>
              <p className="text-gray-600">
                All devices undergo 25-point inspection and come with 12-month warranty.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Device Trade-Ins</h3>
              </div>
              <p className="text-gray-600">
                Buy-back program ensures steady inventory supply from upgraders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Products */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Best-Selling Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Smartphones",
                margin: "40-60%",
                price: "₦45,000 - ₦250,000",
                description: "iPhones, Samsung Galaxy, and Tecno/Infinix models",
                image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd"
              },
              {
                category: "Laptops",
                margin: "35-50%",
                price: "₦80,000 - ₦400,000",
                description: "Dell, HP, and Lenovo business-class machines",
                image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45"
              },
              {
                category: "Tablets",
                margin: "45-65%",
                price: "₦35,000 - ₦180,000",
                description: "iPads and Android tablets for education/business",
                image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={product.image}
                    alt={product.category}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{product.category}</h3>
                  <p className="mt-2 text-blue-600 font-medium">{product.price}</p>
                  <p className="mt-1 text-sm text-gray-500">Margin: {product.margin}</p>
                  <p className="mt-3 text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refurbishment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Our 5-Step Refurbishment Process
          </h2>
          <div className="space-y-10">
            {[
              {
                step: "1",
                title: "Sourcing & Inspection",
                description: "Devices acquired from corporate upgrades, trade-ins, and verified suppliers",
                icon: (
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
              {
                step: "2",
                title: "Diagnostic Testing",
                description: "Comprehensive hardware/software evaluation using professional tools",
                icon: (
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )
              },
              {
                step: "3",
                title: "Component Replacement",
                description: "Batteries, screens, and other worn parts replaced with OEM-quality components",
                icon: (
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              },
              {
                step: "4",
                title: "Cosmetic Refinishing",
                description: "Professional cleaning, polishing, and minor casing repairs",
                icon: (
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                step: "5",
                title: "Quality Certification",
                description: "Final testing and certification with warranty activation",
                icon: (
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              }
            ].map((process, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                  {process.icon}
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    <span className="text-blue-600">Step {process.step}:</span> {process.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900">
                  Case Study: <span className="text-blue-600">TechRevive NG</span>
                </h2>
                <p className="mt-4 text-gray-600">
                  "Started with ₦800,000 capital refurbishing phones in a small workshop, now processing 300+ devices monthly with ₦7.5M revenue and showroom in Lagos."
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
                      <p className="text-base font-medium text-gray-900">Emeka Okonkwo</p>
                      <p className="text-base text-gray-500">Founder, TechRevive NG</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-blue-100 p-8 md:p-12">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Business Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Monthly Devices", value: "300+" },
                    { label: "Average Margin", value: "48%" },
                    { label: "Customer Repeat Rate", value: "65%" },
                    { label: "Warranty Claims", value: "<5%" }
                  ].map((metric, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm text-gray-500">{metric.label}</p>
                      <p className="text-xl font-bold text-blue-600">{metric.value}</p>
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
            Your 6-Month Launch Plan
          </h2>
          <div className="space-y-8">
            {[
              {
                month: 'Phase 1 (1-2 Months)',
                title: 'Setup & Sourcing',
                tasks: ['Establish supplier network', 'Setup basic refurbishment station', 'Obtain necessary tools']
              },
              {
                month: 'Phase 2 (3-4 Months)',
                title: 'Operations & Sales',
                tasks: ['Launch e-commerce platform', 'Develop testing procedures', 'Start trade-in program']
              },
              {
                month: 'Phase 3 (5-6 Months)',
                title: 'Scale & Diversify',
                tasks: ['Add laptop/tablet refurbishing', 'Expand to corporate clients', 'Implement warranty system']
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="absolute left-4 h-full w-0.5 bg-blue-200 top-8"></div>
                <div className="relative flex items-start group">
                  <div className="flex-shrink-0 bg-blue-600 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      <span className="text-blue-600">{phase.month}:</span> {phase.title}
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

export default UsedElectronicsPage;