import { motion } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  ShieldAlert, 
  Terminal, 
  FileKey, 
  HeartCrack, 
  AlertTriangle,
  Sparkles,
  Activity
} from 'lucide-react';

interface AttackExamplesSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 }
  }
};

export function AttackExamplesSlide({ onNext, onPrev }: AttackExamplesSlideProps) {
  const attacks = [
    {
      title: "Prompt Injection & Jailbreak",
      icon: Terminal,
      description: "Adversarial prompts designed to bypass core safety instructions and hijack model behavior.",
      badge: "INJECTION"
    },
    {
      title: "Personally Identifiable Information (PII) Leakage",
      icon: FileKey,
      description: "Exploitation of model outputs to reveal confidential credentials, secrets, or user data.",
      badge: "LEAKAGE"
    },
    {
      title: "Harmful & Self-Harm Manipulation",
      icon: HeartCrack,
      description: "Bypassing alignment guardrails to output toxic, dangerous, or malicious recommendations.",
      badge: "MANIPULATION"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[70] flex flex-col justify-between p-6 md:p-10 text-white pointer-events-auto bg-cyber-bg overflow-y-auto lg:overflow-hidden select-none"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-[-1]">
        <div className="absolute inset-0 bg-cyber-bg/95 backdrop-blur-xl" />
        <div className="absolute inset-6 border border-cyber-orange/5 pointer-events-none">
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-cyber-orange/20" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-cyber-orange/20" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-cyber-orange/20" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-cyber-orange/20" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Header Bar */}
      <div className="flex justify-between items-center border-b border-cyber-orange/10 pb-3 mb-3 shrink-0">
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50">
          SLIDE 04 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 1 // INTRODUCTION
        </div>
      </div>

      {/* Title Area */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-3 shrink-0"
      >
        <h2 className="text-2xl md:text-3xl font-display font-black tracking-tight glow-orange mb-1 italic uppercase">
          Problem Statement
        </h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-[1px] w-48 bg-cyber-orange origin-left shadow-[0_0_8px_#FF4B00] mt-1.5"
        />
      </motion.div>

      {/* Main Content Area: Responsive & Wider */}
      <div className="flex-1 min-h-0 flex items-center justify-center py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-6xl items-stretch">
          
          {/* Left Column: Problem Concept and Impact Callout */}
          <motion.div
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="lg:col-span-6 flex flex-col justify-between p-6 md:p-7 border border-cyber-orange/10 bg-[#0D121F]/40 backdrop-blur-md rounded-xl relative overflow-hidden group hover:border-cyber-orange/20 transition-all duration-300 min-h-[220px]"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyber-orange/40 to-transparent" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded bg-cyber-orange/10 border border-cyber-orange/20 text-cyber-orange shrink-0">
                  <ShieldAlert size={16} />
                </div>
                <span className="font-mono text-[9.5px] tracking-[0.25em] text-cyber-orange font-bold uppercase">
                  Vulnerability Analysis
                </span>
              </div>

              {/* Lead Problem Statement - Larger Font */}
              <p className="font-sans text-[14.5px] md:text-[15.5px] lg:text-[16.5px] leading-relaxed text-white/95 font-light border-l border-cyber-orange/30 pl-4 py-0.5">
                Current LLMs are vulnerable to <span className="text-cyber-orange font-bold font-display tracking-wide">sophisticated adversarial attacks</span> that can manipulate model behavior, bypass safety mechanisms, or expose confidential information.
              </p>
            </div>

            {/* Concluding Block - Larger Font */}
            <div className="mt-4 p-4 rounded-lg border border-white/5 bg-white/[0.01] relative overflow-hidden">
              <div className="flex gap-3">
                <AlertTriangle size={16} className="text-cyber-orange shrink-0 mt-0.5" />
                <p className="font-sans text-[13px] md:text-[13.5px] lg:text-[14px] leading-relaxed text-white/85 font-light">
                  These limitations create <span className="text-cyber-orange font-semibold">significant security, privacy, and trust challenges</span> for AI systems deployed in critical environments.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Evolving Attack Techniques & Specific Scenarios */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col justify-between p-6 md:p-7 border border-white/5 bg-gradient-to-br from-[#080B14]/40 to-black/40 backdrop-blur-md rounded-xl relative overflow-hidden group hover:border-cyber-orange/10 transition-all duration-300 min-h-[220px]"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9.5px] tracking-[0.25em] text-white/40 uppercase">
                  Evolving Attack Vectors
                </span>
                <span className="font-mono text-[8px] text-cyber-orange/60 font-bold tracking-widest uppercase">
                  Tactics Registry
                </span>
              </div>

              {/* Transition Sentence - Larger Font */}
              <p className="font-sans text-[13px] md:text-[13.5px] lg:text-[14px] text-white/70 font-light leading-relaxed">
                Existing rule-based defenses struggle to keep pace with evolving attack techniques such as:
              </p>

              {/* Three beautifully sized modern bullet cards with larger, highly readable fonts */}
              <div className="space-y-3">
                {attacks.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex gap-4 p-3.5 rounded-lg border border-white/5 bg-white/[0.01] transition-all duration-200 hover:bg-cyber-orange/[0.02] hover:border-cyber-orange/20 group/card"
                    >
                      <div className="p-2.5 bg-white/[0.03] rounded border border-white/5 text-white/75 group-hover/card:text-cyber-orange group-hover/card:bg-cyber-orange/5 group-hover/card:border-cyber-orange/25 transition-all shrink-0 h-fit">
                        <IconComponent size={15} className="transition-transform group-hover/card:scale-105" />
                      </div>
                      <div className="space-y-0.5 min-w-0 flex-1">
                        <div className="flex justify-between items-center gap-1.5">
                          <h4 className="font-sans text-[13px] md:text-[14px] lg:text-[14.5px] font-bold text-white group-hover/card:text-cyber-orange transition-colors">
                            {item.title}
                          </h4>
                          <span className="font-mono text-[6.5px] border border-cyber-orange/20 text-cyber-orange bg-cyber-orange/5 px-1 py-0.5 rounded tracking-widest shrink-0 hidden xs:block">
                            {item.badge}
                          </span>
                        </div>
                        <p className="font-sans text-[11px] md:text-[11.5px] lg:text-[12px] text-white/50 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Slide Navigation Footer */}
      <div className="flex justify-between items-center border-t border-cyber-orange/10 pt-3 mt-3 shrink-0 relative z-[80]">
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 75, 0, 0.05)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrev}
          className="group flex items-center gap-2 px-3 py-1.5 opacity-30 hover:opacity-100 transition-all cursor-pointer"
        >
          <ChevronLeft className="text-white group-hover:-translate-x-1 transition-transform" size={15} />
          <span className="font-display text-[9px] tracking-[0.4em] uppercase">PREV</span>
        </motion.button>

        <div className="flex items-center gap-3">
          <div className="w-1 h-1 rounded-full bg-cyber-orange/20" />
          <div className="px-3 py-1 border border-cyber-orange/20 text-cyber-orange font-mono text-[9px] tracking-widest">
            04 // 28
          </div>
          <div className="w-1 h-1 rounded-full bg-cyber-orange/20" />
        </div>

        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 75, 0, 0.1)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="group flex items-center gap-2 px-5 py-2.5 border border-cyber-orange/50 bg-cyber-orange/10 hover:bg-cyber-orange/20 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,75,0,0.1)]"
        >
          <span className="font-display text-[9px] tracking-[0.4em] text-cyber-orange group-hover:glow-orange transition-all uppercase">
            NEXT
          </span>
          <ChevronRight className="text-cyber-orange group-hover:translate-x-1 transition-transform" size={15} />
        </motion.button>
      </div>
    </motion.div>
  );
}
