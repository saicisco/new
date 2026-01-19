// src/components/Hero.tsx
import styles from './Hero.module.css';

const skills: string[] = [
  "Test Automation", "Pipeline Design", "Agile/Scrum", "E2E Testing",
  "Regression Testing", "API testing", "Mobile Testing", "Playwright",
  "Selenium", "TypeScript", "Python", "Docker", "Azure DevOps", "GitHub Actions", "Jira", "Postman"
];

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.intro}>
          <h1 className={styles.name}>Francisco Perez Leiros</h1>
          <p className={styles.tagline}>
            QA Automation Engineer with over 5 years of experience specializing in architecting and deploying scalable test automation frameworks.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://github.com/saicisco" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/francisco-leiros/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
