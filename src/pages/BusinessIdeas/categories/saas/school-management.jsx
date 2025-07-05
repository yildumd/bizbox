// src/pages/BusinessIdeas/categories/saas/school-management.jsx
import React from 'react';
import IdeaLayout from '../../../components/BusinessIdeaTemplate/IdeaLayout';
import { ideas } from '../../../data/ideas';

const SchoolManagementPage = () => {
  const idea = ideas.find(item => item.id === 'school-management') || {
    id: 'school-management',
    title: "EduManage Pro (School Management SaaS)",
    category: 'saas',
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    shortDescription: "Cloud-based school administration platform with automated workflows, learning management, and parent engagement tools.",
    whyThisBusiness: "90% of African schools still use paper-based systems, creating massive inefficiencies in administration and communication.",
    difficulty: "Intermediate",
    investmentRange: "₦3,500,000 - ₦6,000,000 ($4,200-$7,200)",
    revenuePotential: "₦4,800,000 - ₦18,000,000 monthly ($5,800-$21,700)",
    timeToProfit: "5-8 months",
    marketPotential: "Africa's EdTech market will reach $3.6 billion by 2025, with school management systems being the fastest-growing segment.",
    whatYouGet: [
      "White-label SaaS platform codebase",
      "Multi-school architecture",
      "Payment gateway integration",
      "Student information system",
      "Automated reporting module",
      "Parent communication portal",
      "Mobile app templates"
    ],
    requirements: [
      {
        title: "Technology",
        description: "Cloud hosting, domain, SSL certificate"
      },
      {
        title: "Team",
        description: "2 developers, 1 support rep"
      },
      {
        title: "Legal",
        description: "Data protection compliance"
      }
    ],
    features: [
      "Student enrollment automation",
      "Digital fee collection",
      "Examination management",
      "Staff payroll integration",
      "Library management",
      "Transport tracking",
      "Biometric attendance"
    ],
    pricingModel: {
      basic: "₦15,000/month (100 students)",
      standard: "₦45,000/month (500 students)",
      premium: "₦90,000/month (unlimited)"
    }
  };

  return (
    <IdeaLayout>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            alt="Classroom"
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
              EdTech Market Growth: 25% Yearly
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Digital Transformation
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Modernize School Operations
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "Academic Management",
                description: "Automate grading, timetables, and curriculum tracking"
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Financial Automation",
                description: "Streamline fee collection, invoicing, and financial reporting"
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                ),
                title: "Parent Engagement",
                description: "Real-time communication portal with notifications"
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

      {/* Features Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Comprehensive Feature Set
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idea.features.map((feature, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-blue-500">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Flexible SaaS Pricing
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Affordable plans for schools of all sizes
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {Object.entries(idea.pricingModel).map(([plan, price]) => (
              <div key={plan} className={`rounded-lg shadow-lg overflow-hidden ${plan === 'standard' ? 'ring-2 ring-blue-500' : ''}`}>
                <div className={`px-6 py-8 ${plan === 'standard' ? 'bg-blue-600 text-white' : 'bg-white text-gray-900'}`}>
                  <h3 className="text-lg font-medium capitalize">{plan} Plan</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className={`text-4xl font-extrabold ${plan === 'standard' ? 'text-white' : 'text-gray-900'}`}>
                      {price.split('/')[0]}
                    </span>
                    <span className={`ml-1 text-lg font-medium ${plan === 'standard' ? 'text-blue-100' : 'text-gray-500'}`}>
                      /month
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 pt-6 pb-8">
                  <ul className="space-y-4">
                    {[
                      `${plan === 'basic' ? 'Up to 100' : plan === 'standard' ? 'Up to 500' : 'Unlimited'} students`,
                      `${plan !== 'basic' ? 'Advanced' : 'Basic'} reporting`,
                      `${plan === 'premium' ? 'Unlimited' : 'Limited'} storage`,
                      `${plan !== 'basic' ? 'Priority' : 'Standard'} support`,
                      plan === 'premium' ? 'Dedicated account manager' : 'Community support'
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            90-Day Launch Plan
          </h2>
          <div className="space-y-8">
            {[
              {
                month: 'Month 1',
                title: 'Platform Development',
                tasks: ['Core module completion', 'Payment gateway integration', 'Initial testing']
              },
              {
                month: 'Month 2',
                title: 'Pilot Program',
                tasks: ['Onboard 3 pilot schools', 'Collect feedback', 'Refine features']
              },
              {
                month: 'Month 3',
                title: 'Full Launch',
                tasks: ['Marketing campaign', 'Sales team training', 'Customer support setup']
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="absolute left-4 h-full w-0.5 bg-blue-200 top-8"></div>
                <div className="relative flex items-start group">
                  <div className="flex-shrink-0 bg-blue-600 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      <span className="text-blue-600">{phase.month}:</span> {phase.title}
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

export default SchoolManagementPage;