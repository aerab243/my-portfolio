import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getRepoByName } from '@/lib/github';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// In a real app, this would come from a database or be statically generated
const GITHUB_USERNAME = 'your-username'; // TODO: Replace with actual username

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const repo = await getRepoByName(GITHUB_USERNAME, slug);
    return {
      title: `${repo.name} | Projets`,
      description: repo.description || `Projet ${repo.name}`,
    };
  } catch {
    return {
      title: 'Projet non trouvé',
    };
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  try {
    const repo = await getRepoByName(GITHUB_USERNAME, slug);

    return (
      <div className="min-h-screen py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-foreground mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux projets
          </Link>

          <article className="prose prose-invert prose-lg max-w-none">
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {repo.name}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-foreground-muted">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-full transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Voir sur GitHub
                </a>

                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {repo.stargazers_count}
                </span>

                <span>{repo.forks_count} forks</span>

                {repo.language && (
                  <span className="px-2 py-1 bg-background-tertiary rounded-full text-sm">
                    {repo.language}
                  </span>
                )}
              </div>
            </header>

            <div className="text-foreground-secondary leading-relaxed">
              <p>{repo.description || 'Aucune description disponible.'}</p>
            </div>

            {repo.topics && repo.topics.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
