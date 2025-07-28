const MenuItem = ({ name, price, description, image }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
          <span className="text-lg font-bold text-orange-600">{price}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;