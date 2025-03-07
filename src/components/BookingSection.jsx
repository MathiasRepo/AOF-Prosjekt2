import React from 'react';

export const BookingSection = () => (
  <section className="w-full max-w-5xl mx-auto px-4">
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-hub-blue-light mb-4 font-museo">
        Book din kontorplass
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Velg ønsket dato og tid for ditt besøk
      </p>
    </div>
    <div className="h-[600px] rounded-lg overflow-hidden shadow-xl border border-gray-100">
      <iframe
        title="HUB Phønix Booking"
        scrolling="no"
        frameBorder="0"
        src="https://www.supersaas.com/schedule/Slowboii/HUB_Ph%C3%B8nix?partitioned=1"
        className="w-full h-full"
      />
    </div>
  </section>
);
