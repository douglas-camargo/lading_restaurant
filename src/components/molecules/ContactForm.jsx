import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactInfo from '../atoms/ContactInfo';
import GoogleMap from './GoogleMap';
import ButtonReserve from '../atoms/Buttonreserve';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { contactInfo } from '../../data/contactData';

const ContactForm = () => {
  const { handleWhatsappClick } = useWhatsApp();

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <address className="not-italic">
        <div className="space-y-8">
          <ContactInfo icon={MapPin} title={contactInfo.address.title}>
            <p>{contactInfo.address.content}</p>
          </ContactInfo>

          <ContactInfo icon={Phone} title={contactInfo.phone.title}>
            <button 
              onClick={() => handleWhatsappClick(contactInfo.phone.content, contactInfo.phone.whatsappMessage)}
              className="text-orange-600 hover:text-orange-700 transition-all duration-300 transform hover:scale-105 hover:translate-x-1 font-medium"
              aria-label={`Llamar o contactar por WhatsApp al ${contactInfo.phone.content}`}
            >
              {contactInfo.phone.content}
            </button>
          </ContactInfo>

          <ContactInfo icon={Mail} title={contactInfo.email.title}>
            <a 
              href={`mailto:${contactInfo.email.content}`}
              className="text-orange-600 hover:text-orange-700 transition-all duration-300 transform hover:scale-105 hover:translate-x-1 font-medium"
              aria-label={`Enviar email a ${contactInfo.email.content}`}
            >
              {contactInfo.email.content}
            </a>
          </ContactInfo>

          <ContactInfo icon={Clock} title={contactInfo.hours.title}>
            <div className="space-y-1">
              {contactInfo.hours.content.map((hour, index) => (
                <p key={index}>{hour}</p>
              ))}
            </div>
          </ContactInfo>
        </div>

        <div className="mt-12">
          <ButtonReserve 
            variant="primary" 
            className="w-full"
            aria-label="Hacer reservación en Bella Vista"
          >
            Hacer Reservación
          </ButtonReserve>
        </div>
      </address>

      <aside>
        <GoogleMap />
      </aside>
    </div>
  );
};

export default ContactForm;