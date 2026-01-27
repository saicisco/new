# Francisco Perez Leiros - Portfolio Website

A modern, fully-featured portfolio website built with React 19, TypeScript, and Vite, showcasing professional experience as a QA Automation Engineer with real-world projects and interactive UI elements.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple)

## ✨ Features

### Core Functionality
- **🎨 Modern UI/UX**: Professional design with Catppuccin Macchiato color palette
- **📱 Fully Responsive**: Optimized layouts for mobile (480px), tablet (768px), and desktop
- **🎭 Animated Logo**: Custom FP logo badge with spinning animations, gradient borders, and shimmer effects
- **🧭 Smart Navigation**: Fixed header with active section detection, mobile hamburger menu, and smooth scrolling
- **👤 Professional Hero Section**: Animated avatar with gradient border, skills grid with icons, dual CTA buttons with dropdowns
- **💼 Real Work Experience**: Featured projects from Tetra Pak, Cemantica, and Tudip with full markdown detail modals
- **📄 CV Downloads**: Dual format support (PDF & Markdown) via dropdown menu
- **🔗 Social Integration**: GitHub and LinkedIn links with icons in footer
- **⚡ Performance Optimized**: Lazy loading, code-splitting, and Suspense for non-critical components
- **🔍 SEO Ready**: Comprehensive meta tags, Open Graph, and Twitter Cards support
- **✅ Type-Safe**: Full TypeScript implementation with strict type checking

### Interactive Elements
- **Project Detail Modals**: Full-screen modals displaying complete project descriptions from markdown files
- **Dropdown Menus**: Multi-option CV download (PDF/MD) and contact buttons
- **Active Section Highlighting**: Navigation automatically highlights current section as you scroll
- **Hover Effects**: Smooth transitions and animations throughout
- **Mobile Menu**: Slide-in overlay navigation for mobile devices

## 🎨 Design Features

### Animated Logo Badge
- Rotating gradient border (6s cycle)
- Shimmer text effect on initials
- 360° spin animation every 10 seconds
- Floating and pulse effects
- Faster continuous spin on hover
- Glow effect that fades in/out

### Hero Section
- Professional photo with animated gradient border
- Gradient text effects on name and title
- Skills grid with 20+ animated icons (React, TypeScript, Python, Playwright, etc.)
- CTA buttons with gradient styling
- Email link integration

### Navigation
- Glass-morphism effect with backdrop blur
- Logo badge with "FP" initials
- Active section detection based on scroll position
- Mobile hamburger menu with smooth animations
- Contact button with gradient styling

## 📦 Tech Stack

### Frontend
- **React 19.2.0** - Latest React with improved performance
- **TypeScript ~5.9.3** - Type-safe development
- **Vite 7.2.4** - Lightning-fast build tool and dev server
- **CSS Modules** - Component-scoped styling
- **lucide-react 0.563.0** - Modern icon library
- **react-markdown 10.1.0** - Markdown rendering for project details

