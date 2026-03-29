export interface Project {
  id: string;
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string | null;
  languageColor?: string;
  url: string;
  topics: string[];
  createdAt: string;
  updatedAt: string;
}

// Projets en attente de développement
export const defaultProjects: Project[] = [];
