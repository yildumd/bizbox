// src/pages/BusinessIdeas/categories/beverage/fruit-concentrate.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function FruitConcentrate() {
  // Common tropical fruits in Nigeria
  const tropicalFruits = [
    { name: 'Mango', yield: '5-7kg → 1L concentrate', shelfLife: '18 months' },
    { name: 'Pineapple', yield: '8-10kg → 1L concentrate', shelfLife: '24 months' },
    { name: 'Passion Fruit', yield: '12-15kg → 1L concentrate', shelfLife: '12 months' },
    { name: 'Guava', yield: '6-8kg → 1L concentrate', shelfLife: '15 months' },
    { name: 'Tamarind', yield: '3-4kg → 1L concentrate', shelfLife: '24 months' }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section with Production Image */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Fruit Concentrate Production
        </h1>
        <p className="text-xl text-gray-600">
          Industrial-scale processing of tropical fruits into export-quality concentrates
        </p>
      </div>

      {/* Business Overview */}
      <section>
        <h2 className="text-2xl font-semibold text-orange-700 mb-4">Business Opportunity</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose">
            <p>
              Nigeria wastes over 40% of its fruit harvest due to poor preservation. 
              Processing into concentrates:
            </p>
            <ul>
              <li>Extends shelf life from days to years</li>
              <li>Reduces transport costs by 80%</li>
              <li>Adds 300-500% value to raw produce</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h3 className="font-bold mb-3">Key Market Drivers</h3>
            <div className="space-y-3">
              {[
                "Global juice market: $154B (growing at 4.8% CAGR)",
                "Nigerian imports $200M+ in fruit concentrates annually",
                "EU organic premium: +30-50% price"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-2 text-orange-500">▸</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section>
        <h2 className="text-2xl font-semibold text-orange-700 mb-4">Production Process</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-5 gap-4 text-center">
            {[
              { step: "1", name: "Sorting", icon: "🍎" },
              { step: "2", name: "Washing", icon: "🚿" },
              { step: "3", name: "Pulping", icon: "⚙️" },
              { step: "4", name: "Evaporation", icon: "🔥" },
              { step: "5", name: "Packaging", icon: "📦" }
            ].map((process) => (
              <div key={process.step} className="bg-white p-3 rounded shadow-sm">
                <div className="text-2xl mb-1">{process.icon}</div>
                <div className="text-xs font-medium text-gray-500">Step {process.step}</div>
                <div className="font-medium">{process.name}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">Equipment Needed</h3>
              <ul className="space-y-2">
                {[
                  "Fruit sorting conveyor",
                  "Industrial pulper",
                  "Vacuum evaporator",
                  "Pasteurizer",
                  "Aseptic filling machine"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Fruit Yield Analysis</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-orange-100">
                      <th className="px-3 py-2 text-left">Fruit</th>
                      <th className="px-3 py-2 text-left">Yield</th>
                      <th className="px-3 py-2 text-left">Shelf Life</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tropicalFruits.map((fruit, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-orange-50'}>
                        <td className="px-3 py-2">{fruit.name}</td>
                        <td className="px-3 py-2">{fruit.yield}</td>
                        <td className="px-3 py-2">{fruit.shelfLife}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section>
        <h2 className="text-2xl font-semibold text-orange-700 mb-4">Financial Projections</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Startup Costs",
              items: [
                "Equipment: ₦12-18M",
                "Facility: ₦3-5M",
                "Licenses: ₦500K"
              ]
            },
            {
              title: "Operating Costs",
              items: [
                "Fruit procurement: ₦800/kg",
                "Utilities: ₦150K/month",
                "Labor: ₦1.2M/month"
              ]
            },
            {
              title: "Revenue Potential",
              items: [
                "Local sales: ₦5,000/L",
                "Export price: $8-12/L",
                "ROI: 18-24 months"
              ]
            }
          ].map((card, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-bold mb-3">{card.title}</h3>
              <ul className="space-y-2">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-orange-500">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-orange-50 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">Complete Business Package Available</h3>
        <p className="mb-4">Includes detailed equipment specifications, supplier contacts, and export documentation</p>
        <Link 
          to="/checkout?idea=fruit-concentrate&category=beverage" 
          className="inline-block px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-medium"
        >
          Get Full Business Plan
        </Link>
      </div>
    </div>
  );
}