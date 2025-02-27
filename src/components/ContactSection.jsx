import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => (
  <section id="kontakt" className="py-24 relative overflow-hidden">
    {/* Section-specific decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle accent circle */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/15 rounded-full blur-[80px]"></div>
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center justify-center mb-6 px-4 py-2 bg-zinc-800/50 rounded-full backdrop-blur-sm border border-zinc-700/50">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-4 h-4 mr-2 text-blue-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-sm font-medium text-zinc-300">Kontakt Informasjon</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Kontakt oss</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Har du spørsmål eller ønsker mer informasjon om HUB Phønix? Ta kontakt med oss.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-hubBlue/20 rounded-lg flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hubBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-white font-medium">E-post</p>
                  <a href="mailto:kontakt@hubphonix.no" className="text-hubBlue hover:text-hubBlue-light">kontakt@hubphonix.no</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-hubBlue/20 rounded-lg flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hubBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-white font-medium">Telefon</p>
                  <a href="tel:+4712345678" className="text-hubBlue hover:text-hubBlue-light">+47 123 45 678</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-hubBlue/20 rounded-lg flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hubBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-white font-medium">Adresse</p>
                  <p className="text-zinc-400">Storgata 12, 1607 Fredrikstad</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-xl border border-zinc-800/50">
            <form className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Navn"
                  className="bg-zinc-800/50 border-zinc-700/50 text-white"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="E-post"
                  className="bg-zinc-800/50 border-zinc-700/50 text-white"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Melding"
                  className="bg-zinc-800/50 border-zinc-700/50 text-white min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-hubBlue hover:bg-hubBlue-dark text-white"
              >
                Send melding
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);
