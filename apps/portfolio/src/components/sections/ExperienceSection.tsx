'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences } from '@/data/experience';

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.exp-animate', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="min-h-screen py-32 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <p className="exp-animate text-sm font-mono text-indigo-400 mb-2 tracking-wider">
            03 — Expérience
          </p>
          <h2 className="exp-animate text-4xl md:text-5xl font-bold text-zinc-50 mb-4">
            Parcours professionnel
          </h2>
          <p className="exp-animate text-zinc-400 max-w-2xl mx-auto">
            Mon parcours professionnel et les réalisations marquantes
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="exp-animate relative pl-8 border-l-2 border-zinc-800"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-zinc-900" />
              
              <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-zinc-50">{exp.title}</h3>
                  <span className="text-sm font-mono text-indigo-400">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                
                <p className="text-indigo-400 mb-4">{exp.company} · {exp.location}</p>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-zinc-400 text-sm flex items-start gap-2">
                      <span className="text-indigo-500 mt-1.5">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
