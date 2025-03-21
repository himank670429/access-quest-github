
import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  stagger?: boolean;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = '', 
  threshold = 0.1,
  stagger = false
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const baseClassName = "animate-on-scroll";
  const staggerClassName = stagger ? "stagger-children" : "";
  const visibleClassName = isVisible ? "visible" : "";

  return (
    <div 
      ref={ref} 
      className={`${baseClassName} ${staggerClassName} ${visibleClassName} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
