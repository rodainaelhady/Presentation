import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function AdaptiveGrid() {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 2) % 2;
    }
  });

  return (
    <group ref={gridRef} position={[0, -2, 0]}>
      <gridHelper 
        args={[100, 50, '#FF4B00', '#1a1a1a']} 
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

export function DataStreams() {
    const count = 100;
    const lines = useMemo(() => {
        return Array.from({ length: count }).map(() => ({
            x: (Math.random() - 0.5) * 20,
            y: (Math.random() - 0.5) * 20,
            z: (Math.random() - 0.5) * 20,
            speed: 0.05 + Math.random() * 0.1,
            length: 1 + Math.random() * 3
        }));
    }, []);

    const linesRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (linesRef.current) {
            linesRef.current.children.forEach((child, i) => {
                child.position.y -= lines[i].speed;
                if (child.position.y < -10) child.position.y = 10;
            });
        }
    });

    return (
        <group ref={linesRef}>
            {lines.map((line, i) => (
                <mesh key={i} position={[line.x, line.y, line.z]}>
                    <boxGeometry args={[0.01, line.length, 0.01]} />
                    <meshBasicMaterial color="#FF4B00" transparent opacity={0.2} />
                </mesh>
            ))}
        </group>
    );
}
