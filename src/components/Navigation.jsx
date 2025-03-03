import React from 'react';

export const Navigation = () => (
  <header className="fixed w-full top-0 bg-white shadow-md z-50">
    <nav aria-label="Hovednavigasjon" className="container mx-auto px-4 py-4 flex items-center">
      <div className="flex-1">
        <img src="/img/HUB PHØNIX LOGO FRG.png" alt="HUB Phønix Logo" className="h-12" />
      </div>
      
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-8">
          <li><a href="#kontakt" className="hover:text-blue-600 transition-colors">Kontakt</a></li>
          <li><a href="#samarbeidspartnere" className="hover:text-blue-600 transition-colors">Samarbeidspartnere</a></li>
        </ul>
      </div>
      
      <div className="flex-1 flex justify-end">
        <a href="#booking" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Booking
        </a>
      </div>
    </nav>
  </header>
);
