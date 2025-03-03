"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Default logos with real images
const DEFAULT_LOGOS = [
  {
    id: 1,
    name: "HUB Phønix",
    logo: "/images/logos/partners/hvit_logo-1024x214.png",
  },
  {
    id: 2,
    name: "IDG",
    logo: "/images/logos/partners/IDG_Logo_Horizontal_Text_Black.png",
  },
  {
    id: 3,
    name: "NCCE",
    logo: "/images/logos/partners/logo-ncce-no.png",
  },
  {
    id: 4,
    name: "Mobile",
    logo: "/images/logos/partners/mobillogo.png",
  },
  {
    id: 5,
    name: "Equinor",
    logo: "https://via.placeholder.com/150x80?text=Equinor",
  },
  { id: 6, name: "NTNU", logo: "https://via.placeholder.com/150x80?text=NTNU" },
  {
    id: 7,
    name: "Sintef",
    logo: "https://via.placeholder.com/150x80?text=Sintef",
  },
  {
    id: 8,
    name: "Sparebank1",
    logo: "https://via.placeholder.com/150x80?text=Sparebank1",
  },
  {
    id: 9,
    name: "Vipps",
    logo: "https://via.placeholder.com/150x80?text=Vipps",
  },
];

// Animation settings
const CYCLE_DURATION = 3000; // 3 seconds per logo
const ANIMATION_DURATION = 0.5; // 0.5 seconds for animation

// Logo component
const Logo = ({ logo, isActive }) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={logo.id}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          exit={{
            y: "-10%",
            opacity: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
        >
          <img
            src={logo.logo}
            alt={logo.name}
            className="max-h-full max-w-full object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// LogoCarousel component
export const LogoCarousel = ({
  logos = DEFAULT_LOGOS,
  columns = 3,
  className,
  ...props
}) => {
  // State for active logos in each column
  const [activeIndices, setActiveIndices] = useState([]);

  // Create columns with random logos
  const logoColumns = useMemo(() => {
    const result = [];
    const logosPerColumn = Math.ceil(logos.length / columns);

    // Shuffle logos for random distribution
    const shuffledLogos = [...logos].sort(() => Math.random() - 0.5);

    for (let i = 0; i < columns; i++) {
      const startIndex = i * logosPerColumn;
      const columnLogos = shuffledLogos.slice(
        startIndex,
        startIndex + logosPerColumn
      );

      // If we don't have enough logos, repeat some
      if (columnLogos.length < logosPerColumn && logos.length > 0) {
        const remaining = logosPerColumn - columnLogos.length;
        columnLogos.push(...shuffledLogos.slice(0, remaining));
      }

      result.push(columnLogos);
    }

    return result;
  }, [logos, columns]);

  // Initialize active indices
  useEffect(() => {
    setActiveIndices(logoColumns.map(() => 0));
  }, [logoColumns]);

  // Cycle through logos
  useEffect(() => {
    const intervals = logoColumns.map((column, columnIndex) => {
      return setInterval(() => {
        setActiveIndices((prev) => {
          const newIndices = [...prev];
          newIndices[columnIndex] =
            (newIndices[columnIndex] + 1) % column.length;
          return newIndices;
        });
      }, CYCLE_DURATION + columnIndex * 500); // Stagger the animations
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [logoColumns]);

  return (
    <section
      id="samarbeidspartnere"
      className="relative pt-8 pb-32 overflow-hidden z-10"
    >
      {/* Background elements removed - now shared in App.jsx */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-museo drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
            Våre Samarbeidspartnere
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Vi er stolte av å samarbeide med disse fantastiske selskapene og
            organisasjonene!
          </p>
        </div>

        <div
          className={twMerge(
            clsx(
              "grid gap-8 mx-auto",
              {
                "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": columns === 3,
                "grid-cols-1 md:grid-cols-2": columns === 2,
                "grid-cols-1": columns === 1,
              },
              className
            )
          )}
          {...props}
        >
          {logoColumns.map((column, columnIndex) => (
            <div
              key={`column-${columnIndex}`}
              className="relative h-32 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-white border-opacity-20 transform transition-transform hover:scale-105 duration-300"
            >
              {column.map((logo, logoIndex) => (
                <Logo
                  key={`logo-${columnIndex}-${logo.id}`}
                  logo={logo}
                  isActive={activeIndices[columnIndex] === logoIndex}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative angle removed - now in App.jsx */}
    </section>
  );
};
