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

const projects: Project[] = [
  {
    title: "Software Quality Assurance Test Engineer",
    company: "Tetra Pak",
    description: "Performed Verification & Validation for industrial automation systems using Beckhoff PLCs, including system-level testing on cloud-deployed Linux environments and SQL-based log analysis for root cause resolution.",
    tech: ["Beckhoff PLC", "TwinCAT", "Azure DevOps", "Linux", "SQL", "Docker"],
    link: "#portfolio",
    github: undefined,
    detailContent: `# Software Quality Assurance Test Engineer – Tetra Pak (Contract)

**Period:** Nov 2024 – Nov 2025 (1 yr 1 mo)  
**Location:** Modena, Emilia-Romagna, Italy · Hybrid  
**Role Type:** Contract

---

## Role Overview
As a **Software Quality Assurance Test Engineer** at **Tetra Pak**, I worked on industrial automation and cloud-based systems, focusing on **Verification & Validation (V&V)**, system-level testing, and data-driven quality analysis in complex, safety-critical environments.

---

## Key Responsibilities & Contributions

- 🏭 Performed **Verification & Validation (V&V)** for industrial automation systems using **Beckhoff PLCs and TwinCAT**, ensuring compliance with functional and safety requirements
- 🧪 Authored and executed **system-level test cases** covering control logic, system integrations, and edge-case scenarios
- ☁️ Conducted **system testing on cloud-deployed Linux (CentOS) environments**, validating stability, reliability, and real-world operational behavior
- 🗄️ Analyzed **SQL-based log data** to verify system behavior, support root cause analysis, and speed up defect resolution
- 🔗 Collaborated closely with **cross-functional engineering teams** using **Azure DevOps** for defect tracking, test execution, and continuous quality improvement

---

## Tools & Technologies

- **Industrial Automation:** Beckhoff PLC, TwinCAT
- **Cloud & Infrastructure:** Microsoft Azure, Docker, Linux (CentOS)
- **Data & Analysis:** SQL
- **QA & ALM:** Azure DevOps
- **Testing Practices:** Test Planning, Test Design, Integration & System Testing

---

## Skills & Competencies

- Verification & Validation (V&V)
- System & Integration Testing
- Industrial Automation QA
- Cloud-Based System Testing
- Log Analysis & Root Cause Investigation
- Cross-Functional Collaboration
- Quality Assurance in Safety-Critical Systems

---

## Impact
This role strengthened my expertise in **industrial and system-level quality assurance**, bridging software, cloud infrastructure, and automation systems to ensure reliability, safety, and traceability in production-critical environments.`
  },
  {
    title: "Quality Assurance Specialist",
    company: "Cemantica",
    description: "Designed and implemented automated test frameworks using Playwright with TypeScript, built a complete CI/CD pipeline from scratch integrated with Azure DevOps, enabling automated test execution within the delivery pipeline.",
    tech: ["Playwright", "TypeScript", "Azure DevOps", "CI/CD", "JavaScript"],
    link: "#portfolio",
    github: undefined,
    detailContent: `# Quality Assurance Specialist – Cemantica (Contract)

**Period:** Dec 2023 – Nov 2024 (1 yr)  
**Location:** Levallois-Perret, Île-de-France, France · Remote  
**Role Type:** Contract

---

## Role Overview
As a **Quality Assurance Specialist** at **Cemantica**, I owned the complete QA lifecycle for the product, combining strong test strategy ownership with hands-on automation, CI/CD integration, and manual testing to ensure consistent quality across releases.

---

## Key Responsibilities & Contributions

- 🧠 Owned the **end-to-end QA process**, including test strategy definition, planning, execution, and release validation
- 🤖 Designed and implemented **automated test frameworks** using **Playwright with TypeScript**, significantly increasing regression test coverage
- 🚀 Built a **CI/CD pipeline from scratch** integrated with **Azure DevOps**, enabling automated test execution within the delivery pipeline
- 🧪 Performed **manual and exploratory testing** to complement automation and identify edge-case defects
- ✅ Executed **functional, regression, integration, system, and user acceptance testing (UAT)** across multiple releases
- 🔗 Provided continuous **technical QA support** throughout the SDLC, collaborating closely with developers, product owners, and stakeholders

---

## Tools & Technologies

- **Automation:** Playwright, TypeScript, JavaScript
- **CI/CD & Cloud:** Azure DevOps, Microsoft Azure
- **QA & Planning:** Test Planning, Test Design, monday.com
- **Methodologies:** Agile, SDLC

---

## Skills & Competencies

- Test Automation & Framework Design
- End-to-End QA Ownership
- CI/CD Integration for Testing
- Manual & Exploratory Testing
- Regression & UAT Testing
- Agile Collaboration
- Problem Solving & Analytical Thinking
- Web Application Quality Assurance

---

## Impact
This role allowed me to transition into a more **automation- and infrastructure-focused QA position**, delivering scalable testing solutions, improving release confidence, and embedding quality deeply into the CI/CD pipeline.`
  },
  {
    title: "QA Engineer",
    company: "Tudip Technologies",
    description: "Led comprehensive QA efforts for web and mobile applications across Web, Android, and iOS platforms, including REST API testing, cross-browser validation, and managing test execution in Agile environments.",
    tech: ["Postman", "SoapUI", "TestRail", "Jira", "Jenkins", "SQL"],
    link: "#portfolio",
    github: undefined,
    detailContent: `# QA Engineer – Tudip Technologies (Contract)

**Period:** Mar 2022 – Dec 2023 (1 yr 10 mos)  
**Location:** India · Remote  
**Role Type:** Contract

---

## Role Overview
As a **QA Engineer** at **Tudip Technologies**, I worked on web and mobile applications in an Agile environment, focusing on delivering high-quality software through structured testing strategies, detailed analysis, and close collaboration with cross-functional teams.

---

## Key Responsibilities & Contributions

- 🔍 Reviewed functional and design specifications to ensure full understanding of project requirements
- 🧩 Identified functional modules, system structure, and internal logic to design effective test strategies
- 📝 Developed, maintained, and executed detailed **test cases**, **test scenarios**, and **test suites**
- 🌐 Performed **cross-browser testing** on Chrome, Firefox, and Safari
- ✅ Executed and evaluated manual test cases and documented clear test results
- 🔧 Conducted **functional, smoke, regression, integration, acceptance, accessibility, and usability testing**
- 📱 Tested applications across **Web, Android, and iOS** platforms
- 🔗 Performed **REST API testing** using **Postman** and **SoapUI**
- 🗂️ Managed test cases in **TestRail** and tracked defects and tasks using **Jira**
- 📅 Actively participated in **daily stand-ups**, **weekly QA meetings**, and sprint ceremonies (Scrum)
- 👥 Led and supported **onboarding processes** for new QA team members

---

## Tools & Technologies
- **Testing Tools:** TestRail, Postman, SoapUI
- **Project Management:** Jira
- **CI/CD & Automation Exposure:** Jenkins
- **Databases:** SQL
- **Methodologies:** Agile, Scrum, SDLC

---

## Skills & Competencies

- Manual Testing & Test Execution
- Test Case Design & Test Scenarios
- Requirements & Functional Analysis
- API Testing (REST)
- Regression, Integration & Acceptance Testing
- User Acceptance Testing (UAT)
- Web & Mobile Application Testing
- Agile & Scrum Methodologies
- Defect Tracking & Reporting
- Problem Solving & Analytical Thinking

---

## Impact
This role strengthened my ability to work in fast-paced Agile teams, ensured consistent software quality across multiple platforms, and allowed me to mentor new team members while contributing to reliable and scalable testing processes.`
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <h2 className={styles.heading}>Featured Projects</h2>
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
                <span>View Full Details</span>
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
