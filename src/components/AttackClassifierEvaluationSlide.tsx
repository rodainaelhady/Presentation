import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, Award, CheckCircle2, Star } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const CHART_ITEMS = [
  { name: "Self-Harm", value: 0.97, pctStr: "97.0%", color: "bg-[#00C896]", text: "text-[#00C896]" },
  { name: "PII Leakage", value: 0.94, pctStr: "94.0%", color: "bg-cyber-teal", text: "text-cyber-teal" },
  { name: "Jailbreak + PI", value: 0.86, pctStr: "86.0%", color: "bg-[#FF2D2D]", text: "text-[#FF2D2D]" }
];

export function AttackClassifierEvaluationSlide({ onNext, onPrev }: SlideProps) {
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
          SLIDE 19 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 3 // EVALUATION RESULTS
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-0.5 italic uppercase">
          97.65% Macro F1. <span className="text-cyber-orange glow-orange">Balanced Across All Attack Classes.</span>
        </h2>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
          Model Evaluation Performance (Test Set)
        </p>
      </div>

      {/* Main Grid: Stat boxes & custom horizontal bar chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1 items-stretch py-2 z-20">
        
        {/* Left Column - High-level metrics */}
        <div className="grid grid-cols-2 gap-4 h-full">
          {/* F1 Card */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="p-4 border border-[#00C896]/30 bg-[#161b22]/40 rounded-lg relative overflow-hidden group hover:border-[#00C896]/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#00C896]" />
            <div className="text-center py-4">
              <span className="text-3xl md:text-5xl font-display font-black text-[#00C896] block tracking-tight glow-green">
                97.65%
              </span>
              <span className="font-mono text-[9px] tracking-[0.2em] font-bold text-white/40 uppercase mt-2 block">
                OVERALL MACRO F1
              </span>
            </div>
            <div className="flex justify-between items-center text-[10px] text-white/40">
              <span>Test Set Accuracy</span>
              <Award size={13} className="text-[#00C896]" />
            </div>
          </motion.div>

          {/* Accuracy Card */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.18 }}
            className="p-4 border border-cyber-teal/30 bg-[#161b22]/40 rounded-lg relative overflow-hidden group hover:border-cyber-teal/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyber-teal" />
            <div className="text-center py-4">
              <span className="text-3xl md:text-5xl font-display font-black text-cyber-teal block tracking-tight glow-teal">
                97.5%
              </span>
              <span className="font-mono text-[9px] tracking-[0.2em] font-bold text-white/40 uppercase mt-2 block">
                ACCURACY
              </span>
            </div>
            <div className="flex justify-between items-center text-[10px] text-white/40">
              <span>Zero-Shot Target</span>
              <CheckCircle2 size={13} className="text-cyber-teal" />
            </div>
          </motion.div>
        </div>

        {/* Right Column - Beautiful Custom CSS Bar Chart */}
        <motion.div 
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="p-4 border border-white/5 bg-[#161b22]/40 rounded-lg flex flex-col justify-between hover:border-white/10 transition-all duration-300"
        >
          <div className="space-y-4 flex-1">
            <div className="font-mono text-[9.5px] tracking-[0.2em] font-bold text-cyber-orange uppercase">
              F1 SCORE BY ATTACK CATEGORY (TEST SET)
            </div>
            <div className="h-[1px] w-full bg-white/5" />

            <div className="space-y-4 pt-1">
              {CHART_ITEMS.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-[11px] font-semibold">
                    <span className="text-white/80">{item.name}</span>
                    <span className={`${item.text} font-mono`}>{item.pctStr}</span>
                  </div>
                  <div className="h-2.5 w-full bg-cyber-bg border border-white/5 rounded-full overflow-hidden flex">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value * 100}%` }}
                      transition={{ duration: 1.2, delay: 0.3 + idx * 0.1 }}
                      className={`h-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Key Takeaway Banner */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="p-3 border border-cyber-orange/20 bg-cyber-orange/5 rounded-lg flex items-center gap-2.5 relative z-20 overflow-hidden shrink-0 mt-2"
      >
        <div className="p-1 rounded bg-cyber-orange/15 text-cyber-orange shrink-0 animate-pulse">
          <Star size={14} fill="currentColor" />
        </div>
        <p className="font-sans text-[10.5px] md:text-[11px] text-white/80 leading-relaxed italic">
          &quot;KEY TAKEAWAY — The model achieves high, balanced performance across all 3 attack categories, demonstrating strong generalization on unseen adversarial prompts.&quot;
        </p>
        <span className="absolute top-2 right-3 flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-orange opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyber-orange"></span>
        </span>
      </motion.div>

      {/* Footer Navigation Controls */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
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
                19 // 28
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
