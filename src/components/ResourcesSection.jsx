import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const ResourcesSection = () => {
  const resources = [
    {
      title: "FNs bærekraftsmål",
      description: "Lær mer om FNs 17 bærekraftsmål og hvordan du kan bidra.",
      link: "https://www.fn.no/om-fn/fns-baerekraftsmaal"
    },
    {
      title: "Bærekraftig utvikling",
      description: "Ressurser om bærekraftig utvikling og sirkulær økonomi.",
      link: "#"
    },
    {
      title: "Klimatiltak",
      description: "Praktiske tiltak for å redusere klimagassutslipp.",
      link: "#"
    }
  ];

  return (
    <section id="ressurser" className="py-24 relative overflow-hidden">
      {/* Section-specific decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle accent circle */}
        <div className="absolute top-40 right-[10%] w-56 h-56 rounded-full bg-purple-900/15 blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-hubBlue/10 rounded-full">
              <p className="text-sm font-medium text-hubBlue">Ressurser</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Bærekraftsressurser
            </h2>
            
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Her finner du nyttige ressurser om bærekraft og FNs bærekraftsmål.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-xl border border-zinc-800/50 hover:border-hubBlue/50 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                <p className="text-zinc-400 mb-4">{resource.description}</p>
                <Separator className="my-4 bg-zinc-800/50" />
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-hubBlue hover:text-hubBlue-light"
                  asChild
                >
                  <a 
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <span>Les mer</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
