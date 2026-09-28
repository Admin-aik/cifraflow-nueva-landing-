import React from 'react';
import { 
  Zap, 
  ShieldAlert, 
  Compass, 
  Sparkles, 
  CheckCircle, 
  ArrowUp,
  Award,
  Smartphone,
  ShieldCheck
} from 'lucide-react';

export const WhyCifraFlow: React.FC = () => {
  return (
    <section id="ventajas" className="py-16 md:py-24 relative bg-white/80 backdrop-blur-md border-y border-purple-100">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            Nuestra Ventaja Educativa
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.15]">
            ¿Por qué <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-600">Cifra Flow</span> transforma las aulas?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminamos la teoría abstracta aburrida y la sustituimos por dinámicas ágiles y gamificadas, adaptadas a los hábitos digitales de los estudiantes de hoy en día.
          </p>
        </div>

        {/* 3 Methodological Pillars - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          
          {/* Card 1: LXD Microlearning */}
          <div className="relative group bg-white/95 rounded-2xl p-6 sm:p-7 border border-purple-150 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(147,51,234,0.12)] flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-all" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                  PILAR 01
                </span>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700">
                  Metodología LXD
                </span>
                <h3 className="font-display font-extrabold text-xl text-slate-900 mt-1">
                  Learning Experience Design
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">
                  Microlearning en ráfagas de <strong className="text-slate-900 font-semibold">3 a 5 minutos</strong> estructurado en espiral. Adaptado al ritmo de atención natural de las Generaciones Z y Alpha sin saturar la jornada escolar.
                </p>
              </div>

              <ul className="space-y-2 pt-2 text-xs text-slate-700 border-t border-purple-150">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Retención cognitiva 3x superior al libro tradicional</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Barra de progreso de XP y medallas coleccionables</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Contextualización Venezuela */}
          <div className="relative group bg-white/95 rounded-2xl p-6 sm:p-7 border border-purple-150 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)] flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                  PILAR 02
                </span>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-700">
                  Contexto Real
                </span>
                <h3 className="font-display font-extrabold text-xl text-slate-900 mt-1">
                  100% Venezuela
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">
                  No usamos ejemplos importados desfasados. La PWA enseña sobre la economía real: <strong className="text-slate-900 font-semibold">Pago Móvil, tasa oficial BCV, cuentas bimonetarias, SENIAT e inflación</strong>.
                </p>
              </div>

              <ul className="space-y-2 pt-2 text-xs text-slate-700 border-t border-purple-150">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>Calculadoras bimonetarias dinámicas en tiempo real</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>Prevención de estafas en el mercado cambiario local</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Interactive Simulations */}
          <div className="relative group bg-white/95 rounded-2xl p-6 sm:p-7 border border-purple-150 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(147,51,234,0.12)] flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-all" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                  PILAR 03
                </span>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700">
                  Simulaciones Interactivas
                </span>
                <h3 className="font-display font-extrabold text-xl text-slate-900 mt-1">
                  Elige tu propia aventura
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">
                  Ambientes controlados donde los alumnos toman decisiones financieras y de ciberseguridad. Los errores <strong className="text-slate-900 font-semibold">cuestan solo puntos simulados</strong>, nunca dinero real.
                </p>
              </div>

              <ul className="space-y-2 pt-2 text-xs text-slate-700 border-t border-purple-150">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Escenarios inmersivos anti-phishing y ransomware</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Retroalimentación pedagógica tras cada decisión</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Value Highlights Strip */}
        <div className="rounded-2xl bg-gradient-to-r from-purple-50 via-white to-cyan-50 border border-purple-150 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-purple-150">
            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="inline-flex p-2 rounded-lg bg-purple-100 text-purple-700 mb-2">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black text-slate-900 font-display">PWA Offline</div>
              <div className="text-xs text-slate-600 mt-1">Funciona sin internet constante para garantizar inclusión en cualquier colegio</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="inline-flex p-2 rounded-lg bg-cyan-100 text-cyan-700 mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black text-slate-900 font-display">0 Riesgo Financiero</div>
              <div className="text-xs text-slate-600 mt-1">Tokens y simuladores de billetera seguros sin transacciones bancarias reales</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="inline-flex p-2 rounded-lg bg-emerald-100 text-emerald-700 mb-2">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black text-slate-900 font-display">Insignias & XP</div>
              <div className="text-xs text-slate-600 mt-1">Gamificación con rangos (Novato a Creador de Liquidez) y premios canjeables</div>
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-purple-200 hover:border-purple-400 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-md group"
          >
            <ArrowUp className="w-4 h-4 text-purple-600 group-hover:-translate-y-1 transition-transform" />
            <span>Volver a la Portada / Inicio</span>
          </a>
        </div>

      </div>
    </section>
  );
};
