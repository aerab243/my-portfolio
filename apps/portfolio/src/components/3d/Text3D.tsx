'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Mesh } from 'three';

interface Text3DProps {
  text: string;
  position?: [number, number, number];
  fontSize?: number;
  color?: string;
}

export function Text3D({
  text,
  position = [0, 0, 0],
  fontSize = 1,
  color = '#fafafa',
}: Text3DProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;
    }
  });

  return (
    <Text
      ref={meshRef}
      position={position}
      fontSize={fontSize}
      color={color}
      anchorX="center"
      anchorY="middle"
      font="/fonts/inter.woff"
      letterSpacing={0.05}
    >
      {text}
    </Text>
  );
}
