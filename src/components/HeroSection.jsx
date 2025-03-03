import React from 'react';

export const HeroSection = () => (
  <section className="relative h-screen flex items-center overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-800 opacity-90"></div>
    
    {/* Decorative elements */}
    <div className="absolute inset-0">
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-300 opacity-10 rounded-full blur-xl"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-indigo-200 opacity-20 rounded-full blur-lg"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
    </div>
    
    {/* Animated floating elements */}
    <div className="absolute h-full w-full overflow-hidden">
      <div className="absolute -top-4 left-1/4 w-8 h-8 bg-white opacity-30 rounded-full animate-float1"></div>
      <div className="absolute top-1/3 left-10 w-4 h-4 bg-white opacity-30 rounded-full animate-float2"></div>
      <div className="absolute top-2/3 right-1/4 w-6 h-6 bg-white opacity-30 rounded-full animate-float3"></div>
      <div className="absolute bottom-20 left-1/3 w-5 h-5 bg-white opacity-30 rounded-full animate-float1"></div>
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            HUB Phønix
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8">
            Moderne coworking space og kontorfellesskap
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-lg">
            Et inspirerende miljø for gründere, frilansere og bedrifter som ønsker å vokse i et kreativt fellesskap.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <div className="mr-2 text-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Fleksible kontorløsninger</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Høyhastighets internett</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Møterom og fellesarealer</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>24/7 tilgang</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a href="#booking" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors shadow-lg transform hover:scale-105 duration-200">
              Book nå
            </a>
            <a href="#kontakt" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-md font-medium transition-colors">
              Kontakt oss
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
          {/* Main logo with glow effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400 opacity-30 filter blur-xl rounded-full"></div>
            <img 
              src="/img/HUB PHØNIX LOGO HVIT.png" 
              alt="HUB Phønix" 
              className="relative z-10 w-3/4 md:w-auto max-h-80 object-contain filter drop-shadow-2xl transform hover:rotate-3 transition-transform duration-500"
            />
          </div>
          
          {/* Decorative elements around the logo */}
          <div className="absolute top-0 right-0 w-20 h-20 border-4 border-white opacity-20 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-white opacity-10 rounded-full"></div>
          <div className="absolute top-1/4 left-0 w-8 h-8 bg-blue-300 opacity-20 rounded-full"></div>
        </div>
      </div>
    </div>
    
    {/* Decorative angle at the bottom */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
        <path 
          fill="#ffffff" 
          fillOpacity="1" 
          d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        ></path>
      </svg>
    </div>
  </section>
);
