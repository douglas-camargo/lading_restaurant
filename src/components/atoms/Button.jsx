import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 transform hover:scale-105';
  
  const variants = {
    primary: 'bg-orange-600 hover:bg-orange-700 text-white',
    secondary: 'border-2 border-white hover:bg-white hover:text-gray-900 text-white',
    outline: 'border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
  };
  
  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-8',
    lg: 'py-4 px-10 text-lg'
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;