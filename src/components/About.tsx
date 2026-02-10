/**
 * About.tsx - About Me Section Component
 * 
 * This component renders the "About Me" section of the portfolio.
 * 
 * Purpose:
 * - Provides detailed professional background and career narrative
 * - Highlights key achievements and specializations
 * - Describes current role and responsibilities
 * - Shows career progression and growth areas
 * 
 * Content includes:
 * - Overall experience summary (5+ years in QA automation)
 * - Current role at Tetra Pak (industrial automation, V&V testing)
 * - Previous role at Cemantica (test automation frameworks, CI/CD)
 * - Career foundation (manual testing, API testing, Agile/Scrum)
 * 
 * The section uses a darker background (Crust color) to differentiate it visually.
 */

import styles from './About.module.css';
import { useLanguage } from '@/i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className={styles.heading}>{t.about.heading}</h2>
        {t.about.paragraphs.map((paragraph, index) => (
          <p key={index} className={styles.text}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
