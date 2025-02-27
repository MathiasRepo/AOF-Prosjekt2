import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ResourcesSection } from './components/ResourcesSection';
import { BookingSection } from './components/BookingSection';
import { NewsletterSection } from './components/NewsletterSection';
import { ContactSection } from './components/ContactSection';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider forcedTheme="dark">
      <div className="min-h-screen dark bg-hubBlue-dark text-hubGray-light relative">
        {/* Global background with seamless gradient */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-hubBlue-dark via-hubBlue-dark to-[#0f3b58]"></div>
          
          {/* Global decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Dots pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNGMUYxRjEiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20"></div>
            
            {/* Large color blobs that span across sections */}
            <div className="absolute top-[5%] right-[10%] w-[600px] h-[600px] rounded-full bg-hubBlue/20 blur-[150px]"></div>
            <div className="absolute top-[30%] left-[5%] w-[500px] h-[500px] rounded-full bg-hubBlue-light/15 blur-[150px]"></div>
            <div className="absolute top-[60%] right-[15%] w-[700px] h-[700px] rounded-full bg-hubBlue/15 blur-[150px]"></div>
            <div className="absolute top-[85%] left-[10%] w-[600px] h-[600px] rounded-full bg-hubBlue-light/10 blur-[150px]"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ResourcesSection />
          <BookingSection />
          <NewsletterSection />
          <ContactSection />
          <ScrollToTop />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
