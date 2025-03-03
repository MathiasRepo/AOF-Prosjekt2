import React from 'react';

export const BookingSection = () => (
  <section id="booking">
    <h1 className="text-4xl font-bold text-center mb-8 mt-24">Book ditt kontorplass</h1>
    <div className="w-full h-[820px] overflow-hidden my-12">
      <div className="-mt-[16%] w-full h-[110%]">
        <iframe
          className="w-full h-full border-none overflow-hidden"
          scrolling="no"
          frameBorder="0"
          src="https://www.supersaas.com/schedule/Slowboii/Phoenixres?partitioned=1"
        />
      </div>
    </div>
  </section>
);
