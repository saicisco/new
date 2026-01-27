/**
 * Blog.tsx - Blog Section Component
 * 
 * This component is a placeholder for the blog section of the portfolio.
 * 
 * Current state:
 * - Displays "Coming Soon!" message
 * - Simple centered layout with heading
 * - Ready to be expanded with blog post listings in the future
 * 
 * Future implementation could include:
 * - Blog post cards with titles, excerpts, dates
 * - Categories or tags
 * - Links to full blog posts
 * - Search/filter functionality
 */

import styles from './Blog.module.css';

const Blog = () => {
  return (
    <section id="blog" className={styles.blog}>
      <div className="container">
        <h2 className={styles.heading}>Blog</h2>
        <p className={styles.subheading}>Coming Soon!</p>
      </div>
    </section>
  );
};

export default Blog;
