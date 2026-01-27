/**
 * ESLint Configuration File
 * 
 * This file configures ESLint, the linting tool that enforces code quality and consistency.
 * ESLint analyzes the code to find and fix problems following best practices.
 * 
 * Configuration includes:
 * - JavaScript and TypeScript recommended rules
 * - React Hooks rules to ensure proper hook usage
 * - React Refresh plugin for fast refresh during development
 * - Browser globals for client-side code
 * - Ignores the 'dist' directory (build output)
 */

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
