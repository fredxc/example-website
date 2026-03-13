import React from 'react';
import { Toaster } from './components/ui/sonner';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { AboutSection } from './components/AboutSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <WhyChooseSection />
          <TestimonialsSection />
          <HowItWorksSection />
          <AboutSection />
          <CTASection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <Toaster position="top-center" />
      </div>
    </LanguageProvider>
  );
}