// src/pages/BusinessIdeas/categories/factory/cement-blocks.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function CementBlocks() {
  // Block types and specifications
  const blockTypes = [
    { 
      type: '4" Hollow', 
      size: '400x200x100mm', 
      materials: '1.25kg cement, 8kg sand', 
      output: '120-150/day', 
      price: '₦180-220'
    },
    { 
      type: '6" Hollow', 
      size: '450x225x150mm', 
      materials: '1.75kg cement, 10kg sand', 
      output: '90-120/day', 
      price: '₦250-300'
    },
    { 
      type: '9" Hollow', 
      size: '450x225x225mm', 
      materials: '2.5kg cement, 14kg sand', 
      output: '70-100/day', 
      price: '₦350-420'
    },
    { 
      type: 'Interlock', 
      size: '400x200x150mm', 
      materials: '2kg cement, 12kg sand', 
      output: '80-110/day', 
      price: '₦400-500'
    }
  ];

  // Equipment options
  const equipmentOptions = [
    { 
      type: 'Manual Press', 
      capacity: '100-150 blocks/day', 
      cost: '₦120K-₦250K', 
      power: 'None'
    },
    { 
      type: 'Semi-Automatic', 
      capacity: '400-600 blocks/day', 
      cost: '₦1.8M-₦3.5M', 
      power: '3-5KVA'
    },
    { 
      type: 'Full Automatic', 
      capacity: '1,500-2,500 blocks/day', 
      cost: '₦6M-₦12M', 
      power: '15-25KVA'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Cement Block Manufacturing
        </h1>
        <p className="text-xl text-gray-600">
          Profitable construction material production for Nigeria's building boom
        </p>
      </div>

      {/* Market Opportunity */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Market Potential</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            {
              icon: '🏗️',
              title: 'Housing Deficit',
              value: '28 million units needed'
            },
            {
              icon: '📈',
              title: 'Annual Demand',
              value: 'Over 500 million blocks'
            },
            {
              icon: '💰',
              title: 'Profit Margin',
              value: '35-50% per block'
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

      {/* Product Specifications */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Block Types</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-3 text-left">Block Type</th>
                <th className="px-4 py-3 text-left">Dimensions</th>
                <th className="px-4 py-3 text-left">Materials per Unit</th>
                <th className="px-4 py-3 text-left">Daily Output</th>
                <th className="px-4 py-3 text-left">Market Price</th>
              </tr>
            </thead>
            <tbody>
              {blockTypes.map((block, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                  <td className="px-4 py-3 border-b font-medium">{block.type}</td>
                  <td className="px-4 py-3 border-b">{block.size}</td>
                  <td className="px-4 py-3 border-b">{block.materials}</td>
                  <td className="px-4 py-3 border-b">{block.output}</td>
                  <td className="px-4 py-3 border-b">{block.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Production Setup */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Production Setup</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-3">Site Requirements</h3>
            <ul className="space-y-2">
              {[
                "Land: 1,000-2,000 sq ft",
                "Water: 1,000-2,000L/day",
                "Curing Area: 500-1,000 sq ft",
                "Storage: Covered area for materials",
                "Power: Depends on equipment"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Labor Requirements</h3>
            <div className="space-y-3">
              {[
                { role: "Mixer Operator", count: "1-2", salary: "₦25K-₦40K" },
                { role: "Block Moulder", count: "2-4", salary: "₦20K-₦35K" },
                { role: "Curing Attendant", count: "1", salary: "₦18K-₦25K" },
                { role: "Sales/Delivery", count: "1-2", salary: "₦25K + commission" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between bg-white p-3 rounded">
                  <div>
                    <span className="font-medium">{item.role}</span>
                    <span className="text-sm text-gray-500 ml-2">({item.count})</span>
                  </div>
                  <span className="font-medium">{item.salary}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Options */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Equipment Options</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {equipmentOptions.map((equip, index) => (
            <div key={index} className={`border rounded-lg p-4 ${index === 1 ? 'border-blue-300 bg-blue-50' : 'border-gray-200'}`}>
              <h3 className="font-bold text-lg mb-2">{equip.type}</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Capacity:</span>
                  <span className="font-medium">{equip.capacity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cost:</span>
                  <span className="font-medium">{equip.cost}</span>
                </div>
                <div className="flex justify-between">
                  <span>Power:</span>
                  <span className="font-medium">{equip.power}</span>
                </div>
              </div>
              {index === 1 && (
                <div className="mt-3 text-sm text-blue-600 font-medium">
                  ★ Most recommended for startups
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Financial Projections */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Financial Projections</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">Monthly Costs (Semi-Auto)</h3>
              <ul className="space-y-2">
                {[
                  "Cement: 150-200 bags (₦300K-₦400K)",
                  "Sand: 10-15 trips (₦150K-₦225K)",
                  "Labor: ₦120K-₦180K",
                  "Utilities: ₦40K-₦60K",
                  "Miscellaneous: ₦50K-₦80K"
                ].map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.split('(')[0]}</span>
                    <span className="font-medium">{item.split('(')[1].replace(')', '')}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Revenue Potential</h3>
              <div className="space-y-3">
                {[
                  { product: '4" Blocks', output: '10,000-12,000', revenue: '₦1.8M-₦2.6M' },
                  { product: '6" Blocks', output: '6,000-8,000', revenue: '₦1.5M-₦2.4M' },
                  { product: 'Interlocks', output: '3,000-4,000', revenue: '₦1.2M-₦2M' }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-3 rounded">
                    <div className="flex justify-between font-medium">
                      <span>{item.product}</span>
                      <span>{item.output} units</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-sm text-gray-500">Revenue:</span>
                      <span className="font-bold text-blue-600">{item.revenue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-100 rounded-lg text-center">
            <div className="font-bold">Estimated Net Profit: ₦500K-₦1.2M/month</div>
            <div className="text-sm">After 8-14 months operational breakeven</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-blue-50 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">Complete Block Manufacturing Package</h3>
        <p className="mb-4">
          Includes equipment supplier contacts, cement dealer discounts, and construction company leads
        </p>
        <Link 
          to="/checkout?idea=cement-blocks&category=factory" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
        >
          Get Business Plan Now
        </Link>
      </div>
    </div>
  );
}