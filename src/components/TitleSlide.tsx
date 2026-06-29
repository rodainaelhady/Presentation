import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { ChevronRight, ChevronLeft, Shield, Users, Award, Radio, Binary, Sparkles, Brain } from 'lucide-react';

interface TitleSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const teamMembers = [
  "Rodaina Mohammed ElHady",
  "Mohammed Ibrahim",
  "Eslam Khaled",
  "Zeinab Mohammed",
  "John Rizk",
  "Ahmed Yahia",
  "Abdelrahman Ahmed"
];

export function TitleSlide({ onNext, onPrev }: TitleSlideProps) {
  const titleLetters = Array.from("QuantAI-Guard");

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[70] flex flex-col justify-between p-8 md:p-12 overflow-hidden text-white pointer-events-auto bg-[#030712] select-none"
    >
      {/* Background Ambience & Cinematic VFX */}
      <div className="absolute inset-0 pointer-events-none z-[-1]">
        {/* Soft radial ambient glow in the center */}
        <div className="absolute inset-0 bg-[#030712]" />
        
        {/* Holographic light leaks */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(255,75,0,0.08)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.03)_0%,transparent_70%)] blur-[60px]" />

        {/* Animated matrix/grid mesh background */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Diagonal tech lines for a subtle blueprint aesthetic */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[size:100px_100px]" />

        {/* Subtle holographic concentric circles in the background center */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cyber-orange/[0.02] border-dashed pointer-events-none flex items-center justify-center"
        >
          <div className="w-[450px] h-[450px] rounded-full border border-cyber-orange/[0.03] flex items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full border border-cyber-orange/[0.04] border-dotted" />
          </div>
        </motion.div>

        {/* HUD Frame Brackets */}
        <div className="absolute inset-10 border border-white/[0.02] pointer-events-none">
          <div className="absolute top-0 left-0 w-8 h-[1px] bg-cyber-orange/40" />
          <div className="absolute top-0 left-0 w-[1px] h-8 bg-cyber-orange/40" />
          <div className="absolute top-0 right-0 w-8 h-[1px] bg-cyber-orange/40" />
          <div className="absolute top-0 right-0 w-[1px] h-8 bg-cyber-orange/40" />
          
          <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-cyber-orange/40" />
          <div className="absolute bottom-0 left-0 w-[1px] h-8 bg-cyber-orange/40" />
          <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-cyber-orange/40" />
          <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-cyber-orange/40" />
        </div>
      </div>

      {/* Top Header Bar */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between items-end border-b border-white/5 pb-4 mb-2 shrink-0 relative z-[80]"
      >
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-cyber-orange rounded-full animate-ping absolute" />
          <div className="w-2.5 h-2.5 bg-cyber-orange rounded-full relative" />
          <div className="flex flex-col">
            <span className="font-mono text-[10px] tracking-[0.2em] text-cyber-orange font-bold uppercase leading-none">
              Helwan International Technological University
            </span>
            <span className="font-mono text-[8.5px] tracking-[0.15em] text-white/40 uppercase mt-1.5">
              Faculty of Technology in Cairo
            </span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4 font-mono text-[10px] text-white/60 tracking-wider">
          <span className="flex items-center gap-1.5 uppercase text-cyber-orange font-bold">
            <Brain size={12} className="text-cyber-orange animate-pulse" /> Data Science
          </span>
          <span className="opacity-30 text-white">//</span>
          <span className="flex items-center gap-1.5 uppercase text-cyber-orange font-bold">
            <Shield size={12} className="text-cyber-orange" /> Cybersecurity
          </span>
        </div>
      </motion.div>

      {/* Main Screen Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-0 py-4 relative z-[80]">
        
        {/* Left Wing: The Research Team (4 columns) */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-3 flex flex-col justify-center gap-4 min-h-0"
        >
          <div className="border border-white/5 bg-white/[0.01] backdrop-blur-md rounded-2xl p-4 md:p-5 relative flex flex-col overflow-hidden max-h-[380px] group hover:border-cyber-orange/30 transition-all duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.01)]">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyber-orange to-transparent opacity-80" />
            
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/5 shrink-0">
              <Users size={14} className="text-cyber-orange" />
              <span className="font-mono text-[9.5px] tracking-[0.4em] text-cyber-orange font-bold uppercase">
                Team members
              </span>
            </div>

            <div className="space-y-2 overflow-y-auto pr-1.5 flex-1 min-h-[160px] pb-6 cyber-scrollbar">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={member}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (idx * 0.05) }}
                  className="group/item flex items-center gap-3 hover:text-cyber-orange-glow transition-all duration-300 py-0.5"
                >
                  <span className="font-mono text-[9px] text-white/30 tracking-tighter w-4">
                    0{idx + 1}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-cyber-orange/40 group-hover/item:bg-cyber-orange group-hover/item:scale-125 transition-all shadow-[0_0_8px_rgba(255,75,0,0.5)] shrink-0" />
                  <span className="font-sans text-xs md:text-sm font-medium text-white/80 group-hover/item:text-white transition-colors">
                    {member}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Centerpiece: The Cinematic Project Identity (6 columns) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center text-center px-4">
          
          {/* Futuristic Icon Badge */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 p-4 rounded-full border border-cyber-orange/20 bg-cyber-orange/5 relative group shadow-[0_0_30px_rgba(255,75,0,0.05)] hover:border-cyber-orange/40 transition-colors"
          >
            <div className="absolute inset-0 rounded-full bg-cyber-orange/10 animate-pulse blur-md" />
            <Shield size={36} className="text-cyber-orange relative z-10 animate-pulse" />
          </motion.div>

          {/* Slogan */}
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-mono text-[10px] tracking-[0.5em] text-cyber-orange/80 uppercase font-bold mb-3"
          >
            GRADUATION RESEARCH INITIATIVE
          </motion.span>

          {/* Splendid Title */}
          <div className="relative mb-5 overflow-hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              className="flex justify-center items-center gap-[0.02em]"
            >
              {titleLetters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 60, filter: "blur(10px)", scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                  transition={{
                    delay: 0.3 + index * 0.05,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-white hover:text-cyber-orange hover:scale-105 transition-all duration-300 select-none cursor-default py-1"
                  style={{ textShadow: "0 0 40px rgba(255,75,0,0.15)" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            {/* Glowing Laser Underline */}
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.1, duration: 1.2, ease: "circOut" }}
              className="h-[1.5px] w-64 md:w-96 mx-auto bg-gradient-to-r from-transparent via-cyber-orange to-transparent mt-4 shadow-[0_0_12px_#FF4B00]"
            />
          </div>

          {/* Subtitle / Purpose statement */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="font-sans font-light text-white/70 tracking-wide text-xs md:text-sm max-w-lg leading-relaxed"
          >
            An advanced, intelligent machine learning framework tailored for robust security classification, prompt evaluation, and real-time defensive safeguarding of conversational LLM chatbot architectures.
          </motion.p>

          {/* Technical Specs Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex items-center gap-3 mt-6 text-[8.5px] font-mono tracking-widest text-white/50 uppercase"
          >
            <span>DEBERTA_v3</span>
            <span>•</span>
            <span>ROBUSTNESS EVALUATION</span>
            <span>•</span>
            <span>AGS GENERATION</span>
          </motion.div>
        </div>

        {/* Right Wing: Supervisory Committee (3 columns) */}
        <motion.div 
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-3 flex flex-col justify-center gap-4 min-h-0"
        >
          <div className="border border-white/5 bg-white/[0.01] backdrop-blur-md rounded-2xl p-4 md:p-5 text-right items-end relative flex flex-col overflow-hidden max-h-[380px] group hover:border-cyber-orange/30 transition-all duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.01)]">
            <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-cyber-orange to-transparent opacity-80" />
            
            <div className="flex items-center justify-end gap-2 mb-4 pb-2 border-b border-white/5 shrink-0 w-full">
              <span className="font-mono text-[9.5px] tracking-[0.4em] text-cyber-orange font-bold uppercase">
                SUPERVISORY COMMITTEE
              </span>
              <Award size={14} className="text-cyber-orange" />
            </div>

            <div className="space-y-4 w-full overflow-y-auto pr-1 flex-1 min-h-[160px] pb-6 cyber-scrollbar">
              <div className="space-y-1">
                <span className="text-[8px] tracking-[0.2em] text-cyber-orange/60 font-bold uppercase block">
                  SUPERVISOR
                </span>
                <h4 className="font-display font-black text-sm md:text-base tracking-tight text-white hover:text-cyber-orange transition-colors">
                  Dr. Amr Muhammad Abd-Elwahed
                </h4>
              </div>

              <div className="space-y-1">
                <span className="text-[8px] tracking-[0.2em] text-cyber-orange/60 font-bold uppercase block">
                  CO-SUPERVISOR
                </span>
                <h4 className="font-display font-black text-sm md:text-base tracking-tight text-white hover:text-cyber-orange transition-colors">
                  Eng. Habiba Hamed
                </h4>
              </div>

              <div className="pt-3 border-t border-white/5 text-[9px] text-white/30 leading-snug font-mono">
                Information Technology Department
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Graduation Status Sub-bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="flex justify-center items-center gap-8 text-center py-2 shrink-0 border-t border-white/[0.03] z-[80] relative"
      >
        <span className="font-mono text-[8.5px] tracking-[0.45em] uppercase">
          GRADUATION THESIS DEFENSE
        </span>
        <span className="font-mono text-[9px] tracking-[0.50em] text-cyber-orange font-black uppercase">
          ACADEMIC SESSION 2025 // 2426
        </span>
      </motion.div>

      {/* Symmetrical Squeaky-Clean Bottom Navigation (Aligned perfectly with other slides) */}
      <div className="flex justify-between items-center border-t border-cyber-orange/10 pt-4 mt-2 shrink-0 relative z-[90]">
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 75, 0, 0.05)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrev}
          className="group flex items-center gap-3 px-4 py-2 opacity-30 hover:opacity-100 transition-all cursor-pointer pointer-events-auto"
        >
          <ChevronLeft className="text-white group-hover:-translate-x-1 transition-transform" size={16} />
          <span className="font-display text-[10px] tracking-[0.4em] uppercase">PREV</span>
        </motion.button>

        <div className="flex items-center gap-4">
          <div className="w-1 h-1 rounded-full bg-cyber-orange/20" />
          <div className="px-3 py-1 border border-cyber-orange/20 text-cyber-orange font-mono text-[10px] tracking-widest">
            01 // 08
          </div>
          <div className="w-1 h-1 rounded-full bg-cyber-orange/20" />
        </div>

        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 75, 0, 0.1)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="group flex items-center gap-3 px-6 py-3 border border-cyber-orange/50 bg-cyber-orange/10 hover:bg-cyber-orange/20 transition-all cursor-pointer pointer-events-auto shadow-[0_0_15px_rgba(255,75,0,0.1)]"
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

function Badge({ label }: { label: string }) {
  return (
    <div className="px-3 py-1.5 border border-cyber-orange/20 bg-cyber-orange/5 text-cyber-orange text-[8px] md:text-[9px] font-mono tracking-[0.3em] uppercase font-bold shadow-[0_0_8px_rgba(255,75,0,0.05)] rounded">
      {label}
    </div>
  );
}
