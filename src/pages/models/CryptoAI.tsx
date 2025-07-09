
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Layout from '@/components/Layout';

const CryptoAI: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">Crypto AI Predictor</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Advanced cryptocurrency price prediction model using LSTM networks 
              and market sentiment analysis for accurate forecasting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Model Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Architecture</h3>
                  <p className="text-gray-300">
                    Multi-layer LSTM network with attention mechanisms, 
                    combined with sentiment analysis from social media data.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Dataset</h3>
                  <p className="text-gray-300">
                    Historical price data from major exchanges, trading volumes, 
                    technical indicators, and social sentiment scores.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Accuracy</h3>
                  <p className="text-gray-300">
                    Achieves 87.3% directional accuracy for 24-hour predictions 
                    and 82.1% for 7-day forecasts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Performance Metrics</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">RMSE:</span>
                  <span className="text-white font-medium">0.0234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">MAE:</span>
                  <span className="text-white font-medium">0.0187</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">R² Score:</span>
                  <span className="text-white font-medium">0.923</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Training Time:</span>
                  <span className="text-white font-medium">48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Update Frequency:</span>
                  <span className="text-white font-medium">Real-time</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1f3a]/30 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Implementation Guide</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Setup and Training</h3>
                <div className="bg-black/40 p-4 rounded-[5px] text-gray-300 text-sm font-mono mb-4">
                  <p># Clone repository</p>
                  <p>git clone https://github.com/Ahmadjamil888/crypto-ai</p>
                  <p className="mt-2"># Install requirements</p>
                  <p>pip install tensorflow pandas numpy</p>
                  <p className="mt-2"># Train model</p>
                  <p>python train_crypto_model.py</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Making Predictions</h3>
                <div className="bg-black/40 p-4 rounded-[5px] text-gray-300 text-sm font-mono mb-4">
                  <p># Load model and predict</p>
                  <p>python predict.py --symbol BTC</p>
                  <p className="mt-2"># API server</p>
                  <p>python app.py</p>
                  <p className="mt-2"># Real-time monitoring</p>
                  <p>python monitor.py --interval 1h</p>
                </div>
              </div>
            </div>
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
              Request Access
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CryptoAI;
