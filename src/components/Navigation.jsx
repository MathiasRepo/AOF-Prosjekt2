import React, { useState, useEffect } from "react";
import { getImagePath } from '../utils/imagePath';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <nav
        aria-label="Hovednavigasjon"
        className="container mx-auto px-6 flex items-center"
      >
        <div className="flex-1">
          <img
            src={getImagePath(isScrolled 
                ? "/img/HUB PHONIX LOGO FRG.png"
                : "/img/HUB PHONIX LOGO HVIT.png")}
            alt="HUB Phønix Logo"
            className="h-12 transition-all duration-300"
          />
        </div>

        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-6">
            <li className="relative group">
              <a
                href="#kontakt"
                className={`font-medium transition-colors block py-3 px-4 rounded-md ${
                  isScrolled
                    ? "text-gray-800 hover:text-blue-600 hover:bg-gray-100"
                    : "text-white hover:text-blue-200 hover:bg-white/10"
                }`}
              >
                Kontakt
              </a>
            </li>
            <li className="relative group">
              <a
                href="#samarbeidspartnere"
                className={`font-medium transition-colors block py-3 px-4 rounded-md ${
                  isScrolled
                    ? "text-gray-800 hover:text-blue-600 hover:bg-gray-100"
                    : "text-white hover:text-blue-200 hover:bg-white/10"
                }`}
              >
                Samarbeidspartnere
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex justify-end">
          <a
            href="#booking"
            className={`px-6 py-3 rounded-md font-medium transition-all transform hover:scale-105 ${
              isScrolled
                ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md"
                : "bg-white text-blue-700 shadow-lg"
            }`}
          >
            Booking
          </a>
        </div>
      </nav>
    </header>
  );
};
