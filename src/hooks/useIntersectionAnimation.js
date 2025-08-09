import { useRef, useEffect } from 'react';

export const useIntersectionAnimation = (animationClass = 'animate-fade-in-up', threshold = 0.2) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [animationClass, threshold]);

  return ref;
};

export const useMultipleIntersectionAnimation = (configs) => {
  const refs = {};

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const config = configs.find(c => c.ref.current === entry.target);
            if (config) {
              entry.target.classList.add(config.animationClass || 'animate-fade-in-up');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    configs.forEach(config => {
      if (config.ref.current) {
        observer.observe(config.ref.current);
      }
    });

    return () => observer.disconnect();
  }, [configs]);

  return refs;
};
