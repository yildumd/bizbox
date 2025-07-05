// src/pages/BusinessIdeas/categories/mobile/language-app.jsx
import React from 'react';
import IdeaLayout from '../../../components/BusinessIdeaTemplate/IdeaLayout';
import { ideas } from '../../../data/ideas';

const LanguageAppPage = () => {
  const idea = ideas.find(item => item.id === 'language-app') || {
    id: 'language-app',
    title: "TongueMaster (African Language Learning App)",
    category: 'mobile',
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
    shortDescription: "Interactive mobile platform for learning African languages through gamification and cultural immersion.",
    whyThisBusiness: "Over 2000 African languages are at risk of extinction, while global interest in learning them grows by 40% annually.",
    difficulty: "Advanced",
    investmentRange: "₦3,800,000 - ₦6,500,000 ($4,600-$7,800)",
    revenuePotential: "₦5,000,000 - ₦20,000,000 monthly ($6,000-$24,000)",
    timeToProfit: "9-15 months",
    marketPotential: "Global language learning market worth $20B with African languages being the fastest-growing segment.",
    whatYouGet: [
      "Complete app source code (iOS & Android)",
      "50+ language course templates",
      "Speech recognition system",
      "Cultural immersion modules",
      "Gamification engine",
      "Community features"
    ],
    requirements: [
      {
        title: "Technology",
        description: "AI/ML for speech recognition, cloud hosting"
      },
      {
        title: "Team",
        description: "Linguists, native speakers, 3 developers"
      },
      {
        title: "Content",
        description: "Native speaker recordings, cultural content"
      }
    ],
    features: [
      "Interactive dialogues",
      "Speech pronunciation grading",
      "Cultural context lessons",
      "Offline learning mode",
      "Personalized learning paths",
      "Native speaker matching",
      "Progress tracking"
    ],
    pricingModel: {
      freemium: "Basic features free",
      premium: "₦1,500/month full access",
      institutional: "Custom pricing for schools"
    },
    languages: [
      "Yoruba",
      "Igbo",
      "Hausa",
      "Swahili",
      "Zulu",
      "Amharic",
      "Shona",
      "Wolof"
    ]
  };

  return (
    <IdeaLayout>
      {/* Hero Section */}
      <section className="relative bg-purple-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d"
            alt="Language learning"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {idea.title}
            </h1>
            <p className="text-xl text-purple-200 mb-8">
              {idea.shortDescription}
            </p>
            <div className="bg-purple-600 inline-flex px-6 py-3 rounded-lg font-medium">
              Language Learning Market: $20 Billion
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">
              Cultural Preservation
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Learn Languages, Discover Cultures
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                ),
                title: "2000+ Languages",
                description: "Comprehensive coverage of African linguistic diversity"
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "AI-Powered",
                description: "Speech recognition tailored for African phonetics"
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 19.477 5.754 19 7.5 19s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 19.477 18.247 19 16.5 19c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "Cultural Context",
                description: "Language taught through cultural practices and traditions"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-purple-500 rounded-md p-3 text-white">
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

      {/* Languages Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Featured Languages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {idea.languages.map((language, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-purple-600 text-2xl mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900">{language}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Innovative Learning Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idea.features.map((feature, index) => (
              <div key={index} className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-100 p-2 rounded-md">
                    <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Monetization Strategy
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Sustainable revenue while preserving linguistic heritage
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {Object.entries(idea.pricingModel).map(([model, value]) => (
              <div key={model} className={`bg-white p-6 rounded-lg shadow-sm ${model === 'premium' ? 'ring-2 ring-purple-500' : ''}`}>
                <h3 className="text-xl font-semibold text-purple-800 capitalize mb-2">
                  {model === 'freemium' ? 'Freemium Model' : 
                   model === 'premium' ? 'Premium Subscriptions' : 
                   'Institutional Licenses'}
                </h3>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  {model === 'freemium' ? [
                    'Basic lessons free',
                    'Ad-supported',
                    'Community features'
                  ] : model === 'premium' ? [
                    'All courses unlocked',
                    'Ad-free experience',
                    'Offline access'
                  ] : [
                    'School-wide access',
                    'Progress tracking',
                    'Teacher dashboards'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            Development Timeline
          </h2>
          <div className="space-y-8">
            {[
              {
                phase: 'Foundation (4 Months)',
                tasks: [
                  'Core app development',
                  '10 initial language courses',
                  'Basic speech recognition'
                ]
              },
              {
                phase: 'Community (3 Months)',
                tasks: [
                  'Native speaker network',
                  'Cultural content creation',
                  'Beta testing'
                ]
              },
              {
                phase: 'Growth (5 Months)',
                tasks: [
                  'Additional 40+ languages',
                  'Advanced AI features',
                  'Institutional partnerships'
                ]
              }
            ].map((stage, index) => (
              <div key={index} className="relative">
                <div className="absolute left-4 h-full w-0.5 bg-purple-200 top-8"></div>
                <div className="relative flex items-start group">
                  <div className="flex-shrink-0 bg-purple-600 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      <span className="text-purple-600">{stage.phase}:</span>
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

      {/* Market Potential */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Target Audiences
              </h2>
              <div className="mt-6 space-y-6">
                {[
                  {
                    group: "African Diaspora",
                    size: "20M+ potential users",
                    interest: "Reconnecting with heritage"
                  },
                  {
                    group: "International Learners",
                    size: "5M annual language students",
                    interest: "Cultural exploration"
                  },
                  {
                    group: "Educational Institutions",
                    size: "50,000+ schools in Africa",
                    interest: "Language curriculum"
                  },
                  {
                    group: "Business Professionals",
                    size: "2M+ cross-border workers",
                    interest: "Business communication"
                  }
                ].map((audience, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-100 p-2 rounded-md">
                      <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">{audience.group}</h4>
                      <p className="text-gray-600">{audience.size} · {audience.interest}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-purple-100">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Projected Growth</h3>
                <div className="space-y-4">
                  {[
                    { label: "MAU (Year 1)", value: "100,000" },
                    { label: "MAU (Year 2)", value: "500,000" },
                    { label: "MAU (Year 3)", value: "1.5M" },
                    { label: "Paid Conversion", value: "8-12%" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                        <span className="text-sm font-medium text-gray-700">{item.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-purple-600 h-2.5 rounded-full" 
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

export default LanguageAppPage;