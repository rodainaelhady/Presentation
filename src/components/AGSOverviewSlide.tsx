import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, AlertTriangle, CheckCircle2, Shield, Zap, TrendingUp, Clock } from 'lucide-react';

interface AGSOverviewSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function AGSOverviewSlide({ onNext, onPrev }: AGSOverviewSlideProps) {
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
          SLIDE 10 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 2 // AGS OVERVIEW
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight glow-orange mb-1 italic uppercase">
          Attack Generation System (AGS)
        </h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-[1px] w-48 bg-cyber-orange origin-left shadow-[0_0_8px_#FF4B00]"
        />
      </div>

      {/* Main Interactive Grid Layout */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-center py-2 relative z-20">
        
        {/* Left Column: Problem & Solution Cards (5/12 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-3">
          
          {/* Card 1: The Problem (Red Accent) */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="p-4 border border-red-500/20 bg-[#0d121f]/60 hover:bg-[#161b22]/50 hover:border-red-500/40 rounded-lg relative overflow-hidden transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 text-red-500 mb-1.5">
              <AlertTriangle size={15} />
              <h3 className="font-display font-black text-xs tracking-wider uppercase">
                The Problem
              </h3>
            </div>
            <p className="font-sans text-[11px] md:text-xs text-white/70 font-light leading-relaxed">
              AI safety classifiers require massive, high-quality adversarial datasets to train and align effectively. However, manual or curated attack prompts are extremely scarce, expensive to harvest, and quickly rendered obsolete by model updates.
            </p>
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500/40" />
          </motion.div>

          {/* Card 2: The Solution (Green Accent) */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-4 border border-emerald-500/20 bg-[#0d121f]/60 hover:bg-[#161b22]/50 hover:border-emerald-500/40 rounded-lg relative overflow-hidden transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 text-emerald-500 mb-1.5">
              <CheckCircle2 size={15} />
              <h3 className="font-display font-black text-xs tracking-wider uppercase">
                The Solution: AGS
              </h3>
            </div>
            <p className="font-sans text-[11px] md:text-xs text-white/70 font-light leading-relaxed">
              An automated, high-throughput generative pipeline that transforms a small, high-quality seed dataset of adversarial concepts into a large-scale, fully categorized, and completely de-duplicated safety evaluation benchmark.
            </p>
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-emerald-500/40" />
          </motion.div>

        </div>

        {/* Right Column: 2x2 Stat Box Grid (7/12 cols) */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-3">
          {[
            { 
              val: "22,264", 
              label: "Seed Samples", 
              color: "#A855F7", 
              icon: Shield, 
              desc: "Manually vetted base seeds" 
            },
            { 
              val: "218,862", 
              label: "Generated Attacks", 
              color: "#06B6D4", 
              icon: Zap, 
              desc: "Synthesized adversarial prompts" 
            },
            { 
              val: "10×", 
              label: "Dataset Expansion", 
              color: "#00C896", 
              icon: TrendingUp, 
              desc: "Bulk magnification factor" 
            },
            { 
              val: "19 Sec", 
              label: "Processing Time", 
              color: "#F59E0B", 
              icon: Clock, 
              desc: "Full automated generation cycle" 
            }
          ].map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 + idx * 0.08 }}
                whileHover={{ y: -2, borderColor: `${stat.color}50` }}
                className="p-3.5 border border-white/5 bg-[#161b22]/50 rounded-lg flex flex-col justify-between relative overflow-hidden transition-all duration-300 group"
              >
                {/* Accent glow corner */}
                <div 
                  className="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity blur-xl pointer-events-none" 
                  style={{ backgroundColor: stat.color }}
                />

                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-[8px] text-white/30 uppercase tracking-widest font-bold">
                    METRIC_0{idx + 1}
                  </span>
                  <div className="p-1 rounded bg-white/5 text-white/60" style={{ color: stat.color }}>
                    <IconComponent size={12} />
                  </div>
                </div>

                <div>
                  <h4 
                    className="font-display text-xl md:text-2xl font-black tracking-tight mb-0.5 uppercase"
                    style={{ color: stat.color }}
                  >
                    {stat.val}
                  </h4>
                  <p className="font-sans text-[10px] font-bold text-white uppercase tracking-wider leading-none mb-1">
                    {stat.label}
                  </p>
                  <p className="font-sans text-[9px] md:text-[10px] text-white/40 font-light">
                    {stat.desc}
                  </p>
                </div>
                
                {/* Accent line */}
                <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px]" style={{ backgroundColor: stat.color }} />
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Bottom Notes Section */}
      <div className="mt-2 border-t border-white/5 pt-2 text-center space-y-0.5 z-20 relative shrink-0">
        <p className="font-sans text-[10.5px] md:text-[11px] text-white/50 italic">
          &quot;Achieving <span className="text-[#06B6D4] font-bold">~11,519 unique records/second</span> with zero duplicates via high-speed MD5 hash-based de-duplication.&quot;
        </p>
        <p className="font-mono text-[9px] md:text-[10px] text-cyber-orange/80 tracking-widest uppercase">
          Seed Dataset &rarr; Template Engine &rarr; 218K+ Unique Adversarial Attacks
        </p>
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
                10 // 28
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
