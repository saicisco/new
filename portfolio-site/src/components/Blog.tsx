// src/components/Blog.tsx
import React from 'react';
import styles from './Blog.module.css';

const Blog: React.FC = () => {
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
