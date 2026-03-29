'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingShapesProps {
  count?: number;
}

export function FloatingShapes({ count = 20 }: FloatingShapesProps) {
  const meshRefs = useRef<(Mesh | null)[]>([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    meshRefs.current.forEach((mesh, i) => {
      if (mesh) {
        mesh.position.y = Math.sin(time * 0.3 + i * 0.5) * 0.5;
        mesh.rotation.x = time * 0.2 + i * 0.2;
        mesh.rotation.y = time * 0.15 + i * 0.3;
      }
    });
  });

  const shapes = Array.from({ length: count }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 5 - 2,
    ] as [number, number, number],
    scale: 0.2 + Math.random() * 0.4,
    rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
    type: i % 3 === 0 ? 'icosahedron' : i % 3 === 1 ? 'octahedron' : 'tetrahedron',
  }));

  return (
    <group>
      {shapes.map((shape, i) => (
        <mesh
          key={i}
          ref={(el) => { meshRefs.current[i] = el; }}
          position={shape.position}
          scale={shape.scale}
          rotation={shape.rotation}
        >
          {shape.type === 'icosahedron' ? (
            <icosahedronGeometry args={[1, 0]} />
          ) : shape.type === 'octahedron' ? (
            <octahedronGeometry args={[1, 0]} />
          ) : (
            <tetrahedronGeometry args={[1, 0]} />
          )}
          <meshStandardMaterial
            color="#6366f1"
            wireframe
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}
