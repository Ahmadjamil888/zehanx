
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Layout from '@/components/Layout';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(heroRef.current?.querySelector('.contact-title'), 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo(heroRef.current?.querySelector('.contact-subtitle'), 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5"
    )
    .fromTo(formRef.current, 
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.3"
    );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      console.error('Contact form error:', err);
      toast({
        title: "Error sending message",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
          
          <div className="relative z-10 container-professional">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="contact-title text-7xl md:text-9xl font-black text-white mb-8 tracking-tight">
                  Contact
                  <span className="block text-5xl md:text-7xl font-light text-white/70 mt-4">
                    Us
                  </span>
                </h1>
                
                <p className="contact-subtitle text-xl md:text-2xl text-white/80 mb-12 leading-relaxed font-light">
                  Ready to transform your business with AI? Let's discuss your project 
                  and create something extraordinary together.
                </p>

                <div className="space-y-8">
                  <div className="glass-card p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-2">AI Solutions</h3>
                    <p className="text-white/70">
                      Custom machine learning models, neural networks, and AI integrations.
                    </p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
                    <p className="text-white/70">
                      Modern web applications using React, Next.js, and Laravel frameworks.
                    </p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-2">Consulting</h3>
                    <p className="text-white/70">
                      Strategic AI consulting and technology implementation guidance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div ref={formRef} className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="professional-input w-full"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="professional-input w-full"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="professional-input w-full resize-none"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="professional-button w-full"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="section-padding bg-muted/10">
          <div className="container-professional">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Why Choose ZehanX?
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "24/7", label: "Support Available", description: "Round-the-clock assistance" },
                { number: "99%", label: "Client Satisfaction", description: "Proven track record" },
                { number: "48h", label: "Response Time", description: "Quick project initiation" },
                { number: "500+", label: "Projects Delivered", description: "Extensive experience" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-black text-white mb-2">{item.number}</div>
                    <div className="text-white/80 font-semibold mb-2">{item.label}</div>
                    <div className="text-white/60 text-sm">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
