
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '@/components/Layout';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CNN: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const useCasesRef = useRef<HTMLDivElement>(null);

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
              CNN
              <span className="block text-5xl md:text-7xl font-light text-white/70 mt-4">
                Computer Vision
              </span>
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Advanced Convolutional Neural Networks for computer vision, image classification, 
              object detection, and visual pattern recognition solutions.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="section-padding bg-muted/10">
          <div className="container-professional">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                CNN Capabilities
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Image Classification",
                  description: "Accurate identification and categorization of objects in images with state-of-the-art precision.",
                  accuracy: "98.5%"
                },
                {
                  title: "Object Detection",
                  description: "Real-time detection and localization of multiple objects within complex scenes.",
                  accuracy: "96.8%"
                },
                {
                  title: "Medical Imaging",
                  description: "Specialized models for medical diagnosis including X-ray, MRI, and CT scan analysis.",
                  accuracy: "97.2%"
                },
                {
                  title: "Quality Control",
                  description: "Automated defect detection for manufacturing and production line quality assurance.",
                  accuracy: "99.1%"
                },
                {
                  title: "Facial Recognition",
                  description: "Advanced biometric identification systems for security and access control applications.",
                  accuracy: "99.3%"
                },
                {
                  title: "Satellite Imagery",
                  description: "Analysis of geospatial data for agriculture, urban planning, and environmental monitoring.",
                  accuracy: "95.7%"
                }
              ].map((feature, index) => (
                <div key={index} className="feature-card group">
                  <div className="h-full p-8 glass-card rounded-2xl transition-all duration-500 hover:scale-105">
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                        <div className="w-6 h-6 bg-white/50 rounded-full"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-4">{feature.description}</p>
                      <div className="text-xs font-medium text-white/40 uppercase tracking-wider">
                        Accuracy: {feature.accuracy}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section ref={useCasesRef} className="section-padding">
          <div className="container-professional">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Industry Applications
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                {[
                  {
                    industry: "Healthcare",
                    applications: ["Medical imaging analysis", "Disease diagnosis", "Treatment planning", "Drug discovery"]
                  },
                  {
                    industry: "Manufacturing",
                    applications: ["Quality control", "Defect detection", "Process optimization", "Predictive maintenance"]
                  },
                  {
                    industry: "Security",
                    applications: ["Surveillance systems", "Facial recognition", "Threat detection", "Access control"]
                  },
                  {
                    industry: "Retail",
                    applications: ["Product recognition", "Inventory management", "Customer analytics", "Visual search"]
                  }
                ].map((useCase, index) => (
                  <div key={index} className="glass-card p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-white mb-6">{useCase.industry}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {useCase.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                          <div className="w-2 h-2 bg-white/50 rounded-full flex-shrink-0"></div>
                          <span className="text-white/70 text-sm">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <div className="glass-card p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Project Examples</h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-white/20 pl-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Medical X-ray Analysis</h4>
                      <p className="text-white/60 text-sm mb-3">
                        CNN model for automated pneumonia detection with 96.2% accuracy, 
                        deployed in clinical settings.
                      </p>
                      <div className="flex space-x-4 text-xs text-white/40">
                        <span>Dataset: 10,000+ images</span>
                        <span>Accuracy: 96.2%</span>
                        <span>Status: Production</span>
                      </div>
                    </div>
                    
                    <div className="border-l-2 border-white/20 pl-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Manufacturing QC</h4>
                      <p className="text-white/60 text-sm mb-3">
                        Real-time defect detection system reducing quality control costs by 40%.
                      </p>
                      <div className="flex space-x-4 text-xs text-white/40">
                        <span>Processing: Real-time</span>
                        <span>Precision: 98.7%</span>
                        <span>Cost Reduction: 40%</span>
                      </div>
                    </div>
                    
                    <div className="border-l-2 border-white/20 pl-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Security Surveillance</h4>
                      <p className="text-white/60 text-sm mb-3">
                        Multi-camera system with person detection and behavior analysis.
                      </p>
                      <div className="flex space-x-4 text-xs text-white/40">
                        <span>Cameras: Multi-stream</span>
                        <span>Detection: Real-time</span>
                        <span>Alerts: Automated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="section-padding bg-muted/10">
          <div className="container-professional">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Technical Specifications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Model Architectures", items: ["ResNet", "VGG", "Inception", "EfficientNet"] },
                { title: "Frameworks", items: ["TensorFlow", "PyTorch", "Keras", "OpenCV"] },
                { title: "Deployment", items: ["Cloud", "Edge", "Mobile", "Real-time"] },
                { title: "Data Formats", items: ["JPEG", "PNG", "DICOM", "Video Streams"] },
                { title: "Performance", items: ["GPU Optimized", "Batch Processing", "Auto-scaling", "Load Balancing"] },
                { title: "Integration", items: ["REST APIs", "Webhooks", "SDK", "Custom Solutions"] }
              ].map((spec, index) => (
                <div key={index} className="glass-card p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-white mb-4">{spec.title}</h3>
                  <div className="space-y-2">
                    {spec.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                        <span className="text-white/70 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-professional">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
                Ready to Implement CNN?
              </h2>
              <p className="text-xl text-white/70 mb-12 font-light leading-relaxed">
                Let our experts design and implement custom CNN architectures 
                that solve your specific computer vision challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact" className="professional-button">
                  Start Your Project
                </a>
                <a href="/about" className="professional-button-outline">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CNN;
