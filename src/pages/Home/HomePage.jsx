import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const canvasRef = useRef(null);

  // Image URLs
  const images = {
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    startupOffice: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    teamCollaboration: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    techcorpLogo: 'https://via.placeholder.com/200x80/6366f1/FFFFFF?text=TechCorp&font=montserrat',
    ventureCapitalLogo: 'https://via.placeholder.com/200x80/8b5cf6/FFFFFF?text=Venture+Capital&font=montserrat',
    incubatorLogo: 'https://via.placeholder.com/200x80/ec4899/FFFFFF?text=Incubator&font=montserrat'
  };

  // Typing animation
  useEffect(() => {
    const text = "Launch Like a Unicorn";
    let i = 0;
    
    const interval = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTypingComplete(true);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // Floating particles animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();

    const particles = [];
    const colors = ['rgba(99, 102, 241, 0.8)', 'rgba(139, 92, 246, 0.8)', 'rgba(236, 72, 153, 0.8)'];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1; // Smaller particles for mobile
        this.speedX = Math.random() * 2 - 1; // Slower movement for mobile
        this.speedY = Math.random() * 2 - 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particles.length = 0; // Clear existing particles
      const particleCount = window.innerWidth < 768 ? 40 : 80; // Fewer particles on mobile
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Connect particles that are close
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${1 - distance/100})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      resizeCanvas();
      init();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      quote: "Deployed a BizBox concept that acquired 50,000 users in first week.",
      author: "Sarah Chen",
      role: "Tech Director, Fortune 500",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "The most efficient venture platform I've used in my 15-year career.",
      author: "Michael Rodriguez",
      role: "VC Partner, Silicon Valley",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Turned a BizBox template into a $10M ARR business in 9 months.",
      author: "Jamal Williams",
      role: "Founder & CEO",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Successful Launches", icon: "🚀" },
    { value: "$2.4B", label: "Capital Raised", icon: "💰" }, 
    { value: "94%", label: "Success Rate", icon: "📈" }
  ];

  const features = [
    {
      title: "Powerful Templates",
      description: "Pre-built solutions for rapid deployment with customizable options for any industry",
      image: images.startupOffice,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Collaborative Tools", 
      description: "Everything your team needs to succeed with real-time collaboration features",
      image: images.teamCollaboration,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive metrics and insights to track your growth and performance",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gray-900 text-white">
      {/* Animated particle background */}
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full -z-10 opacity-20"
      />

      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 opacity-90 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <section className="min-h-[80vh] md:min-h-[90vh] flex flex-col justify-center pt-24 pb-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative z-10 order-2 lg:order-1">
              <div className="inline-block px-4 py-2 mb-4 md:mb-6 bg-indigo-900/30 backdrop-blur-sm rounded-full border border-indigo-700">
                <span className="text-sm font-medium text-indigo-300">The Future of Startups is Here</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  {typedText}
                  <span className={`typing-cursor ${typingComplete ? 'opacity-0' : 'opacity-100'} ml-1`}>|</span>
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-medium text-gray-300 mt-2 md:mt-4">
                  Build. Scale. Dominate.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-10 max-w-2xl leading-relaxed">
                The complete platform to transform your startup idea into a unicorn business. 
                Everything you need from concept to scale in one powerful solution.
              </p>
              
              <div className="flex flex-wrap gap-3 md:gap-4">
                <button 
                  onClick={() => navigate('/ideas')}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-sm md:text-base"
                >
                  Explore Ideas
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg shadow hover:shadow-md transition-all duration-300 flex items-center group text-sm md:text-base">
                  Watch Demo
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2 group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Trusted by section */}
              <div className="mt-10 md:mt-16">
                <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">TRUSTED BY INNOVATORS AT</p>
                <div className="flex flex-wrap gap-4 md:gap-6 items-center">
                  <img src={images.techcorpLogo} alt="TechCorp" className="h-6 md:h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <img src={images.ventureCapitalLogo} alt="Venture Capital" className="h-5 md:h-7 opacity-80 hover:opacity-100 transition-opacity" />
                  <img src={images.incubatorLogo} alt="Startup Incubator" className="h-6 md:h-8 opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            {/* Hero image with floating animation - hidden on small mobile */}
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative w-full h-full">
                <img 
                  src={images.heroImage} 
                  alt="Startup team celebrating success" 
                  className="w-full h-auto max-w-md md:max-w-xl rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border-2 md:border-4 border-white/10 animate-float"
                />
                <div className="absolute -z-10 -inset-4 md:-inset-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl md:rounded-2xl opacity-20 blur-xl md:blur-2xl"></div>
                <div className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 w-16 h-16 md:w-32 md:h-32 bg-pink-500 rounded-full filter blur-[40px] md:blur-[80px] opacity-30"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-20 my-12 md:my-20 relative overflow-hidden rounded-xl md:rounded-3xl bg-gray-800/50 backdrop-blur-md border border-gray-700">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -right-10 -top-10 md:-right-20 md:-top-20 w-32 h-32 md:w-64 md:h-64 bg-indigo-500 rounded-full filter blur-[40px] md:blur-[80px]"></div>
            <div className="absolute -left-10 -bottom-10 md:-left-20 md:-bottom-20 w-32 h-32 md:w-64 md:h-64 bg-purple-500 rounded-full filter blur-[40px] md:blur-[80px]"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 text-center relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 md:p-6 group">
                <div className="text-3xl md:text-5xl mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2 group-hover:text-indigo-300 transition-colors">{stat.value}</h3>
                <p className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-20">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-2 mb-3 md:mb-4 bg-indigo-900/30 backdrop-blur-sm rounded-full border border-indigo-700 text-indigo-300 text-xs md:text-sm font-medium">
              OUR SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mt-3 md:mt-4 max-w-2xl mx-auto">
              Comprehensive tools designed to accelerate your startup journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl transition-all duration-500 hover:shadow-indigo-500/20 hover:-translate-y-1 md:hover:-translate-y-2"
              >
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6">
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 bg-indigo-600/80 backdrop-blur-sm rounded-lg group-hover:bg-pink-600/80 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block px-3 py-1 md:px-4 md:py-2 mb-3 md:mb-4 bg-indigo-900/30 backdrop-blur-sm rounded-full border border-indigo-700 text-indigo-300 text-xs md:text-sm font-medium">
                CLIENT SUCCESS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
                What Our Clients Say
              </h2>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-md p-6 md:p-8 rounded-lg md:rounded-xl border border-gray-700 relative overflow-hidden transition-all duration-500 hover:border-indigo-500/50">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute right-0 top-0 w-16 h-16 md:w-32 md:h-32 bg-indigo-500 rounded-full filter blur-[40px] md:blur-[80px]"></div>
                <div className="absolute left-0 bottom-0 w-16 h-16 md:w-32 md:h-32 bg-purple-500 rounded-full filter blur-[40px] md:blur-[80px]"></div>
              </div>
              <div className="flex flex-col md:flex-row items-center mb-4 md:mb-6 relative z-10">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].author}
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-2 md:border-4 border-white/20 shadow-md md:shadow-lg mb-3 md:mb-0 md:mr-4 lg:mr-6"
                />
                <div className="text-center md:text-left">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-bold">{testimonials[currentTestimonial].author}</h4>
                  <p className="text-xs md:text-sm text-gray-400">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 italic relative z-10">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="flex justify-center mt-6 md:mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 mx-1 rounded-full transition-all ${currentTestimonial === index ? 'bg-indigo-400 w-4 md:w-6' : 'bg-gray-600 hover:bg-gray-500'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-20 text-center relative overflow-hidden rounded-xl md:rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 my-12 md:my-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-1/4 top-0 w-32 h-32 md:w-64 md:h-64 bg-indigo-500 rounded-full filter blur-[50px] md:blur-[100px]"></div>
            <div className="absolute right-1/4 bottom-0 w-32 h-32 md:w-64 md:h-64 bg-purple-500 rounded-full filter blur-[50px] md:blur-[100px]"></div>
          </div>
          <div className="max-w-2xl mx-auto relative z-10 px-4">
            <span className="inline-block px-3 py-1 md:px-4 md:py-2 mb-3 md:mb-4 bg-indigo-900/30 backdrop-blur-sm rounded-full border border-indigo-700 text-indigo-300 text-xs md:text-sm font-medium">
              READY TO START?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
              Ready to Launch Your Unicorn?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Join thousands of entrepreneurs who transformed their ideas into successful businesses with our platform.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <button 
                onClick={() => navigate('/signup')}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-3 md:py-4 px-6 md:px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-lg flex items-center group"
              >
                Get Started Today
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-medium py-3 md:py-4 px-6 md:px-10 rounded-lg shadow hover:shadow-md transition-all duration-300 flex items-center group text-sm md:text-lg">
                Contact Sales
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2 group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;