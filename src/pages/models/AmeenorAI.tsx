
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Layout from '@/components/Layout';

const AmeenorAI: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">Ameenor AI</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Advanced conversational AI model designed for natural language understanding 
              and intelligent dialogue generation.
            </p>
          </div>

          {/* Model Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Model Overview</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Architecture</h3>
                  <p className="text-gray-300">
                    Transformer-based neural network with attention mechanisms, 
                    fine-tuned for conversational AI applications.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Dataset</h3>
                  <p className="text-gray-300">
                    Trained on curated conversational datasets including dialogue corpora, 
                    Q&A pairs, and domain-specific knowledge bases.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Accuracy</h3>
                  <p className="text-gray-300">
                    Achieves 94.7% accuracy on conversational understanding tasks 
                    and maintains coherent dialogue flow.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Technical Specifications</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Model Size:</span>
                  <span className="text-white font-medium">175M parameters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Training Time:</span>
                  <span className="text-white font-medium">120 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Framework:</span>
                  <span className="text-white font-medium">PyTorch</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Inference Speed:</span>
                  <span className="text-white font-medium">< 200ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Memory Usage:</span>
                  <span className="text-white font-medium">2.1 GB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Guide */}
          <div className="bg-[#1a1f3a]/30 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How to Use Ameenor AI</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Training the Model</h3>
                <div className="bg-black/40 p-4 rounded-[5px] text-gray-300 text-sm font-mono mb-4">
                  <p># Clone the repository</p>
                  <p>git clone https://github.com/Ahmadjamil888/ameenor-ai</p>
                  <p className="mt-2"># Install dependencies</p>
                  <p>pip install -r requirements.txt</p>
                  <p className="mt-2"># Start training</p>
                  <p>python train.py --config config.yaml</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Running Inference</h3>
                <div className="bg-black/40 p-4 rounded-[5px] text-gray-300 text-sm font-mono mb-4">
                  <p># Load the model</p>
                  <p>python inference.py --model ameenor_ai.pt</p>
                  <p className="mt-2"># API endpoint</p>
                  <p>python app.py --host 0.0.0.0 --port 8000</p>
                  <p className="mt-2"># Test the model</p>
                  <p>curl -X POST http://localhost:8000/chat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#1a1f3a]/20 backdrop-blur-sm p-6 rounded-[5px] border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-3">Customer Support</h3>
                <p className="text-gray-300 text-sm">
                  Automated customer service chatbots with natural conversation flow.
                </p>
              </div>
              
              <div className="bg-[#1a1f3a]/20 backdrop-blur-sm p-6 rounded-[5px] border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-3">Virtual Assistants</h3>
                <p className="text-gray-300 text-sm">
                  Intelligent personal assistants for task automation and information retrieval.
                </p>
              </div>
              
              <div className="bg-[#1a1f3a]/20 backdrop-blur-sm p-6 rounded-[5px] border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-3">Educational Tools</h3>
                <p className="text-gray-300 text-sm">
                  Interactive learning companions and tutoring systems.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
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
              Get This Model
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AmeenorAI;
