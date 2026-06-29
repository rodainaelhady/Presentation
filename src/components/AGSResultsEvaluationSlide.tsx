import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Award, TrendingUp, Sparkles, AlertCircle } from 'lucide-react';

interface AGSResultsEvaluationSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const STATS = [
  { val: "218,862", label: "Unique Adversarial Records", desc: "Successfully synthesized", accent: "#7C3AED" },
  { val: "11,519/s", label: "System Throughput", desc: "Average generation velocity", accent: "#06B6D4" },
  { val: "0", label: "Duplicate Records Identified", desc: "Guaranteed via MD5 cache", accent: "#10B981" }
];

const DIFFICULTY_DATA = [
  { name: "Extreme", pct: 34.8, count: "76,163", color: "#EF4444", desc: "Near-impossibility block rates" },
  { name: "High", pct: 35.0, count: "76,601", color: "#F59E0B", desc: "Complex conversational vectors" },
  { name: "Medium", pct: 20.1, count: "43,991", color: "#A855F7", desc: "Multistep instruction prompts" },
  { name: "Low", pct: 10.1, count: "22,107", color: "#10B981", desc: "Standard alignment checks" }
];

const CATEGORY_DATA = [
  { name: "Jailbreak", count: 54700, max: 65000, pct: "84.1%", color: "#7C3AED", desc: "Role-play & authority scenarios" },
  { name: "Prompt Injection", count: 54700, max: 65000, pct: "84.1%", color: "#06B6D4", desc: "Adversarial system override" },
  { name: "PII Leakage", count: 54700, max: 65000, pct: "84.1%", color: "#F59E0B", desc: "Personal info extraction" },
  { name: "Self-Harm", count: 54762, max: 65000, pct: "84.2%", color: "#EF4444", desc: "Safety alignment checks" }
];

