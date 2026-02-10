/**
 * Hero.tsx - Landing/Hero Section Component
 * 
 * This component renders the hero section at the top of the portfolio page.
 * It serves as the first impression and introduction to the portfolio.
 * 
 * Features:
 * - Professional avatar with gradient border effect
 * - Full viewport height for impactful first impression
 * - Personal introduction with gradient text effects
 * - Icon-enhanced social media links (GitHub and LinkedIn)
 * - Dynamic skills grid with icons displaying technical competencies
 * - Call-to-action buttons (Download CV, Get in Touch, View My Work)
 * - Responsive layout that adapts from single to two-column on larger screens
 * 
 * The skills array includes:
 * - Testing methodologies (E2E, Regression, API testing)
 * - Automation tools (Playwright, Selenium)
 * - Programming languages (TypeScript, Python)
 * - DevOps tools (Docker, Azure DevOps, GitHub Actions)
 */

import { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { Github, Linkedin, Download, Mail, BriefcaseIcon, TestTube2, Cog, Users, Target, FlaskConical, Smartphone, Wand2, Box, Code2, GitBranch, Container, CloudCog, GitMerge, Workflow, Brain, Network, X } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const skillIcons: Record<string, React.ReactNode> = {
  ai: <Brain size={18} />,
  mcps: <Network size={18} />,
  testAutomation: <TestTube2 size={18} />,
  pipelineDesign: <Workflow size={18} />,
  agileScrum: <Users size={18} />,
  e2eTesting: <Target size={18} />,
  regressionTesting: <FlaskConical size={18} />,
  apiTesting: <Cog size={18} />,
  mobileTesting: <Smartphone size={18} />,
  playwright: <Wand2 size={18} />,
  selenium: <Box size={18} />,
  typescript: <Code2 size={18} />,
  python: <Code2 size={18} />,
  docker: <Container size={18} />,
  azureDevOps: <CloudCog size={18} />,
  githubActions: <GitMerge size={18} />,
  jira: <BriefcaseIcon size={18} />,
  postman: <GitBranch size={18} />,
};

const Hero = () => {
  const { t } = useLanguage();
  
  // Build skills array from translations
  const skills: Skill[] = Object.keys(t.skills).map(key => ({
    name: t.skills[key].name,
    icon: skillIcons[key],
    description: t.skills[key].description,
  }));
  const [showCVDropdown, setShowCVDropdown] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCVDropdown(false);
      }
    };

    if (showCVDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCVDropdown]);

  const handleDownloadCV = () => {
    setShowCVDropdown(!showCVDropdown);
  };

  const handleDownloadPDF = () => {
    window.open(`${import.meta.env.BASE_URL}CV.pdf`, '_blank');
    setShowCVDropdown(false);
  };

  const handleDownloadMD = () => {
    window.open(`${import.meta.env.BASE_URL}CV.md`, '_blank');
    setShowCVDropdown(false);
  };

  const handleGetInTouch = () => {
    window.location.href = 'mailto:Fran.pl@icloud.com?subject=Portfolio Contact - Inquiry';
  };

  const handleViewWork = () => {
    const portfolio = document.getElementById('portfolio');
    portfolio?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.intro}>
          {/* Avatar with gradient border */}
          <div className={styles.avatarContainer}>
            <div className={styles.avatarGradient}>
              <div className={styles.avatar}>
                <img src="profile.jpg" alt="Francisco Perez Leiros" className={styles.avatarImage} />
              </div>
            </div>
          </div>
          
          {/* Name with gradient effect */}
          <h1 className={styles.name}>
            <span className={styles.gradientText}>{t.hero.name}</span>
          </h1>
          
          {/* Current role subtitle */}
          <p className={styles.subtitle}>
            {t.hero.title}
          </p>
          
          {/* Tagline */}
          <p className={styles.tagline}>
            {t.hero.tagline}
          </p>
          
          {/* Social links with icons */}
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
          
          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <div className={styles.downloadButtonContainer} ref={dropdownRef}>
              <button onClick={handleDownloadCV} className={styles.primaryButton}>
                <Download size={18} />
                <span>{t.hero.downloadCV}</span>
              </button>
              {showCVDropdown && (
                <div className={styles.dropdownMenu}>
                  <button onClick={handleDownloadPDF} className={styles.dropdownItem}>
                    <Download size={16} />
                    <span>{t.hero.downloadEnglish}</span>
                  </button>
                  <button onClick={handleDownloadMD} className={styles.dropdownItem}>
                    <Download size={16} />
                    <span>{t.hero.downloadSpanish}</span>
                  </button>
                </div>
              )}
            </div>
            <button onClick={handleGetInTouch} className={styles.secondaryButton}>
              <Mail size={18} />
              <span>{t.hero.getInTouch}</span>
            </button>
            <button onClick={handleViewWork} className={styles.secondaryButton}>
              <BriefcaseIcon size={18} />
              <span>{t.hero.viewWork}</span>
            </button>
          </div>
        </div>
        
        {/* Skills grid with icons */}
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <button 
              key={index} 
              className={styles.skill}
              onClick={() => setSelectedSkill(skill)}
              aria-label={`Learn more about ${skill.name}`}
            >
              <span className={styles.skillIcon}>{skill.icon}</span>
              <span className={styles.skillName}>{skill.name}</span>
            </button>
          ))}
        </div>
        
        {/* Skill Detail Modal */}
        {selectedSkill && (
          <div className={styles.modalOverlay} onClick={() => setSelectedSkill(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button 
                className={styles.modalClose} 
                onClick={() => setSelectedSkill(null)}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <div className={styles.modalHeader}>
                <span className={styles.modalIcon}>{selectedSkill.icon}</span>
                <h3 className={styles.modalTitle}>{selectedSkill.name}</h3>
              </div>
              <p className={styles.modalDescription}>{selectedSkill.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
