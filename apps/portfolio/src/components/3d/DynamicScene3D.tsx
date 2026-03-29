'use client';

import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Lazy load the entire 3D scene
export const DynamicScene3D = dynamic(
  () => import('./Scene3D').then((mod) => mod.Scene3D),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0a0a0f] to-[#12121a]" />
    ),
  }
);

// Lazy load cursor (lighter component)
export const DynamicCursor3D = dynamic(
  () => import('./Cursor3D').then((mod) => mod.Cursor3D),
  { ssr: false }
);

// Lazy load floating shapes (for better initial load)
export const DynamicFloatingShapes = dynamic(
  () => import('./FloatingShapes').then((mod) => mod.FloatingShapes),
  { ssr: false }
);
