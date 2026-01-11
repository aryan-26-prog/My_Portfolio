// src/hooks/useScrollAnimation.js
import { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    ...options
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return [ref, controls];
};

export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      ref.current.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
};