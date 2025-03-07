import React from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { LogoCarousel } from './components/prismui/logo-carousel';
import { ContactSection } from './components/ContactSection';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { ImageCarousel } from './components/ImageCarousel';
import FAQAccordion from './components/Accordion';
import { BookingPage } from './pages/Booking';

const HomePage = () => (
  <main className="min-h-screen relative text-white">
    <Navigation />
    
    {/* Main background gradient that spans the entire page */}
    <div className="fixed inset-0 bg-gradient-to-r from-hub-blue to-hub-blue-dark opacity-90 z-0"></div>
    
    {/* Decorative elements that span the entire page */}
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Large floating circles */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-white opacity-10 rounded-full blur-2xl animate-float3"></div>
      <div className="absolute bottom-40 right-10 w-[32rem] h-[32rem] bg-hub-blue-light opacity-10 rounded-full blur-2xl animate-float2"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-hub-blue-light opacity-20 rounded-full blur-xl animate-float1"></div>
      
      {/* Medium floating circles */}
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white opacity-15 rounded-full blur-lg animate-float2"></div>
      <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-hub-blue-light opacity-15 rounded-full blur-lg animate-float3"></div>
      
      {/* Small floating elements */}
      <div className="absolute top-[5%] left-[45%] w-8 h-8 bg-white opacity-30 rounded-full animate-float1"></div>
      <div className="absolute top-[75%] left-[15%] w-6 h-6 bg-white opacity-30 rounded-full animate-float2"></div>
      <div className="absolute top-[60%] right-[25%] w-10 h-10 bg-white opacity-30 rounded-full animate-float3"></div>
      <div className="absolute bottom-[20%] left-[35%] w-5 h-5 bg-white opacity-30 rounded-full animate-float1"></div>
      <div className="absolute top-[80%] right-[15%] w-7 h-7 bg-white opacity-30 rounded-full animate-float2"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
    </div>

    {/* Content sections */}
    <div className="relative z-10">
      <div className="container mx-auto px-4">
        <HeroSection />
        <LogoCarousel columns={3} />
        <ImageCarousel />
        <FAQAccordion />
        <ContactSection />
      </div>
    </div>
    
    <ScrollToTop />
    <Footer className="relative z-10" />
  </main>
);

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  </Router>
);
