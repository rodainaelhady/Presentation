import { motion, AnimatePresence } from 'motion/react';
import { Shield, Lock, Activity, Database, Cpu, HardDrive, Zap, AlertTriangle } from 'lucide-react';
import { cn } from '../lib/utils';
import { useEffect, useState } from 'react';

export function HUDOverlay({ isBreached }: { isBreached: boolean }) {
  const [metrics, setMetrics] = useState({
    cpu: 45,
    mem: 62,
    net: 128,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: 40 + Math.random() * 20,
        mem: 60 + Math.random() * 5,
        net: 100 + Math.random() * 100,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden font-mono">
      {/* Side Metrics - Left */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 space-y-8"
      >
        <MetricItem icon={<Cpu size={16} />} label="CORE_LOAD" value={`${metrics.cpu.toFixed(1)}%`} progress={metrics.cpu} isBreached={isBreached} />
        <MetricItem icon={<Database size={16} />} label="SYS_MEMORY" value={`${metrics.mem.toFixed(1)}%`} progress={metrics.mem} isBreached={isBreached} />
        <MetricItem icon={<HardDrive size={16} />} label="STORAGE_NODE" value="84.2 TB" progress={84.2} isBreached={isBreached} />
      </motion.div>

      {/* Side Metrics - Right */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 space-y-8 text-right"
      >
        <MetricItem icon={<Shield size={16} />} label="ENCRYPTION" value="AES-4096" progress={100} right isBreached={isBreached} />
        <MetricItem icon={<Activity size={16} />} label="PACKET_FLOW" value={`${metrics.net.toFixed(0)} MB/s`} progress={(metrics.net / 300) * 100} right isBreached={isBreached} />
        <MetricItem icon={<Zap size={16} />} label="POWER_GRID" value="98.5%" progress={98.5} right isBreached={isBreached} />
      </motion.div>

      {/* Scanning Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={cn(
            "w-[400px] h-[400px] border border-dashed rounded-full opacity-20",
            isBreached ? "border-red-500" : "border-cyber-orange"
          )}
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className={cn(
            "absolute w-[450px] h-[450px] border border-cyber-orange-glow/10 rounded-full",
            isBreached && "border-red-500/20"
          )}
        />
        
        {/* Radar Line */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ 
            background: `conic-gradient(from 0deg, transparent, ${isBreached ? 'rgba(255,0,0,0.2)' : 'rgba(255,75,0,0.2)'} 10deg, transparent 15deg)` 
          }}
        />
      </div>

      {/* Top Indicators */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-2 border-x border-cyber-orange/30 bg-cyber-bg/50 backdrop-blur-sm"
      >
        <div className={cn("w-2 h-2 rounded-full animate-pulse", isBreached ? "bg-red-500" : "bg-emerald-500")} />
        <span className="text-[10px] tracking-[0.3em] uppercase opacity-60">SYSTEM_RUNTIME_ACTIVE</span>
        <span className="text-[10px] tracking-[0.3em] uppercase opacity-30 text-cyber-orange">0xAF822.4</span>
      </motion.div>

      {/* Bottom Frame */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute bottom-8 left-8 right-8 flex justify-between items-end border-t border-cyber-orange/10 pt-4"
      >
        <div className="flex gap-4">
          {[1,2,3,4].map(i => (
             <div key={i} className="w-1 h-3 bg-cyber-orange/20" />
          ))}
        </div>
        <div className="text-[10px] tracking-[0.4em] opacity-40 uppercase">QuantAI: Secure Node v4.0.2</div>
        <div className="flex gap-1">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="w-[1px] h-2 bg-cyber-orange/10" />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function MetricItem({ icon, label, value, progress, right = false, isBreached }: { icon: any, label: string, value: string, progress: number, right?: boolean, isBreached: boolean }) {
  return (
    <div className={cn("flex flex-col gap-1 w-48", right ? "items-end" : "items-start")}>
      <div className={cn("flex items-center gap-2 text-xs", right && "flex-row-reverse")}>
        <span className={cn(isBreached ? "text-red-500" : "text-cyber-orange")}>{icon}</span>
        <span className="text-[10px] tracking-wider opacity-60 uppercase">{label}</span>
      </div>
      <div className="text-sm font-display font-medium tracking-widest">{value}</div>
      <div className="w-full h-[2px] bg-white/5 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className={cn("h-full", isBreached ? "bg-red-500" : "bg-cyber-orange")}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}

export function BreachAlert() {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-50 flex items-center justify-center bg-red-950/20 backdrop-blur-md pointer-events-none"
    >
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,0,0.2)_0%,transparent_70%)] animate-pulse" />
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center space-y-4"
        >
            <div className="flex justify-center">
                <AlertTriangle size={64} className="text-red-500 animate-bounce" />
            </div>
            <h2 className="text-6xl font-display font-black text-red-500 glow-orange uppercase tracking-tighter">
                Security Breach Detected
            </h2>
            <div className="flex items-center justify-center gap-4 text-red-400 font-mono text-xl">
                <span>[ FAILSAFE OVERRIDE ]</span>
                <div className="flex gap-1">
                    <div className="w-2 h-4 bg-red-500 animate-[pulse_0.2s_infinite]" />
                    <div className="w-2 h-4 bg-red-500 animate-[pulse_0.4s_infinite]" />
                    <div className="w-2 h-4 bg-red-500 animate-[pulse_0.3s_infinite]" />
                </div>
            </div>
            <div className="bg-red-500/10 border border-red-500/50 p-4 font-mono text-xs text-red-300 max-w-md mx-auto">
                <p>UNAUTHORIZED ACCESS ATTEMPT: NODE_0X822_A</p>
                <p>PROTOCOL_ECHO_FAIL: INVALID_SSL_KEY_HANDSHAKE</p>
                <p>ISOLATING NEURAL CORES... [88% COMPLETE]</p>
            </div>
        </motion.div>
    </motion.div>
  );
}

export function TitleReveal() {
  return (
    <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center pointer-events-none p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-7xl md:text-9xl font-display font-black tracking-tighter text-white mb-2 relative"
          style={{ textShadow: '0 0 40px rgba(255, 75, 0, 0.4)' }}
        >
          QuantAI-Guard
          <motion.span 
            className="absolute -inset-1 bg-cyber-orange/10 blur-2xl block"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.h1>
        
        <motion.p 
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            animate={{ opacity: 1, letterSpacing: '0.5em' }}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-cyber-orange-glow font-display font-medium text-xs md:text-sm uppercase max-w-2xl mx-auto leading-relaxed"
        >
            A Machine Learning <br className="hidden md:block" /> Framework for AI Chatbot Security
        </motion.p>

        <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-[1px] w-48 bg-gradient-to-r from-transparent via-cyber-orange to-transparent mt-8 mx-auto"
        />

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-12 flex gap-8 justify-center"
        >
            <div className="flex flex-col items-center gap-1">
                <span className="text-[8px] uppercase tracking-[0.4em] opacity-40">Authorization</span>
                <span className="text-[10px] uppercase tracking-widest text-emerald-500">Verified</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <span className="text-[8px] uppercase tracking-[0.4em] opacity-40">Encryption</span>
                <span className="text-[10px] uppercase tracking-widest text-cyber-orange">Active</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <span className="text-[8px] uppercase tracking-[0.4em] opacity-40">Deployment</span>
                <span className="text-[10px] uppercase tracking-widest">v1.2.0</span>
            </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
