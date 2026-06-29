import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface ArchitectureSlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const STATIONS = [
  {
    phase: "PHASE 01 // DATA INGESTION",
    title: "The Entry Point",
    subtitle: "All input — adversarial or benign — enters here.",
    stat: "222,640 prompts processed",
    color: "#FF4B00",
    glowColor: "rgba(255, 75, 0, 0.4)",
    pulseClass: "pulse-phase1",
    cardClass: "hover-phase1",
    cards: [
      {
        icon: ">_",
        title: "ATTACK GENERATOR / USER PROMPT",
        desc: "Adversarial prompts & red-teaming vectors",
        tag: "INPUT"
      },
      {
        icon: "🤖",
        title: "TARGET CHATBOT (Albert)",
        desc: "LLM under safety & alignment evaluation",
        tag: "SUT LAYER"
      },
      {
        icon: "◈",
        title: "RESPONSE CAPTURE LAYER",
        desc: "Real-time token stream interception",
        tag: "CAPTURE"
      }
    ]
  },
  {
    phase: "PHASE 02 // SECURITY ENGINE",
    title: "The Brain",
    subtitle: "Three intelligent layers analyze every token.",
    stat: "99.75% Macro F1 Score",
    color: "#A855F7",
    glowColor: "rgba(168, 85, 247, 0.4)",
    pulseClass: "pulse-phase2",
    cardClass: "hover-phase2",
    cards: [
      {
        icon: "▽",
        title: "ATTACK CLASSIFIER",
        desc: "Preprocessing module: type + confidence",
        tag: "CLASSIFIER"
      },
      {
        icon: "⚖",
        title: "JUDGE MODEL",
        desc: "Semantic + behavioral analysis module",
        tag: "SEMANTIC AUDIT"
      },
      {
        icon: "✕",
        title: "NORMALIZATION LAYER",
        desc: "Standardizes payload to canonical format",
        tag: "MAPPING"
      }
    ]
  },
  {
    phase: "PHASE 03 // VERIFICATION & OUTPUT",
    title: "The Shield",
    subtitle: "Final validation, scoring, and real-time reporting.",
    stat: "AUC = 0.9966",
    color: "#00C896",
    glowColor: "rgba(0, 200, 150, 0.4)",
    pulseClass: "pulse-phase3",
    cardClass: "hover-phase3",
    cards: [
      {
        icon: "◉",
        title: "VALIDATION LAYER",
        desc: "Concurrent multi-dimensional checks",
        tag: "INTEGRITY"
      },
      {
        icon: "◆",
        title: "RISK SCORING ENGINE",
        desc: "Computes aggregated quantitative threat metric",
        tag: "DECISION"
      },
      {
        icon: "▣",
        title: "DASHBOARD / ANALYTICS",
        desc: "Real-time security telemetry & visualization",
        tag: "TELEMETRY"
      }
    ]
  }
];

