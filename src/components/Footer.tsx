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
 * - Legal Notice modal with VAT and business information
 * - Centered, simple layout with good spacing
 * 
 * Content includes:
 * - "Get in Touch" heading
 * - Brief invitation message
 * - Primary email contact link
 * - Social media profile links
 * - Copyright notice with freelance and VAT information
 * - Legal Notice button and modal
 * 
 * This is a lazy-loaded component to optimize initial page load performance.
 */

import { useState } from 'react';
import styles from './Footer.module.css';
import { Github, Linkedin, X } from 'lucide-react';

const Footer = () => {
  const [showLegalNotice, setShowLegalNotice] = useState(false);

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
          &copy; {new Date().getFullYear()} Francisco Perez Leiros – Freelance – VAT IT 07192070824
        </div>
        <div className={styles.legalNoticeContainer}>
          <button 
            onClick={() => setShowLegalNotice(true)} 
            className={styles.legalNoticeButton}
          >
            Legal Notice
          </button>
        </div>
      </div>

      {showLegalNotice && (
        <div className={styles.modalOverlay} onClick={() => setShowLegalNotice(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={() => setShowLegalNotice(false)}
              aria-label="Close legal notice"
            >
              <X size={24} />
            </button>
            <h2 className={styles.modalHeading}>Legal Notice</h2>
            <div className={styles.legalInfo}>
              <div className={styles.legalSection}>
                <h3>Owner</h3>
                <p>Francisco Perez Leiros</p>
              </div>
              <div className={styles.legalSection}>
                <h3>Legal Status</h3>
                <p>Freelance professional (Partita IVA – Italy)</p>
              </div>
              <div className={styles.legalSection}>
                <h3>VAT Number (Partita IVA)</h3>
                <p>IT 07192070824</p>
              </div>
              <div className={styles.legalSection}>
                <h3>Tax Code (Codice Fiscale)</h3>
                <p>PRZFNC83H13Z600C</p>
              </div>
              <div className={styles.legalSection}>
                <h3>Registered Office</h3>
                <p>Verona, Italy</p>
              </div>
              <div className={styles.legalSection}>
                <h3>Contact</h3>
                <p>Email: <a href="mailto:fran.pl@icloud.com">fran.pl@icloud.com</a></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
