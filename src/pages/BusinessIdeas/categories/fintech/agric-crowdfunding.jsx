// src/pages/BusinessIdeas/categories/fintech/agric-crowdfunding.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function AgricCrowdfunding() {
  // Business models
  const businessModels = [
    {
      model: "Debt Crowdfunding",
      description: "Farmers repay with interest after harvest",
      roi: "15-25% annual",
      risk: "Medium"
    },
    {
      model: "Equity Crowdfunding",
      description: "Investors get shares of farm profits",
      roi: "20-40% annual",
      risk: "High"
    },
    {
      model: "Reward Crowdfunding",
      description: "Backers receive farm products as rewards",
      roi: "Product value",
      risk: "Low"
    }
  ];

  // Success stories
  const successStories = [
    {
      project: "Cassava Farm Expansion",
      amount: "₦5M raised",
      backers: "142 investors",
      return: "28% ROI"
    },
    {
      project: "Poultry Farm Automation",
      amount: "₦3.2M raised",
      backers: "87 investors",
      return: "22% ROI"
    },
    {
      project: "Organic Vegetable Export",
      amount: "₦8.7M raised",
      backers: "203 investors",
      return: "35% ROI"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Agric Crowdfunding Platform
        </h1>
        <p className="text-xl text-gray-600">
          Connecting smallholder farmers with investors through fintech innovation
        </p>
      </div>

      {/* Market Opportunity */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Market Potential</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            {
              icon: '🌾',
              title: 'Funding Gap',
              value: '₦5 trillion annual smallholder financing gap'
            },
            {
              icon: '📱',
              title: 'Tech Adoption',
              value: '65% of farmers now use mobile money'
            },
            {
              icon: '📈',
              title: 'Investor Interest',
              value: '300% growth in agri-investments since 2020'
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

      {/* Platform Features */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Platform Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-3">For Farmers</h3>
            <ul className="space-y-3">
              {[
                "Simple loan application process",
                "Farm verification system",
                "Progress tracking tools",
                "Mobile repayment options",
                "Insurance integration"
              ].map((item, index) => (
                <li key={index} className="flex items-start bg-white p-3 rounded-lg">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">For Investors</h3>
            <ul className="space-y-3">
              {[
                "Diversified farm portfolios",
                "Risk assessment tools",
                "Real-time farm monitoring",
                "Automated payout system",
                "Secondary market for investments"
              ].map((item, index) => (
                <li key={index} className="flex items-start bg-white p-3 rounded-lg">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Business Models */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Business Models</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {businessModels.map((model, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-bold mb-2">{model.model}</h3>
              <p className="text-sm text-gray-600 mb-3">{model.description}</p>
              <div className="flex justify-between text-sm">
                <span>Projected ROI:</span>
                <span className="font-medium text-green-600">{model.roi}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Risk Level:</span>
                <span className="font-medium">{model.risk}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Technology Stack</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              { tech: 'Blockchain', use: 'Smart contracts', icon: '⛓️' },
              { tech: 'Mobile App', use: 'Farmer onboarding', icon: '📱' },
              { tech: 'Satellite Imagery', use: 'Farm monitoring', icon: '🛰️' },
              { tech: 'AI', use: 'Risk scoring', icon: '🤖' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-3 rounded">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="font-bold">{item.tech}</div>
                <div className="text-xs text-gray-500">{item.use}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-bold mb-2">{story.project}</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Amount Raised:</span>
                  <span className="font-medium">{story.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Backers:</span>
                  <span className="font-medium">{story.backers}</span>
                </div>
                <div className="flex justify-between">
                  <span>Investor Return:</span>
                  <span className="font-medium text-green-600">{story.return}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Revenue Streams */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Revenue Streams</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { stream: "Transaction Fees", rate: "3-5% per deal" },
            { stream: "SaaS Subscriptions", rate: "₦5K-₦20K/month" },
            { stream: "Data Analytics", rate: "₦50K-₦200K/month" },
            { stream: "Premium Listings", rate: "₦10K-₦50K/project" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-3 rounded-lg text-center">
              <div className="font-bold">{item.stream}</div>
              <div className="text-sm text-green-600">{item.rate}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-green-50 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">Complete Crowdfunding Platform Package</h3>
        <p className="mb-4">
          Includes technical specifications, regulatory compliance guide, and investor acquisition strategy
        </p>
        <Link 
          to="/checkout?idea=agric-crowdfunding&category=fintech" 
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
        >
          Get Business Plan Now
        </Link>
      </div>
    </div>
  );
}