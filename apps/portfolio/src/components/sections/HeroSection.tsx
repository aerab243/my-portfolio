'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-animate', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="hero-animate text-sm md:text-base font-mono text-indigo-400 mb-4 tracking-wider">
          Bonjour, je suis
        </p>
        
        <h1 className="hero-animate text-5xl md:text-7xl lg:text-8xl font-bold text-zinc-50 mb-6 tracking-tight">
          Développeur
          <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
            Full Stack
          </span>
        </h1>
        
        <p className="hero-animate text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Je crée des expériences numériques immersives avec une passion pour le design 
          moderne et les interfaces qui marquent les esprits.
        </p>
        
        <div className="hero-animate flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-medium rounded-full transition-all duration-300 hover:bg-zinc-800/50"
          >
            Me contacter
          </a>
        </div>
      </div>

      <div className="hero-animate absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-zinc-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
