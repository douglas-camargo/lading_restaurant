/**
 * Utilidades para el manejo de WhatsApp y detección de dispositivos
 */

// Detector de dispositivos móviles simplificado
const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

/**
 * Abre WhatsApp con un número y mensaje específico
 * @param {string} numero - Número de teléfono con código de país
 * @param {string} mensaje - Mensaje predefinido
 */
export const handleWhatsappClick = (numero, mensaje) => {
  const baseUrl = isMobileDevice() 
    ? 'https://api.whatsapp.com/send?' 
    : 'https://web.whatsapp.com/send?';
  
  const url = `${baseUrl}phone=${numero}&text=${mensaje}`;
  
  window.open(url, '_blank', 'noopener,noreferrer');
};