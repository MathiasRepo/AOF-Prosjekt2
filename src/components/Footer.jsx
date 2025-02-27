import React from 'react';

export const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name</p>
        <img src="" alt="Your Company Logo" className="h-8" />
        <ul className="social-links flex space-x-6">
          <li><a href="#" aria-label="Besøk vår Facebook side" className="hover:text-blue-400 transition-colors"><i className="fab fa-facebook text-xl"></i></a></li>
          <li><a href="#" aria-label="Følg oss på Instagram" className="hover:text-pink-400 transition-colors"><i className="fab fa-instagram text-xl"></i></a></li>
          <li><a href="#" aria-label="Følg oss på LinkedIn" className="hover:text-blue-300 transition-colors"><i className="fab fa-linkedin text-xl"></i></a></li>
        </ul>
      </div>
    </div>
  </footer>
);
