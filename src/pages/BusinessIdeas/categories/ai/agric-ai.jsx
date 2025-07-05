// src/pages/BusinessIdeas/categories/ai/agric-ai.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function AgricAI() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          AgricAI: Smart Farming Solution
        </h1>
        <p className="text-xl text-gray-600">
          AI-powered platform revolutionizing small-scale farming in Africa
        </p>
      </div>

      {/* Business Overview */}
      <section className="prose max-w-none">
        <h2 className="text-2xl font-semibold text-green-700">Business Concept</h2>
        <p>
          AgricAI combines machine learning with mobile technology to help African farmers:
        </p>
        <ul>
          <li>Predict optimal planting/harvest times</li>
          <li>Detect crop diseases via image recognition</li>
          <li>Optimize irrigation schedules</li>
          <li>Connect with buyers and suppliers</li>
        </ul>
        
        <div className="grid md:grid-cols-2 gap-8 my-6">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold">Market Opportunity</h3>
            <p>
              Africa's 60 million smallholder farmers represent a $3B+ market for 
              agricultural technology services.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold">Technology Stack</h3>
            <p>
              Mobile app with TensorFlow Lite models, satellite data integration, 
              and USSD fallback for low connectivity areas.
            </p>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Revenue Streams</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Subscription Plans",
              description: "N500-2,000/month for premium features",
              icon: "💰"
            },
            {
              title: "Commission Marketplace",
              description: "5-10% on farm inputs & produce sales",
              icon: "🛒"
            },
            {
              title: "Data Licensing",
              description: "Sell aggregated insights to agribusinesses",
              icon: "📊"
            }
          ].map((stream, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <div className="text-2xl mb-2">{stream.icon}</div>
              <h3 className="font-bold">{stream.title}</h3>
              <p className="text-sm text-gray-600">{stream.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Implementation Phases</h2>
        <div className="space-y-4">
          {[
            {
              phase: "Phase 1 (Months 1-3)",
              tasks: [
                "Core mobile app development",
                "Basic crop disease detection model",
                "Pilot with 200 farmers in Oyo State"
              ]
            },
            {
              phase: "Phase 2 (Months 4-6)",
              tasks: [
                "Add irrigation optimization",
                "Marketplace feature",
                "Expand to 3 states"
              ]
            },
            {
              phase: "Phase 3 (Months 7-12)",
              tasks: [
                "Premium subscription launch",
                "Government partnership programs",
                "Regional expansion"
              ]
            }
          ].map((phase, index) => (
            <div key={index} className="border-l-4 border-green-300 pl-4">
              <h3 className="font-bold text-lg">{phase.phase}</h3>
              <ul className="list-disc pl-5">
                {phase.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="pt-4">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Resources</h2>
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/business-plan-template?template=agri-tech" 
            className="px-4 py-2 bg-green-100 text-green-800 rounded hover:bg-green-200"
          >
            Download Business Plan Template
          </Link>
          <Link 
            to="/financial-model?industry=agri-tech" 
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
          >
            Financial Projections
          </Link>
        </div>
      </section>
    </div>
  );
}