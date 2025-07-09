import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modelsOpen, setModelsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [webDevOpen, setWebDevOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              ZehanX Technologies
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>

            {/* Models Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setModelsOpen(true)}
                onMouseLeave={() => setModelsOpen(false)}
                className="text-white hover:text-gray-300 transition-colors flex items-center"
              >
                Models <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {modelsOpen && (
                <div
                  onMouseEnter={() => setModelsOpen(true)}
                  onMouseLeave={() => setModelsOpen(false)}
                  className="absolute top-full left-0 mt-1 w-64 bg-black border border-gray-700 rounded-[5px] shadow-lg"
                >
                  <Link to="/models/crypto-ai" className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors">
                    Crypto AI
                  </Link>
                  <Link to="/models/lstm-time-series" className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors">
                    LSTM Time Series
                  </Link>
                  <Link to="/models/ameenor-ai" className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors">
                    Ameenor AI
                  </Link>
                  <Link to="/models/real-time-surveillance" className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors">
                    Real-Time Object Surveillance
                  </Link>
                  <Link to="/models/astar-pathfinder" className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors">
                    A* Path Finder
                  </Link>
                  <Link to="/models/pneumonia-detection" className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors">
                    Pneumonia X-ray Detection
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="text-white hover:text-gray-300 transition-colors flex items-center"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-0 mt-1 w-64 bg-black border border-gray-700 rounded-[5px] shadow-lg"
                >
                  {/* Web Development Submenu */}
                  <div
                    onMouseEnter={() => setWebDevOpen(true)}
                    onMouseLeave={() => setWebDevOpen(false)}
                    className="relative"
                  >
                    <div className="px-4 py-3 text-white hover:bg-gray-700 transition-colors flex items-center justify-between cursor-pointer">
                      Web Development <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
                    </div>
                    {webDevOpen && (
                      <div className="absolute left-full top-0 w-48 bg-black border border-gray-700 rounded-[5px] shadow-lg">
                        <Link to="/services/web/nextjs" className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors">
                          Next.js
                        </Link>
                        <Link to="/services/web/react" className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors">
                          React
                        </Link>
                        <Link to="/services/web/laravel" className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors">
                          Laravel
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* AI Services Submenu */}
                  <div
                    onMouseEnter={() => setAiServicesOpen(true)}
                    onMouseLeave={() => setAiServicesOpen(false)}
                    className="relative"
                  >
                    <div className="px-4 py-3 text-white hover:bg-gray-700 transition-colors flex items-center justify-between cursor-pointer">
                      AI Services <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
                    </div>
                    {aiServicesOpen && (
                      <div className="absolute left-full top-0 w-48 bg-black border border-gray-700 rounded-[5px] shadow-lg">
                        <Link to="/services/ai/fine-tuning" className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors">
                          Fine-Tuning
                        </Link>
                        <Link to="/services/ai/cnn" className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors">
                          CNN
                        </Link>
                        <Link to="/services/ai/lstm" className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors">
                          LSTM
                        </Link>
                        <Link to="/services/ai/generative-ai" className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors">
                          Generative AI
                        </Link>
                        <Link to="/services/ai/chatbots" className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors">
                          Chatbots
                        </Link>
                        <Link to="/services/ai/classification" className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors">
                          Classification
                        </Link>
                        <Link to="/services/ai/regression" className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors">
                          Regression
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-white hover:text-gray-300 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </Link>
            <Link to="/login" className="text-white border border-white px-4 py-2 rounded-[5px] hover:bg-white hover:text-black transition">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black rounded-[5px] mt-2">
              <Link to="/" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-[5px]">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-[5px]">
                About Us
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-[5px]">
                Contact
              </Link>
              <Link to="/login" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-[5px]">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
