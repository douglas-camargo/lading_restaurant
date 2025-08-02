import React from 'react';
import { handleWhatsappClick } from '../../../utils/FormatUtil';
import Button from './Button';

const Buttonreserve = ({
  numero = '+584241232755',
  mensaje = 'Hola!%20quisiera%20reservar%20una%20mesa.',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
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

export default Buttonreserve;