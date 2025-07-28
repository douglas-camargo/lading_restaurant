import React from 'react';
import GalleryGrid from '../molecules/GalleryGrid';

const GallerySection = () => {
  const galleryImages = [
    "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

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