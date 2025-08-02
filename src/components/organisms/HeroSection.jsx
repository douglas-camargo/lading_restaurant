import Button from '../atoms/Button';
import Buttonreserve from '../atoms/Buttonreserve';

const HeroSection = () => {
  const handleMenuScroll = () => {
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Bienvenidos a<br />
          <span className="text-orange-400">Bella Vista</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Una experiencia culinaria excepcional donde la tradición se encuentra con la innovación
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Buttonreserve variant="primary">
            Reservar Mesa
          </Buttonreserve>
          <Button variant="secondary" onClick={handleMenuScroll}>
            Ver Menú
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;