export function AGSResultsEvaluationSlide({ onNext, onPrev }: AGSResultsEvaluationSlideProps) {
  const [hoveredDiff, setHoveredDiff] = useState<number | null>(null);
  const [hoveredCat, setHoveredCat] = useState<number | null>(null);

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
          SLIDE 13 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 2 // RESULTS & EVALUATION
        </div>
      </div>

      {/* Slide Title Area */}
      <div className="mb-2 shrink-0">
        <h2 className="text-xl md:text-3xl font-display font-black tracking-tight glow-orange mb-0.5 italic uppercase">
          Results & Evaluation
        </h2>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
          Complete generation run &middot; 22,264 seeds &middot; all four attack categories
        </p>
      </div>

      {/* Hero Stat Cards (Top Row) */}
      <div className="grid grid-cols-3 gap-3 shrink-0 relative z-20">
        {STATS.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 + idx * 0.08 }}
            className="p-3 border border-white/5 bg-[#161b22]/40 rounded-lg flex flex-col items-center justify-center text-center relative group hover:border-cyber-orange/15 transition-all duration-300"
          >
            <h4 className="text-xl md:text-2xl lg:text-3xl font-display font-black tracking-tight leading-none mb-1 uppercase" style={{ color: stat.accent }}>
              {stat.val}
            </h4>
            <p className="font-sans text-[9px] md:text-[10px] font-bold text-white uppercase tracking-wider leading-none mb-0.5">
              {stat.label}
            </p>
            <p className="font-sans text-[8px] md:text-[9px] text-white/40">
              {stat.desc}
            </p>
            <div className="absolute bottom-0 left-1/4 right-1/4 h-[1.5px]" style={{ backgroundColor: stat.accent }} />
          </motion.div>
        ))}
      </div>

      {/* Interactive Charts Dashboard (Bottom Half) */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 py-2 relative z-20">
        
        {/* Left Card: Difficulty Distribution */}
        <div className="border border-white/5 bg-[#0d121f]/45 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden group hover:border-white/10 transition-colors">
          <div>
            <h3 className="font-display text-[11px] font-black uppercase tracking-wider text-[#06B6D4] mb-3">
              Difficulty Distribution
            </h3>
            
            {/* Legend & Grid Layout */}
            <div className="grid grid-cols-12 gap-3 items-center">
              
              {/* Doughnut SVG Representation */}
              <div className="col-span-5 flex items-center justify-center relative">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Accumulating circle strokes */}
                  {(() => {
                    let accumulatedPercent = 0;
                    return DIFFICULTY_DATA.map((item, idx) => {
                      const radius = 35;
                      const circumference = 2 * Math.PI * radius;
                      const strokeDasharray = `${(item.pct / 100) * circumference} ${circumference}`;
                      const strokeDashoffset = -((accumulatedPercent / 100) * circumference);
                      accumulatedPercent += item.pct;

                      const isHovered = hoveredDiff === idx;

                      return (
                        <motion.circle
                          key={idx}
                          cx="50"
                          cy="50"
                          r={radius}
                          fill="transparent"
                          stroke={item.color}
                          strokeWidth={isHovered ? "14" : "10"}
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="butt"
                          className="cursor-pointer transition-all duration-300"
                          onMouseEnter={() => setHoveredDiff(idx)}
                          onMouseLeave={() => setHoveredDiff(null)}
                          style={{ filter: isHovered ? `drop-shadow(0 0 5px ${item.color}80)` : 'none' }}
                        />
                      );
                    });
                  })()}
                </svg>

                {/* Center Core HUD */}
                <div className="absolute flex flex-col items-center justify-center pointer-events-none">
                  <span className="font-mono text-[8px] text-white/30 tracking-widest uppercase">CORP</span>
                  <span className="font-display text-[11px] md:text-[12px] font-black leading-none text-white">218K</span>
                </div>
              </div>

              {/* Text listing with hover states */}
              <div className="col-span-7 space-y-1">
                {DIFFICULTY_DATA.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center justify-between p-1 rounded transition-colors duration-200 cursor-pointer ${hoveredDiff === idx ? 'bg-white/5' : 'transparent'}`}
                    onMouseEnter={() => setHoveredDiff(idx)}
                    onMouseLeave={() => setHoveredDiff(null)}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-sm shrink-0" style={{ backgroundColor: item.color }} />
                      <span className="font-display text-[9.5px] md:text-[10px] font-black uppercase text-white/80">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[8px] md:text-[9px] text-white/40">{item.count}</span>
                      <span className="font-mono text-[10px] md:text-[11px] font-bold" style={{ color: item.color }}>{item.pct}%</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Active tooltip block */}
          <div className="h-5 border-t border-white/5 pt-1 mt-2">
            <AnimatePresence mode="wait">
              {hoveredDiff !== null ? (
                <motion.p 
                  key={hoveredDiff}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-sans text-[9px] md:text-[10px] text-white/50 leading-none"
                >
                  <span className="font-bold" style={{ color: DIFFICULTY_DATA[hoveredDiff].color }}>{DIFFICULTY_DATA[hoveredDiff].name}</span>: {DIFFICULTY_DATA[hoveredDiff].desc}
                </motion.p>
              ) : (
                <p className="font-sans text-[9px] md:text-[10px] text-white/30 italic leading-none">Hover over segments for metadata details</p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Card: Records by Attack Category */}
        <div className="border border-white/5 bg-[#0d121f]/45 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden group hover:border-white/10 transition-colors">
          <div>
            <h3 className="font-display text-[11px] font-black uppercase tracking-wider text-[#06B6D4] mb-3">
              Records by Attack Category
            </h3>

            {/* Custom Bar Chart List */}
            <div className="space-y-2.5">
              {CATEGORY_DATA.map((item, idx) => {
                const isHovered = hoveredCat === idx;
                const fillRatio = (item.count / item.max) * 100;
                
                return (
                  <div 
                    key={idx}
                    className="space-y-0.5 cursor-pointer"
                    onMouseEnter={() => setHoveredCat(idx)}
                    onMouseLeave={() => setHoveredCat(null)}
                  >
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-1.5">
                        <span className="font-display text-[9.5px] md:text-[10px] font-black uppercase text-white/80">{item.name}</span>
                        <span className="font-mono text-[8px] text-white/30">[{item.count.toLocaleString()}]</span>
                      </div>
                      <span className="font-mono text-[9px] md:text-[10px] font-bold" style={{ color: item.color }}>{item.pct}</span>
                    </div>

                    {/* Progress Track */}
                    <div className="h-2 bg-black/40 rounded-full border border-white/5 overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${fillRatio}%` }}
                        transition={{ duration: 1.2, delay: idx * 0.1 }}
                        className="h-full rounded-full"
                        style={{ 
                          backgroundColor: item.color,
                          boxShadow: isHovered ? `0 0 6px ${item.color}bb` : 'none'
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active tooltip block */}
          <div className="h-5 border-t border-white/5 pt-1 mt-2">
            <AnimatePresence mode="wait">
              {hoveredCat !== null ? (
                <motion.p 
                  key={hoveredCat}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-sans text-[9px] md:text-[10px] text-white/50 leading-none"
                >
                  <span className="font-bold" style={{ color: CATEGORY_DATA[hoveredCat].color }}>{CATEGORY_DATA[hoveredCat].name}</span>: {CATEGORY_DATA[hoveredCat].desc}
                </motion.p>
              ) : (
                <p className="font-sans text-[9px] md:text-[10px] text-white/30 italic leading-none">Hover over items for category specifics</p>
              )}
            </AnimatePresence>
          </div>
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
                13 // 28
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
