const MenuItem = ({ name, price, description, image }) => {
  const itemContainer = "flex gap-4";
  const imageContainer = "flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden";
  const imageStyle = "w-full h-full object-cover";
  const contentContainer = "flex-1";
  const headerContainer = "flex justify-between items-start mb-2";
  const itemName = "text-lg font-semibold text-gray-900";
  const itemPrice = "text-lg font-bold text-orange-600";
  const itemDescription = "text-gray-600";

  return (
    <article className={itemContainer}>
      <figure className={imageContainer}>
        <img 
          src={image} 
          alt={`${name} - ${description}`}
          className={imageStyle}
          loading="lazy"
          width="96"
          height="96"
        />
      </figure>
      <div className={contentContainer}>
        <header className={headerContainer}>
          <h4 className={itemName}>{name}</h4>
          <span className={itemPrice} aria-label={`Precio: ${price}`}>{price}</span>
        </header>
        <p className={itemDescription}>{description}</p>
      </div>
    </article>
  );
};

export default MenuItem;
