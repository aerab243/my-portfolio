export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Database' | '3D' | 'DevOps';
  icon?: string;
}

export const skills: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'PostgreSQL', level: 80, category: 'Database' },
  { name: 'MongoDB', level: 75, category: 'Database' },
  { name: 'Three.js / WebGL', level: 75, category: '3D' },
  { name: 'Python', level: 70, category: 'Backend' },
  { name: 'Docker', level: 75, category: 'DevOps' },
  { name: 'AWS / Vercel', level: 80, category: 'DevOps' },
  { name: 'GraphQL', level: 70, category: 'Backend' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
  { name: 'Redis', level: 65, category: 'Database' },
];

export const skillCategories = ['Frontend', 'Backend', 'Database', '3D', 'DevOps'] as const;
