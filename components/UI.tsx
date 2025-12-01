
import React from 'react';

// --- Sound Engine ---
const audioCtx = typeof window !== 'undefined' ? new (window.AudioContext || (window as any).webkitAudioContext)() : null;

export const playSound = (type: 'success' | 'error' | 'click' | 'levelUp' | 'win' | 'pop') => {
  if (!audioCtx) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  const now = audioCtx.currentTime;

  switch (type) {
    case 'success':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(1174.66, now + 0.1); // D6
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
      osc.start(now);
      osc.stop(now + 0.5);
      break;
    case 'error':
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.linearRampToValueAtTime(100, now + 0.2);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
      break;
    case 'click':
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
      break;
    case 'levelUp':
      osc.type = 'square';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(554, now + 0.1);
      osc.frequency.setValueAtTime(659, now + 0.2);
      osc.frequency.setValueAtTime(880, now + 0.3);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.6);
      break;
    case 'win':
      osc.type = 'triangle';
      // Simple arpeggio
      [523.25, 659.25, 783.99, 1046.50, 783.99, 659.25, 523.25].forEach((freq, i) => {
        const t = now + i * 0.15;
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.connect(g);
        g.connect(audioCtx.destination);
        o.frequency.value = freq;
        g.gain.setValueAtTime(0.1, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
        o.start(t);
        o.stop(t + 0.1);
      });
      break;
    case 'pop':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
      break;
  }
};

export const Button: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'gold';
  className?: string;
  disabled?: boolean;
}> = ({ onClick, children, variant = 'primary', className = '', disabled = false }) => {
  const baseStyle = "px-6 py-3 rounded-2xl font-black transition-all transform active:scale-90 shadow-[0_4px_0_0_rgba(0,0,0,0.2)] active:shadow-none translate-y-0 active:translate-y-1";
  
  const variants = {
    primary: "bg-primary text-white border-violet-800 hover:brightness-110 disabled:grayscale",
    secondary: "bg-secondary text-white border-teal-800 hover:brightness-110 disabled:grayscale",
    danger: "bg-red-500 text-white border-red-800 hover:brightness-110 disabled:grayscale",
    gold: "bg-gold text-yellow-900 border-yellow-700 hover:brightness-110 disabled:grayscale",
    ghost: "bg-transparent text-slate-600 dark:text-slate-300 shadow-none border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 active:translate-y-0"
  };

  const handleClick = () => {
    if (!disabled) {
      playSound('click');
      onClick();
    }
  };

  return (
    <button 
      onClick={handleClick} 
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export const Card: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({ children, className = '', onClick }) => (
  <div 
    onClick={() => {
      if(onClick) playSound('click');
      onClick && onClick();
    }}
    className={`bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-6 border-4 border-slate-100 dark:border-slate-700 ${className}`}
  >
    {children}
  </div>
);

export const Badge: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'bg-yellow-400' }) => (
  <span className={`${color} text-slate-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm`}>
    {children}
  </span>
);

export const ProgressBar: React.FC<{ current: number; total: number; color?: string; label?: string }> = ({ current, total, color = 'bg-primary', label }) => {
  const percentage = Math.min(100, Math.max(0, (current / total) * 100));
  return (
    <div className="w-full">
      {label && <div className="flex justify-between text-xs font-bold mb-1 uppercase text-slate-500">{label} <span>{current}/{total}</span></div>}
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-6 overflow-hidden border-4 border-white dark:border-slate-800 shadow-inner relative">
         <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 z-10 rounded-full"></div>
         <div 
           className={`${color} h-full transition-all duration-500 ease-out`} 
           style={{ width: `${percentage}%` }}
         />
      </div>
    </div>
  );
};

export const HealthBar: React.FC<{ current: number; max: number }> = ({ current, max }) => {
  const percent = (current / max) * 100;
  return (
    <div className="relative w-full h-8 bg-slate-900 rounded-full border-4 border-slate-700 overflow-hidden shadow-2xl">
      <div 
        className="h-full bg-red-500 transition-all duration-300 ease-out"
        style={{ width: `${percent}%` }}
      />
      <div className="absolute inset-0 flex items-center justify-center font-black text-white text-xs drop-shadow-md">
        {current} / {max} HP
      </div>
    </div>
  );
};

export const Confetti: React.FC = () => {
  // Simple CSS particle implementation
  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex justify-center overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-3 h-3 bg-red-500 rounded-full animate-bounce-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10%`,
            backgroundColor: ['#f00', '#0f0', '#00f', '#ff0', '#f0f'][Math.floor(Math.random() * 5)],
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random()}s`
          }}
        />
      ))}
    </div>
  );
};

export const Toast: React.FC<{ message: string; subMessage?: string }> = ({ message, subMessage }) => {
  React.useEffect(() => {
    playSound('levelUp');
  }, []);

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl border-4 border-yellow-400 animate-pop z-50 text-center">
      <div className="text-2xl font-black text-yellow-400">{message}</div>
      {subMessage && <div className="text-sm font-bold text-slate-300">{subMessage}</div>}
    </div>
  );
};

export const RewardSplash: React.FC<{ xp: number; gems: number; onComplete: () => void }> = ({ xp, gems, onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-pulse"></div>
      <div className="relative flex flex-col items-center animate-pop">
        <div className="text-9xl mb-4 animate-bounce-slow filter drop-shadow-2xl scale-125">💎</div>
        <div className="text-7xl font-black text-white stroke-black drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          +{gems}
        </div>
        <div className="mt-4 bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full text-4xl font-black shadow-xl transform -rotate-3 border-4 border-white">
          +{xp} XP
        </div>
      </div>
    </div>
  );
};
