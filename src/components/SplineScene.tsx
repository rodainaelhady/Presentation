import { cn } from '../lib/utils';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { useEffect } from 'react';

interface SplineSceneProps {
  className?: string;
  isBreached?: boolean;
}

export function SplineScene({ className, isBreached }: SplineSceneProps) {
  const SplineViewer = 'spline-viewer' as any;
  
  // Mouse tracking values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the parallax effect
  const springConfig = { damping: 25, stiffness: 100 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);
  const translateX = useSpring(useMotionValue(0), springConfig);
  const translateY = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized mouse position (-0.5 to 0.5)
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;

      // Update motion values
      rotateX.set(-y * 10); // Subtle tilt
      rotateY.set(x * 10);
      translateX.set(x * 30); // Subtle slide
      translateY.set(y * 30);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [rotateX, rotateY, translateX, translateY]);

  return (
    <motion.div 
      style={{ 
        rotateX, 
        rotateY,
        x: translateX,
        y: translateY,
        transformStyle: 'preserve-3d'
      }}
      className={cn(
        "relative w-full h-full transition-all duration-1000", 
        className, 
        isBreached && "filter hue-rotate-[180deg] brightness-125 saturate-150"
      )}
    >
      <SplineViewer 
        url="https://prod.spline.design/rzQVhLxGrSyhQJlD/scene.splinecode"
        className="w-full h-full"
        loading-anim
      />
      
      {/* Overlay to catch clicks and prevent unintended interaction with the spline canvas */}
      <div className="absolute inset-0 z-10 pointer-events-none" />
      
      {/* Subtle bottom gradient to blend with the floor */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyber-bg to-transparent z-10" />
    </motion.div>
  );
}
