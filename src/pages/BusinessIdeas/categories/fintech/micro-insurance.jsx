// src/pages/BusinessIdeas/categories/fintech/micro-insurance.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function MicroInsurance() {
  // Insurance products
  const insuranceProducts = [
    {
      name: 'Health Cover',
      premium: '₦200-₦500/month',
      coverage: '₦50,000-₦200,000',
      features: ['Hospital bills', 'Medication', 'Emergency care']
    },
    {
      name: 'Crop Insurance',
      premium: '₦150-₦400/season',
      coverage: '₦100,000-₦500,000',
      features: ['Drought', 'Floods', 'Pest attacks']
    },
    {
      name: 'Asset Protection',
      premium: '₦100-₦300/month',
      coverage: '₦30,000-₦150,000',
      features: ['Phone damage', 'Business tools', 'Home items']
    }
  ];

  // Technology features
  const techFeatures = [
    {
      feature: 'USSD Enrollment',
      benefit: 'No smartphone required',
      icon: '#️⃣'
    },
    {
      feature: 'AI Claims Processing',
      benefit: 'Instant payouts',
      icon: '🤖'
    },
    {
      feature: 'Mobile Wallet Integration',
      benefit: 'Seamless payments',
      icon: '📱'
    },
    {
      feature: 'Satellite Monitoring',
      benefit: 'Automated crop verification',
      icon: '🛰️'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Microinsurance Platform
        </h1>
        <p className="text-xl text-gray-600">
          Affordable, accessible insurance for Africa's underserved populations
        </p>
      </div>

      {/* Market Opportunity */}
      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Market Potential</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            {
              icon: '👥',
              title: 'Uninsured Population',
              value: '400M+ Africans without insurance'
            },
            {
              icon: '💸',
              title: 'Affordable Premiums',
              value: '₦100-₦500 monthly'
            },
            {
              icon: '📈',
              title: 'Growth Rate',
              value: '25% annual increase'
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

      {/* Insurance Products */}
      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Core Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {insuranceProducts.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-bold text-lg mb-2">{product.name}</h3>
              <div className="flex justify-between mb-3">
                <span>Premium:</span>
                <span className="font-medium text-purple-600">{product.premium}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span>Coverage:</span>
                <span className="font-medium">{product.coverage}</span>
              </div>
              <h4 className="font-medium mb-1">Covers:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feature, i) => (
                  <li key={i} className="text-sm">{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Technology Innovation</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-3">Key Features</h3>
            <div className="grid grid-cols-2 gap-4">
              {techFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h4 className="font-bold">{feature.feature}</h4>
                  <p className="text-sm text-gray-600">{feature.benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-3">Distribution Channels</h3>
            <ul className="space-y-3">
              {[
                "Mobile money agents",
                "Cooperative societies",
                "Microfinance banks",
                "Retail POS networks",
                "WhatsApp/Facebook chatbots"
              ].map((item, index) => (
                <li key={index} className="flex items-start bg-white p-3 rounded-lg">
                  <span className="mr-2 text-purple-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Revenue Model</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { stream: "Premium Commissions", rate: "15-25%", potential: "₦5M-₦20M/month" },
            { stream: "Claims Fee", rate: "2-5% of payout", potential: "₦1M-₦5M/month" },
            { stream: "Data Analytics", rate: "₦50K-₦200K/client", potential: "₦2M-₦8M/month" },
            { stream: "API Services", rate: "₦5-₦20/call", potential: "₦3M-₦10M/month" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-bold mb-2">{item.stream}</h3>
              <div className="flex justify-between text-sm">
                <span>Rate:</span>
                <span className="font-medium">{item.rate}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Potential:</span>
                <span className="font-medium text-purple-600">{item.potential}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Financial Projections */}
      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Financial Projections</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">Startup Costs</h3>
              <ul className="space-y-2">
                {[
                  "Technology: ₦8M-₦15M",
                  "Regulatory: ₦5M-₦10M",
                  "Operations: ₦3M-₦6M",
                  "Marketing: ₦2M-₦4M"
                ].map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.split(':')[0]}</span>
                    <span className="font-medium">{item.split(':')[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Year 3 Projections</h3>
              <ul className="space-y-2">
                {[
                  "Customers: 500,000+",
                  "Premium Income: ₦1.2B-₦2B",
                  "Claims Ratio: 55-65%",
                  "Net Profit: ₦200M-₦400M"
                ].map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.split(':')[0]}</span>
                    <span className="font-medium">{item.split(':')[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-purple-100 rounded-lg text-center">
            <div className="font-bold">Breakeven Period: 24-36 months</div>
            <div className="text-sm">After acquiring 100,000+ active policies</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-purple-50 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">Complete Microinsurance Platform Package</h3>
        <p className="mb-4">
          Includes actuarial models, regulatory compliance roadmap, and reinsurance partner contacts
        </p>
        <Link 
          to="/checkout?idea=micro-insurance&category=fintech" 
          className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
        >
          Get Business Plan Now
        </Link>
      </div>
    </div>
  );
}