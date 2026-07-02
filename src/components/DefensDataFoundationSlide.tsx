import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, Database, Trash2, ArrowRight } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function DefensDataFoundationSlide({ onNext, onPrev }: SlideProps) {
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
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Header Bar */}
      <div className="flex justify-between items-center border-b border-cyber-orange/15 pb-2.5 mb-2 shrink-0 relative z-30">
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50">
          SLIDE 31 // 38
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          31 // DEFENS — DATA FOUNDATION
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-0.5 italic uppercase">
          From 46K Prototype. <span className="text-cyber-orange glow-orange">To 73.6K Production Dataset.</span>
        </h2>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
          Scaling dataset volume to overcome overfitting and indirect exploitation vectors
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 py-2 z-20 items-stretch">
        
        {/* Left Column — Discarded Prototype (Lg span 5) */}
        <motion.div
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-5 p-5 border border-red-500/30 bg-red-950/5 rounded-lg flex flex-col justify-between relative overflow-hidden group hover:border-red-500/50 transition-all duration-300"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-500" />
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded border border-red-500/30 bg-red-500/10 text-red-400">
                <Trash2 size={14} />
              </div>
              <h3 className="font-mono text-[10px] tracking-[0.3em] font-bold text-red-400 uppercase">
                DEFENS PROTOTYPE (DISCARDED)
              </h3>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-display font-black text-red-500">46,013</span>
                <span className="font-mono text-[10px] text-white/40 uppercase">samples</span>
              </div>
              <p className="font-sans text-xs text-white/50 uppercase tracking-widest mb-3">
                real-world English prompts
              </p>
              
              <div className="mb-3 font-sans text-xs font-bold text-white leading-relaxed">
                96.76% accuracy initially, but:
              </div>
              <ul className="space-y-2.5 font-sans text-xs text-white/70 leading-relaxed font-light">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0 mt-0.5">▸</span>
                  Progressive overfitting — F1 dropped 96.76% → 84.41% by Round 5
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0 mt-0.5">▸</span>
                  Weak on indirect / emotionally-framed attacks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0 mt-0.5">▸</span>
                  No cross-validation or ensemble learning
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 px-3 py-1.5 border border-red-500/30 bg-red-950/20 text-red-400 font-mono text-[9px] font-black uppercase tracking-wider rounded text-center">
            DISCARDED → informed the redesign
          </div>
        </motion.div>

        {/* Right Column — Production Dataset (Lg span 7) */}
        <motion.div
          initial={{ x: 25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7 p-5 border border-[#00C896]/30 bg-[#00C896]/5 rounded-lg flex flex-col justify-between relative overflow-hidden group hover:border-[#00C896]/50 transition-all duration-300"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#00C896]" />
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded border border-[#00C896]/30 bg-[#00C896]/10 text-[#00C896]">
                <Database size={14} />
              </div>
              <h3 className="font-mono text-[10px] tracking-[0.3em] font-bold text-[#00C896] uppercase">
                FINAL PRODUCTION DATASET
              </h3>
            </div>

            {/* Split statistics box */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border border-cyber-teal/20 bg-black/25 rounded relative overflow-hidden">
                <div className="font-display text-2xl md:text-3xl font-black text-cyber-teal">72,648</div>
                <div className="font-mono text-[8px] text-white/50 uppercase tracking-widest mt-1">Phase 1: merged_corrected.xlsx</div>
              </div>
              
              <div className="p-3 border border-cyber-teal/20 bg-black/25 rounded relative overflow-hidden">
                <div className="font-display text-2xl md:text-3xl font-black text-cyber-teal">73,637</div>
                <div className="font-mono text-[8px] text-white/50 uppercase tracking-widest mt-1">Phase 2: + fine-tuning data</div>
              </div>
            </div>

            {/* Why Expanded */}
            <div className="border-t border-white/5 pt-3">
              <h4 className="font-mono text-[10px] text-amber-400 font-bold tracking-wider uppercase mb-1.5">
                WHY EXPANDED?
              </h4>
              <p className="font-sans text-xs font-bold text-white/90 leading-relaxed mb-2">
                Error analysis on Phase 1 revealed two critical gaps:
              </p>
              <ul className="space-y-1.5 font-sans text-xs text-white/70 leading-relaxed font-light">
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-400 shrink-0">▸</span>
                  Weak detection of indirect attacks (contextual masking, emotional framing)
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-400 shrink-0">▸</span>
                  False positives on genuine, urgent mental-health crisis statements
                </li>
              </ul>
            </div>
          </div>

          {/* Preprocessing Box */}
          <div className="mt-4 p-3 border border-white/10 bg-black/40 rounded flex flex-col gap-1">
            <span className="font-mono text-[9px] text-white/70 font-semibold uppercase tracking-wider">
              Minimal preprocessing by design:
            </span>
            <span className="font-sans text-[11px] italic text-white/50 leading-relaxed">
              Only Unicode + whitespace normalization. Typos, capitalizations, and duplicate patterns were preserved intentionally: attackers' linguistic irregularities carry vital signal.
            </span>
          </div>
        </motion.div>

      </div>

      {/* Footer Navigation Controls */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
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
            31 // 38
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
