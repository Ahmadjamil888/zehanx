
import React from 'react';
import Layout from '@/components/Layout';

const ReactService: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">React Development</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Modern, scalable React applications with cutting-edge features, 
              optimal performance, and exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Service Overview</h2>
              <p className="text-gray-300 mb-6">
                Our React development services leverage the latest ecosystem tools 
                and best practices to build high-performance, maintainable web applications 
                that scale with your business needs.
              </p>
              
              <h3 className="text-xl font-bold text-white mb-4">What's Included</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Custom React application development</li>
                <li>• Component library creation</li>
                <li>• State management implementation</li>
                <li>• Performance optimization</li>
                <li>• Testing and quality assurance</li>
                <li>• Deployment and maintenance</li>
              </ul>
            </div>

            <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Technologies We Use</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1a1f3a]/30 p-4 rounded-[5px] text-center">
                  <h3 className="text-white font-bold mb-2">React 18+</h3>
                  <p className="text-gray-300 text-sm">Latest React features</p>
                </div>
                <div className="bg-[#1a1f3a]/30 p-4 rounded-[5px] text-center">
                  <h3 className="text-white font-bold mb-2">TypeScript</h3>
                  <p className="text-gray-300 text-sm">Type-safe development</p>
                </div>
                <div className="bg-[#1a1f3a]/30 p-4 rounded-[5px] text-center">
                  <h3 className="text-white font-bold mb-2">Tailwind CSS</h3>
                  <p className="text-gray-300 text-sm">Utility-first styling</p>
                </div>
                <div className="bg-[#1a1f3a]/30 p-4 rounded-[5px] text-center">
                  <h3 className="text-white font-bold mb-2">React Query</h3>
                  <p className="text-gray-300 text-sm">Data fetching</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#1a1f3a]/30 backdrop-blur-sm p-6 rounded-[5px] border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">E-commerce Platforms</h3>
                <p className="text-gray-300 text-sm">
                  Feature-rich online stores with cart management, payment integration, 
                  and inventory tracking.
                </p>
              </div>
              
              <div className="bg-[#1a1f3a]/30 backdrop-blur-sm p-6 rounded-[5px] border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">SaaS Dashboards</h3>
                <p className="text-gray-300 text-sm">
                  Complex data visualization dashboards with real-time updates 
                  and interactive analytics.
                </p>
              </div>
              
              <div className="bg-[#1a1f3a]/30 backdrop-blur-sm p-6 rounded-[5px] border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">Corporate Websites</h3>
                <p className="text-gray-300 text-sm">
                  Professional business websites with CMS integration 
                  and content management capabilities.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1f3a]/30 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Example Projects</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1a1f3a]/20 p-6 rounded-[5px] border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">AI Analytics Dashboard</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Real-time analytics platform for AI model performance monitoring 
                  with interactive charts and predictive insights.
                </p>
                <div className="text-xs text-gray-400 space-y-1">
                  <p>• Real-time data visualization</p>
                  <p>• Custom chart components</p>
                  <p>• WebSocket integration</p>
                  <p>• Responsive design</p>
                </div>
              </div>
              
              <div className="bg-[#1a1f3a]/20 p-6 rounded-[5px] border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">E-learning Platform</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Interactive learning management system with video streaming, 
                  progress tracking, and gamification features.
                </p>
                <div className="text-xs text-gray-400 space-y-1">
                  <p>• Video player integration</p>
                  <p>• Progress tracking</p>
                  <p>• User authentication</p>
                  <p>• Mobile optimization</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-[#1a1f3a]/30 backdrop-blur-sm p-12 rounded-[5px] border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your React Application?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's create a modern, scalable React application that delivers 
              exceptional performance and user experience.
            </p>
            <a href="/contact" className="corporate-button text-lg">
              Start Your React Project
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReactService;
