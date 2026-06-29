import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, RefreshCw, Search, ShieldAlert } from 'lucide-react';

interface JudgeWorkflowsSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const CARDS = [
  {
    icon: "🔄",
    title: "Unified Adapter",
    body: "The judge_adapter.py normalizes structures into legacy dictionary models, translating verdicts and computing quick threat risk weights dynamically.",
    tag: "judge_adapter.py",
    color: "#00B4D8",
    bgClass: "hover:border-[#00B4D8]/50"
  },
  {
    icon: "🔍",
    title: "8-Dimension Logic",
    body: "Gemma checks for Injection, Jailbreaks, PII leaks, Memory Expose, Role Override, safety bypasses, harmful elements, and structural context manipulation.",
    tag: "8 Security Dimensions",
    color: "#00C896",
    bgClass: "hover:border-[#00C896]/50"
  },
  {
    icon: "🛡",
    title: "Hard Regex Safety",
    body: "Secondary regex validation scanning for active leaks of user profiles, email patterns, internal IDs, and overrides safe labels to unsafe if found.",
    tag: "Override Layer",
    color: "#FF2D2D",
    bgClass: "hover:border-[#FF2D2D]/50"
  }
];

export function JudgeWorkflowsSlide({ onNext, onPrev }: JudgeWorkflowsSlideProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:45px_45px]" />
      </div>

      {/* Header Bar */}
      <div className="flex justify-between items-center border-b border-cyber-orange/15 pb-2.5 mb-2 shrink-0 relative z-30">
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50">
          SLIDE 22 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 4 // WORKFLOWS & CRITERIA
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-1 uppercase">
          <span className="text-white">3 Layers of Validation. </span>
          <span className="text-cyber-orange glow-orange-text">Zero Tolerance for Leaks.</span>
        </h2>
        <p className="font-sans text-[11px] text-[#8892A4] mt-1 max-w-4xl">
          The judge processes telemetry in stages using parallel batch operations and multi-dimensional security evaluation criteria.
        </p>
      </div>

      {/* 3 Equal Column Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20 my-auto items-stretch">
        {CARDS.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 + idx * 0.1 }}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`flex flex-col justify-between border bg-[#161B22]/50 rounded-xl p-5 md:p-6 transition-all duration-300 min-h-[290px] ${card.bgClass}`}
            style={{ 
              borderColor: hoveredIdx === idx ? card.color : 'rgba(33, 38, 45, 0.5)',
              boxShadow: hoveredIdx === idx ? `0 0 25px ${card.color}15` : 'none'
            }}
          >
            <div>
              {/* Icon Box */}
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center border mb-5 transition-all duration-300"
                style={{ 
                  backgroundColor: 'rgba(33, 38, 45, 0.8)',
                  borderColor: card.color,
                  boxShadow: hoveredIdx === idx ? `0 0 15px ${card.color}20` : 'none'
                }}
              >
                <span className="text-2xl select-none filter drop-shadow">{card.icon}</span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-base md:text-lg text-white mb-2 tracking-wide uppercase">
                {card.title}
              </h3>

              {/* Body */}
              <p className="font-sans text-[11.5px] text-[#8892A4] leading-relaxed mb-6">
                {card.body}
              </p>
            </div>

            {/* Tag bottom pill */}
            <div 
              className="w-full py-1.5 rounded-full border bg-[#0D1117] text-center transition-all duration-300"
              style={{ borderColor: card.color }}
            >
              <span className="font-mono text-[9px] font-bold uppercase tracking-wider" style={{ color: card.color }}>
                {card.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Navigation Controls */}
      <div className="flex justify-between items-center border-t border-cyber-orange/10 pt-4 mt-2 relative z-[80] shrink-0">
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
                22 // 28
            </div>
            <div className="w-1 h-1 rounded-full bg-cyber-orange/20" />
        </div>

        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 75, 0, 0.1)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="group flex items-center gap-3 px-6 py-3 border border-cyber-orange/50 bg-cyber-orange/10 hover:bg-cyber-orange/20 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,75,0,0.1)]"
        >
          <span className="font-display text-[10px] tracking-[0.4em] uppercase">NEXT</span>
          <ChevronRight className="text-white group-hover:translate-x-1 transition-transform" size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
}
