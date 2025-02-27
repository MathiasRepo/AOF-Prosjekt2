import React from 'react';

export const ScrollToTop = () => (
  <section className="button-up fixed bottom-8 right-8">
    <button 
      aria-label="Scroll to top" 
      className="bg-blue-600 text-white p-5 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  </section>
);
