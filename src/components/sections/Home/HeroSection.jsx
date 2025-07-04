// src/components/sections/Home/HeroSection.jsx
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
        Launch Like a Unicorn
      </h1>
      <p className="text-xl md:text-2xl mb-10 text-gray-600 max-w-3xl mx-auto">
        Pre-built, scalable ventures ready for your strategic vision.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to="/ideas" 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition"
        >
          Explore Ideas
        </Link>
        <Link 
          to="/consult" 
          className="px-6 py-3 bg-white border border-gray-300 text-gray-800 rounded-lg text-lg font-medium hover:bg-gray-50 transition"
        >
          Book Consultation
        </Link>
      </div>
    </section>
  );
}