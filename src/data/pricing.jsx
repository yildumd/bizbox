// src/data/pricing.jsx
export const pricing = [
  {
    ideaId: 'afrocentric-fashion',
    packages: [
      {
        name: 'Basic',
        price: 50000,
        currency: '₦',
        inclusions: [
          "50-page Business Plan",
          "Supplier Contacts (25+)",
          "Market Analysis Report",
          "Basic Financial Projections",
          "30-day Email Support"
        ],
        delivery: "24h"
      },
      {
        name: 'Premium',
        price: 120000,
        currency: '₦',
        inclusions: [
          "Complete Business Blueprint",
          "Verified Supplier Network (50+)",
          "Competitor Analysis",
          "5-year Financial Projections",
          "3 Strategy Sessions",
          "Website Template",
          "6-month Support"
        ],
        delivery: "48h"
      }
    ]
  },
  {
    ideaId: 'farmers-produce',
    packages: [
      {
        name: 'Basic',
        price: 45000,
        currency: '₦',
        inclusions: [
          "Agriculture Business Plan",
          "Farmer Network Directory",
          "Market Price Analysis",
          "Basic Financial Model",
          "30-day Support"
        ],
        delivery: "24h"
      },
      {
        name: 'Premium',
        price: 100000,
        currency: '₦',
        inclusions: [
          "Complete Agri-Business Package",
          "Verified Farmer Network (100+)",
          "Export Documentation Guide",
          "Advanced Financial Models",
          "3 Consulting Sessions",
          "Mobile Collection App Specs",
          "6-month Priority Support"
        ],
        delivery: "72h"
      }
    ]
  },
  {
    ideaId: 'mobile-pos',
    packages: [
      {
        name: 'Basic',
        price: 75000,
        currency: '₦',
        inclusions: [
          "FinTech Business Plan",
          "Regulatory Compliance Guide",
          "Agent Recruitment Plan",
          "Basic Financial Projections",
          "30-day Support"
        ],
        delivery: "24h"
      },
      {
        name: 'Premium',
        price: 150000,
        currency: '₦',
        inclusions: [
          "Complete FinTech Package",
          "CBN Licensing Roadmap",
          "Agent Network Strategy",
          "5-year Financial Models",
          "3 Technical Consultations",
          "Fraud Prevention System Design",
          "6-month Priority Support"
        ],
        delivery: "48h"
      }
    ]
  },
  {
    ideaId: 'snail-farming',
    packages: [
      {
        name: 'Basic',
        price: 35000,
        currency: '₦',
        inclusions: [
          "Heliculture Business Plan",
          "Buyer Contacts List",
          "Export Requirements Guide",
          "Basic Financial Projections",
          "30-day Support"
        ],
        delivery: "24h"
      },
      {
        name: 'Premium',
        price: 80000,
        currency: '₦',
        inclusions: [
          "Complete Snail Farming Package",
          "International Buyer Network",
          "Hatchery Management Software",
          "3-year Financial Models",
          "2 Farming Consultations",
          "Export Packaging Specifications",
          "6-month Support"
        ],
        delivery: "48h"
      }
    ]
  }
];

// Default package for ideas not listed
export const defaultPackage = {
  ideaId: 'default',
  packages: [
    {
      name: 'Basic',
      price: 50000,
      currency: '₦',
      inclusions: [
        "Comprehensive Business Plan",
        "Industry Supplier List",
        "Market Analysis Report",
        "Basic Financial Projections",
        "30-day Email Support"
      ],
      delivery: "24h"
    },
    {
      name: 'Premium',
      price: 120000,
      currency: '₦',
      inclusions: [
        "Complete Business Package",
        "Verified Supplier Network",
        "Competitor Analysis",
        "5-year Financial Projections",
        "3 Strategy Sessions",
        "Custom Website Template",
        "6-month Priority Support"
      ],
      delivery: "48h"
    }
  ]
};

// Helper function to get pricing for an idea
export function getPricingForIdea(ideaId) {
  return pricing.find(item => item.ideaId === ideaId) || defaultPackage;
}