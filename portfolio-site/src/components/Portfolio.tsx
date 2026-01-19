// src/components/Portfolio.tsx
import styles from './Portfolio.module.css';
import type { Project } from '@/types';

const projects: Project[] = [
  {
    title: "E-commerce Test Automation",
    description: "A complete test automation suite for an e-commerce platform, covering UI, API, and performance testing.",
    tech: ["Selenium", "Java", "TestNG", "RestAssured", "JMeter"],
    link: "https://github.com/franciscoleiros",
    github: "https://github.com/franciscoleiros"
  },
  {
    title: "CI/CD Pipeline for Mobile App",
    description: "Designed and implemented a CI/CD pipeline for a cross-platform mobile application, enabling automated testing and deployment.",
    tech: ["Appium", "Jenkins", "Docker", "Groovy"],
    link: "https://github.com/franciscoleiros",
    github: "https://github.com/franciscoleiros"
  },
  {
    title: "Healthcare Platform Testing",
    description: "Led QA efforts for a HIPAA-compliant healthcare platform, ensuring data integrity and security through rigorous testing.",
    tech: ["Cypress", "JavaScript", "PostgreSQL", "AWS"],
    link: "https://github.com/franciscoleiros",
    github: "https://github.com/franciscoleiros"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <h2 className={styles.heading}>Featured Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tech}>
                {project.tech.map((t, i) => (
                  <span key={i} className={styles.techTag}>{t}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
