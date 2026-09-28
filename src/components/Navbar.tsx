import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Sparkles, 
  Menu, 
  X, 
  Smartphone, 
  ArrowRight, 
  School, 
  Home, 
  BookOpen, 
  TrendingUp, 
  Layers, 
  Mail,
  ChevronDown,
  Lock,
  Grid,
  Zap
} from 'lucide-react';
import cifraLogo from '../assets/images/cifra_flow_white_logo_1787322251479.jpg';

export type PageView = 
  | 'portada'
  | 'modulos'
  | 'ventajas'
  | 'ruta-academica'
  | 'alianzas'
  | 'tradea'
  | 'demos'
  | 'simulador-pwa'
  | 'simulatedStudent'
  | 'contacto';

interface NavbarProps {
  activeView: PageView;
  onNavigate: (view: PageView) => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeView, 
  onNavigate, 
  onOpenLogin 
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/95 border-b border-slate-200/90 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
        
        {/* Brand Logo - Official Cifra Flow Financiero */}
        <button 
          onClick={() => handleNavClick('portada')} 
          className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none" 
          title="Ir a la Página de Inicio (Portada de Cifra Flow Financiero)"
        >
          <div className="relative h-14 sm:h-[64px] flex items-center overflow-hidden rounded-xl bg-white p-1 border border-slate-200 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-purple-300 group-hover:shadow-[0_0_18px_rgba(192,132,252,0.25)]">
            <img 
              src={cifraLogo} 
              alt="Cifra Flow Financiero Logo" 
              className="h-full w-auto object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-purple-600 transition-colors">
                CIFRA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">FLOW</span>
              </span>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800 border border-purple-200 uppercase tracking-wide">
                PWA
              </span>
            </div>
            <span className="text-[10px] font-black tracking-[0.2em] text-slate-600 group-hover:text-slate-900 transition-colors uppercase">
              FINANCIERO
            </span>
          </div>
        </button>

        {/* Right Section: 1. Login button, 2. Dropdown Menu Toggle to the RIGHT of Login */}
        <div className="relative flex items-center gap-3" ref={dropdownRef}>
          
          {/* LOGIN BUTTON (Replaced "Acceso PWA" with "Login") */}
          <button
            onClick={onOpenLogin}
            className="flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-xl shadow-md shadow-purple-500/20 hover:shadow-purple-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            title="Iniciar Sesión en Cifra Flow"
          >
            <Lock className="w-4 h-4 text-purple-200" />
            <span>Login</span>
          </button>

