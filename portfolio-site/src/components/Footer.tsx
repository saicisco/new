/**
 * Footer.tsx - Footer/Contact Section Component
 * 
 * This component renders the footer section at the bottom of the portfolio.
 * 
 * Features:
 * - Contact information and call-to-action
 * - Email link for direct contact
 * - Social media links (GitHub, LinkedIn)
 * - Dynamic copyright year using JavaScript Date
 * - Centered, simple layout with good spacing
 * 
 * Content includes:
 * - "Get in Touch" heading
 * - Brief invitation message
 * - Primary email contact link
 * - Social media profile links
 * - Copyright notice with current year
 * 
 * This is a lazy-loaded component to optimize initial page load performance.
 */

import styles from './Footer.module.css';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
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
          <a href="https://github.com/saicisco" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/francisco-leiros/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Francisco Perez Leiros. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
