
import React from 'react';
import Layout from '@/components/Layout';

const Chatbots: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">AI Chatbots</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Intelligent conversational AI chatbots for customer service, 
              support automation, and enhanced user engagement.
            </p>
          </div>

          <div className="text-center bg-[#1a1f3a]/30 backdrop-blur-sm p-12 rounded-[5px] border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Build Your AI Chatbot?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform customer interactions with intelligent chatbots that understand 
              context and provide meaningful responses.
            </p>
            <a href="/contact" className="corporate-button text-lg">
              Create Your Chatbot
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chatbots;
