
import React from 'react';
import Navbar from './Navbar';
import ParticleBackground from './ParticleBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
