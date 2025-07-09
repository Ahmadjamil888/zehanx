
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              ZehanX Technologies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Cutting-edge AI solutions provider offering full-spectrum services in 
              Artificial Intelligence, Machine Learning, Web Development, and Neural Networks.
            </p>
            <div className="space-x-4">
              <Link to="/contact" className="corporate-button text-lg">
                Get Started
              </Link>
              <Link to="/about" className="border border-white text-white px-6 py-3 rounded-[5px] font-medium hover:bg-white hover:text-[#0a0f3c] transition-all duration-200">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning</h3>
                <p className="text-gray-300 mb-6">
                  Advanced neural networks, deep learning models, and AI solutions tailored to your business needs.
                </p>
                <Link to="/services/ai/fine-tuning" className="text-white hover:text-gray-300 font-medium">
                  Explore AI Services →
                </Link>
              </div>
              <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
                <p className="text-gray-300 mb-6">
                  Modern web applications using React, Next.js, and Laravel with responsive design and optimal performance.
                </p>
                <Link to="/services/web/react" className="text-white hover:text-gray-300 font-medium">
                  View Web Services →
                </Link>
              </div>
              <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Custom Models</h3>
                <p className="text-gray-300 mb-6">
                  Pre-trained and custom AI models for various applications including computer vision and NLP.
                </p>
                <Link to="/models/ameenor-ai" className="text-white hover:text-gray-300 font-medium">
                  Browse Models →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Models */}
        <section className="py-16 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Featured AI Models</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#1a1f3a]/30 backdrop-blur-sm p-6 rounded-[5px] border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">Crypto AI Predictor</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Advanced cryptocurrency price prediction using LSTM networks and market sentiment analysis.
                </p>
                <Link to="/models/crypto-ai" className="corporate-button text-sm">
                  View Model
                </Link>
              </div>
              <div className="bg-[#1a1f3a]/30 backdrop-blur-sm p-6 rounded-[5px] border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">Real-Time Surveillance</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Object detection and tracking system for real-time video surveillance applications.
                </p>
                <Link to="/models/real-time-surveillance" className="corporate-button text-sm">
                  View Model
                </Link>
              </div>
              <div className="bg-[#1a1f3a]/30 backdrop-blur-sm p-6 rounded-[5px] border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">Pneumonia Detection</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Medical AI for pneumonia detection from chest X-ray images using convolutional neural networks.
                </p>
                <Link to="/models/pneumonia-detection" className="corporate-button text-sm">
                  View Model
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can drive your business forward.
            </p>
            <Link to="/contact" className="corporate-button text-lg">
              Contact Us Today
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
