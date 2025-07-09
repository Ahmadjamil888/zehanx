
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { supabase } from '@/integrations/supabase/client';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const { error } = await supabase
        .from('messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (error) throw error;

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      setError('Failed to send message. Please try again.');
      console.error('Contact form error:', err);
    }

    setLoading(false);
  };

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your business with AI? Get in touch with our team of experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-gray-300 mb-8">
                  We'd love to hear about your project and discuss how ZehanX Technologies 
                  can help you achieve your AI and development goals.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-6 rounded-[5px] border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-2">AI Solutions</h3>
                  <p className="text-gray-300">
                    Custom machine learning models, neural networks, and AI integrations.
                  </p>
                </div>
                
                <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-6 rounded-[5px] border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
                  <p className="text-gray-300">
                    Modern web applications using React, Next.js, and Laravel frameworks.
                  </p>
                </div>
                
                <div className="bg-[#1a1f3a]/50 backdrop-blur-sm p-6 rounded-[5px] border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-2">Consulting</h3>
                  <p className="text-gray-300">
                    Strategic AI consulting and technology implementation guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#1a1f3a]/80 backdrop-blur-md p-8 rounded-[5px] border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-[5px]">
                    {error}
                  </div>
                )}
                
                {success && (
                  <div className="bg-green-500/10 border border-green-500 text-green-400 px-4 py-3 rounded-[5px]">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="corporate-input w-full"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="corporate-input w-full"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="corporate-input w-full resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full corporate-button"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
