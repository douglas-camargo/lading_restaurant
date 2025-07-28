import React from 'react';
import ContactForm from '../molecules/ContactForm';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contacto & Ubicación
          </h2>
          <p className="text-xl text-gray-600">
            Estamos aquí para servirte. Ven a visitarnos o haz tu reservación
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;