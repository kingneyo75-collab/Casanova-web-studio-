import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EmergencyBanner } from './components/EmergencyBanner';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CostEstimator } from './components/CostEstimator';
import { ServiceAreas } from './components/ServiceAreas';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans pb-16 sm:pb-0">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onSelectService={handleSelectService} />

        {/* 24/7 Emergency Rapid Dispatch Banner */}
        <EmergencyBanner />

        {/* Core Plumbing Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Why Choose Us & Accreditations */}
        <WhyChooseUs />

        {/* Upfront ZAR Cost Estimator */}
        <CostEstimator onSelectService={handleSelectService} />

        {/* South Africa Suburb & Regional Coverage */}
        <ServiceAreas />

        {/* Clearly Marked Sample Customer Reviews */}
        <TestimonialsSection />

        {/* Contact Form & Direct Channels */}
        <ContactSection preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent WhatsApp & Phone Floating Actions */}
      <FloatingActions />
    </div>
  );
}
