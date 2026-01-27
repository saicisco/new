/**
 * index.ts - TypeScript Type Definitions
 * 
 * This file contains all TypeScript interfaces and types used throughout the portfolio application.
 * Centralizing type definitions here ensures type consistency and makes types reusable across components.
 * 
 * Benefits of TypeScript interfaces:
 * - Compile-time type checking
 * - Better IDE autocomplete and intellisense
 * - Self-documenting code
 * - Easier refactoring
 * - Prevents runtime errors caused by incorrect data structures
 */

/**
 * Project interface
 * Represents a portfolio project or work sample
 * 
 * @property title - The name of the project
 * @property company - The company where the project was completed
 * @property description - A brief overview of what the project does
 * @property tech - Array of technology/tool names used in the project
 * @property link - URL to the live project, demo, or project page
 * @property github - Optional URL to the GitHub repository
 * @property detailContent - Optional full markdown content for detailed project view
 */
export interface Project {
  title: string;
  company: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  detailContent?: string;
}

/**
 * ExperienceItem interface
 * Represents a professional work experience entry
 * 
 * @property role - Job title/position
 * @property company - Company name and location
 * @property duration - Employment period (e.g., "01/2024 - Present")
 * @property description - Detailed description of responsibilities and achievements
 * @property logo - Optional path to company logo image
 */
export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  logo?: string;
}

/**
 * Skill interface
 * Represents a technical skill or competency
 * 
 * @property name - The skill name (e.g., "TypeScript", "Playwright")
 * @property category - Optional category grouping (e.g., "Languages", "Tools")
 * 
 * Note: Currently not actively used, but available for future skill categorization
 */
export interface Skill {
  name: string;
  category?: string;
}
