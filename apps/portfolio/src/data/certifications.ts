export interface Certification {
  id: string;
  name: string;
  institution: string;
  year: string;
  credentialId?: string;
}

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'Business Analysis & Process Management',
    institution: 'Coursera',
    year: '2024',
    credentialId: 'COUR-BAPM-2024-001234',
  },
  {
    id: '2',
    name: 'C# (Basic)',
    institution: 'HackerRank',
    year: '2023',
    credentialId: 'HR-CSHARP-2023-005678',
  },
  {
    id: '3',
    name: 'SQL (Basic)',
    institution: 'HackerRank',
    year: '2023',
    credentialId: 'HR-SQL-2023-009876',
  },
  {
    id: '4',
    name: 'Python (Basic)',
    institution: 'HackerRank',
    year: '2023',
    credentialId: 'HR-PYTHON-2023-001122',
  },
  {
    id: '5',
    name: 'Legacy Javascript Algorithms and Data Structures',
    institution: 'freeCodeCamp',
    year: '2023',
    credentialId: 'FCC-JSADS-2023-003344',
  },
  {
    id: '6',
    name: 'Responsive Web Design',
    institution: 'freeCodeCamp',
    year: '2023',
    credentialId: 'FCC-RWD-2023-005566',
  },
  {
    id: '7',
    name: 'Scientific Computing With Python',
    institution: 'freeCodeCamp',
    year: '2023',
    credentialId: 'FCC-SCP-2023-007788',
  },
];
