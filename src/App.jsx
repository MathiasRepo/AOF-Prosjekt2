import React from 'react';
import { 
  Navigation, 
  HeroSection, 
  BookingSection, 
  ContactSection, 
  ScrollToTop, 
  Footer 
} from './components';

export const App = () => (
  <main className="min-h-screen">
    <Navigation />
    <HeroSection />
    <BookingSection />
    <ContactSection />
    <ScrollToTop />
    <Footer />
  </main>
);
