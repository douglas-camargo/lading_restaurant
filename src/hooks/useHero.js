import { useEffect, useRef } from 'react';
import { useScrollToSection } from './useScrollToSection';

export const useHero = () => {
  const { scrollToSection } = useScrollToSection();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  const handleMenuScroll = () => {
    scrollToSection('#menu');
  };

  useEffect(() => {
    // Animación secuencial al cargar la página
    const timer1 = setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.classList.add('animate-fade-in-up');
      }
    }, 300);

    const timer2 = setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fade-in-up');
      }
    }, 600);

    const timer3 = setTimeout(() => {
      if (buttonsRef.current) {
        buttonsRef.current.classList.add('animate-fade-in-up');
      }
    }, 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Constantes de clases para secciones principales
  const heroSection = "relative h-screen flex items-center justify-center";
  const backgroundImage = "absolute inset-0 bg-cover bg-center bg-no-repeat animate-scale-in";
  const overlay = "absolute inset-0 bg-black/50";
  const contentContainer = "relative z-10 text-center text-white px-4 sm:px-6 lg:px-8";
  
  // Clases para elementos de texto
  const titleBase = "text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight opacity-0 translate-y-8";
  const titleHighlight = "text-orange-400";
  const subtitleBase = "text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-0 translate-y-8";
  
  // Clases para navegación de botones
  const buttonsContainer = "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:justify-center max-w-[250px] sm:max-w-full mx-auto opacity-0 translate-y-8";

  return {
    titleRef,
    subtitleRef,
    buttonsRef,
    handleMenuScroll,
    heroSection,
    backgroundImage,
    overlay,
    contentContainer,
    titleBase,
    titleHighlight,
    subtitleBase,
    buttonsContainer
  };
};
