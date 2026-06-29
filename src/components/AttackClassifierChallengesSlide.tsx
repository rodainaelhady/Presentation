import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, AlertCircle, TrendingUp } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const CHALLENGES = [
  {
    title: "Emerging Attack Techniques",
    desc: "Attack strategies evolve rapidly. Fixed training distribution may miss new adversarial patterns, requiring periodic retraining."
  },
  {
    title: "Single-Label Limitation",
    desc: "Real-world prompts can exhibit multiple attack types simultaneously. Current formulation may miss compound or hybrid attack scenarios."
  },
  {
    title: "Dataset Dependency",
    desc: "Performance is tightly coupled to 32K training samples. Biases or gaps directly impact generalization to unseen attack styles."
  }
];

const FUTURE_WORK = [
  {
    num: "1",
    title: "Multi-Label Classification",
    desc: "Expand the classifier to assign multiple labels to prompts exhibiting more than one threat vector simultaneously."
  },
  {
    num: "2",
    title: "Real-Time Inference",
    desc: "Optimize model inference latency to enable real-time inline evaluation inside high-throughput production gateways."
  },
  {
    num: "3",
    title: "Active Learning Loop",
    desc: "Establish active learning pipelines to automatically identify, label, and retrain on hard out-of-distribution prompts."
  },
  {
    num: "4",
    title: "Multi-Lingual Support",
    desc: "Incorporate multilingual safety tokens to expand classification and guardrail efficacy across international languages."
  }
];

export function AttackClassifierChallengesSlide({ onNext, onPrev }: SlideProps) {
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
          SLIDE 20 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 3 // CHALLENGES & FUTURE WORK
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-0.5 italic uppercase">
          Limitations We Acknowledge. <span className="text-cyber-orange glow-orange">Directions We're Pursuing.</span>
        </h2>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
          Roadmap for continuous AI safety improvement
        </p>
      </div>

      {/* Grid: Challenges (Left) & Future Work (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 flex-1 items-stretch py-2 z-20">
        
        {/* Left Column: Challenges */}
        <div className="flex flex-col gap-3">
          {/* Section Header Card */}
          <div className="py-2.5 px-4 bg-[#FF2D2D]/10 border border-[#FF2D2D]/30 rounded-md flex items-center justify-center gap-2 relative overflow-hidden shrink-0">
            <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-[#FF2D2D]" />
            <AlertCircle size={15} className="text-[#FF2D2D] animate-pulse" />
            <span className="font-display text-xs font-black tracking-widest uppercase text-white">
              CHALLENGES
            </span>
          </div>

          {/* List of Challenges */}
          <div className="flex-1 flex flex-col justify-between gap-3">
            {CHALLENGES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + idx * 0.08 }}
                className="p-3 border border-white/5 bg-[#161b22]/40 rounded-lg relative overflow-hidden flex-1 flex flex-col justify-center"
              >
                <h4 className="font-sans text-[11px] font-bold text-[#FF2D2D] uppercase tracking-wide mb-1">
                  {item.title}
                </h4>
                <p className="font-sans text-[10.5px] text-white/60 leading-normal font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Future Work */}
        <div className="flex flex-col gap-3">
          {/* Section Header Card */}
          <div className="py-2.5 px-4 bg-cyber-teal/10 border border-cyber-teal/30 rounded-md flex items-center justify-center gap-2 relative overflow-hidden shrink-0">
            <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-cyber-teal" />
            <TrendingUp size={15} className="text-cyber-teal" />
            <span className="font-display text-xs font-black tracking-widest uppercase text-white">
              FUTURE ROADMAP
            </span>
          </div>

          {/* List of Future Work items */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FUTURE_WORK.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15 + idx * 0.08 }}
                className="p-3 border border-white/5 bg-[#161b22]/40 rounded-lg relative overflow-hidden flex flex-col justify-between group hover:border-cyber-orange/25 transition-all duration-300"
              >
                <div className="flex items-start gap-2.5">
                  <div className="px-1.5 py-0.5 rounded-sm bg-cyber-orange text-white font-mono text-[10px] font-bold shrink-0">
                    {item.num}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans text-[10.5px] font-bold text-cyber-orange uppercase tracking-wide leading-tight">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[9.5px] text-white/60 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

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
                20 // 28
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
            RESTART
          </span>
          <ChevronRight className="text-cyber-orange group-hover:translate-x-1 transition-transform" size={16} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