### Development Tools
- **ESLint 9.39.1** - Code quality and consistency
- **TypeScript ESLint** - TypeScript-specific linting rules
- **@vitejs/plugin-react** - React Fast Refresh support
- **Path Aliases** - Clean imports with @/* alias

### Deployment
- Static site generation
- Compatible with Vercel, Netlify, GitHub Pages, etc.

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup Steps

1. **Clone the repository**:
```bash
git clone https://github.com/saicisco/portfolio-site.git
cd portfolio-site
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

4. **Open in browser**: Navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server with hot reload |
| `npm run build` | TypeScript check + production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all TypeScript/TSX files |

## 🏗️ Project Structure

```
portfolio-site/
├── public/                        # Static assets served directly
│   ├── logos/                     # Company logos
│   │   ├── cemantica.jpg         # Cemantica logo
│   │   ├── tetrapak.png          # Tetra Pak logo
│   │   ├── tudip.jpg             # Tudip logo
│   │   └── utest.jpg             # uTest logo
│   ├── Photo/
│   │   └── fototessera.jpg       # Alternate photo (unused)
│   ├── CV.pdf                     # Resume in PDF format
│   ├── CV.md                      # Resume in Markdown format
│   ├── profile.jpg                # Professional avatar photo
│   └── vite.svg                   # Favicon
│
├── featured_projects/             # Project detail markdown files
│   ├── qa_engineer_feature_project_section.md
│   ├── quality_assurance_specialist_feature_project_section.md
│   └── software_quality_assurance_test_engineer_feature_project_section.md
│
├── src/
│   ├── components/               # React components with CSS modules
│   │   ├── Navigation.tsx       # Fixed header with logo, menu, active detection
│   │   ├── Navigation.module.css
│   │   ├── Hero.tsx             # Landing section with avatar, skills, CTAs
│   │   ├── Hero.module.css
│   │   ├── About.tsx            # Professional background section
│   │   ├── About.module.css
│   │   ├── Experience.tsx       # Work history with company cards
│   │   ├── Experience.module.css
│   │   ├── Portfolio.tsx        # Featured projects showcase
│   │   ├── Portfolio.module.css
│   │   ├── ProjectDetailModal.tsx  # Full-screen project detail modal
│   │   ├── ProjectDetailModal.module.css
│   │   ├── Blog.tsx             # Blog section placeholder
│   │   ├── Blog.module.css
│   │   ├── Footer.tsx           # Contact info and social links
│   │   ├── Footer.module.css
│   │   └── index.ts             # Barrel exports for clean imports
│   │
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces (Project, Experience, Skill)
│   │
│   ├── assets/
│   │   └── react.svg            # React logo (unused default)
│   │
│   ├── App.tsx                   # Main app with lazy loading
│   ├── App.css                   # Global app styles
│   ├── main.tsx                  # React entry point
│   └── index.css                 # Global CSS (Catppuccin theme, resets)
│
├── eslint.config.js              # ESLint configuration
├── tsconfig.json                 # Base TypeScript config
├── tsconfig.app.json             # App-specific TypeScript config
├── tsconfig.node.json            # Node-specific TypeScript config
├── vite.config.ts                # Vite config with path aliases
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Dependency lock file
├── .gitignore                    # Git ignore rules
├── index.html                    # HTML entry point with SEO meta tags
└── README.md                     # This file
```

## 🎯 Component Architecture

### Navigation Component
**File**: [src/components/Navigation.tsx](src/components/Navigation.tsx)

**Features**:
- Fixed positioning with glass-morphism effect
- Animated logo badge with "FP" initials
- Active section detection via scroll position
- Desktop navigation with active link highlighting
- Mobile hamburger menu with slide-in animation
- Contact button with email integration
- Gradient styling and hover effects

**State Management**:
- `isScrolled`: Tracks if user has scrolled down
- `activeSection`: Current visible section
- `isMobileMenuOpen`: Mobile menu toggle state

### Hero Component
**File**: [src/components/Hero.tsx](src/components/Hero.tsx)

**Features**:
- Professional avatar with animated gradient border
- Gradient text effects on name and title
- Skills grid with 20+ icons (React, TypeScript, Python, Playwright, Selenium, Jenkins, Docker, Git, Jira, Azure, Cypress, Jest, Node.js, PostgreSQL, REST API, HTML, CSS, MCP's, AI)
- Dual CTA buttons:
  - "Download CV" with dropdown (PDF/Markdown options)
  - "Get in Touch" with direct email link
- Responsive layout for all screen sizes

### Portfolio Component
**File**: [src/components/Portfolio.tsx](src/components/Portfolio.tsx)

**Features**:
- Real work experience projects from 3 companies
- Project cards with company name, title, description, tech stack
- "View Project" button opens full-screen modal
- Integration with ProjectDetailModal component
- Embedded markdown content from featured_projects folder

**Projects**:
1. **Tetra Pak** - Production line automation testing
2. **Cemantica** - E-commerce platform quality assurance  
3. **Tudip** - Cross-browser testing framework development

### ProjectDetailModal Component
**File**: [src/components/ProjectDetailModal.tsx](src/components/ProjectDetailModal.tsx)

**Features**:
- Full-screen overlay modal
- Markdown rendering with react-markdown
- Click-outside-to-close functionality
- ESC key support for closing
- Scrollable content area
- Close button with smooth animations

### Experience Component
**File**: [src/components/Experience.tsx](src/components/Experience.tsx)

**Features**:
- Work history displayed as timeline cards
- Company logos with smooth hover effects
- Period, location, and role information
- Responsive card layout

### Footer Component
**File**: [src/components/Footer.tsx](src/components/Footer.tsx)

**Features**:
- GitHub and LinkedIn social links with icons
- Copyright information
- Responsive layout

## 🎨 Styling System

### Color Palette (Catppuccin Macchiato)
```css
--base: #24273a;           /* Background */
--surface0: #24273a;       /* Cards and panels */
--surface1: #363a4f;       /* Elevated surfaces */
--surface2: #494d64;       /* Borders */
--text: #cad3f5;          /* Primary text */
--subtext0: #a5adcb;      /* Secondary text */
--blue: #8aadf4;          /* Accent color */
--mauve: #c6a0f6;         /* Secondary accent */
--pink: #f5bde6;          /* Tertiary accent */
```

### Responsive Breakpoints
- **Mobile**: max-width 480px
- **Tablet**: max-width 768px  
- **Desktop**: max-width 992px
- **Large Desktop**: max-width 1200px

### Animation System
- **Logo Spin**: Every 10 seconds (logoSpin keyframe)
- **Gradient Rotate**: 6-second rotation on logo border
- **Shimmer**: Text gradient animation (3-4s)
- **Float & Pulse**: Subtle movement on logo badge
- **Glow**: Fading radial glow effect
- **Slide Down**: Mobile menu animation (0.3s)

## 🔧 Configuration Files

### vite.config.ts
- React plugin with Fast Refresh
- Path alias configuration (@/* → src/*)
- Build optimization settings

### tsconfig.json
- Strict mode enabled
- Module resolution: bundler
- JSX: react-jsx
- Path mappings for clean imports

### eslint.config.js
- TypeScript ESLint integration
- React hooks linting
- React refresh rules

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Output directory: `dist/`

### Deployment Platforms

**Vercel** (Recommended):
```bash
npm i -g vercel
vercel
```

**Netlify**:
```bash
npm run build
netlify deploy --prod --dir=dist
```

**GitHub Pages**:
1. Build the project
2. Push `dist/` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Environment Variables
No environment variables required - all content is static.

## 📊 Performance Metrics

- **Initial Load**: Optimized with lazy loading
- **Code Splitting**: Automatic chunk optimization by Vite
- **Bundle Size**: Minimal dependencies kept
- **Lighthouse Score**: Optimized for 90+ scores

## 🔍 SEO Configuration

**Location**: [index.html](index.html)

**Includes**:
- Primary meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card support
- Author and viewport configuration
- Semantic HTML structure

## 🗂️ Unnecessary Files

The following files can be safely removed if desired:

1. **public/Photo/fototessera.jpg** - Alternate photo, not currently used (profile.jpg is the active one)
2. **src/assets/react.svg** - Default Vite template file, not used in the application

**Note**: `public/vite.svg` is used as the favicon, so keep it unless you replace it with a custom icon.

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork it and adapt it for your own use!

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Francisco Perez Leiros**
- GitHub: [@saicisco](https://github.com/saicisco)
- LinkedIn: [francisco-leiros](https://www.linkedin.com/in/francisco-leiros/)
- Email: Fran.pl@icloud.com

## 🙏 Acknowledgments

- **Catppuccin Theme**: Beautiful color palette used throughout
- **lucide-react**: Comprehensive icon library
- **react-markdown**: Markdown rendering support
- **Vite Team**: Lightning-fast build tool

## 📈 Future Enhancements

Potential improvements for future versions:
- [ ] Blog functionality with CMS integration
- [ ] Dark/Light theme toggle
- [ ] Multi-language support (i18n)
- [ ] Animated page transitions
- [ ] Contact form with backend integration
- [ ] Analytics integration
- [ ] More project case studies

---

**Built with ❤️ by Francisco Perez Leiros**

*Last Updated: January 2026*
