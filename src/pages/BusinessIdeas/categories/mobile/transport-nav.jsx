// src/pages/BusinessIdeas/categories/mobile/transport-nav.jsx
import React from 'react';
import IdeaLayout from '../../../components/BusinessIdeaTemplate/IdeaLayout';
import { ideas } from '../../../data/ideas';

const TransportNavPage = () => {
  const idea = ideas.find(item => item.id === 'transport-nav') || {
    id: 'transport-nav',
    title: "TransitX (African Transport Navigator)",
    category: 'mobile',
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
    shortDescription: "AI-powered navigation app specializing in Africa's unique public transport systems, from danfos to boda bodas.",
    whyThisBusiness: "African cities lose $5B annually in productivity due to transport inefficiencies, while 85% of commuters lack reliable routing tools.",
    difficulty: "Advanced",
    investmentRange: "₦5,200,000 - ₦9,000,000 ($6,200-$10,800)",
    revenuePotential: "₦7,500,000 - ₦30,000,000 monthly ($9,000-$36,000)",
    timeToProfit: "12-18 months",
    marketPotential: "200M+ daily public transport users across Africa's 50 largest cities",
    whatYouGet: [
      "Complete app source code (iOS & Android)",
      "Transport network database",
      "Real-time traffic AI",
      "Fare calculation engine",
      "Driver/rider matching system",
      "Offline mapping solution"
    ],
    requirements: [
      {
        title: "Technology",
        description: "GIS mapping, mobile development, AI/ML"
      },
      {
        title: "Team",
        description: "4 developers, 2 local transport experts"
      },
      {
        title: "Data",
        description: "City transport route datasets"
      }
    ],
    features: [
      "Informal route mapping",
      "Dynamic fare estimation",
      "Safety ratings for routes",
      "Crowd-sourced updates",
      "Mixed-mode trip planning",
      "Offline functionality",
      "Local language support"
    ],
    pricingModel: {
      freemium: "Basic navigation free",
      premium: "₦800/month for pro features",
      enterprise: "City transit APIs for governments"
    },
    cities: [
      "Lagos",
      "Nairobi",
      "Accra",
      "Kampala",
      "Dar es Salaam",
      "Abidjan",
      "Addis Ababa",
      "Cairo"
    ]
  };

  return (
    <IdeaLayout>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957"
            alt="African transport"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {idea.title}
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              {idea.shortDescription}
            </p>
            <div className="bg-blue-600 inline-flex px-6 py-3 rounded-lg font-medium">
              Serving 200M+ Daily Commuters
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Mobility Revolution
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Navigating Africa's Transport Labyrinth
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Hyper-Local Mapping",
                description: "Precise routes for informal transport networks"
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Real-Time Updates",
                description: "Live traffic, route changes, and fare fluctuations"
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                ),
                title: "Multi-Modal Routing",
                description: "Seamless transitions between transport types"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3 text-white">
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

      {/* Cities Coverage */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Launch Cities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {idea.cities.map((city, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-blue-600 text-2xl mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900">{city}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  {['danfos', 'tro-tros', 'matatus', 'boda bodas', 'keke napeps'][index % 5]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Cutting-Edge Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idea.features.map((feature, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-md">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Revenue Streams
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Sustainable monetization while solving critical mobility challenges
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {Object.entries(idea.pricingModel).map(([model, value]) => (
              <div key={model} className={`bg-white p-6 rounded-lg shadow-sm ${model === 'premium' ? 'ring-2 ring-blue-500' : ''}`}>
                <h3 className="text-xl font-semibold text-blue-800 capitalize mb-2">
                  {model === 'freemium' ? 'Freemium Model' : 
                   model === 'premium' ? 'Premium Features' : 
                   'Government Solutions'}
                </h3>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  {model === 'freemium' ? [
                    'Basic navigation free',
                    'Ad-supported',
                    'Community features'
                  ] : model === 'premium' ? [
                    'Route optimization',
                    'Real-time alerts',
                    'Fare comparison'
                  ] : [
                    'Urban planning data',
                    'Transport analytics',
                    'API integrations'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Implementation Phases
          </h2>
          <div className="space-y-8">
            {[
              {
                phase: 'City Mapping (6 Months)',
                tasks: [
                  'Lagos & Nairobi launch',
                  '10,000+ routes mapped',
                  'Driver community building'
                ]
              },
              {
                phase: 'AI Integration (4 Months)',
                tasks: [
                  'Traffic prediction models',
                  'Dynamic pricing engine',
                  'Safety rating system'
                ]
              },
              {
                phase: 'Regional Expansion (8 Months)',
                tasks: [
                  '15 additional cities',
                  'Local language support',
                  'Government partnerships'
                ]
              }
            ].map((stage, index) => (
              <div key={index} className="relative">
                <div className="absolute left-4 h-full w-0.5 bg-blue-200 top-8"></div>
                <div className="relative flex items-start group">
                  <div className="flex-shrink-0 bg-blue-600 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      <span className="text-blue-600">{stage.phase}:</span>
                    </h3>
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      {stage.tasks.map((task, i) => (
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

      {/* Impact Metrics */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Expected Outcomes
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-8">
                {[
                  { value: "30-50%", label: "Reduction in commute times" },
                  { value: "20-35%", label: "Savings on transport costs" },
                  { value: "60%+", label: "Increase in route reliability" },
                  { value: "10M+", label: "Lives impacted by Year 3" }
                ].map((metric, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-gray-600">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-100">
                <h3 className="text-lg font-medium text-gray-900 mb-4">User Adoption Targets</h3>
                <div className="space-y-4">
                  {[
                    { label: "Drivers (Year 1)", value: "50,000+" },
                    { label: "Commuters (Year 1)", value: "1M+" },
                    { label: "Cities (Year 2)", value: "15+" },
                    { label: "Daily Active (Year 3)", value: "5M+" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                        <span className="text-sm font-medium text-gray-700">{item.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ width: `${25*(i+1)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </IdeaLayout>
  );
};

export default TransportNavPage;