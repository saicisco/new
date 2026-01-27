/**
 * Vite Configuration File
 * 
 * This file configures Vite, the build tool and development server for this React application.
 * Vite provides fast hot module replacement (HMR) during development and optimized production builds.
 * 
 * Configuration includes:
 * - React plugin for JSX/TSX support
 * - Path aliases (@/ -> ./src/) for cleaner imports
 * 
 * Documentation: https://vite.dev/config/
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // GitHub Pages deployment config
  // If using custom domain: set base to '/'
  // If using github.io/repo-name: set base to '/repo-name/'
  base: '/',
})
