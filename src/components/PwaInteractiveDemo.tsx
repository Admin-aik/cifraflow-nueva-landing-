import React, { useState } from 'react';
import { 
  Sparkles, 
  Trophy, 
  ShieldCheck, 
  Zap, 
  CheckCircle, 
  XCircle, 
  RefreshCw, 
  Award, 
  Smartphone,
  Share2,
  ArrowUp
} from 'lucide-react';

export const PwaInteractiveDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userScore, setUserScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [badgeUnlocked, setBadgeUnlocked] = useState(false);

  const questions = [
    {
      id: 1,
      title: 'Pregunta 1: Ciberseguridad en Billeteras',
      scenario: 'Un supuesto ejecutivo te ofrece duplicar tus ahorros en 24 horas si le transfieres tu saldo por Pago Móvil. ¿Qué tipo de amenaza identificas?',
      options: [
        { text: 'A) Una inversión formal garantizada por el Estado.', isCorrect: false },
        { text: 'B) Un esquema ponzi/piramidal de ingeniería social.', isCorrect: true },
        { text: 'C) Una transacción libre de riesgo.', isCorrect: false }
      ],
      explanation: 'Las promesas de duplicar dinero en tiempo récord siempre son estafas o esquemas piramidales.'
    },
    {
      id: 2,
      title: 'Pregunta 2: Filtro Necesidad vs. Deseo',
      scenario: 'Tienes dinero ahorrado para la matrícula de Bachillerato pero quieres comprar unos zapatos deportivos de edición limitada. ¿Cómo lo clasificas?',
      options: [
        { text: 'A) Los zapatos son una necesidad de supervivencia.', isCorrect: false },
        { text: 'B) La matrícula es la Necesidad prioritaria; los zapatos son un Deseo postergable.', isCorrect: true },
        { text: 'C) Ambas compras tienen la misma urgencia.', isCorrect: false }
      ],
      explanation: 'Distinguir entre necesidades fundamentales y deseos impulsores protege el presupuesto familiar.'
    }
  ];

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (selectedAnswers[questionId] !== undefined) return; // already answered
    
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    
    if (questions[questionId - 1].options[optionIndex].isCorrect) {
      setUserScore(prev => prev + 100);
    }
  };

  const handleNextStep = () => {
    if (currentStep < questions.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      setBadgeUnlocked(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setUserScore(0);
    setSelectedAnswers({});
    setBadgeUnlocked(false);
  };

  const currentQ = questions[currentStep - 1];
  const isCurrentAnswered = selectedAnswers[currentStep] !== undefined;

  return (
    <section id="demo-interactiva" className="py-24 relative bg-slate-50/70 backdrop-blur-md border-y border-purple-150 overflow-hidden">
      
      {/* Background Neon Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-200/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            Prueba en Vivo Cifra PWA
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Desafío Interactivo: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-600">Ponte a Prueba en 3 Minutos</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Responde el test simulado, acumula XP y obtén tu <strong className="text-slate-900">AIR Score Digital</strong> en tiempo real.
          </p>
        </div>

        {/* Playground Card */}
        <div className="bg-white/95 rounded-3xl border-2 border-purple-200 p-6 sm:p-10 shadow-[0_12px_40px_rgba(147,51,234,0.08)] space-y-8 backdrop-blur-xl">
          
          {/* Top Status Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-100 text-purple-700">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Simulador PWA Cifra</div>
                <div className="font-display font-bold text-slate-900 text-base">Evaluación de Madurez Financiera</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Puntos XP</div>
                <div className="text-xl font-mono font-black text-purple-700">{userScore} XP</div>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-slate-400 uppercase font-bold">AIR Score Estudiantil</div>
                <div className="text-xl font-mono font-black text-cyan-700">{700 + userScore * 2}</div>
              </div>
            </div>
          </div>

          {!badgeUnlocked ? (
            /* Active Question State */
            <div className="space-y-6">
              
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Pregunta {currentStep} de {questions.length}</span>
                <span className="text-purple-700 font-bold">+100 XP Disponibles</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-cyan-500 transition-all duration-300"
                  style={{ width: `${(currentStep / questions.length) * 100}%` }}
                />
              </div>

              {/* Scenario */}
              <div className="bg-purple-50/60 p-5 rounded-2xl border border-purple-150 space-y-2">
                <span className="text-xs font-bold uppercase text-purple-800">{currentQ.title}</span>
                <p className="font-display font-extrabold text-base sm:text-lg text-slate-900">
                  {currentQ.scenario}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentStep] === idx;
                  const answered = isCurrentAnswered;

                  let btnClasses = 'bg-white border-slate-200 hover:border-purple-400 hover:bg-purple-50/40 text-slate-800 shadow-xs';
                  if (answered) {
                    if (option.isCorrect) {
                      btnClasses = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold shadow-xs';
                    } else if (isSelected) {
                      btnClasses = 'bg-rose-50 border-rose-400 text-rose-900 shadow-xs';
                    } else {
                      btnClasses = 'bg-slate-50 border-slate-150 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(currentStep, idx)}
                      disabled={answered}
                      className={`w-full p-4 rounded-2xl border text-left text-sm font-semibold transition-all flex items-center justify-between gap-4 cursor-pointer ${btnClasses}`}
                    >
                      <span>{option.text}</span>
                      {answered && option.isCorrect && <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />}
                      {answered && isSelected && !option.isCorrect && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next */}
              {isCurrentAnswered && (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 space-y-4 animate-in fade-in duration-200">
                  <p className="text-xs text-slate-700 leading-relaxed">
                    💡 <strong className="text-slate-900">Explicación Pedagógica:</strong> {currentQ.explanation}
                  </p>

                  <button
                    onClick={handleNextStep}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    {currentStep < questions.length ? 'Siguiente Desafío →' : 'Ver Resultado y Obtener Badge Digital'}
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* Badge & Result Screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-[2px] shadow-lg">
                <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center text-purple-600">
                  <Award className="w-10 h-10 animate-pulse" />
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700">¡Desafío Completado!</span>
                <h3 className="font-display font-black text-2xl text-slate-900 mt-1">
                  Certificado AIR Score: {700 + userScore * 2} Puntos
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mt-2">
                  Has acumulado <strong className="text-purple-700 font-bold">{userScore} XP</strong> de rendimiento en la PWA "Cifra Flow Financiero".
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4 text-cyan-600" />
                  Reintentar Desafío
                </button>

                <a
                  href="#alianzas"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  Compartir con mi Colegio
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Return to Top / Cover Button */}
        <div className="mt-12 text-center">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-purple-50 text-slate-700 hover:text-purple-900 border border-slate-200 hover:border-purple-300 text-xs font-bold transition-all shadow-xs hover:shadow-md cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 text-purple-600 group-hover:-translate-y-0.5 transition-transform" />
            <span>Regresar a la Portada</span>
          </a>
        </div>

      </div>
    </section>
  );
};
