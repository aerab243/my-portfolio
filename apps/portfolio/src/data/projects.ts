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

export const defaultProjects: Project[] = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    description: 'Plateforme e-commerce moderne avec React, Node.js et Stripe. Inclut gestion des stocks, payments sécurisés et dashboard admin.',
    stars: 234,
    forks: 45,
    language: 'TypeScript',
    languageColor: '#3178c6',
    url: 'https://github.com',
    topics: ['react', 'nodejs', 'stripe', 'postgresql'],
    createdAt: '2023-01-15',
    updatedAt: '2024-03-10',
  },
  {
    id: '2',
    name: 'AI Dashboard',
    description: 'Tableau de bord analytique avec visualisations 3D en temps réel. Support pour multiples sources de données et ML models.',
    stars: 189,
    forks: 32,
    language: 'Python',
    languageColor: '#3572A5',
    url: 'https://github.com',
    topics: ['python', 'machine-learning', '3d', 'dashboard'],
    createdAt: '2023-03-22',
    updatedAt: '2024-02-28',
  },
  {
    id: '3',
    name: 'Real-time Chat',
    description: 'Application de chat temps réel avec WebSockets. Support pour channels, reactions, et partage de fichiers.',
    stars: 156,
    forks: 28,
    language: 'JavaScript',
    languageColor: '#f7df1e',
    url: 'https://github.com',
    topics: ['websocket', 'chat', 'real-time'],
    createdAt: '2023-06-10',
    updatedAt: '2024-01-15',
  },
  {
    id: '4',
    name: 'Portfolio CMS',
    description: 'Système de gestion de contenu headless avec API GraphQL. Optimisé pour la performance et le SEO.',
    stars: 98,
    forks: 15,
    language: 'TypeScript',
    languageColor: '#3178c6',
    url: 'https://github.com',
    topics: ['graphql', 'cms', 'headless', 'seo'],
    createdAt: '2023-09-05',
    updatedAt: '2023-12-20',
  },
  {
    id: '5',
    name: 'DevOps Toolkit',
    description: 'Collection d\'outils DevOps pour CI/CD, monitoring et deployment automation.',
    stars: 87,
    forks: 12,
    language: 'Go',
    languageColor: '#00ADD8',
    url: 'https://github.com',
    topics: ['devops', 'docker', 'kubernetes', 'ci-cd'],
    createdAt: '2023-11-18',
    updatedAt: '2024-03-01',
  },
  {
    id: '6',
    name: 'Mobile Fitness App',
    description: 'Application mobile cross-platform pour le suivi fitness avec gamification et social features.',
    stars: 143,
    forks: 22,
    language: 'TypeScript',
    languageColor: '#3178c6',
    url: 'https://github.com',
    topics: ['react-native', 'fitness', 'mobile', 'gamification'],
    createdAt: '2023-08-30',
    updatedAt: '2024-02-10',
  },
];
