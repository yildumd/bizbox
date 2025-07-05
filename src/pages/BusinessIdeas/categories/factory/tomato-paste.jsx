// src/pages/BusinessIdeas/categories/factory/tomato-paste.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function TomatoPasteProduction() {
  // Production capacity data
  const productionScales = [
    {
      scale: 'Small-Scale',
      capacity: '500kg tomatoes/day',
      output: '100-150kg paste/day',
      investment: '₦3M-₦5M',
      space: '800-1,200 sq ft'
    },
    {
      scale: 'Medium-Scale',
      capacity: '2-3 tons tomatoes/day',
      output: '400-600kg paste/day',
      investment: '₦8M-₦15M',
      space: '1,500-2,000 sq ft'
    },
    {
      scale: 'Industrial',
      capacity: '10+ tons tomatoes/day',
      output: '2,000+kg paste/day',
      investment: '₦25M-₦50M',
      space: '3,000-5,000 sq ft'
    }
  ];

  // Product variants
  const productVariants = [
    {
      type: 'Single Concentrate',
      brix: '28-30%',
      packaging: '70g sachets',
      price: '₦200-₦250/kg'
    },
    {
      type: 'Double Concentrate',
      brix: '36-38%',
      packaging: '200g cans',
      price: '₦350-₦450/kg'
    },
    {
      type: 'Triple Concentrate',
      brix: '42-45%',
      packaging: '1kg drums',
      price: '₦600-₦800/kg'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Tomato Paste Production
        </h1>
        <p className="text-xl text-gray-600">
          Establishing a profitable tomato processing business with long shelf-life products
        </p>
      </div>

      {/* Market Opportunity */}
      <section>
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Market Potential</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            {
              icon: '🍅',
              title: 'Local Demand',
              value: 'Nigeria imports ₦80B+ tomato paste annually'
            },
            {
              icon: '🏷️',
              title: 'Price Premium',
              value: 'Locally produced gets 20-30% higher price'
            },
            {
              icon: '📈',
              title: 'Growth Rate',
              value: '8% annual demand increase'
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

      {/* Production Scales */}
      <section>
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Production Scales</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-red-100">
              <tr>
                <th className="px-4 py-3 text-left">Scale</th>
                <th className="px-4 py-3 text-left">Tomato Input</th>
                <th className="px-4 py-3 text-left">Paste Output</th>
                <th className="px-4 py-3 text-left">Investment</th>
                <th className="px-4 py-3 text-left">Space Needed</th>
              </tr>
            </thead>
            <tbody>
              {productionScales.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-red-50'}>
                  <td className="px-4 py-3 border-b font-medium">{item.scale}</td>
                  <td className="px-4 py-3 border-b">{item.capacity}</td>
                  <td className="px-4 py-3 border-b">{item.output}</td>
                  <td className="px-4 py-3 border-b">{item.investment}</td>
                  <td className="px-4 py-3 border-b">{item.space}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Processing Technology */}
      <section>
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Processing Technology</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-5 gap-4 mb-6">
            {[
              { step: 1, name: 'Sorting', icon: '🔍' },
              { step: 2, name: 'Washing', icon: '🚿' },
              { step: 3, name: 'Crushing', icon: '⚙️' },
              { step: 4, name: 'Evaporation', icon: '🔥' },
              { step: 5, name: 'Packaging', icon: '📦' }
            ].map((step) => (
              <div key={step.step} className="bg-white p-3 rounded text-center">
                <div className="text-2xl mb-1">{step.icon}</div>
                <div className="text-xs font-medium text-gray-500">Step {step.step}</div>
                <div className="font-medium">{step.name}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">Key Equipment</h3>
              <ul className="space-y-2">
                {[
                  "Sorting conveyor: ₦1.5M-₦3M",
                  "Industrial pulper: ₦2.5M-₦4M",
                  "Vacuum evaporator: ₦5M-₦8M",
                  "Pasteurizer: ₦3M-₦5M",
                  "Filling machine: ₦2M-₦4M"
                ].map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.split(':')[0]}</span>
                    <span className="font-medium">{item.split(':')[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Quality Standards</h3>
              <ul className="space-y-2">
                {[
                  "Brix level 28-45%",
                  "pH 3.8-4.2",
                  "No artificial preservatives",
                  "Microbiological safety",
                  "Consistent viscosity"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-red-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Variants */}
      <section>
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Product Variants</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {productVariants.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-bold mb-2">{product.type}</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Brix Level:</span>
                  <span className="font-medium">{product.brix}</span>
                </div>
                <div className="flex justify-between">
                  <span>Packaging:</span>
                  <span className="font-medium">{product.packaging}</span>
                </div>
                <div className="flex justify-between">
                  <span>Market Price:</span>
                  <span className="font-medium text-red-600">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Financial Projections */}
      <section>
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Financial Projections (Medium-Scale)</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Monthly Costs",
              items: [
                "Tomatoes: ₦2M-₦3M",
                "Packaging: ₦500K-₦800K",
                "Labor: ₦600K-₦900K",
                "Utilities: ₦400K-₦600K"
              ]
            },
            {
              title: "Revenue Potential",
              items: [
                "Wholesale: ₦5M-₦7M",
                "Retail: ₦6M-₦9M",
                "Institutional: ₦3M-₦5M"
              ]
            },
            {
              title: "Profit Potential",
              items: [
                "Gross Margin: 45-55%",
                "Monthly Net: ₦1.8M-₦3M",
                "ROI Period: 14-24 months"
              ]
            }
          ].map((card, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-bold mb-3">{card.title}</h3>
              <ul className="space-y-2">
                {card.items.map((item, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{item.split(':')[0]}:</span>
                    <span className="font-medium">{item.split(':')[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-red-50 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">Complete Tomato Paste Business Package</h3>
        <p className="mb-4">
          Includes tomato sourcing network, NAFDAC compliance guide, and industrial equipment specifications
        </p>
        <Link 
          to="/checkout?idea=tomato-paste&category=factory" 
          className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
        >
          Get Business Plan Now
        </Link>
      </div>
    </div>
  );
}