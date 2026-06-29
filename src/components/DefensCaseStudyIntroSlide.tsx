import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function DefensCaseStudyIntroSlide({ onNext, onPrev }: SlideProps) {
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
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-teal/40" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-teal/40" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyber-teal/40" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-teal/40" />
        </div>
        
        {/* Cinematic Scan lines */}
        <div className="absolute inset-0 flex flex-col justify-around opacity-[0.08] pointer-events-none">
          <div className="h-[2px] w-full bg-cyber-orange" />
          <div className="h-[2px] w-full bg-cyber-orange" />
          <div className="h-[2px] w-full bg-cyber-orange" />
          <div className="h-[2px] w-full bg-cyber-orange" />
        </div>
      </div>

      {/* Header Bar */}
      <div className="flex justify-between items-center border-b border-cyber-orange/15 pb-2.5 mb-2 shrink-0 relative z-30">
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50">
          SLIDE 29 // 34
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          29 // CASE STUDY
        </div>
      </div>

      {/* Cinematic Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 z-20">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-mono text-xs md:text-sm tracking-[0.4em] text-cyber-teal uppercase font-bold mb-4"
        >
          QUANTAI-GUARD // REAL-WORLD APPLICATION
        </motion.div>

        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
          className="font-display text-7xl md:text-9xl font-black tracking-tighter text-white uppercase italic select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          CASE STUDY
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-sans text-lg md:text-2xl italic font-light text-white/70 max-w-2xl mt-4"
        >
          A Defensive Intelligence Layer for Adversarial Prompt Detection
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-sans text-sm md:text-lg italic font-normal text-cyber-teal uppercase tracking-widest mt-1.5"
        >
          in Mental-Health Conversational AI
        </motion.p>

        {/* 3 stat pills row */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <div className="px-6 py-2 border border-cyber-orange/40 bg-cyber-bg/80 rounded font-mono text-xs text-cyber-orange font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(255,75,0,0.05)]">
            73,637 Samples
          </div>
          <div className="px-6 py-2 border border-[#00C896]/40 bg-cyber-bg/80 rounded font-mono text-xs text-[#00C896] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,200,150,0.05)]">
            AUC 0.9966
          </div>
          <div className="px-6 py-2 border border-cyber-teal/40 bg-cyber-bg/80 rounded font-mono text-xs text-cyber-teal font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,180,216,0.05)]">
            F1 = 99.56%
          </div>
        </motion.div>
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
            29 // 34
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
