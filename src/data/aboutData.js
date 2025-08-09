import { Award, Users, Star } from 'lucide-react';

export const aboutStats = [
  { icon: Award, number: '38+', description: 'Años de experiencia' },
  { icon: Users, number: '50K+', description: 'Clientes satisfechos' },
  { icon: Star, number: '4.9', description: 'Calificación promedio' }
];

export const aboutContent = {
  title: 'Nuestra Historia',
  paragraphs: [
    'Desde 1985, Bella Vista ha sido el hogar de la auténtica cocina mediterránea en el corazón de la ciudad. Nuestro chef ejecutivo, con más de 20 años de experiencia, combina técnicas tradicionales con ingredientes frescos y locales para crear experiencias gastronómicas inolvidables.',
    'Cada plato cuenta una historia, cada ingrediente es cuidadosamente seleccionado, y cada experiencia está diseñada para transportarte a las costas del Mediterráneo.'
  ],
  image: {
    src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Chef profesional preparando platos italianos en la cocina de Bella Vista',
    caption: 'Chef preparando comida italiana tradicional'
  }
};
