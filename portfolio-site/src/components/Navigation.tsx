// src/components/Navigation.tsx
import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo}>
          Francisco Perez Leiros
        </a>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
