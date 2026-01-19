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
