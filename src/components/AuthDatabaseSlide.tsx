import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, Check, Database } from 'lucide-react';

interface AuthDatabaseSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const CHECKLIST = [
  "User Registration & Login",
  "Session Management",
  "Access Control",
  "Secure Password Storage",
  "Profile Management",
  "Historical Evaluation Records",
  "Risk Reports & Analytics"
];

const TABLES = [
  { color: '#00B4D8', name: "Users", fields: "id, full_name, email, role, status" },
  { color: '#00C896', name: "Attack Scenarios", fields: "id, user_id, attack_type, target_model" },
  { color: '#F59E0B', name: "Attack Results", fields: "success_rate, risk_analysis, classification" },
  { color: '#FF2D2D', name: "Settings", fields: "setting_key, setting_value, category" }
];

export function AuthDatabaseSlide({ onNext, onPrev }: AuthDatabaseSlideProps) {
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
          SLIDE 26 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 3 // AUTHENTICATION & DATABASE
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-0.5 italic uppercase">
          Secure Access. <span className="text-cyber-orange glow-orange">Structured Data.</span>
        </h2>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 items-stretch z-20 py-2">
        
        {/* LEFT CARD — Auth & Dashboard Flow */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-6 border border-[#00B4D8]/30 bg-[#161B22]/60 rounded-xl p-5 md:p-6 transition-all hover:border-[#00B4D8]/50 flex flex-col justify-between"
        >
          <div>
            <div className="font-mono text-[9px] tracking-[0.3em] text-[#00B4D8] font-bold uppercase mb-4">
              AUTH & DASHBOARD FLOW
            </div>
            
            <div className="space-y-2.5">
              {CHECKLIST.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-center">
                  <div className="w-4 h-4 rounded bg-[#00C896]/15 border border-[#00C896]/30 flex items-center justify-center shrink-0">
                    <Check className="text-[#00C896] w-3 h-3" strokeWidth={3} />
                  </div>
                  <span className="font-sans text-[11.5px] text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT CARD — ERD: Database Structure */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-6 border border-cyber-orange/30 bg-[#161B22]/60 rounded-xl p-5 md:p-6 transition-all hover:border-cyber-orange/50 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="font-mono text-[9px] tracking-[0.3em] text-cyber-orange font-bold uppercase">
              ERD — DATABASE STRUCTURE
            </div>

            <div className="space-y-3">
              {TABLES.map((t, idx) => (
                <div key={idx} className="flex gap-3 items-start border-l-2 pl-3" style={{ borderColor: t.color }}>
                  <div>
                    <h4 className="font-sans text-[11.5px] font-bold uppercase tracking-wider" style={{ color: t.color }}>
                      {t.name}
                    </h4>
                    <p className="font-mono text-[10px] text-[#8892A4] mt-0.5">
                      {t.fields}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Relations footer pill */}
          <div className="mt-4 bg-[#0D1117] border border-cyber-border rounded-full py-1.5 px-3 text-center">
            <span className="font-mono text-[9px] text-[#8892A4] uppercase tracking-wider font-semibold">
              Users → Attack Scenarios → Attack Results &nbsp;&middot;&nbsp; Settings (standalone)
            </span>
          </div>
        </motion.div>

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
                26 // 28
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
