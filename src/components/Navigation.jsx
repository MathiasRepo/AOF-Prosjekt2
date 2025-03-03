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
        className="container mx-auto px-4 flex flex-wrap items-center justify-between"
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={getImagePath(isScrolled 
                ? "/img/HUB PHONIX LOGO FRG.png"
                : "/img/HUB PHONIX LOGO HVIT.png")}
            alt="HUB Phønix Logo"
            className="h-10 md:h-12 transition-all duration-300"
          />
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className={`p-2 rounded-md ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex md:items-center md:justify-center md:space-x-4`}>
          <ul className="flex space-x-2 md:space-x-6">
            <li className="relative group">
              <a
                href="#kontakt"
                className={`font-medium transition-colors block py-2 px-3 md:py-3 md:px-4 rounded-md ${
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
                className={`font-medium transition-colors block py-2 px-3 md:py-3 md:px-4 rounded-md ${
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

        {/* Booking button - desktop */}
        <div className="hidden md:block">
          <a
            href="#booking"
            className={`px-4 py-2 md:px-6 md:py-3 rounded-md font-medium transition-all transform hover:scale-105 ${
              isScrolled
                ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md"
                : "bg-white text-blue-700 shadow-lg"
            }`}
          >
            Booking
          </a>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-full left-0 right-0 flex-col w-full bg-white shadow-lg md:hidden transition-all duration-200 ease-in-out`}
        >
          <ul className="flex flex-col w-full">
            <li>
              <a
                href="#kontakt"
                className="block py-3 px-6 text-gray-800 hover:bg-gray-100 border-b border-gray-200"
                onClick={toggleMenu}
              >
                Kontakt
              </a>
            </li>
            <li>
              <a
                href="#samarbeidspartnere"
                className="block py-3 px-6 text-gray-800 hover:bg-gray-100 border-b border-gray-200"
                onClick={toggleMenu}
              >
                Samarbeidspartnere
              </a>
            </li>
            <li>
              <a
                href="#booking"
                className="block py-3 px-6 text-blue-700 font-medium hover:bg-blue-50"
                onClick={toggleMenu}
              >
                Booking
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
