// src/pages/BusinessIdeas/categories/ecommerce/african-art.jsx
import React from 'react';
import IdeaLayout from '../../../components/BusinessIdeaTemplate/IdeaLayout';
import { ideas } from '../../../data/ideas';

const AfricanArtPage = () => {
  // Find the idea or use fallback data if not found
  const idea = ideas.find(item => item.id === 'african-art') || {
    id: 'african-art',
    title: "African Art Marketplace",
    category: 'ecommerce',
    image: "https://images.unsplash.com/photo-1565201053376-de8b6fd6aa66",
    shortDescription: "Premium online gallery connecting global collectors with authentic African artists",
    whyThisBusiness: "African art prices have appreciated 8-12% annually, outperforming many traditional investments.",
    difficulty: "Intermediate",
    investmentRange: "₦3,000,000 - ₦8,000,000",
    revenuePotential: "₦5,000,000 - ₦20,000,000 monthly",
    timeToProfit: "6-9 months",
    marketPotential: "Global art market valued at $65 billion with African art being the fastest-growing segment.",
    whatYouGet: [
      "Artist network database",
      "Authentication protocols",
      "International shipping contracts",
      "Art valuation tools"
    ],
    requirements: [
      {
        title: "Space",
        description: "Gallery/showroom (optional)"
      },
      {
        title: "Technology",
        description: "High-quality photography setup"
      },
      {
        title: "Legal",
        description: "Export/import licenses"
      }
    ]
  };

  return (
    <IdeaLayout>
      {/* Hero Section with Gallery Preview */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={idea.image}
            alt="African Art Marketplace"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {idea.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {idea.shortDescription}
            </p>
            <div className="bg-amber-600 inline-flex px-6 py-3 rounded-lg font-medium">
              Global Art Market: $65 Billion Industry
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">
              Cultural Investment Opportunity
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Where Art Meets Returns
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {idea.whyThisBusiness || "African art prices have appreciated 8-12% annually, outperforming many traditional investments."}
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-amber-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18v4H3V4z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Artist Royalties</h3>
              </div>
              <p className="text-gray-600">
                Earn 30-50% commissions while ensuring artists receive fair compensation through our transparent model.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-amber-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Global Reach</h3>
              </div>
              <p className="text-gray-600">
                Our collectors come from 45+ countries with strongest markets in US, Europe, and Middle East.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-amber-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Certified Authenticity</h3>
              </div>
              <p className="text-gray-600">
                Every piece comes with blockchain-verified provenance and cultural documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Top Selling Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                category: "Contemporary Paintings",
                price: "₦150,000 - ₦2.5M",
                image: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458"
              },
              {
                category: "Bronze Sculptures",
                price: "₦350,000 - ₦5M",
                image: "https://images.unsplash.com/photo-1565201053376-de8b6fd6aa66"
              },
              {
                category: "Textile Art",
                price: "₦75,000 - ₦1.2M",
                image: "https://images.unsplash.com/photo-1583744946564-b52d01e2da64"
              },
              {
                category: "Traditional Masks",
                price: "₦250,000 - ₦3M",
                image: "https://images.unsplash.com/photo-1584735422186-97e9d1af8f1a"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="h-full w-full object-cover group-hover:opacity-75"
                  />
                </div>
                <div className="mt-2 text-center">
                  <h3 className="text-sm font-medium text-gray-900">{item.category}</h3>
                  <p className="text-xs text-amber-600">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Case Study: <span className="text-amber-600">Yoruba Gallery</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                "Started with 12 local artists, now representing 150+ creators with ₦120M annual sales and gallery in London."
              </p>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                    alt="Testimonial"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">Oluwaseun Adebayo</p>
                  <p className="text-base text-gray-500">Founder, Yoruba Gallery</p>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-amber-100">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Sales Channels</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Online Platform</span>
                      <span className="text-sm font-medium text-gray-700">55%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '55%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Gallery Exhibitions</span>
                      <span className="text-sm font-medium text-gray-700">25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Corporate Collections</span>
                      <span className="text-sm font-medium text-gray-700">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Auction Houses</span>
                      <span className="text-sm font-medium text-gray-700">5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Curated Launch Timeline
          </h2>
          <div className="space-y-8">
            {[
              {
                month: 'Phase 1 (1-2 Months)',
                title: 'Artist Network Development',
                tasks: ['Identify 20-30 quality artists', 'Establish contracts and pricing', 'Create artist portfolios']
              },
              {
                month: 'Phase 2 (3-4 Months)',
                title: 'Platform & Logistics',
                tasks: ['Launch e-gallery website', 'Setup global shipping partners', 'Implement authentication process']
              },
              {
                month: 'Phase 3 (5-6 Months)',
                title: 'Market Expansion',
                tasks: ['Target international art fairs', 'Develop corporate collection program', 'Establish resale marketplace']
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="absolute left-4 h-full w-0.5 bg-amber-200 top-8"></div>
                <div className="relative flex items-start group">
                  <div className="flex-shrink-0 bg-amber-600 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      <span className="text-amber-600">{phase.month}:</span> {phase.title}
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

export default AfricanArtPage;