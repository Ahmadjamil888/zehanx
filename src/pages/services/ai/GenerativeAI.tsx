
import React from 'react';
import Layout from '@/components/Layout';

const GenerativeAI: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">Generative AI</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Advanced generative artificial intelligence solutions including GPT models, 
              image generation, and creative AI applications.
            </p>
          </div>

          <div className="text-center bg-[#1a1f3a]/30 backdrop-blur-sm p-12 rounded-[5px] border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Generate with AI?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the creative potential of generative AI for content creation, 
              automation, and innovative business solutions.
            </p>
            <a href="/contact" className="corporate-button text-lg">
              Explore Generative AI
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GenerativeAI;
