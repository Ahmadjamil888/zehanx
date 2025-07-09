
import React, { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const LaravelService: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

    // Features animation on scroll
    gsap.fromTo(featuresRef.current?.querySelectorAll('.feature-card'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
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
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="hero-title text-7xl md:text-9xl font-black text-white mb-8 tracking-tight">
              Laravel
              <span className="block text-5xl md:text-7xl font-light text-white/70 mt-4">
                Backend Excellence
              </span>
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Build robust, scalable backend systems with Laravel's elegant syntax and comprehensive feature set. 
              From APIs to complex business logic, we deliver enterprise-grade solutions.
            </p>
            
            <div className="hero-cta">
              <a href="/contact" className="inline-flex items-center px-12 py-4 bg-white text-background font-semibold rounded-full transition-all duration-300 hover:bg-white/90 hover:scale-105 shadow-2xl">
                Start Your Laravel Project
              </a>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-500"></div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="py-32 px-4 bg-muted/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Why Choose Laravel?
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                Discover the powerful features that make Laravel the preferred choice for modern web applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Elegant Syntax",
                  description: "Clean, expressive code that makes development a joy. Laravel's syntax is designed for developer happiness and productivity.",
                  metric: "90% faster development"
                },
                {
                  title: "Robust Security",
                  description: "Built-in protection against common vulnerabilities. CSRF protection, authentication, and authorization out of the box.",
                  metric: "99.9% security rating"
                },
                {
                  title: "Scalable Architecture",
                  description: "Handle millions of requests with Laravel's scalable architecture. From startups to enterprise-level applications.",
                  metric: "10M+ requests/day"
                },
                {
                  title: "Database Management",
                  description: "Eloquent ORM makes database operations intuitive. Migrations, seeders, and query builder included.",
                  metric: "5x faster queries"
                },
                {
                  title: "API Development",
                  description: "Build RESTful APIs quickly with Laravel Sanctum and Passport. Perfect for mobile and SPA applications.",
                  metric: "RESTful compliance"
                },
                {
                  title: "Real-time Features",
                  description: "WebSocket support, broadcasting, and real-time notifications. Keep your users engaged with live updates.",
                  metric: "Real-time sync"
                }
              ].map((feature, index) => (
                <div key={index} className="feature-card group">
                  <div className="h-full p-8 bg-card/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-500 hover:bg-white/5 hover:border-white/20 hover:scale-105">
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                        <div className="w-6 h-6 bg-white/50 rounded-full"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-4">{feature.description}</p>
                      <div className="text-xs font-medium text-white/40 uppercase tracking-wider">
                        {feature.metric}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: 200, suffix: "+", label: "Laravel Projects Delivered", value: "200" },
                { number: 99, suffix: "%", label: "Client Satisfaction Rate", value: "99" },
                { number: 24, suffix: "/7", label: "Support & Maintenance", value: "24" },
                { number: 5, suffix: "★", label: "Average Client Rating", value: "5" }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="p-8 bg-card/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:border-white/20">
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

        {/* Services Breakdown */}
        <section className="py-32 px-4 bg-muted/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Our Laravel Services
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                {[
                  {
                    title: "Custom Web Applications",
                    description: "Full-stack Laravel applications tailored to your business needs with modern UI/UX design.",
                  },
                  {
                    title: "API Development",
                    description: "RESTful and GraphQL APIs with comprehensive documentation and testing suites.",
                  },
                  {
                    title: "E-commerce Solutions",
                    description: "Scalable online stores with payment integration, inventory management, and analytics.",
                  },
                  {
                    title: "Enterprise Systems",
                    description: "Complex business applications with workflow automation and advanced reporting.",
                  }
                ].map((service, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-4 p-6 rounded-2xl transition-all duration-300 hover:bg-white/5">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-white/20 transition-colors">
                        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-white/60 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl"></div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Laravel Expertise</h3>
                      <p className="text-white/60">
                        Years of experience building enterprise-grade applications with Laravel framework.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section ref={testimonialsRef} className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Client Success Stories
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                See how our Laravel expertise has transformed businesses across industries.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The Laravel application ZehanX built for us handles over 100,000 users daily with zero downtime. Their expertise is unmatched.",
                  author: "Sarah Martinez",
                  role: "CTO, TechFlow Solutions",
                  company: "TechFlow",
                  rating: 5
                },
                {
                  quote: "Our e-commerce platform built with Laravel has increased sales by 250%. The scalability and performance are incredible.",
                  author: "David Kim",
                  role: "Founder, RetailPro",
                  company: "RetailPro",
                  rating: 5
                },
                {
                  quote: "The API architecture they designed is robust and well-documented. Integration was seamless across all our platforms.",
                  author: "Michael Thompson",
                  role: "Lead Developer, DataSync",
                  company: "DataSync",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="group">
                  <div className="h-full p-8 bg-card/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-500 hover:bg-white/5 hover:border-white/20 hover:scale-105">
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
        <section className="py-32 px-4 bg-muted/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Technology Stack
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "Laravel 10", "PHP 8.2", "MySQL", "PostgreSQL", 
                "Redis", "Docker", "AWS", "Nginx"
              ].map((tech, index) => (
                <div key={index} className="group">
                  <div className="p-6 bg-card/5 backdrop-blur-sm border border-white/10 rounded-xl text-center transition-all duration-300 hover:bg-white/5 hover:border-white/20 hover:scale-105">
                    <div className="w-12 h-12 bg-white/10 rounded-lg mx-auto mb-3 group-hover:bg-white/20 transition-colors"></div>
                    <div className="text-white text-sm font-medium">{tech}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Development Process
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Requirements Analysis", description: "Understanding your business logic and technical requirements" },
                { step: "02", title: "Architecture Design", description: "Designing scalable and maintainable application structure" },
                { step: "03", title: "Development & Testing", description: "Agile development with comprehensive testing protocols" },
                { step: "04", title: "Deployment & Support", description: "Seamless deployment with ongoing maintenance and support" }
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 bg-muted/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Ready to Build?
            </h2>
            <p className="text-xl text-white/70 mb-12 font-light leading-relaxed">
              Let's discuss your Laravel project requirements and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="inline-flex items-center px-12 py-4 bg-white text-background font-semibold rounded-full transition-all duration-300 hover:bg-white/90 hover:scale-105 shadow-2xl">
                Start Your Project
              </a>
              <a href="/about" className="inline-flex items-center px-12 py-4 border-2 border-white/20 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/5 hover:border-white/30">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LaravelService;
