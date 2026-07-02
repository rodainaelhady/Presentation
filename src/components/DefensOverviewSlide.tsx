import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, ShieldAlert, CheckCircle2, AlertTriangle } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function DefensOverviewSlide({ onNext, onPrev }: SlideProps) {
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
          SLIDE 30 // 38
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          30 // DEFENS — THE PROBLEM & SOLUTION
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-0.5 italic uppercase">
          No Upstream Defense. <span className="text-cyber-orange glow-orange">Every Attack Reaches the Model.</span>
        </h2>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
          Upstream interdiction vs direct exposure
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 py-2 z-20 items-stretch">
        
        {/* Left Column — The Problem (Red) */}
        <motion.div
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="p-5 border border-red-500/30 bg-red-950/5 rounded-lg flex flex-col justify-between relative overflow-hidden group hover:border-red-500/50 transition-all duration-300"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-500" />
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded border border-red-500/30 bg-red-500/10 text-red-400">
                <AlertTriangle size={14} />
              </div>
              <h3 className="font-mono text-[10px] tracking-[0.3em] font-bold text-red-400 uppercase">
                THE PROBLEM
              </h3>
            </div>

            <div>
              <p className="font-sans text-sm md:text-base text-white font-bold leading-relaxed mb-3">
                Mental-health chatbots face significant adversarial risks
              </p>
              <ul className="space-y-3 font-sans text-xs md:text-[13px] text-white/70 leading-relaxed font-light">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0 mt-0.5">▸</span>
                  Jailbreak via reframed instructions or role-play to bypass safety rules
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0 mt-0.5">▸</span>
                  Extract system prompts, hidden config, or other users PII
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0 mt-0.5">▸</span>
                  Exploit the supportive tone of mental-health conversations to manipulate responses
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0 mt-0.5">▸</span>
                  Trigger unsafe outputs around self-harm — life-critical, not just reputational
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5 p-3 border border-red-500/20 bg-red-950/10 rounded font-sans text-xs italic text-red-400 leading-relaxed font-medium">
            No upstream defense = every adversarial prompt reaches the model directly.
          </div>
        </motion.div>

        {/* Right Column — The Solution (Green) */}
        <motion.div
          initial={{ x: 25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="p-5 border border-[#00C896]/30 bg-[#00C896]/5 rounded-lg flex flex-col justify-between relative overflow-hidden group hover:border-[#00C896]/50 transition-all duration-300"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#00C896]" />
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded border border-[#00C896]/30 bg-[#00C896]/10 text-[#00C896]">
                <ShieldAlert size={14} />
              </div>
              <h3 className="font-mono text-[10px] tracking-[0.3em] font-bold text-[#00C896] uppercase">
                THE SOLUTION
              </h3>
            </div>

            <div>
              <p className="font-sans text-sm md:text-base text-white font-bold leading-relaxed mb-2">
                DEFENS blocks malicious prompts upstream
              </p>
              <p className="font-sans text-xs md:text-[13px] text-white/75 leading-relaxed font-light mb-4">
                Every user message is screened by a binary classifier before it ever reaches the chatbot:
              </p>

              {/* Verdict Rows */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-3 p-2 bg-black/30 border border-white/5 rounded">
                  <span className="px-2.5 py-0.5 bg-[#00C896] text-black font-display text-[9px] font-black rounded tracking-widest shrink-0">
                    SAFE
                  </span>
                  <span className="font-sans text-xs text-white/80">passed through normally to the chatbot</span>
                </div>

                <div className="flex items-center gap-3 p-2 bg-black/30 border border-white/5 rounded">
                  <span className="px-2.5 py-0.5 bg-red-500 text-white font-display text-[9px] font-black rounded tracking-widest shrink-0">
                    ATTACK
                  </span>
                  <span className="font-sans text-xs text-white/80">intercepted and blocked before any response</span>
                </div>
              </div>
            </div>
          </div>

          {/* Attack type pills */}
          <div>
            <div className="font-mono text-[8px] text-white/40 tracking-wider uppercase mb-2">Targeted Threat Vectors</div>
            <div className="flex flex-wrap gap-1.5">
              {["Jailbreaks", "Prompt Injection", "Role-Override", "PII Leakage", "Emotional Manipulation"].map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 border border-cyber-teal/30 bg-cyber-teal/5 text-cyber-teal font-mono text-[9px] rounded uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

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
            30 // 38
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
