const MenuItem = ({ name, price, description, image }) => {
  return (
    <article className="flex gap-4">
      <figure className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={`${name} - ${description}`}
          className="w-full h-full object-cover"
          loading="lazy"
          width="96"
          height="96"
        />
      </figure>
      <div className="flex-1">
        <header className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
          <span className="text-lg font-bold text-orange-600" aria-label={`Precio: ${price}`}>{price}</span>
        </header>
        <p className="text-gray-600">{description}</p>
      </div>
    </article>
  );
};

export default MenuItem;
