import React, { useEffect, useRef } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from '../atoms/Logo';

const Footer = () => {
  const footerRef = useRef(null);

  const quickLinks = [
    { href: '#inicio', label: 'Inicio', id: 'inicio' },
    { href: '#acerca', label: 'Acerca', id: 'acerca' },
    { href: '#menu', label: 'Menú', id: 'menu' },
    { href: '#contacto', label: 'Contacto', id: 'contacto' }
  ];

  const services = [
    { label: 'Reservaciones' },
    { label: 'Eventos Privados' },
    { label: 'Catering' },
    { label: 'Delivery' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/' },
    { icon: Instagram, href: 'https://www.instagram.com/' },
    { icon: Twitter, href: 'https://x.com/' }
  ];

  // Función para manejar el scroll suave a las secciones
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Función para manejar clicks en servicios (sin navegación)
  const handleServiceClick = (e) => {
    e.preventDefault();
  };

  // Efecto para animar la entrada del footer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white py-12 opacity-0">
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
                  className="text-gray-300 hover:text-orange-400 social-icon-hover"
                  target='_blank'
                  rel="noopener noreferrer"
                  style={{
                    animationDelay: `${(index + 1) * 200}ms`
                  }}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-gray-300 hover:text-orange-400 transition-all duration-300 transform hover:translate-x-2 inline-block group relative link-hover-effect"
                    style={{
                      animationDelay: `${(index + 1) * 150}ms`
                    }}
                  >
                    {link.label}
                    {/* Línea animada debajo del enlace */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={service.label}>
                  <button
                    onClick={handleServiceClick}
                    className="text-gray-300 hover:text-orange-400 transition-all duration-300 transform hover:translate-x-2 inline-block group relative link-hover-effect cursor-pointer"
                    style={{
                      animationDelay: `${(index + 1) * 150}ms`
                    }}
                  >
                    {service.label}
                    {/* Línea animada debajo del enlace */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
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