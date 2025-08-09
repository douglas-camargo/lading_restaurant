import React from 'react';
import { ChefHat } from 'lucide-react';
import { logoContent } from '../../data/logoData';

const Logo = ({ size = 'md', showText = true, className = '', textColor = 'text-gray-900' }) => {
  return (
    <div className={`flex items-center group cursor-pointer transition-all duration-300 hover:scale-105 ${className}`}>
      <ChefHat className={`${logoContent.sizes[size].icon} text-orange-600 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110`} />
      {showText && (
        <span className={`ml-2 ${logoContent.sizes[size].text} font-bold ${textColor} transition-all duration-300 group-hover:text-orange-600`}>
          {logoContent.name}
        </span>
      )}
    </div>
  );
};

export default Logo;
