import React from 'react';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import Button from './Button';

const ButtonReserve = ({
  numero = '+584241232755',
  mensaje = 'Hola!%20quisiera%20reservar%20una%20mesa.',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const { handleWhatsappClick } = useWhatsApp();

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => handleWhatsappClick(numero, mensaje)}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonReserve;
