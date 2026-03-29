'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { stats } from '@/data/skills';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-animate', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
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
      id="about"
      ref={containerRef}
      className="min-h-screen py-32 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <p className="about-animate text-sm font-mono text-indigo-400 mb-2 tracking-wider">
            02 — À propos
          </p>
          <h2 className="about-animate text-4xl md:text-5xl font-bold text-zinc-50 mb-4">
            À propos de moi
          </h2>
        </div>

        <div className="about-animate bg-zinc-900/30 rounded-2xl p-8 border border-zinc-800 mb-12">
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            Passionné par la technologie et l'innovation
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Professionnel passionné de l'informatique avec plus de 8 ans d'expérience dans la création d'applications web robustes et la direction d'équipes de développement. Spécialisé dans le développement full-stack, l'architecture cloud et les méthodologies agiles. J'excelle dans la résolution de problèmes complexes et l'accompagnement des développeurs pour atteindre leur plein potentiel.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="about-animate bg-zinc-900/30 rounded-xl p-6 border border-zinc-800 text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">{stats.yearsExperience}</div>
            <div className="text-zinc-400 text-sm">Années d'expérience</div>
          </div>
          <div className="about-animate bg-zinc-900/30 rounded-xl p-6 border border-zinc-800 text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">{stats.projectsCompleted}</div>
            <div className="text-zinc-400 text-sm">Projets réalisés</div>
          </div>
          <div className="about-animate bg-zinc-900/30 rounded-xl p-6 border border-zinc-800 text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">{stats.satisfiedClients}</div>
            <div className="text-zinc-400 text-sm">Clients satisfaits</div>
          </div>
          <div className="about-animate bg-zinc-900/30 rounded-xl p-6 border border-zinc-800 text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">{stats.technologies}</div>
            <div className="text-zinc-400 text-sm">Technologies maîtrisées</div>
          </div>
        </div>
      </div>
    </section>
  );
}
