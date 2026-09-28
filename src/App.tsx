import React, { useState, useEffect } from 'react';
import { Navbar, PageView } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyCifraFlow } from './components/WhyCifraFlow';
import { AcademicRoute } from './components/AcademicRoute';
import { TradeaAndFlowQR } from './components/TradeaAndFlowQR';
import { PwaInteractiveDemo } from './components/PwaInteractiveDemo';
import { SponsorshipB2B } from './components/SponsorshipB2B';
import { Footer } from './components/Footer';
import { PwaLoginModal } from './components/PwaLoginModal';
import { GalacticGamerBackground } from './components/GalacticGamerBackground';
import { DemosPage } from './components/DemosPage';
import { PlatformModulesSection } from './components/PlatformModulesSection';
import { InstitutionalContactSection } from './components/InstitutionalContactSection';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Flame, 
  Sparkles, 
  BookOpen, 
  School, 
  TrendingUp, 
  Smartphone, 
  Layers, 
  Mail, 
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Lock,
  Home
} from 'lucide-react';
import { BRAND_ASSETS } from './data/mockData';

export default function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [selectedPlanForContact, setSelectedPlanForContact] = useState<string | undefined>(undefined);
  const [currentView, setCurrentView] = useState<PageView>('portada');
  const [userRole, setUserRole] = useState('Estudiante');
  const [selectedDemoId, setSelectedDemoId] = useState<string | undefined>(undefined);

  // Sync hash with views
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#demos' || hash === '#/demos') {
        setCurrentView('demos');
      } else if (hash === '#modulos' || hash === '#/modulos' || hash === '#ecosistema') {
        setCurrentView('modulos');
      } else if (hash === '#ventajas' || hash === '#por-que-cifra') {
        setCurrentView('ventajas');
      } else if (hash === '#pilares' || hash === '#ruta-academica') {
        setCurrentView('ruta-academica');
      } else if (hash === '#alianzas' || hash === '#apadrinar') {
        setCurrentView('alianzas');
      } else if (hash === '#tradea' || hash === '#flowqr') {
        setCurrentView('tradea');
      } else if (hash === '#simulador-pwa' || hash === '#demo-interactiva') {
        setCurrentView('simulador-pwa');
      } else if (hash === '#contacto') {
        setCurrentView('contacto');
      } else if (hash === '#inicio' || hash === '#/inicio' || hash === '#portada' || hash === '#/portada') {
        setCurrentView('portada');
      } else {
        setCurrentView('portada');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
    const hashMapping: Record<PageView, string> = {
      'portada': '#inicio',
      'modulos': '#modulos',
      'ventajas': '#ventajas',
      'ruta-academica': '#ruta-academica',
      'alianzas': '#alianzas',
      'tradea': '#tradea',
      'demos': '#demos',
      'simulador-pwa': '#simulador-pwa',
      'simulatedStudent': '#simulador-estudiante',
      'contacto': '#contacto'
    };
    
    if (view === 'portada') {
      window.location.hash = '#inicio';
    } else {
      window.location.hash = hashMapping[view] || '';
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDemoPartner = (partnerId?: string) => {
    setSelectedDemoId(partnerId);
    handleNavigate('demos');
  };

  const handleOpenContactModal = (planName?: string) => {
    setSelectedPlanForContact(planName);
    handleNavigate('alianzas');
    setTimeout(() => {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleLoginSuccess = (role: string) => {
    setUserRole(role === 'student' ? 'Estudiante' : role === 'teacher' ? 'Docente' : 'Sponsor RSE');
    setLoginModalOpen(false);
    setCurrentView('simulatedStudent');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Subpage Breadcrumb Header Bar
  const SubpageBreadcrumb = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="bg-white/90 backdrop-blur-xl border-b border-purple-200/70 py-3.5 px-4 sm:px-8 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavigate('portada')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-bold transition-all shadow-xs group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-purple-600 group-hover:-translate-x-1 transition-transform" />
            <span>Volver a la Portada</span>
          </button>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span>Inicio</span>
            <span>/</span>
            <span className="font-bold text-slate-900">{title}</span>
          </div>
        </div>

        {subtitle && (
          <div className="hidden md:flex items-center gap-2 text-xs text-purple-800 bg-purple-100/70 px-3 py-1 rounded-full border border-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>{subtitle}</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-purple-200 selection:text-purple-950 overflow-x-hidden">
      
      {/* Galactic Background Atmosphere Canvas */}
      <GalacticGamerBackground />

      {/* 1. FIXED NAVIGATION MENU ACROSS ALL SCREENS */}
      <Navbar 
        activeView={currentView}
        onNavigate={handleNavigate}
        onOpenLogin={() => setLoginModalOpen(true)}
      />

      {/* 2. MAIN APPLICATION VIEW CONTAINER (Offset by fixed navbar height) */}
      <div className="relative z-10 pt-20 sm:pt-22">
        
        {/* VIEW 1: INICIO (PORTADA HERO PRINCIPAL EXACTA) */}
        {currentView === 'portada' && (
          <>
            {/* La sección exacta de la captura: Portada Hero con texto a la izquierda y multimedia a la derecha */}
            <HeroSection 
              onExploreDemo={() => handleNavigate('simulador-pwa')}
              onOpenSponsorship={() => handleNavigate('alianzas')}
              onOpenDemosPage={handleOpenDemoPartner}
              onNavigateToView={(view) => handleNavigate(view as PageView)}
            />

            {/* Créditos institucionales discretos al pie de la portada */}
            <div className="py-4 bg-white/80 border-t border-purple-100 backdrop-blur-md">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800">Cifra Flow Financiero PWA</span>
                  <span>•</span>
                  <span>Consorcio AIK Soluciones, Akuri & Tradea.io</span>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleOpenContactModal()}
                    className="text-purple-700 hover:text-purple-900 underline cursor-pointer font-semibold flex items-center gap-1"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Contacto Institucional</span>
                  </button>
                  <span>•</span>
                  <button
                    onClick={() => handleNavigate('demos')}
                    className="text-cyan-700 hover:text-cyan-900 underline cursor-pointer font-semibold flex items-center gap-1"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Ver 3 Demos en Vivo</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* VIEW 2: FUNCIONALIDADES Y MÓDULOS DE LA PLATAFORMA (DESDE EL MENÚ) */}
        {currentView === 'modulos' && (
          <div>
            <SubpageBreadcrumb 
              title="Funcionalidades y Módulos de la Plataforma" 
              subtitle="Ecosistema Completo de Microlearning, Ciberseguridad y Finanzas" 
            />
            <main>
              <PlatformModulesSection 
                onNavigate={handleNavigate}
                onOpenLogin={() => setLoginModalOpen(true)}
                onOpenDemoPartner={handleOpenDemoPartner}
                onOpenContactModal={handleOpenContactModal}
                showBreadcrumb
              />
              <Footer 
                initialPlanName={selectedPlanForContact} 
                onOpenDemosPage={() => handleNavigate('demos')}
                onBackToHome={() => handleNavigate('portada')}
              />
            </main>
          </div>
        )}

        {/* VIEW 3: POR QUÉ CIFRA FLOW */}
        {currentView === 'ventajas' && (
          <div>
            <SubpageBreadcrumb 
              title="Por Qué Cifra Flow" 
              subtitle="Metodología Microlearning Espiral y Narrativa Gamificada" 
            />
            <main>
              <WhyCifraFlow />
              <Footer 
                initialPlanName={selectedPlanForContact} 
                onOpenDemosPage={() => handleNavigate('demos')}
                onBackToHome={() => handleNavigate('portada')}
              />
            </main>
          </div>
        )}

        {/* VIEW 3: RUTA ACADÉMICA (1.º A 5.º AÑO) */}
        {currentView === 'ruta-academica' && (
          <div>
            <SubpageBreadcrumb 
              title="Ruta Académica (1.º a 5.º Año)" 
              subtitle="Pilares Curriculares: Ciberseguridad, Inversión BVC y Presupuesto" 
            />
            <main>
              <AcademicRoute />
              <Footer 
                initialPlanName={selectedPlanForContact} 
                onOpenDemosPage={() => handleNavigate('demos')}
                onBackToHome={() => handleNavigate('portada')}
              />
            </main>
          </div>
        )}

        {/* VIEW 4: PLAN APADRINAR COLEGIO & ALIANZAS RSE */}
        {currentView === 'alianzas' && (
          <div>
            <SubpageBreadcrumb 
              title="Plan Apadrinar Colegio & Alianzas RSE" 
              subtitle="Propuestas B2B de RSE para Banca Privada y Empresas" 
            />
            <main>
              <SponsorshipB2B onOpenContactModal={handleOpenContactModal} />
              <Footer 
                initialPlanName={selectedPlanForContact} 
                onOpenDemosPage={() => handleNavigate('demos')}
                onBackToHome={() => handleNavigate('portada')}
              />
            </main>
          </div>
        )}

        {/* VIEW 5: SIMULADOR TRADEA JUNIOR & FLOW QR */}
        {currentView === 'tradea' && (
          <div>
            <SubpageBreadcrumb 
              title="Simulador Tradea Junior & Flow QR" 
              subtitle="Bolsa de Valores de Caracas & Calculadora Oficial BCV" 
            />
            <main>
              <TradeaAndFlowQR />
              <Footer 
                initialPlanName={selectedPlanForContact} 
                onOpenDemosPage={() => handleNavigate('demos')}
                onBackToHome={() => handleNavigate('portada')}
              />
            </main>
          </div>
        )}

        {/* VIEW 6: CATÁLOGO DEDICADO DE DEMOS EN VIVO */}
        {currentView === 'demos' && (
          <div>
            <DemosPage 
              initialDemoId={selectedDemoId}
              onBackToHome={() => handleNavigate('portada')}
              onOpenLogin={() => setLoginModalOpen(true)}
            />
          </div>
        )}

        {/* VIEW 7: DESAFÍO INTERACTIVO PWA */}
        {currentView === 'simulador-pwa' && (
          <div>
            <SubpageBreadcrumb 
              title="Desafío Interactivo PWA" 
              subtitle="Simulador Práctico de Microlearning y AIR Score" 
            />
            <main>
              <PwaInteractiveDemo />
              <Footer 
                initialPlanName={selectedPlanForContact} 
                onOpenDemosPage={() => handleNavigate('demos')}
                onBackToHome={() => handleNavigate('portada')}
              />
            </main>
          </div>
        )}

        {/* VIEW 8: CONTACTO INSTITUCIONAL (LLEVA CIFRA FLOW A TU COLEGIO O EMPRESA) */}
        {currentView === 'contacto' && (
          <div>
            <SubpageBreadcrumb 
              title="Contacto Institucional" 
              subtitle="Lleva Cifra Flow a Tu Colegio o Empresa" 
            />
            <main>
              <InstitutionalContactSection 
                initialPlanName={selectedPlanForContact}
                onOpenDemos={() => handleNavigate('demos')}
              />
              <div className="py-8 bg-slate-50/90 border-t border-purple-100 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-800">Cifra Flow Financiero PWA</span>
                    <span>•</span>
                    <span>Consorcio AIK Soluciones, Akuri & Tradea.io</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleNavigate('demos')}
                      className="text-cyan-700 hover:text-cyan-900 underline cursor-pointer font-semibold flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Ver Catálogo de Demos</span>
                    </button>
                    <span>•</span>
                    <button
                      onClick={() => handleNavigate('portada')}
                      className="text-purple-700 hover:text-purple-900 underline cursor-pointer font-semibold flex items-center gap-1"
                    >
                      <Home className="w-3.5 h-3.5" />
                      <span>Volver al Inicio</span>
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        )}

        {/* VIEW 9: ENTORNO SIMULADO DE ESTUDIANTE */}
        {currentView === 'simulatedStudent' && (
          <div className="min-h-[calc(100vh-80px)] p-4 sm:p-8 max-w-5xl mx-auto space-y-6">
            
            {/* Top Return Banner */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-purple-200 shadow-md">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-100 text-purple-700">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500">Entorno Simulado Activo</div>
                  <div className="font-display font-bold text-slate-900 text-sm sm:text-base">
                    Panel Principal PWA Cifra Flow — Sesión: <span className="text-purple-700">{userRole}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleNavigate('portada')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 transition-colors cursor-pointer border border-slate-200"
              >
                <ArrowLeft className="w-4 h-4 text-purple-600" />
                <span>Volver a la Portada</span>
              </button>
            </div>

            {/* Student Dashboard Mock */}
            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-purple-200/80 shadow-xl space-y-6">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-purple-100">
                <div>
                  <span className="text-xs font-bold uppercase text-purple-700 tracking-wider">¡Bienvenido de Nuevo!</span>
                  <h1 className="font-display font-black text-2xl sm:text-3xl text-slate-900 mt-1">
                    Estudiante: Carlos M. (4.º Año)
                  </h1>
                  <p className="text-xs text-slate-600 mt-1">U.E. Colegio San Antonio • Plan Circuito Académico Corporativo</p>
                </div>

                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-purple-150">
                  <div className="text-right">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">AIR Score</div>
                    <div className="text-xl font-mono font-black text-purple-700">840 / 1000</div>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-100 text-amber-800 font-bold text-xs flex items-center gap-1">
                    <Flame className="w-4 h-4 text-amber-600" />
                    14 Días
                  </div>
                </div>
              </div>

              {/* Dashboard Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="p-5 bg-slate-50 rounded-2xl border border-purple-100 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-900">Pilar 1: Ciberseguridad</span>
                    <span className="text-purple-700">90% XP</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 w-[90%]" />
                  </div>
                  <p className="text-xs text-slate-600">Módulo "Blindaje Anti-Phishing" completado.</p>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-purple-100 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-900">Pilar 2: Inversión BVC</span>
                    <span className="text-cyan-700">75% XP</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-600 w-[75%]" />
                  </div>
                  <p className="text-xs text-slate-600">Cartera Tradea Junior: +12.4% retorno simulado.</p>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-purple-100 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-900">Pilar 3: Presupuesto Hogar</span>
                    <span className="text-indigo-700">80% XP</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 w-[80%]" />
                  </div>
                  <p className="text-xs text-slate-600">Calculadora de Tasa BCV y Pago Móvil activa.</p>
                </div>

              </div>

              <div className="p-6 bg-purple-50/70 rounded-2xl border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-display font-extrabold text-lg text-slate-900">Misión Diaria Recomendada</h3>
                  <p className="text-xs text-slate-600">"Cálculo de Margen de Reposición para Proyecto Escolar" (3 min)</p>
                </div>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => handleNavigate('demos')}
                    className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-cyan-800 font-bold text-xs uppercase tracking-wider cursor-pointer border border-cyan-300 shadow-sm"
                  >
                    Ver Demos Aliados (3)
                  </button>

                  <button 
                    onClick={() => handleNavigate('simulador-pwa')}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-extrabold text-xs uppercase tracking-wider shrink-0 shadow-md cursor-pointer"
                  >
                    Comenzar Misión (+150 XP)
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>

      {/* Shared Login Modal across views */}
      <PwaLoginModal 
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

    </div>
  );
}
