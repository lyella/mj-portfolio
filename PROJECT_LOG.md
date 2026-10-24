# 📜 MJ Brown — Portfolio Development Log & Architecture

> **Repository:** `https://github.com/lyella/mj-portfolio.git`  
> **Status:** Production Ready & GitHub Actions CI/CD Configured  
> **Built With:** Vite 5, React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Web Audio API  

---

## 🌟 Overview & Purpose

This markdown document tracks the complete development lifecycle, technology stack decisions, component inventory, and deployment workflows for **MJ Brown's Portfolio Website**.

The site was crafted to present MJ Brown's journey, creative works, and software engineering craftsmanship with fluid animations, tactile audio feedback, dark/light theme switching, and sub-second performance.

---

## 🏗️ Architecture & Technology Stack

| Technology | Purpose | Key Benefits |
| :--- | :--- | :--- |
| **Vite 5** | Build tool & Development server | Instant HMR, optimized Rollup bundling (built in ~5s) |
| **React 18** | UI Framework | Component architecture, declarative state, clean re-renders |
| **TypeScript** | Type Safety | Strict interfaces for projects, skills, timeline, and articles |
| **Tailwind CSS** | Styling System | Custom palette (`#1f273e`, `#29c59c`, `#FFBCBC`), glassmorphism |
| **Framer Motion 11** | Animation Library | Spring physics, layout animations, modals, scroll-driven reveals |
| **Lucide React** | Iconography | Lightweight, accessible, customizable SVG icons |
| **Canvas Confetti** | Interaction Delight | Celebratory particle effect on contact form submission |
| **Web Audio API** | Tactile Sound Synthesis | In-browser procedural sound effects (pops, clicks, celebratory chords) |
| **GitHub Actions** | Automated CI/CD | Builds and publishes to GitHub Pages on every `git push` |

---

## 🧩 Components Inventory

1. **`Navbar.tsx` (Floating Glass Header)**
   - Sticky frosted glass header with brand logo & signature cursive badge.
   - Animated active section pill tracking user scroll position.
   - Interactive sound toggle (Web Audio feedback).
   - Instantaneous Dark/Light mode theme toggle with `localStorage` persistence.
   - Smooth animated mobile drawer menu.

2. **`Hero.tsx` (Hero Section)**
   - High-impact kinetic typography with spring entrance animations.
   - Floating magnetic portrait card with authentic photo (`homepage-01.jpg`), decorative gradient blur, and micro-badges.
   - Live statistics counter (Years of Growth, Shipped Projects, Code Craftsmanship, Core Web Vitals).
   - Quick action buttons ("Explore Works", "My Journey", "GitHub Profile").

3. **`ParticleCanvas.tsx` (Constellation Background)**
   - 60 FPS HTML5 Canvas particle field.
   - Reactive mouse repulsion & proximity connection lines.
   - Smooth color adaptation between dark and light themes.

4. **`About.tsx` (The Journey & Philosophy)**
   - Preserves MJ Brown's authentic story:
     > *"I created my website to show my world and preserve memories. This site is not only about my journey—it is also for my works and how dedicated I am. Starting from scratch, I always choose to think positively and push forward."*
   - Interactive tabbed deep-dive: **My Story**, **Design Philosophy**, and **Engineering Craft**.

5. **`Projects.tsx` & `ProjectModal.tsx` (Selected Works)**
   - Dynamic category filter: *All Works*, *Web Applications*, *E-Commerce*, *Creative & Audio*, *Open Source*.
   - 3D hover-tilt project cards with tech tags and direct repository / live links.
   - Modal dialog case study inspection with architectural highlights, challenge & solution breakdowns, and performance metrics.

6. **`Skills.tsx` (Technical Arsenal)**
   - Categorized skills: *Frontend*, *Animation & Design*, *Backend & Tools*, *Architecture*.
   - Animated progress bars with percentage badges that spring into view.

7. **`Journey.tsx` (Milestones Roadmap)**
   - Vertical timeline tracing growth from starting from scratch in 2021 to modern senior frontend mastery.
   - Glowing checkpoint nodes and technology pills for each milestone.

8. **`Blog.tsx` (Reflections & Articles)**
   - Article preview cards covering motion design, performance optimization, and personal growth.
   - Interactive reading modal for in-depth exploration.

9. **`Contact.tsx` (Collaborate & Connect)**
   - Client-validated form with live character counter.
   - Real-time clock and live availability indicator.
   - One-click email copy button with status feedback.
   - Celebratory confetti explosion upon message submission.

10. **`Footer.tsx` (Site Footer)**
    - Quick navigation, social links, credit, and smooth "Back to Top" button.

---

## 🚀 Deployment & GitHub Integration

The repository is linked to remote: `https://github.com/lyella/mj-portfolio.git`.

### Automated GitHub Pages Workflow
The file `.github/workflows/deploy.yml` automatically triggers on push to `main`:
1. Checks out repository.
2. Installs dependencies using `npm ci`.
3. Compiles the project using `npm run build`.
4. Uploads and deploys the static `dist/` directory to GitHub Pages.

---

## 🛠️ Local Commands

```bash
# Start local development server
npm run dev

# Compile TypeScript and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

*Last Updated by Antigravity Assistant on October 2024.*
