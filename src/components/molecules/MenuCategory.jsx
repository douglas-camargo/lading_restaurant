import MenuItem from '../atoms/MenuItem';

const MenuCategory = ({ category, items }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center border-b border-gray-200 pb-4">
        {category}
      </h3>
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {items.map((item, index) => (
          <div 
            key={index}
            className={`
              ${index % 2 === 0 ? 'md:border-r md:pr-8' : 'md:pl-8'}
              ${index < items.length - 2 ? 'border-b pb-6' : ''}
            `}
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