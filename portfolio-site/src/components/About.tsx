// src/components/About.tsx
import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
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
