import React from 'react';
import { ChefHat } from 'lucide-react';

const Logo = ({ size = 'md', showText = true, className = '' }) => {
  const sizes = {
    sm: { icon: 'h-6 w-6', text: 'text-lg' },
    md: { icon: 'h-8 w-8', text: 'text-xl' },
    lg: { icon: 'h-12 w-12', text: 'text-3xl' }
  };

  return (
    <div className={`flex items-center ${className}`}>
      <ChefHat className={`${sizes[size].icon} text-orange-600`} />
      {showText && (
        <span className={`ml-2 ${sizes[size].text} font-bold text-gray-900`}>
          Bella Vista
        </span>
      )}
    </div>
  );
};

export default Logo;