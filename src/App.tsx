import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Experience } from './components/Experience';
import { SplineScene } from './components/SplineScene';
import { HUDOverlay, BreachAlert, TitleReveal } from './components/HUD';
import { TitleSlide } from './components/TitleSlide';
import { AgendaSlide } from './components/AgendaSlide';
import { ProblemStatementSlide } from './components/ProblemStatementSlide';
import { AttackExamplesSlide } from './components/AttackExamplesSlide';
import { RealWorldImpactSlide } from './components/RealWorldImpactSlide';
import { GapsSlide } from './components/GapsSlide';
import { OurSolutionSlide } from './components/OurSolutionSlide';
import { ArchitectureSlide } from './components/ArchitectureSlide';
import { AGSIntroSlide } from './components/AGSIntroSlide';
import { AGSOverviewSlide } from './components/AGSOverviewSlide';
import { AGSSystemArchitectureSlide } from './components/AGSSystemArchitectureSlide';
import { AGSAttackCategoriesSlide } from './components/AGSAttackCategoriesSlide';
import { AGSResultsEvaluationSlide } from './components/AGSResultsEvaluationSlide';
import { AGSContributionsSlide } from './components/AGSContributionsSlide';
import { BackendArchitectureSlide } from './components/BackendArchitectureSlide';
import { AuthDatabaseSlide } from './components/AuthDatabaseSlide';
import { AISecuritySlide } from './components/AISecuritySlide';
import { AnalyticsConclusionSlide } from './components/AnalyticsConclusionSlide';
import { AttackClassifierOverviewSlide } from './components/AttackClassifierOverviewSlide';
import { AttackClassifierCategoriesSlide } from './components/AttackClassifierCategoriesSlide';
import { AttackClassifierDatasetSlide } from './components/AttackClassifierDatasetSlide';
import { AttackClassifierArchitectureSlide } from './components/AttackClassifierArchitectureSlide';
import { AttackClassifierEvaluationSlide } from './components/AttackClassifierEvaluationSlide';
import { AttackClassifierChallengesSlide } from './components/AttackClassifierChallengesSlide';
import { JudgeEvaluatorSlide } from './components/JudgeEvaluatorSlide';
import { JudgeWorkflowsSlide } from './components/JudgeWorkflowsSlide';
import { RiskScoringSlide } from './components/RiskScoringSlide';
import { RiskDecisionsSlide } from './components/RiskDecisionsSlide';
import { DefensCaseStudyIntroSlide } from './components/DefensCaseStudyIntroSlide';
import { DefensOverviewSlide } from './components/DefensOverviewSlide';
import { DefensDataFoundationSlide } from './components/DefensDataFoundationSlide';
import { DefensModelArchitectureSlide } from './components/DefensModelArchitectureSlide';
import { DefensThreePhaseTrainingSlide } from './components/DefensThreePhaseTrainingSlide';
import { DefensResultsLimitationsSlide } from './components/DefensResultsLimitationsSlide';
import { cn } from './lib/utils';

type SceneState = 'idle' | 'scanning' | 'breach' | 'reveal' | 'presentation';

