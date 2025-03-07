import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { LogoCarousel } from './components/prismui/logo-carousel';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import ImgCarousel from './components/imgCarousel';

export const App = () => (
  <main className="min-h-screen">
    <Navigation />
    <div className="relative overflow-hidden bg-white pb-32">
      {/* Shared background gradient for both sections */}
      <div className="absolute inset-0 bg-gradient-to-r from-hub-blue to-hub-blue-dark opacity-90 z-0"></div>
      
      {/* Shared decorative elements for both sections */}
      <div className="absolute inset-0 z-0">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-hub-blue-light opacity-10 rounded-full blur-xl"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-hub-blue-light opacity-20 rounded-full blur-lg"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>
      
      {/* Shared animated floating elements */}
      <div className="absolute h-full w-full overflow-hidden z-0">
        <div className="absolute -top-4 left-1/4 w-8 h-8 bg-white opacity-30 rounded-full animate-float1"></div>
        <div className="absolute top-1/3 left-10 w-4 h-4 bg-white opacity-30 rounded-full animate-float2"></div>
        <div className="absolute top-2/3 right-1/4 w-6 h-6 bg-white opacity-30 rounded-full animate-float3"></div>
        <div className="absolute bottom-20 left-1/3 w-5 h-5 bg-white opacity-30 rounded-full animate-float1"></div>
      </div>
      
      <div className="flex flex-col">
        <HeroSection />
        <LogoCarousel columns={3} />
      </div>
      
      {/* Decorative angle at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
    <ImgCarousel />
    <ControlledAccordions/>
    <BookingSection />
    
    {/* Contact section with matching styling */}
    <div className="relative overflow-hidden bg-white">
      {/* Decorative wave at the top */}
      <div className="absolute top-0 left-0 right-0 z-10 transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
      
      {/* Shared background gradient for contact section */}
      <div className="absolute inset-0 bg-gradient-to-r from-hub-blue to-hub-blue-dark opacity-90 z-0"></div>
      
      {/* Shared decorative elements for contact section */}
      <div className="absolute inset-0 z-0">
        {/* Floating circles */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-white opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-hub-blue-light opacity-10 rounded-full blur-xl"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-hub-blue-light opacity-20 rounded-full blur-lg"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>
      
      {/* Shared animated floating elements */}
      <div className="absolute h-full w-full overflow-hidden z-0">
        <div className="absolute -top-4 right-1/4 w-8 h-8 bg-white opacity-30 rounded-full animate-float1"></div>
        <div className="absolute top-1/3 right-10 w-4 h-4 bg-white opacity-30 rounded-full animate-float2"></div>
        <div className="absolute top-2/3 left-1/4 w-6 h-6 bg-white opacity-30 rounded-full animate-float3"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-white opacity-30 rounded-full animate-float1"></div>
      </div>
      
      <ContactSection />
    </div>
    
    <ScrollToTop />
    <Footer />
  </main>
);
