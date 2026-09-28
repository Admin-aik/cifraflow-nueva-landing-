import React, { useState } from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Home, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Sparkles,
  Zap,
  ExternalLink,
  ArrowUp
} from 'lucide-react';
import { PILLARS_DATA } from '../data/mockData';
import { PillarData, YearCurriculum, AcademicModule } from '../types';

export const AcademicRoute: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<'pilar1' | 'pilar2' | 'pilar3'>('pilar1');
  const [selectedYear, setSelectedYear] = useState<number>(1); // 1 to 5
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>('p1-m1');

  const currentPillar = PILLARS_DATA.find(p => p.id === selectedPillarId) || PILLARS_DATA[0];
  const currentYearCurriculum = currentPillar.curriculum.find(c => c.year === selectedYear) || currentPillar.curriculum[0];

  return (
    <section id="pilares" className="py-24 relative bg-white/80 backdrop-blur-md overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold tracking-wider uppercase">
            <BookOpen className="w-3.5 h-3.5 text-purple-600" />
            Mapeo Curricular Completo (1.º a 5.º Año)
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
            <a
              href="https://gen-lang-client-0843860655.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-700 hover:via-indigo-700 hover:to-cyan-700 text-white shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all transform hover:-translate-y-1 active:translate-y-0 group cursor-pointer"
            >
              <span>La Ruta Académica</span>
              <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Diseñada rigurosamente para acompañar la maduración del estudiante desde 1.er Año hasta su graduación de Bachillerato.
          </p>
        </div>

        {/* Pillar Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {PILLARS_DATA.map((pillar) => {
            const isSelected = pillar.id === selectedPillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => {
                  setSelectedPillarId(pillar.id);
                  // Reset expanded module to first in selected pillar
                  const firstModule = pillar.curriculum[0]?.modules[0]?.id;
                  if (firstModule) setExpandedModuleId(firstModule);
                }}
                className={`p-6 rounded-3xl text-left border transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-purple-50/70 border-purple-500 shadow-md ring-2 ring-purple-200'
                    : 'bg-white/95 border-purple-150 hover:border-purple-300 hover:bg-purple-50/30 shadow-xs'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none" />
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-slate-800 shadow-sm"
                      style={{ backgroundColor: `${pillar.color}25`, border: `1px solid ${pillar.color}60`, color: pillar.accentColor }}
                    >
                      {pillar.id === 'pilar1' && <ShieldCheck className="w-6 h-6" />}
                      {pillar.id === 'pilar2' && <TrendingUp className="w-6 h-6" />}
                      {pillar.id === 'pilar3' && <Home className="w-6 h-6" />}
                    </div>

                    {isSelected && (
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-purple-600 text-white shadow-xs">
                        Pilar Activo
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display font-extrabold text-lg text-slate-900 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-purple-150 text-[11px] font-semibold text-slate-500 flex items-center justify-between">
                  <span>5 Años Curriculares</span>
                  <span className="text-purple-700 font-bold">Ver Módulos →</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Content Box */}
        <div className="bg-white/95 rounded-3xl border border-purple-150 p-6 sm:p-8 space-y-8 backdrop-blur-xl shadow-lg">
          
          {/* Pillar Summary Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-purple-150">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-600 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                  Explorando {currentPillar.title}
                </span>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {currentPillar.description}
              </p>
            </div>

            {/* Pillar Highlights List */}
            <div className="bg-purple-50/70 p-4 rounded-2xl border border-purple-200 space-y-2 lg:min-w-[320px]">
              <div className="text-xs font-extrabold uppercase text-purple-800 tracking-wider">
                Competencias Clave
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {currentPillar.highlights.slice(0, 3).map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Year Filter Buttons (1.er a 5.º Año Bachillerato) */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Selecciona el Nivel de Bachillerato:
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {[1, 2, 3, 4, 5].map((yearNum) => {
                const active = selectedYear === yearNum;
                return (
                  <button
                    key={yearNum}
                    onClick={() => setSelectedYear(yearNum)}
                    className={`py-3 px-3 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${
                      active
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-600 shadow-md'
                        : 'bg-white text-slate-700 border-purple-150 hover:border-purple-300 hover:bg-purple-50/50'
                    }`}
                  >
                    {yearNum}.º Año Bachillerato
                  </button>
                );
              })}
            </div>
          </div>

          {/* Modules List for Selected Year */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 border-b border-purple-150 pb-2">
              <span>Módulos de Microlearning ({currentYearCurriculum.yearLabel}):</span>
              <span className="text-purple-700 font-bold">{currentYearCurriculum.modules.length} Sesiones Interactivas</span>
            </div>

            <div className="space-y-3">
              {currentYearCurriculum.modules.map((mod: AcademicModule) => {
                const isExpanded = expandedModuleId === mod.id;
                return (
                  <div
                    key={mod.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isExpanded
                        ? 'bg-purple-50/40 border-purple-300 shadow-sm'
                        : 'bg-slate-50/60 border-purple-100 hover:border-purple-300'
                    }`}
                  >
                    {/* Module Title Bar */}
                    <button
                      onClick={() => setExpandedModuleId(isExpanded ? null : mod.id)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                    >
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        <div className="p-2.5 rounded-xl bg-purple-100 text-purple-700 border border-purple-200 shrink-0">
                          <Zap className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-display font-extrabold text-sm sm:text-base text-slate-900 truncate">
                            {mod.title}
                          </div>
                          <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-0.5">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-cyan-600" />
                              {mod.duration}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-amber-700 font-semibold">
                              <Award className="w-3 h-3" />
                              +{mod.xpReward} XP
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:inline-block text-[10px] font-bold px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                          {mod.badge}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-purple-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-500" />
                        )}
                      </div>
                    </button>

                    {/* Expanded Module Details */}
                    {isExpanded && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-purple-150 space-y-4 animate-in fade-in duration-200">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {mod.description}
                        </p>

                        <div className="space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700">
                            Conceptos Clave del Módulo:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {mod.keyConcepts.map((concept, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 rounded-lg bg-white border border-purple-200 text-xs text-slate-800 font-medium flex items-center gap-1.5 shadow-xs"
                              >
                                <Sparkles className="w-3 h-3 text-purple-600" />
                                {concept}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Return to Top / Cover Button */}
        <div className="mt-12 text-center">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-purple-200 text-xs font-bold transition-all shadow-xs hover:shadow-md cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 text-purple-600 group-hover:-translate-y-0.5 transition-transform" />
            <span>Regresar a la Portada</span>
          </a>
        </div>

      </div>
    </section>
  );
};
