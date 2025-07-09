
import React from 'react';
import Layout from '@/components/Layout';

const CNN: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">Convolutional Neural Networks</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Advanced CNN architectures for computer vision, image classification, 
              object detection, and visual pattern recognition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Service Description</h2>
              <p className="text-gray-300 mb-6">
                Our CNN services provide state-of-the-art computer vision solutions 
                using deep convolutional neural networks. We specialize in custom 
                architectures tailored to your specific visual recognition needs.
              </p>
              
              <h3 className="text-xl font-bold text-white mb-4">What's Included</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Custom CNN architecture design</li>
                <li>• Data preprocessing and augmentation</li>
                <li>• Model training and optimization</li>
                <li>• Performance evaluation and tuning</li>
                <li>• Deployment and integration support</li>
                <li>• Documentation and training materials</li>
              </ul>
            </div>

            <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Use Cases</h2>
              <div className="space-y-4">
                <div className="bg-[#1a1f3a]/30 p-4 rounded-[5px]">
                  <h3 className="text-lg font-bold text-white mb-2">Medical Imaging</h3>
                  <p className="text-gray-300 text-sm">
                    X-ray analysis, MRI scan interpretation, pathology detection
                  </p>
                </div>
                
                <div className="bg-[#1a1f3a]/30 p-4 rounded-[5px]">
                  <h3 className="text-lg font-bold text-white mb-2">Manufacturing</h3>
                  <p className="text-gray-300 text-sm">
                    Quality control, defect detection, automated inspection
                  </p>
                </div>
                
                <div className="bg-[#1a1f3a]/30 p-4 rounded-[5px]">
                  <h3 className="text-lg font-bold text-white mb-2">Security</h3>
                  <p className="text-gray-300 text-sm">
                    Facial recognition, surveillance systems, access control
                  </p>
                </div>
                
                <div className="bg-[#1a1f3a]/30 p-4 rounded-[5px]">
                  <h3 className="text-lg font-bold text-white mb-2">Retail</h3>
                  <p className="text-gray-300 text-sm">
                    Product recognition, inventory management, customer analytics
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1f3a]/30 backdrop-blur-sm p-8 rounded-[5px] border border-gray-700 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Example Projects</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#1a1f3a]/20 p-6 rounded-[5px] border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">Medical X-ray Analysis</h3>
                <p className="text-gray-300 text-sm mb-4">
                  CNN model for automated pneumonia detection in chest X-rays 
                  with 96.2% accuracy, deployed in clinical settings.
                </p>
                <div className="text-xs text-gray-400">
                  <p>Dataset: 10,000+ X-ray images</p>
                  <p>Accuracy: 96.2%</p>
                  <p>Deployment: Production</p>
                </div>
              </div>
              
              <div className="bg-[#1a1f3a]/20 p-6 rounded-[5px] border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">Product Quality Control</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Real-time defect detection system for manufacturing line 
                  reducing quality control costs by 40%.
                </p>
                <div className="text-xs text-gray-400">
                  <p>Processing: Real-time</p>
                  <p>Precision: 98.7%</p>
                  <p>Cost Reduction: 40%</p>
                </div>
              </div>
              
              <div className="bg-[#1a1f3a]/20 p-6 rounded-[5px] border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">Security Surveillance</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Multi-camera surveillance system with person detection 
                  and behavior analysis for enhanced security.
                </p>
                <div className="text-xs text-gray-400">
                  <p>Cameras: Multi-stream</p>
                  <p>Detection: Real-time</p>
                  <p>Alerts: Automated</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-[#1a1f3a]/30 backdrop-blur-sm p-12 rounded-[5px] border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Implement CNN Solutions?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our experts design and implement custom CNN architectures 
              that solve your specific computer vision challenges.
            </p>
            <a href="/contact" className="corporate-button text-lg">
              Start Your CNN Project
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CNN;
