import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function AlbertArchitectureSlide({ onNext, onPrev }: SlideProps) {
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
          SLIDE 38 // 38
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          38 // ALBERT — SYSTEM ARCHITECTURE
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-0.5 italic uppercase">
          Production-Grade. <span className="text-cyber-orange glow-orange">Not a Prototype. A System.</span>
        </h2>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
          The full-stack implementation details of the Albert conversational ecosystem
        </p>
      </div>

      {/* 4-Section Grid (2x2) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 py-1 z-20 items-stretch">
        
        {/* CARD A — Frontend */}
        <motion.div
          initial={{ x: -20, y: -20, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="p-4 border border-cyber-teal/30 bg-cyber-teal/5 rounded-lg flex flex-col justify-between"
        >
          <div>
            <h3 className="font-mono text-[10px] tracking-[0.3em] font-bold text-cyber-teal uppercase mb-2">
              FRONTEND
            </h3>
            
            <div className="flex flex-wrap gap-1.5 mb-3">
              {["React", "TypeScript", "Vite", "Tailwind CSS", "SSE Streaming"].map((tech, idx) => (
                <span key={idx} className="px-2.5 py-1 border border-cyber-teal/20 bg-black/30 rounded font-mono text-[9px] text-cyber-teal uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <p className="font-sans text-xs text-white/70 leading-relaxed font-light mt-2">
            Real-time chat interface with streaming responses, conversation history, and security level controls.
          </p>
        </motion.div>

        {/* CARD B — Backend */}
        <motion.div
          initial={{ x: 20, y: -20, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="p-4 border border-cyber-orange/30 bg-cyber-orange/5 rounded-lg flex flex-col justify-between"
        >
          <div>
            <h3 className="font-mono text-[10px] tracking-[0.3em] font-bold text-cyber-orange uppercase mb-2">
              BACKEND
            </h3>
            
            <div className="flex flex-wrap gap-1.5 mb-3">
              {["FastAPI", "Python", "SQLite", "JWT Auth", "RESTful API"].map((tech, idx) => (
                <span key={idx} className="px-2.5 py-1 border border-cyber-orange/20 bg-black/30 rounded font-mono text-[9px] text-cyber-orange uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <p className="font-sans text-xs text-white/70 leading-relaxed font-light mt-2">
            Secure API layer handling authorization, conversation management, and security event logging.
          </p>
        </motion.div>

        {/* CARD C — AI Core */}
        <motion.div
          initial={{ x: -20, y: 20, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="p-4 border border-[#00C896]/30 bg-[#00C896]/5 rounded-lg flex flex-col justify-between"
        >
          <h3 className="font-mono text-[10px] tracking-[0.3em] font-bold text-[#00C896] uppercase mb-3">
            AI CORE
          </h3>

          <div className="space-y-2.5">
            {[
              { label: "RAG Pipeline", barColor: "bg-[#00C896]", desc: "LangChain + ChromaDB + HuggingFace Embeddings" },
              { label: "DEFENS Layer", barColor: "bg-cyber-orange", desc: "Binary classifier on every prompt before LLM" },
              { label: "Judge Model", barColor: "bg-cyber-teal", desc: "LlamaGuard 3 via Ollama — semantic evaluation" },
              { label: "Security Toggle", barColor: "bg-amber-500", desc: "Low (monitor) / High (active block)" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className={`w-1 h-3 rounded-full shrink-0 mt-0.5 ${item.barColor}`} />
                <div className="space-y-0.5">
                  <div className="font-sans text-xs font-bold text-white">{item.label}</div>
                  <div className="font-sans text-[10px] text-white/50">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CARD D — Admin Dashboard */}
        <motion.div
          initial={{ x: 20, y: 20, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="p-4 border border-amber-500/30 bg-amber-500/5 rounded-lg flex flex-col justify-between"
        >
          <h3 className="font-mono text-[10px] tracking-[0.3em] font-bold text-amber-500 uppercase mb-3">
            ADMIN DASHBOARD
          </h3>

          <div className="space-y-2.5">
            {[
              "Real-time Attack Detection Logs",
              "Security Level Controls (Low / High)",
              "Conversation History with Risk Flags",
              "User Management & Session Monitoring"
            ].map((item, idx) => (
              <div key={idx} className="p-2 border border-white/5 bg-[#0d1117] rounded text-center font-sans text-xs text-white/80 hover:border-white/10 transition-colors">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

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
            38 // 38
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
            RESTART
          </span>
          <ChevronRight className="text-cyber-orange group-hover:translate-x-1 transition-transform" size={16} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
