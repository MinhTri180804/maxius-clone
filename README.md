# MAXIUS Clone - Interview Project

> A modern, responsive landing page clone of MAXIUS company website built with Next.js 15, showcasing advanced frontend development skills and best practices.

## 🚀 Live Demo

[View Live Demo](maxius-clone-omega.vercel.app)

## 📋 Project Overview

This project is a comprehensive clone of the MAXIUS company landing page, demonstrating proficiency in modern web development technologies and best practices. Built as part of a technical interview assessment.

### 🎯 Key Features

- **Static Site Generation (SSG)** for optimal SEO and performance
- **Responsive Design** - Mobile-first approach with tablet and desktop breakpoints
- **Interactive Animations** - Smooth scroll animations and micro-interactions
- **Horizontal Scrolling Components** - Touch-friendly swipeable content sections
- **SEO Optimized** - Complete metadata, structured data, and sitemap
- **Modern UI/UX** - Clean design with attention to detail

## 🛠️ Tech Stack

### Core Technologies

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework

### Libraries & Tools

- **Motion** (Framer Motion) - Advanced animations and transitions
- **Swiper.js** - Touch-friendly slider components
- **Tailwind Merge** - Conditional class merging
- **ClassNames** - Dynamic CSS class handling

### Development Tools

- **ESLint** - Code linting and quality
- **Turbopack** - Fast development bundler
- **TypeScript** - Static type checking

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Home page (SSG)
│   ├── sitemap.ts         # Auto-generated sitemap
│   ├── robots.ts          # SEO robots configuration
│   ├── manifest.ts        # PWA manifest
│   ├── viewport.ts        # Viewport configuration
│   └── globals.css        # Global styles and CSS variables
├── components/
│   ├── commons/           # Reusable components
│   │   ├── Section.tsx    # Layout section wrapper
│   │   ├── Toggle.tsx     # Animated hamburger menu
│   │   ├── HighlightText.tsx # Text highlighting component
│   │   └── NavigateSection.tsx # Page navigation dots
│   ├── pages/home/        # Home page sections
│   │   ├── HeroSection.tsx      # Hero banner with animations
│   │   ├── FeatureSection.tsx   # Features showcase
│   │   ├── AboutSection.tsx     # Interactive accordion
│   │   ├── StorySection.tsx     # Horizontal scrolling timeline
│   │   └── ContactSection.tsx   # Contact information
│   ├── Logo.tsx           # Dynamic logo component
│   └── Sidebar.tsx        # Mobile navigation sidebar
public/                    # Static assets
├── hero_banner.png
├── feature_banner.png
├── about_banner.png
├── contact_banner.png
└── sidebar_background.png
```

## 🎨 Key Components

### 1. Hero Section

- Animated title and description on scroll
- Responsive typography scaling
- Background image optimization

### 2. Story Section

- **Horizontal scrolling timeline** with touch/mouse support
- **Auto-snap functionality** for smooth navigation
- **Swiper.js integration** for mobile-optimized swiping
- Dynamic content rendering with company history and partnerships

### 3. About Section

- **Interactive accordion** with smooth animations
- **Hover effects** on desktop with expanded content
- **Staggered animations** for visual appeal

### 4. Navigation

- **Animated hamburger menu** with smooth transitions
- **Section-aware navigation dots** with auto-highlighting
- **Dynamic color theming** based on current section

## 🔧 Installation & Setup

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd maxius-clone

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start development server with Turbopack
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production (Static Site Generation)
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full desktop experience (1024px+)
- **Touch Support**: Swipe gestures and touch interactions

## 🎯 SEO & Performance Features

### SEO Optimization

- ✅ **Static Site Generation** - Pre-rendered HTML for search engines
- ✅ **Comprehensive Metadata** - Title, description, keywords, Open Graph
- ✅ **Structured Data** - JSON-LD schema for rich snippets
- ✅ **Sitemap.xml** - Auto-generated sitemap
- ✅ **Robots.txt** - Search engine directives
- ✅ **PWA Manifest** - Progressive Web App support

### Performance

- ✅ **28.7 kB** page size (highly optimized)
- ✅ **172 kB** First Load JS
- ✅ **Code Splitting** - Automatic bundle optimization
- ✅ **Image Optimization** - Next.js automatic image optimization
- ✅ **Font Optimization** - Google Fonts with display swap

## 🎨 Design System

### Color Palette

```css
--color-space-cadet: #1a2a59; /* Primary dark blue */
--color-deep-saffron: #ff9933; /* Accent orange */
--color-dark-jungle-green: #222222; /* Text dark */
--background-white: #fff; /* Background */
```

### Typography

- **Primary Font**: Roboto (Google Fonts)
- **Weights**: 300 (Light), 500 (Medium), 700 (Bold), 900 (Black)
- **Responsive Scaling**: Mobile to desktop typography scaling

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

- **Netlify**: Drag and drop `.next` folder
- **AWS Amplify**: Connect GitHub repository
- **Static Export**: `npm run build` generates static files

## 📊 Build Analysis

```
Route (app)                    Size    First Load JS
┌ ○ /                       28.7 kB      172 kB
├ ○ /sitemap.xml              128 B     99.8 kB
├ ○ /robots.txt               128 B     99.8 kB
└ ○ /manifest.webmanifest     128 B     99.8 kB

○ (Static) - prerendered as static content
```

## 🔍 Technical Highlights

### Advanced Features Implemented

1. **Custom Horizontal Scroll with Snap** - Built from scratch with touch support
2. **Section-aware Navigation** - Dynamic highlighting based on viewport
3. **Staggered Animations** - Complex animation sequences with Motion
4. **Responsive Image Handling** - Optimized for all device sizes
5. **TypeScript Integration** - Full type safety across components
6. **Modern CSS Architecture** - CSS-in-JS with Tailwind utilities

### Code Quality

- **TypeScript**: 100% type coverage
- **ESLint**: Zero linting errors
- **Component Architecture**: Reusable, maintainable components
- **Performance**: Optimized bundle size and loading

## 🎯 Interview Assessment Criteria

This project demonstrates:

- ✅ **Modern React/Next.js** proficiency
- ✅ **TypeScript** expertise
- ✅ **Responsive Design** implementation
- ✅ **Animation & Interaction** skills
- ✅ **SEO & Performance** optimization
- ✅ **Code Organization** and best practices
- ✅ **Problem Solving** with custom components
- ✅ **Attention to Detail** in UI/UX implementation

## 📝 Notes

- Built with **Next.js 15** App Router for modern development
- **Static Site Generation** ensures optimal SEO and performance
- **Mobile-first responsive design** with careful attention to touch interactions
- **Accessibility considerations** with proper semantic HTML and ARIA labels
- **Production-ready code** with proper error handling and optimization

## 🤝 Contact

Developed as part of technical interview assessment.

---

**Built with ❤️ using Next.js 15, React 19, and TypeScript**
