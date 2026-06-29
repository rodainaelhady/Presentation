import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette, Glitch } from '@react-three/postprocessing';
import { AdaptiveGrid, DataStreams } from './ThreeComponents';
import { Suspense } from 'react';
import { GlitchMode } from 'postprocessing';
import * as THREE from 'three';

export function Experience({ isBreached }: { isBreached: boolean }) {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <color attach="background" args={['#0D1117']} />
        
        <fog attach="fog" args={['#0D1117', 5, 15]} />

        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <AdaptiveGrid />
          <DataStreams />
          
          <Environment preset="city" />

          {/* Cinematic Postprocessing */}
          <EffectComposer>
            <Bloom 
              intensity={isBreached ? 2.5 : 1.5} 
              luminanceThreshold={0.1} 
              luminanceSmoothing={0.9} 
              mipmapBlur 
            />
            <Noise opacity={0.05} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
            {isBreached && (
                <Glitch 
                    delay={new THREE.Vector2(0, 0)} 
                    duration={new THREE.Vector2(0.1, 0.3)} 
                    strength={new THREE.Vector2(0.1, 0.3)} 
                    mode={GlitchMode.CONSTANT_WILD}
                    active
                />
            )}
          </EffectComposer>
        </Suspense>

        <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            maxPolarAngle={Math.PI / 2} 
            minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
