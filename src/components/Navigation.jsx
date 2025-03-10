import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getImagePath } from '../utils/imagePath';

export const Navigation = ({ hasGradientBackground = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      window.location.href = '/#' + sectionId;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMenuOpen) toggleMenu();
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2" 
          : hasGradientBackground 
            ? "bg-gradient-to-r from-hub-blue to-hub-blue-dark py-4" 
            : "bg-transparent py-4"
      }`}
    >
      <nav
        aria-label="Hovednavigasjon"
        className="container mx-auto px-4 flex flex-wrap items-center justify-between"
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={getImagePath(isScrolled 
                  ? "/img/Logo HUB Phonix.png"
                  : "/img/HUB PHONIX LOGO Farge-Hvit.png")}
              alt="HUB Phønix Logo"
              className="h-10 md:h-12 transition-all duration-300"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className={`p-2 rounded-xl ${
              isScrolled ? "text-gray-800" : "text-white"
            } hover:bg-white/10 transition-colors duration-200`}
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
                onClick={(e) => scrollToSection(e, 'kontakt')}
                className={`font-medium transition-all duration-300 block py-2 px-4 rounded-xl border-2 ${
                  isScrolled
                    ? "text-gray-800 border-transparent hover:border-gray-200 hover:bg-gray-50"
                    : "text-white border-white/10 hover:border-white/30 hover:bg-white/10"
                }`}
              >
                Kontakt oss
              </a>
            </li>
            <li className="relative group">
              <a
                href="#faq"
                onClick={(e) => scrollToSection(e, 'faq')}
                className={`font-medium transition-all duration-300 block py-2 px-4 rounded-xl border-2 ${
                  isScrolled
                    ? "text-gray-800 border-transparent hover:border-gray-200 hover:bg-gray-50"
                    : "text-white border-white/10 hover:border-white/30 hover:bg-white/10"
                }`}
              >
                Ofte stilte spørsmål
              </a>
            </li>
          </ul>
        </div>

        {/* Booking button - desktop */}
        <div className="hidden md:block">
          <Link
            to="/booking"
            className={`group inline-flex items-center px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-[1.02] ${
              isScrolled
                ? "bg-white/10 backdrop-blur-sm text-hub-blue-dark border-2 border-hub-blue-dark/30 hover:border-hub-blue-dark/50 hover:bg-white/20 shadow-[0_4px_16px_rgba(0,123,255,0.1)] hover:shadow-[0_8px_32px_rgba(0,123,255,0.2)]"
                : "bg-white text-hub-blue-dark shadow-[0_4px_16px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.4)] border-2 border-white hover:border-white"
            }`}
          >
            <span>Booking</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-full left-0 right-0 flex-col w-full bg-white/90 backdrop-blur-md shadow-lg md:hidden transition-all duration-200 ease-in-out`}
        >
          <ul className="flex flex-col w-full p-2 space-y-2">
            <li>
              <a
                href="#kontakt"
                onClick={(e) => scrollToSection(e, 'kontakt')}
                className="block py-3 px-6 text-gray-800 hover:bg-gray-50 border-2 border-transparent hover:border-gray-200 rounded-xl transition-all duration-300"
              >
                Kontakt oss
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={(e) => scrollToSection(e, 'faq')}
                className="block py-3 px-6 text-gray-800 hover:bg-gray-50 border-2 border-transparent hover:border-gray-200 rounded-xl transition-all duration-300"
              >
                Ofte stilte spørsmål
              </a>
            </li>
            <li>
              <Link
                to="/booking"
                className="group inline-flex items-center justify-between w-full py-3 px-6 text-white font-bold bg-gradient-to-r from-hub-blue to-hub-blue-dark hover:from-hub-blue-dark hover:to-hub-blue rounded-xl border-2 border-transparent hover:border-hub-blue-light transition-all duration-300 shadow-lg hover:shadow-[0_8px_32px_rgba(0,123,255,0.3)]"
                onClick={toggleMenu}
              >
                <span>Booking</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
