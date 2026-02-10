/**
 * Portfolio.tsx - Projects Showcase Section Component
 * 
 * This component displays a grid of featured projects from real work experience.
 * 
 * Features:
 * - Responsive grid layout (auto-fit columns)
 * - Project cards with hover animations
 * - Technology tags for each project
 * - Modal view for detailed project information
 * - Dark background (Crust) to alternate with other sections
 * 
 * Data structure (Project interface):
 * - title: Project name
 * - company: Company name
 * - description: Brief project overview
 * - tech: Array of technologies used
 * - link: URL to project or demo
 * - github: Optional GitHub repository link
 * - detailContent: Full markdown content for detailed view
 * 
 * Featured projects (from most recent to oldest):
 * - Industrial Automation V&V System (Tetra Pak)
 * - CI/CD Test Automation Pipeline (Cemantica)
 * - Multi-Platform QA Testing Suite (Tudip Technologies)
 */

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import styles from './Portfolio.module.css';
import ProjectDetailModal from './ProjectDetailModal';
import type { Project } from '@/types';
import { useLanguage } from '@/i18n/LanguageContext';

const projectDetails = [
  {
    tech: ["Beckhoff PLC", "TwinCAT", "Azure DevOps", "Linux", "SQL", "Docker"],
    link: "#portfolio",
    github: undefined,
  },
  {
    tech: ["Playwright", "TypeScript", "Azure DevOps", "CI/CD", "JavaScript"],
    link: "#portfolio",
    github: undefined,
  },
  {
    tech: ["Postman", "SoapUI", "TestRail", "Jira", "Jenkins", "SQL"],
    link: "#portfolio",
    github: undefined,
  }
];

const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Combine translated text (including detailContent) with local project details (tech, links)
  const projects: Project[] = t.portfolio.projects.map((translatedProject, index) => ({
    ...translatedProject,
    tech: projectDetails[index].tech,
    link: projectDetails[index].link,
    github: projectDetails[index].github,
  }));

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <h2 className={styles.heading}>{t.portfolio.heading}</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.company}>{project.company}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tech}>
                {project.tech.map((t, i) => (
                  <span key={i} className={styles.techTag}>{t}</span>
                ))}
              </div>
              <button 
                onClick={() => handleViewProject(project)} 
                className={styles.viewButton}
              >
                <span>{t.portfolio.viewDetails}</span>
                <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectDetailModal 
          project={selectedProject} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};

export default Portfolio;
