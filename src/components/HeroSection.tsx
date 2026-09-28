import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  ChevronRight,
  ExternalLink,
  Play,
  Layers,
  School,
  Landmark,
  CreditCard,
  Shield,
  Smartphone,
  Eye,
  X,
  Maximize2,
  CheckCircle2,
  Award
} from 'lucide-react';
import { BRAND_ASSETS } from '../data/mockData';
import cifraVideoSphereImg from '../assets/images/cifra_video_sphere_hero_1790608667091.jpg';
import tresNivelesImg from '../assets/images/tres_niveles_participacion_1786450840913.jpg';
import { CifraStoryVideoPlayer } from './CifraStoryVideoPlayer';

interface HeroSectionProps {
  onExploreDemo: () => void;
  onOpenSponsorship: () => void;
  onOpenDemosPage?: (partnerId?: string) => void;
  onNavigateToView?: (view: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onExploreDemo, 
  onOpenSponsorship, 
  onOpenDemosPage,
  onNavigateToView
}) => {
  const [activeMediaTab, setActiveMediaTab] = useState<'image' | 'video'>('image');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [infographicModalOpen, setInfographicModalOpen] = useState(false);

  return (
    <section id="inicio" className="relative pt-4 pb-14 md:pt-8 md:pb-20 overflow-hidden bg-white/70">
      
      {/* Background Cosmic Accents tailored for White Galactic theme */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Isometric Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e9d5ff15_1px,transparent_1px),linear-gradient(to_bottom,#e9d5ff15_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2 EQUAL COLUMNS ON DESKTOP: TEXT ON THE LEFT & IMAGE/VIDEO ON THE RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN (lg:col-span-6, 50% OF SCREEN):               */}
          {/* HEADLINE, VALUE PROPOSITION, BADGES & CTAs                */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6 order-1">
            
            {/* Top Gamer Pill Badge */}
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={() => onNavigateToView?.('ventajas')}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 hover:bg-purple-100/80 border border-purple-200/90 text-purple-900 text-xs font-bold backdrop-blur-md shadow-xs transition-all cursor-pointer group"
              >
                <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-ping" />
                <Zap className="w-3.5 h-3.5 text-purple-600 group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">Metodología LXD • Microlearning Espiral (3 a 5 min)</span>
                <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[44px] text-slate-900 tracking-tight leading-[1.16]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-600">
                Educación Financiera Gamificada
              </span>
              , Ciberseguridad y Finanzas Personales diseñada bajo metodología{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 font-black">
                Microlearning Espiral
              </span>{' '}
              <span className="text-slate-500 font-semibold text-2xl sm:text-3xl block sm:inline mt-1 sm:mt-0">
                (sesiones de 3 a 5 min)
              </span>.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Empoderando a la <strong className="text-slate-900 font-semibold">nueva generación</strong> de jóvenes para navegar, protegerse y prosperar en el ecosistema financiero moderno.
            </p>

            {/* Micro Feature Badges Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 max-w-xl mx-auto lg:mx-0 text-xs">
              
              <div 
                onClick={() => onNavigateToView?.('ruta-academica')}
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/95 border border-purple-150 hover:border-purple-400 text-slate-700 shadow-xs hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="font-bold text-slate-900 block leading-tight">Ciberseguridad 100%</span>
                  <span className="text-[10px] text-slate-500 leading-tight">Zero Phishing</span>
                </div>
              </div>

              <div 
                onClick={() => onNavigateToView?.('tradea')}
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/95 border border-purple-150 hover:border-cyan-400 text-slate-700 shadow-xs hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="p-1.5 rounded-lg bg-cyan-50 text-cyan-600 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="font-bold text-slate-900 block leading-tight">Contexto Bimonetario</span>
                  <span className="text-[10px] text-slate-500 leading-tight">Bolsa BVC & BCV</span>
                </div>
              </div>

              <div 
                onClick={() => onNavigateToView?.('ventajas')}
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/95 border border-purple-150 hover:border-indigo-400 text-slate-700 shadow-xs hover:shadow-md transition-all cursor-pointer group col-span-2 sm:col-span-1"
              >
                <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 group-hover:scale-110 transition-transform">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="font-bold text-slate-900 block leading-tight">Microlearning 3-5m</span>
                  <span className="text-[10px] text-slate-500 leading-tight">Pedagogía LXD</span>
                </div>
              </div>

            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              
              <button
                onClick={onExploreDemo}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-700 hover:via-indigo-700 hover:to-cyan-700 text-white font-extrabold text-base tracking-wide shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-cyan-200" />
                <span>Explorar la Ruta Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenSponsorship}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white hover:bg-purple-50/60 text-slate-800 hover:text-purple-900 font-bold text-base border border-slate-300 hover:border-purple-400 shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <School className="w-4 h-4 text-purple-600" />
                <span>Alianzas Institucionales / RSE</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

            </div>

            {/* Demos Highlight & Quick Access Bar */}
            <div className="pt-2 w-full">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-purple-50/90 via-cyan-50/70 to-emerald-50/80 border border-purple-200/90 shadow-xs">
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-800">
                      Demos PWA en Vivo:
                    </span>
                  </div>

                  {/* Direct clickable tags for each partner */}
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    
                    <button
                      onClick={() => onOpenDemosPage?.('banco-plaza')}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 text-xs font-semibold border border-emerald-200 shadow-2xs transition-all cursor-pointer"
                      title="Probar demo personalizada Banco Plaza"
                    >
                      <Landmark className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Banco Plaza</span>
                    </button>

                    <button
                      onClick={() => onOpenDemosPage?.('bdv')}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white hover:bg-blue-50 text-slate-800 hover:text-blue-800 text-xs font-semibold border border-blue-200 shadow-2xs transition-all cursor-pointer"
                      title="Probar demo personalizada BDV"
                    >
                      <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                      <span>BDV</span>
                    </button>

                    <button
                      onClick={() => onOpenDemosPage?.('masqueseguridad')}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white hover:bg-cyan-50 text-slate-800 hover:text-cyan-800 text-xs font-semibold border border-cyan-200 shadow-2xs transition-all cursor-pointer"
                      title="Probar demo personalizada MásQueSeguridad"
                    >
                      <Shield className="w-3.5 h-3.5 text-cyan-600" />
                      <span>MásQueSeguridad</span>
                    </button>

                    <button
                      onClick={() => onOpenDemosPage?.()}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-2xs transition-all cursor-pointer ml-1"
                    >
                      <span>Ver Catálogo (3)</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                  </div>

                </div>

              </div>
            </div>

            {/* Official Drive Links & Infographic Button */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500">
              <span className="font-semibold text-slate-600">Material Oficial:</span>
              
              <a 
                href={BRAND_ASSETS.heroBanner}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-purple-700 hover:text-purple-900 underline underline-offset-4 font-semibold"
              >
                <span>Banner de Presentación</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <span>•</span>

              <button
                onClick={() => setInfographicModalOpen(true)}
                className="inline-flex items-center gap-1 text-cyan-700 hover:text-cyan-900 underline underline-offset-4 font-semibold cursor-pointer"
              >
                <Eye className="w-3 h-3" />
                <span>Infografía: 3 Niveles de Participación</span>
              </button>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN (lg:col-span-6, 50% OF SCREEN):              */}
          {/* THE VIDEO & IMAGE SECTION ON THE RIGHT                     */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative w-full order-2">
            
            {/* View Selector Tabs (Esfera Oficial vs Reproductor con Audio) */}
            <div className="mb-4 inline-flex p-1 rounded-2xl bg-white border border-purple-200/90 shadow-sm backdrop-blur-md">
              <button
                onClick={() => setActiveMediaTab('image')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeMediaTab === 'image'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-purple-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Esfera Oficial Gamer</span>
              </button>

              <button
                onClick={() => setActiveMediaTab('video')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeMediaTab === 'video'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-purple-700'
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>Reproductor con Audio</span>
              </button>
            </div>

            {/* TAB 1: EXACT IMAGE COVERING HALF THE SCREEN WITH EMBEDDED VIDEO LINK */}
            {activeMediaTab === 'image' && (
              <div className="relative w-full max-w-[540px] mx-auto flex flex-col items-center">
                
                {/* External Multi-Layer Galactic Halo Rings */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/20 via-cyan-400/20 to-pink-500/20 blur-2xl animate-pulse pointer-events-none" />

                {/* The Exact Image Container Card with Embedded Video Trigger */}
                <div 
                  onClick={() => setVideoModalOpen(true)}
                  className="relative w-full overflow-hidden rounded-3xl border-2 border-purple-200/90 hover:border-purple-400 bg-white shadow-[0_16px_45px_rgba(147,51,234,0.18)] hover:shadow-[0_24px_55px_rgba(147,51,234,0.28)] transition-all duration-300 group cursor-pointer"
                  title="Haz clic para reproducir el video oficial"
                >
                  {/* The Exact Graphic Image */}
                  <img 
                    src={cifraVideoSphereImg} 
                    alt="Cifra Flow: Ciberseguridad Integral y Finanzas Personales - Video Oficial" 
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* INTERACTIVE VIDEO LINK HOTSPOT RIGHT IN THE CENTER OVER 'VER VIDEO OFICIAL' */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setVideoModalOpen(true);
                      }}
                      className="group/play relative flex flex-col items-center justify-center cursor-pointer transition-all transform hover:scale-110 active:scale-95 focus:outline-none"
                      aria-label="Reproducir Video Oficial"
                    >
                      {/* Animated Glow Ripples */}
                      <span className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-purple-500/30 animate-ping pointer-events-none" />
                      <span className="absolute w-20 h-20 sm:w-26 sm:h-26 rounded-full bg-cyan-400/25 animate-pulse pointer-events-none" />

                      {/* Central Glass Play Button */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 hover:bg-white backdrop-blur-md border-2 border-purple-300/80 shadow-[0_8px_30px_rgba(147,51,234,0.4)] flex items-center justify-center transition-all group-hover/play:border-purple-500 group-hover/play:shadow-[0_10px_35px_rgba(147,51,234,0.5)]">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600 fill-purple-600 ml-1 transition-transform group-hover/play:scale-110" />
                      </div>

                      <span className="mt-2 text-[10px] sm:text-xs font-black tracking-wider uppercase text-purple-900 bg-white/95 px-3 py-1 rounded-full border border-purple-200/90 shadow-sm backdrop-blur-md">
                        Ver Video Oficial
                      </span>
                    </button>
                  </div>

                  {/* Floating Action Strip */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/85 text-white text-[11px] font-bold backdrop-blur-md border border-slate-700/80">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                      <span>Historia Oficial • 1:40 min</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-600 text-white text-[10px] font-extrabold shadow-sm">
                      <span>Abrir Reproductor</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                </div>

                {/* Direct Action Bar under the image */}
                <div className="w-full mt-3 flex items-center justify-between gap-2 px-1">
                  <button
                    onClick={() => setVideoModalOpen(true)}
                    className="flex-1 py-2 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 text-xs font-bold border border-purple-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <Play className="w-3.5 h-3.5 text-purple-600 fill-purple-600" />
                    <span>Reproducir con Audio</span>
                  </button>

                  <a
                    href={BRAND_ASSETS.heroBanner}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs font-semibold border border-slate-200 transition-all flex items-center gap-1 cursor-pointer shadow-2xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    <span>Drive Oficial</span>
                  </a>
                </div>

              </div>
            )}

            {/* TAB 2: LIVE STORY VIDEO PLAYER */}
            {activeMediaTab === 'video' && (
              <div className="w-full max-w-[540px]">
                <CifraStoryVideoPlayer />
              </div>
            )}

          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* MODAL 1: FULLSCREEN VIDEO STORY PLAYER                    */}
      {/* ========================================================= */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-5 pt-22 sm:pt-26 pb-6 sm:pb-8 overflow-y-auto">
          <div className="relative w-full max-w-[580px] bg-white rounded-3xl p-4 sm:p-5 border-2 border-purple-200 shadow-2xl my-auto max-h-[calc(100vh-7.5rem)] flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-purple-100 shrink-0">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-xl bg-purple-100 text-purple-700">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base text-slate-900 leading-tight">
                    Cifra Flow: "El Inventario de Poder"
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    Historia oficial con locución, síntesis de voz Web Audio y narrativa interactiva
                  </p>
                </div>
              </div>

              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                title="Cerrar reproductor"
                aria-label="Cerrar reproductor"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body with compact video player */}
            <div className="py-2 overflow-y-auto flex-1 pr-0.5">
              <CifraStoryVideoPlayer compact />
            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 2: TRES NIVELES DE PARTICIPACIÓN INFOGRAFÍA         */}
      {/* ========================================================= */}
      {infographicModalOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-5 pt-24 sm:pt-28 pb-6 sm:pb-8 overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl p-4 sm:p-5 border-2 border-purple-200 shadow-2xl max-h-[calc(100vh-8.5rem)] flex flex-col my-auto">
            
            <div className="flex items-center justify-between pb-3 border-b border-purple-100 shrink-0">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-xl bg-purple-100 text-purple-700">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base text-slate-900 leading-tight">
                    Infografía Oficial: Tres Niveles de Participación
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    Semillero, Impulso Institucional y Transformación Integral
                  </p>
                </div>
              </div>

              <button
                onClick={() => setInfographicModalOpen(false)}
                className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                title="Cerrar infografía"
                aria-label="Cerrar infografía"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-auto py-3 flex items-center justify-center">
              <img 
                src={tresNivelesImg} 
                alt="Infografía Oficial Tres Niveles de Participación Cifra Flow"
                className="max-h-[58vh] w-auto object-contain rounded-xl border border-purple-100 shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="pt-3 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <p className="text-xs text-slate-600">
                ¿Deseas implementar esta propuesta en tu institución educativa o empresa?
              </p>
              <button
                onClick={() => {
                  setInfographicModalOpen(false);
                  onOpenSponsorship();
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Ver Planes y Cotizaciones RSE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
