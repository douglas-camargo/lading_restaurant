import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactInfo from '../atoms/ContactInfo';
import GoogleMap from './GoogleMap';
import Buttonreserve from '../atoms/Buttonreserve';
import { handleWhatsappClick } from '../../../utils/FormatUtil';

const ContactForm = () => {

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <address className="not-italic">
        <div className="space-y-8">
          <ContactInfo icon={MapPin} title="Dirección">
            <p>Av. Principal 123, Centro Histórico<br />Ciudad, Estado 12345</p>
          </ContactInfo>

          <ContactInfo icon={Phone} title="Teléfono">
            <button 
              onClick={() => handleWhatsappClick('+584241232755', 'Hola!%20quisiera%20reservar%20una%20mesa.')}
              className="text-orange-600 hover:text-orange-700 transition-all duration-300 transform hover:scale-105 hover:translate-x-1 font-medium"
              aria-label="Llamar o contactar por WhatsApp al +58 424-123-27-55"
            >
              +58 424-123-27-55
            </button>
          </ContactInfo>

          <ContactInfo icon={Mail} title="Email">
            <a 
              href="mailto:info@bellavista.com"
              className="text-orange-600 hover:text-orange-700 transition-all duration-300 transform hover:scale-105 hover:translate-x-1 font-medium"
              aria-label="Enviar email a info@bellavista.com"
            >
              info@bellavista.com
            </a>
          </ContactInfo>

          <ContactInfo icon={Clock} title="Horarios">
            <div className="space-y-1">
              <p>Lunes - Jueves: 12:00 PM - 10:00 PM</p>
              <p>Viernes - Sábado: 12:00 PM - 11:00 PM</p>
              <p>Domingo: 12:00 PM - 9:00 PM</p>
            </div>
          </ContactInfo>
        </div>

        <div className="mt-12">
          <Buttonreserve 
            variant="primary" 
            className="w-full"
            aria-label="Hacer reservación en Bella Vista"
          >
            Hacer Reservación
          </Buttonreserve>
        </div>
      </address>

      <aside>
        <GoogleMap />
      </aside>
    </div>
  );
};

export default ContactForm;