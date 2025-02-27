import React from 'react';
import { Button } from "@/components/ui/button";

export const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hubBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Workshops og konferanser",
      description: "Arrangementer for å fremme bærekraftig utvikling og innovasjon."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hubBlue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.332 18.477 17.746 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Kurs og opplæring",
      description: "Kurs og opplæring innen bærekraft og FNs bærekraftsmål."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hubBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Samarbeid",
      description: "Kobler sammen næringsliv, utdanning og offentlige aktører."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hubBlue-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Kontorplasser",
      description: "Fleksible kontorplasser for bedrifter og organisasjoner som jobber med bærekraft."
    }
  ];

  return (
    <section id="tjenester" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-hubBlue/10 rounded-full">
              <p className="text-sm font-medium text-hubBlue">Våre tjenester</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Tjenester og aktiviteter
            </h2>
            
            <p className="text-zinc-400 max-w-2xl mx-auto">
              HUB Phønix tilbyr en rekke tjenester og aktiviteter for å fremme bærekraftig 
              utvikling i Fredrikstad og Hvaler-regionen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-xl border border-zinc-800/50 hover:border-hubBlue/50 transition-colors duration-300"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              asChild
              size="lg"
              className="bg-hubBlue hover:bg-hubBlue-dark text-white"
            >
              <a href="#booking">Book rom eller tjeneste</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
