import React from 'react';
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden mt-20">
      {/* Section-specific decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circles - reduced opacity and size to complement global background */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-hubBlue/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-20 right-[5%] w-60 h-60 rounded-full bg-purple-900/15 blur-2xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-zinc-800/50 rounded-full backdrop-blur-sm border border-zinc-700/50">
            <p className="text-sm font-medium text-zinc-300">Velkommen til HUB Phønix</p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Bærekraftig <span className="text-hubBlue">innovasjon</span> i Fredrikstad
          </h1>
          
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Et samlingspunkt for bærekraftig utvikling og innovasjon i Fredrikstad og Hvaler-regionen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-hubBlue hover:bg-hubBlue-dark text-white font-medium"
              asChild
            >
              <a href="#booking">Book rom eller tjeneste</a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 font-medium"
              asChild
            >
              <a href="#om-oss">Les mer om oss</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
