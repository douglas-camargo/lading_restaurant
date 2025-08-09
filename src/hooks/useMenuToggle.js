import { useState } from 'react';
import { useScrollToSection } from './useScrollToSection';

export const useMenuToggle = () => {
  const [showFullMenu, setShowFullMenu] = useState(false);
  const { scrollToSection } = useScrollToSection();

  const handleToggleMenu = () => {
    setShowFullMenu(!showFullMenu);
    // Scroll suave a la sección del menú
    scrollToSection('#menu');
  };

  return {
    showFullMenu,
    handleToggleMenu
  };
};
