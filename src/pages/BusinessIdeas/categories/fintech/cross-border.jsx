// src/pages/BusinessIdeas/categories/fintech/cross-border.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function CrossBorderPayments() {
  // Supported corridors
  const paymentCorridors = [
    {
      route: 'Nigeria → China',
      volume: '$3.2B annual',
      fee: '1.5-3%',
      time: '1-2 business days'
    },
    {
      route: 'Kenya → UK',
      volume: '$1.8B annual',
      fee: '2-4%',
      time: '1-3 business days'
    },
    {
      route: 'Ghana → India',
      volume: '$900M annual',
      fee: '2.5-5%',
      time: '2-4 business days'
    },
    {
      route: 'South Africa → UAE',
      volume: '$2.1B annual',
      fee: '1.8-3.5%',
      time: '1-2 business days'
    }
  ];

  // Technology features
  const techFeatures = [
    {
      feature: 'Blockchain Settlement',
      benefit: 'Reduces costs by 40-60%',
      icon: '⛓️'
    },
    {
      feature: 'Multi-Currency Wallets',
      benefit: 'Hold 10+ currencies',
      icon: '💱'
    },
    {
      feature: 'AI Compliance',
      benefit: 'Real-time fraud detection',
      icon: '🤖'
    },
    {
      feature: 'Mobile Integration',
      benefit: 'USSD & app access',
      icon: '📱'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Cross-Border Payments
        </h1>
        <p className="text-xl text-gray-600">
          Low-cost, fast international transfers for African businesses
        </p>
      </div>

      {/* Market Opportunity */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Market Potential</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            {
              icon: '🌍',
              title: 'Remittance Volume',
              value: '$95B to Africa annually'
            },
            {
              icon: '💸',
              title: 'Current Fees',
              value: '8-15% average cost'
            },
            {
              icon: '📈',
              title: 'Growth Rate',
              value: '10% YoY increase'
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

      {/* Payment Corridors */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Key Payment Corridors</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-3 text-left">Route</th>
                <th className="px-4 py-3 text-left">Annual Volume</th>
                <th className="px-4 py-3 text-left">Our Fee</th>
                <th className="px-4 py-3 text-left">Transfer Time</th>
              </tr>
            </thead>
            <tbody>
              {paymentCorridors.map((corridor, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                  <td className="px-4 py-3 border-b font-medium">{corridor.route}</td>
                  <td className="px-4 py-3 border-b">{corridor.volume}</td>
                  <td className="px-4 py-3 border-b text-blue-600 font-medium">{corridor.fee}</td>
                  <td className="px-4 py-3 border-b">{corridor.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Technology Advantages */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Technology Advantages</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-3">Core Features</h3>
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
            <h3 className="font-bold mb-3">Compliance Infrastructure</h3>
            <ul className="space-y-3">
              {[
                "Automated KYC verification",
                "Real-time sanctions screening",
                "Transaction monitoring system",
                "Multi-jurisdiction licensing",
                "Central Bank integrations"
              ].map((item, index) => (
                <li key={index} className="flex items-start bg-white p-3 rounded-lg">
                  <span className="mr-2 text-blue-500">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Revenue Model</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { model: "Transaction Fees", rate: "1-5% per transfer", potential: "₦50M-₦200M/month" },
            { model: "FX Spread", rate: "0.5-2% margin", potential: "₦20M-₦80M/month" },
            { model: "Subscription", rate: "₦10K-₦50K/month", potential: "₦5M-₦20M/month" },
            { model: "API Services", rate: "₦5-₦20 per call", potential: "₦10M-₦40M/month" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-bold mb-2">{item.model}</h3>
              <div className="flex justify-between text-sm mb-1">
                <span>Rate:</span>
                <span className="font-medium">{item.rate}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Potential:</span>
                <span className="font-medium text-blue-600">{item.potential}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Implementation Roadmap</h2>
        <div className="relative">
          <div className="border-l-2 border-blue-300 pl-8 space-y-10">
            {[
              {
                phase: "Phase 1 (Months 1-6)",
                milestones: [
                  "Core payment infrastructure",
                  "First corridor launch (Nigeria-UK)",
                  "Basic mobile app"
                ]
              },
              {
                phase: "Phase 2 (Months 7-12)",
                milestones: [
                  "5 additional corridors",
                  "Merchant integrations",
                  "Advanced compliance"
                ]
              },
              {
                phase: "Phase 3 (Months 13-18)",
                milestones: [
                  "10+ corridors",
                  "SME lending products",
                  "Regional expansion"
                ]
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-11 top-1 border-4 border-white"></div>
                <h3 className="font-bold text-lg">{phase.phase}</h3>
                <ul className="list-disc pl-5 mt-2">
                  {phase.milestones.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-blue-50 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">Complete Cross-Border Payments Package</h3>
        <p className="mb-4">
          Includes technical architecture, regulatory compliance roadmap, and banking partner contacts
        </p>
        <Link 
          to="/checkout?idea=cross-border&category=fintech" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
        >
          Get Business Plan Now
        </Link>
      </div>
    </div>
  );
}