import React from 'react';
import { ChefHat } from 'lucide-react';

const Logo = ({ size = 'md', showText = true, className = '', textColor = 'text-gray-900' }) => {
  const sizes = {
    sm: { icon: 'h-6 w-6', text: 'text-lg' },
    md: { icon: 'h-8 w-8', text: 'text-xl' },
    lg: { icon: 'h-12 w-12', text: 'text-3xl' }
  };

  return (
    <div className={`flex items-center group cursor-pointer transition-all duration-300 hover:scale-105 ${className}`}>
      <ChefHat className={`${sizes[size].icon} text-orange-600 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110`} />
      {showText && (
        <span className={`ml-2 ${sizes[size].text} font-bold ${textColor} transition-all duration-300 group-hover:text-orange-600`}>
          Bella Vista
        </span>
      )}
    </div>
  );
};

export default Logo;