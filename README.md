# Portfolio Développeur

Un portfolio moderne et responsive construit avec React, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design Moderne** : Interface utilisateur élégante avec thème sombre/clair
- **Responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Animations Fluides** : Transitions et animations CSS pour une expérience utilisateur améliorée
- **Sections Complètes** :
  - Accueil avec animation de frappe
  - À propos avec statistiques animées
  - Compétences avec barres de progression
  - Expérience professionnelle
  - Projets avec filtrage par catégorie
  - Certifications
  - Contact avec formulaire fonctionnel

## 🛠️ Technologies Utilisées

- **Frontend** : React 18, TypeScript
- **Styling** : Tailwind CSS, PostCSS
- **Icons** : Lucide React
- **Build Tool** : Vite
- **Linting** : ESLint

## 📦 Installation

1. Clonez le repository :

   ```bash
   git clone https://github.com/aerab243/my-portfolio.git
   cd my-portfolio
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Lancez le serveur de développement :

   ```bash
   npm run dev
   ```

4. Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

## 📜 Scripts Disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Construit l'application pour la production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie le code avec ESLint
- `npm run typecheck` : Vérifie les types TypeScript

## 📁 Structure du Projet

```plaintext
src/
├── components/          # Composants React
│   ├── About.tsx       # Section À propos
│   ├── Certifications.tsx
│   ├── Contact.tsx     # Formulaire de contact
│   ├── Experience.tsx  # Expérience professionnelle
│   ├── Footer.tsx      # Pied de page
│   ├── Hero.tsx        # Section d'accueil
│   ├── Loader.tsx      # Indicateur de chargement
│   ├── Navigation.tsx  # Barre de navigation
│   ├── Projects.tsx    # Section projets
│   └── Skills.tsx      # Compétences techniques
├── contexts/           # Contextes React
│   └── ThemeContext.tsx
├── data/               # Données statiques
│   └── portfolioData.ts
└── main.tsx           # Point d'entrée
```

## 📧 Configuration du Formulaire de Contact

Pour que le formulaire de contact fonctionne, vous devez configurer Resend :

1. **Créer un compte Resend** : [resend.com](https://resend.com)
2. **Obtenir une clé API** dans votre tableau de bord
3. **Configurer les variables d'environnement** :

   Copiez le fichier `.env.example` vers `.env.local` :

   ```bash
   cp .env.example .env.local
   ```

   Remplissez les variables :

   ```env
   RESEND_API_KEY=votre_clé_api_resend
   CONTACT_EMAIL=votre_email@exemple.com
   ```

4. **Vérifier la configuration** : Le formulaire enverra des emails à l'adresse spécifiée dans `CONTACT_EMAIL`

## 🚀 Déploiement sur Vercel

1. **Connecter votre repository** sur [vercel.com](https://vercel.com)
2. **Ajouter les variables d'environnement** dans les paramètres du projet :
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`

3. **Déployer** : Vercel détectera automatiquement les API routes

## 🧪 Test du Formulaire de Contact (Développement)

Pour tester le formulaire en développement local :

1. **Démarrer le serveur** :

   ```bash
   npm run dev
   ```

2. **Remplir le formulaire** sur `http://localhost:5173/#contact`

3. **Vérifier les emails** : Les messages seront envoyés à l'adresse configurée dans `CONTACT_EMAIL`

**Note** : En développement, Vercel simule les serverless functions. Pour un test complet, déployez sur Vercel.

## 📄 Licence

Ce projet est sous licence MIT.

## 👤 Auteur

**Anna-el Gerard RABENANDRASANA**

- Email : ag.rabenandrasana@example.com
- LinkedIn : [Votre profil LinkedIn](https://linkedin.com)
- GitHub : [Votre GitHub](https://github.com)
