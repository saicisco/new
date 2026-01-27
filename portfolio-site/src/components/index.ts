/**
 * index.ts - Component Barrel Export
 * 
 * This file serves as a barrel export for all components in the components directory.
 * It provides a single import point for all components, simplifying import statements.
 * 
 * Instead of:
 *   import Navigation from './components/Navigation';
 *   import Hero from './components/Hero';
 * 
 * You can use:
 *   import { Navigation, Hero } from './components';
 * 
 * Benefits:
 * - Cleaner import statements
 * - Single source of truth for component exports
 * - Easier to refactor component file names/locations
 * - Better IDE autocomplete experience
 */

import Navigation from './Navigation.js';
import Hero from './Hero.js';
import About from './About.js';
import Experience from './Experience.js';
import Portfolio from './Portfolio.js';
import Blog from './Blog.js';
import Footer from './Footer.js';

export { Navigation, Hero, About, Experience, Portfolio, Blog, Footer };
