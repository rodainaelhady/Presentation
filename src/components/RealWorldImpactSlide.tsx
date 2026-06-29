import { motion } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Activity, 
  Zap, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

interface RealWorldImpactSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function RealWorldImpactSlide({ onNext, onPrev }: RealWorldImpactSlideProps) {
  const corePillars = [
    {
      title: "AI-Powered Malicious Prompt Detection",
      icon: ShieldAlert,
      tag: "PRE-INFERENCE",
      desc: "Intercepts and blocks adversarial queries before they reach the model.",
      color: "border-cyber-orange/20 text-cyber-orange bg-cyber-orange/5 hover:border-cyber-orange/40"
    },
    {
      title: "Fine-Grained Attack Classification",
      icon: Layers,
      tag: "INFERENCE",
      desc: "Categorizes intent using a fine-tuned 4-class multi-label model.",
      color: "border-cyber-orange/20 text-cyber-orange bg-cyber-orange/5 hover:border-cyber-orange/40"
    },
    {
      title: "Continuous Adversarial Attack Generation",
      icon: Cpu,
      tag: "SIMULATION",
      desc: "Uses evolutionary red-teaming to actively stress-test model defenses.",
      color: "border-cyber-orange/20 text-cyber-orange bg-cyber-orange/5 hover:border-cyber-orange/40"
    },
    {
      title: "Real-Time Monitoring & Security Analytics",
      icon: Activity,
      tag: "POST-INFERENCE",
      desc: "Provides continuous analytical logs and global threat indicators.",
      color: "border-cyber-orange/20 text-cyber-orange bg-cyber-orange/5 hover:border-cyber-orange/40"
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
        {/* Subtle grid line background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Header Bar */}
      <div className="flex justify-between items-center border-b border-cyber-orange/10 pb-3 mb-4 shrink-0">
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50">
          SLIDE 05 // 28
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
          The Solution
        </h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-[1px] w-32 bg-cyber-orange shadow-[0_0_8px_#FF4B00] origin-left"
        />
      </motion.div>

      {/* Main Grid Content */}
      <div className="flex-1 min-h-0 flex items-center justify-center py-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl items-center">
          
          {/* Left Column: High-Impact Solution Statement */}
          <motion.div 
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-cyber-orange animate-pulse" size={20} />
                <span className="font-mono text-[11px] tracking-[0.3em] text-cyber-orange uppercase font-medium">
                  Active Protection Framework
                </span>
              </div>
              
              <p className="font-sans text-[16px] md:text-[18px] lg:text-[20px] text-white/95 leading-relaxed font-light">
                QuantAI-Guard introduces a <strong className="text-cyber-orange font-semibold">multi-layer AI security architecture</strong> that protects LLMs before, during, and after inference.
              </p>
            </div>

            <div className="h-[1px] bg-cyber-orange/10 w-full" />

            {/* Pipeline Visual Diagram */}
            <div className="bg-white/[0.01] border border-white/5 p-4 rounded-lg space-y-3">
              <div className="flex justify-between items-center text-[10px] font-mono text-white/40">
                <span>PROTECTION SEQUENCE</span>
                <span className="text-cyber-orange font-bold">SECURE PIPELINE</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="p-2 bg-white/[0.02] border border-white/10 rounded">
                  <div className="text-[10px] text-white/40 mb-1">STAGE 1</div>
                  <div className="text-white/80 font-bold truncate">PRE</div>
                  <div className="text-[8px] text-white/30 mt-0.5">Prompt filter</div>
                </div>
                <div className="p-2 bg-cyber-orange/5 border border-cyber-orange/20 rounded relative">
                  <div className="text-[10px] text-cyber-orange/50 mb-1">STAGE 2</div>
                  <div className="text-cyber-orange font-bold truncate">DURING</div>
                  <div className="text-[8px] text-cyber-orange/40 mt-0.5">Classification</div>
                </div>
                <div className="p-2 bg-cyber-orange/5 border border-cyber-orange/20 rounded">
                  <div className="text-[10px] text-cyber-orange/50 mb-1">STAGE 3</div>
                  <div className="text-cyber-orange font-bold truncate">AFTER</div>
                  <div className="text-[8px] text-cyber-orange/40 mt-0.5">Analytics</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean & Spacious Core Pillars */}
          <motion.div 
            initial={{ x: 25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-1">
              <Zap className="text-cyber-orange" size={16} />
              <span className="font-mono text-[11px] tracking-[0.3em] text-cyber-orange uppercase">
                Integrated Defense System
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {corePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className={`flex gap-4 p-4 rounded-lg border transition-all duration-300 ${pillar.color}`}
                  >
                    <div className="p-2 bg-white/[0.03] rounded-lg border border-white/5 shrink-0 h-fit">
                      <Icon size={20} className="text-cyber-orange" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-sans text-[14px] md:text-[15px] font-bold text-white/95 leading-none">
                          {pillar.title}
                        </h4>
                        <span className="font-mono text-[8px] px-1.5 py-0.5 bg-cyber-orange/10 border border-cyber-orange/20 rounded text-cyber-orange uppercase font-bold">
                          {pillar.tag}
                        </span>
                      </div>
                      <p className="font-sans text-[12px] text-white/60 leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Bottom Summary Ribbon inside the grid spanning both columns */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="p-4 bg-gradient-to-r from-cyber-orange/10 via-cyber-orange/5 to-transparent border border-cyber-orange/20 rounded-lg flex items-center gap-4 hover:border-cyber-orange/30 transition-all shadow-[0_4px_20px_rgba(255,75,0,0.05)]"
            >
              <div className="p-2 bg-cyber-orange/15 rounded text-cyber-orange shrink-0 border border-cyber-orange/20">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="font-sans text-[13px] md:text-[14px] text-white/90 leading-relaxed font-light">
                  This enables <strong className="text-cyber-orange font-semibold">proactive defense against emerging threats</strong> while maintaining accurate and reliable AI responses.
                </p>
              </div>
            </motion.div>
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
                05 // 28
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
