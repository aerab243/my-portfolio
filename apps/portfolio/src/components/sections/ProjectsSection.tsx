'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { defaultProjects } from '@/data/projects';

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="min-h-screen py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-accent mb-2 tracking-wider">
            02 — Projets
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            selected work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {defaultProjects.map((project) => (
            <a
              key={project.id}
              href={`/projects/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="project-card group block p-8 rounded-2xl bg-background-secondary backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <div className="flex items-center gap-4 text-sm text-foreground-muted">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    {project.forks}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                {project.language && (
                  <span
                    className="px-2 py-1 rounded-full text-xs"
                    style={{ backgroundColor: `${project.languageColor}20`, color: project.languageColor }}
                  >
                    {project.language}
                  </span>
                )}
              </div>

              <p className="text-foreground-muted leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-1 bg-background-tertiary text-foreground-muted text-xs rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Voir le projet
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
