import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUIZ_DATA, QuizQuestion } from '../data/quizData';
import { Sparkles, ArrowRight, RotateCcw, BrainCircuit, Star, Zap, CheckCircle2, XCircle } from 'lucide-react';

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

type QuizState = 'START' | 'PLAYING' | 'RESULT';

// --- SUB-COMPONENTS ---

function QuizStart({ onStart }: { onStart: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.1, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-2xl w-full flex flex-col items-center justify-center text-center z-10"
    >
      <div className="w-24 h-24 mb-8 rounded-full bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center relative backdrop-blur-md">
        <BrainCircuit className="w-12 h-12 text-cyan-300" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-4px] rounded-full border border-cyan-400/30 border-dashed"
        />
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Cinzel'] tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-purple-300 drop-shadow-[0_0_15px_rgba(103,232,249,0.4)]">
        Khảo Nghiệm Triết Học
      </h1>
      
      <p className="text-lg text-white/70 mb-12 max-w-lg leading-relaxed">
        Chào mừng bạn bước vào Tháp Tri Thức. Dưới đây là 10 câu hỏi ngẫu nhiên được trích xuất từ kho tàng học thuật. Hãy chứng minh sự uyên bác của bạn.
      </p>

      <button 
        onClick={onStart}
        className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-lg opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
        <span className="relative flex items-center font-bold text-lg tracking-wider">
          <Sparkles className="w-5 h-5 mr-3" />
          BẮT ĐẦU KHẢO NGHIỆM
          <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
        </span>
      </button>
    </motion.div>
  );
}

