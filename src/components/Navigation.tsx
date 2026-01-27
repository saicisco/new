/**
 * Navigation.tsx - Fixed Navigation Bar Component
 * 
 * This component renders a sticky navigation bar at the top of the page.
 * 
 * Features:
 * - Fixed positioning that stays at the top during scrolling
 * - Logo badge with gradient border and initials
 * - Active section highlighting based on scroll position
 * - Mobile hamburger menu for better mobile UX
 * - Contact button with gradient styling
 * - Dynamic styling that changes appearance when scrolled down
 * - Smooth scroll navigation to different sections of the page
 * - Responsive design that adapts to different screen sizes
 */

import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['about', 'experience', 'portfolio', 'blog'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    window.location.href = 'mailto:Fran.pl@icloud.com?subject=Portfolio Contact - Inquiry';
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logoContainer}>
          <div className={styles.logoBadge}>
            <span>FP</span>
          </div>
          <span className={styles.logoText}>Francisco Perez Leiros</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? styles.active : ''}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={activeSection === 'experience' ? styles.active : ''}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#portfolio" 
                className={activeSection === 'portfolio' ? styles.active : ''}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#blog" 
                className={activeSection === 'blog' ? styles.active : ''}
              >
                Blog
              </a>
            </li>
          </ul>
          <button onClick={handleContactClick} className={styles.contactButton}>
            <Mail size={18} />
            <span>Contact</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`${styles.mobileMenu} ${styles.open}`}>
          <ul className={styles.mobileNavLinks}>
            <li>
              <a 
                href="#about" 
                onClick={handleLinkClick}
                className={activeSection === 'about' ? styles.active : ''}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                onClick={handleLinkClick}
                className={activeSection === 'experience' ? styles.active : ''}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#portfolio" 
                onClick={handleLinkClick}
                className={activeSection === 'portfolio' ? styles.active : ''}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#blog" 
                onClick={handleLinkClick}
                className={activeSection === 'blog' ? styles.active : ''}
              >
                Blog
              </a>
            </li>
          </ul>
          <button onClick={handleContactClick} className={styles.mobileContactButton}>
            <Mail size={18} />
            <span>Contact Me</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
