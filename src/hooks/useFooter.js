import { useRef, useEffect } from 'react';

export const useFooter = () => {
  const footerRef = useRef(null);

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
            
            // Animar elementos hijos con delay escalonado
            const children = entry.target.querySelectorAll('.animate-on-scroll');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-fade-in-up');
              }, index * 200);
            });
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

  return {
    footerRef,
    handleSmoothScroll,
    handleServiceClick
  };
};
