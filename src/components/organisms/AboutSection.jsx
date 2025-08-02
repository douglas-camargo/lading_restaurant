import React from 'react';
import { Award, Users, Star } from 'lucide-react';
import StatCard from '../atoms/StatCard';

const AboutSection = () => {
  const stats = [
    { icon: Award, number: '38+', description: 'Años de experiencia' },
    { icon: Users, number: '50K+', description: 'Clientes satisfechos' },
    { icon: Star, number: '4.9', description: 'Calificación promedio' }
  ];

  return (
    <section id="acerca" className="py-16 sm:py-24 bg-gray-50" role="region" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <article>
            <header>
              <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
            </header>
            <div className="prose prose-lg">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Desde 1985, Bella Vista ha sido el hogar de la auténtica cocina mediterránea en el corazón de la ciudad. 
                Nuestro chef ejecutivo, con más de 20 años de experiencia, combina técnicas tradicionales con 
                ingredientes frescos y locales para crear experiencias gastronómicas inolvidables.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Cada plato cuenta una historia, cada ingrediente es cuidadosamente seleccionado, y cada experiencia 
                está diseñada para transportarte a las costas del Mediterráneo.
              </p>
            </div>
            
            <aside className="grid grid-cols-3 gap-8" role="complementary" aria-label="Estadísticas del restaurante">
              {stats.map((stat, index) => (
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
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Chef profesional preparando platos italianos en la cocina de Bella Vista" 
              className="rounded-lg shadow-xl w-full h-96 object-cover"
              loading="lazy"
            />
            <figcaption className="sr-only">Chef preparando comida italiana tradicional</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;