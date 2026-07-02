import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, Cpu, ShieldCheck, Settings } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function MeetAlbertSlide({ onNext, onPrev }: SlideProps) {
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
          SLIDE 36 // 38
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          36 // MEET ALBERT — THE CHATBOT
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-0.5 italic uppercase">
          Meet Albert. <span className="text-cyber-orange glow-orange">The Test Subject. The Real System.</span>
        </h2>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
          Production chatbot architecture deployed under hostile testing conditions
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 py-1 z-20 items-stretch">
        
        {/* Left Column — What is Albert (col-span-7) */}
        <motion.div
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-7 p-5 border border-cyber-teal/30 bg-cyber-teal/5 rounded-lg flex flex-col justify-between relative overflow-hidden group hover:border-cyber-teal/50 transition-all duration-300"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyber-teal" />
          
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded border border-cyber-teal/30 bg-cyber-teal/10 text-cyber-teal">
                <Cpu size={14} />
              </div>
              <h3 className="font-mono text-[10px] tracking-[0.3em] font-bold text-cyber-teal uppercase">
                WHAT IS ALBERT?
              </h3>
            </div>

            <div>
              <p className="font-sans text-xs md:text-sm text-white/80 leading-relaxed font-light mb-4">
                A full-stack mental health conversational AI built as the primary test subject for the QuantAI-Guard framework. Not a demo — a production-architecture chatbot deliberately exposed to adversarial conditions for real validation.
              </p>
            </div>

            {/* Tech Stack Sub-section */}
            <div className="border-t border-white/5 pt-3">
              <h4 className="font-mono text-[9px] text-cyber-orange font-bold tracking-widest uppercase mb-2">
                TECH STACK
              </h4>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  {["FastAPI · Python", "React + TypeScript", "SQLite · JWT Auth", "SSE Real-time Stream"].map((tech, idx) => (
                    <div key={idx} className="px-3 py-1.5 bg-[#0d1117] border border-white/5 rounded text-[10px] font-mono font-bold text-white/70 text-center uppercase tracking-wider">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {["LangChain · ChromaDB", "HuggingFace Embeddings", "LlamaGuard 3 · Ollama", "Tailwind CSS · Vite"].map((tech, idx) => (
                    <div key={idx} className="px-3 py-1.5 bg-[#0d1117] border border-white/5 rounded text-[10px] font-mono font-bold text-white/70 text-center uppercase tracking-wider">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Security Levels Toggle */}
          <div className="mt-4 p-3 border border-white/5 bg-[#0d1117]/60 rounded-lg flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Settings size={12} className="text-cyber-orange" />
              <span className="font-mono text-[9px] text-white/50 uppercase tracking-widest">Security Levels</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 bg-[#00C896]/15 border border-[#00C896]/30 rounded text-[9px] font-mono font-bold text-[#00C896] uppercase">
                  LOW
                </span>
                <span className="font-sans text-[10px] text-white/40">Monitoring Only</span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 bg-red-500/15 border border-red-500/30 rounded text-[9px] font-mono font-bold text-red-500 uppercase">
                  HIGH
                </span>
                <span className="font-sans text-[10px] text-white/40">Active Blocking</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column — Cards (col-span-5) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          
          {/* Card A */}
          <motion.div
            initial={{ x: 25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="p-4 border border-[#00C896]/30 bg-[#00C896]/5 rounded-lg hover:border-[#00C896]/50 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#00C896]" />
            <h4 className="font-mono text-[9px] text-[#00C896] font-bold tracking-widest uppercase mb-1">
              RAG PIPELINE
            </h4>
            <p className="font-sans text-[11px] text-white/70 leading-relaxed font-light">
              LangChain + ChromaDB + HuggingFace Embeddings · Indexed on mental health PDFs
            </p>
          </motion.div>

          {/* Card B */}
          <motion.div
            initial={{ x: 25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-4 border border-cyber-orange/30 bg-cyber-orange/5 rounded-lg hover:border-cyber-orange/50 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyber-orange" />
            <h4 className="font-mono text-[9px] text-cyber-orange font-bold tracking-widest uppercase mb-1">
              DEFENS INTEGRATION
            </h4>
            <p className="font-sans text-[11px] text-white/70 leading-relaxed font-light">
              Binary classifier runs on every incoming prompt before it reaches the LLM
            </p>
          </motion.div>

          {/* Card C */}
          <motion.div
            initial={{ x: 25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="p-4 border border-amber-500/30 bg-amber-500/5 rounded-lg hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-500" />
            <h4 className="font-mono text-[9px] text-amber-500 font-bold tracking-widest uppercase mb-1">
              ADMIN DASHBOARD
            </h4>
            <p className="font-sans text-[11px] text-white/70 leading-relaxed font-light">
              Real-time attack logs · Risk flags · User management · Security controls
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
            36 // 38
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
