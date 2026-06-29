import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, ArrowRight, Layers, FileText, Settings, ShieldAlert, Cpu, Award, HardDrive } from 'lucide-react';

interface AGSSystemArchitectureSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const FLOW_NODES = [
  { id: 1, label: "Seed Dataset", color: "#A855F7", icon: FileText, desc: "22,264 vetted base seed templates" },
  { id: 2, label: "Template Manager", color: "#7C3AED", icon: Settings, desc: "15+ structural templates per category" },
  { id: 3, label: "Payload Insertion", color: "#06B6D4", icon: Cpu, desc: "Injects seed variables into templates" },
  { id: 4, label: "Duplicate Detector", color: "#EF4444", icon: ShieldAlert, desc: "MD5 hash lookup & text normalization" },
  { id: 5, label: "Target Model", color: "#F59E0B", icon: Layers, desc: "Evaluates conversational safety thresholds" },
  { id: 6, label: "Difficulty Scoring", color: "#10B981", icon: Award, desc: "Empirical success calibration (0-1)" },
  { id: 7, label: "Final Dataset", color: "#A855F7", icon: HardDrive, desc: "218,862 fully evaluated threat records" }
];

const MODULE_CARDS = [
  {
    title: "Fast Template Manager",
    accent: "#7C3AED",
    items: ["15+ templates per attack category", "Pseudo-random slot routing", "Preserves structural diversity"]
  },
  {
    title: "Difficulty Manager",
    accent: "#10B981",
    items: ["Extreme (35%) / High (35%) stratified", "Medium (20%) / Low (10%) target", "Empirical validation reassignment"]
  },
  {
    title: "Duplicate Detector",
    accent: "#EF4444",
    items: ["MD5 fingerprinting lookup hash", "Text normalization preprocessing", "Zero-collision memory cache"]
  },
  {
    title: "Target Evaluation Model",
    accent: "#F59E0B",
    items: ["Calibrated target response rating", "Returns risk-indexed scores [0-1]", "Swappable live endpoint hooks"]
  },
  {
    title: "Ultra-Fast Orchestrator",
    accent: "#06B6D4",
    items: ["Active batch size = 500", "Max 30 retry slots per execution", "11.5K unique generated outputs/sec"]
  }
];

