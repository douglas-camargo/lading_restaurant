// Image optimization utilities
export const optimizeImage = (src, width = 800, quality = 80) => {
  // Si es una imagen externa, devolver la URL original
  if (src.startsWith('http')) {
    return src;
  }
  
  // Para imágenes locales, puedes implementar optimización aquí
  return src;
};

// Lazy loading hook
export const useLazyImage = () => {
  const loadImage = (imgElement) => {
    if (imgElement && imgElement.dataset.src) {
      imgElement.src = imgElement.dataset.src;
      imgElement.classList.remove('lazy');
      imgElement.classList.add('loaded');
    } else if (imgElement && imgElement.src) {
      // Si no hay data-src pero sí src, solo quitar la clase lazy
      imgElement.classList.remove('lazy');
      imgElement.classList.add('loaded');
    }
  };

  const observeImage = (imgElement) => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadImage(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '50px 0px', // Cargar 50px antes de que sea visible
        threshold: 0.1
      });

      imageObserver.observe(imgElement);
    } else {
      // Fallback para navegadores que no soportan IntersectionObserver
      loadImage(imgElement);
    }
  };

  return { observeImage };
};

// Generate responsive image sizes
export const getResponsiveImageSizes = (baseWidth = 800) => {
  return {
    sm: Math.round(baseWidth * 0.5),
    md: Math.round(baseWidth * 0.75),
    lg: baseWidth,
    xl: Math.round(baseWidth * 1.25),
    '2xl': Math.round(baseWidth * 1.5)
  };
};

// WebP support detection
export const supportsWebP = () => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

// Convert image to WebP if supported
export const getOptimizedImageFormat = async (src) => {
  const webPSupported = await supportsWebP();
  if (webPSupported && src.includes('.')) {
    return src.replace(/\.[^/.]+$/, '.webp');
  }
  return src;
};
