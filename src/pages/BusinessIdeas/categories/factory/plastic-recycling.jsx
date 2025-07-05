// src/pages/BusinessIdeas/categories/factory/plastic-recycling.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function PlasticRecycling() {
  // Plastic types and their values
  const plasticTypes = [
    { 
      code: 'PET (1)', 
      name: 'Polyethylene Terephthalate', 
      sources: 'Bottles, food containers', 
      price: '₦150-₦250/kg',
      products: 'Fiber, new bottles'
    },
    { 
      code: 'HDPE (2)', 
      name: 'High-Density Polyethylene', 
      sources: 'Milk jugs, shampoo bottles', 
      price: '₦180-₦300/kg',
      products: 'Pipes, toys'
    },
    { 
      code: 'PP (5)', 
      name: 'Polypropylene', 
      sources: 'Straws, food containers', 
      price: '₦200-₦350/kg',
      products: 'Auto parts, furniture'
    },
    { 
      code: 'LDPE (4)', 
      name: 'Low-Density Polyethylene', 
      sources: 'Plastic bags, wraps', 
      price: '₦120-₦200/kg',
      products: 'Packaging, trash bags'
    }
  ];

  // Recycling process steps
  const processSteps = [
    { step: 1, name: 'Collection', description: 'Sourcing waste plastic from households, businesses', icon: '🗑️' },
    { step: 2, name: 'Sorting', description: 'Separating by plastic type and color', icon: '🔍' },
    { step: 3, name: 'Cleaning', description: 'Washing to remove contaminants', icon: '🚿' },
    { step: 4, name: 'Shredding', description: 'Breaking down into small flakes', icon: '✂️' },
    { step: 5, name: 'Extrusion', description: 'Melting and reforming into pellets', icon: '🔥' }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Plastic Recycling Plant
        </h1>
        <p className="text-xl text-gray-600">
          Turning waste plastic into profitable materials while saving the environment
        </p>
      </div>

      {/* Market Opportunity */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Market Potential</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            {
              icon: '🌍',
              title: 'Global Market',
              value: '$41B industry (growing at 6.5% CAGR)'
            },
            {
              icon: '🇳🇬',
              title: 'Local Demand',
              value: 'Nigeria imports ₦120B+ plastic raw materials annually'
            },
            {
              icon: '🔄',
              title: 'Recycling Rate',
              value: '<10% of plastic waste currently recycled'
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

      {/* Plastic Types */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Plastic Types & Values</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-3 text-left">Resin Code</th>
                <th className="px-4 py-3 text-left">Plastic Type</th>
                <th className="px-4 py-3 text-left">Common Sources</th>
                <th className="px-4 py-3 text-left">Market Price</th>
                <th className="px-4 py-3 text-left">End Products</th>
              </tr>
            </thead>
            <tbody>
              {plasticTypes.map((plastic, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-green-50'}>
                  <td className="px-4 py-3 border-b font-medium">{plastic.code}</td>
                  <td className="px-4 py-3 border-b">{plastic.name}</td>
                  <td className="px-4 py-3 border-b">{plastic.sources}</td>
                  <td className="px-4 py-3 border-b">{plastic.price}</td>
                  <td className="px-4 py-3 border-b">{plastic.products}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recycling Process */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Recycling Process</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-5 gap-4 mb-6">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white p-3 rounded text-center">
                <div className="text-2xl mb-1">{step.icon}</div>
                <div className="font-bold">{step.name}</div>
                <div className="text-xs text-gray-500 mt-1">{step.description}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">Key Equipment</h3>
              <ul className="space-y-2">
                {[
                  "Sorting Conveyor: ₦2.5M-₦4M",
                  "Shredder: ₦3M-₦6M",
                  "Washing Line: ₦2M-₦3.5M",
                  "Extruder: ₦4.5M-₦8M",
                  "Pelletizer: ₦3M-₦5M"
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
                  "Space: 3,000-5,000 sq ft",
                  "Water: 5,000-10,000L/day",
                  "Power: 50-75KVA generator",
                  "Storage: Covered area for raw materials",
                  "Waste Water Treatment System"
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

      {/* Business Models */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Business Models</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              model: "Collection Centers",
              description: "Network of plastic waste collection points",
              investment: "₦2M-₦5M",
              revenue: "₦300K-₦800K/month"
            },
            {
              model: "Processing Plant",
              description: "Full recycling to plastic pellets",
              investment: "₦15M-₦30M",
              revenue: "₦3M-₦6M/month"
            },
            {
              model: "Product Manufacturing",
              description: "Making finished products from recycled plastic",
              investment: "₦8M-₦20M",
              revenue: "₦5M-₦10M/month"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-bold mb-2">{item.model}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              <div className="flex justify-between text-sm">
                <span>Investment:</span>
                <span className="font-medium">{item.investment}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Revenue:</span>
                <span className="font-medium">{item.revenue}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Financial Projections */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Financial Projections (Processing Plant)</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Monthly Costs",
              items: [
                "Raw Material: ₦1.2M-₦2M",
                "Labor: ₦800K-₦1.2M",
                "Utilities: ₦400K-₦600K",
                "Maintenance: ₦200K-₦300K"
              ]
            },
            {
              title: "Revenue Streams",
              items: [
                "PET Flakes: ₦3M-₦4.5M",
                "HDPE Pellets: ₦2M-₦3M",
                "PP Granules: ₦1.5M-₦2.5M"
              ]
            },
            {
              title: "Profit Potential",
              items: [
                "Gross Margin: 40-50%",
                "Monthly Net: ₦1.5M-₦2.8M",
                "ROI Period: 12-24 months"
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
      <div className="bg-green-50 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">Complete Recycling Business Package</h3>
        <p className="mb-4">
          Includes equipment supplier contacts, waste collection networks, and plastic product manufacturer leads
        </p>
        <Link 
          to="/checkout?idea=plastic-recycling&category=factory" 
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
        >
          Get Business Plan Now
        </Link>
      </div>
    </div>
  );
}