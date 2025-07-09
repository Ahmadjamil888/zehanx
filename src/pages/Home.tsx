
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Brain, Zap, Shield, Users, Award, TrendingUp, Globe, CheckCircle, Star, GitBranch } from 'lucide-react';
import Layout from '@/components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-slide-up">
              <h1 className="text-6xl md:text-8xl font-black text-gradient mb-8 tracking-tight">
                ZehanX Technologies
              </h1>
              <p className="text-xl md:text-3xl text-muted-foreground mb-12 max-w-5xl mx-auto leading-relaxed">
                Pioneering the future of Artificial Intelligence with cutting-edge solutions that transform businesses and accelerate innovation across industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/contact" className="corporate-button text-lg group">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="corporate-button-secondary text-lg">
                  Explore Our Vision
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 section-gradient">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "AI Models Deployed", icon: Brain },
                { number: "100+", label: "Enterprise Clients", icon: Users },
                { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
                { number: "24/7", label: "Expert Support", icon: Award }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-slide-up glass-effect rounded-xl p-8 hover-lift">
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-black text-gradient mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-5xl font-black text-gradient mb-6">Our Core Services</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Comprehensive AI solutions designed to revolutionize your business operations and drive unprecedented growth.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI & Machine Learning",
                  description: "Advanced neural networks, deep learning models, and AI solutions tailored to your business needs with state-of-the-art algorithms.",
                  icon: Brain,
                  features: ["Custom Neural Networks", "Predictive Analytics", "Computer Vision", "Natural Language Processing"],
                  link: "/services/ai/fine-tuning"
                },
                {
                  title: "Web Development",
                  description: "Modern web applications using React, Next.js, and Laravel with responsive design and optimal performance for enterprise-grade solutions.",
                  icon: Code,
                  features: ["React Applications", "Next.js Solutions", "Laravel Backend", "Cloud Integration"],
                  link: "/services/web/react"
                },
                {
                  title: "Custom AI Models",
                  description: "Pre-trained and custom AI models for various applications including computer vision, NLP, and specialized industry solutions.",
                  icon: Zap,
                  features: ["Pre-trained Models", "Custom Training", "Model Optimization", "Deployment Support"],
                  link: "/models/ameenor-ai"
                }
              ].map((service, index) => (
                <div key={index} className="tech-border rounded-xl p-8 hover-lift shadow-tech-lg animate-slide-up">
                  <service.icon className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link} className="text-primary hover:text-primary/80 font-semibold inline-flex items-center group">
                    Explore {service.title}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4 section-gradient">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-5xl font-black text-gradient mb-6">Technology Stack</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Built with cutting-edge technologies and frameworks to ensure scalability, performance, and reliability.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "TensorFlow", category: "AI/ML Framework" },
                { name: "PyTorch", category: "Deep Learning" },
                { name: "React", category: "Frontend" },
                { name: "Next.js", category: "Full-Stack" },
                { name: "Python", category: "Backend" },
                { name: "Laravel", category: "Web Framework" },
                { name: "AWS", category: "Cloud Platform" },
                { name: "Docker", category: "Containerization" }
              ].map((tech, index) => (
                <div key={index} className="glass-effect rounded-lg p-6 text-center hover-lift">
                  <div className="text-lg font-bold text-foreground mb-2">{tech.name}</div>
                  <div className="text-sm text-muted-foreground">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Models */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-5xl font-black text-gradient mb-6">Featured AI Models</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Discover our portfolio of specialized AI models designed for real-world applications and industry-specific challenges.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Crypto AI Predictor",
                  description: "Advanced cryptocurrency price prediction using LSTM networks and market sentiment analysis with real-time data processing.",
                  accuracy: "94.2%",
                  category: "Financial AI",
                  link: "/models/crypto-ai"
                },
                {
                  title: "Real-Time Surveillance",
                  description: "Object detection and tracking system for real-time video surveillance applications with advanced threat detection.",
                  accuracy: "99.1%",
                  category: "Computer Vision",
                  link: "/models/real-time-surveillance"
                },
                {
                  title: "Pneumonia Detection",
                  description: "Medical AI for pneumonia detection from chest X-ray images using convolutional neural networks and medical expertise.",
                  accuracy: "96.8%",
                  category: "Medical AI",
                  link: "/models/pneumonia-detection"
                }
              ].map((model, index) => (
                <div key={index} className="tech-border rounded-xl p-8 hover-lift shadow-tech animate-slide-up">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                      {model.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {model.accuracy}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{model.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{model.description}</p>
                  <Link to={model.link} className="corporate-button text-sm w-full block text-center">
                    View Model Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 px-4 section-gradient">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-5xl font-black text-gradient mb-6">Industry Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Tailored AI solutions for specific industries, addressing unique challenges and unlocking new opportunities.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { industry: "Healthcare", solutions: "Medical Imaging AI, Drug Discovery, Patient Analytics", icon: "🏥" },
                { industry: "Finance", solutions: "Fraud Detection, Risk Assessment, Algorithmic Trading", icon: "💰" },
                { industry: "Retail", solutions: "Recommendation Systems, Inventory Optimization, Customer Analytics", icon: "🛍️" },
                { industry: "Manufacturing", solutions: "Quality Control, Predictive Maintenance, Supply Chain", icon: "🏭" },
                { industry: "Education", solutions: "Personalized Learning, Assessment AI, Content Generation", icon: "🎓" },
                { industry: "Transportation", solutions: "Route Optimization, Autonomous Systems, Fleet Management", icon: "🚗" }
              ].map((solution, index) => (
                <div key={index} className="glass-effect rounded-lg p-8 hover-lift">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{solution.industry}</h3>
                  <p className="text-muted-foreground text-sm">{solution.solutions}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Workflow */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-5xl font-black text-gradient mb-6">Our Development Process</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                A systematic approach to AI development that ensures quality, efficiency, and successful project delivery.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery & Analysis", description: "Understanding your business needs and identifying AI opportunities" },
                { step: "02", title: "Design & Planning", description: "Creating detailed project blueprints and technical specifications" },
                { step: "03", title: "Development & Training", description: "Building and training AI models with rigorous testing protocols" },
                { step: "04", title: "Deployment & Support", description: "Seamless integration and ongoing maintenance for optimal performance" }
              ].map((process, index) => (
                <div key={index} className="text-center animate-slide-up">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-primary font-bold text-xl">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{process.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 px-4 section-gradient">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-5xl font-black text-gradient mb-6">Client Success Stories</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Hear from our clients about how ZehanX Technologies transformed their business with AI solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "ZehanX delivered an AI solution that increased our operational efficiency by 300% and reduced costs significantly.",
                  author: "Sarah Johnson",
                  role: "CTO, TechCorp Industries",
                  rating: 5
                },
                {
                  quote: "The machine learning models developed by ZehanX have revolutionized our customer experience and engagement.",
                  author: "Michael Chen",
                  role: "Director of Innovation, Global Retail",
                  rating: 5
                },
                {
                  quote: "Outstanding expertise in AI development. Their team delivered beyond our expectations with exceptional support.",
                  author: "Emily Rodriguez",
                  role: "VP Engineering, FinanceFlow",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="glass-effect rounded-lg p-8 hover-lift">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership & Integrations */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-5xl font-black text-gradient mb-6">Partnerships & Integrations</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                We work with leading technology partners to deliver comprehensive AI solutions that integrate seamlessly with your existing infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {["AWS", "Google Cloud", "Microsoft Azure", "NVIDIA", "OpenAI", "Hugging Face"].map((partner, index) => (
                <div key={index} className="glass-effect rounded-lg p-6 text-center hover-lift">
                  <div className="text-lg font-bold text-foreground">{partner}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research & Innovation */}
        <section className="py-20 px-4 section-gradient">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-left">
                <h2 className="text-5xl font-black text-gradient mb-6">Research & Innovation</h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Our dedicated R&D team continuously explores emerging AI technologies and methodologies to stay at the forefront of innovation.
                </p>
                <div className="space-y-4">
                  {[
                    "Quantum Machine Learning Research",
                    "Federated Learning Systems",
                    "Explainable AI Development",
                    "Edge AI Optimization"
                  ].map((research, index) => (
                    <div key={index} className="flex items-center">
                      <GitBranch className="w-5 h-5 text-primary mr-3" />
                      <span className="text-foreground">{research}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-slide-right">
                <div className="tech-border rounded-xl p-8 shadow-tech-lg">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Latest Publications</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Advancing Neural Architecture Search", journal: "Nature AI", year: "2024" },
                      { title: "Efficient Transfer Learning Techniques", journal: "IEEE AI", year: "2024" },
                      { title: "Scalable Federated Learning", journal: "JMLR", year: "2024" }
                    ].map((publication, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4">
                        <div className="font-semibold text-foreground">{publication.title}</div>
                        <div className="text-sm text-muted-foreground">{publication.journal} • {publication.year}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-slide-up">
              <h2 className="text-5xl font-black text-gradient mb-8">Ready to Transform Your Business?</h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Join hundreds of companies that have accelerated their growth with our AI solutions. 
                Let's discuss how we can drive your business forward with cutting-edge artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="corporate-button text-lg group">
                  Start Your Project Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="corporate-button-secondary text-lg">
                  Learn More About Us
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
