import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactInfo from '../atoms/ContactInfo';
import GoogleMap from './GoogleMap';
import Buttonreserve from '../atoms/Buttonreserve';
import { handleWhatsappClick } from '../../../utils/FormatUtil';

const ContactForm = () => {

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <div>
        <div className="space-y-8">
          <ContactInfo icon={MapPin} title="Dirección">
            <p>Av. Principal 123, Centro Histórico<br />Ciudad, Estado 12345</p>
          </ContactInfo>

          <ContactInfo icon={Phone} title="Teléfono">
            <button onClick={() => handleWhatsappClick('+584241232755', 'Hola!%20quisiera%20reservar%20una%20mesa.')}>+58 424-123-27-55</button>
          </ContactInfo>

          <ContactInfo icon={Mail} title="Email">
            <p>info@bellavista.com</p>
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
          <Buttonreserve variant="primary" className="w-full">
            Hacer Reservación
          </Buttonreserve>
          {/* <Button variant="primary" className="w-full">
            Hacer Reservación
          </Button> */}
        </div>
      </div>

      <GoogleMap />
    </div>
  );
};

export default ContactForm;