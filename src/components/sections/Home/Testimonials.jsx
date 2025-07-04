// src/components/sections/Home/Testimonials.jsx
import PropTypes from 'prop-types';

export default function Testimonials({ testimonials, currentTestimonial }) {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200/50 transition-all duration-500">
          <div className="flex items-start mb-6">
            <span className="text-4xl mr-4">
              {testimonials[currentTestimonial].avatar}
            </span>
            <div>
              <p className="text-xl md:text-2xl italic text-gray-700 mb-2">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="text-right">
                <div className="font-bold text-gray-800">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Testimonials.propTypes = {
  testimonials: PropTypes.array.isRequired,
  currentTestimonial: PropTypes.number.isRequired
};