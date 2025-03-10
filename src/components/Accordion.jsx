import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordion = () => {
  return (
    <section id="faq" className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-museo">
            Ofte stilte spørsmål
          </h2>
          
          <div className="h-[600px] relative">
            <div className="absolute inset-0">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border-2 border-white/20 rounded-2xl px-6 py-3 bg-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)] group transition-all duration-300 hover:bg-white/10">
                  <AccordionTrigger className="text-lg font-medium text-white hover:text-hub-blue-light transition-colors group-hover:text-hub-blue-light">
                    Hva er inkludert i leien?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/90 pb-4">
                    I leien er det inkludert strøm, internett, renhold av fellesarealer, kaffe/te, printer og tilgang til møterom.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-2 border-white/20 rounded-2xl px-6 py-3 bg-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)] group transition-all duration-300 hover:bg-white/10">
                  <AccordionTrigger className="text-lg font-medium text-white hover:text-hub-blue-light transition-colors group-hover:text-hub-blue-light">
                    Hvilke typer kontorplasser tilbyr dere?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/90 pb-4">
                    Vi tilbyr både faste og fleksible kontorplasser, samt egne kontor og møterom. Kontakt oss for mer informasjon om priser og tilgjengelighet.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-2 border-white/20 rounded-2xl px-6 py-3 bg-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)] group transition-all duration-300 hover:bg-white/10">
                  <AccordionTrigger className="text-lg font-medium text-white hover:text-hub-blue-light transition-colors group-hover:text-hub-blue-light">
                    Hva er åpningstidene?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/90 pb-4">
                    HUB Phønix er åpent 24/7 for medlemmer med egen nøkkelbrikke. Resepsjonen er bemannet mandag til fredag fra 08:00 til 16:00.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-2 border-white/20 rounded-2xl px-6 py-3 bg-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)] group transition-all duration-300 hover:bg-white/10">
                  <AccordionTrigger className="text-lg font-medium text-white hover:text-hub-blue-light transition-colors group-hover:text-hub-blue-light">
                    Har dere parkeringsmuligheter?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/90 pb-4">
                    Ja, vi har parkeringsplasser tilgjengelig for våre medlemmer. Det er også god tilgang til offentlig transport i området.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-2 border-white/20 rounded-2xl px-6 py-3 bg-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)] group transition-all duration-300 hover:bg-white/10">
                  <AccordionTrigger className="text-lg font-medium text-white hover:text-hub-blue-light transition-colors group-hover:text-hub-blue-light">
                    Kan jeg booke møterom?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/90 pb-4">
                    Ja, alle medlemmer har tilgang til å booke møterom gjennom vårt bookingsystem. Vi har flere møterom i forskjellige størrelser.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;