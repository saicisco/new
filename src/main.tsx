/**
 * main.tsx - Application Entry Point
 * 
 * This is the main entry file for the React application. It performs the following:
 * 1. Imports global CSS styles (index.css)
 * 2. Creates a React root on the #root element from index.html
 * 3. Renders the App component wrapped in StrictMode for additional development checks
 * 
 * StrictMode helps identify potential problems in the application during development.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
