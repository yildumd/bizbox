// src/pages/BusinessIdeas/categories/saas/inventory-management.jsx
import React from 'react';
import IdeaLayout from '../../../components/BusinessIdeaTemplate/IdeaLayout';
import { ideas } from '../../../data/ideas';

const InventoryManagementPage = () => {
  const idea = ideas.find(item => item.id === 'inventory-management') || {
    id: 'inventory-management',
    title: "StockWise SaaS (Inventory Management)",
    category: 'saas',
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    shortDescription: "Cloud-based inventory control system with real-time tracking, automated reordering, and multi-channel integration.",
    whyThisBusiness: "African businesses lose $65B annually from stockouts and overstocking due to poor inventory management.",
    difficulty: "Intermediate",
    investmentRange: "₦4,500,000 - ₦7,500,000 ($5,400-$9,000)",
    revenuePotential: "₦6,000,000 - ₦25,000,000 monthly ($7,200-$30,000)",
    timeToProfit: "6-9 months",
    marketPotential: "African inventory software market growing at 28% CAGR, reaching $1.2B by 2026.",
    whatYouGet: [
      "White-label SaaS platform",
      "Barcode/RFID integration",
      "Supplier management module",
      "Mobile warehouse app",
      "API for e-commerce integration",
      "Analytics dashboard",
      "Multi-location support"
    ],
    requirements: [
      {
        title: "Technology",
        description: "Cloud servers, domain, payment gateway"
      },
      {
        title: "Team",
        description: "2 developers, 1 sales rep, 1 support"
      },
      {
        title: "Legal",
        description: "Data security compliance"
      }
    ],
    features: [
      "Real-time stock monitoring",
      "Automated purchase orders",
      "Barcode scanning",
      "Expiry date tracking",
      "Multi-warehouse management",
      "Sales forecasting",
      "Inventory valuation",
      "Low stock alerts"
    ],
    pricingModel: {
      starter: "₦20,000/month (1 location)",
      professional: "₦60,000/month (3 locations)",
      enterprise: "₦150,000/month (unlimited)"
    },
    integrations: [
      "Shopify, WooCommerce",
      "Jumia, Konga APIs",
      "QuickBooks, Xero",
      "Payment processors"
    ]
  };

  return (
    <IdeaLayout>
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
            alt="Warehouse"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {idea.title}
            </h1>
            <p className="text-xl text-indigo-200 mb-8">
              {idea.shortDescription}
            </p>
            <div className="bg-indigo-600 inline-flex px-6 py-3 rounded-lg font-medium">
              Reduce Inventory Costs by 30-40%
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Supply Chain Optimization
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              From Warehouse to Checkout
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {idea.whyThisBusiness}
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                title: "Stock Control",
                description: "Real-time visibility across all locations"
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Cost Savings",
                description: "Reduce dead stock and optimize purchases"
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
                title: "Automation",
                description: "Auto-generate POs when stock reaches threshold"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Powerful Inventory Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {idea.features.map((feature, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100 flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-indigo-500 mt-0.5">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Seamless Integrations
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Works with tools you already use
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {idea.integrations.map((integration, index) => (
              <div key={index} className="col-span-1 flex justify-center bg-gray-50 py-8 px-4 rounded-lg">
                <div className="text-center">
                  <p className="text-lg font-medium text-gray-900">{integration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Transparent Pricing
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Scale as your business grows
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {Object.entries(idea.pricingModel).map(([plan, price]) => (
              <div key={plan} className={`rounded-lg shadow-lg overflow-hidden ${plan === 'professional' ? 'ring-2 ring-indigo-500 transform scale-105' : ''}`}>
                <div className={`px-6 py-8 ${plan === 'professional' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-900'}`}>
                  <h3 className="text-lg font-medium capitalize">{plan} Plan</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className={`text-4xl font-extrabold ${plan === 'professional' ? 'text-white' : 'text-gray-900'}`}>
                      {price.split('/')[0]}
                    </span>
                    <span className={`ml-1 text-lg font-medium ${plan === 'professional' ? 'text-indigo-100' : 'text-gray-500'}`}>
                      /month
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 pt-6 pb-8">
                  <ul className="space-y-4">
                    {[
                      `${plan === 'starter' ? '1' : plan === 'professional' ? '3' : 'Unlimited'} warehouse locations`,
                      `${plan !== 'starter' ? 'Advanced' : 'Basic'} analytics`,
                      `${plan === 'enterprise' ? 'Unlimited' : plan === 'professional' ? '5' : '1'} user seats`,
                      `${plan !== 'starter' ? 'API' : 'Limited'} access`,
                      plan === 'enterprise' ? 'Dedicated support' : 'Email support'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-green-500">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-gray-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <button className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${plan === 'professional' ? 'bg-indigo-500 hover:bg-indigo-700' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                      Start free trial
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            120-Day Go-To-Market Plan
          </h2>
          <div className="space-y-8">
            {[
              {
                month: 'Month 1-2',
                title: 'Product Development',
                tasks: ['Core inventory modules', 'Barcode integration', 'Mobile app development']
              },
              {
                month: 'Month 3',
                title: 'Beta Testing',
                tasks: ['Onboard 10 pilot clients', 'Collect feedback', 'Performance optimization']
              },
              {
                month: 'Month 4',
                title: 'Market Launch',
                tasks: ['Marketing campaigns', 'Sales team training', 'Customer onboarding']
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="absolute left-4 h-full w-0.5 bg-indigo-200 top-8"></div>
                <div className="relative flex items-start group">
                  <div className="flex-shrink-0 bg-indigo-600 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      <span className="text-indigo-600">{phase.month}:</span> {phase.title}
                    </h3>
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      {phase.tasks.map((task, i) => (
                        <li key={i} className="text-gray-600">{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </IdeaLayout>
  );
};

export default InventoryManagementPage;