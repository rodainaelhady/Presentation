import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, ShieldAlert, Cpu, Layers } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function AttackClassifierOverviewSlide({ onNext, onPrev }: SlideProps) {
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
          SLIDE 15 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 3 // ATTACK CLASSIFIER MODEL
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-0.5 italic uppercase">
          Not All Attacks Are Equal. <span className="text-cyber-orange glow-orange">Now We Can Tell Them Apart.</span>
        </h2>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
          Multi-Class Threat Classification Backbone
        </p>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 flex-1 items-stretch py-2 z-20">
        {/* Left Column (2 cols wide) */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 p-5 border border-cyber-orange/30 bg-[#161b22]/40 rounded-lg flex flex-col justify-between relative overflow-hidden group hover:border-cyber-orange/50 transition-all duration-300"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyber-orange" />
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded border border-cyber-orange/30 bg-cyber-orange/10 text-cyber-orange">
                <ShieldAlert size={14} />
              </div>
              <h3 className="font-mono text-[10px] tracking-[0.3em] font-bold text-cyber-orange uppercase">
                WHAT IS IT?
              </h3>
            </div>
            
            <p className="font-sans text-[13px] md:text-[14.5px] text-white/90 leading-relaxed font-light">
              A transformer-based classification system that identifies adversarial prompts and assigns them to one of three predefined attack categories.
            </p>
            <p className="font-sans text-[12.5px] md:text-[13.5px] text-white/60 leading-relaxed font-light">
              Unlike binary safety classifiers, it performs multi-class classification to deliver fine-grained threat intelligence across the monitoring and policy layers.
            </p>
          </div>

          <div className="mt-6 flex">
            <div className="px-3 py-1 border border-cyber-orange/30 bg-cyber-bg rounded-full text-[10px] font-mono text-cyber-orange flex items-center gap-1.5 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-orange animate-pulse" />
              Backbone: DeBERTa-v3-base
            </div>
          </div>
        </motion.div>

        {/* Right Column (1 col wide, stacked cards) */}
        <div className="flex flex-col gap-4">
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-4 border border-cyber-teal/30 bg-[#161b22]/40 rounded-lg relative overflow-hidden group hover:border-cyber-teal/50 transition-all duration-300 flex-1 flex flex-col justify-between"
          >
            <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-cyber-teal" />
            <div className="space-y-2">
              <div className="font-mono text-[9px] tracking-[0.3em] font-bold text-cyber-teal uppercase">
                PRIMARY ROLE
              </div>
              <p className="font-sans text-[12px] md:text-[12.5px] text-white font-semibold leading-relaxed">
                Fine-grained threat intelligence for monitoring, reporting & policy decisions.
              </p>
            </div>
            <div className="text-cyber-teal/40 flex justify-end">
              <Cpu size={14} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="p-4 border border-[#00C896]/30 bg-[#161b22]/40 rounded-lg relative overflow-hidden group hover:border-[#00C896]/50 transition-all duration-300 flex-1 flex flex-col justify-between"
          >
            <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-[#00C896]" />
            <div className="space-y-2.5">
              <div className="font-mono text-[9px] tracking-[0.3em] font-bold text-[#00C896] uppercase">
                OUTPUT
              </div>
              <ul className="space-y-1.5 font-sans text-[11px] md:text-[11.5px] text-white/60">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#00C896] shrink-0">▸</span>
                  Predicts one attack category per prompt
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#00C896] shrink-0">▸</span>
                  Returns confidence scores for all 3 classes
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#00C896] shrink-0">▸</span>
                  Optimized for low-latency inference
                </li>
              </ul>
            </div>
            <div className="text-[#00C896]/40 flex justify-end">
              <Layers size={14} />
            </div>
          </motion.div>
        </div>
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
                15 // 28
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
