import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, Terminal, Sparkles, Cpu, Layers } from 'lucide-react';

interface AGSIntroSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function AGSIntroSlide({ onNext, onPrev }: AGSIntroSlideProps) {
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
        
        {/* Subtle Horizontal Scanlines */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px]" />
      </div>

      {/* Header Bar */}
      <div className="flex justify-between items-center border-b border-cyber-orange/15 pb-2.5 mb-2 shrink-0 relative z-30">
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50">
          SLIDE 09 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 2 // ATTACK GENERATION SYSTEM
        </div>
      </div>

      {/* Main Cinematic Visual Area */}
      <div className="flex-1 flex flex-col items-center justify-center py-2 relative z-20">
        
        {/* Holographic Printer/Generator Visual Element */}
        <div className="relative w-64 h-32 md:h-44 mb-3 flex items-center justify-center">
          {/* Printer frame */}
          <div className="absolute w-44 h-24 md:w-48 md:h-32 border border-cyber-orange/20 bg-[#0d121f]/60 rounded-md shadow-[0_0_30px_rgba(255,75,0,0.05)]">
            {/* Top scanning bar */}
            <motion.div 
              animate={{ 
                y: [0, 80, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute left-0 right-0 h-[2px] bg-cyber-orange/80 shadow-[0_0_8px_#FF4B00] flex items-center justify-center z-10"
            >
              <div className="w-3 h-3 rounded-full bg-cyber-orange/30 border border-cyber-orange animate-ping" />
            </motion.div>

            {/* Glowing inner grid matrix */}
            <div className="absolute inset-1.5 border border-white/5 bg-black/40 rounded overflow-hidden flex flex-col justify-between p-1.5 font-mono text-[6px] md:text-[7px] text-cyber-orange/40">
              <div className="flex justify-between opacity-30">
                <span>[SYS_RUNNING]</span>
                <span>TEMP: 34.2°C</span>
              </div>
              
              <div className="flex flex-col items-center justify-center flex-1 py-0.5 gap-0.5">
                {/* Floating active prompts */}
                <motion.div 
                  animate={{ 
                    opacity: [0, 1, 0],
                    y: [10, -5, -15]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="text-white text-[7px] md:text-[8px] tracking-wider text-center"
                >
                  &gt; Ignore previous rules.
                </motion.div>
                <motion.div 
                  animate={{ 
                    opacity: [0, 1, 0],
                    y: [15, 0, -10]
                  }}
                  transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "linear" }}
                  className="text-cyber-orange text-[7px] md:text-[8px] tracking-wider text-center font-bold"
                >
                  &gt; RE-ROUTING PAYLOAD
                </motion.div>
              </div>

              <div className="flex justify-between opacity-30">
                <span>BATCH: 500/SEC</span>
                <span>RATE: 11.5K/S</span>
              </div>
            </div>
          </div>

          {/* Exterior mechanical support lines */}
          <div className="absolute left-4 right-4 h-[1px] bg-dashed border-t border-cyber-orange/15 pointer-events-none" />
          <div className="absolute top-1/4 bottom-1/4 w-[1px] bg-dashed border-l border-cyber-orange/15 pointer-events-none" />
        </div>

        {/* Content & Typography */}
        <div className="text-center space-y-2 max-w-2xl">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-1.5 border border-cyber-orange/30 rounded-full px-2.5 py-0.5 bg-cyber-orange/5 font-mono text-[9px] text-cyber-orange tracking-widest uppercase mb-1"
          >
            <Sparkles size={11} className="animate-pulse" />
            Core Extension Module
          </motion.div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-black tracking-[0.12em] text-white uppercase italic leading-none">
            ATTACK GENERATION SYSTEM
          </h1>
          
          <p className="text-xs md:text-sm text-cyber-orange/80 font-mono tracking-widest uppercase italic">
            Automated adversarial dataset synthesis at scale
          </p>

          <p className="text-[11px] md:text-xs text-white/60 max-w-lg mx-auto font-sans font-light leading-relaxed">
            A high-throughput generative orchestration framework designed to map security gaps, generate bulk test corpora, and reinforce guardrail alignment under diverse threat vectors.
          </p>
        </div>

        {/* Three Horizontal Info Pills */}
        <div className="grid grid-cols-3 gap-3 max-w-lg w-full mt-4 md:mt-6">
          {[
            { label: "22,264 Seeds", desc: "Base Input Data", color: "#FF4B00" },
            { label: "218,862 Attacks", desc: "Synthesized Output", color: "#A855F7" },
            { label: "10× Expansion", desc: "Dataset Scale Multiplier", color: "#00C896" }
          ].map((pill, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="p-2 border border-white/5 bg-[#161b22]/40 rounded-lg flex flex-col items-center justify-center text-center relative group hover:border-cyber-orange/20 transition-all duration-300"
            >
              <span className="font-display text-xs md:text-sm font-black tracking-wider text-white">
                {pill.label}
              </span>
              <span className="font-mono text-[7px] md:text-[8px] text-white/40 uppercase tracking-widest mt-0.5">
                {pill.desc}
              </span>
              <div 
                className="absolute bottom-0 left-1/4 right-1/4 h-[1.5px] rounded-t-full transition-colors duration-300" 
                style={{ backgroundColor: pill.color }}
              />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Footer Navigation Controls */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
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
                09 // 28
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
