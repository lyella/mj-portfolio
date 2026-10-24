# 🌸 MJ Brown — Creative Portfolio & Journey

An animated, high-performance personal portfolio website built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed with an editorial dark/light obsidian aesthetic, kinetic typography, interactive canvas particles, fluid micro-interactions, and sound synthesis via the Web Audio API.

---

## ✨ Features

- **Dynamic Interactive Particle Field**: 60fps HTML5 Canvas constellation system that reacts to mouse physics and proximity.
- **Glassmorphic Navigation**: Sticky blur navbar with animated active pill indicator, responsive mobile drawer, and tactile sound feedback.
- **Kinetic Hero & Magnetic Avatar**: 3D floating avatar card utilizing the user's authentic portrait (`homepage-01.jpg`), animated badge chips, and live performance stats.
- **Story & Philosophy (About)**: Interactive tabbed cards displaying MJ Brown's inspiring story, design philosophy, and engineering craft.
- **Interactive Project Showcase**:
  - Filterable by *All*, *Web Applications*, *E-Commerce*, *Creative & Audio*, and *Open Source*.
  - 3D hover tilt cards with live demo and GitHub repository links.
  - **Case Study Modal Dialog**: Deep-dive inspection with architectural highlights, challenges & solutions, and performance metrics.
- **Skills & Technical Arsenal**: Categorized proficiency meters with smooth scroll-triggered spring animation.
- **Milestone Journey Timeline**: Vertical chronological roadmap tracing growth from starting from scratch to mastering modern engineering.
- **Articles & Reflections (Blog)**: Clean preview cards with an interactive full-reading modal.
- **Interactive Contact Section**:
  - Form validation & character counter.
  - Live UTC/Local clock showing real-time availability.
  - Celebratory confetti burst (`canvas-confetti`) and chime sound effect upon dispatch.
  - One-click email copy to clipboard.
- **Tactile Web Audio Feedback**: Subtle synth pop and chime sounds synthesized via native browser Web Audio API (0 external audio files needed).
- **Dark & Light Mode Switcher**: Instantaneous theme toggle persisted to `localStorage` with smooth CSS transitions.
- **Custom Fluid Cursor**: Desktop trailing spring cursor follower that scales magnetically over interactives.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Vite 5** | Lightning-fast development server & optimized production rollup bundler |
| **React 18** | Modular component-driven user interface architecture |
| **TypeScript** | Strict compile-time type safety |
| **Tailwind CSS** | Utility-first styling with custom themes, glassmorphism & glow effects |
| **Framer Motion** | Physics-based spring animations, layout transitions & modals |
| **Lucide React** | Clean, accessible vector icons |
| **Canvas Confetti** | Celebratory particle effects on form submission |
| **Web Audio API** | Real-time procedural audio synthesis for tactile clicks & chimes |

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port Vite outputs) to preview the site with instant Hot Module Replacement (HMR).

### 3. Build for Production
```bash
npm run build
```
This generates an optimized static bundle in the `dist/` directory.

---

## 🌐 1-Click Deployment to GitHub Pages

Because your repository is already linked to `https://github.com/lyella/mj-portfolio.git`:

1. Commit and push your code to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete modern animated portfolio website"
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
   - Select the **Static HTML** or **Vite** starter workflow, or deploy with Vercel/Netlify with 1 click.

---

## 🎨 Customizing Content

All personal content, project data, skills, timeline milestones, and blog reflections are cleanly centralized in:
```
src/data/portfolioData.ts
```
Simply edit this file to update your bio, social links, project screenshots, or add new milestones!
