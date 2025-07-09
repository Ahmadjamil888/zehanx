
import React from 'react';
import Layout from '@/components/Layout';

const NextJSService: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">Next.js Development</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Full-stack Next.js applications with server-side rendering, 
              static generation, and optimized performance for production.
            </p>
          </div>

          <div className="text-center bg-[#1a1f3a]/30 backdrop-blur-sm p-12 rounded-[5px] border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build with Next.js?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create lightning-fast, SEO-optimized web applications with the power 
              of Next.js and modern development practices.
            </p>
            <a href="/contact" className="corporate-button text-lg">
              Start Next.js Project
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NextJSService;