export default function App() {
  const [sceneState, setSceneState] = useState<SceneState>('idle');
  const [isGlitching, setIsGlitching] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    // Cinematic Timeline
    const timers = [
      // Start scanning HUD
      setTimeout(() => setSceneState('scanning'), 1000),
      
      // Trigger breach
      setTimeout(() => {
        setIsGlitching(true);
        setSceneState('breach');
      }, 5000),

      // Return to safety & reveal title (Short intro version)
      setTimeout(() => {
        setIsGlitching(false);
        setSceneState('reveal');
      }, 9500),

      // Final transition to technical presentation
      setTimeout(() => {
        setSceneState('presentation');
      }, 13000),
    ];

    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <main className="relative w-full h-screen bg-[#0D1117] select-none overflow-hidden text-white/90">
      {/* 3D Experience (Background grid and effects) */}
      <Experience isBreached={sceneState === 'breach'} />

      {/* Main Spline Entity (Holographic Humanoid) */}
      <div className={cn(
        "absolute inset-0 z-20 flex items-center justify-center transition-all duration-[2000ms] pointer-events-none",
        sceneState === 'presentation' ? "scale-50 translate-x-[25%] opacity-30 blur-sm" : "md:scale-110 lg:scale-125"
      )}>
        <SplineScene isBreached={sceneState === 'breach'} />
      </div>

      {/* Cinematic Vignette & Noise */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,17,23,0.4)_70%,rgba(13,17,23,0.8)_100%)]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Glitch Overlay Effect */}
      <AnimatePresence>
        {isGlitching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 pointer-events-none mix-blend-overlay"
          >
             <div className="absolute inset-0 bg-red-600/10 animate-[pulse_0.1s_infinite]" />
             <div className="absolute inset-0 border-[20px] border-red-500/10 animate-[ping_0.5s_infinite]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* UI Overlays */}
      <AnimatePresence mode="wait">
        {(sceneState === 'scanning' || sceneState === 'breach') && (
           <HUDOverlay key="hud" isBreached={sceneState === 'breach'} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {sceneState === 'breach' && (
          <BreachAlert key="breach" />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {sceneState === 'reveal' && (
          <TitleReveal key="reveal" />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {sceneState === 'presentation' && (
          slideIndex === 0 ? (
            <TitleSlide 
              key="slide0" 
              onNext={() => setSlideIndex(1)} 
              onPrev={() => setSceneState('reveal')}
            />
          ) : slideIndex === 1 ? (
            <AgendaSlide 
              key="slide1"
              onPrev={() => setSlideIndex(0)}
              onNext={() => setSlideIndex(2)} 
            />
          ) : slideIndex === 2 ? (
            <ProblemStatementSlide 
              key="slide2"
              onPrev={() => setSlideIndex(1)}
              onNext={() => setSlideIndex(3)} 
            />
          ) : slideIndex === 3 ? (
            <AttackExamplesSlide 
              key="slide3"
              onPrev={() => setSlideIndex(2)}
              onNext={() => setSlideIndex(4)} 
            />
          ) : slideIndex === 4 ? (
            <RealWorldImpactSlide 
              key="slide4"
              onPrev={() => setSlideIndex(3)}
              onNext={() => setSlideIndex(5)} 
            />
          ) : slideIndex === 5 ? (
            <GapsSlide 
              key="slide5"
              onPrev={() => setSlideIndex(4)}
              onNext={() => setSlideIndex(6)} 
            />
          ) : slideIndex === 6 ? (
            <OurSolutionSlide 
              key="slide6"
              onPrev={() => setSlideIndex(5)}
              onNext={() => setSlideIndex(7)} 
            />
          ) : slideIndex === 7 ? (
            <ArchitectureSlide 
              key="slide7"
              onPrev={() => setSlideIndex(6)}
              onNext={() => setSlideIndex(8)} 
            />
          ) : slideIndex === 8 ? (
            <AGSIntroSlide 
              key="slide8"
              onPrev={() => setSlideIndex(7)}
              onNext={() => setSlideIndex(9)} 
            />
          ) : slideIndex === 9 ? (
            <AGSOverviewSlide 
              key="slide9"
              onPrev={() => setSlideIndex(8)}
              onNext={() => setSlideIndex(10)} 
            />
          ) : slideIndex === 10 ? (
            <AGSSystemArchitectureSlide 
              key="slide10"
              onPrev={() => setSlideIndex(9)}
              onNext={() => setSlideIndex(11)} 
            />
          ) : slideIndex === 11 ? (
            <AGSAttackCategoriesSlide 
              key="slide11"
              onPrev={() => setSlideIndex(10)}
              onNext={() => setSlideIndex(12)} 
            />
          ) : slideIndex === 12 ? (
            <AGSResultsEvaluationSlide 
              key="slide12"
              onPrev={() => setSlideIndex(11)}
              onNext={() => setSlideIndex(13)} 
            />
          ) : slideIndex === 13 ? (
            <AGSContributionsSlide 
              key="slide13"
              onPrev={() => setSlideIndex(12)}
              onNext={() => setSlideIndex(14)} 
            />
          ) : slideIndex === 14 ? (
            <AttackClassifierOverviewSlide 
              key="slide14"
              onPrev={() => setSlideIndex(13)}
              onNext={() => setSlideIndex(15)} 
            />
          ) : slideIndex === 15 ? (
            <AttackClassifierCategoriesSlide 
              key="slide15"
              onPrev={() => setSlideIndex(14)}
              onNext={() => setSlideIndex(16)} 
            />
          ) : slideIndex === 16 ? (
            <AttackClassifierDatasetSlide 
              key="slide16"
              onPrev={() => setSlideIndex(15)}
              onNext={() => setSlideIndex(17)} 
            />
          ) : slideIndex === 17 ? (
            <AttackClassifierArchitectureSlide 
              key="slide17"
              onPrev={() => setSlideIndex(16)}
              onNext={() => setSlideIndex(18)} 
            />
          ) : slideIndex === 18 ? (
            <AttackClassifierEvaluationSlide 
              key="slide18"
              onPrev={() => setSlideIndex(17)}
              onNext={() => setSlideIndex(19)} 
            />
          ) : slideIndex === 19 ? (
            <AttackClassifierChallengesSlide 
              key="slide19"
              onPrev={() => setSlideIndex(18)}
              onNext={() => setSlideIndex(20)} 
            />
          ) : slideIndex === 20 ? (
            <JudgeEvaluatorSlide 
              key="slide20"
              onPrev={() => setSlideIndex(19)}
              onNext={() => setSlideIndex(21)} 
            />
          ) : slideIndex === 21 ? (
            <JudgeWorkflowsSlide 
              key="slide21"
              onPrev={() => setSlideIndex(20)}
              onNext={() => setSlideIndex(22)} 
            />
          ) : slideIndex === 22 ? (
            <RiskScoringSlide 
              key="slide22"
              onPrev={() => setSlideIndex(21)}
              onNext={() => setSlideIndex(23)} 
            />
          ) : slideIndex === 23 ? (
            <RiskDecisionsSlide 
              key="slide23"
              onPrev={() => setSlideIndex(22)}
              onNext={() => setSlideIndex(24)} 
            />
          ) : slideIndex === 24 ? (
            <BackendArchitectureSlide 
              key="slide24"
              onPrev={() => setSlideIndex(23)}
              onNext={() => setSlideIndex(25)} 
            />
          ) : slideIndex === 25 ? (
            <AuthDatabaseSlide 
              key="slide25"
              onPrev={() => setSlideIndex(24)}
              onNext={() => setSlideIndex(26)} 
            />
          ) : slideIndex === 26 ? (
            <AISecuritySlide 
              key="slide26"
              onPrev={() => setSlideIndex(25)}
              onNext={() => setSlideIndex(27)} 
            />
          ) : slideIndex === 27 ? (
            <AnalyticsConclusionSlide 
              key="slide27"
              onPrev={() => setSlideIndex(26)}
              onNext={() => setSlideIndex(28)} 
            />
          ) : slideIndex === 28 ? (
            <DefensCaseStudyIntroSlide 
              key="slide28"
              onPrev={() => setSlideIndex(27)}
              onNext={() => setSlideIndex(29)} 
            />
          ) : slideIndex === 29 ? (
            <DefensOverviewSlide 
              key="slide29"
              onPrev={() => setSlideIndex(28)}
              onNext={() => setSlideIndex(30)} 
            />
          ) : slideIndex === 30 ? (
            <DefensDataFoundationSlide 
              key="slide30"
              onPrev={() => setSlideIndex(29)}
              onNext={() => setSlideIndex(31)} 
            />
          ) : slideIndex === 31 ? (
            <DefensModelArchitectureSlide 
              key="slide31"
              onPrev={() => setSlideIndex(30)}
              onNext={() => setSlideIndex(32)} 
            />
          ) : slideIndex === 32 ? (
            <DefensThreePhaseTrainingSlide 
              key="slide32"
              onPrev={() => setSlideIndex(31)}
              onNext={() => setSlideIndex(33)} 
            />
          ) : slideIndex === 33 ? (
            <DefensResultsLimitationsSlide 
              key="slide33"
              onPrev={() => setSlideIndex(32)}
              onNext={() => setSlideIndex(0)} 
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-xs opacity-20 uppercase tracking-[1em]">Presentation End</span>
            </div>
          )
        )}
      </AnimatePresence>

      {/* Subtle Scanlines */}
      <div className="absolute inset-0 z-[60] pointer-events-none overflow-hidden opacity-[0.05]">
        <div className="w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </div>

      {/* Interactive Glitch Distortion Layer */}
      {isGlitching && (
         <div className="absolute inset-0 z-[100] pointer-events-none hologram-flicker">
            <div className="absolute w-full h-[2px] bg-red-400/50 top-1/4 animate-[bounce_0.2s_infinite]" />
            <div className="absolute w-full h-[1px] bg-white/20 top-3/4 animate-[bounce_0.5s_infinite]" />
         </div>
      )}

      {/* Initial Loader Screen */}
      <AnimatePresence>
        {sceneState === 'idle' && (
             <motion.div 
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-[100] bg-cyber-bg flex items-center justify-center font-mono text-[10px] tracking-[0.8em] uppercase text-cyber-orange/40"
             >
                <div className="flex flex-col items-center gap-4">
                    <motion.div 
                        animate={{ 
                            scaleX: [0, 1, 1, 0],
                            x: [0, 0, 100, 100]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-[1px] w-24 bg-cyber-orange" 
                    />
                    <span>Initializing System Core...</span>
                </div>
             </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
