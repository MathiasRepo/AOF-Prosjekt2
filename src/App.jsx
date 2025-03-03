import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';

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
