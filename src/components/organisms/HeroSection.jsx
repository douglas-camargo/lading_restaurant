import React from 'react';
import Button from '../atoms/Button';
import ButtonReserve from '../atoms/Buttonreserve';
import { useHero } from '../../hooks/useHero';
import { heroContent } from '../../data/heroData';

const HeroSection = () => {
  const {
    titleRef,
    subtitleRef,
    buttonsRef,
    handleMenuScroll,
    heroSection,
    backgroundImage,
    overlay,
    contentContainer,
    titleBase,
    titleHighlight,
    subtitleBase,
    buttonsContainer
  } = useHero();

  return (
    <section id="home" className={heroSection} role="banner" aria-label="Página principal">
      <div 
        className={backgroundImage}
        style={{
          backgroundImage: `url("${heroContent.backgroundImage}")`
        }}
        role="img"
        aria-label="Restaurante italiano con ambiente acogedor"
      >
        <div className={overlay}></div>
      </div>
      
      <div className={contentContainer}>
        <header>
          <h1 
            ref={titleRef}
            className={titleBase}
          >
            Bienvenidos a<br />
            <span className={titleHighlight}>{heroContent.title}</span>
          </h1>
          <p 
            ref={subtitleRef}
            className={subtitleBase}
          >
            {heroContent.description}
          </p>
        </header>
        
        <nav 
          ref={buttonsRef}
          className={buttonsContainer}
          role="navigation" 
          aria-label="Acciones principales"
        >
          <ButtonReserve variant="primary" aria-label="Reservar mesa en Bella Vista">
            {heroContent.cta.secondary}
          </ButtonReserve>
          <Button variant="secondary" onClick={handleMenuScroll} aria-label="Ver menú del restaurante">
            {heroContent.cta.primary}
          </Button>
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
