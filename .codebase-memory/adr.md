# ADR-001: Portfolio 3D Immersif avec Next.js

## Status
Accepted

## Context
Développer un portfolio personnel créatif et unique avec:
- Parcours immersif 3D avec scroll storytelling
- Intégration de projets GitHub
- Blog pour articles futurs
- Animations et effets visuels forts
- Contrainte: budget limité, auto-création d'assets 3D

## Decision

### Stack Technique
- **Framework**: Next.js 16 App Router (RSC pour performance)
- **3D**: Three.js + React Three Fiber + @react-three/drei
- **Animation**: GSAP + ScrollTrigger pour scroll storytelling
- **Styling**: Tailwind CSS v4 (déjà configuré)
- **Deployment**: Vercel (gratuite tier suffisante)

### Architecture
1. **Single Page avec Sections 3D**
   - Un Canvas 3D global avec ScrollTrigger
   - Chaque section est un "stage" dans l'espace 3D
   - Overlay HTML pour le contenu textuel

2. **GitHub API Integration**
   - Récupération dynamique des repositories
   - Cache avec ISR (Incremental Static Regeneration)

3. **3D Assets Optimisés**
   - Formes géométriques procédurales (pas de models lourds)
   - Utilisation de geometries primitives de Three.js
   - Effets de particules et glow via shaders

4. **Performance Strategy**
   - Lazy loading du Canvas 3D
   - Intersection Observer pour déclencher animations
   - Dynamic imports pour les composants 3D

## Consequences

### Positifs
- Expérience utilisateur mémorable et distinctive
- Scroll storytelling fluide et engageant
- Performance correcte sur Vercel (edge runtime)
- Maintenance facile avec Next.js

### Négatifs
- Bundle size увеличен (Three.js ~150kb)
- SEO requires extra care (3D content invisible aux crawlers)
- Mobile experience может être limités (WebGL support)

## Alternatives Considered
1. **Pure WebGL** - Trop complexe, pas de React integration
2. **Three.js vanilla** - Plus de code, moins maintenable
3. **Remotion** - Video-based, moins interactif
4. **Pas de 3D** - Perdu le côté unique demandé
