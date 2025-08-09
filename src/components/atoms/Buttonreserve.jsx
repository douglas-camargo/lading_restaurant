import React from 'react';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { contactInfo } from '../../data/contactData';
import Button from './Button';

const ButtonReserve = ({
  numero = contactInfo.phone.content,
  mensaje = contactInfo.phone.whatsappMessage,
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
