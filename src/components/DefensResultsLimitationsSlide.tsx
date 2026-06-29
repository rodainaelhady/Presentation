import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, AlertCircle, Sparkles, TrendingUp } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function DefensResultsLimitationsSlide({ onNext, onPrev }: SlideProps) {
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
          SLIDE 34 // 34
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          34 // DEFENS — RESULTS & FUTURE WORK
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-0.5 italic uppercase">
          388 Missed Attacks → 91. <span className="text-cyber-orange glow-orange">A 76.5% Reduction.</span>
        </h2>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
          Benchmark results, calibration, limitations, and future scalability path
        </p>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 py-1 z-20 items-stretch">
        
        {/* Left Column — Results Chart and Metrics (col-span-6) */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-4">
          <motion.div
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="p-4 border border-white/5 bg-[#161b22]/30 rounded-lg flex-1 flex flex-col justify-between"
          >
            <div>
              <div className="font-mono text-[9px] text-cyber-orange font-bold tracking-widest uppercase mb-4">
                IMPACT OF FINE-TUNING — Hard_test.csv (5,000 samples)
              </div>

              {/* Sleek Custom Horizontal Bar Chart */}
              <div className="space-y-4">
                {[
                  { label: "Accuracy", before: 86, after: 97 },
                  { label: "F1 Attack", before: 82, after: 96 },
                  { label: "Attack Recall", before: 81, after: 95 }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-white/80 font-bold">{item.label}</span>
                      <span className="text-white/40">
                        Before: <span className="text-red-400 font-semibold">{item.before}%</span> | After: <span className="text-[#00C896] font-semibold">{item.after}%</span>
                      </span>
                    </div>
                    {/* Double Bar Stack */}
                    <div className="space-y-1 bg-black/35 p-2 rounded border border-white/5">
                      {/* Before (Red) */}
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] font-mono w-10 text-white/40 uppercase">BEFORE</span>
                        <div className="flex-1 bg-white/5 h-2 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${item.before}%` }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-red-500 h-full rounded-full"
                          />
                        </div>
                      </div>
                      {/* After (Green) */}
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] font-mono w-10 text-white/40 uppercase">AFTER</span>
                        <div className="flex-1 bg-white/5 h-2 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${item.after}%` }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="bg-[#00C896] h-full rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FN reduction highlight */}
            <div className="mt-4 flex items-center gap-2 text-xs font-sans text-white/70">
              <span>Missed attacks (FN) on Hard_test.csv:</span>
              <span className="px-2 py-0.5 border border-cyber-orange/40 bg-cyber-orange/5 text-cyber-orange font-mono font-bold rounded">
                388 → 91
              </span>
              <span className="text-[#00C896] font-bold">(-76.5%)</span>
            </div>
          </motion.div>

          {/* 3 stat boxes row at bottom */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { val: "99.56%", label: "F1 — advanced_test", border: "border-[#00C896] text-[#00C896]" },
              { val: "0.993–0.997", label: "AUC-ROC range", border: "border-cyber-teal text-cyber-teal" },
              { val: "0.0666", label: "ECE Calibration Error", border: "border-amber-500 text-amber-500" }
            ].map((box, idx) => (
              <div key={idx} className={`p-3 border rounded-lg bg-black/20 ${box.border} flex flex-col justify-center items-center text-center`}>
                <div className="font-display text-base md:text-lg font-black">{box.val}</div>
                <div className="font-mono text-[8px] text-white/50 uppercase tracking-wider mt-1 leading-snug">{box.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — Limitations & Future Work (col-span-6) */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-4">
          
          {/* Limitations Card (Red) */}
          <motion.div
            initial={{ x: 25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="p-4 border border-red-500/30 bg-red-950/5 rounded-lg flex-1 flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 border-b border-red-500/10 pb-1.5 mb-2">
              <AlertCircle size={12} className="text-red-400" />
              <span className="font-mono text-[9px] text-red-400 font-bold tracking-widest uppercase">
                KEY LIMITATIONS
              </span>
            </div>

            <ul className="space-y-2.5 font-sans text-[11px] md:text-[12px] text-white/70 leading-relaxed font-light">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">▸</span>
                <span><strong className="text-white">Self-Harm boundary:</strong> genuine medical crisis vs. emotional exploitation — remains the hardest adversarial gray-zone.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">▸</span>
                <span><strong className="text-white">Sophisticated indirect attacks:</strong> context-masking and academic disguise still partially evade prompt filtering.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">▸</span>
                <span><strong className="text-white">Single-turn scope:</strong> English-only baseline with a maximum 128-token input length and no conversation history.</span>
              </li>
            </ul>
          </motion.div>

          {/* Future Work Card (Teal) */}
          <motion.div
            initial={{ x: 25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-4 border border-cyber-teal/30 bg-cyber-teal/5 rounded-lg flex-1 flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 border-b border-cyber-teal/10 pb-1.5 mb-2">
              <Sparkles size={12} className="text-cyber-teal" />
              <span className="font-mono text-[9px] text-cyber-teal font-bold tracking-widest uppercase">
                FUTURE WORK
              </span>
            </div>

            <ul className="space-y-2.5 font-sans text-[11px] md:text-[12px] text-white/70 leading-relaxed font-light">
              <li className="flex items-start gap-2">
                <span className="text-cyber-teal mt-0.5">▸</span>
                <span><strong className="text-white">Multilingual defense:</strong> port to mDeBERTa/XLM-RoBERTa for non-English and code-mixed attacks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber-teal mt-0.5">▸</span>
                <span><strong className="text-white">Multi-turn session tracking:</strong> track conversation state to block gradual trust-building manipulation attacks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber-teal mt-0.5">▸</span>
                <span><strong className="text-white">Hybrid orchestration:</strong> temperature scaling + 5-layer deep security mesh architecture.</span>
              </li>
            </ul>
          </motion.div>

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
            34 // 34
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
