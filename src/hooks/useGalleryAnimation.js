import { useRef, useEffect } from 'react';

export const useGalleryAnimation = (delay = 150, threshold = 0.1) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-scale-in');
              }, index * delay);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  return gridRef;
};
