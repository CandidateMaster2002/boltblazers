import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import { PageView } from './types';

const App: React.FC = () => {
  // Simple state-based router for this static site
  const [currentView, setCurrentView] = useState<PageView>('home');

  const handleNavigation = (view: PageView) => {
    setCurrentView(view);
    if (view === 'home') {
       window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <Navbar onNavigate={handleNavigation} />
      
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero />
            <Services />
            <Impact />
            <Contact />
          </>
        ) : (
          <PrivacyPolicy />
        )}
      </main>

      <Footer onNavigate={handleNavigation} />
    </div>
  );
};

export default App;