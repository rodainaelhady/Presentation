import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, Shield } from 'lucide-react';

interface AISecuritySlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const ATTACKS = [
  { num: "1", title: "Prompt Injection" },
  { num: "2", title: "Jailbreak Attacks" },
  { num: "3", title: "PII Leakage" },
  { num: "4", title: "Memory Extraction" },
  { num: "5", title: "Emotional Manipulation" }
];

const METRICS = ["Threat", "Exposure", "Impact", "Composite", "Severity"];
const MODELS = ["ChatGPT", "Gemini", "Perplexity", "DuckDuckGo AI", "Albert AI"];

export function AISecuritySlide({ onNext, onPrev }: AISecuritySlideProps) {
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
          SLIDE 27 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 3 // AI SECURITY EVALUATION & RISK ANALYSIS
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-0.5 italic uppercase">
          Five Attack Vectors. <span className="text-cyber-orange glow-orange">One Risk Verdict.</span>
        </h2>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 items-stretch z-20 py-2">
        
        {/* LEFT CARD — Attack Categories */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-5 border border-[#FF2D2D]/30 bg-[#161B22]/60 rounded-xl p-5 md:p-6 transition-all hover:border-[#FF2D2D]/50 flex flex-col justify-between"
        >
          <div>
            <div className="font-mono text-[9px] tracking-[0.3em] text-[#FF2D2D] font-bold uppercase mb-4">
              ATTACK CATEGORIES
            </div>
            
            <div className="space-y-3">
              {ATTACKS.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  {/* Badge */}
                  <div className="w-7 h-7 rounded-full bg-[#21262D] border border-[#FF2D2D]/50 flex items-center justify-center font-mono text-xs text-[#FF2D2D] font-bold shrink-0">
                    {item.num}
                  </div>
                  <span className="font-sans text-[12px] font-bold text-white uppercase tracking-wider">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          
          {/* Card A — Evaluation Workflow */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="border border-[#00B4D8]/30 bg-[#161B22]/60 rounded-xl p-5 hover:border-[#00B4D8]/50 transition-all flex-1"
          >
            <div className="font-mono text-[9px] tracking-[0.3em] text-[#00B4D8] font-bold uppercase mb-3">
              EVALUATION WORKFLOW
            </div>
            <p className="font-sans text-[11px] text-white/90 leading-relaxed font-light">
              Attack Prompt &rarr; Classification &rarr; Validation & Normalization &rarr;
              Security Signal Extraction &rarr; Risk Assessment &rarr; Report Generation
            </p>
          </motion.div>

          {/* Card B — Risk Metrics & Supported Models */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="border border-[#F59E0B]/30 bg-[#161B22]/60 rounded-xl p-5 hover:border-[#F59E0B]/50 transition-all flex-1 flex flex-col justify-between gap-4"
          >
            <div>
              <div className="font-mono text-[9px] tracking-[0.3em] text-[#F59E0B] font-bold uppercase mb-3">
                RISK METRICS
              </div>
              
              {/* Risk metrics tags row */}
              <div className="flex flex-wrap gap-2">
                {METRICS.map((m, idx) => (
                  <div key={idx} className="bg-[#0D1117] border border-[#F59E0B]/40 rounded px-2.5 py-1 text-center font-mono text-[8.5px] text-[#F59E0B]">
                    {m}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[9px] tracking-[0.3em] text-[#00B4D8] font-bold uppercase mb-3">
                SUPPORTED INTEGRATIONS
              </div>
              
              {/* Supported models tags row */}
              <div className="flex flex-wrap gap-2">
                {MODELS.map((m, idx) => (
                  <div key={idx} className="bg-[#0D1117] border border-[#00B4D8]/40 rounded px-2.5 py-1 text-center font-mono text-[8px] text-[#00B4D8]">
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

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
                27 // 28
            </div>
            <div className="w-1 h-1 rounded-full bg-cyber-orange/20" />
        </div>

        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 75, 0, 0.1)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="group flex items-center gap-3 px-6 py-3 border border-cyber-orange/50 bg-cyber-orange/10 hover:bg-cyber-orange/20 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,75,0,0.1)]"
        >
          <span className="font-display text-[10px] tracking-[0.4em] text-cyber-orange group-hover:glow-orange transition-all uppercase">NEXT</span>
          <ChevronRight className="text-cyber-orange group-hover:translate-x-1 transition-transform" size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
}
