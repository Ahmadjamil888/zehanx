
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '@/components/Layout';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FineTuning: React.FC = () => {
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
              AI Model
              <span className="block text-5xl md:text-7xl font-light text-white/70 mt-4">
                Fine-Tuning
              </span>
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Custom fine-tuning services for pre-trained AI models to adapt them 
              to your specific domain and business requirements.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted/10">
          <div className="container-professional">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
                Ready to Fine-Tune Your AI Models?
              </h2>
              <p className="text-xl text-white/70 mb-12 font-light leading-relaxed">
                Let our experts optimize pre-trained models for your specific use case 
                and achieve superior performance on your data.
              </p>
              <a href="/contact" className="professional-button">
                Start Fine-Tuning Project
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FineTuning;
