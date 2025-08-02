import React from 'react';
import MenuCategory from '../molecules/MenuCategory';
import Button from '../atoms/Button';
import { featuredMenuItems, menuData } from '../../data/menuData';

const MenuSection = () => {
  const [showFullMenu, setShowFullMenu] = React.useState(false);
  
  const currentMenuItems = showFullMenu ? menuData : featuredMenuItems;

  const handleToggleMenu = () => {
    setShowFullMenu(!showFullMenu);
    // Scroll suave en lugar de window.location.href
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-16 sm:py-24" role="region" aria-labelledby="menu-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 id="menu-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Menú
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre una selección cuidadosamente elaborada de nuestros platos más populares
          </p>
        </header>

        <main className="grid gap-12 lg:gap-16" role="main" aria-label="Categorías del menú">
          {currentMenuItems.map((category, index) => (
            <MenuCategory
              key={index}
              category={category.category}
              items={category.items}
            />
          ))}
        </main>

        <footer className="text-center mt-12">
          <Button 
            variant="primary" 
            onClick={handleToggleMenu}
            aria-label={showFullMenu ? 'Ver menú destacado' : 'Ver menú completo completo'}
          >
            {showFullMenu ? 'Ver Menú Destacado' : 'Ver Menú Completo'}
          </Button>
        </footer>
      </div>
    </section>
  );
};

export default MenuSection;