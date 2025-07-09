
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Layout from '@/components/Layout';

const RealTimeSurveillance: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">Real-Time Object Surveillance</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Advanced computer vision system for real-time object detection, tracking, 
              and behavior analysis in surveillance applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">System Features</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Object Detection</h3>
                  <p className="text-gray-300">
                    YOLOv8-based real-time detection of people, vehicles, 
                    and custom objects with 95%+ accuracy.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Multi-Camera Support</h3>
                  <p className="text-gray-300">
                    Simultaneous processing of multiple camera streams 
                    with centralized monitoring and alert system.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Behavior Analysis</h3>
                  <p className="text-gray-300">
                    Advanced behavioral pattern recognition for anomaly detection 
                    and security threat assessment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Performance Specs</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Processing Speed:</span>
                  <span className="text-white font-medium">30+ FPS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Detection Accuracy:</span>
                  <span className="text-white font-medium">95.7%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Tracking Precision:</span>
                  <span className="text-white font-medium">92.3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">False Positive Rate:</span>
                  <span className="text-white font-medium">< 3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Supported Cameras:</span>
                  <span className="text-white font-medium">Up to 16</span>
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
              Get This System
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RealTimeSurveillance;
