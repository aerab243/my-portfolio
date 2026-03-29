export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'IT Manager',
    company: 'NEXUS-SARLU',
    location: 'Toamasina',
    startDate: '01/2025',
    endDate: 'Present',
    isCurrent: true,
    description: [
      'Gestion et supervision du système d\'information (réseaux, serveurs, postes utilisateurs)',
      'Pilotage des projets informatiques (déploiement, migration, digitalisation)',
      'Encadrement et coordination des équipes techniques IT',
      'Mise en place et suivi des politiques de sécurité informatique',
      'Gestion des prestataires et des achats IT (matériels, licences, services)',
      'Support technique de niveau 2/3 et amélioration continue des services',
      'Veille technologique et adaptation du SI aux besoins métiers',
    ],
  },
  {
    id: '2',
    title: 'Freelancer - Media Project',
    company: 'DCDMRESEARCH',
    location: 'Toamasina',
    startDate: '10/2024',
    endDate: '03/2025',
    isCurrent: false,
    description: [
      'Effectuer une recherche et une collecte d\'articles sur des sites web prédéfinis',
      'Classer les articles collectés selon des critères définis (secteur, client, pertinence)',
      'Analyser et sélectionner les articles en fonction de leur pertinence et valeur ajoutée',
    ],
  },
  {
    id: '3',
    title: 'IT Administrator & Software Engineer',
    company: 'Groupe Externalisation',
    location: 'Toamasina',
    startDate: '08/2024',
    endDate: '01/2025',
    isCurrent: false,
    description: [
      'Mise en place d\'une nouvelle structure IT (serveur de sécurité PFsense, VPN, AD)',
      'Création d\'une application ERP',
      'Support utilisateur',
      'Sécurisation des données',
    ],
  },
  {
    id: '4',
    title: 'Superviseur Project',
    company: 'Groupe Externalisation',
    location: 'Toamasina',
    startDate: '07/2024',
    endDate: '09/2024',
    isCurrent: false,
    description: [
      'Support utilisateur',
      'Administration système et réseaux',
      'Conception de logiciel interne',
      'Leadership',
    ],
  },
  {
    id: '5',
    title: 'IT Developer Internship',
    company: 'AMBATOVY',
    location: 'Toamasina',
    startDate: '08/2023',
    endDate: '05/2024',
    isCurrent: false,
    description: [
      'Conception du logiciel IT Asset Inventory',
      'Développement d\'un système de CYBER ALERT',
      'Développement de l\'application ITAMS',
    ],
  },
  {
    id: '6',
    title: 'IT Service Desk & Quality Internship',
    company: 'AMBATOVY',
    location: 'Toamasina',
    startDate: '07/2023',
    endDate: '10/2023',
    isCurrent: false,
    description: [
      'Support de 4 000 utilisateurs connectés',
      'Traitement de 100 tickets par jour sur Service Desk Plus (SDP)',
      'Utilisation d\'Active Directory',
      'Onboarding and offboarding',
      'Helpdesk N1, N2',
    ],
  },
  {
    id: '7',
    title: 'Alternance PHP/MySQL Developer',
    company: 'SMMC',
    location: 'Toamasina',
    startDate: '04/2022',
    endDate: '07/2022',
    isCurrent: false,
    description: [
      'Conception et réalisation d\'application de gestion de suivis de véhicule du parc Mahasarika',
    ],
  },
  {
    id: '8',
    title: 'Web Developer',
    company: 'Freelance',
    location: 'Toamasina',
    startDate: '01/2022',
    endDate: '06/2022',
    isCurrent: false,
    description: [
      'Conception d\'un site vitrine pour KembaMLG',
    ],
  },
];
