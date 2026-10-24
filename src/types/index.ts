export type ProjectCategory = 'all' | 'web-apps' | 'ecommerce' | 'creative' | 'open-source';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  highlights: string[];
  challenge?: string;
  solution?: string;
  metrics?: { label: string; value: string }[];
}

export type SkillCategory = 'Frontend' | 'Animation & Design' | 'Backend & Tools' | 'Architecture';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: number; // 0 to 100
  highlight?: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  skills: string[];
  type: 'milestone' | 'career' | 'learning';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}
