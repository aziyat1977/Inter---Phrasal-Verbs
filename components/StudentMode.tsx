
import React, { useState, useEffect } from 'react';
import { LESSON_DATA, DISCOVERY_PAIRS, BOSS_CONFIG, KAHOOT_QUESTIONS, UI_TEXT } from '../constants';
import { AppState, TTTStage } from '../types';
import { Button, Card, ProgressBar, Badge, HealthBar, Toast, Confetti, RewardSplash, playSound } from './UI';

interface Props {
  state: AppState;
  updateState: (partial: Partial<AppState>) => void;
  onComplete: () => void;
}

// --- 1. MEMORY MATCH GAME (Discovery) ---
const MemoryGame: React.FC<{ 
  onFinish: () => void;
  showRussian: boolean;
  showUzbek: boolean;
}> = ({ onFinish, showRussian, showUzbek }) => {
  const [cards, setCards] = useState<{id: string, text: string, type: 'verb'|'meaning', matched: boolean, flipped: boolean}[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  
  useEffect(() => {
    // Generate deck
    const deck: any[] = [];
    DISCOVERY_PAIRS.slice(0, 4).forEach(p => {
      deck.push({ id: p.id, text: p.verb, type: 'verb', matched: false, flipped: false });
      
      // Determine meaning text based on language
      let meaningText = p.meaning;
      if (showRussian) meaningText += ` / ${p.meaningRu}`;
      if (showUzbek) meaningText += ` / ${p.meaningUz}`;
      
      deck.push({ id: p.id, text: meaningText, type: 'meaning', matched: false, flipped: false });
    });
    setCards(deck.sort(() => Math.random() - 0.5));
  }, [showRussian, showUzbek]);

  const handleCardClick = (idx: number) => {
    if (cards[idx].matched || selected.includes(idx) || selected.length >= 2) return;
    
    playSound('pop');
    const newSelected = [...selected, idx];
    setSelected(newSelected);
    
    // Visual flip
    const newCards = [...cards];
    newCards[idx].flipped = true;
    setCards(newCards);

    if (newSelected.length === 2) {
      const c1 = cards[newSelected[0]];
      const c2 = cards[newSelected[1]];
      
      if (c1.id === c2.id) {
        // Match!
        playSound('success');
        setTimeout(() => {
          setCards(prev => prev.map((c, i) => newSelected.includes(i) ? { ...c, matched: true } : c));
          setSelected([]);
        }, 500);
      } else {
        // No match
        playSound('error');
        setTimeout(() => {
          setCards(prev => prev.map((c, i) => newSelected.includes(i) ? { ...c, flipped: false } : c));
          setSelected([]);
        }, 1000);
      }
    }
  };

  const isComplete = cards.length > 0 && cards.every(c => c.matched);
  if (isComplete) {
    setTimeout(onFinish, 1000);
  }

  return (
    <div className="space-y-6">
       <div className="text-center">
        <h3 className="text-3xl font-black text-primary gamify-font animate-bounce-slow">{UI_TEXT.memoryMatch.en}</h3>
        <p className="text-slate-500">{UI_TEXT.findPairs.en} {showRussian && `/ ${UI_TEXT.findPairs.ru}`} {showUzbek && `/ ${UI_TEXT.findPairs.uz}`}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <div 
            key={i} 
            onClick={() => handleCardClick(i)}
            className={`
              h-32 rounded-2xl cursor-pointer perspective transition-all duration-300 transform hover:scale-105
              ${card.matched ? 'opacity-0' : 'opacity-100'}
            `}
          >
            <div className={`
              w-full h-full rounded-2xl flex items-center justify-center p-2 text-center text-sm font-bold shadow-lg
              transition-all duration-500 overflow-hidden
              ${card.flipped ? 'bg-white text-slate-800 rotate-y-0' : 'bg-primary text-transparent rotate-y-180'}
            `}>
              {card.flipped ? card.text : '?'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 2. PARTICLE HUNTER (Teach) ---
const ParticleHunter: React.FC<{ 
  showRussian: boolean; 
  showUzbek: boolean;
  onFinish: () => void;
  onSectionComplete: () => void;
}> = ({ showRussian, showUzbek, onFinish, onSectionComplete }) => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [locked, setLocked] = useState(false); // Locked until interaction
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const currentSection = LESSON_DATA[sectionIndex];
  const currentCard = currentSection.content[cardIndex];

  useEffect(() => {
    // Lock only if there's an interactive target
    if (currentCard.interactiveTarget) {
      setLocked(true);
      setSuccessMsg(null);
    } else {
      setLocked(false);
      setSuccessMsg(null);
    }
  }, [currentCard]);

  const handleWordClick = (word: string) => {
    if (!locked) return;
    const clean = word.replace(/[^a-zA-Z]/g, '');
    if (clean.toLowerCase() === currentCard.interactiveTarget?.toLowerCase()) {
      setLocked(false);
      playSound('success');
      setSuccessMsg(UI_TEXT.correct.en + (showRussian ? ` ${UI_TEXT.correct.ru}` : '') + (showUzbek ? ` ${UI_TEXT.correct.uz}` : ''));
    } else {
      playSound('error');
    }
  };

  const handleNext = () => {
    if (locked) return;
    
    if (cardIndex < currentSection.content.length - 1) {
      setCardIndex(cardIndex + 1);
    } else if (sectionIndex < LESSON_DATA.length - 1) {
      // Trigger reward for completing a section (before the last one)
      onSectionComplete();
      playSound('levelUp');
      setSectionIndex(sectionIndex + 1);
      setCardIndex(0);
    } else {
      onFinish();
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <Badge color="bg-blue-100 text-blue-800">Mission: {sectionIndex + 1}/3</Badge>
        <div className="text-slate-400 font-bold text-xs uppercase tracking-widest">
           Card {cardIndex + 1}/{currentSection.content.length}
        </div>
      </div>
      
      <Card className="min-h-[450px] flex flex-col items-center text-center relative overflow-hidden">
        {currentCard.type === 'warning' && <div className="absolute top-4 right-4 text-4xl animate-pulse">⚠️</div>}
        
        <div className="mt-8 text-8xl mb-8 animate-float">{currentCard.image || '📘'}</div>
        
        <div className="text-3xl font-black mb-6 text-slate-800 dark:text-white leading-relaxed">
          {currentCard.en.split(' ').map((word, i) => (
             <span 
               key={i} 
               onClick={() => handleWordClick(word)}
               className={`
                 inline-block mx-1 px-1 rounded transition-all cursor-pointer select-none
                 ${locked ? 'hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95' : ''}
                 ${!locked && currentCard.interactiveTarget && word.toLowerCase().includes(currentCard.interactiveTarget) ? 'text-green-500 scale-110' : ''}
               `}
             >
               {word}
             </span>
          ))}
        </div>

        {locked && (
          <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-bold animate-pulse text-sm mb-4">
             👆 {UI_TEXT.particleHunt.en} 
             {showRussian && <div className="text-xs mt-1">{UI_TEXT.particleHunt.ru}</div>}
             {showUzbek && <div className="text-xs mt-1">{UI_TEXT.particleHunt.uz}</div>}
          </div>
        )}

        {successMsg && <div className="text-green-500 font-bold animate-pop mb-4">{successMsg}</div>}

        <div className="space-y-2 w-full px-4">
          {showRussian && (
            <div className="p-3 rounded-xl bg-indigo-50 dark:bg-slate-700/50 w-full transition-all duration-300">
              <span className="text-xs font-bold text-indigo-400 uppercase mr-2">RU</span>
              <span className="text-slate-600 dark:text-slate-200 font-medium">{currentCard.ru}</span>
            </div>
          )}
          {showUzbek && (
            <div className="p-3 rounded-xl bg-teal-50 dark:bg-slate-700/50 w-full transition-all duration-300">
              <span className="text-xs font-bold text-teal-400 uppercase mr-2">UZ</span>
              <span className="text-slate-600 dark:text-slate-200 font-medium">{currentCard.uz}</span>
            </div>
          )}
        </div>
      </Card>

      <div className="mt-8">
        <Button onClick={handleNext} disabled={locked} className="w-full text-lg shadow-xl" variant={locked ? 'ghost' : 'primary'}>
          {locked ? `${UI_TEXT.locked.en} 🔒` : `${UI_TEXT.continue.en} ➡️`}
        </Button>
      </div>
    </div>
  );
};

// --- 3. BOSS BATTLE (Test 2) ---
const BossBattle: React.FC<{ 
  bossHp: number; 
  onDamage: (dmg: number) => void;
  onWin: () => void;
  showRussian: boolean;
  showUzbek: boolean;
}> = ({ bossHp, onDamage, onWin, showRussian, showUzbek }) => {
  const [qIndex, setQIndex] = useState(0);
  const [shaking, setShaking] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(true);

  const currentQ = KAHOOT_QUESTIONS[qIndex % KAHOOT_QUESTIONS.length];

  const handleAttack = (optIndex: number) => {
    if (!playerTurn) return;
    
    if (optIndex === currentQ.correctAnswer) {
      // Critical Hit
      playSound('success');
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      onDamage(100);
      if (bossHp - 100 <= 0) {
        playSound('win');
        onWin();
      } else {
        // Next Q
        setQIndex(q => q + 1);
      }
    } else {
      // Miss - Player takes imaginary damage (visual only for now)
      playSound('error');
      setPlayerTurn(false);
      setTimeout(() => setPlayerTurn(true), 1000);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-4">
      {/* Boss Display */}
      <div className="flex flex-col items-center mb-12 relative">
        <div className={`text-9xl mb-4 transition-transform duration-100 ${shaking ? 'translate-x-4 rotate-12' : 'animate-float'}`}>
          {BOSS_CONFIG.avatar}
        </div>
        <div className="text-2xl font-black text-slate-800 dark:text-white mb-2">{BOSS_CONFIG.name}</div>
        <div className="w-64">
           <HealthBar current={Math.max(0, bossHp)} max={BOSS_CONFIG.maxHp} />
        </div>
        
        {shaking && (
          <div className="absolute top-0 right-10 text-4xl font-black text-red-500 animate-pop">
            -100!
          </div>
        )}
      </div>

      {/* Battle Controls */}
      <Card className="bg-slate-900 border-slate-700">
        <div className="text-white text-center mb-6 font-bold text-xl">
          {currentQ.question.replace('____', '________')}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {currentQ.options.map((opt, i) => (
            <Button 
              key={i} 
              onClick={() => handleAttack(i)}
              variant="secondary"
              className="text-lg py-4"
            >
              {opt}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export const StudentMode: React.FC<Props> = ({ state, updateState, onComplete }) => {
  const [showReward, setShowReward] = useState<{xp: number, gems: number} | null>(null);

  const handleSectionReward = () => {
    const reward = { xp: 50, gems: 2 };
    updateState({
      xp: state.xp + reward.xp,
      gems: state.gems + reward.gems
    });
    setShowReward(reward);
    playSound('success');
  };

  const handleStageComplete = (nextStage: TTTStage) => {
    playSound('levelUp');
    updateState({ 
      tttStage: nextStage, 
      xp: state.xp + 150, 
      gems: state.gems + 5 
    });
    if (nextStage === TTTStage.TEST2 && state.tttStage === TTTStage.TEST2) {
      onComplete(); 
    }
  };

  const handleBossDamage = (amount: number) => {
    const newHp = state.boss.hp - amount;
    updateState({ boss: { ...state.boss, hp: newHp } });
    updateState({ xp: state.xp + 20 });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pb-20 relative">
      {/* Reward Popup */}
      {showReward && (
        <RewardSplash 
          xp={showReward.xp} 
          gems={showReward.gems} 
          onComplete={() => setShowReward(null)} 
        />
      )}

      {/* Stage Progress Header */}
      <div className="mb-8 flex justify-center items-center space-x-4">
        {[TTTStage.TEST1, TTTStage.TEACH, TTTStage.TEST2].map((stage, idx) => (
          <div key={stage} className="flex flex-col items-center">
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-4 transition-all
              ${state.tttStage === stage ? 'bg-primary border-primary text-white scale-125 shadow-glow' : 
                state.tttStage === stage || (state.tttStage === TTTStage.TEST2 && idx < 2) || (state.tttStage === TTTStage.TEACH && idx < 1) 
                ? 'bg-green-500 border-green-500 text-white' : 'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-400'}
            `}>
              {idx + 1}
            </div>
            <span className="text-xs font-bold mt-2 text-slate-400 uppercase tracking-tighter">{stage}</span>
          </div>
        ))}
      </div>

      {/* STAGE 1: DISCOVERY */}
      {state.tttStage === TTTStage.TEST1 && (
        <MemoryGame 
          showRussian={state.showRussian}
          showUzbek={state.showUzbek}
          onFinish={() => handleStageComplete(TTTStage.TEACH)} 
        />
      )}

      {/* STAGE 2: TEACH */}
      {state.tttStage === TTTStage.TEACH && (
        <ParticleHunter 
          showRussian={state.showRussian} 
          showUzbek={state.showUzbek}
          onFinish={() => handleStageComplete(TTTStage.TEST2)}
          onSectionComplete={handleSectionReward} 
        />
      )}

      {/* STAGE 3: BOSS BATTLE */}
      {state.tttStage === TTTStage.TEST2 && state.boss.hp > 0 && (
        <BossBattle 
          bossHp={state.boss.hp}
          onDamage={handleBossDamage}
          showRussian={state.showRussian}
          showUzbek={state.showUzbek}
          onWin={() => {
            updateState({ achievements: [...state.achievements, 'boss_slayer'] });
            onComplete();
          }}
        />
      )}
      
      {state.tttStage === TTTStage.TEST2 && state.boss.hp <= 0 && (
         <div className="text-center py-20 animate-pop">
           <Confetti />
           <div className="text-8xl mb-4">🏆</div>
           <h2 className="text-5xl font-black text-primary mb-6 gamify-font">{UI_TEXT.victory.en}</h2>
           <p className="text-xl mb-8">The Phrasal Phantom has been defeated.</p>
           <Button onClick={onComplete} variant="gold" className="text-2xl px-12 py-6 shadow-xl animate-bounce-slow">
             {UI_TEXT.continue.en}
           </Button>
         </div>
      )}
    </div>
  );
};
