// Type definitions for portfolio site

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  logo?: string;
}

export interface Skill {
  name: string;
  category?: string;
}
