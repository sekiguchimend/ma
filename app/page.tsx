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
  const [activeTab, setActiveTab] = useState('email');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    countryCode: '+81'
  });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (activeTab === 'email' && formData.email) {
      console.log('Email submitted:', formData.email);
      // ここで実際の処理を行う
    } else if (activeTab === 'phone' && formData.phone) {
      console.log('Phone submitted:', formData.countryCode + formData.phone);
      // ここで実際の処理を行う
    }
  };

  const isFormValid = () => {
    if (activeTab === 'email') {
      return formData.email.includes('@');
    } else {
      return formData.phone.length >= 10;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        activeTab={activeTab}
        formData={formData}
        onTabChange={handleTabChange}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        isFormValid={isFormValid}
      />
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
