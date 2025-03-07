import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const ImageCarousel = () => {
  const images = [
    {
      src: `${import.meta.env.BASE_URL}img/apning.jpg`,
      alt: "Åpning av HUB Phønix",
      caption: "Åpning av HUB Phønix"
    },
    {
      src: `${import.meta.env.BASE_URL}img/apning.jpg`,
      alt: "Bilde 2 av HUB Phønix",
      caption: "Bilde 2 av HUB Phønix"
    }
  ];

  return (
    <section className="w-full py-40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-museo">
              Opplev HUB Phønix
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Ta en titt på våre moderne lokaler og fasiliteter som er designet for å inspirere kreativitet og produktivitet.
            </p>
          </div>
          
          <div className="relative">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 backdrop-blur-sm">
                        <p className="text-white text-xl font-medium">{image.caption}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -left-16 top-1/2 -translate-y-1/2">
                <CarouselPrevious className="h-14 w-14 rounded-2xl border-2 border-white/30 bg-white/10 hover:bg-white/30 hover:border-white/50 backdrop-blur-md text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 hover:-translate-x-1" />
              </div>
              <div className="absolute -right-16 top-1/2 -translate-y-1/2">
                <CarouselNext className="h-14 w-14 rounded-2xl border-2 border-white/30 bg-white/10 hover:bg-white/30 hover:border-white/50 backdrop-blur-md text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 hover:translate-x-1" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}; 