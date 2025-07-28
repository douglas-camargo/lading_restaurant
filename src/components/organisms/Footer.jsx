import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from '../atoms/Logo';

const Footer = () => {
  const quickLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#acerca', label: 'Acerca' },
    { href: '#menu', label: 'Menú' },
    { href: '#contacto', label: 'Contacto' }
  ];

  const services = [
    { href: '#', label: 'Reservaciones' },
    { href: '#', label: 'Eventos Privados' },
    { href: '#', label: 'Catering' },
    { href: '#', label: 'Delivery' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/' },
    { icon: Instagram, href: 'https://www.instagram.com/' },
    { icon: Twitter, href: 'https://x.com/' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Logo size="md" className="text-white" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Desde 1985, ofreciendo la mejor experiencia culinaria mediterránea con ingredientes frescos y técnicas tradicionales.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  target='_blank'
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2025 Bella Vista Restaurant. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;