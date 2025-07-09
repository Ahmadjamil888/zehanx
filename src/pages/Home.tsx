
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '@/components/Layout';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const modelsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero animations
    tl.fromTo(heroRef.current?.querySelector('.hero-title'), 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo(heroRef.current?.querySelector('.hero-subtitle'), 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5"
    )
    .fromTo(heroRef.current?.querySelector('.hero-cta'), 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.3"
    );

    // Services animation
    gsap.fromTo(servicesRef.current?.querySelectorAll('.service-card'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Models animation
    gsap.fromTo(modelsRef.current?.querySelectorAll('.model-card'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: modelsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Stats counter animation
    gsap.fromTo(statsRef.current?.querySelectorAll('.stat-number'),
      { innerText: 0 },
      {
        innerText: (i, target) => target.getAttribute('data-value'),
        duration: 2,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
          
          <div className="relative z-10 container-professional text-center">
            <h1 className="hero-title text-7xl md:text-9xl font-black text-white mb-8 tracking-tight">
              ZehanX
              <span className="block text-5xl md:text-7xl font-light text-white/70 mt-4">
                Technologies
              </span>
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Pioneering AI solutions and cutting-edge web development for the future. 
              We transform complex challenges into intelligent, scalable solutions.
            </p>
            
            <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="professional-button">
                Start Your Project
              </Link>
              <Link to="/about" className="professional-button-outline">
                Learn More
              </Link>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-500"></div>
        </section>

        {/* Services Overview */}
        <section ref={servicesRef} className="section-padding bg-muted/10">
          <div className="container-professional">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Our Services
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                Comprehensive AI and development solutions tailored to your business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="service-card group">
                <div className="h-full p-8 glass-card rounded-2xl transition-all duration-500 hover:scale-105">
                  <h3 className="text-3xl font-bold text-white mb-6">AI Solutions</h3>
                  <p className="text-white/70 text-lg mb-8 leading-relaxed">
                    Advanced machine learning models, neural networks, and intelligent automation systems.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <Link to="/services/ai/cnn" className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                      <div className="text-white font-semibold mb-2">CNN</div>
                      <div className="text-white/50 text-sm">Computer Vision</div>
                    </Link>
                    <Link to="/services/ai/lstm" className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                      <div className="text-white font-semibold mb-2">LSTM</div>
                      <div className="text-white/50 text-sm">Time Series</div>
                    </Link>
                    <Link to="/services/ai/generative-ai" className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                      <div className="text-white font-semibold mb-2">Generative AI</div>
                      <div className="text-white/50 text-sm">Content Creation</div>
                    </Link>
                    <Link to="/services/ai/chatbots" className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                      <div className="text-white font-semibold mb-2">Chatbots</div>
                      <div className="text-white/50 text-sm">Conversational AI</div>
                    </Link>
                  </div>
                  <Link to="/services/ai/cnn" className="professional-button-outline w-full">
                    Explore AI Services
                  </Link>
                </div>
              </div>

              <div className="service-card group">
                <div className="h-full p-8 glass-card rounded-2xl transition-all duration-500 hover:scale-105">
                  <h3 className="text-3xl font-bold text-white mb-6">Web Development</h3>
                  <p className="text-white/70 text-lg mb-8 leading-relaxed">
                    Modern, scalable web applications using cutting-edge frameworks and technologies.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <Link to="/services/web/react" className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                      <div className="text-white font-semibold mb-2">React</div>
                      <div className="text-white/50 text-sm">Frontend</div>
                    </Link>
                    <Link to="/services/web/nextjs" className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                      <div className="text-white font-semibold mb-2">Next.js</div>
                      <div className="text-white/50 text-sm">Full-stack</div>
                    </Link>
                    <Link to="/services/web/laravel" className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                      <div className="text-white font-semibold mb-2">Laravel</div>
                      <div className="text-white/50 text-sm">Backend</div>
                    </Link>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <div className="text-white font-semibold mb-2">More</div>
                      <div className="text-white/50 text-sm">Coming Soon</div>
                    </div>
                  </div>
                  <Link to="/services/web/react" className="professional-button-outline w-full">
                    Explore Web Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Models */}
        <section ref={modelsRef} className="section-padding">
          <div className="container-professional">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Featured Models
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                Explore our cutting-edge AI models and applications in action.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AmeenorAI",
                  description: "Advanced AI assistant with natural language processing capabilities",
                  link: "/models/ameenor-ai",
                  tag: "NLP"
                },
                {
                  title: "CryptoAI",
                  description: "Cryptocurrency market analysis and prediction model",
                  link: "/models/crypto-ai",
                  tag: "Finance"
                },
                {
                  title: "LSTM Time Series",
                  description: "Time series forecasting using Long Short-Term Memory networks",
                  link: "/models/lstm-time-series",
                  tag: "Forecasting"
                },
                {
                  title: "Real-time Surveillance",
                  description: "Computer vision system for security and monitoring applications",
                  link: "/models/real-time-surveillance",
                  tag: "Security"
                },
                {
                  title: "A* Pathfinder",
                  description: "Intelligent pathfinding algorithm for navigation systems",
                  link: "/models/astar-pathfinder",
                  tag: "Navigation"
                },
                {
                  title: "Pneumonia Detection",
                  description: "Medical imaging AI for chest X-ray analysis and diagnosis",
                  link: "/models/pneumonia-detection",
                  tag: "Healthcare"
                }
              ].map((model, index) => (
                <div key={index} className="model-card group">
                  <Link to={model.link} className="block h-full">
                    <div className="h-full p-6 glass-card rounded-2xl transition-all duration-500 hover:scale-105 hover:bg-white/5">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-white/70 text-sm font-medium">
                          {model.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{model.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-4">{model.description}</p>
                      <div className="mt-auto">
                        <span className="text-white/40 text-xs uppercase tracking-wider">
                          View Model →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section ref={statsRef} className="section-padding bg-muted/10">
          <div className="container-professional">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: 500, suffix: "+", label: "Projects Delivered", value: "500" },
                { number: 99, suffix: "%", label: "Client Satisfaction", value: "99" },
                { number: 50, suffix: "+", label: "AI Models Deployed", value: "50" },
                { number: 24, suffix: "/7", label: "Support Available", value: "24" }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="p-8 glass-card rounded-2xl transition-all duration-300 hover:scale-105">
                    <div className="text-4xl md:text-5xl font-black text-white mb-2">
                      <span className="stat-number" data-value={stat.number}>0</span>
                      <span className="text-white/60">{stat.suffix}</span>
                    </div>
                    <div className="text-white/60 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section ref={testimonialsRef} className="section-padding">
          <div className="container-professional">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Client Success Stories
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                See how we've transformed businesses with our AI and development expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "ZehanX Technologies delivered an AI solution that increased our operational efficiency by 300%. Their expertise is unmatched.",
                  author: "Sarah Chen",
                  role: "CTO, TechFlow Solutions",
                  company: "TechFlow",
                  rating: 5
                },
                {
                  quote: "The machine learning model they built for us processes millions of transactions daily with 99.9% accuracy.",
                  author: "Michael Rodriguez",
                  role: "VP Engineering, DataSync",
                  company: "DataSync",
                  rating: 5
                },
                {
                  quote: "Their web development team created a platform that scales seamlessly and handles our growing user base effortlessly.",
                  author: "Emily Johnson",
                  role: "Product Manager, InnovateLab",
                  company: "InnovateLab",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="group">
                  <div className="h-full p-8 glass-card rounded-2xl transition-all duration-500 hover:scale-105">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-white/30 rounded-full mr-1"></div>
                      ))}
                    </div>
                    <blockquote className="text-white/80 text-sm leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t border-white/10 pt-4">
                      <div className="font-semibold text-white text-sm">{testimonial.author}</div>
                      <div className="text-white/50 text-xs">{testimonial.role}</div>
                      <div className="text-white/30 text-xs mt-1">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="section-padding bg-muted/10">
          <div className="container-professional">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Technology Stack
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                We use cutting-edge technologies to build robust, scalable solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "Python", "TensorFlow", "React", "Next.js", 
                "Laravel", "Node.js", "AWS", "Docker"
              ].map((tech, index) => (
                <div key={index} className="group">
                  <div className="p-6 glass-card rounded-xl text-center transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-white/10 rounded-lg mx-auto mb-3 group-hover:bg-white/20 transition-colors"></div>
                    <div className="text-white text-sm font-medium">{tech}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding">
          <div className="container-professional">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
                Ready to Transform?
              </h2>
              <p className="text-xl text-white/70 mb-12 font-light leading-relaxed">
                Let's discuss your project and create something extraordinary together. 
                Our team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="professional-button">
                  Start Your Project
                </Link>
                <Link to="/about" className="professional-button-outline">
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
