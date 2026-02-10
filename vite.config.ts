/**
 * Vite Configuration File
 * 
 * This file configures Vite, the build tool and development server for this React application.
 * Vite provides fast hot module replacement (HMR) during development and optimized production builds.
 * 
 * Configuration includes:
 * - React plugin for JSX/TSX support
 * - Path aliases (@/ -> ./src/) for cleaner imports
 * - Dynamic base path: '/' for dev, '/new/' for production
 * 
 * Documentation: https://vite.dev/config/
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
