/**
 * Funcion para verificar si se esta en un dispositivo movil, tablet o una computadora,
 * si se esta en un dispositivo movil o tablet devolvera un array de informacion sobre
 * el dispositvo de lo contrario si se en una computadora devolvera null
 */

export const Dispositivo = {
  Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  evaluarDispositivo() {
    return (Dispositivo.Android() || Dispositivo.BlackBerry() || Dispositivo.iOS() || Dispositivo.Opera() || Dispositivo.Windows());
  }
};

export const handleWhatsappClick = (numero, mensaje) => {
    const versionPc = 'https://web.whatsapp.com/send?';
    const versionMobile = 'https://api.whatsapp.com/send?';
  
    // Determina la URL base según el dispositivo
    const baseUrl = Dispositivo.evaluarDispositivo() === null ? versionPc : versionMobile;
    
    // Construye la URL completa
    const url = `${baseUrl}phone=${numero}&text=${mensaje}`;
  
    // Abre la URL en una nueva pestaña
    window.open(url, '_blank', 'noopener,noreferrer');
  };