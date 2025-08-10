import React, { useEffect, useRef } from 'react';
import { useGalleryAnimation } from '../../hooks/useGalleryAnimation';
import { useLazyImage } from '../../utils/imageOptimization';

const GalleryGrid = ({ images }) => {
  const gridRef = useGalleryAnimation();
  const { observeImage } = useLazyImage();
  const imageRefs = useRef([]);

  return (
    <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((src, index) => (
        <div 
          key={index} 
          className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 opacity-0 scale-95"
        >
          <img 
            ref={(el) => {
              imageRefs.current[index] = el;
              if (el) observeImage(el);
            }}
            src={src}
            alt={`Galería imagen ${index + 1}`}
            className="lazy w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
            width="400"
            height="256"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
