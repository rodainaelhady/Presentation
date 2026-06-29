import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface AgendaSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const agendaItems = [
  {
    part: "01",
    section: "Title Slide — Project Identity & Research Team",
    slides: "Slide 01"
  },
  {
    part: "02",
    section: "Agenda — Presentation Overview",
    slides: "Slide 02"
  },
  {
    part: "03",
    section: "Problem Statement — LLM Vulnerabilities & Security Challenges",
    slides: "Slide 03"
  },
  {
    part: "04",
    section: "Attack Examples — Jailbreaks, Leaks & Conversational Hazards",
    slides: "Slide 04"
  },
  {
    part: "05",
    section: "Real-World Impact — Attack Flow & Safety Compromises",
    slides: "Slide 05"
  },
  {
    part: "06",
    section: "Gaps in Existing Systems — Strategic & Defense Limitations",
    slides: "Slide 06"
  },
  {
    part: "07",
    section: "Our Solution — The QuantAI-Guard Guardrail Framework",
    slides: "Slide 07"
  },
  {
    part: "08",
    section: "System Architecture — Intelligent Multi-Station Processing",
    slides: "Slide 08"
  },
  {
    part: "09",
    section: "Attack Generation System (AGS) — Automated Red Teaming Pipeline",
    slides: "Slides 09–14"
  },
  {
    part: "10",
    section: "Attack Classifier Model — Multi-Class Neural Threat Evaluation",
    slides: "Slides 15–20"
  }
];

export function AgendaSlide({ onNext, onPrev }: AgendaSlideProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[70] flex flex-col p-8 md:p-12 overflow-hidden text-white pointer-events-auto bg-cyber-bg"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-[-1]">
        <div className="absolute inset-0 bg-cyber-bg/90 backdrop-blur-xl" />
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-8 border border-cyber-orange/5 pointer-events-none"
        >
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyber-orange/30" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyber-orange/30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-cyber-orange/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyber-orange/30" />
        </motion.div>
      </div>

      {/* Header Bar */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex justify-between items-center border-b border-cyber-orange/20 pb-3 mb-4 shrink-0"
      >
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/60">
          SLIDE 02 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/60 uppercase">
          PRESENTATION OVERVIEW
        </div>
      </motion.div>

      {/* Title Area */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-4 shrink-0"
      >
        <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight glow-orange mb-1.5 italic uppercase">Agenda</h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-[1px] w-48 bg-cyber-orange origin-left shadow-[0_0_8px_#FF4B00]"
        />
      </motion.div>

      {/* Agenda Table */}
      <div className="flex-1 max-w-6xl mx-auto w-full min-h-0 overflow-hidden flex flex-col">
        <div className="w-full border-collapse flex flex-col h-full">
          {/* Table Header */}
          <div className="grid grid-cols-[80px_1fr_100px] border-b border-cyber-orange/40 pb-2 mb-2 shrink-0">
            <span className="font-mono text-[10px] text-cyber-orange tracking-widest uppercase">Part</span>
            <span className="font-mono text-[10px] text-cyber-orange tracking-widest uppercase">Section</span>
            <span className="font-mono text-[10px] text-cyber-orange tracking-widest uppercase text-right">Slides</span>
          </div>

          {/* Table Body */}
          <div className="flex-1 flex flex-col justify-between min-h-0 overflow-y-auto pr-1">
            {agendaItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + (idx * 0.05) }}
                className={cn(
                  "grid grid-cols-[80px_1fr_100px] py-1.5 px-2 items-center group transition-all duration-300 border-l-0 hover:border-l-2 hover:border-cyber-orange hover:bg-cyber-orange/5",
                  idx % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                )}
              >
                <div className="flex items-center">
                  {item.part !== "—" ? (
                    <span className="font-display text-[8.5px] px-1.5 py-0.5 bg-cyber-orange/20 border border-cyber-orange/30 text-cyber-orange rounded-sm">
                      {item.part}
                    </span>
                  ) : (
                    <span className="font-mono text-xs opacity-20 ml-4">—</span>
                  )}
                </div>
                <div className="font-sans text-[11px] md:text-xs text-white/80 group-hover:text-white transition-colors leading-tight pr-8">
                  {item.section}
                </div>
                <div className="font-mono text-[9px] text-cyber-orange/80 text-right group-hover:glow-orange italic">
                  {item.slides}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Nav Bar */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="flex justify-between items-center border-t border-cyber-orange/10 pt-6 mt-8 relative z-[80]"
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
                02 / 28
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
