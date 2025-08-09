import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  disabled = false,
  ...props 
}) => {
  // Clases base que se aplican a todos los botones
  const baseClasses = [
    'font-semibold',
    'rounded-lg', 
    'transition-all',
    'duration-300',
    'transform',
    'hover:scale-105',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-orange-500',
    'focus:ring-offset-2',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:transform-none'
  ].join(' ');
  
  // Variantes de botones
  const variants = {
    primary: [
      'bg-orange-600',
      'hover:bg-orange-700',
      'text-white',
      'shadow-lg',
      'hover:shadow-xl'
    ].join(' '),
    secondary: [
      'border-2',
      'border-white',
      'hover:bg-white',
      'hover:text-gray-900',
      'text-white',
      'shadow-lg',
      'hover:shadow-xl'
    ].join(' '),
    outline: [
      'border-2',
      'border-orange-600',
      'text-orange-600',
      'hover:bg-orange-600',
      'hover:text-white',
      'shadow-lg',
      'hover:shadow-xl'
    ].join(' '),
    ghost: [
      'text-orange-600',
      'hover:bg-orange-50',
      'hover:text-orange-700'
    ].join(' '),
    success: [
      'bg-green-600',
      'hover:bg-green-700',
      'text-white',
      'shadow-lg',
      'hover:shadow-xl'
    ].join(' ')
  };
  
  // Tamaños de botones
  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-8 text-base',
    lg: 'py-4 px-10 text-lg'
  };
  
  // Construir la clase final
  const buttonClasses = [
    baseClasses,
    variants[variant],
    sizes[size],
    className
  ].filter(Boolean).join(' ');
  
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
