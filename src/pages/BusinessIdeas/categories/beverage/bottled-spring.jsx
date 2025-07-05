// src/pages/BusinessIdeas/categories/beverage/bottled-spring.jsx
import React from 'react';
import IdeaLayout from '../../../components/BusinessIdeaTemplate/IdeaLayout';
import { ideas } from '../../../data/ideas';

const BottledSpringPage = () => {
  const idea = ideas.find(item => item.id === 'bottled-spring');

  return (
    <IdeaLayout>
      {/* Hero Section */}
      <section className="relative bg-blue-50 text-blue-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={idea.image || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"}
            alt="Premium Bottled Spring Water"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {idea.title || "Premium Spring Water Bottling"}
            </h1>
            <p className="text-xl text-blue-800 mb-8">
              {idea.shortDescription || "Pure spring water sourced and bottled for health-conscious consumers and businesses"}
            </p>
            <div className="bg-blue-100 inline-flex px-6 py-3 rounded-lg font-medium border border-blue-200">
              Nigeria's Bottled Water Market: ₦250 Billion Annually
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Health & Wellness
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Pure Water, Premium Profits
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              The premium water segment grows at 18% annually as consumers prioritize health and quality.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">High Margins</h3>
              </div>
              <p className="text-gray-600">
                35-50% profit margins on premium bottled water versus 15-20% for standard sachet water.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Recurring Demand</h3>
              </div>
              <p className="text-gray-600">
                Corporate accounts provide steady bulk orders (offices, hotels, events).
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Quality Certification</h3>
              </div>
              <p className="text-gray-600">
                NAFDAC, SON, and international water quality certifications command premium pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Line */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Product Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Still Spring Water",
                sizes: ["500ml", "750ml", "1L", "1.5L"],
                price: "₦150 - ₦400 per bottle",
                margin: "45-55%",
                image: "https://images.unsplash.com/photo-1561047029-3000c68339ca"
              },
              {
                name: "Mineral-Enhanced",
                sizes: ["500ml", "1L"],
                price: "₦250 - ₦600 per bottle",
                margin: "50-60%",
                image: "https://images.unsplash.com/photo-1550583724-b2692b85b150"
              },
              {
                name: "Corporate Bulk",
                sizes: ["10L", "20L"],
                price: "₦1,500 - ₦3,000 per container",
                margin: "35-45%",
                image: "https://images.unsplash.com/photo-1604176354204-9268737828e4"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <div className="mt-2">
                    <p className="text-blue-600 font-medium">{product.price}</p>
                    <p className="text-sm text-gray-500">Margin: {product.margin}</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900">Available Sizes:</h4>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {product.sizes.map((size, i) => (
                        <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Source & Quality */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Purity Guaranteed
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our 5-stage purification process ensures water meets WHO and NAFDAC standards:
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Natural spring source protection",
                  "Microfiltration (0.1 micron)",
                  "Reverse osmosis",
                  "UV sterilization",
                  "Mineral rebalancing"
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Quality Certifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "NAFDAC Registration", status: "Required" },
                    { name: "SON Certification", status: "Required" },
                    { name: "ISO 22000", status: "Premium" },
                    { name: "HACCP", status: "Premium" }
                  ].map((cert, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm font-medium text-gray-900">{cert.name}</p>
                      <p className={`text-xs mt-1 ${cert.status === 'Required' ? 'text-blue-600' : 'text-amber-600'}`}>
                        {cert.status}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-sm text-gray-600">
                  <p>Premium certifications allow 20-30% higher pricing and export opportunities.</p>
                </div>
              </div>
            </div>
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
                  Case Study: <span className="text-blue-600">AquaSpring Limited</span>
                </h2>
                <p className="mt-4 text-gray-600">
                  "Started with 20,000 bottles monthly production, now producing 200,000+ bottles monthly supplying major hotels and airlines across West Africa."
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
                      <p className="text-base font-medium text-gray-900">Amina Yusuf</p>
                      <p className="text-base text-gray-500">CEO, AquaSpring Limited</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-blue-100 p-8 md:p-12">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Business Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { metric: "Monthly Production", value: "200,000+" },
                    { metric: "Retail Price", value: "₦250-600" },
                    { metric: "Production Cost", value: "₦80-120" },
                    { metric: "Corporate Clients", value: "45+" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg shadow">
                      <p className="text-sm text-gray-500">{item.metric}</p>
                      <p className="text-lg font-bold text-blue-600">{item.value}</p>
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
            6-Month Launch Plan
          </h2>
          <div className="space-y-8">
            {[
              {
                month: 'Phase 1 (1-2 Months)',
                title: 'Setup & Certification',
                tasks: ['Secure water source', 'Obtain NAFDAC/SON', 'Setup production facility']
              },
              {
                month: 'Phase 2 (3-4 Months)',
                title: 'Production & Branding',
                tasks: ['Begin test production', 'Develop brand identity', 'Secure first distributors']
              },
              {
                month: 'Phase 3 (5-6 Months)',
                title: 'Market Expansion',
                tasks: ['Target corporate accounts', 'Expand product line', 'Implement quality upgrades']
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

      {/* Investment Breakdown */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Startup Investment</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Equipment Needs</h3>
                <div className="space-y-4">
                  {[
                    { item: "Bottling Machine", cost: "₦2.5M - ₦5M" },
                    { item: "Water Treatment", cost: "₦1.8M - ₦3.5M" },
                    { item: "Filling & Capping", cost: "₦1.2M - ₦2.5M" },
                    { item: "Labeling Machine", cost: "₦800K - ₦1.5M" }
                  ].map((equip, index) => (
                    <div key={index} className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-700">{equip.item}</span>
                      <span className="font-medium text-blue-600">{equip.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Operational Costs</h3>
                <div className="space-y-4">
                  {[
                    { item: "Monthly Production (10,000 bottles)", cost: "₦800K - ₦1.2M" },
                    { item: "NAFDAC/SON Certification", cost: "₦350K - ₦600K" },
                    { item: "Branding & Packaging", cost: "₦200K - ₦500K" },
                    { item: "Distribution", cost: "₦150K - ₦300K" }
                  ].map((cost, index) => (
                    <div key={index} className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-700">{cost.item}</span>
                      <span className="font-medium text-blue-600">{cost.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <span className="font-bold">Total Initial Investment:</span> ₦5M - ₦10M (≈$12,000 - $24,000)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </IdeaLayout>
  );
};

export default BottledSpringPage;