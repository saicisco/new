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

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const skills: Skill[] = [
  { 
    name: "AI", 
    icon: <Brain size={18} />, 
    description: "Leveraging AI to enhance quality engineering workflows — from smarter test design to improved analysis, productivity, and automation efficiency."
  },
  { 
    name: "MCP's", 
    icon: <Network size={18} />, 
    description: "Designing and applying Playwright MCP and Model Context Protocols to improve test orchestration, maintainability, and scalable automation architectures."
  },
  { 
    name: "Test Automation", 
    icon: <TestTube2 size={18} />, 
    description: "Architecting and implementing scalable test automation frameworks that reduce regression effort and ensure consistent product quality."
  },
  { 
    name: "Pipeline Design", 
    icon: <Workflow size={18} />, 
    description: "Building and integrating CI/CD pipelines that enable continuous testing and fast feedback using Azure DevOps and GitHub Actions."
  },
  { 
    name: "Agile/Scrum", 
    icon: <Users size={18} />, 
    description: "Collaborating in Agile and Scrum teams to align testing strategies with business goals and deliver value incrementally."
  },
  { 
    name: "E2E Testing", 
    icon: <Target size={18} />, 
    description: "Validating complete user flows across front-end and backend systems to guarantee reliability in real production-like scenarios."
  },
  { 
    name: "Regression Testing", 
    icon: <FlaskConical size={18} />, 
    description: "Designing efficient regression strategies combining automation and manual validation to protect critical functionality on every release."
  },
  { 
    name: "API testing", 
    icon: <Cog size={18} />, 
    description: "Validating REST APIs for correctness, performance, and data integrity using Postman and automated test frameworks."
  },
  { 
    name: "Mobile Testing", 
    icon: <Smartphone size={18} />, 
    description: "Testing mobile applications across iOS and Android platforms to ensure functionality, usability, and cross-device consistency."
  },
  { 
    name: "Playwright", 
    icon: <Wand2 size={18} />, 
    description: "Using Playwright with TypeScript to build fast, modern, and reliable end-to-end automation frameworks for web applications."
  },
  { 
    name: "Selenium", 
    icon: <Box size={18} />, 
    description: "Applying Selenium with Python for cross-browser automation and integration into CI pipelines in legacy and hybrid test environments."
  },
  { 
    name: "TypeScript", 
    icon: <Code2 size={18} />, 
    description: "Writing clean, maintainable TypeScript code to improve test reliability, readability, and long-term framework scalability."
  },
  { 
    name: "Python", 
    icon: <Code2 size={18} />, 
    description: "Utilizing Python for test automation, API validation, data analysis, and system-level testing scenarios."
  },
  { 
    name: "Docker", 
    icon: <Container size={18} />, 
    description: "Testing and validating containerized applications and environments to ensure consistent behavior across cloud and on-prem systems."
  },
  { 
    name: "Azure DevOps", 
    icon: <CloudCog size={18} />, 
    description: "Managing test automation, pipelines, and releases within Azure DevOps to support continuous quality assurance."
  },
  { 
    name: "GitHub Actions", 
    icon: <GitMerge size={18} />, 
    description: "Automating test execution and CI workflows directly from GitHub repositories for rapid and reliable feedback."
  },
  { 
    name: "Jira", 
    icon: <BriefcaseIcon size={18} />, 
    description: "Tracking defects, test activities, and sprint progress to ensure transparency and alignment across teams."
  },
  { 
    name: "Postman", 
    icon: <GitBranch size={18} />, 
    description: "Designing and executing API test collections to validate backend services independently from the UI."
  }
];

const Hero = () => {
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
    window.open('/CV.pdf', '_blank');
    setShowCVDropdown(false);
  };

  const handleDownloadMD = () => {
    window.open('/CV.md', '_blank');
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
            <span className={styles.gradientText}>Francisco Perez Leiros</span>
          </h1>
          
          {/* Current role subtitle */}
          <p className={styles.subtitle}>
            Software Quality Assurance Test Engineer
          </p>
          
          {/* Tagline */}
          <p className={styles.tagline}>
            QA Automation Engineer with over 5 years of experience specializing in architecting and deploying scalable test automation frameworks.
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
                <span>Download CV</span>
              </button>
              {showCVDropdown && (
                <div className={styles.dropdownMenu}>
                  <button onClick={handleDownloadPDF} className={styles.dropdownItem}>
                    <Download size={16} />
                    <span>Download PDF</span>
                  </button>
                  <button onClick={handleDownloadMD} className={styles.dropdownItem}>
                    <Download size={16} />
                    <span>Download Markdown</span>
                  </button>
                </div>
              )}
            </div>
            <button onClick={handleGetInTouch} className={styles.secondaryButton}>
              <Mail size={18} />
              <span>Get in Touch</span>
            </button>
            <button onClick={handleViewWork} className={styles.secondaryButton}>
              <BriefcaseIcon size={18} />
              <span>View My Work</span>
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
