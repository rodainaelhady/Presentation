import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface RiskDecisionsSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const TABLE_ROWS = [
  { range: "0.00 - 0.10", label: "MINIMAL", response: "Pass through telemetry stream", color: "#00C896" },
  { range: "0.10 - 0.30", label: "LOW RISK", response: "Flag and baseline performance", color: "#00B4D8" },
  { range: "0.30 - 0.50", label: "MEDIUM RISK", response: "Trigger standard system warning", color: "#F59E0B" },
  { range: "0.50 - 0.70", label: "HIGH RISK", response: "Enforce active policy isolation", color: "#FF4B00" },
  { range: "0.70 - 1.00", label: "CRITICAL", response: "Immediate pipeline execution kill", color: "#FF2D2D" }
];

const OVERRIDES = [
  { title: "Stealth Attacks:", body: "Raised to 0.55+ floor automatically." },
  { title: "Partial Compliance:", body: "Forced to 0.55+ High Risk minimum." },
  { title: "Full Bypass Successful:", body: "Forced directly to 0.70+ Critical floor." }
];

export function RiskDecisionsSlide({ onNext, onPrev }: RiskDecisionsSlideProps) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

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
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:45px_45px]" />
      </div>

      {/* Header Bar */}
      <div className="flex justify-between items-center border-b border-cyber-orange/15 pb-2.5 mb-2 shrink-0 relative z-30">
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50">
          SLIDE 24 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 4 // RISK DECISIONS & OVERRIDES
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-1 uppercase">
          <span className="text-white">Five Risk Bands. </span>
          <span className="text-cyber-orange glow-orange-text">Zero False Clearances.</span>
        </h2>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-20 my-auto items-stretch">
        
        {/* Left - Risk table */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#21262D]/70 px-4 py-2.5 rounded-t-lg border border-[#21262D] text-left">
            <div className="col-span-3 font-mono text-[9px] font-bold text-[#8892A4] uppercase tracking-wider">
              Risk Score Range
            </div>
            <div className="col-span-4 font-mono text-[9px] font-bold text-[#8892A4] uppercase tracking-wider">
              Risk Band Label
            </div>
            <div className="col-span-5 font-mono text-[9px] font-bold text-[#8892A4] uppercase tracking-wider">
              Operational Response
            </div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-[#21262D] border-x border-b border-[#21262D] rounded-b-lg overflow-hidden bg-[#161B22]/30">
            {TABLE_ROWS.map((row, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredRow(idx)}
                onMouseLeave={() => setHoveredRow(null)}
                className="grid grid-cols-12 px-4 py-3.5 items-center transition-all duration-200 cursor-pointer"
                style={{ 
                  backgroundColor: hoveredRow === idx ? `${row.color}0a` : idx % 2 === 0 ? 'rgba(22, 27, 34, 0.4)' : 'transparent',
                  borderLeft: hoveredRow === idx ? `3px solid ${row.color}` : '3px solid transparent'
                }}
              >
                <div 
                  className="col-span-3 font-mono text-[11px]" 
                  style={{ color: row.color }}
                >
                  {row.range}
                </div>
                <div 
                  className="col-span-4 font-sans text-[11px] font-bold tracking-wider" 
                  style={{ color: row.color }}
                >
                  {row.label}
                </div>
                <div className="col-span-5 font-sans text-[11px] text-white">
                  {row.response}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Compliance Overrides Card */}
        <div className="lg:col-span-5 border border-[#FF2D2D]/30 bg-[#161B22]/60 rounded-xl p-5 md:p-6 flex flex-col justify-between hover:border-[#FF2D2D]/50 transition-all">
          <div>
            <div className="flex gap-2 items-center mb-4">
              <ShieldAlert className="text-[#FF2D2D] w-5 h-5 shrink-0" />
              <h3 className="font-display font-bold text-sm md:text-base text-[#FF2D2D] uppercase tracking-wider">
                Compliance Overrides
              </h3>
            </div>

            <p className="font-sans text-[11.5px] text-[#8892A4] leading-relaxed mb-4">
              To guarantee system resilience, math alone does not decide critical risk. Compliance overrides act as strict guardrails:
            </p>

            <div className="w-full h-[1px] bg-[#21262D] my-4" />

            <div className="space-y-4">
              {OVERRIDES.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded bg-[#00C896]/10 flex items-center justify-center shrink-0 border border-[#00C896]/20 mt-0.5">
                    <CheckCircle2 className="text-[#00C896] w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="font-sans text-[12px] font-bold text-[#00C896] mb-0.5">
                      {item.title}
                    </h5>
                    <p className="font-sans text-[11px] text-[#8892A4]">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stat Pill */}
          <div className="mt-6 border border-[#FF2D2D]/30 bg-[#0D1117] py-2 px-4 rounded-full text-center">
            <span className="font-mono text-[9px] text-[#FF2D2D] uppercase tracking-wider font-semibold">
              3 override rules &nbsp;&middot;&nbsp; 5 risk bands &nbsp;&middot;&nbsp; 1 verdict
            </span>
          </div>
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
                24 // 28
            </div>
            <div className="w-1 h-1 rounded-full bg-cyber-orange/20" />
        </div>

        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 75, 0, 0.1)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="group flex items-center gap-3 px-6 py-3 border border-cyber-orange/50 bg-cyber-orange/10 hover:bg-cyber-orange/20 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,75,0,0.1)]"
        >
          <span className="font-display text-[10px] tracking-[0.4em] uppercase">NEXT</span>
          <ChevronRight className="text-white group-hover:translate-x-1 transition-transform" size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
}
