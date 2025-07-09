
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Layout from '@/components/Layout';

const LSTMTimeSeries: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">LSTM Time Series</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Advanced Long Short-Term Memory networks for time series forecasting, 
              sequence prediction, and temporal pattern analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Model Overview</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Architecture</h3>
                  <p className="text-gray-300">
                    Multi-layer LSTM with bidirectional processing and attention mechanisms 
                    for complex temporal dependency modeling.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Dataset</h3>
                  <p className="text-gray-300">
                    Financial markets, weather data, IoT sensors, and custom time series 
                    with various temporal resolutions and patterns.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Accuracy</h3>
                  <p className="text-gray-300">
                    Achieves MAPE of 2.8% on financial forecasting and 
                    95.4% directional accuracy for trend prediction.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Technical Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Model Type:</span>
                  <span className="text-white font-medium">Bidirectional LSTM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Layers:</span>
                  <span className="text-white font-medium">4 LSTM + 2 Dense</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Parameters:</span>
                  <span className="text-white font-medium">2.3M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sequence Length:</span>
                  <span className="text-white font-medium">60-180 steps</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Features:</span>
                  <span className="text-white font-medium">Multi-variate</span>
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
              Request Model
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LSTMTimeSeries;
