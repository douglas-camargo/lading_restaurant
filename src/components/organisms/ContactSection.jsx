import React from 'react';
import ContactForm from '../molecules/ContactForm';
import { usePageLoadAnimation } from '../../hooks/usePageLoadAnimation';
import { useIntersectionAnimation } from '../../hooks/useIntersectionAnimation';
import { sectionContent } from '../../data/contactData';

const ContactSection = () => {
  const sectionRef = usePageLoadAnimation();
  const headerRef = useIntersectionAnimation('animate-fade-in-up');

  return (
    <section 
      ref={sectionRef}
      id="contacto" 
      className="py-16 sm:py-24 opacity-0 translate-y-8" 
      role="region" 
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header 
          ref={headerRef}
          className="text-center mb-16 opacity-0 translate-y-8"
        >
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {sectionContent.title}
          </h2>
          <p className="text-xl text-gray-600">
            {sectionContent.subtitle}
          </p>
        </header>

        <main>
          <ContactForm />
        </main>
      </div>
    </section>
  );
};

export default ContactSection;