          {/* DROPDOWN MENU TOGGLE BAR (Placed to the RIGHT of Login) */}
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl border transition-all cursor-pointer shadow-xs ${
              dropdownOpen
                ? 'bg-purple-50 border-purple-400 text-purple-900 ring-2 ring-purple-200'
                : 'bg-white hover:bg-slate-50 border-slate-300 hover:border-purple-300 text-slate-800'
            }`}
            aria-label="Abrir menú desplegable"
            aria-expanded={dropdownOpen}
          >
            {dropdownOpen ? (
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            ) : (
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
            )}
            <span className="text-slate-800 font-bold">
              Menú
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-purple-600' : ''}`} />
          </button>

          {/* DROPDOWN MENU PANEL (Includes all sections & the new modules section from image) */}
          {dropdownOpen && (
            <div className="absolute top-full right-0 mt-2.5 w-[310px] sm:w-[380px] bg-white/98 backdrop-blur-2xl rounded-2xl border border-purple-200/90 shadow-2xl p-3 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto z-50">
              
              <div className="px-3 py-1.5 flex items-center justify-between border-b border-slate-100 mb-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                  Navegación del Ecosistema
                </span>
                <span className="text-[10px] font-black text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                  Cifra Flow
                </span>
              </div>

              {/* 1. PRINCIPAL: Inicio / Portada de la Plataforma */}
              <button
                onClick={() => handleNavClick('portada')}
                className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 cursor-pointer group ${
                  activeView === 'portada'
                    ? 'bg-purple-100/90 text-purple-950 font-bold border border-purple-300'
                    : 'bg-gradient-to-r from-purple-50/70 to-indigo-50/70 hover:from-purple-100/80 hover:to-indigo-100/80 border border-purple-200/70'
                }`}
              >
                <div className="p-2 rounded-lg bg-purple-600 text-white shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                  <Home className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-900 group-hover:text-purple-700">
                      Inicio (Portada Principal)
                    </span>
                    <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-purple-600 text-white uppercase">
                      Página de Inicio
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                    Portada oficial con video interactivo, modelo educativo y accesos rápidos.
                  </p>
                </div>
              </button>

              {/* 2. Funcionalidades y Módulos de la Plataforma */}
              <button
                onClick={() => handleNavClick('modulos')}
                className={`w-full text-left p-2 rounded-xl transition-all flex items-center gap-3 cursor-pointer ${
                  activeView === 'modulos'
                    ? 'bg-purple-100 text-purple-900 font-bold'
                    : 'hover:bg-slate-100 text-slate-800'
                }`}
              >
                <div className="p-1.5 rounded-lg bg-purple-100 text-purple-700 shrink-0">
                  <Grid className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold block">Funcionalidades y Módulos</span>
                  <span className="text-[10px] text-slate-500 block">Ecosistema de 8 módulos clave</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* 3. Por Qué Cifra Flow */}
              <button
                onClick={() => handleNavClick('ventajas')}
                className={`w-full text-left p-2 rounded-xl transition-all flex items-center gap-3 cursor-pointer ${
                  activeView === 'ventajas'
                    ? 'bg-purple-100 text-purple-900 font-bold'
                    : 'hover:bg-slate-100 text-slate-800'
                }`}
              >
                <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-700 shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold block">Por Qué Cifra Flow</span>
                  <span className="text-[10px] text-slate-500 block">Metodología LXD y Microlearning</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* 4. CUARTA POSICIÓN: Contacto Institucional (Lleva Cifra Flow a Tu Colegio o Empresa) */}
              <button
                onClick={() => handleNavClick('contacto')}
                className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 cursor-pointer group ${
                  activeView === 'contacto'
                    ? 'bg-purple-100 text-purple-950 font-bold border border-purple-300'
                    : 'bg-purple-50/50 hover:bg-purple-100/70 border border-purple-200/60'
                }`}
              >
                <div className="p-2 rounded-lg bg-purple-600 text-white shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-900 group-hover:text-purple-700">
                      Contacto Institucional
                    </span>
                    <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-purple-200 text-purple-800 uppercase">
                      4.º
                    </span>
                  </div>
                  <span className="text-[11px] text-purple-900 font-semibold block leading-tight">
                    Lleva Cifra Flow a Tu Colegio o Empresa
                  </span>
                  <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">
                    Directores, Comités de Padres y Alianzas RSE
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-purple-600 group-hover:translate-x-0.5 transition-transform shrink-0 mt-1" />
              </button>

              {/* 5. Ruta Académica (1.º a 5.º Año) */}
              <button
                onClick={() => handleNavClick('ruta-academica')}
                className={`w-full text-left p-2 rounded-xl transition-all flex items-center gap-3 cursor-pointer ${
                  activeView === 'ruta-academica'
                    ? 'bg-purple-100 text-purple-900 font-bold'
                    : 'hover:bg-slate-100 text-slate-800'
                }`}
              >
                <div className="p-1.5 rounded-lg bg-purple-50 text-purple-700 shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold block">Ruta Académica Completa</span>
                  <span className="text-[10px] text-slate-500 block">Currículo progresivo 1.º a 5.º Año</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* 6. Plan Apadrinar Colegio */}
              <button
                onClick={() => handleNavClick('alianzas')}
                className={`w-full text-left p-2 rounded-xl transition-all flex items-center gap-3 cursor-pointer ${
                  activeView === 'alianzas'
                    ? 'bg-purple-100 text-purple-900 font-bold'
                    : 'hover:bg-slate-100 text-slate-800'
                }`}
              >
                <div className="p-1.5 rounded-lg bg-purple-50 text-purple-700 shrink-0">
                  <School className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold">Apadrinar Colegio</span>
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-purple-100 text-purple-800">
                      RSE
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 block">Propuestas B2B Banca y Empresas</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* 7. Tradea & Flow QR */}
              <button
                onClick={() => handleNavClick('tradea')}
                className={`w-full text-left p-2 rounded-xl transition-all flex items-center gap-3 cursor-pointer ${
                  activeView === 'tradea'
                    ? 'bg-cyan-100 text-cyan-950 font-bold'
                    : 'hover:bg-slate-100 text-slate-800'
                }`}
              >
                <div className="p-1.5 rounded-lg bg-cyan-50 text-cyan-700 shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold block">Tradea Junior & Flow QR</span>
                  <span className="text-[10px] text-slate-500 block">Bolsa BVC & Pago Móvil BCV</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* 8. Demos en Vivo (3) */}
              <button
                onClick={() => handleNavClick('demos')}
                className={`w-full text-left p-2 rounded-xl transition-all flex items-center gap-3 cursor-pointer ${
                  activeView === 'demos'
                    ? 'bg-purple-100 text-purple-900 font-bold'
                    : 'hover:bg-slate-100 text-slate-800'
                }`}
              >
                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold">Demos en Vivo</span>
                    <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-emerald-600 text-white">
                      3 Demos
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 block">Banco Plaza, BDV y MásQueSeguridad</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* 9. Simulador PWA */}
              <button
                onClick={() => handleNavClick('simulador-pwa')}
                className={`w-full text-left p-2 rounded-xl transition-all flex items-center gap-3 cursor-pointer ${
                  activeView === 'simulador-pwa'
                    ? 'bg-cyan-100 text-cyan-950 font-bold'
                    : 'hover:bg-slate-100 text-slate-800'
                }`}
              >
                <div className="p-1.5 rounded-lg bg-cyan-50 text-cyan-700 shrink-0">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold block">Desafío Interactivo PWA</span>
                  <span className="text-[10px] text-slate-500 block">Misiones y XP en pantalla</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

            </div>
          )}

        </div>

      </div>
    </header>
  );
};
