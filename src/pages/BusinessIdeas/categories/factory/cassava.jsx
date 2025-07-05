// src/pages/BusinessIdeas/categories/factory/cassava.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function CassavaProcessing() {
  // Product yield from 1 tonne of cassava
  const productYields = [
    { product: 'Garri', yield: '250-300kg', price: '₦400-600/kg', market: 'Local, Export' },
    { product: 'Fufu', yield: '200-250kg', price: '₦500-700/kg', market: 'Local' },
    { product: 'Starch', yield: '150-200kg', price: '₦800-1,200/kg', market: 'Industrial' },
    { product: 'Flour', yield: '180-220kg', price: '₦600-900/kg', market: 'Local, Export' },
    { product: 'Ethanol', yield: '120-150L', price: '₦450-650/L', market: 'Industrial' }
  ];

  // Processing equipment
  const equipmentList = [
    { name: 'Cassava Grater', capacity: '2-5 tons/day', cost: '₦1.2M-₦2.5M' },
    { name: 'Hydraulic Press', capacity: '1-3 tons/batch', cost: '₦1.8M-₦3.5M' },
    { name: 'Flash Dryer', capacity: '500kg-1ton/hour', cost: '₦4.5M-₦8M' },
    { name: 'Starch Extractor', capacity: '3-8 tons/day', cost: '₦6M-₦12M' },
    { name: 'Packaging Machine', capacity: '100-200 packs/hour', cost: '₦2M-₦4M' }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-lime-50 p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Cassava Processing Plant
        </h1>
        <p className="text-xl text-gray-600">
          Industrial-scale processing of cassava into high-value products
        </p>
      </div>

      {/* Market Opportunity */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Market Potential</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            {
              icon: '🌍',
              title: 'Global Demand',
              value: '$5.2B cassava starch market (2023)'
            },
            {
              icon: '🇳🇬',
              title: 'Local Production',
              value: 'Nigeria produces 20% of world cassava'
            },
            {
              icon: '📈',
              title: 'Growth Potential',
              value: '8.5% CAGR for industrial applications'
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

      {/* Product Lines */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Product Lines</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-3 text-left">Product</th>
                <th className="px-4 py-3 text-left">Yield per Tonne</th>
                <th className="px-4 py-3 text-left">Price Range</th>
                <th className="px-4 py-3 text-left">Target Markets</th>
              </tr>
            </thead>
            <tbody>
              {productYields.map((product, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-green-50'}>
                  <td className="px-4 py-3 border-b font-medium">{product.product}</td>
                  <td className="px-4 py-3 border-b">{product.yield}</td>
                  <td className="px-4 py-3 border-b">{product.price}</td>
                  <td className="px-4 py-3 border-b">{product.market}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Processing Flow */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Processing Flow</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center mb-6">
            {[
              { step: 1, name: 'Peeling', icon: '🥔' },
              { step: 2, name: 'Washing', icon: '🚿' },
              { step: 3, name: 'Grinding', icon: '⚙️' },
              { step: 4, name: 'Fermenting', icon: '🦠' },
              { step: 5, name: 'Pressing', icon: '🔽' },
              { step: 6, name: 'Sifting', icon: '🔄' },
              { step: 7, name: 'Frying', icon: '🔥' },
              { step: 8, name: 'Packaging', icon: '📦' }
            ].map((step) => (
              <div key={step.step} className="bg-white p-3 rounded shadow-sm">
                <div className="text-2xl mb-1">{step.icon}</div>
                <div className="text-xs font-medium text-gray-500">Step {step.step}</div>
                <div className="font-medium">{step.name}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">Equipment Requirements</h3>
              <ul className="space-y-3">
                {equipmentList.map((item, index) => (
                  <li key={index} className="flex justify-between bg-white p-3 rounded">
                    <span>{item.name}</span>
                    <span className="font-medium">{item.cost}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Factory Requirements</h3>
              <ul className="space-y-2">
                {[
                  "Land: 1,500-3,000 sq ft",
                  "Water: 5,000-10,000L/day",
                  "Power: 50-100KVA generator",
                  "Storage: 50-100 tonne capacity",
                  "Workers: 15-25 staff"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-green-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Financial Highlights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Startup Costs",
              items: [
                "Equipment: ₦15-30M",
                "Facility Setup: ₦5-10M",
                "Working Capital: ₦3-5M"
              ]
            },
            {
              title: "Operating Costs",
              items: [
                "Cassava: ₦25-40K/tonne",
                "Labor: ₦1.5-2.5M/month",
                "Utilities: ₦500-800K/month"
              ]
            },
            {
              title: "Revenue Potential",
              items: [
                "Garri: ₦2-3M/month",
                "Starch: ₦4-6M/month",
                "ROI: 18-30 months"
              ]
            }
          ].map((card, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-bold mb-3">{card.title}</h3>
              <ul className="space-y-2">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-green-500">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Value Addition */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Value Addition Opportunities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h3 className="font-bold mb-3">Fortified Products</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { product: 'Vitamin A Garri', premium: '+40-60%' },
                { product: 'Protein-Fortified Fufu', premium: '+50-80%' },
                { product: 'Gluten-Free Flour', premium: '+70-100%' },
                { product: 'Organic Starch', premium: '+90-120%' }
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-green-300 pl-3">
                  <h4 className="font-medium">{item.product}</h4>
                  <div className="text-sm text-green-600">Price Premium: {item.premium}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h3 className="font-bold mb-3">Byproduct Utilization</h3>
            <ul className="space-y-2">
              {[
                "Peels → Animal Feed (₦5-8K/tonne)",
                "Wastewater → Biogas Production",
                "Pulp → Mushroom Cultivation",
                "Residues → Organic Fertilizer"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-green-500">♻️</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-green-50 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">Complete Cassava Processing Business Plan</h3>
        <p className="mb-4">
          Includes equipment supplier contacts, factory layout designs, and product certification guides
        </p>
        <Link 
          to="/checkout?idea=cassava&category=factory" 
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
        >
          Purchase Full Package
        </Link>
      </div>
    </div>
  );
}