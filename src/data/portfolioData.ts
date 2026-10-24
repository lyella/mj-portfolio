import { Project, SkillItem, TimelineItem, BlogPost } from '../types';

export const PERSONAL_INFO = {
  name: 'MJ Brown',
  role: 'Creative Web Developer & UI Engineer',
  tagline: 'Crafting digital journeys where code meets emotion and kinetic design.',
  bio: "I created my website to show my world and preserve memories. This space is not only about my journey—it reflects my work, dedication, and growth. Starting from scratch, every step has been about staying curious, positive, and relentlessly refining the craft toward minimalist elegance and technical excellence.",
  email: 'mjbrown.dev@gmail.com',
  github: 'https://github.com/lyella',
  linkedin: 'https://linkedin.com/in/mj-brown',
  twitter: 'https://twitter.com/mjbrown_dev',
  location: 'Available Globally / Remote',
  availability: 'Open for Opportunities & High-Impact Projects',
  stats: [
    { label: 'Years of Growth', value: '3+' },
    { label: 'Completed Projects', value: '25+' },
    { label: 'Code Craftsmanship', value: '100%' },
    { label: 'Core Web Vitals', value: '99+' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'lumiere-ecommerce',
    title: 'Lumière Atelier',
    subtitle: 'High-end Minimalist Lifestyle & Apparel Commerce',
    category: 'ecommerce',
    year: '2024',
    description: 'A bespoke e-commerce experience emphasizing micro-interactions, smooth cart drawers, and instant filter state transitions.',
    fullDescription: 'Lumière Atelier was designed to elevate online boutique shopping. Built with React, Tailwind CSS, and Framer Motion, it features dynamic product image pans, animated quantity selectors, an instantaneous optimistic cart drawer, and frictionless checkout flows.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://example.com/lumiere',
    githubUrl: 'https://github.com/lyella/lumiere-atelier',
    highlights: [
      '60fps fluid page transitions with Framer Motion',
      'Optimistic state updates for instant cart manipulation',
      'Accessible focus rings and keyboard-friendly navigation',
      'Sub-1.2s Largest Contentful Paint (LCP)'
    ],
    challenge: 'Achieving silky fluid animations without impacting Lighthouse performance or e-commerce conversion rates.',
    solution: 'Used hardware-accelerated transforms (translate3d/scale) and lazy-loaded off-screen image carousels with intersection observers.',
    metrics: [
      { label: 'Performance Score', value: '99/100' },
      { label: 'Cart Conversion', value: '+34%' },
      { label: 'Bundle Size', value: '42 kB gzip' }
    ]
  },
  {
    id: 'pulse-analytics',
    title: 'Pulse Studio',
    subtitle: 'Real-Time Telemetry & Creative Dashboard',
    category: 'web-apps',
    year: '2024',
    description: 'Interactive analytics dashboard featuring real-time stream graphs, drag-and-drop widgets, and customizable dark obsidian themes.',
    fullDescription: 'Pulse Studio provides engineering and design leads with telemetry insights. Built with modern canvas renderers and SVG charts, it renders thousands of live data points with zero frame stutter.',
    tags: ['React', 'TypeScript', 'Canvas API', 'Tailwind CSS', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://example.com/pulse',
    githubUrl: 'https://github.com/lyella/pulse-studio',
    highlights: [
      'Interactive canvas-rendered time-series charts',
      'Custom drag-and-drop dashboard widget reordering',
      'Instantaneous dark/light theme switching with zero DOM flicker',
      'Export to SVG & CSV with one click'
    ],
    challenge: 'Streaming live data at 60Hz without triggering React re-render cascades.',
    solution: 'Decoupled WebSocket message processing from React state using refs and RAF (requestAnimationFrame) batching.',
    metrics: [
      { label: 'Frames Per Second', value: '60 FPS' },
      { label: 'Data Latency', value: '< 15ms' }
    ]
  },
  {
    id: 'aether-spatial-audio',
    title: 'Aether Soundscapes',
    subtitle: 'Web Audio Ambient Sound Generator',
    category: 'creative',
    year: '2023',
    description: 'An immersive procedural sound generator for focus and relaxation featuring organic 3D particle nodes.',
    fullDescription: 'Aether harnesses the HTML5 Web Audio API to synthesize generative binaural waves, rain textures, and melodic wind chimes. The visualizer translates audio frequency bins into floating bioluminescent canvas particles in real-time.',
    tags: ['Web Audio API', 'HTML5 Canvas', 'React', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://example.com/aether',
    githubUrl: 'https://github.com/lyella/aether-sound',
    highlights: [
      'Procedural polyphonic synthesizer written in pure Web Audio nodes',
      'Real-time FFT audio frequency spectrum analyzer',
      'Spatial panning simulation for headphone listening',
      'Custom presets saving to browser localStorage'
    ],
    challenge: 'Ensuring consistent audio clock timing across variable mobile CPU states.',
    solution: 'Utilized AudioContext.currentTime rather than Javascript setInterval/setTimeout.',
    metrics: [
      { label: 'Audio Engine', value: 'Zero Libs' },
      { label: 'User Retention', value: '18m avg' }
    ]
  },
  {
    id: 'minimalist-ui-kit',
    title: 'Kanso UI System',
    subtitle: 'Accessible Kinetic Component Library',
    category: 'open-source',
    year: '2023',
    description: 'A lightweight React & Tailwind design system designed around Japanese minimalist principles (Kanso) and micro-interactions.',
    fullDescription: 'An open-source design library focused on clean spacing, subtle tactile feedback, and accessible ARIA standards. Built to eliminate boilerplate when crafting editorial websites.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'npm'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://example.com/kanso',
    githubUrl: 'https://github.com/lyella/kanso-ui',
    highlights: [
      '30+ accessible components adhering strictly to WAI-ARIA 1.2',
      'Zero runtime CSS dependencies, powered by utility classes',
      'Built-in keyboard shortcuts and accessible focus rings',
      'Automated visual regression tests'
    ],
    metrics: [
      { label: 'Weekly Downloads', value: '1,400+' },
      { label: 'GitHub Stars', value: '380+' }
    ]
  },
  {
    id: 'zenith-travel',
    title: 'Zenith Expeditions',
    subtitle: 'Immersive Editorial Travel Guide',
    category: 'creative',
    year: '2023',
    description: 'Visual storytelling platform showcasing remote landscapes with parallax depth layers and dynamic typography.',
    fullDescription: 'Zenith was engineered as a dynamic digital magazine. Users explore journeys through multi-layered scroll reveals, cursor-reactive imagery, and typography inspired by classic print editorials.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://example.com/zenith',
    githubUrl: 'https://github.com/lyella/zenith-expeditions',
    highlights: [
      'Multi-axis parallax scroll effects with spring physics',
      'Dynamic reading progress and section anchors',
      'Responsive editorial grid adaptively reflowing typography'
    ]
  },
  {
    id: 'dev-lens-extension',
    title: 'DevLens Inspector',
    subtitle: 'Productivity Tool for Frontend Engineers',
    category: 'open-source',
    year: '2024',
    description: 'Browser extension that highlights CSS layout boundaries, font metrics, and contrast ratios instantly on any page.',
    fullDescription: 'DevLens allows engineers and designers to inspect margins, padding box models, typography scale, and color contrast directly with a floating radial HUD.',
    tags: ['JavaScript', 'Web Extensions API', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://example.com/devlens',
    githubUrl: 'https://github.com/lyella/devlens',
    highlights: [
      'Instantaneous DOM boundary overlays with zero layout thrashing',
      'Live WCAG 2.1 AA/AAA contrast calculation algorithm',
      'One-click CSS snippet copy to clipboard'
    ]
  }
];

export const SKILLS: SkillItem[] = [
  // Frontend
  { name: 'React 18 / Next.js', category: 'Frontend', level: 95, highlight: true },
  { name: 'TypeScript', category: 'Frontend', level: 90, highlight: true },
  { name: 'JavaScript (ESNext)', category: 'Frontend', level: 95, highlight: true },
  { name: 'HTML5 Semantic Web', category: 'Frontend', level: 98 },
  { name: 'State Management (Zustand/Context)', category: 'Frontend', level: 88 },
  
  // Animation & Design
  { name: 'Framer Motion', category: 'Animation & Design', level: 92, highlight: true },
  { name: 'Tailwind CSS', category: 'Animation & Design', level: 95, highlight: true },
  { name: 'CSS3 / SASS / Modern CSS Grid', category: 'Animation & Design', level: 92 },
  { name: 'Canvas API & Particle Physics', category: 'Animation & Design', level: 85, highlight: true },
  { name: 'UI/UX Prototyping (Figma)', category: 'Animation & Design', level: 86 },

  // Backend & Tools
  { name: 'Node.js / Express', category: 'Backend & Tools', level: 82 },
  { name: 'REST APIs & GraphQL', category: 'Backend & Tools', level: 84 },
  { name: 'Vite / Modern Tooling', category: 'Backend & Tools', level: 90, highlight: true },
  { name: 'Git & GitHub Workflows', category: 'Backend & Tools', level: 92 },
  { name: 'Web Audio API', category: 'Backend & Tools', level: 80 },

  // Architecture & Quality
  { name: 'Web Performance & CWV', category: 'Architecture', level: 94, highlight: true },
  { name: 'Responsive & Adaptive Layouts', category: 'Architecture', level: 96 },
  { name: 'Accessibility (a11y/WCAG)', category: 'Architecture', level: 88 },
  { name: 'Component Architecture', category: 'Architecture', level: 92 }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2024 — Present',
    title: 'Senior Frontend & Creative Developer',
    organization: 'Independent / Creative Studio',
    description: 'Architecting dynamic web applications, interactive design systems, and animated digital brand experiences for global clients.',
    skills: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Design Systems'],
    type: 'career'
  },
  {
    year: '2023',
    title: 'Full-Stack & E-Commerce Engineering',
    organization: 'Freelance & Contract Work',
    description: 'Delivered bespoke web solutions, custom merchant platforms, and performance optimizations with sub-second page loads.',
    skills: ['React', 'Node.js', 'Next.js', 'Stripe', 'Performance'],
    type: 'milestone'
  },
  {
    year: '2022',
    title: 'Mastering Modern Web Architecture',
    organization: 'Open Source & Exploratory Systems',
    description: 'Shifted focus from legacy tooling toward reactive component models, TypeScript type safety, and modern kinetic animations.',
    skills: ['TypeScript', 'Vite', 'Modern JavaScript', 'CSS Architecture'],
    type: 'learning'
  },
  {
    year: '2021',
    title: 'The Spark: Starting from Scratch',
    organization: 'Self-Directed Foundation',
    description: 'Began the voyage of code craftsmanship. Embraced the philosophy that dedication, positive mindset, and continuous refinement turn dreams into reality.',
    skills: ['HTML5', 'CSS3/SCSS', 'JavaScript Fundamentals', 'Design Basics'],
    type: 'milestone'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'art-of-micro-animations',
    title: 'The Art of Micro-Animations: Adding Soul Without the Jank',
    excerpt: 'Why the best animations are the ones users feel rather than consciously notice—and how to keep them running at a buttery 60 FPS.',
    date: 'Oct 2024',
    readTime: '4 min read',
    category: 'Design & Motion',
    content: [
      'Micro-interactions are the heartbeat of modern interface design. They transform static screens into living surfaces that acknowledge the user’s presence.',
      'When designing motion, restraint is paramount. A spring curve that overshoots too aggressively feels toy-like, while an easing curve that is too slow feels sluggish.',
      'Always prioritize compositor-friendly properties: transform and opacity. When you animate layout-triggering properties like width, height, or margin, you force the browser into expensive recalculation cycles.',
      'Rule of thumb: aim for durations between 180ms and 320ms. It gives the human eye enough time to parse the change while keeping the interface feeling instantaneous.'
    ]
  },
  {
    id: 'journey-from-scratch',
    title: 'Starting from Scratch: How Curiosity Built My World',
    excerpt: 'Reflections on beginning with an empty code editor, embracing minimalism, and discovering that every expert was once a novice.',
    date: 'Sep 2024',
    readTime: '5 min read',
    category: 'Journey & Growth',
    content: [
      'When I first wrote HTML and CSS, I didn’t know where my feet would lead me. All I knew was that I wanted to create a website to show my world and preserve memories.',
      'Early on, I felt self-conscious about my work not being minimal or polished enough. But I realized minimalism isn’t the absence of elements—it is the absence of unnecessary noise.',
      'True dedication is showing up when the bug doesn’t make sense, when the build fails, and when the design doesn’t match what is in your head. Each challenge solved is a brick laid in the foundation.',
      'To anyone beginning their path: stay positive, protect your curiosity, and build things with love.'
    ]
  },
  {
    id: 'modern-react-performance',
    title: 'Zero-Lag Web Interfaces: Core Web Vitals in 2024',
    excerpt: 'Practical techniques for squeezing 100/100 Lighthouse performance out of animation-heavy React applications.',
    date: 'Aug 2024',
    readTime: '6 min read',
    category: 'Engineering',
    content: [
      'Many developers believe that rich animations and high performance are mutually exclusive. In reality, modern browsers provide dedicated hardware pipelines that allow stunning visuals with negligible overhead.',
      'By decoupling user input from expensive state trees, batching animations with requestAnimationFrame, and offloading heavy computational physics to lightweight HTML5 Canvas, you can achieve 60 FPS even on mid-tier mobile hardware.',
      'Always test with 4x CPU slowdown and Fast 3G throttling. If your animations still feel graceful under stress, your users on fiber will experience pure magic.'
    ]
  }
];
