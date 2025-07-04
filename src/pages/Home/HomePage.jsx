import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const canvasRef = useRef(null);

  // Image URLs (using placeholder services)
  const images = {
    heroImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    startupOffice: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    teamCollaboration: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    techcorpLogo: 'https://via.placeholder.com/150x60/6366f1/FFFFFF?text=TechCorp',
    ventureCapitalLogo: 'https://via.placeholder.com/150x60/8b5cf6/FFFFFF?text=Venture+Capital',
    incubatorLogo: 'https://via.placeholder.com/150x60/ec4899/FFFFFF?text=Incubator'
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
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['rgba(99, 102, 241, 0.8)', 'rgba(139, 92, 246, 0.8)', 'rgba(236, 72, 153, 0.8)'];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
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
      for (let i = 0; i < 80; i++) {
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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
      description: "Pre-built solutions for rapid deployment",
      image: images.startupOffice
    },
    {
      title: "Collaborative Tools",
      description: "Everything your team needs to succeed", 
      image: images.teamCollaboration
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
        <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  {typedText}
                  <span className={`typing-cursor ${typingComplete ? 'opacity-0' : 'opacity-100'} ml-1`}>|</span>
                </span>
                <span className="block text-3xl md:text-4xl font-medium text-gray-300 mt-4">
                  Build. Scale. Dominate.
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                The complete platform to transform your startup idea into a unicorn business. 
                Everything you need from concept to scale in one powerful solution.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => navigate('/ideas')}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
                >
                  Explore Ideas
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg shadow hover:shadow-md transition-all duration-300 flex items-center">
                  Watch Demo
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Trusted by section */}
              <div className="mt-16">
                <p className="text-sm text-gray-400 mb-4">TRUSTED BY INNOVATORS AT</p>
                <div className="flex flex-wrap gap-6 items-center">
                  <img src={images.techcorpLogo} alt="TechCorp" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <img src={images.ventureCapitalLogo} alt="Venture Capital" className="h-7 opacity-80 hover:opacity-100 transition-opacity" />
                  <img src={images.incubatorLogo} alt="Startup Incubator" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            {/* Hero image with floating animation */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-full">
                <img 
                  src={images.heroImage} 
                  alt="Startup team celebrating success" 
                  className="w-full h-auto max-w-xl rounded-2xl shadow-2xl border-4 border-white/10 animate-float"
                />
                <div className="absolute -z-10 -inset-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 my-20 relative overflow-hidden rounded-3xl bg-gray-800/50 backdrop-blur-md border border-gray-700">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-[80px]"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-500 rounded-full filter blur-[80px]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-5xl mb-2">{stat.icon}</div>
                <h3 className="text-5xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
            Everything You Need to Succeed
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
              What Our Clients Say
            </h2>
            <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500 rounded-full filter blur-[80px]"></div>
                <div className="absolute left-0 bottom-0 w-32 h-32 bg-purple-500 rounded-full filter blur-[80px]"></div>
              </div>
              <div className="flex flex-col md:flex-row items-center mb-6 relative z-10">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].author}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white/20 shadow-lg mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-xl">{testimonials[currentTestimonial].author}</h4>
                  <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              <p className="text-xl text-gray-300 italic relative z-10">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="flex justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 mx-1 rounded-full transition-all ${currentTestimonial === index ? 'bg-indigo-400 w-6' : 'bg-gray-600'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 text-center relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 my-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-1/4 top-0 w-64 h-64 bg-indigo-500 rounded-full filter blur-[100px]"></div>
            <div className="absolute right-1/4 bottom-0 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px]"></div>
          </div>
          <div className="max-w-2xl mx-auto relative z-10 px-4">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
              Ready to Launch Your Unicorn?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of entrepreneurs who transformed their ideas into successful businesses with our platform.
            </p>
            <button 
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              Get Started Today
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;