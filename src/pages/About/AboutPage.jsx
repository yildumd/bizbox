import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  // Image URLs
  const images = {
    teamPhoto: 'https://images.unsplash.com/photo-1571260898934-1df9c31b8a6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    officeSpace: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    founderPhoto: 'https://randomuser.me/api/portraits/men/32.jpg'
  };

  // Team members data
  const teamMembers = [
    {
      name: "Yildum David Jonah",
      role: "CEO & Founder",
      bio: "Serial entrepreneur with 3 successful exits",
      avatar: "https://res.cloudinary.com/dyweczdw2/image/upload/v1751379847/My_Profile_Pic_s7lvio.png"
    },
    {
      name: "David Hills",
      role: "CTO",
      bio: "Former tech lead at Fortune 500 company",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "James Wilson",
      role: "Head of Product",
      bio: "Product visionary with 15+ years experience",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      name: "Sarah Chen",
      role: "Growth Lead",
      bio: "Scaled multiple startups to unicorn status",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  // Floating particles animation (same as homepage)
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
        <section className="min-h-[60vh] flex flex-col justify-center pt-24 pb-16 relative">
          <div className="text-center">
            <span className="inline-block px-4 py-2 mb-4 bg-indigo-900/30 backdrop-blur-sm rounded-full border border-indigo-700 text-indigo-300 text-sm font-medium">
              OUR STORY
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Building the Future
              </span>
              <span className="block text-3xl md:text-4xl font-medium text-gray-300 mt-4">
                of Startup Innovation
              </span>
            </h1>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 mb-4 bg-indigo-900/30 backdrop-blur-sm rounded-full border border-indigo-700 text-indigo-300 text-sm font-medium">
              OUR MISSION
            </span>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
              Empowering Entrepreneurs Worldwide
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              We believe every great idea deserves the chance to become a reality. Our platform removes the barriers between vision and execution, providing the tools, resources, and community needed to build successful businesses.
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Founded in 2018, we've helped over 10,000 startups launch and scale their operations, collectively raising more than $2.4 billion in funding.
            </p>
            <button 
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Join Our Community
            </button>
          </div>
          <div className="relative">
            <img 
              src={images.officeSpace} 
              alt="Our office space" 
              className="w-full rounded-2xl shadow-2xl border-4 border-white/10"
            />
            <div className="absolute -z-10 -inset-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-20 blur-2xl"></div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 bg-indigo-900/30 backdrop-blur-sm rounded-full border border-indigo-700 text-indigo-300 text-sm font-medium">
              OUR TEAM
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
              Meet The Visionaries
            </h2>
            <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
              A diverse team of entrepreneurs, engineers, and growth experts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-md border border-gray-700 p-6 text-center transition-all duration-500 hover:border-indigo-500/50 hover:-translate-y-2">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-white/20 shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-indigo-500/50 transition-all duration-500"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-indigo-400 mb-3">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 bg-indigo-900/30 backdrop-blur-sm rounded-full border border-indigo-700 text-indigo-300 text-sm font-medium">
              OUR VALUES
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-500">
              <div className="w-14 h-14 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-400">We constantly push boundaries to deliver cutting-edge solutions that give our users a competitive edge.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-500">
              <div className="w-14 h-14 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Integrity</h3>
              <p className="text-gray-400">We operate with transparency and honesty, building trust with our community through ethical practices.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-500">
              <div className="w-14 h-14 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Community</h3>
              <p className="text-gray-400">We foster collaboration and knowledge sharing, believing that together we can achieve more.</p>
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
            <span className="inline-block px-4 py-2 mb-4 bg-indigo-900/30 backdrop-blur-sm rounded-full border border-indigo-700 text-indigo-300 text-sm font-medium">
              JOIN US
            </span>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you're an entrepreneur, developer, or investor, we have a place for you in our growing community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate('/signup')}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
              >
                Get Started
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-medium py-4 px-10 rounded-lg shadow hover:shadow-md transition-all duration-300 text-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;