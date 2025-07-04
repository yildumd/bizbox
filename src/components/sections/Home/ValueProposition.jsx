// src/components/sections/Home/ValueProposition.jsx
import PropTypes from 'prop-types';

// Must use default export
export default function ValueProposition() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Deployment',
      description: 'Go from concept to live in days, not months'
    },
    {
      icon: '📊',
      title: 'Market-Validated',
      description: 'Pre-tested concepts with traction potential'
    },
    {
      icon: '🚀',
      title: 'Scalable Infrastructure',
      description: 'Built to handle explosive growth'
    }
  ];

  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

ValueProposition.propTypes = {
  // Add prop types if needed
};