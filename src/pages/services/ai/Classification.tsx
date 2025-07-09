
import React from 'react';
import Layout from '@/components/Layout';

const Classification: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">AI Classification</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Machine learning classification solutions for data categorization, 
              pattern recognition, and automated decision making.
            </p>
          </div>

          <div className="text-center bg-[#1a1f3a]/30 backdrop-blur-sm p-12 rounded-[5px] border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Need Classification Solutions?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Implement intelligent classification systems that automatically categorize 
              and organize your data with high accuracy.
            </p>
            <a href="/contact" className="corporate-button text-lg">
              Build Classification Model
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Classification;
