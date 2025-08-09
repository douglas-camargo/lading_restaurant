import { useRef } from 'react';

export const useAboutData = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  return { 
    titleRef, 
    contentRef, 
    imageRef, 
    statsRef
  };
};
