import Button from '../atoms/Button';
import ButtonReserve from '../atoms/ButtonReserve';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const HeroSection = () => {
  const { scrollToSection } = useScrollToSection();

  const handleMenuScroll = () => {
    scrollToSection('#menu');
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center" role="banner" aria-label="Página principal">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
        role="img"
        aria-label="Restaurante italiano con ambiente acogedor"
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <header>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Bienvenidos a<br />
            <span className="text-orange-400">Bella Vista</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Una experiencia culinaria excepcional donde la tradición se encuentra con la innovación
          </p>
        </header>
        
        <nav className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:justify-center max-w-[250px] sm:max-w-full mx-auto" role="navigation" aria-label="Acciones principales">
          <ButtonReserve variant="primary" aria-label="Reservar mesa en Bella Vista">
            Reservar Mesa
          </ButtonReserve>
          <Button variant="secondary" onClick={handleMenuScroll} aria-label="Ver menú del restaurante">
            Ver Menú
          </Button>
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
