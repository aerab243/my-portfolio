'use client';

import { Canvas3D } from './Canvas3D';
import { FloatingShapes } from './FloatingShapes';
import { ScrollStage } from './ScrollStage';
import { Cursor3D } from './Cursor3D';

const sections = ['#hero', '#projects', '#skills', '#blog', '#contact'];

export function Scene3D() {
  return (
    <Canvas3D className="fixed inset-0 -z-10">
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      
      {/* Background particles/shapes */}
      <FloatingShapes count={25} />
      
      {/* Custom cursor follow */}
      <Cursor3D />
      
      {/* Scroll-based camera movement */}
      <ScrollStage sections={sections} />
      
      {/* Fog for depth */}
      <fog attach="fog" args={['#0a0a0f', 5, 25]} />
    </Canvas3D>
  );
}
