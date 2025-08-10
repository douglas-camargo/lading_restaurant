import React from 'react';
import Logo from '../atoms/Logo';
import { useFooter } from '../../hooks/useFooter';
import { quickLinks, services, socialLinks, footerContent } from '../../data/footerData';

const Footer = () => {
  const {
    footerRef,
    handleSmoothScroll,
    handleServiceClick
  } = useFooter();

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white py-12 opacity-0 translate-y-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Logo size="md" textColor="text-white" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {footerContent.description}
            </p>
            <nav className="flex space-x-4" role="navigation" aria-label="Redes sociales">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-orange-400 social-icon-hover"
                  target='_blank'
                  rel="noopener noreferrer"
                  aria-label={`Síguenos en ${social.name}`}
                  style={{
                    animationDelay: `${(index + 1) * 200}ms`
                  }}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </nav>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:col-span-2">
            <nav role="navigation" aria-labelledby="quick-links-heading">
              <h3 id="quick-links-heading" className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
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
            </nav>

            <nav role="navigation" aria-labelledby="services-heading">
              <h3 id="services-heading" className="text-lg font-semibold mb-4">Servicios</h3>
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
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
