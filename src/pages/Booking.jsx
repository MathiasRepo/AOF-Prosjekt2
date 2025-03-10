import React from 'react';
import { Navigation } from '../components/Navigation';
import { BookingSection } from '../components/BookingSection';
import { Footer } from '../components/Footer';

export const BookingPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navigation hasGradientBackground={true} />
    <main className="flex-1 flex items-center justify-center bg-white">
      <BookingSection />
    </main>
    <Footer />
  </div>
); 