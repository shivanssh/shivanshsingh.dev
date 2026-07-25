'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AnimatedSection.module.css';

export default function AnimatedSection({ children, id, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''} ${className}`}
    >
      {children}
    </section>
  );
}
