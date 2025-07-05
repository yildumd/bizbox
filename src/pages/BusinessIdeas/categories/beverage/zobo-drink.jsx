// src/pages/BusinessIdeas/categories/beverage/zobo-drink.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ZoboDrink() {
  // Product variants and pricing
  const productVariants = [
    { 
      type: 'Traditional', 
      ingredients: ['Hibiscus', 'Ginger', 'Pineapple'], 
      packaging: 'PET Bottles', 
      price: '₦200-300/500ml',
      margin: '70-90%'
    },
    { 
      type: 'Premium', 
      ingredients: ['Hibiscus', 'Honey', 'Mint', 'Cinnamon'], 
      packaging: 'Glass Bottles', 
      price: '₦500-700/500ml',
      margin: '120-150%'
    },
    { 
      type: 'Functional', 
      ingredients: ['Hibiscus', 'Turmeric', 'Ginger', 'Cayenne'], 
      packaging: 'Tetra Pak', 
      price: '₦800-1,200/500ml',
      margin: '180-220%'
    }
  ];

  // Production process
  const productionSteps = [
    { step: 1, name: 'Sorting & Washing', duration: '2-4 hours', critical: 'Remove impurities' },
    { step: 2, name: 'Boiling Extraction', duration: '45-60 mins', critical: '80-90°C temperature' },
    { step: 3, name: 'Flavor Infusion', duration: '4-6 hours', critical: 'Optimal ingredient ratios' },
    { step: 4, name: 'Cooling & Straining', duration: '2-3 hours', critical: 'Microbial control' },
    { step: 5, name: 'Pasteurization', duration: '15-30 mins', critical: '72°C for 15 seconds' },
    { step: 6, name: 'Packaging', duration: 'Varies', critical: 'Aseptic conditions' }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Zobo Drink Production
        </h1>
        <p className="text-xl text-gray-600">
          Commercializing Nigeria's beloved hibiscus beverage with modern quality standards
        </p>
      </div>

      {/* Market Opportunity */}
      <section>
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Market Potential</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            {
              icon: '🌍',
              title: 'Global Demand',
              value: '$1.3B hibiscus market (growing at 6.8% CAGR)'
            },
            {
              icon: '🇳🇬',
              title: 'Local Appeal',
              value: '85% of Nigerians familiar with zobo'
            },
            {
              icon: '🏷️',
              title: 'Premium Potential',
              value: '3-5x price multiplier for packaged vs street zobo'
            }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200 text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <h3 className="font-bold">{stat.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Differentiation */}
      <section>
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Product Variants</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-red-100">
              <tr>
                <th className="px-4 py-3 text-left">Type</th>
                <th className="px-4 py-3 text-left">Key Ingredients</th>
                <th className="px-4 py-3 text-left">Packaging</th>
                <th className="px-4 py-3 text-left">Price Point</th>
                <th className="px-4 py-3 text-left">Margin</th>
              </tr>
            </thead>
            <tbody>
              {productVariants.map((variant, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-red-50'}>
                  <td className="px-4 py-3 border-b font-medium">{variant.type}</td>
                  <td className="px-4 py-3 border-b">
                    <div className="flex flex-wrap gap-1">
                      {variant.ingredients.map((ing, i) => (
                        <span key={i} className="bg-red-100 px-2 py-1 rounded text-xs">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">{variant.packaging}</td>
                  <td className="px-4 py-3 border-b">{variant.price}</td>
                  <td className="px-4 py-3 border-b font-bold text-red-600">{variant.margin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Production Process */}
      <section>
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Production Process</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold mb-3">Key Equipment</h3>
              <ul className="space-y-2">
                {[
                  "Industrial strainers (₦150K-₦300K)",
                  "Stainless steel boilers (₦800K-₦1.5M)",
                  "Pasteurizer (₦1.2M-₦2M)",
                  "Filling machine (₦1.5M-₦3M)",
                  "Cooling system (₦1M-₦2M)"
                ].map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.split('(')[0]}</span>
                    <span className="font-medium">{item.split('(')[1].replace(')', '')}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-bold mb-3">Step-by-Step Process</h3>
              <div className="space-y-4">
                {productionSteps.map((step) => (
                  <div key={step.step} className="flex bg-white p-4 rounded-lg">
                    <div className="w-10 h-10 bg-red-100 text-red-800 rounded-full flex items-center justify-center mr-4 font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold">{step.name}</h4>
                      <div className="flex text-sm text-gray-600 mt-1">
                        <span className="mr-4">⏱️ {step.duration}</span>
                        <span>⚠️ {step.critical}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shelf Life Solutions */}
      <section>
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Shelf Life Enhancement</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h3 className="font-bold mb-3">Preservation Methods</h3>
            <div className="space-y-3">
              {[
                "Natural: Refrigeration (5-7 days)",
                "Pasteurization: 2-3 weeks",
                "Chemical-free: HPP Technology (4-6 weeks)",
                "Aseptic Packaging: 6-12 months"
              ].map((method, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-4 h-4 rounded-full mr-3 ${index < 2 ? 'bg-red-500' : 'bg-green-500'}`}></div>
                  <span>{method}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h3 className="font-bold mb-3">Quality Control</h3>
            <ul className="space-y-2">
              {[
                "pH monitoring (3.5-4.2 ideal)",
                "Brix level testing (8-12%)",
                "Microbial testing (weekly)",
                "Sensory evaluation panel"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-red-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Distribution Channels */}
      <section>
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Distribution Strategy</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { channel: "Supermarkets", margin: "25-35%", volume: "Medium" },
            { channel: "Health Stores", margin: "40-50%", volume: "Low" },
            { channel: "Online", margin: "15-25%", volume: "Growing" },
            { channel: "Export", margin: "50-70%", volume: "High" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-bold mb-2">{item.channel}</h3>
              <div className="flex justify-between text-sm">
                <span>Margin:</span>
                <span className="font-medium">{item.margin}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Volume:</span>
                <span className="font-medium">{item.volume}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-red-50 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">Complete Zobo Business Package</h3>
        <p className="mb-4">
          Includes hibiscus sourcing network, NAFDAC compliance guide, and premium packaging solutions
        </p>
        <Link 
          to="/checkout?idea=zobo-drink&category=beverage" 
          className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
        >
          Get Business Plan Now
        </Link>
      </div>
    </div>
  );
}