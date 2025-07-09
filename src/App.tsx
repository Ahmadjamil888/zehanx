
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from '@/contexts/AuthContext';

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Model Pages
import AmeenorAI from "./pages/models/AmeenorAI";
import CryptoAI from "./pages/models/CryptoAI";
import LSTMTimeSeries from "./pages/models/LSTMTimeSeries";
import RealTimeSurveillance from "./pages/models/RealTimeSurveillance";
import AStarPathfinder from "./pages/models/AStarPathfinder";
import PneumoniaDetection from "./pages/models/PneumoniaDetection";

// Service Pages - AI
import CNN from "./pages/services/ai/CNN";
import LSTM from "./pages/services/ai/LSTM";
import FineTuning from "./pages/services/ai/FineTuning";
import GenerativeAI from "./pages/services/ai/GenerativeAI";
import Chatbots from "./pages/services/ai/Chatbots";
import Classification from "./pages/services/ai/Classification";
import Regression from "./pages/services/ai/Regression";

// Service Pages - Web
import ReactService from "./pages/services/web/React";
import NextJSService from "./pages/services/web/NextJS";
import LaravelService from "./pages/services/web/Laravel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            
            {/* Model Routes */}
            <Route path="/models/ameenor-ai" element={<AmeenorAI />} />
            <Route path="/models/crypto-ai" element={<CryptoAI />} />
            <Route path="/models/lstm-time-series" element={<LSTMTimeSeries />} />
            <Route path="/models/real-time-surveillance" element={<RealTimeSurveillance />} />
            <Route path="/models/astar-pathfinder" element={<AStarPathfinder />} />
            <Route path="/models/pneumonia-detection" element={<PneumoniaDetection />} />
            
            {/* AI Service Routes */}
            <Route path="/services/ai/cnn" element={<CNN />} />
            <Route path="/services/ai/lstm" element={<LSTM />} />
            <Route path="/services/ai/fine-tuning" element={<FineTuning />} />
            <Route path="/services/ai/generative-ai" element={<GenerativeAI />} />
            <Route path="/services/ai/chatbots" element={<Chatbots />} />
            <Route path="/services/ai/classification" element={<Classification />} />
            <Route path="/services/ai/regression" element={<Regression />} />
            
            {/* Web Service Routes */}
            <Route path="/services/web/react" element={<ReactService />} />
            <Route path="/services/web/nextjs" element={<NextJSService />} />
            <Route path="/services/web/laravel" element={<LaravelService />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
