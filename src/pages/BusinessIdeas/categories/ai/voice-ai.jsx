// src/pages/BusinessIdeas/categories/ai/voice-ai.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function VoiceAI() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          VoiceAI: African Language Voice Assistant
        </h1>
        <p className="text-xl text-gray-600">
          Localized voice technology for Africa's 2000+ languages
        </p>
      </div>

      {/* Business Overview */}
      <section className="prose max-w-none">
        <h2 className="text-2xl font-semibold text-purple-700">Business Concept</h2>
        <p>
          Developing voice recognition and synthesis systems specifically for African languages 
          and accents, enabling:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 my-6">
          {[
            {
              icon: '🗣️',
              title: 'Voice Commerce',
              description: 'Enable voice-based transactions for illiterate populations'
            },
            {
              icon: '🏥',
              title: 'Health Assistants',
              description: 'Multilingual medical information systems'
            },
            {
              icon: '📱',
              title: 'App Integration',
              description: 'SDKs for developers to add voice features'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="text-2xl block mb-2">{item.icon}</span>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Technical Architecture</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex flex-wrap gap-4">
            {[
              'Neural Speech Synthesis',
              'Accent-Adaptive ASR',
              'Low-Bandwidth Optimized',
              'USSD Voice Gateway',
              'Local Language NLP'
            ].map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-white rounded-full text-sm shadow-sm">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">Supported Languages (Phase 1)</h3>
              <ul className="list-disc pl-5 columns-2">
                {['Yoruba', 'Hausa', 'Igbo', 'Swahili', 'Amharic', 'Zulu', 'Oromo', 'Shona'].map((lang, i) => (
                  <li key={i}>{lang}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Key Differentiators</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Tonal language support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Offline-capable models</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Cultural context awareness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Monetization Strategy</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-purple-100">
              <tr>
                <th className="px-4 py-2 text-left">Model</th>
                <th className="px-4 py-2 text-left">Target Customers</th>
                <th className="px-4 py-2 text-left">Revenue Potential</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  model: "B2B API Licensing",
                  customers: "Banks, Telcos, Healthtech",
                  revenue: "₦5M-20M/year per enterprise"
                },
                {
                  model: "Consumer App Premium",
                  customers: "Diaspora, Urban Youth",
                  revenue: "₦500-2,000/month subscriptions"
                },
                {
                  model: "Government Contracts",
                  customers: "Education, Public Services",
                  revenue: "₦50M+ project-based"
                }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="px-4 py-3 border-b">{row.model}</td>
                  <td className="px-4 py-3 border-b">{row.customers}</td>
                  <td className="px-4 py-3 border-b font-medium">{row.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Development Roadmap</h2>
        <div className="relative">
          {/* Timeline */}
          <div className="border-l-2 border-purple-300 pl-8 space-y-10">
            {[
              {
                time: "Q1 2024",
                milestones: [
                  "Core Yoruba/Hausa models",
                  "MVP Android app"
                ]
              },
              {
                time: "Q2 2024",
                milestones: [
                  "Enterprise API launch",
                  "5,000+ user testing"
                ]
              },
              {
                time: "Q3 2024",
                milestones: [
                  "Swahili/Amharic support",
                  "USSD integration"
                ]
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-11 top-1 border-4 border-white"></div>
                <h3 className="font-bold text-lg">{phase.time}</h3>
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
      <div className="bg-purple-50 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">Ready to Build Africa's Voice Future?</h3>
        <p className="mb-4">Get the complete technical and business blueprint</p>
        <Link 
          to="/checkout?idea=voice-ai&category=ai" 
          className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
        >
          Purchase Full Package
        </Link>
      </div>
    </div>
  );
}