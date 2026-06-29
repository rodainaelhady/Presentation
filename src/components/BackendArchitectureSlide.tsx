import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, Database, Shield, Eye, HelpCircle } from 'lucide-react';

interface BackendArchitectureSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const FLOW_ROWS = [
  { color: '#00B4D8', label: 'User', sub: 'initiates requests' },
  { color: '#FF4B00', label: 'Frontend UI', sub: 'web interface layer' },
  { color: '#00C896', label: 'PHP Backend', sub: '+ Python AI modules' },
  { color: '#F59E0B', label: 'MySQL Database', sub: 'persistent storage' }
];

const COMP_ITEMS = [
  { color: '#00B4D8', text: 'Authentication System' },
  { color: '#FF4B00', text: 'User Dashboard' },
  { color: '#00C896', text: 'AI Security Engine' },
  { color: '#F59E0B', text: 'Attack Testing Module' },
  { color: '#FF2D2D', text: 'Risk Assessment Engine' }
];

export function BackendArchitectureSlide({ onNext, onPrev }: BackendArchitectureSlideProps) {
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
          SLIDE 25 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 3 // BACKEND ARCHITECTURE & COMPONENTS
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-0.5 italic uppercase">
          Two Languages. <span className="text-cyber-orange glow-orange">One Secure Backend.</span>
        </h2>
        <p className="font-sans text-[11px] text-[#8892A4] max-w-4xl leading-relaxed mt-1">
          A PHP + Python hybrid architecture delivering a secure, scalable, AI-driven security evaluation platform with full MySQL integration.
        </p>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 items-center z-20 py-2">
        
        {/* LEFT CARD — System Flow */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="border border-[#00B4D8]/30 bg-[#161B22]/60 rounded-xl p-5 md:p-6 transition-all hover:border-[#00B4D8]/50 flex flex-col justify-between h-full"
        >
          <div>
            <div className="font-mono text-[9px] tracking-[0.3em] text-[#00B4D8] font-bold uppercase mb-4">
              SYSTEM FLOW
            </div>
            
            <div className="space-y-3.5">
              {FLOW_ROWS.map((row, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  {/* Left colored bar */}
                  <div 
                    className="w-1.5 h-10 rounded-full shrink-0"
                    style={{ backgroundColor: row.color, boxShadow: `0 0 10px ${row.color}50` }}
                  />
                  <div>
                    <h4 className="font-sans text-[12px] font-bold uppercase tracking-wider" style={{ color: row.color }}>
                      {row.label}
                    </h4>
                    <p className="font-sans text-[10.5px] text-[#8892A4]">
                      {row.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT CARD — Core Components */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="border border-cyber-orange/30 bg-[#161B22]/60 rounded-xl p-5 md:p-6 transition-all hover:border-cyber-orange/50 flex flex-col justify-between h-full"
        >
          <div>
            <div className="font-mono text-[9px] tracking-[0.3em] text-cyber-orange font-bold uppercase mb-4">
              CORE COMPONENTS
            </div>

            <div className="space-y-3.5">
              {COMP_ITEMS.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  <div 
                    className="w-3.5 h-3.5 rounded shrink-0"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}40` }}
                  />
                  <h4 className="font-sans text-[12px] font-bold text-white uppercase tracking-wider">
                    {item.text}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* 3 mini tag pills inline */}
      <div className="grid grid-cols-3 gap-3 my-2 z-20 shrink-0">
        <div className="bg-[#0D1117] border border-cyber-border rounded-full py-1.5 px-3 text-center">
          <span className="font-mono text-[9px] text-[#00B4D8] uppercase tracking-wider font-semibold">
            PHP + Python Hybrid
          </span>
        </div>
        <div className="bg-[#0D1117] border border-cyber-border rounded-full py-1.5 px-3 text-center">
          <span className="font-mono text-[9px] text-[#F59E0B] uppercase tracking-wider font-semibold">
            MySQL Integration
          </span>
        </div>
        <div className="bg-[#0D1117] border border-cyber-border rounded-full py-1.5 px-3 text-center">
          <span className="font-mono text-[9px] text-cyber-orange uppercase tracking-wider font-semibold">
            AI-Powered Security
          </span>
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
                25 // 28
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
