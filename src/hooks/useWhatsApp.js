const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const useWhatsApp = () => {
  const handleWhatsappClick = (numero, mensaje) => {
    const baseUrl = isMobileDevice() 
      ? 'https://api.whatsapp.com/send?' 
      : 'https://web.whatsapp.com/send?';
    
    const url = `${baseUrl}phone=${numero}&text=${mensaje}`;
    
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return { handleWhatsappClick };
};
