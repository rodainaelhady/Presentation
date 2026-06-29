import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const PIPELINE_NODES = [
  { label: "Input\nPrompt", border: "border-white/10" },
  { label: "DeBERTa\nTokenizer\n(max 256)", border: "border-cyber-teal/30", color: "text-cyber-teal" },
  { label: "DeBERTa-v3-base\n12L · 768-dim\n~184M params", border: "border-cyber-orange/40", color: "text-cyber-orange" },
  { label: "Linear Head\n3 Output Logits", border: "border-cyber-teal/30", color: "text-cyber-teal" },
  { label: "Softmax\n→ argmax\nFinal Class", border: "border-[#00C896]/30", color: "text-[#00C896]" }
];

const WHY_DEBERTA = [
  {
    title: "▸ DISENTANGLED ATTENTION",
    color: "text-cyber-orange",
    border: "border-cyber-orange/25",
    desc: "Separates content & positional encodings — better at detecting word-order manipulations used in attack prompts."
  },
  {
    title: "▸ CONTEXTUAL REASONING",
    color: "text-cyber-teal",
    border: "border-cyber-teal/25",
    desc: "Detects indirect or disguised malicious intent in complex, layered linguistic patterns."
  },
  {
    title: "▸ STRONG GENERALIZATION",
    color: "text-[#00C896]",
    border: "border-[#00C896]/25",
    desc: "Proven performance on GLUE / SuperGLUE ensures robustness across diverse adversarial inputs."
  }
];

const TRAINING_STRATEGY = [
  { icon: "⚖", title: "Class-Weighted\nTraining", color: "text-cyber-orange", sub: "Inverse-frequency\nclass weights" },
  { icon: "🔄", title: "3-Fold Cross-\nValidation", color: "text-cyber-teal", sub: "Stratified splits" },
  { icon: "🏆", title: "Best Model\nSelection", color: "text-[#F59E0B]", sub: "Highest Macro F1" },
  { icon: "🎯", title: "Macro F1\nMetric", color: "text-[#00C896]", sub: "Balanced across classes" },
  { icon: "🛡", title: "Generalization\nFocus", color: "text-[#A855F7]", sub: "Unseen attack robustness" }
];

export function AttackClassifierArchitectureSlide({ onNext, onPrev }: SlideProps) {
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
          SLIDE 18 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 3 // ARCHITECTURE & TRAINING
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-0.5 italic uppercase">
          DeBERTa-v3. <span className="text-cyber-orange glow-orange">Built for Adversarial Detection.</span>
        </h2>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
          Linear classification head · 184M parameters · 256-token context
        </p>
      </div>

      {/* Neural Pipeline Row */}
      <div className="grid grid-cols-5 gap-2 md:gap-3 items-center shrink-0 z-20 py-2">
        {PIPELINE_NODES.map((node, idx) => (
          <div key={idx} className="flex items-center gap-1.5 md:gap-3">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.08 }}
              className={`flex-1 p-2 md:p-3 bg-[#161b22]/40 border rounded-lg text-center h-[70px] md:h-[80px] flex items-center justify-center font-sans text-[10px] md:text-[10.5px] leading-snug ${node.border} ${node.color || 'text-white'}`}
            >
              <span className="whitespace-pre-line font-medium">{node.label}</span>
            </motion.div>
            {idx < PIPELINE_NODES.length - 1 && (
              <ArrowRight className="text-white/30 shrink-0 hidden sm:block" size={13} />
            )}
          </div>
        ))}
      </div>

      {/* WHY DEBERTA Panel */}
      <div className="space-y-2 shrink-0 z-20">
        <div className="font-mono text-[9px] tracking-[0.3em] font-bold text-cyber-orange uppercase">
          WHY DeBERTa-v3?
        </div>
        <div className="h-[1px] w-full bg-white/5" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {WHY_DEBERTA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 + idx * 0.08 }}
              className={`p-3 border bg-[#161b22]/40 rounded-lg flex flex-col justify-between hover:bg-[#161b22]/60 transition-all duration-300 ${item.border}`}
            >
              <div className={`font-mono text-[9.5px] font-bold uppercase tracking-wider mb-1.5 ${item.color}`}>
                {item.title}
              </div>
              <p className="font-sans text-[10.5px] md:text-[11px] text-white/60 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TRAINING STRATEGY */}
      <div className="space-y-2 shrink-0 z-20 pt-1">
        <div className="font-mono text-[9px] tracking-[0.3em] font-bold text-cyber-orange uppercase">
          TRAINING STRATEGY
        </div>
        <div className="grid grid-cols-5 gap-2 text-center bg-[#161b22]/20 border border-white/5 p-2.5 rounded-lg">
          {TRAINING_STRATEGY.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.06 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-base md:text-lg animate-pulse">{item.icon}</span>
              <div className={`font-sans text-[9px] md:text-[9.5px] font-bold whitespace-pre-line leading-tight ${item.color}`}>
                {item.title}
              </div>
              <div className="font-sans text-[8.5px] text-white/40 whitespace-pre-line leading-snug font-light">
                {item.sub}
              </div>
            </motion.div>
          ))}
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
                18 // 28
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
