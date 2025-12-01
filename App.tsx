
import React, { useState, useEffect } from 'react';
import { AppMode, AppState, TTTStage, QuizQuestion } from './types';
import { StudentMode } from './components/StudentMode';
import { TeacherMode } from './components/TeacherMode';
import { KahootMode } from './components/KahootMode';
import { SpeakingMode } from './components/SpeakingMode';
import { Button, Card, Badge, ProgressBar, playSound, Toast } from './components/UI';
import { BOSS_CONFIG, UI_TEXT, CAMPAIGN_LEVELS } from './constants';

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
    boss: BOSS_CONFIG,
    campaignProgress: 0
  });

  const [currentQuizQuestions, setCurrentQuizQuestions] = useState<QuizQuestion[] | undefined>(undefined);

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

  const handleKahootExit = (finalScore: number, passed: boolean) => {
    // If we were in a campaign, and we passed, unlock next level
    if (currentQuizQuestions && passed) {
      // Find which level we just played
      const levelIndex = CAMPAIGN_LEVELS.findIndex(l => l.questions === currentQuizQuestions);
      if (levelIndex >= 0 && levelIndex === state.campaignProgress) {
        updateState({ campaignProgress: state.campaignProgress + 1, achievements: [...state.achievements, 'campaign_hero'] });
      }
    }

    // If passed, give rewards
    const xpGain = passed ? 500 : 50;
    const gemGain = passed ? 10 : 1;

    updateState({ 
      mode: AppMode.HOME, 
      score: state.score + finalScore,
      xp: state.xp + xpGain,
      gems: state.gems + gemGain
    });
    setCurrentQuizQuestions(undefined); // Reset specific quiz
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
          customQuestions={currentQuizQuestions}
        />
      </div>
    );
  }

  // Campaign Menu Overlay
  if (state.mode === AppMode.CAMPAIGN_MENU) {
    return (
      <div className={`min-h-screen ${state.isDark ? 'dark' : ''} bg-slate-50 dark:bg-slate-950 flex flex-col`}>
        <TopBar />
        <div className="container mx-auto p-4 pt-8">
           <div className="flex items-center gap-4 mb-8">
             <Button onClick={() => updateState({ mode: AppMode.HOME })} variant="secondary">⬅️ Back</Button>
             <h1 className="text-4xl font-black text-slate-800 dark:text-white gamify-font">Campaign Map</h1>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {CAMPAIGN_LEVELS.map((level, idx) => {
               const isLocked = idx > state.campaignProgress;
               return (
                 <div 
                   key={level.id}
                   onClick={() => {
                     if (!isLocked) {
                       setCurrentQuizQuestions(level.questions);
                       updateState({ mode: AppMode.KAHOOT });
                     }
                   }}
                   className={`
                     relative h-40 rounded-3xl border-4 flex flex-col items-center justify-center cursor-pointer transition-all transform hover:scale-105 active:scale-95
                     ${isLocked 
                        ? 'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-700 grayscale opacity-50' 
                        : 'bg-white dark:bg-slate-800 border-indigo-500 shadow-xl'
                     }
                   `}
                 >
                   <div className="text-4xl mb-2">{isLocked ? '🔒' : '⚔️'}</div>
                   <div className="font-bold text-center px-4">
                     <div className="text-xs uppercase text-slate-400">Level {idx + 1}</div>
                     <div className="text-slate-800 dark:text-white leading-tight">{level.title}</div>
                   </div>
                 </div>
               );
             })}
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${state.isDark ? 'dark' : ''} bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-300`}>
      <TopBar />

      <main className="flex-1 container mx-auto p-4 flex flex-col">
        {state.mode === AppMode.HOME && (
          <div className="max-w-4xl mx-auto w-full space-y-8 py-8 animate-slide-in">
            
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-2 gamify-font">
                   {UI_TEXT.welcome.en}, Student!
                </h1>
                <p className="opacity-90 text-lg mb-6 max-w-lg">
                   Master Unit 55 Phrasal Verbs through interactive games, boss battles, and speaking challenges.
                </p>
                <Button 
                   onClick={() => updateState({ mode: AppMode.STUDENT })} 
                   variant="gold"
                   className="shadow-xl"
                >
                   {UI_TEXT.start.en} ▶
                </Button>
              </div>
              
              {/* Decorative Background Elements */}
              <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
              <div className="absolute bottom-0 right-10 text-9xl transform translate-y-1/4 rotate-12 opacity-20 select-none">🚀</div>
            </div>

            {/* Mode Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card 
                onClick={() => updateState({ mode: AppMode.STUDENT })}
                className="group cursor-pointer hover:border-primary border-transparent transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                     <Badge color="bg-green-100 text-green-800 mb-2">Adventure Mode</Badge>
                     <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">{UI_TEXT.studentMode.en}</h3>
                     <p className="text-slate-500 text-sm">Follow the story, learn the rules, and defeat the boss.</p>
                  </div>
                  <div className="text-5xl group-hover:scale-125 transition-transform duration-300">🗺️</div>
                </div>
              </Card>

              <Card 
                onClick={() => updateState({ mode: AppMode.CAMPAIGN_MENU })}
                className="group cursor-pointer hover:border-blue-500 border-transparent transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                     <Badge color="bg-blue-100 text-blue-800 mb-2">Ranked Play</Badge>
                     <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">{UI_TEXT.campaignMode.en}</h3>
                     <p className="text-slate-500 text-sm">Progress through 6 challenging levels of quizzes.</p>
                  </div>
                  <div className="text-5xl group-hover:scale-125 transition-transform duration-300">🏰</div>
                </div>
              </Card>

              <Card 
                onClick={() => updateState({ mode: AppMode.SPEAKING })}
                className="group cursor-pointer hover:border-pink-500 border-transparent transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                     <Badge color="bg-pink-100 text-pink-800 mb-2">Microphone Enabled</Badge>
                     <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">{UI_TEXT.speakingMode.en}</h3>
                     <p className="text-slate-500 text-sm">Practice your pronunciation with speaking tasks.</p>
                  </div>
                  <div className="text-5xl group-hover:scale-125 transition-transform duration-300">🎙️</div>
                </div>
              </Card>

              <Card 
                onClick={() => { setCurrentQuizQuestions(undefined); updateState({ mode: AppMode.KAHOOT }); }}
                className="group cursor-pointer hover:border-purple-500 border-transparent transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                     <Badge color="bg-purple-100 text-purple-800 mb-2">Quick Play</Badge>
                     <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">{UI_TEXT.kahootMode.en}</h3>
                     <p className="text-slate-500 text-sm">Endless random questions. Test your speed!</p>
                  </div>
                  <div className="text-5xl group-hover:scale-125 transition-transform duration-300">⚡</div>
                </div>
              </Card>

              <Card 
                onClick={() => updateState({ mode: AppMode.TEACHER })}
                className="group cursor-pointer hover:border-teal-500 border-transparent transition-all md:col-span-2 bg-slate-100 dark:bg-slate-900"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl group-hover:rotate-12 transition-transform">👨‍🏫</div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-800 dark:text-white">{UI_TEXT.teacherMode.en}</h3>
                     <p className="text-slate-500 text-xs">View lesson plan, TTT structure, and common errors.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {state.mode === AppMode.STUDENT && (
          <StudentMode state={state} updateState={updateState} onComplete={handleStudentComplete} />
        )}

        {state.mode === AppMode.TEACHER && (
          <div className="space-y-4">
             <Button onClick={() => updateState({ mode: AppMode.HOME })} variant="secondary">⬅️ Back to Menu</Button>
             <TeacherMode />
          </div>
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
      </main>
    </div>
  );
};

export default App;
