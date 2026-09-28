import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Compass, Rocket, Zap, Sliders, Eye, EyeOff } from 'lucide-react';

export type GalacticTheme = 'cyberpunk' | 'nebula' | 'supernova' | 'warp';

interface Star {
  x: number;
  y: number;
  size: number;
  color: string;
  alpha: number;
  twinkleSpeed: number;
  vx: number;
  vy: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

interface GalacticGamerBackgroundProps {
  children?: React.ReactNode;
}

export const GalacticGamerBackground: React.FC<GalacticGamerBackgroundProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeTheme, setActiveTheme] = useState<GalacticTheme>('cyberpunk');
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [showNebula, setShowNebula] = useState<boolean>(true);
  const [warpSpeed, setWarpSpeed] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);

  // Mouse reaction position
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 40;
      mouseRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 40;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Color palettes based on theme - tailored for brilliant cosmic visibility on white
    const themePalettes: Record<GalacticTheme, string[]> = {
      cyberpunk: ['#7C3AED', '#0284C7', '#9333EA', '#0EA5E9', '#4F46E5', '#6366F1'],
      nebula: ['#C026D3', '#7C3AED', '#DB2777', '#4F46E5', '#9333EA', '#E11D48'],
      supernova: ['#D97706', '#EA580C', '#7C3AED', '#2563EB', '#DC2626', '#D97706'],
      warp: ['#7C3AED', '#0284C7', '#2563EB', '#9333EA', '#0891B2', '#4F46E5'],
    };

    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];

    const initStars = () => {
      stars = [];
      const count = Math.floor((width * height) / 5000);
      const palette = themePalettes[activeTheme];

      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2.2 + 0.6,
          color: palette[Math.floor(Math.random() * palette.length)],
          alpha: Math.random() * 0.55 + 0.35,
          twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
        });
      }
    };

    initStars();

    const spawnShootingStar = () => {
      if (Math.random() > 0.035) return;
      const palette = themePalettes[activeTheme];
      const startX = Math.random() * width * 1.2 - width * 0.1;
      const startY = Math.random() * (height * 0.5);

      shootingStars.push({
        x: startX,
        y: startY,
        length: Math.random() * 120 + 80,
        speed: (Math.random() * 8 + 6) * (warpSpeed ? 2 : 1),
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 deg down-right
        color: palette[Math.floor(Math.random() * palette.length)],
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 40 + 30,
      });
    };

    let time = 0;

    const render = () => {
      time += 0.01;

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const speedMultiplier = warpSpeed ? 3.5 : 1;

      // 1. Draw Starfield
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Twinkle update
        star.alpha += star.twinkleSpeed * speedMultiplier;
        if (star.alpha > 0.95 || star.alpha < 0.25) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        // Movement with drift + slight mouse offset parallax
        star.x += (star.vx + mouseRef.current.x * 0.01) * speedMultiplier;
        star.y += (star.vy + mouseRef.current.y * 0.01) * speedMultiplier;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.save();
        ctx.globalAlpha = Math.max(0.2, Math.min(1, star.alpha));
        ctx.fillStyle = star.color;

        if (warpSpeed) {
          // Stretch stars into hyper-warp streaks
          const streak = star.size * 14;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(star.x - streak * 0.5, star.y + streak);
          ctx.strokeStyle = star.color;
          ctx.lineWidth = star.size;
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();

          // Extra glow halo for larger stars
          if (star.size > 1.6) {
            ctx.shadowBlur = 6;
            ctx.shadowColor = star.color;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size * 0.8, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }

        ctx.restore();
      }

      // 2. Draw Constellation Connectors between nearby bright stars
      if (!warpSpeed && stars.length > 0) {
        ctx.save();
        ctx.lineWidth = 0.5;
        for (let i = 0; i < stars.length; i += 6) {
          for (let j = i + 1; j < stars.length; j += 12) {
            const dx = stars[i].x - stars[j].x;
            const dy = stars[i].y - stars[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
              const alpha = (1 - dist / 100) * 0.22;
              ctx.strokeStyle = stars[i].color;
              ctx.globalAlpha = alpha;
              ctx.beginPath();
              ctx.moveTo(stars[i].x, stars[i].y);
              ctx.lineTo(stars[j].x, stars[j].y);
              ctx.stroke();
            }
          }
        }
        ctx.restore();
      }

      // 3. Draw Shooting Stars / Comets
      spawnShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.life++;
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity = 1 - ss.life / ss.maxLife;

        if (ss.life >= ss.maxLife || ss.x > width + 200 || ss.y > height + 200) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const gradient = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        gradient.addColorStop(0, ss.color);
        gradient.addColorStop(0.35, ss.color);
        gradient.addColorStop(1, 'transparent');

        ctx.save();
        ctx.globalAlpha = Math.max(0, ss.opacity);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Glowing Comet Head
        ctx.fillStyle = ss.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = ss.color;
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeTheme, warpSpeed]);

  // Color mappings for HTML nebula overlays - luminous ethereal tints on white
  const themeNebulaStyles: Record<GalacticTheme, { orb1: string; orb2: string; orb3: string }> = {
    cyberpunk: {
      orb1: 'from-purple-300/35 via-cyan-200/25 to-transparent',
      orb2: 'from-indigo-200/40 via-purple-200/25 to-transparent',
      orb3: 'from-cyan-200/35 via-purple-100/20 to-transparent',
    },
    nebula: {
      orb1: 'from-pink-300/35 via-purple-200/30 to-transparent',
      orb2: 'from-purple-300/40 via-indigo-200/25 to-transparent',
      orb3: 'from-fuchsia-200/35 via-violet-200/20 to-transparent',
    },
    supernova: {
      orb1: 'from-amber-200/45 via-rose-200/30 to-transparent',
      orb2: 'from-purple-200/35 via-sky-200/25 to-transparent',
      orb3: 'from-yellow-200/35 via-orange-200/20 to-transparent',
    },
    warp: {
      orb1: 'from-purple-300/45 via-cyan-200/35 to-transparent',
      orb2: 'from-sky-200/40 via-purple-200/30 to-transparent',
      orb3: 'from-indigo-200/35 via-cyan-200/25 to-transparent',
    },
  };

  const neb = themeNebulaStyles[activeTheme];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white transition-colors duration-1000">
      
      {/* 1. Deep Space Cosmic Radial Atmosphere Base on White */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50/70 via-sky-50/40 to-white opacity-95" />

      {/* 2. Floating Galactic Nebulae Orbs */}
      {showNebula && (
        <>
          <div 
            className={`absolute -top-32 left-1/4 w-[750px] h-[750px] bg-radial ${neb.orb1} rounded-full blur-[140px] opacity-70 animate-pulse duration-[8000ms] transition-all duration-1000`} 
          />
          <div 
            className={`absolute top-1/3 -right-32 w-[680px] h-[680px] bg-radial ${neb.orb2} rounded-full blur-[150px] opacity-65 transition-all duration-1000`} 
          />
          <div 
            className={`absolute bottom-0 left-10 w-[620px] h-[620px] bg-radial ${neb.orb3} rounded-full blur-[130px] opacity-65 transition-all duration-1000`} 
          />
        </>
      )}

      {/* 3. Dynamic HTML5 Canvas Starfield & Shooting Stars */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block" 
      />

      {/* 4. Cyberpunk Gamer Horizon perspective Grid */}
      {showGrid && (
        <div className="absolute inset-0 bg-cyber-lines opacity-60 mix-blend-multiply">
          <div className="absolute bottom-0 left-0 right-0 h-[45vh] bg-gradient-to-t from-purple-100/30 via-cyan-100/15 to-transparent [mask-image:linear-gradient(to_bottom,transparent,black_80%)]" />
        </div>
      )}

      {/* 5. Subtle CRT / Starlight Grid Texture Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(147,51,234,0.015),rgba(147,51,234,0.015)_50%,rgba(6,182,212,0.01)_50%,rgba(6,182,212,0.01))] bg-[length:100%_6px] pointer-events-none" />

      {/* 6. Interactive Floating Galactic Control Switcher Widget */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto flex flex-col items-end gap-2">
        {showControls ? (
          <div className="bg-white/95 border border-purple-200/90 p-4 rounded-2xl shadow-[0_10px_35px_rgba(147,51,234,0.18)] backdrop-blur-xl text-xs space-y-3 w-64 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between pb-2 border-b border-purple-150 text-slate-900 font-bold">
              <span className="flex items-center gap-1.5 text-purple-700">
                <Sparkles className="w-4 h-4 text-purple-600" />
                Fondo Galáctico Gamer
              </span>
              <button 
                onClick={() => setShowControls(false)}
                className="text-slate-500 hover:text-slate-800 text-xs px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Theme selector */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Atmósfera Cósmica</label>
              <div className="grid grid-cols-2 gap-1.5">
                {(['cyberpunk', 'nebula', 'supernova', 'warp'] as GalacticTheme[]).map((theme) => (
                  <button
                    key={theme}
                    onClick={() => setActiveTheme(theme)}
                    className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold text-left capitalize transition-all border ${
                      activeTheme === theme
                        ? 'bg-purple-100/90 border-purple-500 text-purple-900 shadow-sm ring-1 ring-purple-400'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-purple-300 hover:bg-purple-50/50'
                    }`}
                  >
                    {theme === 'cyberpunk' && '🌌 Cyberpunk'}
                    {theme === 'nebula' && '🪐 Nebulosa'}
                    {theme === 'supernova' && '⚡ Supernova'}
                    {theme === 'warp' && '🚀 Warp Field'}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggles */}
            <div className="space-y-2 pt-1 border-t border-purple-150">
              <button
                onClick={() => setWarpSpeed(!warpSpeed)}
                className={`w-full flex items-center justify-between p-2 rounded-xl border text-[11px] font-bold transition-all ${
                  warpSpeed 
                    ? 'bg-cyan-100 border-cyan-400 text-cyan-900 shadow-sm' 
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Rocket className="w-3.5 h-3.5 text-cyan-600" />
                  Modo Hipervelocidad (Warp)
                </span>
                <span className={warpSpeed ? 'text-cyan-800' : 'text-slate-400'}>{warpSpeed ? 'ON' : 'OFF'}</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-700 pt-1 gap-1.5">
                <button
                  onClick={() => setShowGrid(!showGrid)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-[10px] font-semibold transition-colors flex-1 justify-center ${
                    showGrid ? 'bg-purple-50 border-purple-300 text-purple-800 font-bold' : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}
                >
                  <Compass className="w-3 h-3 text-purple-600" />
                  Red Cyber: {showGrid ? 'Sí' : 'No'}
                </button>

                <button
                  onClick={() => setShowNebula(!showNebula)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-[10px] font-semibold transition-colors flex-1 justify-center ${
                    showNebula ? 'bg-purple-50 border-purple-300 text-purple-800 font-bold' : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}
                >
                  <Zap className="w-3 h-3 text-purple-600" />
                  Nebulosa: {showNebula ? 'Sí' : 'No'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowControls(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 border border-purple-300 hover:border-purple-500 text-purple-700 font-bold text-xs shadow-[0_6px_25px_rgba(147,51,234,0.18)] backdrop-blur-md hover:scale-105 transition-all group cursor-pointer"
            title="Ajustar Fondo Galáctico Gamer"
          >
            <Sparkles className="w-4 h-4 text-purple-600 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Fondo Galáctico</span>
            <Sliders className="w-3.5 h-3.5 text-slate-400" />
          </button>
        )}
      </div>

    </div>
  );
};
