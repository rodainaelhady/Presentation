import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, Cpu, Layers, ArrowRight } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function DefensModelArchitectureSlide({ onNext, onPrev }: SlideProps) {
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
          SLIDE 32 // 38
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          32 // DEFENS — MODEL ARCHITECTURE
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-0.5 italic uppercase">
          DeBERTa-v3 Won. <span className="text-cyber-orange glow-orange">Disentangled Attention Wins.</span>
        </h2>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
          Model benchmarks, Inference pipeline, and Custom multi-sample dropout classification head
        </p>
      </div>

      {/* Content Stack */}
      <div className="flex-1 flex flex-col justify-between gap-4 z-20 py-1">
        
        {/* Row 1 — Model Comparison Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: "DistilBERT", params: "~66M", desc: "Insufficient capacity for gray-zone detection", active: false },
            { name: "BERT-base", params: "~110M", desc: "Entangled attention — weak vs paraphrasing", active: false },
            { name: "RoBERTa-base", params: "~125M", desc: "Weaker than DeBERTa on nuanced cases", active: false },
            { name: "DeBERTa-v3-base", params: "~184M", desc: "Disentangled attention — selected ✓", active: true }
          ].map((m, idx) => (
            <div 
              key={idx} 
              className={`p-3 border rounded flex flex-col justify-between transition-all duration-300 ${
                m.active 
                  ? "border-cyber-teal bg-cyber-teal/10 shadow-[0_0_15px_rgba(0,180,216,0.1)]" 
                  : "border-white/10 bg-black/20"
              }`}
            >
              <div>
                <div className={`font-mono text-[9px] font-bold uppercase tracking-wider ${m.active ? "text-cyber-teal" : "text-white/40"}`}>
                  {m.name}
                </div>
                <div className={`font-display text-lg font-black mt-1 ${m.active ? "text-white" : "text-white/60"}`}>
                  {m.params}
                </div>
              </div>
              <p className={`font-sans text-[10.5px] leading-relaxed mt-2 ${m.active ? "text-white/95 font-medium" : "text-white/50"}`}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2 — Inference Pipeline */}
        <div>
          <div className="font-mono text-[9px] text-cyber-orange font-bold tracking-widest uppercase mb-2">
            INFERENCE PIPELINE
          </div>
          <div className="flex flex-wrap items-center gap-1.5 md:gap-2 p-3 border border-white/5 bg-black/30 rounded">
            {[
              { label: "Raw Input Data", highlight: false },
              { label: "Preprocessing", highlight: false },
              { label: "Tokenization", highlight: false },
              { label: "DeBERTa-v3", highlight: true, color: "border-cyber-orange text-cyber-orange bg-cyber-orange/5" },
              { label: "Classification Head", highlight: false },
              { label: "Safety Decision", highlight: true, color: "border-[#00C896] text-[#00C896] bg-[#00C896]/5" }
            ].map((node, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className={`px-2.5 py-1 border rounded text-[10px] font-mono uppercase tracking-wider ${
                  node.highlight ? node.color : "border-white/10 text-white/70"
                }`}>
                  {node.label}
                </span>
                {idx < 5 && <ArrowRight size={12} className="text-white/20 shrink-0" />}
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 — Custom Classification Head */}
        <div>
          <div className="font-mono text-[9px] text-cyber-orange font-bold tracking-widest uppercase mb-2">
            CUSTOM CLASSIFICATION HEAD
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { title: "MULTI-SAMPLE DROPOUT", color: "border-cyber-teal text-cyber-teal", body: "3 parallel dropout paths, averaged — significantly reduces overfitting" },
              { title: "FC CLASSIFICATION LAYER", color: "border-cyber-orange text-cyber-orange", body: "Pooled [CLS] token → 2-D logit space mapping to SAFE / ATTACK" },
              { title: "LOGITS AVERAGING", color: "border-[#00C896] text-[#00C896]", body: "Stabilizes gradient backpropagation and optimizes across dropout branches" }
            ].map((card, idx) => (
              <div key={idx} className={`p-3 border rounded-lg bg-[#161b22]/40 border-white/10 hover:border-white/20 transition-all flex flex-col justify-between`}>
                <div className={`font-mono text-[9px] font-black tracking-wider border-b border-white/5 pb-1.5 mb-2 ${card.color}`}>
                  {card.title}
                </div>
                <p className="font-sans text-[11px] text-white/75 leading-relaxed font-light">
                  {card.body}
                </p>
              </div>
            ))}
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
            32 // 38
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
