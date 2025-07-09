
import React from 'react';
import Layout from '@/components/Layout';

const FineTuning: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">AI Model Fine-Tuning</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Custom fine-tuning services for pre-trained AI models to adapt them 
              to your specific domain and business requirements.
            </p>
          </div>

          <div className="text-center bg-[#1a1f3a]/30 backdrop-blur-sm p-12 rounded-[5px] border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Fine-Tune Your AI Models?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our experts optimize pre-trained models for your specific use case 
              and achieve superior performance on your data.
            </p>
            <a href="/contact" className="corporate-button text-lg">
              Start Fine-Tuning Project
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FineTuning;
