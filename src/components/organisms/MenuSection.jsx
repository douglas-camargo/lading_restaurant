import React from 'react';
import MenuCategory from '../molecules/MenuCategory';
import Button from '../atoms/Button';
import { featuredMenuItems, menuData } from '../../data/menuData';

const MenuSection = () => {
  const [showFullMenu, setShowFullMenu] = React.useState(false);
  
  const currentMenuItems = showFullMenu ? menuData : featuredMenuItems;

  const handleToggleMenu = () => {
    setShowFullMenu(!showFullMenu);
    window.location.href = '#menu';
  };

  return (
    <section id="menu" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Menú
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre una selección cuidadosamente elaborada de nuestros platos más populares
          </p>
        </div>

        <div className="grid gap-12 lg:gap-16">
          {currentMenuItems.map((category, index) => (
            <MenuCategory
              key={index}
              category={category.category}
              items={category.items}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" onClick={handleToggleMenu} href="#menu">
            {showFullMenu ? 'Ver Menú Destacado' : 'Ver Menú Completo'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;