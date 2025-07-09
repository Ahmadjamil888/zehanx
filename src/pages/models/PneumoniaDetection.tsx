
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Layout from '@/components/Layout';

const PneumoniaDetection: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">Pneumonia X-ray Detection</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Medical AI system for automated pneumonia detection from chest X-ray images 
              using advanced convolutional neural networks.
            </p>
          </div>

          <div className="text-center space-x-4">
            <a 
              href="https://github.com/Ahmadjamil888" 
              target="_blank" 
              rel="noopener noreferrer"
              className="corporate-button inline-flex items-center"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </a>
            <a href="/contact" className="border border-white text-white px-6 py-3 rounded-[5px] font-medium hover:bg-white hover:text-[#0a0f3c] transition-all duration-200 inline-flex items-center">
              <ExternalLink className="mr-2 h-5 w-5" />
              Request Model
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PneumoniaDetection;
