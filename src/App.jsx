import React, { useEffect, useState } from 'react';
import Navigation from './components/molecules/Navigation';
import HeroSection from './components/organisms/HeroSection';
import AboutSection from './components/organisms/AboutSection';
import MenuSection from './components/organisms/MenuSection';
import GallerySection from './components/organisms/GallerySection';
import ContactSection from './components/organisms/ContactSection';
import Footer from './components/organisms/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simular tiempo de carga y luego mostrar el contenido
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`bg-white transition-opacity duration-1000 app-container ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
