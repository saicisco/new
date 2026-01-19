# Francisco Perez Leiros - Portfolio Website

A modern, performant portfolio website built with React 19, TypeScript, and Vite, showcasing my experience as a QA Automation Engineer.

## 🚀 Features

- **Modern Stack**: Built with React 19, TypeScript, and Vite for optimal performance
- **SEO Optimized**: Complete meta tags and Open Graph support for better discoverability
- **Lazy Loading**: Code-splitting implementation for faster initial load times
- **Fixed Navigation**: Sticky header with smooth scrolling between sections
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Type-Safe**: Full TypeScript implementation with strict type checking
- **Modular CSS**: CSS Modules for component-scoped styling
- **Clean Architecture**: Path aliases (@/*) and barrel exports for maintainable code
- **Modern Experience Cards**: Professional experience displayed with company logos in clean card layout

## 📦 Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Linting**: ESLint with TypeScript support

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/franciscoleiros/portfolio-site.git
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
portfolio-site/
├── src/
│   ├── components/       # React components with CSS modules
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Blog.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts     # Barrel exports
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main app component with lazy loading
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
│   └── logos/          # Company logos for experience section
├── vite.config.ts       # Vite configuration with path aliases
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Key Improvements Implemented

1. **SEO Enhancement**: Comprehensive meta tags including Open Graph and Twitter Cards
2. **Performance Optimization**: Lazy loading for non-critical components
3. **Developer Experience**: Path aliases (@/*) for cleaner imports and barrel exports
4. **Type Safety**: TypeScript interfaces for all data structures (Projects, Experience, Skills)
5. **Fixed Navigation**: Sticky header with dark theme matching the site design
6. **Mobile Responsive**: Fully optimized for all screen sizes with adjusted spacing and typography
7. **Modern Experience Section**: Clean card layout with company logos and hover effects
8. **Code Quality**: Removed unused dependencies (Bootstrap) and legacy React imports
9. **Smooth Scrolling**: CSS-based smooth scroll behavior between sections
10. **Professional Presentation**: Updated with actual GitHub profile and LinkedIn links

## 🌐 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 👤 Author

**GitHub: [saicisco](https://github.com/saicisco)
- Francisco Perez Leiros**
- LinkedIn: [francisco-leiros](https://www.linkedin.com/in/francisco-leiros/)
- Email: Fran.pl@icloud.com

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Francisco Perez Leiros
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
