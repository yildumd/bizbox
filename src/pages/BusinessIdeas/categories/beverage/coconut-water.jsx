// src/pages/BusinessIdeas/categories/beverage/coconut-water.jsx
import React from 'react';
import IdeaLayout from '../../../components/BusinessIdeaTemplate/IdeaLayout';
import { ideas } from '../../../data/ideas';

const CoconutWaterPage = () => {
  const idea = ideas.find(item => item.id === 'coconut-water');

  return (
    <IdeaLayout>
      {/* Hero Section */}
      <section className="relative bg-green-50 text-green-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={idea.image || "https://images.unsplash.com/photo-1603048817059-481b83539f1d"}
            alt="Packaged Coconut Water Business"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {idea.title || "Premium Packaged Coconut Water"}
            </h1>
            <p className="text-xl text-green-800 mb-8">
              {idea.shortDescription || "Natural hydration solution tapping into Nigeria's coconut belt and global health trends"}
            </p>
            <div className="bg-green-100 inline-flex px-6 py-3 rounded-lg font-medium border border-green-200">
              Global Coconut Water Market: $6.8 Billion by 2025
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              Health & Wellness
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Nature's Sports Drink
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              The coconut water market grows at 25% annually as consumers seek natural alternatives to sugary drinks.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Premium Margins</h3>
              </div>
              <p className="text-gray-600">
                50-70% profit margins compared to 15-25% for traditional soft drinks.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Dual Markets</h3>
              </div>
              <p className="text-gray-600">
                Sells to both local consumers and export markets (US, Europe, Middle East).
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Health Credentials</h3>
              </div>
              <p className="text-gray-600">
                Naturally rich in electrolytes with no added sugar - appeals to health-conscious consumers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Line */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Product Variations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Natural Coconut Water",
                variants: ["Pure", "Chilled", "With Pulp"],
                price: "₦300 - ₦600 per 330ml",
                margin: "55-65%",
                image: "https://images.unsplash.com/photo-1603048817059-481b83539f1d"
              },
              {
                name: "Flavored Variants",
                variants: ["Pineapple", "Mango", "Ginger"],
                price: "₦350 - ₦700 per 330ml",
                margin: "60-70%",
                image: "https://images.unsplash.com/photo-1550583724-b2692b85b150"
              },
              {
                name: "Premium Export Grade",
                variants: ["Organic", "Cold-Pressed", "Tetrapak"],
                price: "$1.5 - $3 per 330ml",
                margin: "70-80%",
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
                    <p className="text-green-600 font-medium">{product.price}</p>
                    <p className="text-sm text-gray-500">Margin: {product.margin}</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900">Variants:</h4>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {product.variants.map((variant, i) => (
                        <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {variant}
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

      {/* Production Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                From Coconut to Bottle
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our careful processing preserves nutrients and taste:
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Direct sourcing from coconut farms in Lagos, Ogun, and Delta states",
                  "Cold extraction within 4 hours of harvesting",
                  "Microfiltration (no heat pasteurization)",
                  "BPA-free packaging",
                  "No preservatives or additives"
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
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Shelf Life Comparison</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Fresh Coconut (Unopened)</span>
                      <span className="text-sm font-medium text-gray-700">2-3 weeks</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Traditional Packaging</span>
                      <span className="text-sm font-medium text-gray-700">1-2 months</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Our Aseptic Packaging</span>
                      <span className="text-sm font-medium text-gray-700">12 months</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-sm text-gray-600">
                  <p>Advanced packaging allows nationwide distribution and export without refrigeration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900">
                  Case Study: <span className="text-green-600">CocoPure NG</span>
                </h2>
                <p className="mt-4 text-gray-600">
                  "Started with 200 coconuts daily from local farms, now processing 5,000+ daily with exports to 3 countries and ₦15M monthly revenue."
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
                      <p className="text-base font-medium text-gray-900">Chinedu Okeke</p>
                      <p className="text-base text-gray-500">Founder, CocoPure NG</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-green-100 p-8 md:p-12">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Business Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { metric: "Daily Production", value: "5,000+" },
                    { metric: "Retail Price", value: "₦300-700" },
                    { metric: "Production Cost", value: "₦90-150" },
                    { metric: "Export Markets", value: "3 countries" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg shadow">
                      <p className="text-sm text-gray-500">{item.metric}</p>
                      <p className="text-lg font-bold text-green-600">{item.value}</p>
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
                title: 'Sourcing & Setup',
                tasks: ['Secure coconut suppliers', 'Obtain NAFDAC certification', 'Setup processing facility']
              },
              {
                month: 'Phase 2 (3-4 Months)',
                title: 'Production & Branding',
                tasks: ['Begin trial production', 'Develop packaging design', 'Secure first distributors']
              },
              {
                month: 'Phase 3 (5-6 Months)',
                title: 'Market Expansion',
                tasks: ['Target health stores/gyms', 'Develop export channels', 'Introduce flavored variants']
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

      {/* Investment Breakdown */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Startup Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Equipment Needs</h3>
                <div className="space-y-4">
                  {[
                    { item: "Coconut Processing Machine", cost: "₦1.5M - ₦3M" },
                    { item: "Extraction & Filtration", cost: "₦2M - ₦4M" },
                    { item: "Packaging Machine", cost: "₦2.5M - ₦5M" },
                    { item: "Cold Storage", cost: "₦800K - ₦1.5M" }
                  ].map((equip, index) => (
                    <div key={index} className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-700">{equip.item}</span>
                      <span className="font-medium text-green-600">{equip.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Operational Costs</h3>
                <div className="space-y-4">
                  {[
                    { item: "Monthly Production (10,000 units)", cost: "₦1M - ₦1.8M" },
                    { item: "Certifications (NAFDAC, SON)", cost: "₦400K - ₦700K" },
                    { item: "Branding & Packaging", cost: "₦300K - ₦600K" },
                    { item: "Distribution", cost: "₦200K - ₦400K" }
                  ].map((cost, index) => (
                    <div key={index} className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-700">{cost.item}</span>
                      <span className="font-medium text-green-600">{cost.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <p className="text-sm text-green-800">
                    <span className="font-bold">Total Initial Investment:</span> ₦7M - ₦15M (≈$17,000 - $36,000)
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

export default CoconutWaterPage;