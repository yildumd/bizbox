// src/pages/BusinessIdeas/categories/beverage/tigernut-milk.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function TigernutMilk() {
  // Production yield data
  const productionYield = [
    { size: 'Small (500ml)', cost: '₦120-150', price: '₦300-350', margin: '110-140%' },
    { size: 'Family (1L)', cost: '₦200-240', price: '₦500-600', margin: '120-150%' },
    { size: 'Bulk (5L)', cost: '₦900-1,100', price: '₦2,200-2,500', margin: '130-140%' }
  ];

  // Health benefits
  const healthBenefits = [
    { benefit: 'Dairy-free alternative', icon: '🥛' },
    { benefit: 'High in fiber & vitamins', icon: '🌿' },
    { benefit: 'Natural prebiotic', icon: '🦠' },
    { benefit: 'Lactose intolerance friendly', icon: '👍' },
    { benefit: 'Low glycemic index', icon: '📉' },
    { benefit: 'Rich in magnesium', icon: '⚡' }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Tigernut Milk Production
        </h1>
        <p className="text-xl text-gray-600">
          Healthy, traditional beverage for modern health-conscious consumers
        </p>
      </div>

      {/* Product Overview */}
      <section>
        <h2 className="text-2xl font-semibold text-amber-700 mb-4">Product Highlights</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-3">Traditional Superfood</h3>
            <p className="mb-4">
              Tigernut (Aya) has been consumed in West Africa for centuries. 
              Our modern production methods preserve nutrients while extending shelf life.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {healthBenefits.slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-start bg-white p-3 rounded-lg">
                  <span className="text-2xl mr-2">{item.icon}</span>
                  <span className="text-sm">{item.benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h3 className="font-bold mb-3">Market Positioning</h3>
            <ul className="space-y-3">
              {[
                "Health stores: Premium pricing (₦600-800/L)",
                "Supermarkets: Mid-range (₦400-600/L)",
                "Online: Direct-to-consumer subscriptions",
                "Export: Diaspora markets (₦1,500-2,000/L)"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-amber-500">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section>
        <h2 className="text-2xl font-semibold text-amber-700 mb-4">Production Process</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {[
              { step: "1", name: "Soaking", icon: "💦", time: "24-48 hours" },
              { step: "2", name: "Blending", icon: "⚡", ratio: "1:3 nuts:water" },
              { step: "3", name: "Straining", icon: "🧴", method: "Muslin cloth" },
              { step: "4", name: "Pasteurizing", icon: "🔥", temp: "72°C/15sec" }
            ].map((step) => (
              <div key={step.step} className="bg-white p-3 rounded text-center">
                <div className="text-2xl mb-1">{step.icon}</div>
                <div className="font-bold">{step.name}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {step.time || step.ratio || step.method || step.temp}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">Key Equipment</h3>
              <ul className="space-y-2">
                {[
                  "Industrial blender (₦350K-₦600K)",
                  "Hydraulic press (₦800K-₦1.2M)",
                  "Pasteurizer (₦1.5M-₦2M)",
                  "Filling machine (₦1M-₦3M)",
                  "Cooling tunnel (₦2M-₦4M)"
                ].map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.split('(')[0]}</span>
                    <span className="font-medium">{item.split('(')[1].replace(')', '')}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Shelf Life Extension</h3>
              <div className="space-y-3">
                {[
                  "Basic: Refrigeration (3-5 days)",
                  "Pasteurized: 2-3 weeks chilled",
                  "UHT: 3-6 months unopened",
                  "Tetra Pak: 6-12 months"
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-white p-3 rounded-lg">
                    <span className="w-6 h-6 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mr-3">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Breakdown */}
      <section>
        <h2 className="text-2xl font-semibold text-amber-700 mb-4">Profit Margins</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-amber-100">
              <tr>
                <th className="px-4 py-3 text-left">Package Size</th>
                <th className="px-4 py-3 text-left">Production Cost</th>
                <th className="px-4 py-3 text-left">Retail Price</th>
                <th className="px-4 py-3 text-left">Gross Margin</th>
              </tr>
            </thead>
            <tbody>
              {productionYield.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-amber-50'}>
                  <td className="px-4 py-3 border-b font-medium">{row.size}</td>
                  <td className="px-4 py-3 border-b">{row.cost}</td>
                  <td className="px-4 py-3 border-b">{row.price}</td>
                  <td className="px-4 py-3 border-b font-bold text-amber-600">{row.margin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Value-Added Products */}
      <section>
        <h2 className="text-2xl font-semibold text-amber-700 mb-4">Product Line Extension</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              product: "Flavored Variants",
              options: ["Vanilla", "Cinnamon", "Cocoa", "Ginger"],
              investment: "₦200K-₦500K"
            },
            {
              product: "Tigernut Flour",
              uses: ["Baking", "Thickening", "Baby food"],
              investment: "₦800K-₦1.2M"
            },
            {
              product: "Ready-to-Drink",
              formats: ["250ml PET", "330ml Can", "1L Tetra"],
              investment: "₦2M-₦5M"
            }
          ].map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-bold mb-2">{product.product}</h3>
              <ul className="list-disc pl-5 mb-3">
                {(product.options || product.uses || product.formats).map((item, i) => (
                  <li key={i} className="text-sm">{item}</li>
                ))}
              </ul>
              <div className="text-sm font-medium">
                Additional Investment: <span className="text-amber-600">{product.investment}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-amber-50 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">Complete Business Package Available</h3>
        <p className="mb-4">
          Includes tigernut sourcing contacts, NAFDAC registration guide, and premium packaging suppliers
        </p>
        <Link 
          to="/checkout?idea=tigernut-milk&category=beverage" 
          className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 font-medium"
        >
          Get Full Business Plan
        </Link>
      </div>
    </div>
  );
}