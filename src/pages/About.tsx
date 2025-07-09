
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '@/components/Layout';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const About: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(heroRef.current?.querySelector('.about-title'), 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo(heroRef.current?.querySelector('.about-content'), 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5"
    );

    gsap.fromTo(teamRef.current?.querySelectorAll('.team-card'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: teamRef.current,
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
            <h1 className="about-title text-7xl md:text-9xl font-black text-white mb-8 tracking-tight">
              About
              <span className="block text-5xl md:text-7xl font-light text-white/70 mt-4">
                ZehanX Technologies
              </span>
            </h1>
            
            <div className="about-content max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed font-light">
                We are a cutting-edge technology company specializing in artificial intelligence 
                and modern web development. Our mission is to transform complex challenges into 
                intelligent, scalable solutions that drive business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="section-padding bg-muted/10">
          <div className="container-professional">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
                  Our Story
                </h2>
                <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                  <p>
                    Founded with a vision to bridge the gap between complex AI technologies 
                    and practical business solutions, ZehanX Technologies has become a trusted 
                    partner for companies seeking digital transformation.
                  </p>
                  <p>
                    Our team of experts combines deep technical knowledge with industry experience 
                    to deliver solutions that not only meet current needs but also scale for future growth.
                  </p>
                  <p>
                    From machine learning models that process millions of data points to elegant 
                    web applications that enhance user experience, we pride ourselves on delivering 
                    excellence in every project.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square glass-card rounded-3xl p-8 backdrop-blur-sm">
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl"></div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Innovation First</h3>
                      <p className="text-white/60">
                        We believe in pushing the boundaries of what's possible with technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={valuesRef} className="section-padding">
          <div className="container-professional">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Our Values
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                The principles that guide everything we do at ZehanX Technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description: "We strive for perfection in every line of code, every model we build, and every solution we deliver."
                },
                {
                  title: "Innovation",
                  description: "We embrace cutting-edge technologies and methodologies to solve complex challenges creatively."
                },
                {
                  title: "Partnership",
                  description: "We work closely with our clients as trusted partners, understanding their vision and goals."
                },
                {
                  title: "Transparency",
                  description: "We believe in clear communication, honest timelines, and keeping our clients informed throughout the process."
                },
                {
                  title: "Scalability",
                  description: "We build solutions that grow with your business, ensuring long-term value and sustainability."
                },
                {
                  title: "Security",
                  description: "We prioritize data security and privacy in all our solutions, following industry best practices."
                }
              ].map((value, index) => (
                <div key={index} className="group">
                  <div className="h-full p-8 glass-card rounded-2xl transition-all duration-500 hover:scale-105">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                      <div className="w-6 h-6 bg-white/50 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-white/60 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section ref={teamRef} className="section-padding bg-muted/10">
          <div className="container-professional">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Our Team
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                Meet the experts behind ZehanX Technologies' innovative solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Chen",
                  role: "Chief Technology Officer",
                  specialization: "AI/ML Architecture",
                  description: "10+ years in machine learning and neural network design."
                },
                {
                  name: "Sarah Martinez",
                  role: "Lead AI Engineer",
                  specialization: "Deep Learning",
                  description: "Expert in computer vision and natural language processing."
                },
                {
                  name: "David Kim",
                  role: "Senior Full-Stack Developer",
                  specialization: "Web Development",
                  description: "Specialist in React, Node.js, and cloud architecture."
                }
              ].map((member, index) => (
                <div key={index} className="team-card group">
                  <div className="h-full p-8 glass-card rounded-2xl transition-all duration-500 hover:scale-105">
                    <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 text-center">{member.name}</h3>
                    <div className="text-white/60 text-sm mb-2 text-center">{member.role}</div>
                    <div className="text-white/40 text-xs mb-4 text-center">{member.specialization}</div>
                    <p className="text-white/60 text-sm leading-relaxed text-center">{member.description}</p>
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
                Let's Work Together
              </h2>
              <p className="text-xl text-white/70 mb-12 font-light leading-relaxed">
                Ready to transform your business with AI and cutting-edge web development? 
                We'd love to hear about your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact" className="professional-button">
                  Get In Touch
                </a>
                <a href="/" className="professional-button-outline">
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
