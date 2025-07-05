import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const canvasRef = useRef(null);

  // Enhanced image URLs with more dynamic visuals
  const images = {
    heroImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    startupOffice: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    teamCollaboration: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    businessGrowth: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    successCelebration: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1484&q=80',
    techcorpLogo: 'https://via.placeholder.com/200x80/6366f1/FFFFFF?text=TechCorp&font=montserrat',
    ventureCapitalLogo: 'https://via.placeholder.com/200x80/8b5cf6/FFFFFF?text=Venture+Capital&font=montserrat',
    incubatorLogo: 'https://via.placeholder.com/200x80/ec4899/FFFFFF?text=Incubator&font=montserrat'
  };

  // More dynamic typing animation with multiple phrases
  useEffect(() => {
    const phrases = [
      "Launch Like a Unicorn",
      "Scale Like a Pro",
      "Dominate Your Market"
    ];
    let currentPhrase = 0;
    let i = 0;
    let isDeleting = false;
    
    const type = () => {
      const currentText = phrases[currentPhrase];
      
      if (isDeleting) {
        setTypedText(currentText.substring(0, i - 1));
        i--;
        
        if (i === 0) {
          isDeleting = false;
          currentPhrase = (currentPhrase + 1) % phrases.length;
          setTimeout(type, 500);
        } else {
          setTimeout(type, 50);
        }
      } else {
        setTypedText(currentText.substring(0, i + 1));
        i++;
        
        if (i === currentText.length) {
          isDeleting = true;
          setTimeout(type, 2000);
          setTypingComplete(true);
        } else {
          setTimeout(type, 120);
        }
      }
    };
    
    type();

    return () => clearTimeout(type);
  }, []);

  // Enhanced floating particles animation with more colors
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();

    const particles = [];
    const colors = [
      'rgba(99, 102, 241, 0.8)', 
      'rgba(139, 92, 246, 0.8)', 
      'rgba(236, 72, 153, 0.8)',
      'rgba(16, 185, 129, 0.8)',
      'rgba(245, 158, 11, 0.8)'
    ];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        
        // Pulsing effect
        this.size = Math.sin(Date.now() * 0.001 + this.x * 0.01) * 1 + 2;
      }

      draw() {
        ctx.fillStyle = this.color.replace('0.8', this.opacity);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particles.length = 0;
      const particleCount = window.innerWidth < 768 ? 50 : 120;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(17, 24, 39, 0.2)');
      gradient.addColorStop(1, 'rgba(79, 70, 229, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Connect particles that are close
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${1 - distance/120})`;
            ctx.lineWidth = 0.8;
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

  // Enhanced testimonials with more dynamic content
  const testimonials = [
    {
      quote: "BizBox helped us acquire 50,000 users in our first week - something that would have taken months otherwise!",
      author: "Sarah Chen",
      role: "Tech Director, Fortune 500",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      company: "TechCorp"
    },
    {
      quote: "In my 15 years as a VC, I've never seen a platform that accelerates startups this effectively.",
      author: "Michael Rodriguez",
      role: "VC Partner, Silicon Valley",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      company: "Venture Capital Partners"
    },
    {
      quote: "We turned a BizBox template into a $10M ARR business in just 9 months. Absolutely game-changing!",
      author: "Jamal Williams",
      role: "Founder & CEO",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      company: "ScaleFast Inc."
    }
  ];

  // More impressive stats with animated counters
  const stats = [
    { value: "10,000+", label: "Successful Launches", icon: "🚀", color: "from-indigo-500 to-purple-600" },
    { value: "$2.4B", label: "Capital Raised", icon: "💰", color: "from-green-500 to-emerald-600" }, 
    { value: "94%", label: "Success Rate", icon: "📈", color: "from-pink-500 to-rose-600" },
    { value: "500+", label: "Investor Network", icon: "👥", color: "from-blue-500 to-cyan-600" }
  ];

  // More exciting features with hover effects
  const features = [
    {
      title: "Powerful Templates",
      description: "Pre-built, battle-tested solutions for rapid deployment across any industry",
      image: images.startupOffice,
      icon: "⚡",
      hoverText: "Get started 3x faster with our proven templates"
    },
    {
      title: "Collaborative Tools", 
      description: "Real-time collaboration features that keep your team aligned and productive",
      image: images.teamCollaboration,
      icon: "🤝",
      hoverText: "Work seamlessly with your team from anywhere"
    },
    {
      title: "Analytics Dashboard",
      description: "Actionable insights and metrics to track your growth and performance",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      icon: "📊",
      hoverText: "Make data-driven decisions with confidence"
    },
    {
      title: "Investor Network",
      description: "Direct access to our network of 500+ angel investors and VCs",
      image: images.businessGrowth,
      icon: "💸",
      hoverText: "Connect with investors ready to fund your vision"
    }
  ];

  // Business idea previews
  const popularIdeas = [
    {
      title: "AI-Powered Agric Advisory",
      category: "AI Solutions",
      revenue: "$20K-$90K/month",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Premium Sachet Water Factory",
      category: "Beverage Production",
      revenue: "$50K-$250K/month",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "African Fashion Marketplace",
      category: "E-Commerce",
      revenue: "$15K-$70K/month",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gray-900 text-white">
      {/* Enhanced particle background */}
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full -z-10 opacity-30"
      />

      {/* Dynamic gradient overlay with animation */}
      <div className="fixed inset-0 -z-10">
        <div className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 opacity-90 transition-all duration-1000 ${isHovering ? 'opacity-95' : 'opacity-90'}`}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.1)_0,_rgba(139,92,246,0)_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section with more visual impact */}
        <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative overflow-hidden">
          {/* Floating elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-600 rounded-full filter blur-[100px] opacity-20"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-600 rounded-full filter blur-[100px] opacity-20"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <div className="relative z-10">
              <div 
                className="inline-block px-4 py-2 mb-6 bg-indigo-900/30 backdrop-blur-sm rounded-full border border-indigo-700 hover:border-pink-500 transition-all duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="text-sm font-medium text-indigo-300 hover:text-pink-300 transition-colors">🚀 The Future of Startups is Here</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient">
                  {typedText}
                  <span className={`typing-cursor ${typingComplete ? 'opacity-0' : 'opacity-100'} ml-1`}>|</span>
                </span>
                <span className="block text-3xl md:text-4xl font-medium text-gray-300 mt-4">
                  Build. Scale. Dominate.
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                Transform your startup idea into a unicorn business with our all-in-one platform. 
                Everything you need from concept to scale - faster than you thought possible.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => navigate('/ideas')}
                  className="relative overflow-hidden group bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
                >
                  <span className="relative z-10 flex items-center">
                    Explore Ideas
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
                <button 
                  className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg shadow hover:shadow-md transition-all duration-300 flex items-center group"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  Watch Demo
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Trusted by section with animation */}
              <div className="mt-16 animate-fadeIn">
                <p className="text-sm text-gray-400 mb-4">TRUSTED BY INNOVATORS AT</p>
                <div className="flex flex-wrap gap-6 items-center">
                  <img src={images.techcorpLogo} alt="TechCorp" className="h-8 opacity-80 hover:opacity-100 transition-opacity hover:scale-105 transform duration-300" />
                  <img src={images.ventureCapitalLogo} alt="Venture Capital" className="h-7 opacity-80 hover:opacity-100 transition-opacity hover:scale-105 transform duration-300" />
                  <img src={images.incubatorLogo} alt="Startup Incubator" className="h-8 opacity-80 hover:opacity-100 transition-opacity hover:scale-105 transform duration-300" />
                </div>
              </div>
            </div>

            {/* Hero image with enhanced floating animation */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-full transform transition-all duration-700 hover:scale-105">
                <img 
                  src={images.heroImage} 
                  alt="Startup team celebrating success" 
                  className="w-full h-auto max-w-xl rounded-2xl shadow-2xl border-4 border-white/10 animate-float"
                />
                <div className="absolute -z-10 -inset-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-500 rounded-full filter blur-[80px] opacity-30 animate-pulse-slow"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-500 rounded-full filter blur-[60px] opacity-30 animate-pulse-slower"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Business Ideas Preview */}
        <section className="py-20">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 bg-indigo-900/30 backdrop-blur-sm rounded-full border border-indigo-700 text-indigo-300 text-sm font-medium">
              POPULAR IDEAS
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
              Trending Business Concepts
            </h2>
            <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
              Explore some of our most successful business ideas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularIdeas.map((idea, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-indigo-500/30"
                onClick={() => navigate('/ideas')}
              >
                <img 
                  src={idea.image} 
                  alt={idea.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                  <span className="absolute top-4 left-4 px-3 py-1 bg-indigo-600/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    {idea.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{idea.title}</h3>
                  <p className="text-indigo-300 font-medium">{idea.revenue}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition-opacity duration-300">
                  <span className="px-4 py-2 bg-white text-indigo-600 rounded-full font-medium">
                    View Details
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('/ideas')}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              Explore All Ideas →
            </button>
          </div>
        </section>

        {/* Stats Section with animated counters */}
        <section className="py-20 my-20 relative overflow-hidden rounded-3xl bg-gray-800/50 backdrop-blur-md border border-gray-700 hover:border-indigo-500 transition-colors duration-500">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-[80px] animate-pulse"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-500 rounded-full filter blur-[80px] animate-pulse-slow"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 group">
                <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r ${stat.color} text-white text-2xl`}>
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 transition-all duration-500">
                  {stat.value}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section with 3D hover effect */}
        <section className="py-20">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 bg-indigo-900/30 backdrop-blur-sm rounded-full border border-indigo-700 text-indigo-300 text-sm font-medium">
              OUR SOLUTIONS
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
              Comprehensive tools designed to accelerate your startup journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-indigo-500/20"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <div className="absolute top-6 right-6 p-3 bg-indigo-600/80 backdrop-blur-sm rounded-lg group-hover:bg-pink-600/80 transition-colors text-white text-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-opacity duration-300 p-6">
                  <p className="text-white text-center text-lg font-medium">
                    {feature.hoverText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section with autoplay */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 mb-4 bg-indigo-900/30 backdrop-blur-sm rounded-full border border-indigo-700 text-indigo-300 text-sm font-medium">
                CLIENT SUCCESS
              </span>
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
                What Our Clients Say
              </h2>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700 relative overflow-hidden transition-all duration-500 hover:border-indigo-500/50">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500 rounded-full filter blur-[80px] animate-pulse"></div>
                <div className="absolute left-0 bottom-0 w-32 h-32 bg-purple-500 rounded-full filter blur-[80px] animate-pulse-slow"></div>
              </div>
              <div className="flex flex-col md:flex-row items-center mb-6 relative z-10">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].author}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white/20 shadow-lg mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-xl">{testimonials[currentTestimonial].author}</h4>
                  <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                  <p className="text-indigo-300 text-sm mt-1">{testimonials[currentTestimonial].company}</p>
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
                    className={`w-3 h-3 mx-1 rounded-full transition-all ${currentTestimonial === index ? 'bg-indigo-400 w-6' : 'bg-gray-600 hover:bg-gray-500'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Enhanced CTA Section */}
        <section className="py-20 text-center relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 my-20 hover:border-indigo-500 transition-colors duration-500">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-1/4 top-0 w-64 h-64 bg-indigo-500 rounded-full filter blur-[100px] animate-pulse"></div>
            <div className="absolute right-1/4 bottom-0 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px] animate-pulse-slow"></div>
          </div>
          <div className="max-w-2xl mx-auto relative z-10 px-4">
            <span className="inline-block px-4 py-2 mb-4 bg-indigo-900/30 backdrop-blur-sm rounded-full border border-indigo-700 text-indigo-300 text-sm font-medium">
              READY TO START?
            </span>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
              Ready to Launch Your Unicorn?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of entrepreneurs who transformed their ideas into successful businesses with our platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate('/signup')}
                className="relative overflow-hidden group bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg flex items-center"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Today
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              <button 
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-medium py-4 px-10 rounded-lg shadow hover:shadow-md transition-all duration-300 flex items-center group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Contact Sales
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="currentColor">
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