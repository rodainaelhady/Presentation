import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, Shield, Eye, Database, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface JudgeEvaluatorSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export function JudgeEvaluatorSlide({ onNext, onPrev }: JudgeEvaluatorSlideProps) {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

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
          SLIDE 21 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 4 // THE JUDGE MODEL EVALUATOR
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-4 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight mb-1 uppercase">
          <span className="text-white">An Independent Eye. </span>
          <span className="text-cyber-orange glow-orange-text">Watching Every Response.</span>
        </h2>
        <div className="w-20 h-1 bg-cyber-orange/80 mt-2" />
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-20 my-auto">
        {/* Left Column Card - WHAT IS IT? */}
        <div className="lg:col-span-7 border border-[#00B4D8]/30 bg-[#161B22]/60 rounded-xl p-5 md:p-6 flex flex-col justify-between transition-all hover:border-[#00B4D8]/50">
          <div>
            <div className="font-mono text-[9px] tracking-[0.3em] text-[#00B4D8] font-bold uppercase mb-2">
              WHAT IS IT?
            </div>
            <p className="font-sans text-[13px] text-[#8892A4] leading-relaxed mb-6">
              An independent, automated evaluation layer running locally to analyze and verify target LLM outputs.
            </p>
          </div>

          {/* 3 feature items */}
          <div className="space-y-4">
            {/* Item 1 */}
            <div 
              onMouseEnter={() => setActiveFeature(0)}
              onMouseLeave={() => setActiveFeature(null)}
              className="flex gap-4 p-3 rounded-lg border border-white/5 bg-[#0D1117]/50 hover:bg-[#0D1117]/80 hover:border-[#00B4D8]/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-8 h-8 rounded bg-[#00B4D8]/10 flex items-center justify-center shrink-0 border border-[#00B4D8]/20">
                <Database className="text-[#00B4D8] w-4 h-4" />
              </div>
              <div>
                <h4 className="font-sans text-[12px] font-bold text-[#00B4D8] uppercase tracking-wider mb-0.5">
                  Local Deployments via Ollama
                </h4>
                <p className="font-sans text-[11px] text-[#8892A4] leading-normal">
                  Utilizes offline Gemma models for secure and rapid parsing, fully protecting internal corporate telemetry data.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div 
              onMouseEnter={() => setActiveFeature(1)}
              onMouseLeave={() => setActiveFeature(null)}
              className="flex gap-4 p-3 rounded-lg border border-white/5 bg-[#0D1117]/50 hover:bg-[#0D1117]/80 hover:border-cyber-orange/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-8 h-8 rounded bg-cyber-orange/10 flex items-center justify-center shrink-0 border border-cyber-orange/20">
                <Shield className="text-cyber-orange w-4 h-4" />
              </div>
              <div>
                <h4 className="font-sans text-[12px] font-bold text-cyber-orange uppercase tracking-wider mb-0.5">
                  Autonomous Integrity Auditing
                </h4>
                <p className="font-sans text-[11px] text-[#8892A4] leading-normal">
                  Answers core security questions: Was the response safe? Did the attack bypass system guards? Is there leaked data?
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div 
              onMouseEnter={() => setActiveFeature(2)}
              onMouseLeave={() => setActiveFeature(null)}
              className="flex gap-4 p-3 rounded-lg border border-white/5 bg-[#0D1117]/50 hover:bg-[#0D1117]/80 hover:border-[#00C896]/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-8 h-8 rounded bg-[#00C896]/10 flex items-center justify-center shrink-0 border border-[#00C896]/20">
                <Eye className="text-[#00C896] w-4 h-4" />
              </div>
              <div>
                <h4 className="font-sans text-[12px] font-bold text-[#00C896] uppercase tracking-wider mb-0.5">
                  Structured Verdict Outputs
                </h4>
                <p className="font-sans text-[11px] text-[#8892A4] leading-normal">
                  Generates metrics containing: Verdict (SAFE/PARTIAL/UNSAFE), severity tags, and security violation indices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Stacked Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Card A - EVALUATION PIPELINE */}
          <div className="border border-cyber-orange/30 bg-[#161B22]/60 rounded-xl p-5 flex flex-col justify-between hover:border-cyber-orange/50 transition-all">
            <div className="font-mono text-[9px] tracking-[0.3em] text-cyber-orange font-bold uppercase mb-3">
              EVALUATION PIPELINE
            </div>
            <div className="bg-[#0D1117]/80 rounded-lg p-3.5 border border-white/5 font-mono text-center text-[11px] leading-relaxed relative overflow-hidden">
              <div className="flex flex-col items-center gap-1.5 py-1">
                <span className="text-white">Attack Prompt</span>
                <span className="text-cyber-orange/50 text-xs">⬇</span>
                <span className="text-white">Model Response</span>
                <span className="text-cyber-orange/50 text-xs">⬇</span>
                <span className="text-cyber-orange font-bold">Judge Model</span>
                <span className="text-[#00C896] text-xs">⬇</span>
                <span className="text-[#00C896] font-bold">Security Verdict</span>
              </div>
            </div>
          </div>

          {/* Card B - VERDICT LABELS */}
          <div className="border border-[#00C896]/30 bg-[#161B22]/60 rounded-xl p-5 flex flex-col justify-between hover:border-[#00C896]/50 transition-all">
            <div className="font-mono text-[9px] tracking-[0.3em] text-[#00C896] font-bold uppercase mb-3">
              VERDICT LABELS
            </div>
            <div className="space-y-3">
              {/* Verdict SAFE */}
              <div className="flex gap-3 items-start">
                <div className="w-1.5 h-8 bg-[#00C896] rounded-full shrink-0" />
                <div>
                  <div className="font-sans text-[11px] font-bold text-[#00C896] tracking-wider uppercase">
                    SAFE
                  </div>
                  <div className="font-sans text-[9.5px] text-[#8892A4]">
                    Response passed all security checks
                  </div>
                </div>
              </div>

              {/* Verdict PARTIAL */}
              <div className="flex gap-3 items-start">
                <div className="w-1.5 h-8 bg-[#F59E0B] rounded-full shrink-0" />
                <div>
                  <div className="font-sans text-[11px] font-bold text-[#F59E0B] tracking-wider uppercase">
                    PARTIAL
                  </div>
                  <div className="font-sans text-[9.5px] text-[#8892A4]">
                    Response flagged for review
                  </div>
                </div>
              </div>

              {/* Verdict UNSAFE */}
              <div className="flex gap-3 items-start">
                <div className="w-1.5 h-8 bg-[#FF2D2D] rounded-full shrink-0" />
                <div>
                  <div className="font-sans text-[11px] font-bold text-[#FF2D2D] tracking-wider uppercase">
                    UNSAFE
                  </div>
                  <div className="font-sans text-[9.5px] text-[#8892A4]">
                    Immediate pipeline execution kill
                  </div>
                </div>
              </div>
            </div>
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
                21 // 28
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
