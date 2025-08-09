import React from 'react';
import StatCard from '../atoms/StatCard';
import { usePageLoadAnimation } from '../../hooks/usePageLoadAnimation';
import { useAboutData } from '../../hooks/useAboutData';
import { useMultipleIntersectionAnimation } from '../../hooks/useIntersectionAnimation';
import { aboutStats, aboutContent } from '../../data/aboutData';

const AboutSection = () => {
  const sectionRef = usePageLoadAnimation();
  const { 
    titleRef, 
    contentRef, 
    imageRef, 
    statsRef
  } = useAboutData();

  // Configurar animaciones de intersección
  useMultipleIntersectionAnimation([
    { ref: titleRef, animationClass: 'animate-fade-in-left' },
    { ref: contentRef, animationClass: 'animate-fade-in-up' },
    { ref: imageRef, animationClass: 'animate-fade-in-right' },
    { ref: statsRef, animationClass: 'animate-fade-in-up' }
  ]);

  return (
    <section 
      ref={sectionRef}
      id="acerca" 
      className="py-16 sm:py-24 bg-gray-50 opacity-0 translate-y-8" 
      role="region" 
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <article>
            <header>
              <h2 
                ref={titleRef}
                id="about-heading" 
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 opacity-0 translate-x-8"
              >
                {aboutContent.title}
              </h2>
            </header>
            <div 
              ref={contentRef}
              className="prose prose-lg opacity-0 translate-y-8"
            >
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className={`text-lg text-gray-600 leading-relaxed ${
                    index === aboutContent.paragraphs.length - 1 ? 'mb-8' : 'mb-6'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            
            <aside 
              ref={statsRef}
              className="grid grid-cols-3 gap-8 opacity-0 translate-y-8" 
              role="complementary" 
              aria-label="Estadísticas del restaurante"
            >
              {aboutStats.map((stat, index) => (
                <StatCard
                  key={index}
                  icon={stat.icon}
                  number={stat.number}
                  description={stat.description}
                />
              ))}
            </aside>
          </article>
          
          <figure className="mt-12 lg:mt-0">
            <img 
              ref={imageRef}
              src={aboutContent.image.src}
              alt={aboutContent.image.alt}
              className="rounded-lg shadow-xl w-full h-96 object-cover opacity-0 translate-x-8"
              loading="lazy"
            />
            <figcaption className="sr-only">{aboutContent.image.caption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
