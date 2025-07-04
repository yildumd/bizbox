// src/components/sections/Home/CTASection.jsx
import { Link } from 'react-router-dom';

// Must use default export
export default function CTASection() {
  return (
    <section className="py-20">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Launch Your Next Venture?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/ideas"
            className="px-8 py-4 bg-white text-blue-600 rounded-xl text-lg font-semibold hover:bg-gray-100 transition"
          >
            Browse Ideas
          </Link>
          <Link
            to="/consult"
            className="px-8 py-4 bg-blue-800 text-white rounded-xl text-lg font-semibold hover:bg-blue-900 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}