// src/pages/BusinessIdeas/categories/factory/sachet-water.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function SachetWaterProduction() {
  // Production capacity data
  const productionData = [
    { 
      machineType: 'Manual', 
      output: '1,000-1,500 sachets/day', 
      workers: 3, 
      investment: '₦1.2M-₦2M',
      space: '500-800 sq ft'
    },
    { 
      machineType: 'Semi-Automatic', 
      output: '3,000-5,000 sachets/day', 
      workers: 5, 
      investment: '₦3.5M-₦6M',
      space: '800-1,200 sq ft'
    },
    { 
      machineType: 'Automatic', 
      output: '10,000-15,000 sachets/day', 
      workers: 7, 
      investment: '₦8M-₦15M',
      space: '1,500-2,000 sq ft'
    }
  ];

  // Key requirements
  const requirements = [
    { 
      category: 'Water Quality', 
      items: [
        'WHO standard compliance',
        'Microbiological testing',
        'pH level 6.5-8.5',
        'TDS < 500ppm'
      ] 
    },
    { 
      category: 'Facility', 
      items: [
        'Concrete floor',
        'Adequate ventilation',
        'Separate production zones',
        'Proper drainage'
      ] 
    },
    { 
      category: 'Certifications', 
      items: [
        'NAFDAC registration',
        'SON certification',
        'State water board license',
        'Environmental compliance'
      ] 
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Sachet Water Production
        </h1>
        <p className="text-xl text-gray-600">
          Establishing a profitable and hygienic packaged water business
        </p>
      </div>

      {/* Market Opportunity */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Market Potential</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            {
              icon: '💧',
              title: 'Daily Consumption',
              value: 'Over 60 million sachets daily in Nigeria'
            },
            {
              icon: '🏙️',
              title: 'Urban Demand',
              value: '90% of urban households use sachet water'
            },
            {
              icon: '📈',
              title: 'Growth Rate',
              value: '7% annual demand increase'
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

      {/* Production Options */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Production Options</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-3 text-left">Machine Type</th>
                <th className="px-4 py-3 text-left">Daily Output</th>
                <th className="px-4 py-3 text-left">Workers Needed</th>
                <th className="px-4 py-3 text-left">Investment</th>
                <th className="px-4 py-3 text-left">Space Required</th>
              </tr>
            </thead>
            <tbody>
              {productionData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                  <td className="px-4 py-3 border-b font-medium">{item.machineType}</td>
                  <td className="px-4 py-3 border-b">{item.output}</td>
                  <td className="px-4 py-3 border-b">{item.workers}</td>
                  <td className="px-4 py-3 border-b">{item.investment}</td>
                  <td className="px-4 py-3 border-b">{item.space}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Requirements */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Key Requirements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {requirements.map((req, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-bold mb-3">{req.category}</h3>
              <ul className="space-y-2">
                {req.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Production Process */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Production Process</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-5 gap-4 text-center mb-6">
            {[
              { step: 1, name: 'Water Treatment', icon: '🚰' },
              { step: 2, name: 'Bagging', icon: '🛍️' },
              { step: 3, name: 'Sealing', icon: '🔗' },
              { step: 4, name: 'Cooling', icon: '❄️' },
              { step: 5, name: 'Packaging', icon: '📦' }
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
              <h3 className="font-bold mb-3">Equipment Needed</h3>
              <ul className="space-y-2">
                {[
                  "Water treatment plant: ₦2M-₦4M",
                  "Sachet filling machine: ₦1.5M-₦3M",
                  "Sealing machine: ₦800K-₦1.5M",
                  "UV sterilizer: ₦1M-₦2M",
                  "Packaging table: ₦200K-₦400K"
                ].map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.split(':')[0]}</span>
                    <span className="font-medium">{item.split(':')[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Quality Control</h3>
              <ul className="space-y-2">
                {[
                  "Daily microbiological tests",
                  "Weekly chemical analysis",
                  "Monthly NAFDAC inspections",
                  "Batch numbering system",
                  "Tamper-evident packaging"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-blue-500">✓</span>
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
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Financial Projections (Semi-Auto)</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Monthly Costs",
              items: [
                "Materials: ₦400K-₦600K",
                "Labor: ₦250K-₦350K",
                "Utilities: ₦150K-₦200K",
                "Regulatory: ₦50K-₦100K"
              ]
            },
            {
              title: "Revenue",
              items: [
                "Wholesale (₦25/sachet): ₦2.5M-₦3.75M",
                "Retail (₦50/sachet): ₦5M-₦7.5M",
                "Bulk (₦20/sachet): ₦2M-₦3M"
              ]
            },
            {
              title: "Profit Potential",
              items: [
                "Gross Margin: 40-50%",
                "Monthly Net: ₦800K-₦1.5M",
                "ROI Period: 10-18 months"
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
      <div className="bg-blue-50 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">Complete Sachet Water Business Package</h3>
        <p className="mb-4">
          Includes NAFDAC compliance guide, equipment supplier contacts, and distributor network
        </p>
        <Link 
          to="/checkout?idea=sachet-water&category=factory" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
        >
          Get Business Plan Now
        </Link>
      </div>
    </div>
  );
}