
import React from 'react';
import Layout from '@/components/Layout';

const LaravelService: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">Laravel Development</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Robust Laravel backend applications with APIs, databases, 
              authentication, and scalable architecture solutions.
            </p>
          </div>

          <div className="text-center bg-[#1a1f3a]/30 backdrop-blur-sm p-12 rounded-[5px] border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Need Laravel Backend?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build powerful, secure backend systems with Laravel's elegant syntax 
              and comprehensive feature set.
            </p>
            <a href="/contact" className="corporate-button text-lg">
              Start Laravel Project
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LaravelService;
