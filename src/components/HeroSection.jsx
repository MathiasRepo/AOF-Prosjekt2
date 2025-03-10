import React from 'react';
import { getImagePath } from '../utils/imagePath';

export const HeroSection = () => (
  <section className="relative flex items-center overflow-hidden z-10 pb-32 pt-56">
    {/* Background elements removed - now shared in App.jsx */}
    
    <div className="container mx-auto px-6 relative z-10 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-2 font-museo">
            HUB Phønix
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
            <div className="relative group">
              <a 
                href="#booking" 
                className="absolute inset-0 z-10"
                aria-label="Book nå"
              />
              <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm text-hub-blue-dark px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform group-hover:scale-[1.02] border-2 border-white group-hover:border-white/80 group-hover:bg-white/80 shadow-[0_4px_16px_rgba(255,255,255,0.2)] group-hover:shadow-[0_8px_32px_rgba(255,255,255,0.4)] pointer-events-none">
                <span>Book nå</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            <a 
              href="#kontakt" 
              className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-[1.02] border-2 border-white/30 hover:border-white/50 hover:bg-white/20 shadow-[0_4px_16px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)]"
            >
              <span>Kontakt oss</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
          {/* Main logo with glow effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-hub-blue-light opacity-30 filter blur-xl rounded-full"></div>
            <img 
              src={getImagePath("/img/hvitPhonix.png")} 
              alt="HUB Phønix" 
              className="relative z-10 w-3/4 md:w-auto max-h-80 object-contain filter drop-shadow-2xl transform hover:rotate-3 transition-transform duration-500"
            />
          </div>
          
          {/* Decorative elements around the logo */}
          <div className="absolute top-0 right-0 w-20 h-20 border-4 border-white opacity-20 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-white opacity-10 rounded-full"></div>
          <div className="absolute -top-1/4 left-0 w-8 h-8 bg-hub-blue-light opacity-20 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
);
