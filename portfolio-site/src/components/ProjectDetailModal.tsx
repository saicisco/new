/**
 * ProjectDetailModal.tsx - Project Detail Modal Component
 * 
 * This component displays the full project details in a modal overlay.
 * 
 * Features:
 * - Full-screen modal with markdown content rendering
 * - Close button and backdrop click to dismiss
 * - Scrollable content area
 * - Uses react-markdown to parse and display markdown content
 */

import { useEffect } from 'react';
import Markdown from 'react-markdown';
import styles from './ProjectDetailModal.module.css';
import type { Project } from '@/types';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, onClose }: ProjectDetailModalProps) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          ✕
        </button>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.company}>{project.company}</div>
            <h2>{project.title}</h2>
          </div>
          <div className={styles.markdownContent}>
            <Markdown>{project.detailContent}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
