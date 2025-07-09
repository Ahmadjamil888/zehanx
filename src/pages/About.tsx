
import React from 'react';
import Layout from '@/components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">About ZehanX Technologies</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We are a cutting-edge AI solutions provider dedicated to transforming businesses 
              through innovative artificial intelligence, machine learning, and web development services.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                To democratize artificial intelligence and make cutting-edge AI solutions accessible 
                to businesses of all sizes. We believe that AI should enhance human capabilities 
                and drive meaningful innovation across industries.
              </p>
              <p className="text-gray-300">
                Our team of experts combines deep technical knowledge with practical business 
                understanding to deliver solutions that create real value for our clients.
              </p>
            </div>
            
            <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 mb-4">
                To be the leading AI technology partner that empowers organizations to harness 
                the full potential of artificial intelligence and machine learning.
              </p>
              <p className="text-gray-300">
                We envision a future where AI seamlessly integrates with human intelligence 
                to solve complex problems and create unprecedented opportunities for growth and innovation.
              </p>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#1a1f3a]/30 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-4">Artificial Intelligence</h3>
                  <p className="text-gray-300">
                    Advanced neural networks, deep learning models, computer vision, 
                    natural language processing, and predictive analytics.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-[#1a1f3a]/30 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-4">Machine Learning</h3>
                  <p className="text-gray-300">
                    Custom ML models, time series forecasting, classification, 
                    regression analysis, and automated machine learning pipelines.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-[#1a1f3a]/30 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
                  <p className="text-gray-300">
                    Modern web applications using React, Next.js, Laravel, 
                    and cloud-native architectures for scalable solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose ZehanX?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#1a1f3a]/20 backdrop-blur-sm p-6 rounded-[5px] border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                  <p className="text-gray-300 text-sm">
                    Experienced AI researchers and developers with proven track records.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-[#1a1f3a]/20 backdrop-blur-sm p-6 rounded-[5px] border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
                  <p className="text-gray-300 text-sm">
                    Tailored AI solutions designed specifically for your business needs.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-[#1a1f3a]/20 backdrop-blur-sm p-6 rounded-[5px] border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">Cutting-Edge Tech</h3>
                  <p className="text-gray-300 text-sm">
                    Latest AI technologies and frameworks for maximum performance.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-[#1a1f3a]/20 backdrop-blur-sm p-6 rounded-[5px] border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">End-to-End Support</h3>
                  <p className="text-gray-300 text-sm">
                    From concept to deployment and ongoing maintenance support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-[#1a1f3a]/30 backdrop-blur-sm p-12 rounded-[5px] border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your AI Journey?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how ZehanX Technologies can help transform your business 
              with cutting-edge AI solutions tailored to your specific needs.
            </p>
            <a href="/contact" className="corporate-button text-lg">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
