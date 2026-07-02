import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, AlertTriangle } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function WhyMentalHealthAISlide({ onNext, onPrev }: SlideProps) {
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
          SLIDE 35 // 38
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          35 // WHY MENTAL HEALTH AI?
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-0.5 italic uppercase">
          1 in 8 People. <span className="text-cyber-orange glow-orange">Not Enough Help.</span>
        </h2>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
          The critical need and dangerous stakes of conversational mental health AI
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 py-1 z-20 items-stretch">
        
        {/* Left Column — The Crisis & High Stakes */}
        <motion.div
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="p-5 border border-cyber-teal/30 bg-cyber-teal/5 rounded-lg flex flex-col justify-between relative overflow-hidden group hover:border-cyber-teal/50 transition-all duration-300"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyber-teal" />
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded border border-cyber-teal/30 bg-cyber-teal/10 text-cyber-teal">
                <AlertTriangle size={14} />
              </div>
              <h3 className="font-mono text-[10px] tracking-[0.3em] font-bold text-cyber-teal uppercase">
                THE GLOBAL CRISIS
              </h3>
            </div>

            <div>
              <p className="font-sans text-xs md:text-sm text-white/80 leading-relaxed font-light mb-4">
                The global mental health crisis is accelerating — yet access to professional support remains limited by cost, stigma, and geography. AI chatbots have emerged as a scalable first-line resource: 24/7 availability, zero judgment.
              </p>
            </div>

            <div className="border-t border-white/5 pt-3">
              <h4 className="font-mono text-[9px] text-red-400 font-bold tracking-widest uppercase mb-2.5">
                WHY THIS IS HIGH-STAKES
              </h4>
              
              <ul className="space-y-3 font-sans text-xs text-white/80 leading-relaxed font-light">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-3 bg-red-500 rounded-sm shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Jailbreaks</strong> can force unsafe self-harm content from a supportive model
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-3 bg-red-500 rounded-sm shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">PII leakage</strong> exposes sensitive personal disclosures shared in therapy conversations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-3 bg-red-500 rounded-sm shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Emotional manipulation</strong> exploits the trust-based tone to coerce dangerous responses
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5 p-3 border border-red-500/20 bg-red-950/10 rounded font-sans text-xs italic text-red-400 leading-relaxed font-medium">
            A manipulated response isn't a technical failure — it can cause real harm.
          </div>
        </motion.div>

        {/* Right Column — Statistics Stack */}
        <div className="flex flex-col justify-between gap-4">
          
          {/* Stat 1 */}
          <motion.div
            initial={{ x: 25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="p-4 border border-cyber-orange/30 bg-cyber-orange/5 rounded-lg hover:border-cyber-orange/50 transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-center text-center"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyber-orange" />
            <div className="font-display text-4xl md:text-5xl font-black text-cyber-orange mb-1">
              1 in 8
            </div>
            <p className="font-sans text-xs text-white/70 font-light max-w-sm">
              people worldwide affected by mental health disorders (WHO)
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ x: 25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-4 border border-cyber-teal/30 bg-cyber-teal/5 rounded-lg hover:border-cyber-teal/50 transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-center text-center"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyber-teal" />
            <div className="font-display text-4xl md:text-5xl font-black text-cyber-teal mb-1">
              75%
            </div>
            <p className="font-sans text-xs text-white/70 font-light max-w-sm">
              receive no treatment — AI bridges the accessibility gap
            </p>
          </motion.div>

          {/* Gap Card */}
          <motion.div
            initial={{ x: 25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="p-4 border border-white/10 bg-[#161b22]/40 rounded-lg hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded font-mono text-[9px] text-amber-500 font-bold uppercase tracking-wider">
                NO EXISTING FRAMEWORK
              </span>
            </div>
            <p className="font-sans text-xs text-white/60 leading-relaxed font-light mt-2.5">
              No open framework stress-tests LLMs specifically in mental health — QuantAI-Guard fills this gap.
            </p>
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
            35 // 38
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
