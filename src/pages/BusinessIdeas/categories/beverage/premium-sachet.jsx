// src/pages/BusinessIdeas/categories/beverage/premium-sachet.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function PremiumSachet() {
  // Production capacity calculations
  const productionData = [
    { machine: 'Manual', output: '1,200-1,500', workers: 3, cost: '₦1.2M-₦1.8M' },
    { machine: 'Semi-Auto', output: '3,000-4,500', workers: 5, cost: '₦3.5M-₦5M' },
    { machine: 'Full Auto', output: '8,000-12,000', workers: 7, cost: '₦8M-₦15M' }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Premium Sachet Water Production
        </h1>
        <p className="text-xl text-gray-600">
          Hygienic packaged water with advanced purification for urban markets
        </p>
      </div>

      {/* Market Opportunity */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Market Potential</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: '💧',
              title: 'Daily Consumption',
              value: 'Over 60 million sachets daily in Lagos alone'
            },
            {
              icon: '📈',
              title: 'Premium Segment',
              value: '15-20% price premium for certified quality'
            },
            {
              icon: '🏙️',
              title: 'Urban Demand',
              value: '90% of urban Nigerians rely on sachet water'
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

      {/* Production Standards */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Quality Standards</h2>
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">Mandatory Requirements</h3>
              <ul className="space-y-2">
                {[
                  "NAFDAC Registration (₦150K-₦300K)",
                  "SON Certification (₦75K-₦120K)",
                  "Laboratory Water Tests (Monthly)",
                  "GMP Compliant Facility"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-blue-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Premium Differentiators</h3>
              <ul className="space-y-2">
                {[
                  "UV + Ozone Treatment",
                  "Mineral Enhancement",
                  "Tamper-Evident Seals",
                  "Branded Packaging",
                  "Mobile Tracking System"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-blue-500">★</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Analysis */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Production Options</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-3 text-left">Machine Type</th>
                <th className="px-4 py-3 text-left">Output (Sachets/Day)</th>
                <th className="px-4 py-3 text-left">Workers Needed</th>
                <th className="px-4 py-3 text-left">Cost Range</th>
              </tr>
            </thead>
            <tbody>
              {productionData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                  <td className="px-4 py-3 border-b font-medium">{row.machine}</td>
                  <td className="px-4 py-3 border-b">{row.output}</td>
                  <td className="px-4 py-3 border-b">{row.workers}</td>
                  <td className="px-4 py-3 border-b">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          * Based on 60cl sachets at 20-25 naira wholesale price
        </p>
      </section>

      {/* Profit Calculation */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Profit Simulation</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Monthly Costs</h3>
            <ul className="space-y-1 text-sm">
              {[
                "Raw Water: ₦30K-₦50K",
                "Packaging: ₦120K-₦200K",
                "Labor: ₦150K-₦250K",
                "Utilities: ₦80K-₦120K"
              ].map((item, i) => (
                <li key={i} className="flex justify-between">
                  <span>{item.split(':')[0]}:</span>
                  <span className="font-medium">{item.split(':')[1]}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Monthly Revenue</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Standard Production (70% capacity):</span>
                <span className="font-medium">₦1.8M-₦2.5M</span>
              </div>
              <div className="flex justify-between">
                <span>Premium Line (30% capacity):</span>
                <span className="font-medium">₦900K-₦1.4M</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg font-bold">
            <h3 className="mb-2">Estimated Net Profit</h3>
            <div className="text-xl">₦1.2M-₦2M/month</div>
            <div className="text-sm font-normal mt-2">
              After 6-8 months operational breakeven
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Strategy */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Distribution Channels</h2>
        <div className="flex flex-wrap gap-4">
          {[
            { name: "Schools", icon: "🏫" },
            { name: "Offices", icon: "🏢" },
            { name: "Events", icon: "🎪" },
            { name: "Supermarkets", icon: "🛒" },
            { name: "Hospitals", icon: "🏥" },
            { name: "Transport Hubs", icon: "🚌" }
          ].map((channel, index) => (
            <div key={index} className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <span className="mr-2">{channel.icon}</span>
              <span>{channel.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-blue-50 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">Complete Business Package Available</h3>
        <p className="mb-4">Includes equipment supplier contacts, NAFDAC compliance guide, and distributor network</p>
        <Link 
          to="/checkout?idea=premium-sachet&category=beverage" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
        >
          Get Full Business Plan
        </Link>
      </div>
    </div>
  );
}