function QuizSession({ 
  question, 
  currentIndex, 
  total, 
  selectedAnswer, 
  onAnswer 
}: { 
  question: QuizQuestion; 
  currentIndex: number; 
  total: number;
  selectedAnswer: number | null;
  onAnswer: (index: number) => void;
}) {
  return (
    <motion.div 
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-4xl w-full flex flex-col items-center z-10"
    >
      {/* Progress Constellation */}
      <div className="w-full flex items-center justify-between mb-12 px-4 relative">
        <div className="absolute top-1/2 left-4 right-4 h-[2px] bg-white/10 -translate-y-1/2 z-0" />
        <div 
          className="absolute top-1/2 left-4 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 -translate-y-1/2 z-0 transition-all duration-500 ease-out"
          style={{ width: `calc(${(currentIndex / (total - 1)) * 100}% - 2rem)` }}
        />
        {Array.from({ length: total }).map((_, i) => (
          <div 
            key={i}
            className={`relative z-10 w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
              i <= currentIndex 
                ? 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]' 
                : 'bg-slate-800 border border-white/20'
            }`}
          >
            {i === currentIndex && (
              <motion.div 
                layoutId="active-node-glow"
                className="absolute inset-[-8px] rounded-full bg-cyan-400/30 blur-md"
              />
            )}
          </div>
        ))}
      </div>

      {/* Question Card */}
      <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 opacity-10">
          <span className="text-8xl font-serif font-black">{currentIndex + 1}</span>
        </div>
        
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold tracking-wider mb-6 border border-cyan-500/30">
            CÂU HỎI {currentIndex + 1} / {total}
          </span>
          <h2 className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
            {question.question}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === question.correctAnswer;
              
              let stateClass = "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white/90";
              let icon = null;

              if (selectedAnswer !== null) {
                if (isCorrect) {
                  stateClass = "border-emerald-500/50 bg-emerald-500/20 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.3)]";
                  icon = <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />;
                } else if (isSelected) {
                  stateClass = "border-rose-500/50 bg-rose-500/20 text-rose-100 shadow-[0_0_15px_rgba(244,63,94,0.3)]";
                  icon = <XCircle className="w-5 h-5 text-rose-400 shrink-0" />;
                } else {
                  stateClass = "border-white/5 bg-transparent opacity-40 text-white/50";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => onAnswer(idx)}
                  disabled={selectedAnswer !== null}
                  className={`relative p-6 rounded-2xl border text-left transition-all duration-300 flex items-start gap-4 group ${stateClass}`}
                >
                  {/* Option Letter */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-bold ${
                    selectedAnswer === null 
                      ? 'bg-white/10 text-cyan-200 group-hover:bg-cyan-500/20 group-hover:text-cyan-100' 
                      : isCorrect 
                        ? 'bg-emerald-500/30 text-emerald-200'
                        : isSelected
                          ? 'bg-rose-500/30 text-rose-200'
                          : 'bg-white/5 text-white/30'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </div>
                  
                  {/* Option Text */}
                  <div className="flex-1 flex items-center gap-3">
                    <span className="text-lg leading-snug pt-1">{opt}</span>
                    {icon && <div className="ml-auto">{icon}</div>}
                  </div>

                  {/* Hover Glow Effect */}
                  {selectedAnswer === null && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-400/5 to-transparent rounded-2xl pointer-events-none transition-opacity duration-300" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function QuizResult({ score, total, onRetry }: { score: number; total: number; onRetry: () => void }) {
  
  let rankInfo = { title: "", color: "", desc: "", icon: Star };
  if (score === total) {
    rankInfo = { 
      title: "Vĩ Nhân Thức Tỉnh", 
      color: "from-yellow-300 to-amber-500", 
      desc: "Trí tuệ của bạn đã đạt đến cảnh giới tối cao, thấu hiểu tận cùng bản chất thế giới.",
      icon: Sparkles
    };
  } else if (score >= 8) {
    rankInfo = { 
      title: "Triết Gia Đương Thời", 
      color: "from-cyan-300 to-blue-500", 
      desc: "Tầm nhìn sâu rộng, biện chứng sắc sảo. Bạn đã sẵn sàng để khai sáng thế giới.",
      icon: BrainCircuit
    };
  } else if (score >= 5) {
    rankInfo = { 
      title: "Học Giả Tầm Đạo", 
      color: "from-emerald-300 to-teal-500", 
      desc: "Chân lý đang dần hé mở. Bạn đã nắm bắt được những nền tảng quan trọng nhất.",
      icon: Zap
    };
  } else {
    rankInfo = { 
      title: "Kẻ Mộng Du", 
      color: "from-slate-400 to-slate-600", 
      desc: "Vẫn còn chìm đắm trong sương mù của nhận thức. Hãy tiếp tục học hỏi và mài giũa tư duy.",
      icon: XCircle
    };
  }

  const RankIcon = rankInfo.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-xl w-full flex flex-col items-center justify-center text-center z-10"
    >
      <div className="relative mb-8">
        {/* Glow behind */}
        <div className={`absolute inset-0 bg-gradient-to-tr ${rankInfo.color} blur-[60px] opacity-40 rounded-full`} />
        
        {/* Score Circle */}
        <svg className="w-48 h-48 relative z-10" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
          <motion.circle 
            cx="50" cy="50" r="45" fill="none" 
            stroke="url(#rankGlow)" strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="283" // 2 * pi * 45
            initial={{ strokeDashoffset: 283 }}
            animate={{ strokeDashoffset: 283 - (283 * score) / total }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            transform="rotate(-90 50 50)"
          />
          <defs>
            <linearGradient id="rankGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              {rankInfo.color.includes('cyan') && <><stop offset="0%" stopColor="#67e8f9" /><stop offset="100%" stopColor="#3b82f6" /></>}
              {rankInfo.color.includes('yellow') && <><stop offset="0%" stopColor="#fde047" /><stop offset="100%" stopColor="#f59e0b" /></>}
              {rankInfo.color.includes('emerald') && <><stop offset="0%" stopColor="#6ee7b7" /><stop offset="100%" stopColor="#14b8a6" /></>}
              {rankInfo.color.includes('slate') && <><stop offset="0%" stopColor="#94a3b8" /><stop offset="100%" stopColor="#475569" /></>}
            </linearGradient>
          </defs>
          <text x="50" y="45" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="bold" fontFamily="system-ui" dominantBaseline="central">
            {score}/{total}
          </text>
          <text x="50" y="65" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10" dominantBaseline="central">
            Chính xác
          </text>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
          <RankIcon className="w-5 h-5 text-white/80" />
          <span className={`font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r ${rankInfo.color}`}>
            {rankInfo.title}
          </span>
        </div>
        
        <p className="text-white/70 text-lg mb-10">
          {rankInfo.desc}
        </p>

        <button 
          onClick={onRetry}
          className="group relative px-8 py-3 rounded-full overflow-hidden border border-white/20 transition-all hover:border-white/50 bg-white/5 hover:bg-white/10"
        >
          <span className="relative flex items-center font-semibold tracking-wide">
            <RotateCcw className="w-4 h-4 mr-2 group-hover:-rotate-180 transition-transform duration-500" />
            THỬ THÁCH LẠI
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
}

// --- MAIN COMPONENT ---

export default function Quiz() {
  const [state, setState] = useState<QuizState>('START');
  const [sessionQuestions, setSessionQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const startQuiz = () => {
    // Pick 10 random questions
    const shuffled = shuffleArray(QUIZ_DATA);
    setSessionQuestions(shuffled.slice(0, 10));
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setState('PLAYING');
  };

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return; // prevent multiple clicks
    setSelectedAnswer(index);
    
    if (index === sessionQuestions[currentIndex].correctAnswer) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      if (currentIndex < 9) {
        setCurrentIndex(c => c + 1);
        setSelectedAnswer(null);
      } else {
        setState('RESULT');
      }
    }, 1500); // 1.5s delay to show correct/wrong feedback
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-8 text-white">
      {/* Immersive Background Specific to Quiz */}
      <div className="absolute inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-[#02050a]" />
        
        {/* Animated stars/particles simulation */}
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '40px 40px', backgroundPosition: '0 0' }} />
        
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <AnimatePresence mode="wait">
        {state === 'START' && (
          <QuizStart key="start" onStart={startQuiz} />
        )}
        {state === 'PLAYING' && sessionQuestions.length > 0 && (
          <QuizSession 
            key={`playing-${currentIndex}`} // force re-render for slide effect
            question={sessionQuestions[currentIndex]}
            currentIndex={currentIndex}
            total={10}
            selectedAnswer={selectedAnswer}
            onAnswer={handleAnswer}
          />
        )}
        {state === 'RESULT' && (
          <QuizResult key="result" score={score} total={10} onRetry={startQuiz} />
        )}
      </AnimatePresence>
    </div>
  );
}
