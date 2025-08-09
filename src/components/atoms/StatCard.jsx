import React from 'react';
import { useIntersectionAnimation } from '../../hooks/useIntersectionAnimation';

const StatCard = ({ icon: Icon, number, description }) => {
  const cardRef = useIntersectionAnimation('animate-scale-in', 0.5);

  return (
    <div 
      ref={cardRef}
      className="text-center opacity-0 scale-95 hover:scale-105 transition-transform duration-300"
    >
      <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <Icon className="h-8 w-8 text-orange-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{number}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default StatCard;
