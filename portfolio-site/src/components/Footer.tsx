// src/components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <h2 className={styles.heading}>Get in Touch</h2>
        <p className={styles.text}>
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        <div className={styles.contactLinks}>
          <a href="mailto:Fran.pl@icloud.com" className={styles.contactLink}>Fran.pl@icloud.com</a>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/francisco-leiros/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Francisco Perez Leiros. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
