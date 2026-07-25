'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export default function Hero({ personalInfo }) {
  const titles = [
    'Senior UI & Frontend Engineer',
    'Design Systems & Component Architecture',
    'React.js / Next.js Specialist @ Deloitte',
    'Accessible, High-Performance Interfaces'
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[titleIndex];
    let speed = isDeleting ? 35 : 75;

    if (!isDeleting && currentText === fullText) {
      speed = 2200;
      const timer = setTimeout(() => setIsDeleting(true), speed);
      return () => clearTimeout(timer);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.ambientGlow1}></div>
      <div className={styles.ambientGlow2}></div>
      <div className={styles.gridLines}></div>

      <div className={`container ${styles.heroGrid}`}>
        {/* Left Column: Bio & Title */}
        <div>
          <div className={styles.badge}>
            <span className={styles.pulseDot}></span>
            <span>UI Developer focused on polished product experiences</span>
          </div>

          <p className={styles.greeting}>Hello, I'm</p>
          <h1 className={styles.name}>{personalInfo.name}</h1>

          <div className={styles.typewriterBox}>
            <span>{currentText}</span>
            <span className={styles.cursor}></span>
          </div>

          <p className={styles.description}>
            I build refined, accessible interfaces and scalable frontend systems with <strong>5+ years of experience</strong> across <strong>Insurance, Banking & Media</strong>. My work sits where React, Next.js, design systems, performance, and product detail meet.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.btnPrimary}>
              View Selected Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column: Restored Quick Stats Grid */}
        <div className={styles.statsGrid}>
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