export function ArchitectureSlide({ onNext, onPrev }: ArchitectureSlideProps) {
  const [currentStation, setCurrentStation] = useState(0);
  const [isWarping, setIsWarping] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const [showHint, setShowHint] = useState(true);

  // Keyboard hint timeout
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    if (currentStation < 2) {
      setSlideDirection('right');
      setIsWarping(true);
      setTimeout(() => {
        setCurrentStation(prev => prev + 1);
      }, 150);
      setTimeout(() => {
        setIsWarping(false);
      }, 500);
    } else {
      onNext?.();
    }
  };

  const handlePrev = () => {
    if (currentStation > 0) {
      setSlideDirection('left');
      setIsWarping(true);
      setTimeout(() => {
        setCurrentStation(prev => prev - 1);
      }, 150);
      setTimeout(() => {
        setIsWarping(false);
      }, 500);
    } else {
      onPrev?.();
    }
  };

  // Keyboard Navigation & window.QuantAIPresentation hooking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Bind window.QuantAIPresentation methods
    const originalPresentation = (window as any).QuantAIPresentation;
    (window as any).QuantAIPresentation = {
      ...originalPresentation,
      next: () => handleNext(),
      prev: () => handlePrev()
    };

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (originalPresentation) {
        (window as any).QuantAIPresentation = originalPresentation;
      } else {
        delete (window as any).QuantAIPresentation;
      }
    };
  }, [currentStation, onNext, onPrev]);

  const currentStationData = STATIONS[currentStation];
  const currentStationColor = currentStationData.color;

  // Stagger animation setup
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring" as const, stiffness: 100, damping: 15 } 
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[70] flex flex-col justify-between p-6 md:p-10 lg:p-12 text-white pointer-events-auto bg-cyber-bg overflow-hidden select-none slide-architecture"
    >
      {/* Dynamic Scoped Styles */}
      <style>{`
        .slide-architecture {
          --phase1: #FF4B00;
          --phase2: #A855F7;
          --phase3: #00C896;
        }

        .tunnel-scene {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          perspective: 900px;
          transform-style: preserve-3d;
        }

        .tunnel-track {
          position: absolute;
          transform-style: preserve-3d;
          transform: rotateX(18deg) rotateY(-4deg);
          animation: tunnel-scroll 8s linear infinite;
        }

        .tunnel-track.warp {
          animation: tunnel-scroll-warp 0.5s linear infinite;
        }

        .tunnel-ring {
          position: absolute;
          width: 800px;
          height: 800px;
          border-radius: 50%;
          border: 1px solid var(--ring-color);
          transform-style: preserve-3d;
          transition: border-color 0.6s ease, box-shadow 0.6s ease;
        }

        @keyframes tunnel-scroll {
          from {
            transform: rotateX(18deg) rotateY(-4deg) translate3d(0, 0, 0);
          }
          to {
            transform: rotateX(18deg) rotateY(-4deg) translate3d(0, 0, 250px);
          }
        }

        @keyframes tunnel-scroll-warp {
          from {
            transform: rotateX(18deg) rotateY(-4deg) translate3d(0, 0, 0);
          }
          to {
            transform: rotateX(18deg) rotateY(-4deg) translate3d(0, 0, 750px);
          }
        }

        @keyframes stat-pulse-anim {
          0%, 100% { box-shadow: 0 0 5px var(--glow-30); }
          50% { box-shadow: 0 0 15px var(--glow-80); }
        }

        .stat-pulse {
          animation: stat-pulse-anim 2s infinite ease-in-out alternate;
        }

        /* Responsive Card Hover Transformations */
        .hover-card {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-phase1:hover {
          border-color: var(--phase1) !important;
          box-shadow: 0 0 20px rgba(255, 75, 0, 0.35);
          transform: scale3d(1.04, 1.04, 1) translateZ(15px) !important;
        }
        .hover-phase1:hover .card-title {
          color: var(--phase1);
        }

        .hover-phase2:hover {
          border-color: var(--phase2) !important;
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.35);
          transform: scale3d(1.04, 1.04, 1) translateZ(15px) !important;
        }
        .hover-phase2:hover .card-title {
          color: var(--phase2);
        }

        .hover-phase3:hover {
          border-color: var(--phase3) !important;
          box-shadow: 0 0 20px rgba(0, 200, 150, 0.35);
          transform: scale3d(1.04, 1.04, 1) translateZ(15px) !important;
        }
        .hover-phase3:hover .card-title {
          color: var(--phase3);
        }
      `}</style>

      {/* 3D Cinematic Tunnel (Background) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="tunnel-scene">
          <div className={`tunnel-track ${isWarping ? 'warp' : ''}`}>
            {Array.from({ length: 15 }, (_, i) => (
              <div 
                key={i}
                className="tunnel-ring flex items-center justify-center"
                style={{
                  transform: `translate3d(-50%, -50%, ${-i * 250}px)`,
                  opacity: Math.max(0.04, 1 - (i / 13)),
                  '--ring-color': currentStationColor,
                  boxShadow: `0 0 15px ${currentStationColor}1f`
                } as React.CSSProperties}
              >
                {/* Targeting reticle radial grid lines */}
                <div className="absolute inset-0 rounded-full border border-current opacity-20" />
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-current opacity-10" />
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-current opacity-10" />
              </div>
            ))}
          </div>
        </div>

        {/* Cinematic Ambience / Scanners */}
        <div className="absolute inset-0 bg-cyber-bg/70 backdrop-blur-[2px]" />
        <div className="absolute inset-6 border border-cyber-orange/5 pointer-events-none">
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyber-orange/30" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyber-orange/30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-cyber-orange/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyber-orange/30" />
        </div>
      </div>

      {/* Warp Energy Barrier Flash Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isWarping ? { opacity: [0, 0.08, 0] } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 pointer-events-none z-[90]"
        style={{ backgroundColor: currentStationColor }}
      />

      {/* Global Header Bar */}
      <div className="flex justify-between items-center border-b border-cyber-orange/15 pb-3 mb-4 shrink-0 relative z-30">
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50">
          SLIDE 08 // 28
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] opacity-30 uppercase">
          QuantAI-Guard
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-cyber-orange/50 uppercase">
          PART 1 // PIPELINE ARCHITECTURE
        </div>
      </div>

      {/* Slide Persistent Sub-Header and Breadcrumbs */}
      <div className="flex justify-between items-center mb-6 relative z-30 shrink-0">
        <div 
          className="font-mono text-[10px] uppercase font-black tracking-[0.3em] transition-colors duration-500"
          style={{ color: currentStationColor }}
        >
          {currentStationData.phase}
        </div>
        <div className="flex items-center gap-3">
          {STATIONS.map((_, idx) => (
            <div 
              key={idx}
              className="w-2 h-2 rounded-full transition-all duration-500"
              style={{ 
                backgroundColor: idx === currentStation ? currentStationColor : '#21262D',
                boxShadow: idx === currentStation ? `0 0 8px ${currentStationColor}` : 'none'
              }}
            />
          ))}
        </div>
      </div>

      {/* Active Station Content Panel */}
      <div className="flex-1 min-h-0 flex items-center justify-center py-2 relative z-20">
        <AnimatePresence mode="wait" custom={slideDirection}>
          <motion.div
            key={currentStation}
            custom={slideDirection}
            variants={{
              enter: (dir) => ({
                x: dir === 'right' ? 200 : dir === 'left' ? -200 : 0,
                opacity: 0,
                scale: 0.95
              }),
              center: {
                x: 0,
                opacity: 1,
                scale: 1
              },
              exit: (dir) => ({
                x: dir === 'right' ? -200 : dir === 'left' ? 200 : 0,
                opacity: 0,
                scale: 0.95
              })
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full max-w-6xl items-center relative"
            style={{
              perspective: "1200px",
              transform: "rotateX(18deg) rotateY(-4deg)",
              transformStyle: "preserve-3d"
            }}
          >
            {/* Left Panel: Phase Info (40%) */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4 text-left">
              <span 
                className="font-mono text-[12px] uppercase tracking-widest font-black"
                style={{ color: currentStationColor }}
              >
                {currentStationData.phase}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight uppercase leading-tight">
                {currentStationData.title}
              </h2>
              <p className="text-[14.5px] md:text-[15.5px] text-white/70 leading-relaxed font-sans font-light">
                {currentStationData.subtitle}
              </p>

              {/* Dynamic Stat Pill Badge */}
              <div className="pt-2">
                <div 
                  className="stat-pulse inline-flex items-center gap-2 border rounded-full px-4 py-1.5 font-mono text-[12.5px]"
                  style={{ 
                    borderColor: `${currentStationColor}99`, 
                    color: currentStationColor,
                    backgroundColor: `${currentStationColor}1e`,
                    '--glow-30': `${currentStationColor}4d`,
                    '--glow-80': `${currentStationColor}cc`
                  } as React.CSSProperties}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  {currentStationData.stat}
                </div>
              </div>
            </div>

            {/* Right Panel: 3 Component Cards Stacked (55%) */}
            <motion.div 
              variants={cardContainerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col space-y-3"
            >
              {currentStationData.cards.map((card, idx) => (
                <div key={idx} className="flex flex-col">
                  {/* Styled Card */}
                  <motion.div
                    variants={cardItemVariants}
                    className={`hover-card ${currentStationData.cardClass} flex bg-[#161B22] border rounded-[6px] py-2 px-4 items-center gap-4 relative overflow-hidden`}
                    style={{ 
                      borderColor: `${currentStationColor}66`,
                      transformStyle: "preserve-3d"
                    }}
                  >
                    {/* Left Icon Accent */}
                    <div 
                      className="text-lg leading-none select-none font-bold shrink-0 p-2 rounded bg-white/5 border border-white/10"
                      style={{ color: currentStationColor }}
                    >
                      {card.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-1">
                      <h3 className="font-display text-[13.5px] font-black text-white uppercase card-title tracking-wider leading-tight">
                        {card.title}
                      </h3>
                      <p className="font-sans text-[11.5px] text-[#6A7080] font-light leading-snug">
                        {card.desc}
                      </p>
                    </div>

                    {/* Top-Right Badge Tag */}
                    <span 
                      className="absolute top-2.5 right-3.5 font-mono text-[9.5px] uppercase border px-1.5 py-0.5 rounded-[3px] select-none font-bold tracking-wider leading-none"
                      style={{ borderColor: `${currentStationColor}99`, color: currentStationColor }}
                    >
                      [{card.tag}]
                    </span>
                  </motion.div>

                  {/* Staggered connector line between cards */}
                  {idx < currentStationData.cards.length - 1 && (
                    <div className="flex flex-col items-center justify-center my-1 h-5 relative shrink-0">
                      <div 
                        className="w-[1px] h-full border-l border-dashed opacity-40"
                        style={{ borderColor: currentStationColor }}
                      />
                      <span 
                        className="absolute bottom-0 text-[9px] leading-none select-none font-bold translate-y-[2px]"
                        style={{ color: currentStationColor }}
                      >
                        ↓
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Persistent Tunnel Depth Indicator (Right edge) */}
      <div className="absolute right-6 top-[25%] bottom-[25%] w-[1px] bg-[#21262D] z-30 hidden md:flex flex-col justify-between items-center py-2">
        <div className="relative h-full w-full">
          <motion.div
            animate={{ top: `${(currentStation / 2) * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="absolute -left-[3.5px] w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] transition-colors duration-500"
            style={{ color: currentStationColor, backgroundColor: currentStationColor }}
          />
        </div>
      </div>

      {/* Persistent Keyboard hint & Nav overlay */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-center">
        <AnimatePresence>
          {showHint && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[9px] text-[#3A3A3A] tracking-wider"
            >
              [ ← ] PREV PHASE &nbsp;&nbsp;&nbsp;&nbsp; NEXT PHASE [ → ]
            </motion.div>
          )}
        </AnimatePresence>
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
          onClick={handlePrev}
          className="group flex items-center gap-3 px-4 py-2 opacity-30 hover:opacity-100 transition-all cursor-pointer"
        >
          <ChevronLeft className="text-white group-hover:-translate-x-1 transition-transform" size={16} />
          <span className="font-display text-[10px] tracking-[0.4em] uppercase">PREV</span>
        </motion.button>

        <div className="flex items-center gap-4">
            <div className="w-1 h-1 rounded-full bg-cyber-orange/20" />
            <div className="px-3 py-1 border border-cyber-orange/20 text-cyber-orange font-mono text-[10px] tracking-widest">
                08 / 28
            </div>
            <div className="w-1 h-1 rounded-full bg-cyber-orange/20" />
        </div>

        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 75, 0, 0.1)' }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
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
