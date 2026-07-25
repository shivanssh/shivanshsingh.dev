'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#hero" className={styles.logo}>
          Shivansh<span className={styles.logoDot}>.dev</span>
        </a>

        <div
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <div className={styles.bar} style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
          <div className={styles.bar} style={{ opacity: mobileOpen ? 0 : 1 }}></div>
          <div className={styles.bar} style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
        </div>

        <ul className={`${styles.navLinks} ${mobileOpen ? styles.mobileOpen : ''}`}>
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={styles.navLink}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className={styles.ctaBtn}
              onClick={() => setMobileOpen(false)}
            >
              Get In Touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
