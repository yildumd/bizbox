// src/pages/BusinessIdeas/categories/factory/palm-oil.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function PalmOilProcessing() {
  // Production yield data
  const productionData = [
    { 
      scale: 'Small-Scale', 
      capacity: '1-2 tons FFB/day', 
      investment: '₦5M-₦8M', 
      output: '200-400L crude oil/day',
      workers: '8-12'
    },
    { 
      scale: 'Medium-Scale', 
      capacity: '5-8 tons FFB/day', 
      investment: '₦15M-₦25M', 
      output: '1,000-1,600L crude oil/day',
      workers: '15-20'
    },
    { 
      scale: 'Industrial', 
      capacity: '20+ tons FFB/day', 
      investment: '₦50M-₦100M', 
      output: '4,000L+ crude oil/day',
      workers: '30-50'
    }
  ];

  // Byproduct utilization
  const byproducts = [
    { 
      name: 'Palm Kernel', 
      uses: ['Kernel oil production', 'Animal feed', 'Cosmetics'], 
      value: '₦120-₦200/kg'
    },
    { 
      name: 'Empty Fruit Bunches', 
      uses: ['Organic fertilizer', 'Biofuel', 'Mulching'], 
      value: '₦25-₦50/kg'
    },
    { 
      name: 'Palm Kernel Shell', 
      uses: ['Fuel for boilers', 'Activated carbon', 'Construction'], 
      value: '₦40-₦80/kg'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Palm Oil Processing Plant
        </h1>
        <p className="text-xl text-gray-600">
          Profitable extraction and refining of Africa's most valuable vegetable oil
        </p>
      </div>

      {/* Market Overview */}
      <section>
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Market Opportunity</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            {
              icon: '🌍',
              title: 'Global Market',
              value: '$60B industry (2023)'
            },
            {
              icon: '🇳🇬',
              title: 'Nigeria Position',
              value: '5th largest producer'
            },
            {
              icon: '📈',
              title: 'Demand Growth',
              value: '5.1% annual increase'
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

      {/* Production Scale Options */}
      <section>
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Production Scales</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-red-100">
              <tr>
                <th className="px-4 py-3 text-left">Scale</th>
                <th className="px-4 py-3 text-left">Capacity (FFB)</th>
                <th className="px-4 py-3 text-left">Investment</th>
                <th className="px-4 py-3 text-left">Oil Output</th>
                <th className="px-4 py-3 text-left">Workers</th>
              </tr>
            </thead>
            <tbody>
              {productionData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-red-50'}>
                  <td className="px-4 py-3 border-b font-medium">{item.scale}</td>
                  <td className="px-4 py-3 border-b">{item.capacity}</td>
                  <td className="px-4 py-3 border-b">{item.investment}</td>
                  <td className="px-4 py-3 border-b">{item.output}</td>
                  <td className="px-4 py-3 border-b">{item.workers}</td>
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
          <div className="grid md:grid-cols-5 gap-4 text-center mb-6">
            {[
              { step: 1, name: 'Sterilization', icon: '♨️' },
              { step: 2, name: 'Threshing', icon: '🔄' },
              { step: 3, name: 'Digestion', icon: '⚙️' },
              { step: 4, name: 'Pressing', icon: '🔽' },
              { step: 5, name: 'Clarification', icon: '🛢️' }
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
              <h3 className="font-bold mb-3">Key Equipment</h3>
              <ul className="space-y-2">
                {[
                  "Sterilizer: ₦2.5M-₦5M",
                  "Digester: ₦1.8M-₦3.5M",
                  "Pressing Machine: ₦4M-₦8M",
                  "Clarification Tank: ₦1.2M-₦2.5M",
                  "Boiler: ₦3M-₦6M"
                ].map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.split(':')[0]}</span>
                    <span className="font-medium">{item.split(':')[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Factory Requirements</h3>
              <ul className="space-y-2">
                {[
                  "Land: 2,000-5,000 sq ft",
                  "Water: 5,000-10,000L/day",
                  "Power: 50-100KVA generator",
                  "Storage: 50-100 tonne capacity",
                  "Waste Management System"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-red-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Byproduct Utilization */}
      <section>
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Byproduct Revenue Streams</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {byproducts.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-bold mb-2">{product.name}</h3>
              <div className="text-lg font-medium text-red-600 mb-3">{product.value}</div>
              <h4 className="text-sm font-bold mb-1">Uses:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {product.uses.map((use, i) => (
                  <li key={i} className="text-sm">{use}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Financial Projections */}
      <section>
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Financial Highlights (Medium-Scale)</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Monthly Costs",
              items: [
                "FFB Purchase: ₦3.5M-₦5M",
                "Labor: ₦800K-₦1.2M",
                "Utilities: ₦500K-₦750K",
                "Maintenance: ₦200K-₦400K"
              ]
            },
            {
              title: "Revenue Streams",
              items: [
                "Crude Palm Oil: ₦6M-₦9M",
                "Palm Kernel: ₦1.2M-₦2M",
                "Byproducts: ₦400K-₦800K"
              ]
            },
            {
              title: "Profit Potential",
              items: [
                "Gross Margin: 35-45%",
                "Monthly Net: ₦1.8M-₦3M",
                "ROI Period: 18-30 months"
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
        <h3 className="text-xl font-bold mb-2">Complete Palm Oil Business Package</h3>
        <p className="mb-4">
          Includes equipment supplier contacts, FFB sourcing network, and international buyer leads
        </p>
        <Link 
          to="/checkout?idea=palm-oil&category=factory" 
          className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
        >
          Get Business Plan Now
        </Link>
      </div>
    </div>
  );
}