import { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { 
  ChevronRight, 
  ChevronLeft, 
  Shield, 
  Terminal,
  Layers,
  Sparkles,
  Lock,
  Cpu
} from 'lucide-react';

interface ProblemStatementSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

function Cyber3DCore() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Tilt angle calculation based on position
    const factorX = -y / (rect.height / 2) * 25;
    const factorY = x / (rect.width / 2) * 25;
    setRotate({ x: factorX, y: factorY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className="w-full aspect-square max-w-[220px] mx-auto flex items-center justify-center relative cursor-grab active:cursor-grabbing my-3"
      style={{ perspective: '800px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center relative"
        animate={{
          rotateX: isHovered ? rotate.x : [0, 5, -5, 0],
          rotateY: isHovered ? rotate.y : [0, 360],
        }}
        transition={isHovered ? { type: 'spring', stiffness: 120, damping: 20 } : {
          rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Central Core: Floating Cube */}
        <div 
          className="w-16 h-16 relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* 6 Cube Faces with glowing neon borders */}
          <div className="absolute inset-0 bg-cyber-orange/15 border-2 border-cyber-orange/45 flex items-center justify-center shadow-[0_0_20px_rgba(255,75,0,0.3)] rounded-lg backdrop-blur-md" style={{ transform: 'translateZ(32px)' }}>
            <Shield size={24} className="text-cyber-orange animate-pulse" />
          </div>
          <div className="absolute inset-0 bg-black/80 border border-cyber-orange/20 flex items-center justify-center rounded-lg" style={{ transform: 'rotateY(180deg) translateZ(32px)' }}>
            <Lock size={20} className="text-cyber-orange/70" />
          </div>
          <div className="absolute inset-0 bg-[#0D121F]/90 border border-white/10 flex items-center justify-center rounded-lg" style={{ transform: 'rotateY(90deg) translateZ(32px)' }}>
            <Cpu size={20} className="text-white/60" />
          </div>
          <div className="absolute inset-0 bg-[#0D121F]/90 border border-white/10 flex items-center justify-center rounded-lg" style={{ transform: 'rotateY(-90deg) translateZ(32px)' }}>
            <Terminal size={20} className="text-white/60" />
          </div>
          <div className="absolute inset-0 bg-[#0D121F]/95 border border-white/5 rounded-lg" style={{ transform: 'rotateX(90deg) translateZ(32px)' }} />
          <div className="absolute inset-0 bg-[#0D121F]/95 border border-white/5 rounded-lg" style={{ transform: 'rotateX(-90deg) translateZ(32px)' }} />
        </div>

        {/* Orbit Rings spinning on different axes */}
        {/* Ring 1 - Outer Cyber-orange ring */}
        <div 
          className="absolute w-36 h-36 rounded-full border border-dashed border-cyber-orange/40 animate-spin" 
          style={{ 
            transform: 'rotateX(75deg)',
            transformStyle: 'preserve-3d',
            animationDuration: '8s'
          }}
        />
        
        {/* Ring 2 - Middle Cyan ring */}
        <div 
          className="absolute w-44 h-44 rounded-full border border-double border-cyan-400/20 animate-spin" 
          style={{ 
            transform: 'rotateY(60deg) rotateX(20deg)',
            transformStyle: 'preserve-3d',
            animationDuration: '12s',
            animationDirection: 'reverse'
          }}
        />

        {/* Ring 3 - Outer Thin Tech Ring with data markers */}
        <div 
          className="absolute w-48 h-48 rounded-full border border-white/10 flex items-center justify-center" 
          style={{ 
            transform: 'rotateX(45deg) rotateY(-30deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="absolute top-0 w-2.5 h-2.5 rounded-full bg-cyber-orange animate-ping" />
          <div className="absolute top-0 w-2 h-2 rounded-full bg-cyber-orange shadow-[0_0_8px_#FF4B00]" />
          <div className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        </div>

        {/* Glowing Ambient Sphere behind cube */}
        <div 
          className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-cyber-orange/15 to-cyan-500/10 blur-2xl pointer-events-none"
          style={{ transform: 'translateZ(0px)' }}
        />
      </motion.div>
    </div>
  );
}

export function ProblemStatementSlide({ onNext, onPrev }: ProblemStatementSlideProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[70] flex flex-col justify-between p-6 md:p-10 lg:p-12 text-white pointer-events-auto bg-cyber-bg overflow-y-auto lg:overflow-hidden select-none"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-[-1]">
        <div className="absolute inset-0 bg-cyber-bg/95 backdrop-blur-xl" />
        <div className="absolute inset-6 border border-cyber-orange/5 pointer-events-none">
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-cyber-orange/20" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-cyber-orange/20" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-cyber-orange/20" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-cyber-orange/20" />
        </div>
        {/* Subtle grid line background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Header Bar */}
      <div className="flex justify-between items-center border-b border-cyber-orange/10 pb-3 mb-4 shrink-0">
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50">
          SLIDE 03 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 1 // INTRODUCTION
        </div>
      </div>

      {/* Title Area */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-4 shrink-0"
      >
        <h2 className="text-2xl md:text-3xl font-display font-black tracking-tight glow-orange mb-1 italic uppercase">
          Introduction
        </h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-[1px] w-48 bg-cyber-orange origin-left shadow-[0_0_8px_#FF4B00] mt-1.5"
        />
      </motion.div>

      {/* Main Spacious Layout */}
      <div className="flex-1 min-h-0 flex items-center justify-center py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-6xl items-center">
          
          {/* Left Side: The Precise Requested Content */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 rounded border border-cyber-orange/30 bg-cyber-orange/10 font-mono text-[9px] text-cyber-orange font-bold uppercase tracking-wider">
                  Core Framework
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-orange/60 animate-pulse" />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight uppercase leading-tight">
                QuantAI-Guard
              </h3>
            </div>

            <div className="space-y-5 font-sans font-light leading-relaxed text-white/90">
              <p className="text-[15.5px] md:text-[17.5px] text-white/80 border-l-2 border-red-500/30 pl-4 py-1">
                As Large Language Models (LLMs) become integral to healthcare, education, finance, and enterprise systems, securing their interactions has become a critical cybersecurity challenge.
              </p>
              
              <p className="text-[15.5px] md:text-[17.5px] text-white/90 bg-white/[0.02] border border-white/5 py-3 px-5 rounded-xl relative overflow-hidden shadow-[inset_0_0_20px_rgba(255,255,255,0.01)]">
                <span className="text-cyber-orange font-bold font-display tracking-wide uppercase mr-1.5">QuantAI-Guard</span> 
                is an AI-driven security framework that protects LLM-based applications by detecting malicious prompts, preventing sensitive information leakage, and enabling secure real-time conversations without compromising the user experience.
                <span className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-cyber-orange/10 to-transparent pointer-events-none" />
              </p>
            </div>
          </motion.div>

          {/* Right Side: Futuristic Cyber Visualization */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-5 h-full flex items-center justify-center min-h-[220px]"
          >
            <div className="w-full border border-cyber-orange/15 bg-gradient-to-br from-[#0D121F]/60 to-[#030712]/80 backdrop-blur-md rounded-2xl py-3 px-5 relative overflow-hidden group hover:border-cyber-orange/30 transition-all duration-500 shadow-[inset_0_0_30px_rgba(255,75,0,0.02)]">
              {/* Corner Indicators */}
              <div className="absolute top-2.5 left-3 font-mono text-[9px] text-white/20">SYS.GUARD_ENG</div>
              <div className="absolute top-2.5 right-3 font-mono text-[9px] text-cyber-orange flex items-center gap-1">
                <Sparkles size={8} className="animate-spin" style={{ animationDuration: '4s' }} /> ACTIVE_SHIELD
              </div>

              {/* Glowing decorative ring */}
              <Cyber3DCore />

              {/* Console/HUD Status logs */}
              <div className="space-y-1.5 font-mono text-[10.5px] text-white/50 border-t border-white/5 pt-2.5">
                <div className="flex justify-between items-center text-white/40">
                  <span>SECURITY AGENT</span>
                  <span className="text-emerald-400 font-bold">ONLINE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>PROMPT INJECTION FILTER</span>
                  <span className="text-cyber-orange">99.4% ACC</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>PII LEAK PROTECTION</span>
                  <span className="text-cyber-orange">ACTIVE</span>
                </div>
                <div className="flex justify-between items-center text-white/30">
                  <span>LATENCY PENALTY</span>
                  <span>&lt; 12ms</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Slide Navigation Footer */}
      <div className="flex justify-between items-center border-t border-cyber-orange/10 pt-4 mt-4 shrink-0 relative z-[80]">
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 75, 0, 0.05)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrev}
          className="group flex items-center gap-3 px-4 py-2 opacity-30 hover:opacity-100 transition-all cursor-pointer"
        >
          <ChevronLeft className="text-white group-hover:-translate-x-1 transition-transform" size={16} />
          <span className="font-display text-[10px] tracking-[0.4em] uppercase">PREV</span>
        </motion.button>

        <div className="flex items-center gap-4">
          <div className="w-1 h-1 rounded-full bg-cyber-orange/20" />
          <div className="px-3 py-1 border border-cyber-orange/20 text-cyber-orange font-mono text-[10px] tracking-widest">
            03 // 28
          </div>
          <div className="w-1 h-1 rounded-full bg-cyber-orange/20" />
        </div>

        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 75, 0, 0.1)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="group flex items-center gap-3 px-6 py-3 border border-cyber-orange/50 bg-cyber-orange/10 hover:bg-cyber-orange/20 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,75,0,0.1)]"
        >
          <span className="font-display text-[10px] tracking-[0.4em] text-cyber-orange group-hover:glow-orange transition-all uppercase">
            NEXT
          </span>
          <ChevronRight className="text-cyber-orange group-hover:translate-x-1 transition-transform" size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
}
