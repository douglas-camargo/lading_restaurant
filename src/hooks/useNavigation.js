import { useState, useEffect } from 'react';

export const useNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { href: '#inicio', label: 'Inicio', id: 'inicio' },
    { href: '#acerca', label: 'Acerca', id: 'acerca' },
    { href: '#menu', label: 'Menú', id: 'menu' },
    { href: '#galeria', label: 'Galería', id: 'galeria' },
    { href: '#contacto', label: 'Contacto', id: 'contacto' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detectar sección activa durante el scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.querySelector(item.href)
      })).filter(section => section.element);

      const scrollPosition = window.scrollY + 100; // Offset para el header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.element.offsetTop;
        const sectionHeight = section.element.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setActiveSection(id);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Cerrar menú móvil si está abierto
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return {
    isMenuOpen,
    activeSection,
    navItems,
    toggleMenu,
    handleNavClick
  };
};
