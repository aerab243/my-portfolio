'use client';

import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollStageProps {
  sections: string[];
}

export function ScrollStage({ sections }: ScrollStageProps) {
  const { camera } = useThree();
  const scrollProgress = useRef(0);
  const targetPosition = useRef({ x: 0, y: 0, z: 5 });
  const currentPosition = useRef({ x: 0, y: 0, z: 5 });

  useEffect(() => {
    // Create scroll triggers for each section
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onUpdate: (self) => {
          scrollProgress.current = self.progress;
        },
      });
    });

    // Camera movement based on scroll
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Camera path through 3D space
        if (progress < 0.2) {
          // Hero - close, centered
          targetPosition.current = { x: 0, y: 0, z: 5 };
        } else if (progress < 0.4) {
          // Projects - slight left, higher
          targetPosition.current = { x: 2, y: -1, z: 6 };
        } else if (progress < 0.6) {
          // Skills - left, lower
          targetPosition.current = { x: -2, y: -2, z: 5 };
        } else if (progress < 0.8) {
          // Blog - right, centered
          targetPosition.current = { x: 1, y: -4, z: 6 };
        } else {
          // Contact - centered, far
          targetPosition.current = { x: 0, y: -6, z: 7 };
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [sections]);

  useFrame(() => {
    // Smooth camera movement
    currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * 0.05;
    currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * 0.05;
    currentPosition.current.z += (targetPosition.current.z - currentPosition.current.z) * 0.05;

    camera.position.set(
      currentPosition.current.x,
      currentPosition.current.y,
      currentPosition.current.z
    );
    
    // Camera always looks at center of scene
    camera.lookAt(0, currentPosition.current.y, 0);
  });

  return null;
}
