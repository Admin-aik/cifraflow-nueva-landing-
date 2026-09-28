import React, { useState } from 'react';
import { 
  Building2, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  Users, 
  BarChart, 
  HelpCircle, 
  ExternalLink,
  Eye,
  Image as ImageIcon,
  X,
  Shield,
  Swords,
  Crown,
  ArrowUp
} from 'lucide-react';
import { SPONSORSHIP_PLANS, FAQ_ITEMS } from '../data/mockData';
import tresNivelesImg from '../assets/images/tres_niveles_participacion_1786450840913.jpg';

interface SponsorshipB2BProps {
  onOpenContactModal: (planName?: string) => void;
}

export const SponsorshipB2B: React.FC<SponsorshipB2BProps> = ({ onOpenContactModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showLevelsModal, setShowLevelsModal] = useState<boolean>(false);

  return (
    <section id="alianzas" className="py-24 relative bg-white/80 backdrop-blur-md border-t border-purple-150">
      
      {/* Background Neon Lights */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold tracking-wider uppercase">
            <Building2 className="w-3.5 h-3.5 text-purple-600" />
            Modelo de Co-Inversión Social & RSE
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
            Co-Inversión Social para <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-600">Banca, Empresas & Fundaciones</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Una solución <strong className="text-slate-900 font-semibold">RSE "Llave en Mano"</strong> que permite a las corporaciones apadrinar la formación financiera y digital de miles de estudiantes.
          </p>
        </div>

        {/* Corporate Value Proposition Box */}
        <div className="bg-white/95 rounded-3xl p-8 border border-purple-150 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-purple-50 text-purple-700 border border-purple-200 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-base text-slate-900">Branding de Alto Impacto</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Tu marca corporativa integrada orgánicamente en las misiones de la PWA que usan los estudiantes a diario.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-cyan-50 text-cyan-700 border border-cyan-200 shrink-0">
              <BarChart className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-base text-slate-900">Métricas ESG Auditarles</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Panel de analítica institucional con indicadores de horas de capacitación, retención y AIR Score alcanzado.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-purple-50 text-purple-700 border border-purple-200 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-base text-slate-900">Cumplimiento Normativo RSE</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Cumple con las metas de responsabilidad social empresarial de la bancafinanzas y sector fintech venezolano.
              </p>
            </div>
          </div>
        </div>

        {/* Sponsorship Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SPONSORSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                plan.popular
                  ? 'bg-gradient-to-b from-purple-50/50 via-white to-white border-purple-500 shadow-xl ring-2 ring-purple-200'
                  : 'bg-white/95 border-purple-150 shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-purple-600 text-white font-extrabold text-xs tracking-wider uppercase shadow-md">
                  Recomendado para Corporaciones
                </div>
              )}

              <div className="space-y-6">
                <div>
                  {plan.id === 'colegio-individual' ? (
                    <button
                      type="button"
                      onClick={() => setShowLevelsModal(true)}
                      className="group text-left flex items-center justify-between w-full p-4 rounded-2xl bg-purple-50/80 hover:bg-purple-100/70 border border-purple-200 hover:border-purple-400 transition-all shadow-xs cursor-pointer"
                    >
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-700 block mb-1 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
                          <span>Ver Niveles de Participación</span>
                        </span>
                        <h3 className="font-display font-black text-2xl text-slate-900 group-hover:text-purple-800 transition-colors flex items-center gap-2">
                          <span>{plan.name}</span>
                        </h3>
                      </div>
                      <div className="px-3 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white shrink-0 shadow-sm flex items-center gap-1.5 text-xs font-bold group-hover:scale-105 transition-transform">
                        <Eye className="w-4 h-4" />
                        <span className="hidden sm:inline">Ver Imagen</span>
                      </div>
                    </button>
                  ) : (
                    <h3 className="font-display font-extrabold text-2xl text-slate-900">{plan.name}</h3>
                  )}
                  <p className="text-xs text-slate-600 mt-2">{plan.tagline}</p>
                </div>

                <div className="border-t border-purple-150 pt-6 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700">
                    Beneficios del Apadrinamiento:
                  </span>
                  <ul className="space-y-3 text-xs text-slate-700">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Banner button linking to modal graphic */}
                {plan.id === 'colegio-individual' && (
                  <button
                    type="button"
                    onClick={() => setShowLevelsModal(true)}
                    className="w-full py-3 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-800 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer group shadow-xs"
                  >
                    <ImageIcon className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
                    <span>Ver Tres Niveles de Participación (Bronce, Plata, Oro)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-purple-600" />
                  </button>
                )}
              </div>

              <div className="pt-6 mt-4">
                <button
                  type="button"
                  onClick={() => onOpenContactModal(plan.name)}
                  className={`w-full py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Turnkey CSR Solución Llave en Mano Card */}
        <div className="bg-gradient-to-r from-purple-50 via-white to-cyan-50 rounded-3xl p-8 border border-purple-200 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto shadow-lg">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase text-purple-700 tracking-wider">Solución RSE Corporativa B2B</span>
            <h3 className="font-display font-black text-2xl text-slate-900">
              ¿Eres una Entidad Bancaria, Empresa de Ciberseguridad o Gran Corporación?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Diseñamos Módulos Exclusivos "Planes Bancarios Oro" a la medida de tu marca para patrocinar circuitos enteros de Bachillerato a nivel nacional.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenContactModal('Planes Corporativos Oro B2B')}
            className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs uppercase tracking-wider shrink-0 shadow-md transition-all cursor-pointer"
          >
            Solicitar Dossier RSE Corporativo
          </button>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto pt-10 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-display font-extrabold text-2xl text-slate-900">Preguntas Frecuentes (FAQ)</h3>
            <p className="text-xs text-slate-500">Resuelve tus dudas sobre la implementación en planteles y RSE.</p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-purple-150 overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left font-display font-bold text-sm text-slate-900 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? 'text-purple-600' : 'text-slate-400'}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-purple-100 text-xs text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
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

      {/* Modal for Tres Niveles de Participación Graphic */}
      {showLevelsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white border-2 border-purple-200 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(147,51,234,0.18)] space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowLevelsModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title Header */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                Infografía Oficial
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900">
                Tres niveles de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-600">participación</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                Selecciona la modalidad de apadrinamiento para tu empresa, colegio o corporación.
              </p>
            </div>

            {/* Rendered Infographic Image */}
            <div className="overflow-hidden rounded-2xl border border-purple-200 bg-purple-50/40 shadow-md flex justify-center p-2">
              <img 
                src={tresNivelesImg} 
                alt="Tres niveles de participación: Bronce, Plata, Oro" 
                className="w-full max-h-[500px] object-contain hover:scale-[1.02] transition-transform duration-300 rounded-xl"
              />
            </div>

            {/* Interactive Cards Breakdown matching the Image */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {/* Bronce */}
              <div className="bg-amber-50/40 border border-amber-200 rounded-2xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-amber-900">
                  <div className="p-2 rounded-xl bg-amber-100 text-amber-800">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-black text-lg text-slate-900">Bronce</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Marca en pantallas de carga, mapas y reportes a directores.
                </p>
                <div className="pt-2 border-t border-amber-200/80 text-xs font-extrabold text-amber-800">
                  Desde $3,240/año en preventa
                </div>
              </div>

              {/* Plata */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-slate-700">
                  <div className="p-2 rounded-xl bg-slate-200 text-slate-700">
                    <Swords className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-black text-lg text-slate-900">Plata</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Misiones patrocinadas, trivias y data analítica trimestral.
                </p>
                <div className="pt-2 border-t border-slate-200 text-xs font-extrabold text-purple-700">
                  Desde $8,100/año en preventa
                </div>
              </div>

              {/* Oro */}
              <div className="bg-amber-50/60 border border-amber-300 rounded-2xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-amber-900">
                  <div className="p-2 rounded-xl bg-amber-200 text-amber-900">
                    <Crown className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-black text-lg text-slate-900">Oro</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Flow QR, mundo de marca exclusivo, big data y certificados con tu logo.
                </p>
                <div className="pt-2 border-t border-amber-200 text-xs font-extrabold text-amber-800">
                  Desde $16,200/año en preventa
                </div>
              </div>
            </div>

            {/* Action Buttons in Modal */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowLevelsModal(false);
                  onOpenContactModal('Plan Apadrinar Colegio - Tres Niveles');
                }}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Solicitar Apadrinar Colegio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setShowLevelsModal(false)}
                className="py-3.5 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

