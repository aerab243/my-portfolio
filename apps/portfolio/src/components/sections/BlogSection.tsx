'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Immersive 3D Web Experiences',
    excerpt: 'Comment créer des expériences web 3D mémorables avec Three.js et React Three Fiber.',
    date: '15 Mar 2024',
    readTime: '8 min',
    slug: 'building-3d-web-experiences',
  },
  {
    id: '2',
    title: 'The Future of Web Development',
    excerpt: "Exploration des tendances qui faconnent l'avenir du developpement web en 2024.",
    date: '28 Fév 2024',
    readTime: '5 min',
    slug: 'future-of-web-development',
  },
  {
    id: '3',
    title: 'Mastering TypeScript Patterns',
    excerpt: 'Les patterns TypeScript essentiels pour écrire du code plus maintenable.',
    date: '10 Jan 2024',
    readTime: '12 min',
    slug: 'typescript-patterns',
  },
];

export function BlogSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.blog-animate', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="blog"
      ref={containerRef}
      className="min-h-screen py-32 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="blog-animate text-sm font-mono text-indigo-400 mb-2 tracking-wider">
              04 — Blog
            </p>
            <h2 className="blog-animate text-4xl md:text-5xl font-bold text-zinc-50">
              Latest articles
            </h2>
          </div>
          <a
            href="/blog"
            className="blog-animate hidden md:flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Voir tous
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.slug}`}
              className="blog-animate group block p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-600" />
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-zinc-100 mb-3 group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-zinc-400 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="mt-6 flex items-center gap-2 text-sm text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Lire l'article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <a
          href="/blog"
          className="blog-animate mt-8 md:hidden flex items-center justify-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Voir tous les articles
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
