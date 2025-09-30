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
  - Projets (en cours de développement)
  - Certifications
  - Contact avec formulaire fonctionnel (Resend integration)
- **API Serverless** : Formulaire de contact avec envoi d'emails via Resend
- **Déploiement** : Optimisé pour Vercel avec configuration automatique

## 🛠️ Technologies Utilisées

- **Frontend** : React 18, TypeScript
- **Styling** : Tailwind CSS, PostCSS
- **Icons** : Lucide React
- **Build Tool** : Vite
- **Linting** : ESLint
- **Backend** : API Routes Vercel (Node.js)
- **Email Service** : Resend
- **Deployment** : Vercel
- **Version Control** : Git/GitHub

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
my-portfolio/
├── api/                 # API Serverless Vercel
│   └── contact.js      # Endpoint pour l'envoi d'emails
├── src/
│   ├── components/     # Composants React
│   │   ├── About.tsx   # Section À propos
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx # Formulaire de contact
│   │   ├── Experience.tsx # Expérience professionnelle
│   │   ├── Footer.tsx  # Pied de page
│   │   ├── Hero.tsx    # Section d'accueil
│   │   ├── Loader.tsx  # Indicateur de chargement
│   │   ├── Navigation.tsx # Barre de navigation
│   │   ├── Projects.tsx # Section projets
│   │   └── Skills.tsx  # Compétences techniques
│   ├── contexts/       # Contextes React
│   │   └── ThemeContext.tsx
│   ├── data/          # Données statiques
│   │   └── portfolioData.ts
│   └── main.tsx       # Point d'entrée
├── package.json       # Dépendances et scripts
├── vite.config.ts     # Configuration Vite
├── tailwind.config.js # Configuration Tailwind
└── README.md          # Documentation
```

## 📧 Configuration du Formulaire de Contact

Le portfolio utilise **Resend** pour l'envoi d'emails depuis le formulaire de contact.

### 🔧 Configuration Locale (Développement)

1. **Créer un compte Resend** : [resend.com](https://resend.com)
2. **Obtenir une clé API** dans votre tableau de bord Resend
3. **Créer les variables d'environnement** :

   Créez un fichier `.env.local` à la racine du projet :

   ```env
   RESEND_API_KEY=re_xxxxxxxxx  # Votre clé API Resend
   CONTACT_EMAIL=votre@email.com # Email de réception des messages
   ```

### 🌐 Configuration Production (Vercel)

1. **Variables d'environnement Vercel** :
   ```bash
   vercel env add RESEND_API_KEY
   vercel env add CONTACT_EMAIL
   ```

2. **Ou via l'interface Vercel** :
   - Allez dans Project Settings > Environment Variables
   - Ajoutez `RESEND_API_KEY` et `CONTACT_EMAIL`
   - Activez pour Production, Preview, et Development

### ✉️ Fonctionnement

- **From** : `Portfolio Contact <onboarding@resend.dev>`
- **To** : Adresse configurée dans `CONTACT_EMAIL`
- **Format** : Email HTML avec styling intégré
- **Validation** : Champs requis + validation email regex
- **Réponse** : JSON avec statut et ID du message

## 🚀 Déploiement sur Vercel

### 📝 Étapes de Déploiement

1. **Préparer le repository** :
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connecter à Vercel** :
   - Allez sur [vercel.com](https://vercel.com)
   - Importez votre repository GitHub
   - Vercel détecte automatiquement la configuration Vite

3. **Configurer les variables d'environnement** :
   ```bash
   # Via CLI Vercel
   vercel env add RESEND_API_KEY production
   vercel env add CONTACT_EMAIL production
   ```

4. **Déployer** :
   ```bash
   vercel --prod
   ```

### ✅ Configuration Automatique

- **API Routes** : `api/contact.js` devient `/api/contact`
- **Build** : `npm run build` (Vite)
- **Output** : `dist/` directory
- **Functions** : Node.js 18.x runtime
- **Domaine** : `https://votre-projet.vercel.app`

### 🔍 Vérification du Déploiement

```bash
# Tester l'API de contact
curl -X POST "https://votre-projet.vercel.app/api/contact" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}'
```

Réponse attendue :
```json
{
  "message": "Message envoyé avec succès",
  "id": "1b21ba1f-382e-4f57-b3a6-8385e80c2dc7"
}
```

## 🧪 Test du Formulaire de Contact

### 🖥️ Test Local (Développement)

1. **Démarrer le serveur** :
   ```bash
   npm run dev
   ```

2. **Remplir le formulaire** sur `http://localhost:5173/#contact`

3. **Vérifier les emails** à l'adresse configurée dans `CONTACT_EMAIL`

### 🌐 Test en Production

**Via le site web** :
- Visitez `https://anna-el.vercel.app/#contact`
- Remplissez et soumettez le formulaire

**Via API directe (PowerShell)** :
```powershell
Invoke-RestMethod -Uri "https://anna-el.vercel.app/api/contact" `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"name":"Test User","email":"test@example.com","subject":"Test","message":"Message de test"}'
```

**Via API directe (curl)** :
```bash
curl -X POST "https://anna-el.vercel.app/api/contact" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","subject":"Test","message":"Message de test"}'
```

### 📊 Status de l'API

- ✅ **Production** : https://anna-el.vercel.app/api/contact
- ✅ **Resend Integration** : Configuré et fonctionnel
- ✅ **Variables d'environnement** : RESEND_API_KEY et CONTACT_EMAIL configurées
- ✅ **CORS** : Configuré pour tous les domaines
- ✅ **Validation** : Champs requis + email regex

### 🐛 Débogage

Pour voir les logs de l'API :
```bash
vercel logs https://anna-el.vercel.app --since=10m
```

## 📄 Licence

Ce projet est sous licence MIT.

## 👤 Auteur

**Anna-el Gerard RABENANDRASANA**
*Développeur Full-Stack*

### 📬 Contact

- **Email professionnel** : aerabenandrasana@gmail.com
- **Portfolio** : [https://anna-el.vercel.app](https://anna-el.vercel.app)
- **GitHub** : [https://github.com/aerab243](https://github.com/aerab243)
- **LinkedIn** : [https://www.linkedin.com/in/anna-%C3%ABl-g%C3%A9rard-rabenandrasana-5557a52a0/](https://linkedin.com)

### 💼 À Propos

Spécialisé dans le développement d'applications web modernes avec React, TypeScript, et les technologies cloud. Passionné par l'UX/UI et l'optimisation des performances.

**Compétences principales** :
- Frontend : React, TypeScript, Tailwind CSS
- Backend : Node.js, API REST, Serverless
- Cloud : Vercel, Supabase
- Outils : Git, Vite, ESLint

---

### 🔗 Liens Utiles

- **Portfolio Live** : [https://anna-el.vercel.app](https://anna-el.vercel.app)
- **Repository GitHub** : [https://github.com/aerab243/my-portfolio](https://github.com/aerab243/my-portfolio)
- **Resend Documentation** : [https://resend.com/docs](https://resend.com/docs)
- **Vercel Documentation** : [https://vercel.com/docs](https://vercel.com/docs)

---

**Dernière mise à jour** : Septembre 2025  
**Version** : 2.0.0 - Formulaire de contact fonctionnel avec Resend
