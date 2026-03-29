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
          <p className="exp-animate text-sm font-mono text-accent mb-2 tracking-wider">
            03 — Expérience
          </p>
          <h2 className="exp-animate text-4xl md:text-5xl font-bold text-foreground mb-4">
            Parcours professionnel
          </h2>
          <p className="exp-animate text-foreground-muted max-w-2xl mx-auto">
            Mon parcours professionnel et les réalisations marquantes
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="exp-animate relative pl-8 border-l-2 border-border"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent border-4 border-background" />

              <div className="bg-background-secondary rounded-xl p-6 border border-border hover:border-border-light transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <span className="text-sm font-mono text-accent">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>

                <p className="text-accent mb-4">{exp.company} · {exp.location}</p>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-foreground-muted text-sm flex items-start gap-2">
                      <span className="text-accent mt-1.5">▹</span>
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
