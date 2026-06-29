import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, Percent, Calculator, TrendingUp } from 'lucide-react';

interface RiskScoringSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const BLOCKS = [
  {
    title: "1. THREAT WEIGHT (15%)",
    body: "Evaluates attack execution metrics, prompt payload density, vector counts, and manipulation complexity.",
    color: "#00B4D8"
  },
  {
    title: "2. EXPOSURE WEIGHT (35%)",
    body: "Measures defensive failures, behavioral anomalies, and overall exposure elements inside response layers.",
    color: "#F59E0B"
  },
  {
    title: "3. IMPACT WEIGHT (50%)",
    body: "Reflects the actual real-world compromise, leaks, and system policy failures. Weighted highest as consequences drive risk.",
    color: "#FF2D2D"
  }
];

export function RiskScoringSlide({ onNext, onPrev }: RiskScoringSlideProps) {
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);

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
          SLIDE 23 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 4 // RISK ENGINE V4 SCORING
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-1 uppercase">
          <span className="text-white">One Formula. </span>
          <span className="text-cyber-orange glow-orange-text">Precision Risk Scoring.</span>
        </h2>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-20 my-auto items-center">
        
        {/* Left Column - Weights and Descriptions */}
        <div className="lg:col-span-5 space-y-4">
          <p className="font-sans text-[12px] text-[#8892A4] leading-relaxed mb-2">
            Converting complex security telemetry logs into standard analytical risk indices.
          </p>

          <div className="space-y-4">
            {BLOCKS.map((block, idx) => (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredBlock(idx)}
                onMouseLeave={() => setHoveredBlock(null)}
                className="flex items-start gap-4 transition-all duration-300"
                style={{ opacity: hoveredBlock !== null && hoveredBlock !== idx ? 0.4 : 1 }}
              >
                {/* Left colored bar */}
                <div 
                  className="w-1 h-12 rounded-full shrink-0 self-stretch mt-1 transition-all duration-300"
                  style={{ 
                    backgroundColor: block.color,
                    boxShadow: `0 0 10px ${block.color}80`
                  }}
                />
                
                <div>
                  <h4 
                    className="font-mono text-[10.5px] font-bold tracking-wider mb-1 uppercase"
                    style={{ color: block.color }}
                  >
                    {block.title}
                  </h4>
                  <p className="font-sans text-[11px] text-[#8892A4] leading-relaxed">
                    {block.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Mathematical Formula & Stats */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Formula Card */}
          <div className="border border-cyber-orange/30 bg-[#161B22]/60 rounded-xl p-5 relative overflow-hidden transition-all hover:border-cyber-orange/50">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-orange/5 rounded-full blur-2xl pointer-events-none" />
            <div className="font-mono text-[9px] tracking-[0.3em] text-cyber-orange font-bold uppercase mb-3">
              SCORING MATHEMATICAL FORMULA
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="w-1 bg-[#00B4D8] self-stretch rounded-full shrink-0" />
              <div className="font-mono text-sm md:text-base font-black text-white tracking-wide py-1 select-all">
                RiskScore = Threat &times; <span className="text-[#00B4D8]">0.15</span> + Exposure &times; <span className="text-[#F59E0B]">0.35</span> + Impact &times; <span className="text-[#FF2D2D]">0.50</span>
              </div>
            </div>
          </div>

          {/* Strategic Focus Card */}
          <div className="border border-[#00C896]/30 border-dashed bg-[#161B22]/60 rounded-xl p-5 flex gap-4 items-start transition-all hover:border-[#00C896]/50">
            <div className="w-10 h-10 rounded bg-[#00C896]/10 flex items-center justify-center border border-[#00C896]/20 shrink-0">
              <span className="text-xl">📊</span>
            </div>
            <div>
              <h4 className="font-display font-bold text-[12px] text-[#00C896] uppercase tracking-wider mb-1">
                Strategic Focus
              </h4>
              <p className="font-sans text-[11px] text-[#8892A4] leading-relaxed">
                The engine balances math with reality. If an attack fails to breach the model, threat values are automatically restricted, preventing false alarms.
              </p>
            </div>
          </div>

          {/* 3 mini stat boxes inline */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#0D1117] border border-[#00B4D8]/40 rounded-lg p-3 text-center flex flex-col justify-center transition-all hover:border-[#00B4D8]">
              <div className="font-display font-black text-xl md:text-2xl text-[#00B4D8] tracking-tight">15%</div>
              <div className="font-mono text-[8px] text-[#8892A4] uppercase tracking-wider mt-0.5">Threat</div>
            </div>

            <div className="bg-[#0D1117] border border-[#F59E0B]/40 rounded-lg p-3 text-center flex flex-col justify-center transition-all hover:border-[#F59E0B]">
              <div className="font-display font-black text-xl md:text-2xl text-[#F59E0B] tracking-tight">35%</div>
              <div className="font-mono text-[8px] text-[#8892A4] uppercase tracking-wider mt-0.5">Exposure</div>
            </div>

            <div className="bg-[#0D1117] border border-[#FF2D2D]/40 rounded-lg p-3 text-center flex flex-col justify-center transition-all hover:border-[#FF2D2D]">
              <div className="font-display font-black text-xl md:text-2xl text-[#FF2D2D] tracking-tight">50%</div>
              <div className="font-mono text-[8px] text-[#8892A4] uppercase tracking-wider mt-0.5">Impact</div>
            </div>
          </div>
        </div>

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
                23 // 28
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
