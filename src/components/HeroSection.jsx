import React from 'react';
import { getImagePath } from '../utils/imagePath';

export const HeroSection = () => (
  <section className="relative flex items-center overflow-hidden z-10 pb-32 pt-56">
    {/* Background elements removed - now shared in App.jsx */}
    
    <div className="container mx-auto px-6 relative z-10 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-2 font-museo">
            HUB Phonix
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-4 font-museo">
            Moderne coworking space og kontorfellesskap
          </h2>
          <p className="text-lg md:text-xl mb-4 max-w-lg">
            Et inspirerende miljø for gründere, frilansere og bedrifter som ønsker å vokse i et kreativt fellesskap.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center">
              <div className="mr-2 text-hub-blue-light">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Fleksible kontorløsninger</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-hub-blue-light">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Høyhastighets internett</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-hub-blue-light">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Møterom og fellesarealer</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-hub-blue-light">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>24/7 tilgang</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start mb-8">
            <a href="#booking" className="bg-white text-hub-blue-dark hover:bg-hub-gray px-8 py-3 rounded-md font-medium transition-colors shadow-lg transform hover:scale-105 duration-200">
              Book nå
            </a>
            <a href="#kontakt" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-hub-blue-dark px-8 py-3 rounded-md font-medium transition-colors">
              Kontakt oss
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
          {/* Main logo with glow effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-hub-blue-light opacity-30 filter blur-xl rounded-full"></div>
            <img 
              src={getImagePath("/img/HUB PHONIX LOGO HVIT.png")} 
              alt="HUB Phonix" 
              className="relative z-10 w-3/4 md:w-auto max-h-80 object-contain filter drop-shadow-2xl transform hover:rotate-3 transition-transform duration-500"
            />
          </div>
          
          {/* Decorative elements around the logo */}
          <div className="absolute top-0 right-0 w-20 h-20 border-4 border-white opacity-20 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-white opacity-10 rounded-full"></div>
          <div className="absolute top-1/4 left-0 w-8 h-8 bg-hub-blue-light opacity-20 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
);
