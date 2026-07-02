import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, ArrowDown } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function DefensThreePhaseTrainingSlide({ onNext, onPrev }: SlideProps) {
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
          SLIDE 33 // 38
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          33 // DEFENS — THREE-PHASE TRAINING
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-0.5 italic uppercase">
          Three Phases. <span className="text-cyber-orange glow-orange">Cross-Validation → Ensemble → Fine-Tune.</span>
        </h2>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
          Systematic feedback loops to eliminate domain-specific vulnerabilities
        </p>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 py-1 z-20 items-stretch">
        
        {/* Left Column — Training Flow (col-span-5) */}
        <motion.div
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-4 p-4 border border-white/5 bg-black/20 rounded-lg flex flex-col justify-between"
        >
          <div className="font-mono text-[9px] tracking-widest font-bold text-white/50 uppercase mb-3 text-center border-b border-white/5 pb-1">
            TRAINING PIPELINE FLOW
          </div>

          <div className="flex-1 flex flex-col items-center justify-around gap-1">
            {[
              { text: "Initial Dataset", style: "bg-cyber-teal/20 border-cyber-teal/50 text-cyber-teal font-semibold" },
              { text: "3-Fold Stratified CV", style: "bg-white/5 border-white/10 text-white/70", sub: "Fold 1 | Fold 2 | Fold 3" },
              { text: "Soft-Voting Ensemble", style: "border-cyber-orange/40 text-cyber-orange bg-cyber-orange/5 font-semibold" },
              { text: "Error Analysis & Gap ID", style: "border-white/5 text-white/40 bg-white/5 text-xs" },
              { text: "Targeted Dataset Expansion", style: "border-white/10 text-white/70 bg-white/5" },
              { text: "Domain Fine-Tuning", style: "border-cyber-teal/30 text-cyber-teal bg-cyber-teal/5" },
              { text: "Final Production Model", style: "bg-[#00C896]/20 border-[#00C896]/50 text-[#00C896] font-bold" }
            ].map((node, idx) => (
              <div key={idx} className="w-full flex flex-col items-center">
                <div className={`w-full text-center py-1.5 px-3 border rounded text-[10px] font-mono uppercase tracking-wider ${node.style}`}>
                  {node.text}
                </div>
                {node.sub && (
                  <div className="font-mono text-[8px] text-white/40 mt-0.5">{node.sub}</div>
                )}
                {idx < 6 && <ArrowDown size={11} className="text-white/20 my-0.5" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column — Phase Stack & Threshold Note (col-span-7) */}
        <div className="lg:col-span-8 flex flex-col justify-between gap-3">
          
          {/* Phase Stack */}
          <div className="flex-1 flex flex-col gap-3">
            {[
              {
                num: "1",
                color: "border-cyber-teal/40 bg-cyber-teal/5",
                numBg: "bg-cyber-teal text-black",
                label: "PHASE 1",
                title: "Stratified 3-Fold Cross-Validation",
                body: "72,648 samples · Fold 3 best model achieved F1 = 92.19%",
                badgeText: "AUC-ROC 97.6%",
                badgeColor: "border-cyber-teal text-cyber-teal"
              },
              {
                num: "2",
                color: "border-cyber-orange/40 bg-cyber-orange/5",
                numBg: "bg-cyber-orange text-black",
                label: "PHASE 2",
                title: "Soft-Voting Ensemble (3 models)",
                body: "Averaged SoftMax probabilities across the folds to maximize generalized coverage",
                badgeText: "Recall +4.77%",
                badgeColor: "border-cyber-orange text-cyber-orange"
              },
              {
                num: "3",
                color: "border-[#00C896]/40 bg-[#00C896]/5",
                numBg: "bg-[#00C896] text-black",
                label: "PHASE 3",
                title: "Domain-Specific Fine-Tuning",
                body: "73,637 samples · Learning Rate = 1e-5 · 3 epochs over custom hard examples",
                badgeText: "F1 = 99.56%",
                badgeColor: "border-[#00C896] text-[#00C896]"
              }
            ].map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 25, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * (idx + 1) }}
                className={`p-3 border rounded-lg flex items-start gap-4 hover:bg-white/5 transition-all duration-300 ${p.color}`}
              >
                {/* Round indicator */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-black text-xs shrink-0 ${p.numBg}`}>
                  {p.num}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[9px] tracking-widest font-black uppercase opacity-60">
                      {p.label}
                    </span>
                    <span className={`px-2 py-0.5 border text-[8px] font-mono uppercase tracking-wider rounded ${p.badgeColor}`}>
                      {p.badgeText}
                    </span>
                  </div>
                  <h4 className="font-sans text-xs md:text-sm font-bold text-white mt-1">
                    {p.title}
                  </h4>
                  <p className="font-sans text-[11px] text-white/60 leading-relaxed mt-0.5 font-light">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Threshold Note */}
          <div className="p-3 border border-amber-500/30 bg-amber-500/5 rounded font-mono text-[10px] text-amber-400 text-center uppercase tracking-wider leading-relaxed">
            Production threshold = 0.51 — chosen over 0.60 to minimize missed attacks (False Negatives)
          </div>

        </div>

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
            33 // 38
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
