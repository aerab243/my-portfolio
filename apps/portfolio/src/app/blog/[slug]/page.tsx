import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // In a real app, fetch from CMS or markdown files
  const posts: Record<string, { title: string; description: string }> = {
    'building-3d-web-experiences': {
      title: 'Building Immersive 3D Web Experiences',
      description: 'Comment créer des expériences web 3D mémorables avec Three.js et React Three Fiber.',
    },
    'future-of-web-development': {
      title: 'The Future of Web Development',
      description: 'Exploration des tendances qui façonnent avenir du développement web.',
    },
    'typescript-patterns': {
      title: 'Mastering TypeScript Patterns',
      description: 'Les patterns TypeScript essentiels pour écrire du code plus maintenable.',
    },
  };

  const post = posts[slug];

  if (!post) {
    return { title: 'Article non trouvé' };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // This would normally fetch from MDX files or a CMS
  const posts: Record<string, { title: string; content: string; date: string; readTime: string }> = {
    'building-3d-web-experiences': {
      title: 'Building Immersive 3D Web Experiences',
      date: '15 Mar 2024',
      readTime: '8 min',
      content: `
# Building Immersive 3D Web Experiences

Les expériences web 3D représentent l'avenir de l'interaction utilisateur sur le web. 
Avec l'évolution des capacités des navigateurs et la maturation des bibliothèques comme Three.js, 
créer des expériences immersives n'a jamais été aussi accessible.

## Pourquoi le 3D?

Le 3D permet de créer des interfaces plus engageantes et mémorisables. 
Les utilisateurs se souviennent mieux des sites qui offrent une expérience unique.

## Les outils essentiels

- **Three.js**: La bibliothèque JavaScript 3D par excellence
- **React Three Fiber**: Pour intégrer Three.js dans React
- **GSAP**: Pour les animations fluides
- **Blender**: Pour créer les modèles 3D

## Conclusion

Le futur du web est immersif. Commencez dès aujourd'hui!
      `,
    },
  };

  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-foreground-muted hover:text-foreground mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour au blog
        </Link>

        <article>
          <header className="mb-12">
            <p className="text-accent text-sm mb-4">
              {post.date} · {post.readTime}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-foreground-secondary leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
