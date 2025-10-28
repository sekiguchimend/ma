'use client';

import { useState } from 'react';
import HeroSection from './components/HeroSection';
import ScrollingMarquee from './components/ScrollingMarquee';
import TrustAndSafety from './components/TrustAndSafety';
import CompanyComparison from './components/CompanyComparison';
import ThreeReasons from './components/ThreeReasons';
import AboutAppExit from './components/AboutAppExit';
import ThreeSteps from './components/ThreeSteps';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ScrollingMarquee />
      <TrustAndSafety />
      <CompanyComparison />
      <ThreeReasons />
      <AboutAppExit />
      <ThreeSteps />
      <FAQ openFaqIndex={openFaqIndex} onToggle={setOpenFaqIndex} />
      <Footer />
    </div>
  );
}
