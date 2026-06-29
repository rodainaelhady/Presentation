import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, Shield, Zap, EyeOff, HeartCrack, ChevronDown } from 'lucide-react';

interface AGSAttackCategoriesSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const CATEGORIES = [
  {
    icon: Shield,
    title: "Jailbreak",
    accent: "#7C3AED",
    bgAccent: "rgba(124, 58, 237, 0.1)",
    body: "Bypasses alignment via role-play, hypothetical scenarios & authority impersonation.",
    tag: "~54,700 records · 15 templates"
  },
  {
    icon: Zap,
    title: "Prompt Injection",
    accent: "#06B6D4",
    bgAccent: "rgba(6, 182, 212, 0.1)",
    body: "Embeds adversarial instructions in user input to override system-level safety guidelines.",
    tag: "~54,700 records · 15 templates"
  },
  {
    icon: EyeOff,
    title: "PII Leakage",
    accent: "#F59E0B",
    bgAccent: "rgba(245, 158, 11, 0.1)",
    body: "Evaluates potential disclosure of sensitive personal information under strategic prompts.",
    tag: "~54,700 records · 12 templates"
  },
  {
    icon: HeartCrack,
    title: "Self-Harm",
    accent: "#EF4444",
    bgAccent: "rgba(239, 68, 68, 0.1)",
    body: "Evaluates model responses to self-harm scenarios for robust guardrail training.",
    tag: "~54,762 records · 12 templates"
  }
];

const TIERS = [
  { name: "EXTREME", pct: "35%", color: "#EF4444" },
  { name: "HIGH", pct: "35%", color: "#F59E0B" },
  { name: "MEDIUM", pct: "20%", color: "#A855F7" },
  { name: "LOW", pct: "10%", color: "#10B981" }
];

export function AGSAttackCategoriesSlide({ onNext, onPrev }: AGSAttackCategoriesSlideProps) {
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
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Header Bar */}
      <div className="flex justify-between items-center border-b border-cyber-orange/15 pb-2.5 mb-2 shrink-0 relative z-30">
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50">
          SLIDE 12 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 2 // ATTACK CATEGORIES & METHODOLOGY
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight glow-orange mb-0.5 italic uppercase">
          Attack Categories & Methodology
        </h2>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
          Four adversarial threat vectors &middot; Six-stage difficulty pipeline
        </p>
      </div>

      {/* Main Grid Content */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-center py-2 relative z-20">
        
        {/* Left Column: 4 Categories Stacked (7/12 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-2">
          {CATEGORIES.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + idx * 0.08 }}
                whileHover={{ x: 2, borderColor: `${cat.accent}30` }}
                className="p-3 border border-white/5 bg-[#161b22]/40 rounded-lg flex items-center justify-between gap-3 relative overflow-hidden transition-all duration-300 group"
              >
                {/* Accent strip */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ backgroundColor: cat.accent }} />

                <div className="flex items-start gap-3">
                  {/* Icon Frame */}
                  <div 
                    className="p-2 rounded border shrink-0 mt-0.5 transition-colors" 
                    style={{ 
                      borderColor: `${cat.accent}30`, 
                      backgroundColor: cat.bgAccent,
                      color: cat.accent
                    }}
                  >
                    <IconComponent size={14} />
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="font-display text-[11px] md:text-[12px] font-black uppercase tracking-wider text-white">
                      {cat.title}
                    </h3>
                    <p className="font-sans text-[10px] md:text-[11px] text-white/70 font-light leading-relaxed max-w-[400px]">
                      {cat.body}
                    </p>
                  </div>
                </div>

                {/* Meta Tag Pill */}
                <span 
                  className="px-2 py-0.5 border font-mono text-[8px] md:text-[9px] font-bold rounded-full shrink-0 tracking-wider text-white/90"
                  style={{ 
                    borderColor: `${cat.accent}50`,
                    backgroundColor: `${cat.accent}15`
                  }}
                >
                  {cat.tag}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Difficulty Pipeline (5/12 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-1.5 border border-white/5 bg-[#0d121f]/30 p-4 rounded-xl self-stretch justify-center relative">
          <span className="font-mono text-[8px] text-white/40 uppercase tracking-widest font-bold mb-0.5 block">
            DIFFICULTY PIPELINE
          </span>

          <div className="flex flex-col space-y-1 relative">
            {TIERS.map((tier, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + idx * 0.08 }}
                  className="w-full py-1.5 px-3 border border-white/5 bg-[#161b22]/50 rounded-md flex justify-between items-center relative overflow-hidden group hover:border-white/10 transition-colors"
                >
                  {/* Left color ribbon */}
                  <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: tier.color }} />

                  <span className="font-display text-[10px] font-black tracking-wider" style={{ color: tier.color }}>
                    {tier.name}
                  </span>
                  
                  <span className="font-mono text-[9px] md:text-[10px] font-bold" style={{ color: tier.color }}>
                    {tier.pct}
                  </span>
                </motion.div>

                {/* Flow arrow */}
                {idx < TIERS.length - 1 && (
                  <ChevronDown size={11} className="text-white/20 my-0.5 shrink-0 animate-bounce" />
                )}
              </div>
            ))}
          </div>

          <p className="font-sans text-[9px] text-white/40 mt-2 text-right italic leading-none">
            Success score [0–1] &rarr; discrete difficulty tier
          </p>
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
                12 // 28
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
