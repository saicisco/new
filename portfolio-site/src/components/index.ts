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

export { default as Navigation } from './Navigation';
export { default as Hero } from './Hero';
export { default as About } from './About';
export { default as Experience } from './Experience';
export { default as Portfolio } from './Portfolio';
export { default as Blog } from './Blog';
export { default as Footer } from './Footer';
