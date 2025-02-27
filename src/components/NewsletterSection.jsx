import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Section-specific decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle accent circle */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-hubBlue/15 rounded-full blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-900/40 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-zinc-800/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Meld deg på vårt nyhetsbrev
              </h2>
              
              <p className="text-zinc-400">
                Få de siste nyhetene og oppdateringene fra HUB Phønix direkte i innboksen din.
              </p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Din e-postadresse"
                className="flex-grow bg-zinc-800/50 border-zinc-700/50 text-white"
                required
              />
              
              <Button 
                type="submit" 
                className="bg-hubBlue hover:bg-hubBlue-dark text-white"
              >
                Meld meg på
              </Button>
            </form>
            
            <p className="text-xs text-zinc-500 mt-4 text-center">
              Ved å melde deg på godtar du våre vilkår og betingelser. Du kan melde deg av når som helst.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
