
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '@/components/Layout';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ReactService: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(heroRef.current?.querySelector('.hero-title'), 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo(heroRef.current?.querySelector('.hero-subtitle'), 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5"
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
              React
              <span className="block text-5xl md:text-7xl font-light text-white/70 mt-4">
                Modern Frontend
              </span>
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Modern, scalable React applications with cutting-edge features, 
              optimal performance, and exceptional user experiences.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted/10">
          <div className="container-professional">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
                Ready to Build Your React App?
              </h2>
              <p className="text-xl text-white/70 mb-12 font-light leading-relaxed">
                Let's create a modern, scalable React application that delivers 
                exceptional performance and user experience.
              </p>
              <a href="/contact" className="professional-button">
                Start Your React Project
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ReactService;
