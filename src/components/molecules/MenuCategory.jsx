import MenuItem from '../atoms/MenuItem';

const MenuCategory = ({ category, items }) => {
  // Constantes de clases para la categoría
  const categoryCard = "card-base card-hover";
  const categoryTitle = "text-2xl font-bold text-gray-900 mb-8 text-center border-b border-gray-200 pb-4";
  const itemsGrid = "grid gap-6 md:grid-cols-2 md:gap-8";
  
  // Función para generar clases condicionales de los items
  const getItemClasses = (index, totalItems) => {
    const baseClasses = [];
    
    // Clases para columnas en desktop
    if (index % 2 === 0) {
      baseClasses.push('md:border-r md:pr-8');
    } else {
      baseClasses.push('md:pl-8');
    }
    
    // Clases para bordes inferiores
    if (index < totalItems - 2) {
      baseClasses.push('border-b pb-6');
    }
    
    return baseClasses.join(' ');
  };

  return (
    <div className={categoryCard}>
      <h3 className={categoryTitle}>
        {category}
      </h3>
      <div className={itemsGrid}>
        {items.map((item, index) => (
          <div 
            key={index}
            className={getItemClasses(index, items.length)}
          >
            <MenuItem
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
