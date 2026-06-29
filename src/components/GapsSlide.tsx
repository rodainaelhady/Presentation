import { motion } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Shield, 
  Terminal, 
  FileKey, 
  Cpu, 
  BarChart3, 
  Layers 
} from 'lucide-react';

interface GapsSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function GapsSlide({ onNext, onPrev }: GapsSlideProps) {
  const objectives = [
    {
      id: "obj-1",
      title: "Adversarial Protection",
      desc: "Protect LLM applications from advanced adversarial attacks.",
      icon: Shield,
      color: "border-red-500/20 text-red-400 bg-red-500/5 hover:border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.02)]"
    },
    {
      id: "obj-2",
      title: "Accurate Detection",
      desc: "Detect and classify malicious prompts with high accuracy.",
      icon: Terminal,
      color: "border-cyber-orange/20 text-cyber-orange bg-cyber-orange/5 hover:border-cyber-orange/40 shadow-[0_0_15px_rgba(255,75,0,0.02)]"
    },
    {
      id: "obj-3",
      title: "Data Leak Prevention",
      desc: "Prevent sensitive data disclosure and unsafe AI behavior.",
      icon: FileKey,
      color: "border-orange-500/20 text-orange-400 bg-orange-500/5 hover:border-orange-500/40 shadow-[0_0_15px_rgba(249,115,22,0.02)]"
    },
    {
      id: "obj-4",
      title: "Continuous Simulation",
      desc: "Continuously strengthen defenses through AI-generated attack simulation.",
      icon: Cpu,
      color: "border-yellow-500/20 text-yellow-400 bg-yellow-500/5 hover:border-yellow-500/40 shadow-[0_0_15px_rgba(234,179,8,0.02)]"
    },
    {
      id: "obj-5",
      title: "Real-Time Insights",
      desc: "Deliver real-time monitoring and actionable security insights.",
      icon: BarChart3,
      color: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5 hover:border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.02)]"
    },
    {
      id: "obj-6",
      title: "Scalable Architecture",
      desc: "Build a scalable and production-ready security framework.",
      icon: Layers,
      color: "border-blue-500/20 text-blue-400 bg-blue-500/5 hover:border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.02)]"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[70] flex flex-col justify-between p-6 md:p-10 lg:p-12 text-white pointer-events-auto bg-cyber-bg"
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
      </div>

      {/* Header Bar */}
      <div className="flex justify-between items-center border-b border-cyber-orange/10 pb-3 mb-4 shrink-0">
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50">
          SLIDE 06 // 28
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
        transition={{ delay: 0.3 }}
        className="mb-4 shrink-0"
      >
        <h2 className="text-2xl md:text-3xl font-display font-black tracking-tight glow-orange mb-1 italic uppercase">
          Objectives
        </h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-[1px] w-32 bg-cyber-orange shadow-[0_0_8px_#FF4B00] origin-left"
        />
      </motion.div>

      {/* Main Grid Content */}
      <div className="flex-1 min-h-0 flex items-center justify-center py-2 overflow-y-auto">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
            {objectives.map((obj, idx) => {
              const Icon = obj.icon;
              return (
                <motion.div 
                  key={obj.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className={`flex flex-col gap-4 p-5 rounded-xl border bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-300 group ${obj.color}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-white/[0.03] rounded-lg border border-white/5 shrink-0 group-hover:border-white/10 transition-colors">
                      <Icon size={20} className="transition-transform group-hover:scale-110 duration-300" />
                    </div>
                    <span className="font-mono text-[10px] text-white/20 tracking-widest font-bold">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-sans text-[15px] font-bold text-white/95 group-hover:text-white transition-colors">
                        {obj.title}
                      </h4>
                      <p className="font-sans text-[12.5px] text-white/60 leading-relaxed font-light mt-1">
                        {obj.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer / Nav Bar */}
      <div className="flex justify-between items-center border-t border-cyber-orange/10 pt-4 mt-4 shrink-0 relative z-[80]">
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
                06 / 28
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
      </div>
    </motion.div>
  );
}
