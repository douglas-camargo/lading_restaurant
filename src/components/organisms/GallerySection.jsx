import React from 'react';
import GalleryGrid from '../molecules/GalleryGrid';
import { useGallery } from '../../hooks/useGallery';

const GallerySection = () => {
  const { galleryImages } = useGallery();

  return (
    <section id="galeria" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Galería
          </h2>
          <p className="text-xl text-gray-600">
            Un vistazo a nuestros deliciosos platos y ambiente acogedor
          </p>
        </div>

        <GalleryGrid images={galleryImages} />
      </div>
    </section>
  );
};

export default GallerySection;
