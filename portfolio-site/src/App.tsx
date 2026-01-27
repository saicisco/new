/**
 * App.tsx - Main Application Component
 * 
 * This is the root component of the portfolio website that orchestrates the entire page layout.
 * 
 * Features:
 * - Lazy loads non-critical components (About, Experience, Portfolio, Blog, Footer) 
 *   to improve initial page load performance
 * - Navigation and Hero sections are loaded immediately for faster perceived performance
 * - Uses React Suspense for graceful loading states while lazy components are fetched
 * - Implements code-splitting to reduce the initial bundle size
 * 
 * Structure:
 * - Navigation: Fixed header with smooth scrolling links
 * - Hero: Landing section with introduction and skills
 * - About: Professional background and summary
 * - Experience: Work history with company details
 * - Portfolio: Showcase of projects
 * - Blog: Placeholder for future blog content
 * - Footer: Contact information and social links
 */

import { lazy, Suspense } from 'react';
import './App.css';
import { Navigation, Hero } from '@/components';

// Lazy load non-critical components
const About = lazy(() => import('@/components/About'));
const Experience = lazy(() => import('@/components/Experience'));
const Portfolio = lazy(() => import('@/components/Portfolio'));
const Blog = lazy(() => import('@/components/Blog'));
const Footer = lazy(() => import('@/components/Footer'));

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <About />
          <Experience />
          <Portfolio />
          <Blog />
        </Suspense>
      </main>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
