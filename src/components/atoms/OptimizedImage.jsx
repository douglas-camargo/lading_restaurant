import React, { useEffect, useRef } from 'react';
import { useLazyImage, getOptimizedImageFormat, getResponsiveImageSizes } from '../../utils/imageOptimization';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  sizes = "100vw",
  priority = false,
  ...props 
}) => {
  const { observeImage } = useLazyImage();
  const imageRef = useRef(null);

  useEffect(() => {
    // Optimizar formato de imagen para WebP si está disponible
    const optimizeImage = async () => {
      const optimizedSrc = await getOptimizedImageFormat(src);
      if (imageRef.current && optimizedSrc !== src) {
        imageRef.current.dataset.src = optimizedSrc;
      }
    };
    
    if (!priority) {
      optimizeImage();
    }
  }, [src, priority]);

  // Generar srcSet responsivo
  const responsiveSizes = getResponsiveImageSizes(width || 800);
  const srcSet = `${src}&w=${responsiveSizes.sm} ${responsiveSizes.sm}w, ${src}&w=${responsiveSizes.md} ${responsiveSizes.md}w, ${src}&w=${responsiveSizes.lg} ${responsiveSizes.lg}w`;

  return (
    <img 
      ref={(el) => {
        imageRef.current = el;
        if (el && !priority) observeImage(el);
      }}
      src={priority ? src : undefined}
      data-src={priority ? undefined : src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={`${priority ? '' : 'lazy'} ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      width={width}
      height={height}
      {...props}
    />
  );
};

export default OptimizedImage;
