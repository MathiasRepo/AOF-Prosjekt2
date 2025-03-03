import React, { useState } from 'react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Navn er påkrevd';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'E-post er påkrevd';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Ugyldig e-postadresse';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Melding er påkrevd';
    }
    
    return errors;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(false);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="kontakt" className="py-48 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-museo">Kontakt oss</h2>
          <p className="text-xl text-gray-100">
            Har du spørsmål om HUB Phønix eller ønsker du å vite mer om våre tjenester?
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-3/5 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-white border-opacity-20">
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="mb-6 text-hub-blue-light inline-block p-3 rounded-full bg-white bg-opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 font-museo text-white">Takk for din henvendelse!</h3>
                <p className="text-white text-opacity-90">
                  Vi har mottatt din melding og vil ta kontakt med deg så snart som mulig.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-semibold mb-6 font-museo text-white">Send oss en melding</h3>
                
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                    Navn <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-white bg-opacity-20 border rounded-md focus:outline-none focus:ring-2 focus:ring-hub-blue-light text-white placeholder-white placeholder-opacity-70 ${
                      formErrors.name ? 'border-red-300' : 'border-white border-opacity-30'
                    }`}
                    placeholder="Ditt navn"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-300">{formErrors.name}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                    E-post <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-white bg-opacity-20 border rounded-md focus:outline-none focus:ring-2 focus:ring-hub-blue-light text-white placeholder-white placeholder-opacity-70 ${
                      formErrors.email ? 'border-red-300' : 'border-white border-opacity-30'
                    }`}
                    placeholder="din.epost@eksempel.no"
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-300">{formErrors.email}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-hub-blue-light text-white placeholder-white placeholder-opacity-70"
                    placeholder="Ditt telefonnummer (valgfritt)"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                    Melding <span className="text-red-300">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-2 bg-white bg-opacity-20 border rounded-md focus:outline-none focus:ring-2 focus:ring-hub-blue-light text-white placeholder-white placeholder-opacity-70 ${
                      formErrors.message ? 'border-red-300' : 'border-white border-opacity-30'
                    }`}
                    placeholder="Skriv din melding her..."
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-300">{formErrors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-white text-hub-blue-dark py-3 px-6 rounded-md font-medium transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-hub-blue-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sender...
                    </span>
                  ) : (
                    'Send melding'
                  )}
                </button>
                
                {submitError && (
                  <div className="mt-4 p-3 bg-red-900 bg-opacity-50 text-red-200 rounded-md">
                    Det oppstod en feil ved sending av skjemaet. Vennligst prøv igjen senere.
                  </div>
                )}
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="lg:w-2/5">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl shadow-xl p-8 h-full border border-white border-opacity-20">
              <h3 className="text-xl font-semibold mb-6 font-museo text-white">Kontaktinformasjon</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hub-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-hub-blue-light font-semibold">Adresse</h4>
                    <p className="mt-1 text-white">Storgata 12<br />1607 Fredrikstad</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hub-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-hub-blue-light font-semibold">E-post</h4>
                    <a href="mailto:kontakt@hubphonix.no" className="mt-1 block hover:underline text-white">kontakt@hubphonix.no</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hub-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-hub-blue-light font-semibold">Telefon</h4>
                    <a href="tel:+4712345678" className="mt-1 block hover:underline text-white">+47 123 45 678</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hub-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-hub-blue-light font-semibold">Åpningstider</h4>
                    <p className="mt-1 text-white">Mandag - Fredag: 08:00 - 17:00<br />Lørdag - Søndag: Stengt</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-hub-blue-light font-semibold mb-4">Følg oss</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-hub-blue-light transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-hub-blue-light transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-hub-blue-light transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
