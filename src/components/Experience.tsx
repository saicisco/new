/**
 * Experience.tsx - Professional Experience Section Component
 * 
 * This component displays the professional work history in a timeline format.
 * 
 * Features:
 * - Chronological list of professional positions
 * - Company logos displayed in clean card layout
 * - Detailed role descriptions with key responsibilities
 * - Hover effects for interactive feel
 * - Responsive design that works on all screen sizes
 * 
 * Data structure (Experience interface):
 * - role: Job title
 * - company: Company name and location
 * - duration: Employment period
 * - description: Detailed responsibilities and achievements
 * - logo: Optional company logo image path
 * 
 * Includes positions at:
 * - Tetrapak (QA Test Specialist)
 * - Cemantica (QA Specialist)
 * - Tudip Technologies (QA Engineer)
 * - UTest (QA Tester)
 */

import styles from './Experience.module.css';
import { useLanguage } from '@/i18n/LanguageContext';

const logos = [
  "logos/tetrapak.png",
  "logos/cemantica.jpg",
  "logos/tudip.jpg",
  "logos/utest.jpg"
];

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <h2 className={styles.heading}>{t.experience.heading}</h2>
        <div className={styles.experienceGrid}>
          {t.experience.jobs.map((job, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.logoContainer}>
                  <img src={logos[index]} alt={`${job.company} logo`} className={styles.logo} />
                </div>
                <div className={styles.headerInfo}>
                  <h3 className={styles.role}>{job.role}</h3>
                  <h4 className={styles.company}>{job.company}</h4>
                  <span className={styles.duration}>{job.duration}</span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <ul className={styles.descriptionList}>
                  {job.description.split('. ').map((sentence, i) => (
                    sentence && <li key={i}>{sentence}.</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
