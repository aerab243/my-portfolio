export interface Skill {
  name: string;
  level: number;
  category: 'Programming' | 'Framework' | 'DevOps' | 'Database' | 'Tools';
}

export const skills: Skill[] = [
  // Langages de Programmation
  { name: 'JavaScript/TypeScript', level: 95, category: 'Programming' },
  { name: 'Python', level: 88, category: 'Programming' },
  { name: 'Java', level: 82, category: 'Programming' },
  { name: 'PHP', level: 78, category: 'Programming' },
  { name: 'Go', level: 75, category: 'Programming' },
  
  // Frameworks & Libraries
  { name: 'React/Next.js', level: 93, category: 'Framework' },
  { name: 'Node.js/Express', level: 90, category: 'Framework' },
  { name: 'Vue.js', level: 85, category: 'Framework' },
  { name: 'Django/Flask', level: 82, category: 'Framework' },
  { name: 'Spring Boot', level: 78, category: 'Framework' },
  
  // DevOps & Cloud
  { name: 'Docker/Kubernetes', level: 88, category: 'DevOps' },
  { name: 'AWS/Azure', level: 85, category: 'DevOps' },
  { name: 'CI/CD (Jenkins, GitLab)', level: 90, category: 'DevOps' },
  { name: 'Terraform', level: 80, category: 'DevOps' },
  { name: 'Linux/Bash', level: 92, category: 'DevOps' },
  
  // Bases de Données
  { name: 'PostgreSQL/MySQL', level: 90, category: 'Database' },
  { name: 'MongoDB', level: 85, category: 'Database' },
  { name: 'Redis', level: 82, category: 'Database' },
  { name: 'Elasticsearch', level: 78, category: 'Database' },
  
  // Outils & Méthodologies
  { name: 'Git/GitHub', level: 95, category: 'Tools' },
  { name: 'Agile/Scrum', level: 90, category: 'Tools' },
  { name: 'Jira/Confluence', level: 88, category: 'Tools' },
  { name: 'Figma/Design', level: 75, category: 'Tools' },
];

export const skillCategories = ['Programming', 'Framework', 'DevOps', 'Database', 'Tools'] as const;

export const stats = {
  yearsExperience: '6+',
  projectsCompleted: '45+',
  satisfiedClients: '28+',
  technologies: '25+',
};
