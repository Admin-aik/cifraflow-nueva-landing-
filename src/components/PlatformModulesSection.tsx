import React from 'react';
import { 
  Sparkles, 
  Smartphone, 
  TrendingUp, 
  BookOpen, 
  School, 
  Layers, 
  Lock, 
  Mail, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { PageView } from './Navbar';

interface PlatformModulesSectionProps {
  onNavigate: (view: PageView) => void;
  onOpenLogin: () => void;
  onOpenDemoPartner: (partnerId: string) => void;
  onOpenContactModal: (planName?: string) => void;
  showBreadcrumb?: boolean;
}

export const PlatformModulesSection: React.FC<PlatformModulesSectionProps> = ({
  onNavigate,
  onOpenLogin,
  onOpenDemoPartner,
  onOpenContactModal,
  showBreadcrumb = false
}) => {
  return (
    <section id="modulos" className="py-12 md:py-16 bg-white/90 border-t border-purple-150 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header matching the exact screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-purple-700">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>ECOSISTEMA COMPLETO CIFRA FLOW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mt-1 tracking-tight">
              Funcionalidades y Módulos de la Plataforma
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            Haz clic en cualquiera de los módulos para explorar cada funcionalidad o navega en todo momento utilizando el menú fijo superior.
          </p>
        </div>

        {/* Exact 8 Cards Grid matching the uploaded image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          
          {/* Card 1: Catálogo de Demos en Vivo */}
          <div 
            onClick={() => onNavigate('demos')}
            className="p-6 rounded-3xl bg-white border border-slate-300/80 hover:border-purple-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                  3 DEMOS ACTIVAS
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-purple-700 transition-colors">
                Catálogo de Demos en Vivo
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Accede directamente a Banco Plaza, Banco de Venezuela y MásQueSeguridad.
              </p>
              
              {/* Partner Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                <button
                  onClick={(e) => { e.stopPropagation(); onOpenDemoPartner('banco-plaza'); }}
                  className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200 hover:bg-emerald-100 transition-colors"
                >
                  Banco Plaza
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onOpenDemoPartner('bdv'); }}
                  className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 text-[11px] font-bold border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  BDV
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onOpenDemoPartner('masqueseguridad'); }}
                  className="px-2.5 py-1 rounded-lg bg-cyan-50 text-cyan-800 text-[11px] font-bold border border-cyan-200 hover:bg-cyan-100 transition-colors"
                >
                  MásQueSeguridad
                </button>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-700 group-hover:text-purple-900 pt-4 border-t border-slate-100">
              <span>Abrir catálogo de demos</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Desafío Interactivo PWA */}
          <div 
            onClick={() => onNavigate('simulador-pwa')}
            className="p-6 rounded-3xl bg-white border border-slate-300/80 hover:border-cyan-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-100 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">
                  MICROLEARNING GAMIFICADO
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-cyan-700 transition-colors">
                Desafío Interactivo PWA
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Experimenta el microlearning de 3–5 min: responde misiones prácticas, evalúa riesgos y gana XP.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-700 group-hover:text-cyan-900 pt-4 border-t border-slate-100">
              <span>Probar simulador y preguntas</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Simulador Tradea & Flow QR */}
          <div 
            onClick={() => onNavigate('tradea')}
            className="p-6 rounded-3xl bg-white border border-slate-300/80 hover:border-cyan-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-100 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">
                  BVC & BCV
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-cyan-700 transition-colors">
                Simulador Tradea & Flow QR
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Cotizaciones de la Bolsa de Valores de Caracas y calculadora oficial de Pago Móvil en tiempo real.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-700 group-hover:text-cyan-900 pt-4 border-t border-slate-100">
              <span>Abrir simulador bursátil y QR</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Ruta Académica Completa */}
          <div 
            onClick={() => onNavigate('ruta-academica')}
            className="p-6 rounded-3xl bg-white border border-slate-300/80 hover:border-purple-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                  1.º A 5.º AÑO
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-purple-700 transition-colors">
                Ruta Académica Completa
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Currículo progresivo: Ciberseguridad, Finanzas Personales, Presupuesto e Inversión BVC.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-700 group-hover:text-purple-900 pt-4 border-t border-slate-100">
              <span>Explorar plan curricular</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Plan Apadrinar Colegio */}
          <div 
            onClick={() => onNavigate('alianzas')}
            className="p-6 rounded-3xl bg-white border border-slate-300/80 hover:border-purple-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 group-hover:scale-110 transition-transform">
                  <School className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                  ALIANZAS RSE
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-purple-700 transition-colors">
                Plan Apadrinar Colegio
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Modelos de patrocinio institucional para banca y corporaciones: Semillero, Impulso y Transformación.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-700 group-hover:text-purple-900 pt-4 border-t border-slate-100">
              <span>Ver planes de apadrinamiento</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6: Por Qué Cifra Flow */}
          <div 
            onClick={() => onNavigate('ventajas')}
            className="p-6 rounded-3xl bg-white border border-slate-300/80 hover:border-indigo-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200">
                  PEDAGOGÍA LXD
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-indigo-700 transition-colors">
                Por Qué Cifra Flow
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Metodología Microlearning Espiral, comparativa técnica y enfoque anti-aburrimiento.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 group-hover:text-indigo-900 pt-4 border-t border-slate-100">
              <span>Ver metodología y ventajas</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 7: Portal de Acceso por Roles */}
          <div 
            onClick={onOpenLogin}
            className="p-6 rounded-3xl bg-white border border-slate-300/80 hover:border-purple-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 group-hover:scale-110 transition-transform">
                  <Lock className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                  PORTAL PWA
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-purple-700 transition-colors">
                Portal de Acceso por Roles
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Inicia sesión simulada como Estudiante, Docente o Patrocinador RSE para probar el panel de control.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-700 group-hover:text-purple-900 pt-4 border-t border-slate-100">
              <span>Abrir ventana de acceso</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 8: Contacto y Propuestas */}
          <div 
            onClick={() => onOpenContactModal()}
            className="p-6 rounded-3xl bg-white border border-slate-300/80 hover:border-purple-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                  INSTITUCIONAL
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-purple-700 transition-colors">
                Contacto y Propuestas
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Solicita reuniones técnicas, propuestas RSE a medida o cotizaciones para instituciones educativas.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-700 group-hover:text-purple-900 pt-4 border-t border-slate-100">
              <span>Ir a formulario de contacto</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
