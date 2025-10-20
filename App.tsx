import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MarketDataTicker from './components/MarketDataTicker';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import EventsSection from './components/EventsSection';

const App: React.FC = () => {
  return (
    <div className="bg-dark-primary text-gray-200 font-sans antialiased overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[50vw] h-[50vw] bg-sky-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <MarketDataTicker />
          <ServicesSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <EventsSection />
          <PricingSection />
          <FaqSection />
          <ContactSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;