export function AGSSystemArchitectureSlide({ onNext, onPrev }: AGSSystemArchitectureSlideProps) {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  // Auto cycling active nodes for a futuristic living flow feeling
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(prev => (prev === null || prev >= 7 ? 1 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[70] flex flex-col justify-between p-4 md:p-8 lg:p-10 text-white pointer-events-auto bg-cyber-bg overflow-y-auto select-none"
    >
      {/* Background Ambience & Grid */}
      <div className="absolute inset-0 pointer-events-none z-[-1]">
        <div className="absolute inset-0 bg-cyber-bg/95 backdrop-blur-xl" />
        <div className="absolute inset-6 border border-cyber-orange/5">
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyber-orange/20" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyber-orange/20" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-cyber-orange/20" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyber-orange/20" />
        </div>
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.05)_50%,transparent_55%)] bg-[size:200px_200px] animate-[pulse_10s_infinite_alternate]" />
      </div>

      {/* Header Bar */}
      <div className="flex justify-between items-center border-b border-cyber-orange/15 pb-2.5 mb-2 shrink-0 relative z-30">
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50">
          SLIDE 11 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 2 // AGS SYSTEM ARCHITECTURE
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight glow-orange mb-0.5 italic uppercase">
          AGS System Architecture
        </h2>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
          Five tightly integrated modules forming the end-to-end AGS pipeline
        </p>
      </div>

      {/* Flow Pipeline Section (Top Half) */}
      <div className="border border-white/5 bg-[#0d121f]/40 p-3 rounded-xl relative z-20 shrink-0">
        {/* Animated fluid pulse along the connection line */}
        <div className="absolute top-1/2 left-[5%] right-[5%] h-[1px] bg-white/10 -translate-y-6 pointer-events-none z-0 overflow-hidden">
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyber-orange/50 to-transparent"
          />
        </div>

        <div className="flex justify-between items-center relative z-10 gap-1 md:gap-2">
          {FLOW_NODES.map((node, idx) => {
            const IconComp = node.icon;
            const isActive = activeNode === node.id;
            return (
              <div 
                key={node.id} 
                className="flex-1 flex flex-col items-center group relative cursor-pointer"
                onClick={() => setActiveNode(node.id)}
              >
                {/* Node Dot / Circle */}
                <motion.div 
                  animate={{ 
                    scale: isActive ? 1.1 : 1,
                    borderColor: isActive ? node.color : 'rgba(255,255,255,0.1)',
                    boxShadow: isActive ? `0 0 10px ${node.color}50` : 'none'
                  }}
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 bg-[#161b22] flex items-center justify-center transition-all duration-300 relative"
                >
                  <IconComp size={14} className="transition-colors duration-300" style={{ color: isActive ? node.color : 'rgba(255,255,255,0.4)' }} />
                  
                  {/* Small outer glow */}
                  {isActive && (
                    <span 
                      className="absolute inset-0 rounded-full border border-current animate-ping opacity-20 pointer-events-none" 
                      style={{ color: node.color }}
                    />
                  )}
                </motion.div>

                {/* Node Label */}
                <span 
                  className="mt-1 md:mt-2 font-display text-[8px] md:text-[9px] font-black uppercase text-center leading-tight tracking-wider transition-colors duration-300 max-w-[75px]"
                  style={{ color: isActive ? node.color : 'rgba(255,255,255,0.6)' }}
                >
                  {node.label}
                </span>

                {/* Active Tooltip Popover */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute bottom-12 w-28 p-1.5 border bg-[#161b22] rounded shadow-xl text-center pointer-events-none z-50"
                      style={{ borderColor: `${node.color}40` }}
                    >
                      <p className="font-sans text-[8px] leading-snug font-light text-white/90">
                        {node.desc}
                      </p>
                      {/* Arrow Down */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-full w-1.5 h-1.5 border-r border-b bg-[#161b22] rotate-45" style={{ borderColor: `${node.color}40` }} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Arrow Connector between nodes */}
                {idx < FLOW_NODES.length - 1 && (
                  <div className="absolute left-[calc(50%+14px)] right-[calc(-50%+14px)] top-[12px] flex justify-center items-center pointer-events-none">
                    <ArrowRight size={8} className="text-white/15 group-hover:text-cyber-orange transition-colors duration-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Module Cards Section (Bottom Half) */}
      <div className="flex-1 min-h-0 grid grid-cols-2 md:grid-cols-5 gap-3 py-3 relative z-20 items-stretch">
        {MODULE_CARDS.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + idx * 0.08 }}
            whileHover={{ y: -2, borderColor: `${card.accent}40` }}
            className="p-3 border border-white/5 bg-[#161b22]/40 hover:bg-[#161b22]/70 rounded-lg flex flex-col transition-all duration-300 justify-between relative overflow-hidden group"
          >
            <div>
              {/* Card accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: card.accent }} />

              <h3 
                className="font-display text-[10px] font-black uppercase tracking-wider mb-2 leading-tight"
                style={{ color: card.accent }}
              >
                {card.title}
              </h3>

              <ul className="space-y-1.5">
                {card.items.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="font-sans text-[9px] md:text-[10px] text-white/60 font-light flex items-start gap-1 leading-snug">
                    <span className="text-white/30 shrink-0 mt-[1px]">&bull;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <span className="font-mono text-[8px] text-white/20 uppercase tracking-widest font-bold self-end mt-2">
              MOD_0{idx + 1}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Footer Navigation Controls */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex justify-between items-center border-t border-cyber-orange/10 pt-4 mt-2 relative z-[80] shrink-0"
      >
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
                11 // 28
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
      </motion.div>
    </motion.div>
  );
}
