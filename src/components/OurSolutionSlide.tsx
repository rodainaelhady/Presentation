import { motion } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Layout, 
  Cpu, 
  Eye, 
  Layers 
} from 'lucide-react';

interface OurSolutionSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function OurSolutionSlide({ onNext, onPrev }: OurSolutionSlideProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[70] flex flex-col justify-between p-6 md:p-8 lg:p-10 text-white pointer-events-auto bg-cyber-bg overflow-y-auto lg:overflow-hidden select-none"
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
      <div className="flex justify-between items-center border-b border-cyber-orange/10 pb-2.5 mb-2.5 shrink-0">
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50">
          SLIDE 07 // 28
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
        className="mb-2 shrink-0"
      >
        <h2 className="text-2xl md:text-3xl font-display font-black tracking-tight glow-orange mb-1 italic uppercase">
          Frontend Architecture
        </h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-[1px] w-48 bg-cyber-orange origin-left shadow-[0_0_8px_#FF4B00] mt-1"
        />
      </motion.div>

      {/* Compact Bento Grid - Made wider with larger text */}
      <div className="flex-1 min-h-0 flex items-center justify-center py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-6xl">
          
          {/* Card 1: Modern UI */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12 }}
            className="p-5 border border-white/5 bg-[#0D121F]/40 rounded-xl flex flex-col justify-between group relative overflow-hidden min-h-[170px] hover:border-cyber-orange/25 transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded bg-cyber-orange/10 border border-cyber-orange/20 text-cyber-orange">
                  <Layout size={18} />
                </div>
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest font-bold">01 // Visual Design</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-sans text-[15px] md:text-[16px] font-black tracking-wider text-white uppercase group-hover:text-cyber-orange transition-colors">
                  Modern UI
                </h3>
                <p className="font-sans text-[12.5px] md:text-[13px] text-white/70 font-light leading-relaxed">
                  Modern and user-friendly interface using a professional high-contrast dark palette and responsive layouts.
                </p>
              </div>
            </div>

            {/* Visual preview: Miniature HUD bar */}
            <div className="mt-4 p-2 bg-black/40 border border-white/5 rounded flex items-center justify-between gap-2.5 font-mono text-[9px]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden relative">
                <div className="absolute top-0 left-0 bottom-0 w-3/5 bg-cyber-orange rounded-full" />
              </div>
              <span className="text-cyber-orange/70 text-[7.5px] tracking-[0.15em] font-bold">ACTIVE // V1</span>
            </div>
            
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/10 group-hover:border-cyber-orange/30 transition-colors" />
          </motion.div>

          {/* Card 2: Real-Time Sync */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.18 }}
            className="p-5 border border-white/5 bg-[#0D121F]/40 rounded-xl flex flex-col justify-between group relative overflow-hidden min-h-[170px] hover:border-cyber-orange/25 transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded bg-cyber-orange/10 border border-cyber-orange/20 text-cyber-orange">
                  <Cpu size={18} />
                </div>
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest font-bold">02 // Data Stream</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-sans text-[15px] md:text-[16px] font-black tracking-wider text-white uppercase group-hover:text-cyber-orange transition-colors">
                  Real-Time Sync
                </h3>
                <p className="font-sans text-[12.5px] md:text-[13px] text-white/70 font-light leading-relaxed">
                  Seamless stream synchronization and real-time communication with backend security evaluators.
                </p>
              </div>
            </div>

            {/* Visual preview: Latency HUD element */}
            <div className="mt-4 p-2 bg-black/40 border border-white/5 rounded flex justify-between items-center font-mono text-[9px]">
              <span className="text-white/45 uppercase text-[8px] tracking-wider">RTT Latency</span>
              <span className="text-cyber-orange font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-cyber-orange rounded-full animate-ping" />
                14 ms
              </span>
            </div>

            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/10 group-hover:border-cyber-orange/30 transition-colors" />
          </motion.div>

          {/* Card 3: Live Visualization */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.24 }}
            className="p-5 border border-white/5 bg-[#0D121F]/40 rounded-xl flex flex-col justify-between group relative overflow-hidden min-h-[170px] hover:border-cyber-orange/25 transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded bg-cyber-orange/10 border border-cyber-orange/20 text-cyber-orange">
                  <Eye size={18} />
                </div>
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest font-bold">03 // Analytical View</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-sans text-[15px] md:text-[16px] font-black tracking-wider text-white uppercase group-hover:text-cyber-orange transition-colors">
                  Live Visualization
                </h3>
                <p className="font-sans text-[12.5px] md:text-[13px] text-white/70 font-light leading-relaxed">
                  Real-time visual monitoring charts tracking threat scores, classification rates, and live detection payloads.
                </p>
              </div>
            </div>

            {/* Visual preview: Miniature animated monitoring bars */}
            <div className="mt-4 flex items-end gap-1.5 h-7 pt-1 border-b border-white/5">
              {[40, 75, 55, 90, 35, 60, 85, 50, 70, 95, 40, 65, 80].map((val, idx) => (
                <div key={idx} className="flex-1 bg-white/5 rounded-t h-full relative overflow-hidden">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${val}%` }}
                    transition={{ duration: 1.2, delay: idx * 0.04, repeat: Infinity, repeatType: 'reverse' }}
                    className="absolute bottom-0 left-0 right-0 bg-cyber-orange/80"
                  />
                </div>
              ))}
            </div>

            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/10 group-hover:border-cyber-orange/30 transition-colors" />
          </motion.div>

          {/* Card 4: Scalable Architecture */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="p-5 border border-white/5 bg-[#0D121F]/40 rounded-xl flex flex-col justify-between group relative overflow-hidden min-h-[170px] hover:border-cyber-orange/25 transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded bg-cyber-orange/10 border border-cyber-orange/20 text-cyber-orange">
                  <Layers size={18} />
                </div>
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest font-bold">04 // System Robustness</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-sans text-[15px] md:text-[16px] font-black tracking-wider text-white uppercase group-hover:text-cyber-orange transition-colors">
                  Scalable Architecture
                </h3>
                <p className="font-sans text-[12.5px] md:text-[13px] text-white/70 font-light leading-relaxed">
                  Robust component-based implementation structure leveraging modern React hook modules to preserve flexibility.
                </p>
              </div>
            </div>

            {/* Visual preview: Miniature flow hierarchy */}
            <div className="mt-4 flex items-center justify-between gap-1.5 font-mono text-[9px] text-white/50">
              <span className="px-2 py-0.5 bg-[#151D30] rounded border border-white/5 truncate font-medium">React View</span>
              <span className="text-cyber-orange font-bold">&rarr;</span>
              <span className="px-2 py-0.5 bg-cyber-orange/10 rounded border border-cyber-orange/20 text-cyber-orange truncate font-bold">Hooks</span>
              <span className="text-cyber-orange font-bold">&rarr;</span>
              <span className="px-2 py-0.5 bg-[#151D30] rounded border border-white/5 truncate font-medium">API Proxy</span>
            </div>

            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/10 group-hover:border-cyber-orange/30 transition-colors" />
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
            07 // 28
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
