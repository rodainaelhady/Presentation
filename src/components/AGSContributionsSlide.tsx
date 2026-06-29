import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, Brain, BarChart3, ShieldAlert, Award, FileText, Compass } from 'lucide-react';

interface AGSContributionsSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const TOP_CARDS = [
  {
    icon: Brain,
    title: "Safety Classifier Training",
    accent: "#7C3AED",
    bgAccent: "rgba(124, 58, 237, 0.1)",
    body: "Difficulty labels enable curriculum learning from Low &rarr; Extreme adversarial examples to strengthen target safety parameters incrementally."
  },
  {
    icon: BarChart3,
    title: "Robustness Benchmarking",
    accent: "#06B6D4",
    bgAccent: "rgba(6, 182, 212, 0.1)",
    body: "Stratified evaluation across 4 distinct difficulty tiers produces high-fidelity, granular security and alignment model robustness profiles."
  },
  {
    icon: ShieldAlert,
    title: "Automated Red Teaming",
    accent: "#10B981",
    bgAccent: "rgba(16, 185, 129, 0.1)",
    body: "Enables continuous vulnerability discovery during fine-tuning stages by routing live target endpoints through the automated generation loop."
  }
];

const BOTTOM_CARDS = [
  {
    icon: Award,
    title: "Guardrail Development",
    accent: "#F59E0B",
    bgAccent: "rgba(245, 158, 11, 0.08)",
    body: "Provides high-density adversarial test cases to validate filters and input/output guardrails."
  },
  {
    icon: FileText,
    title: "Research Dataset Publication",
    accent: "#A855F7",
    bgAccent: "rgba(168, 85, 247, 0.08)",
    body: "218,862 records across 4 categories and 4 difficulty tiers as an open-access community benchmark contribution."
  }
];

export function AGSContributionsSlide({ onNext, onPrev }: AGSContributionsSlideProps) {
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
          SLIDE 14 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 2 // APPLICATIONS & CONTRIBUTION
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight glow-orange mb-0.5 italic uppercase">
          Applications & Contribution
        </h2>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
          Enabling scalable AI safety evaluation across the research pipeline
        </p>
      </div>

      {/* 3 Columns Top Row (Top Row) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 shrink-0 relative z-20">
        {TOP_CARDS.map((card, idx) => {
          const IconComp = card.icon;
          return (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + idx * 0.08 }}
              whileHover={{ y: -2, borderColor: `${card.accent}30` }}
              className="p-3 border border-white/5 bg-[#161b22]/40 rounded-lg relative overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded border" style={{ borderColor: `${card.accent}30`, backgroundColor: card.bgAccent, color: card.accent }}>
                    <IconComp size={13} />
                  </div>
                  <h3 className="font-display text-[10.5px] md:text-[11px] font-black uppercase tracking-wider text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="font-sans text-[10.5px] md:text-[11px] text-white/60 font-light leading-relaxed">
                  <span dangerouslySetInnerHTML={{ __html: card.body }} />
                </p>
              </div>
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: card.accent }} />
            </motion.div>
          );
        })}
      </div>

      {/* 2 Wide Columns Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 relative z-20">
        {BOTTOM_CARDS.map((card, idx) => {
          const IconComp = card.icon;
          return (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.08 }}
              whileHover={{ y: -1, borderColor: `${card.accent}20` }}
              className="p-3 border border-white/5 bg-[#161b22]/40 rounded-lg relative overflow-hidden transition-all duration-300 flex items-center gap-3"
            >
              <div className="p-2 rounded-full border shrink-0" style={{ borderColor: `${card.accent}25`, backgroundColor: card.bgAccent, color: card.accent }}>
                <IconComp size={15} />
              </div>

              <div className="space-y-0.5">
                <h3 className="font-display text-[11px] md:text-[11.5px] font-black uppercase tracking-wider text-white" style={{ color: card.accent }}>
                  {card.title}
                </h3>
                <p className="font-sans text-[10.5px] md:text-[11px] text-white/60 font-light leading-snug">
                  {card.body}
                </p>
              </div>
              <div className="absolute top-0 bottom-0 left-0 w-[2px]" style={{ backgroundColor: card.accent }} />
            </motion.div>
          );
        })}
      </div>

      {/* Living Bottom Conclusion Banner */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="p-2.5 border border-cyber-orange/20 bg-cyber-orange/5 rounded-lg flex items-center gap-2.5 relative z-20 overflow-hidden shrink-0"
      >
        <div className="p-1 rounded bg-cyber-orange/15 text-cyber-orange animate-pulse shrink-0">
          <Compass size={14} />
        </div>
        <p className="font-sans text-[10.5px] md:text-[11px] text-white/80 leading-relaxed italic">
          &quot;AGS demonstrates that large-scale adversarial corpora can be synthesized from modest seed data at ultra-high throughput &mdash; making AI safety evaluation scalable, systematic, and reproducible.&quot;
        </p>
        {/* Pulsing indicator */}
        <span className="absolute top-2 right-3 flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-orange opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyber-orange"></span>
        </span>
      </motion.div>

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
                14 // 28
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
