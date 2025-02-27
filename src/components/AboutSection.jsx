import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const AboutSection = () => {
  return (
    <section id="om-oss" className="py-24 relative overflow-hidden">
      {/* Section-specific decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle accent circles */}
        <div className="absolute top-20 left-[10%] w-48 h-48 rounded-full bg-hubBlue/15 blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left column with image */}
            <div className="md:w-2/5">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-hubBlue/10 rounded-lg"></div>
                <div className="relative bg-zinc-800/70 backdrop-blur-sm p-2 rounded-lg shadow-xl">
                  <img 
                    src="/images/hub-phonix-placeholder.jpg" 
                    alt="HUB Phønix" 
                    className="w-full h-auto rounded"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'%3E%3Crect fill='%23333333' width='600' height='800'/%3E%3Ctext fill='%23ffffff' font-family='Arial' font-size='36' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EHUB Phønix%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-hubBlue-light/10 rounded-full"></div>
              </div>
            </div>
            
            {/* Right column with content */}
            <div className="md:w-3/5">
              <div className="mb-6">
                <Button variant="outline" className="mb-4 px-3 py-1 bg-hubBlue/10 border-none rounded-full">
                  <p className="text-sm font-medium text-hubBlue">Om oss</p>
                </Button>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  HUB Phønix
                </h2>
              </div>
              
              <div className="prose prose-invert prose-zinc max-w-none">
                <p>
                  HUB Phønix er et kompetansesenter for bærekraft som skal bidra til økt kunnskap, 
                  engasjement og handling for en bærekraftig fremtid.
                </p>
                
                <Separator className="my-4 bg-zinc-700/50" />
                
                <p>
                  Vår visjon er å skape et inkluderende fellesskap der mennesker kan møtes, 
                  lære og samarbeide om bærekraftige løsninger. Vi tilbyr kurs, workshops, 
                  arrangementer og ressurser som fremmer bærekraftig utvikling.
                </p>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <Button 
                  variant="default" 
                  className="bg-hubBlue hover:bg-hubBlue-dark text-white"
                  asChild
                >
                  <a href="#tjenester">Våre tjenester</a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-hubBlue text-hubBlue hover:bg-hubBlue/10"
                  asChild
                >
                  <a href="#kontakt">Kontakt oss</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
