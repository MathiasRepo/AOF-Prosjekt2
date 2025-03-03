import React from 'react';

export const Navigation = () => (
  <header className="fixed w-full top-0 bg-white shadow-md z-50">
    <nav aria-label="Hovednavigasjon" className="container mx-auto px-4 py-4 flex justify-between items-center">
      <img src="/img/HUB PHØNIX LOGO FRG.png" alt="HUB Phønix Logo" className="h-12" />
      <ul className="flex space-x-6">
        <li><a href="#kontakt" className="hover:text-blue-600 transition-colors">Kontakt</a></li>
        <li><a href="#booking" className="hover:text-blue-600 transition-colors">Booking</a></li>
        <li><a href="#samarbeidspartnere" className="hover:text-blue-600 transition-colors">Samarbeidspartnere</a></li>
      </ul>
    </nav>
  </header>
);
