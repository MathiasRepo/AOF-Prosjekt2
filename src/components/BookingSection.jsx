import React from 'react';
import { Button } from "@/components/ui/button";

export const BookingSection = () => {
  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      {/* Section-specific decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle accent circles */}
        <div className="absolute top-20 right-[10%] w-52 h-52 rounded-full bg-purple-900/15 blur-2xl"></div>
        <div className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full bg-hubBlue/15 blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-hubBlue/10 rounded-full">
              <p className="text-sm font-medium text-hubBlue">Booking</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Book rom eller tjeneste
            </h2>
            
            <p className="text-zinc-400 max-w-2xl mx-auto">
              HUB Phønix tilbyr fleksible rom og tjenester for bedrifter, organisasjoner og privatpersoner.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left column with image */}
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-hubBlue/10 rounded-lg"></div>
                <div className="relative bg-zinc-800/70 backdrop-blur-sm p-2 rounded-lg shadow-xl">
                  <img 
                    src="/images/hub-booking-placeholder.jpg" 
                    alt="HUB Phønix Booking" 
                    className="w-full h-auto rounded"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect fill='%23333333' width='600' height='400'/%3E%3Ctext fill='%23ffffff' font-family='Arial' font-size='36' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EBooking%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-hubBlue-light/10 rounded-full"></div>
              </div>
            </div>
            
            {/* Right column with content */}
            <div>
              <div className="bg-zinc-900/40 backdrop-blur-sm p-8 rounded-xl border border-zinc-800/50">
                <h3 className="text-2xl font-semibold text-white mb-6">Kontakt for booking</h3>
                
                <p className="text-zinc-300 mb-6">
                  Ta kontakt med oss for å booke rom eller tjenester. Vi tilbyr fleksible løsninger 
                  for både korte og lengre perioder.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-hubBlue/20 rounded-lg flex items-center justify-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hubBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-white font-medium">E-post</p>
                      <a href="mailto:booking@hubphonix.no" className="text-hubBlue hover:text-hubBlue-light">booking@hubphonix.no</a>
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
                </div>
                
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full bg-hubBlue hover:bg-hubBlue-dark text-white font-medium"
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
