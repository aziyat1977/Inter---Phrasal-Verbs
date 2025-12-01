
import React, { useState } from 'react';
import { SPEAKING_QUESTIONS, UI_TEXT } from '../constants';
import { Button, Card, playSound, Badge } from './UI';

interface Props {
  onExit: () => void;
  showRussian: boolean;
  showUzbek: boolean;
  updateState: (partial: any) => void;
  score: number;
}

const CATEGORIES = ['Daily Routine', 'Free Time', 'Sports', 'Video Games', 'Reading', 'Fun'];

export const SpeakingMode: React.FC<Props> = ({ onExit, showRussian, showUzbek, updateState, score }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Daily Routine');
  const [qIndex, setQIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  // Filter questions by category
  const questions = SPEAKING_QUESTIONS.filter(q => q.category === activeCategory);
  const currentQ = questions[qIndex];

  const handleNext = () => {
    playSound('pop');
    setShowAnswer(false);
    setShowTranslation(false);
    if (qIndex < questions.length - 1) {
      setQIndex(prev => prev + 1);
    } else {
      setQIndex(0); // Loop back
    }
  };

  const handleRecord = () => {
    if (isRecording) {
      setIsRecording(false);
      playSound('success');
      // Award XP for "practice"
      updateState({ xp: score + 10, gems: score + 1 });
    } else {
      setIsRecording(true);
      playSound('click');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6 pb-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-black text-slate-800 dark:text-white gamify-font">
          🎙️ {UI_TEXT.speakingMode.en}
        </h2>
        <Button onClick={onExit} variant="ghost">Exit</Button>
      </div>

      {/* Categories */}
      <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-hide">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setQIndex(0); setShowAnswer(false); playSound('click'); }}
            className={`whitespace-nowrap px-4 py-2 rounded-full font-bold transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-lg scale-105' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-100'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Question Card */}
        <Card className="min-h-[400px] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl pointer-events-none">🗣️</div>
          
          <div>
            <Badge color="bg-indigo-100 text-indigo-800 mb-4">{activeCategory} #{qIndex + 1}</Badge>
            <h3 className="text-3xl font-black text-slate-800 dark:text-white mb-6 leading-tight">
              {currentQ.question.split(currentQ.targetVerb.en).map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="text-primary underline decoration-wavy underline-offset-4 decoration-yellow-400">
                      {currentQ.targetVerb.en}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </h3>

            {/* Hint Box */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase text-slate-400">Target Verb</span>
                <button 
                  onClick={() => setShowTranslation(!showTranslation)}
                  className="text-xs font-bold text-primary hover:text-primary/80"
                >
                  {showTranslation ? 'Hide Meaning' : 'Show Meaning'}
                </button>
              </div>
              <div className="font-bold text-lg text-primary">{currentQ.targetVerb.en}</div>
              
              {showTranslation && (
                <div className="mt-2 space-y-1 animate-slide-in">
                  {showRussian && (
                    <div className="text-sm flex items-center gap-2">
                      <span className="text-xs font-bold bg-indigo-100 text-indigo-800 px-1 rounded">RU</span>
                      <span className="text-slate-600 dark:text-slate-300">{currentQ.targetVerb.ru}</span>
                    </div>
                  )}
                  {showUzbek && (
                    <div className="text-sm flex items-center gap-2">
                      <span className="text-xs font-bold bg-teal-100 text-teal-800 px-1 rounded">UZ</span>
                      <span className="text-slate-600 dark:text-slate-300">{currentQ.targetVerb.uz}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <div className="text-center text-slate-400 text-sm font-bold uppercase mb-2">Strategy: Q.A.R.E.</div>
            <div className="flex justify-between text-xs font-bold text-slate-300 uppercase tracking-widest px-4">
              <span>Question</span>
              <span>Answer</span>
              <span>Reason</span>
              <span>Example</span>
            </div>
            <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full w-full opacity-50"></div>
          </div>

          <div className="mt-6 flex gap-4">
            <Button 
              onClick={handleRecord} 
              variant={isRecording ? 'danger' : 'primary'}
              className="flex-1 flex items-center justify-center gap-2"
            >
              {isRecording ? <span className="animate-pulse">🛑 Stop</span> : <span>🎙️ {UI_TEXT.speakTask.en}</span>}
            </Button>
            <Button onClick={handleNext} variant="secondary" className="px-6">➡️</Button>
          </div>
        </Card>

        {/* Model Answer Card */}
        <div className="space-y-4">
          {!showAnswer ? (
            <div 
              onClick={() => { setShowAnswer(true); playSound('pop'); }}
              className="h-full min-h-[200px] border-4 border-dashed border-slate-300 dark:border-slate-700 rounded-3xl flex items-center justify-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
            >
              <div className="text-center">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">💡</div>
                <div className="font-bold text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300">
                  {UI_TEXT.showModel.en}
                </div>
              </div>
            </div>
          ) : (
            <Card className="h-full bg-gradient-to-br from-yellow-50 to-white dark:from-slate-800 dark:to-slate-900 border-yellow-200 dark:border-slate-700 animate-pop">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-black text-xl text-yellow-600 dark:text-yellow-400">Model Answer</h3>
                <button onClick={() => setShowAnswer(false)} className="text-slate-400 hover:text-slate-600">✕</button>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-sm shrink-0">A</div>
                  <div>
                    <p className="font-bold text-slate-700 dark:text-slate-200">{currentQ.modelAnswer.answer}</p>
                    <p className="text-xs text-slate-400 uppercase mt-1">Direct Answer</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-black text-sm shrink-0">R</div>
                  <div>
                    <p className="font-medium text-slate-600 dark:text-slate-300">{currentQ.modelAnswer.reason}</p>
                    <p className="text-xs text-slate-400 uppercase mt-1">Reason</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0">E</div>
                  <div>
                    <p className="font-medium text-slate-600 dark:text-slate-300 italic">"{currentQ.modelAnswer.example}"</p>
                    <p className="text-xs text-slate-400 uppercase mt-1">Example</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 bg-yellow-100/50 dark:bg-yellow-900/20 rounded-lg text-xs text-yellow-800 dark:text-yellow-200">
                <strong>Tip:</strong> Keep it in Simple Present! Don't change the verb tense.
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
