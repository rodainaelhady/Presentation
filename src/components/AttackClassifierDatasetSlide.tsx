import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, HelpCircle, FileSpreadsheet, Layers } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function AttackClassifierDatasetSlide({ onNext, onPrev }: SlideProps) {
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
          SLIDE 17 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 3 // DATASET & PROBLEM FORMULATION
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-0.5 italic uppercase">
          32,000 Labeled Prompts. <span className="text-cyber-orange glow-orange">Three Classes. No Overlap.</span>
        </h2>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
          Rigorous Dataset Balancing & Formulation
        </p>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1 items-stretch py-2 z-20">
        {/* Left Column - Stacked Cards */}
        <div className="flex flex-col gap-4">
          {/* Card A - Training Dataset */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="p-4 border border-cyber-orange/20 bg-[#161b22]/40 rounded-lg relative overflow-hidden group hover:border-cyber-orange/30 transition-all duration-300 flex-1 flex flex-col justify-between"
          >
            <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-cyber-orange" />
            <div className="space-y-2.5">
              <div className="flex justify-between items-center">
                <div className="font-mono text-[9px] tracking-[0.3em] font-bold text-cyber-orange uppercase">
                  TRAINING DATASET
                </div>
                <div className="font-mono text-[9px] text-cyber-teal uppercase tracking-widest">
                  ~32,000 labeled samples
                </div>
              </div>
              
              {/* Progress Bars */}
              <div className="space-y-2.5 pt-1.5">
                {/* Jailbreak */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-semibold">
                    <span className="text-white/80">Jailbreak + PI</span>
                    <span className="text-[#FF2D2D] font-mono">50%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "50%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-[#FF2D2D]"
                    />
                  </div>
                </div>

                {/* PII Leakage */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-semibold">
                    <span className="text-white/80">PII Leakage</span>
                    <span className="text-cyber-teal font-mono">25%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "25%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="h-full bg-cyber-teal"
                    />
                  </div>
                </div>

                {/* Self-Harm */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-semibold">
                    <span className="text-white/80">Self-Harm</span>
                    <span className="text-[#00C896] font-mono">25%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "25%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-[#00C896]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card B - Data Prep */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-4 border border-cyber-teal/20 bg-[#161b22]/40 rounded-lg relative overflow-hidden group hover:border-cyber-teal/30 transition-all duration-300"
          >
            <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-cyber-teal" />
            <div className="space-y-2">
              <div className="font-mono text-[9px] tracking-[0.3em] font-bold text-cyber-teal uppercase">
                DATA PREPARATION
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 font-sans text-[11px] text-white/60 leading-relaxed font-light pt-1">
                <li className="flex items-start gap-1.5">
                  <span className="text-cyber-teal">▸</span>
                  Remove duplicates, noisy characters & URLs
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyber-teal">▸</span>
                  Text normalization
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyber-teal">▸</span>
                  Length filtering: 5–2,000 characters
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyber-teal">▸</span>
                  Evaluation: 3-Fold Stratified Cross-Validation
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Problem Formulation */}
        <motion.div 
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="p-4 md:p-5 border border-[#00C896]/20 bg-[#161b22]/40 rounded-lg relative overflow-hidden group hover:border-[#00C896]/30 transition-all duration-300 flex flex-col justify-between"
        >
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-[#00C896]" />
          <div className="space-y-3 flex-1 flex flex-col">
            <div className="flex justify-between items-center">
              <div className="font-mono text-[9px] tracking-[0.3em] font-bold text-[#00C896] uppercase">
                PROBLEM FORMULATION
              </div>
              <div className="font-mono text-[9px] text-[#00C896] tracking-widest uppercase">
                3-Class Single-Label
              </div>
            </div>

            {/* Accent Insight Box */}
            <div className="p-3 bg-cyber-orange/5 border border-cyber-orange/20 rounded-md flex gap-2.5 relative">
              <div className="text-cyber-orange pt-0.5 shrink-0">
                <HelpCircle size={14} className="animate-pulse" />
              </div>
              <p className="font-sans text-[10.5px] text-white/70 italic leading-relaxed">
                Jailbreak and Prompt Injection are merged into one class — they share highly similar linguistic patterns and co-occur consistently in the dataset.
              </p>
              <div className="absolute top-1 right-1.5 flex h-1 w-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1 w-1 bg-cyber-orange"></span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-2 pt-2 flex-1 font-sans text-[11px] text-white/60 leading-relaxed font-light">
              <li className="flex items-start gap-1.5">
                <span className="text-[#00C896]">▸</span>
                Each prompt belongs to exactly one class
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#00C896]">▸</span>
                No overlapping annotations between classes
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#00C896]">▸</span>
                Reduces label ambiguity during model training
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#00C896]">▸</span>
                Simplifies downstream gateway response and routing decisions
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Footer Navigation Controls */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
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
                17 // 28
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
