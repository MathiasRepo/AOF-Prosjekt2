import React from 'react';

export const BookingSection = () => (
  <section id="booking" className="container mx-auto px-4 py-8">
    <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hub-blue-light mb-4 font-museo drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.2)]">
            Book din kontorplass
          </h2>
        </div>
    <div className="iframe-container">
      <iframe
        scrolling="no"
        frameBorder="0"
        src="https://m.supersaas.com/schedule/Slowboii/HUB_Ph%C3%B8nix?partitioned=1"
      />
    </div>
  </section>
);
