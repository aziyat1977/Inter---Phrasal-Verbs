
import React, { useState, useEffect } from 'react';
import { AppMode, AppState, TTTStage } from './types';
import { StudentMode } from './components/StudentMode';
import { TeacherMode } from './components/TeacherMode';
import { KahootMode } from './components/KahootMode';
import { SpeakingMode } from './components/SpeakingMode';
import { Button, Card, Badge, ProgressBar, playSound, Toast } from './components/UI';
import { BOSS_CONFIG, UI_TEXT } from './constants';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    mode: AppMode.HOME,
    isDark: false,
    showRussian: false,
    showUzbek: false,
    score: 0,
    xp: 0,
    level: 1,
    gems: 0,
    streak: 1,
    currentLessonIndex: 0,
    tttStage: TTTStage.TEST1,
    achievements: [],
    boss: BOSS_CONFIG
  });

  // Calculate Level based on XP
  useEffect(() => {
    const newLevel = Math.floor(state.xp / 1000) + 1;
    if (newLevel > state.level) {
      playSound('levelUp');
      updateState({ level: newLevel });
    }
  }, [state.xp]);

  useEffect(() => {
    if (state.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state.isDark]);

  const updateState = (partial: Partial<AppState>) => {
    setState(prev => ({ ...prev, ...partial }));
  };

  const handleKahootExit = (finalScore: number) => {
    updateState({ 
      mode: AppMode.HOME, 
      score: state.score + finalScore,
      xp: state.xp + 500,
      gems: state.gems + 10
    });
  };

  const handleStudentComplete = () => {
    playSound('win');
    updateState({ mode: AppMode.HOME, gems: state.gems + 50 });
  };

  const TopBar = () => (
    <div className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b-2 border-slate-200 dark:border-slate-800 px-4 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => updateState({ mode: AppMode.HOME })}>
          <div className="bg-gradient-to-br from-primary to-purple-700 text-white p-2 rounded-xl font-black text-xl shadow-lg transform group-hover:scale-110 transition-transform">PV</div>
          <div className="hidden sm:block">
             <div className="font-black text-slate-800 dark:text-white gamify-font text-xl leading-none">PhrasalMaster</div>
             <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{UI_TEXT.level.en} {state.level} Student</div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {state.mode !== AppMode.KAHOOT && (
            <>
               <div className="hidden md:flex flex-col w-32">
                 <div className="flex justify-between text-[10px] font-black uppercase text-slate-400 mb-1">
                   <span>XP</span>
                   <span>{state.xp % 1000} / 1000</span>
                 </div>
                 <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                   <div className="h-full bg-blue-500 w-[40%]"></div>
                 </div>
               </div>

              <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1.5 rounded-xl border border-yellow-200 dark:border-yellow-700">
                <span className="text-yellow-600 dark:text-yellow-400">💎</span>
                <span className="font-black text-yellow-800 dark:text-yellow-200">{state.gems}</span>
              </div>

              {/* Language Toggles */}
              <button 
                onClick={() => { playSound('click'); updateState({ showRussian: !state.showRussian }); }}
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs transition-all shadow-sm border-b-4 ${state.showRussian ? 'bg-indigo-500 border-indigo-700 text-white translate-y-1 border-b-0' : 'bg-slate-100 border-slate-300 text-slate-500 hover:bg-slate-200'}`}
              >
                RU
              </button>
              <button 
                onClick={() => { playSound('click'); updateState({ showUzbek: !state.showUzbek }); }}
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs transition-all shadow-sm border-b-4 ${state.showUzbek ? 'bg-teal-500 border-teal-700 text-white translate-y-1 border-b-0' : 'bg-slate-100 border-slate-300 text-slate-500 hover:bg-slate-200'}`}
              >
                UZ
              </button>

              <button 
                onClick={() => { playSound('click'); updateState({ isDark: !state.isDark }); }}
                className="w-10 h-10 rounded-xl bg-slate-800 text-yellow-400 flex items-center justify-center hover:bg-slate-700 transition-all shadow-lg"
              >
                {state.isDark ? '☀️' : '🌙'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  // Kahoot Fullscreen
  if (state.mode === AppMode.KAHOOT) {
    return (
      <div className={`min-h-screen ${state.isDark ? 'dark' : ''}`}>
        <KahootMode 
          onExit={handleKahootExit} 
          showRussian={state.showRussian}
          showUzbek={state.showUzbek}
        />
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col font-sans ${state.isDark ? 'dark' : ''} bg-slate-50 dark:bg-slate-950`}>
      <TopBar />
      
      <main className="flex-1 container mx-auto p-4 pt-8">
        
        {state.mode === AppMode.HOME && (
          <div className="max-w-2xl mx-auto space-y-8 pb-12">
            
            {/* Header Map */}
            <div className="text-center space-y-2 py-8">
              <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 gamify-font drop-shadow-sm">
                World Map
              </h1>
              <p className="text-slate-400 font-bold uppercase tracking-widest">{UI_TEXT.start.en} / {UI_TEXT.start.ru} / {UI_TEXT.start.uz}</p>
            </div>

            {/* LEVEL 1: THE QUEST */}
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
               <Card 
                 onClick={() => updateState({ mode: AppMode.STUDENT })}
                 className="relative cursor-pointer hover:scale-[1.02] transition-transform border-none bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-900"
               >
                 <div className="flex items-center gap-6">
                   <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-5xl shadow-inner">
                     🗺️
                   </div>
                   <div className="flex-1">
                     <div className="flex justify-between items-center mb-1">
                        <h3 className="text-2xl font-black text-slate-800 dark:text-white">{UI_TEXT.studentMode.en}</h3>
                        {state.boss.hp <= 0 && <span className="text-green-500 font-bold">COMPLETED ✅</span>}
                     </div>
                     <p className="text-slate-500 font-medium mb-4">
                       Journey through the lands of Phrasal Verbs.
                       {state.showRussian && <span className="block text-indigo-400 text-sm mt-1">{UI_TEXT.studentMode.ru}</span>}
                       {state.showUzbek && <span className="block text-teal-400 text-sm mt-1">{UI_TEXT.studentMode.uz}</span>}
                     </p>
                     <ProgressBar current={state.boss.hp <= 0 ? 100 : state.boss.hp < 500 ? 50 : 0} total={100} color="bg-blue-500" />
                   </div>
                 </div>
               </Card>
            </div>

            {/* LEVEL 2: THE ARENA */}
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
               <Card 
                 onClick={() => updateState({ mode: AppMode.KAHOOT })}
                 className="relative cursor-pointer hover:scale-[1.02] transition-transform border-none bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-slate-900"
               >
                 <div className="flex items-center gap-6">
                   <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-5xl shadow-inner">
                     ⚔️
                   </div>
                   <div className="flex-1">
                     <h3 className="text-2xl font-black text-slate-800 dark:text-white">{UI_TEXT.kahootMode.en}</h3>
                     <p className="text-slate-500 font-medium">
                       Ranked matches against time.
                       {state.showRussian && <span className="block text-indigo-400 text-sm mt-1">{UI_TEXT.kahootMode.ru}</span>}
                       {state.showUzbek && <span className="block text-teal-400 text-sm mt-1">{UI_TEXT.kahootMode.uz}</span>}
                     </p>
                   </div>
                   <div className="text-right hidden sm:block">
                     <div className="text-3xl font-black text-purple-600">{state.score}</div>
                     <div className="text-xs font-bold text-slate-400 uppercase">High Score</div>
                   </div>
                 </div>
               </Card>
            </div>

            {/* LEVEL 3: SPEAKING CORNER */}
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
               <Card 
                 onClick={() => updateState({ mode: AppMode.SPEAKING })}
                 className="relative cursor-pointer hover:scale-[1.02] transition-transform border-none bg-gradient-to-br from-white to-rose-50 dark:from-slate-800 dark:to-slate-900"
               >
                 <div className="flex items-center gap-6">
                   <div className="w-20 h-20 bg-rose-100 dark:bg-rose-900/30 rounded-2xl flex items-center justify-center text-5xl shadow-inner">
                     🎙️
                   </div>
                   <div className="flex-1">
                     <h3 className="text-2xl font-black text-slate-800 dark:text-white">{UI_TEXT.speakingMode.en}</h3>
                     <p className="text-slate-500 font-medium">
                       Practice speaking in context (Q.A.R.E. Method).
                       {state.showRussian && <span className="block text-indigo-400 text-sm mt-1">{UI_TEXT.speakingMode.ru}</span>}
                       {state.showUzbek && <span className="block text-teal-400 text-sm mt-1">{UI_TEXT.speakingMode.uz}</span>}
                     </p>
                   </div>
                 </div>
               </Card>
            </div>

            {/* LEVEL 4: THE LIBRARY */}
            <Card 
              onClick={() => updateState({ mode: AppMode.TEACHER })}
              className="cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-2 border-dashed border-slate-300 dark:border-slate-700"
            >
              <div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-3xl">📜</div>
                <div>
                  <h3 className="font-bold text-slate-700 dark:text-slate-300">{UI_TEXT.teacherMode.en}</h3>
                  <p className="text-xs text-slate-500">Access lesson plans</p>
                </div>
              </div>
            </Card>

          </div>
        )}

        {state.mode === AppMode.STUDENT && (
          <StudentMode 
            state={state} 
            updateState={updateState} 
            onComplete={handleStudentComplete} 
          />
        )}

        {state.mode === AppMode.KAHOOT && (
          <KahootMode 
            onExit={handleKahootExit} 
            showRussian={state.showRussian} 
            showUzbek={state.showUzbek} 
          />
        )}

        {state.mode === AppMode.SPEAKING && (
          <SpeakingMode 
            onExit={() => updateState({ mode: AppMode.HOME })}
            showRussian={state.showRussian}
            showUzbek={state.showUzbek}
            updateState={updateState}
            score={state.score}
          />
        )}

        {state.mode === AppMode.TEACHER && (
          <TeacherMode />
        )}

      </main>
    </div>
  );
};

export default App;
