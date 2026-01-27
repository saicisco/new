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

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.text}>
          Automation QA Engineer with 5+ years of experience across web, mobile, cloud, and industrial automation systems. Strong background in manual testing foundations, with a clear progression into test automation, CI/CD integration, and system-level quality assurance.
        </p>
        <p className={styles.text}>
          Currently working as a Software Quality Assurance Test Engineer at Tetra Pak, performing Verification & Validation (V&V) of industrial automation solutions using Beckhoff and TwinCAT PLCs. My work includes system-level testing on cloud-deployed Linux (CentOS) environments, validating functional and safety requirements, and analyzing SQL-based logs to support root cause analysis and defect resolution.
        </p>
        <p className={styles.text}>
          Previously at Cemantica, I owned the end-to-end QA process and built automation frameworks using Playwright (including MCP) with TypeScript, fully integrated into Azure DevOps CI/CD pipelines. This enabled automated regression testing and improved release reliability.
        </p>
        <p className={styles.text}>
          Earlier in my career, I built strong QA fundamentals through hands-on manual, API, and cross-platform testing across web and mobile applications, working in Agile/Scrum environments and collaborating closely with developers and product teams.
        </p>
      </div>
    </section>
  );
};

export default About;
