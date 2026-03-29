'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills, skillCategories } from '@/data/skills';

gsap.registerPlugin(ScrollTrigger);

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });

      gsap.from('.category-badge', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="min-h-screen py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-indigo-400 mb-2 tracking-wider">
            03 — Compétences
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-50">
            Stack technique
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {skillCategories.map((cat) => (
            <span
              key={cat}
              className="category-badge px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="flex justify-between mb-2">
                <span className="text-zinc-200 font-medium">{skill.name}</span>
                <span className="text-zinc-500 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
