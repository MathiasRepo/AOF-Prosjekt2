import React from 'react';

export const BookingSection = () => (
  <section id="booking" className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-center mb-8">Book ditt kontorplass</h1>
    <div className="iframe-container">
      <iframe
        scrolling="no"
        frameBorder="0"
        src="https://www.supersaas.com/schedule/Slowboii/Phoenixres?partitioned=1"
      />
    </div>
  </section>
);
