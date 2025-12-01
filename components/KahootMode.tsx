
import React, { useState, useEffect } from 'react';
import { KAHOOT_QUESTIONS, UI_TEXT } from '../constants';
import { Button, Card, Toast, playSound } from './UI';
import { QuizQuestion } from '../types';

interface Props {
  onExit: (score: number, passed: boolean) => void;
  showRussian: boolean;
  showUzbek: boolean;
  customQuestions?: QuizQuestion[]; // Optional prop for specific quiz sets
}

export const KahootMode: React.FC<Props> = ({ onExit, showRussian, showUzbek, customQuestions }) => {
  const [qIndex, setQIndex] = useState(0);
  const [timer, setTimer] = useState(15);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  // Use custom questions if provided, otherwise default to the full arena list
  const activeQuestions = customQuestions || KAHOOT_QUESTIONS;

  useEffect(() => {
    if (timer > 0 && !showResult && !isFinished) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !showResult && !isFinished) {
      handleTimeOut();
    }
  }, [timer, showResult, isFinished]);

  const handleTimeOut = () => {
    playSound('error');
    setStreak(0);
    setShowResult(true);
  };

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
    
    const isCorrect = index === activeQuestions[qIndex].correctAnswer;
    
    if (isCorrect) {
      playSound('success');
      const multiplier = 1 + (streak * 0.1);
      const points = Math.round((1000 + (timer * 50)) * multiplier);
      setScore(s => s + points);
      setStreak(s => s + 1);
      setCorrectCount(c => c + 1);
    } else {
      playSound('error');
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (qIndex < activeQuestions.length - 1) {
      setQIndex(q => q + 1);
      setTimer(15);
      setShowResult(false);
      setSelected(null);
      playSound('pop');
    } else {
      playSound('win');
      setIsFinished(true);
    }
  };

  if (isFinished) {
    // 70% to pass if it's a campaign, or just general score for arena
    const passThreshold = Math.floor(activeQuestions.length * 0.7);
    const passed = correctCount >= passThreshold;

    return (
      <div className="min-h-screen bg-indigo-900 flex flex-col items-center justify-center p-4">
        <div className="text-9xl animate-pop mb-4">{passed ? '👑' : '🥺'}</div>
        <h1 className="text-6xl font-black text-white mb-4 gamify-font">{passed ? UI_TEXT.victory.en : UI_TEXT.gameOver.en}</h1>
        <div className="text-2xl text-slate-300 mb-2">Accuracy: {correctCount} / {activeQuestions.length}</div>
        <div className="text-4xl text-yellow-400 font-bold mb-8">{UI_TEXT.score.en}: {score}</div>
        <Button variant="gold" onClick={() => onExit(score, passed)}>{UI_TEXT.continue.en}</Button>
      </div>
    );
  }

  const currentQ = activeQuestions[qIndex];
  const colors = ["bg-red-500", "bg-blue-500", "bg-yellow-500", "bg-green-500"];
  const shapes = ["▲", "◆", "●", "■"];

  return (
    <div className={`min-h-screen flex flex-col items-center p-4 transition-colors duration-500 ${streak > 2 ? 'bg-orange-900' : 'bg-indigo-900'}`}>
      
      {/* Streak Indicator */}
      {streak > 1 && (
        <div className="absolute top-20 right-4 animate-bounce-slow">
           <div className="text-4xl">🔥 {streak}x</div>
           <div className="text-yellow-400 font-bold uppercase text-xs text-center">Combo!</div>
        </div>
      )}

      {/* Header */}
      <div className="w-full max-w-4xl flex justify-between text-white text-xl font-bold mb-8 mt-4">
        <div className="bg-white/10 backdrop-blur px-6 py-2 rounded-full border border-white/20">{qIndex + 1} / {activeQuestions.length}</div>
        <div className="bg-white/10 backdrop-blur px-6 py-2 rounded-full border border-white/20">💎 {score}</div>
      </div>

      {/* Main Game Area */}
      <div className="w-full max-w-4xl flex-1 flex flex-col justify-center pb-12">
        
        {/* Timer & Question */}
        <div className="mb-8 text-center relative">
           <div className={`
             inline-block rounded-full w-24 h-24 flex items-center justify-center text-4xl font-black mb-6 shadow-2xl border-4 border-white
             ${timer < 5 ? 'bg-red-600 animate-pulse' : 'bg-purple-600'} text-white
           `}>
             {timer}
           </div>
           <div className="bg-white p-8 rounded-3xl shadow-[0_10px_0_0_rgba(0,0,0,0.2)] min-h-[180px] flex items-center justify-center transform hover:scale-[1.02] transition-transform">
             <h2 className="text-4xl font-black text-slate-800 text-center leading-tight">{currentQ.question}</h2>
           </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQ.options.map((opt, idx) => (
            <button
              key={idx}
              disabled={showResult}
              onClick={() => handleAnswer(idx)}
              className={`
                ${colors[idx]} h-32 rounded-2xl shadow-[0_6px_0_0_rgba(0,0,0,0.3)]
                flex items-center p-6 text-left group transition-all duration-200
                ${!showResult ? 'hover:brightness-110 active:translate-y-2 active:shadow-none' : ''}
                ${showResult && idx !== currentQ.correctAnswer ? 'opacity-20 grayscale scale-95' : ''}
                ${showResult && idx === currentQ.correctAnswer ? 'ring-8 ring-white scale-105 z-10' : ''}
              `}
            >
              <span className="text-5xl mr-6 text-black/20 font-black">{shapes[idx]}</span>
              <span className="text-3xl font-black text-white drop-shadow-md">{opt}</span>
            </button>
          ))}
        </div>

        {/* Results Info */}
        {showResult && (
          <div className="mt-8 mx-auto max-w-md w-full bg-slate-900 p-6 rounded-2xl border-4 border-white shadow-2xl text-center animate-pop z-50">
             <h3 className="text-3xl font-black text-white mb-2">
               {selected === currentQ.correctAnswer ? UI_TEXT.correct.en : UI_TEXT.wrong.en}
             </h3>
             <div className="text-slate-300 mb-6 space-y-2">
               <p>{currentQ.explanation}</p>
               {showRussian && <p className="text-indigo-300 text-sm">{currentQ.explanationRu}</p>}
               {showUzbek && <p className="text-teal-300 text-sm">{currentQ.explanationUz}</p>}
             </div>
             <Button onClick={nextQuestion} variant="gold" className="w-full text-xl">
               {qIndex < activeQuestions.length - 1 ? UI_TEXT.continue.en : UI_TEXT.continue.en}
             </Button>
          </div>
        )}
      </div>
    </div>
  );
};
