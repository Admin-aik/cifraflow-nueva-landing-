import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Film, 
  Maximize2, 
  X, 
  Users, 
  Mic, 
  Sparkles,
  Zap
} from 'lucide-react';
import videoPoster1 from '../assets/images/cifra_video_poster_1787258486569.jpg';
import videoPoster2 from '../assets/images/cifra_video_scene_trading_1787258499636.jpg';

export interface StoryScene {
  id: number;
  timeRange: string;
  startSec: number;
  endSec: number;
  title: string;
  narration: string;
  characters: string;
  image: string;
}

export const STORY_SCENES: StoryScene[] = [
  {
    id: 1,
    timeRange: '0:00 - 0:25',
    startSec: 0,
    endSec: 25,
    title: 'Cifra Flow: El Inventario de Poder',
    narration: 'En el corazón de una Venezuela vibrante, Ircar, Jorge, José Iván y Carlos descubrieron un portal hacia el futuro llamado Cifra Flow. Con una chispa de determinación, los cuatro amigos activaron el motor de su inteligencia financiera.',
    characters: 'Ircar, Jorge, José Iván y Carlos',
    image: videoPoster1
  },
  {
    id: 2,
    timeRange: '0:25 - 0:55',
    startSec: 25,
    endSec: 55,
    title: 'Combustible Digital Radiante',
    narration: 'Al ingresar sus primeros ahorros, vieron con asombro cómo el dinero se transformaba en un combustible digital radiante. Sus cuentas ya no eran simples números en una pantalla: se habían convertido en su inventario de poder, una herramienta cargada de energía lista para transformar su realidad.',
    characters: 'Los 4 Jóvenes y el Portal',
    image: videoPoster1
  },
  {
    id: 3,
    timeRange: '0:55 - 1:20',
    startSec: 55,
    endSec: 80,
    title: 'AIK Simulation & Sandbox Seguro',
    narration: 'El desafío apenas comenzaba. Jorge y José Iván se lanzaron a superar misiones de aprendizaje, descifrando complejos enigmas económicos como si fueran niveles de un videojuego. Al triunfar, desbloquearon el Sandbox: un ecosistema para dominar las finanzas globales y la tecnología blockchain con total seguridad.',
    characters: 'Jorge & José Iván (Simulación)',
    image: videoPoster2
  },
  {
    id: 4,
    timeRange: '1:20 - 1:40',
    startSec: 80,
    endSec: 100,
    title: 'Custodios del Patrimonio Familiar',
    narration: 'Tras completar el entrenamiento, los amigos demostraron ser mucho más que estudiantes: se convirtieron en los nuevos custodios del patrimonio de sus familias. Con la sabiduría de Cifra Flow, Ircar lideró la estrategia para proteger y multiplicar los activos familiares, convirtiendo el conocimiento en un legado de prosperidad.',
    characters: 'Ircar & El Árbol de la Prosperidad',
    image: videoPoster1
  }
];

interface CifraStoryVideoPlayerProps {
  className?: string;
  compact?: boolean;
}

export const CifraStoryVideoPlayer: React.FC<CifraStoryVideoPlayerProps> = ({ 
  className = '',
  compact = false
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentSec, setCurrentSec] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [activeSceneIndex, setActiveSceneIndex] = useState<number>(0);
  const [isFullscreenModal, setIsFullscreenModal] = useState<boolean>(false);
  const [audioStateLabel, setAudioStateLabel] = useState<string>('Audio listo');
  const totalDuration = 100; // 1:40 total duration in seconds

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const synthNodesRef = useRef<{ osc1: OscillatorNode; osc2: OscillatorNode; filter: BiquadFilterNode } | null>(null);
  const isPlayingRef = useRef<boolean>(isPlaying);
  const isMutedRef = useRef<boolean>(isMuted);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  // Initialize Web Audio Synth for Ambient Cyberpunk Background Music
  const initAudio = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
        masterGain.connect(ctx.destination);

        audioCtxRef.current = ctx;
        masterGainRef.current = masterGain;
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
    } catch {
      // Audio context might be restricted before interaction
    }
  };

  const startAmbientSynth = () => {
    try {
      initAudio();
      if (!audioCtxRef.current || !masterGainRef.current) return;
      if (synthNodesRef.current) return; // Already running

      const ctx = audioCtxRef.current;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const synthGain = ctx.createGain();

      // Atmospheric sci-fi chords
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(130.81, ctx.currentTime); // C3

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(196.00, ctx.currentTime); // G3

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(580, ctx.currentTime);

      synthGain.gain.setValueAtTime(0.04, ctx.currentTime);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(synthGain);
      synthGain.connect(masterGainRef.current);

      osc1.start();
      osc2.start();

      synthNodesRef.current = { osc1, osc2, filter };
    } catch {
      // Autoplay fallback
    }
  };

  const stopAmbientSynth = () => {
    try {
      if (synthNodesRef.current) {
        synthNodesRef.current.osc1.stop();
        synthNodesRef.current.osc2.stop();
        synthNodesRef.current = null;
      }
    } catch {
      // Clean stop
    }
  };

  // Play Speech Narration using Web Speech API with fluid Venezuelan Spanish intonation
  const speakSceneNarration = (sceneIndex: number) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    
    // Cancel any hanging audio narration
    window.speechSynthesis.cancel();

    if (isMuted) return;

    const scene = STORY_SCENES[sceneIndex];
    if (!scene) return;

    const textToSpeak = `${scene.title}: ${scene.narration}`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    utterance.lang = 'es-VE';
    utterance.rate = 1.18;
    utterance.pitch = 1.05;

    const voices = window.speechSynthesis.getVoices();
    const venezuelanVoice = voices.find(
      (v) => 
        v.lang === 'es-VE' || 
        v.lang === 'es_VE' || 
        v.name.toLowerCase().includes('venezuela') || 
        v.name.toLowerCase().includes('caracas')
    ) || voices.find(
      (v) => 
        v.lang === 'es-419' || 
        v.lang.startsWith('es-US') || 
        v.lang.startsWith('es-CO') || 
        v.lang.startsWith('es-MX') ||
        v.name.toLowerCase().includes('latin') ||
        v.name.toLowerCase().includes('miguel') ||
        v.name.toLowerCase().includes('carlos')
    ) || voices.find(
      (v) => v.lang.startsWith('es')
    );

    if (venezuelanVoice) {
      utterance.voice = venezuelanVoice;
    }

    utterance.onstart = () => {
      setAudioStateLabel('Voz: Entonación Venezolana');
    };

    utterance.onend = () => {
      if (isPlayingRef.current && !isMutedRef.current) {
        if (sceneIndex < STORY_SCENES.length - 1) {
          const nextIdx = sceneIndex + 1;
          const nextScene = STORY_SCENES[nextIdx];
          setActiveSceneIndex(nextIdx);
          setCurrentSec(nextScene.startSec);
          setTimeout(() => {
            speakSceneNarration(nextIdx);
          }, 40);
        } else {
          setAudioStateLabel('Historia completada');
          setIsPlaying(false);
          stopAmbientSynth();
        }
      } else {
        setAudioStateLabel('Voz activa');
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  const togglePlay = () => {
    const nextPlaying = !isPlaying;
    setIsPlaying(nextPlaying);

    if (nextPlaying) {
      initAudio();
      if (!isMuted) {
        startAmbientSynth();
        speakSceneNarration(activeSceneIndex);
      }
    } else {
      stopAmbientSynth();
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    if (nextMuted) {
      stopAmbientSynth();
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setAudioStateLabel('Silenciado');
    } else {
      if (isPlaying) {
        startAmbientSynth();
        speakSceneNarration(activeSceneIndex);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
      const onVoicesChanged = () => {
        window.speechSynthesis.getVoices();
      };
      window.speechSynthesis.onvoiceschanged = onVoicesChanged;
    }
  }, []);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSec((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            stopAmbientSynth();
            if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
              window.speechSynthesis.cancel();
            }
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  useEffect(() => {
    const sceneIdx = STORY_SCENES.findIndex(
      (scene) => currentSec >= scene.startSec && currentSec < scene.endSec
    );
    if (sceneIdx !== -1 && sceneIdx !== activeSceneIndex) {
      setActiveSceneIndex(sceneIdx);
      if (isPlaying && !isMuted) {
        speakSceneNarration(sceneIdx);
      }
    }
  }, [currentSec, isPlaying, isMuted, activeSceneIndex]);

  const handleRestart = () => {
    setCurrentSec(0);
    setActiveSceneIndex(0);
    setIsPlaying(true);
    initAudio();
    if (!isMuted) {
      startAmbientSynth();
      speakSceneNarration(0);
    }
  };

  const handleSelectScene = (idx: number) => {
    const scene = STORY_SCENES[idx];
    setCurrentSec(scene.startSec);
    setActiveSceneIndex(idx);
    setIsPlaying(true);
    initAudio();
    if (!isMuted) {
      startAmbientSynth();
      speakSceneNarration(idx);
    }
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const activeScene = STORY_SCENES[activeSceneIndex];

  return (
    <div className={`flex flex-col space-y-3.5 w-full ${className}`}>
      
      {/* Top Header Badges with Live Audio Status */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
          <Film className="w-3.5 h-3.5 text-[#C084FC]" />
          <span>Video Oficial con Audio</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-300 bg-emerald-950/70 px-2.5 py-1 rounded-md border border-emerald-500/30 backdrop-blur-md">
          <Mic className="w-3 h-3 text-emerald-400 animate-pulse" />
          <span>Narración & Música ON</span>
        </div>
      </div>

      {/* Video Player Device Container */}
      <div className={`relative group rounded-3xl ${compact ? 'p-2.5 sm:p-3 space-y-2.5' : 'p-3 sm:p-4 space-y-3.5'} bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-purple-500/40 shadow-[0_0_30px_rgba(192,132,252,0.2)] overflow-hidden`}>
        
        {/* Ambient background glows */}
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* 1. RECTANGULAR VIDEO SCREEN (Unobstructed Image) */}
        <div className="relative aspect-[16/9] max-h-[210px] sm:max-h-[240px] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-md">
          
          {/* Visual Scene Artwork with Zoom on Play */}
          <img 
            src={activeScene.image} 
            alt={activeScene.title}
            className={`w-full h-full object-cover object-center transition-all duration-700 ${isPlaying ? 'scale-105' : 'scale-100'}`}
            referrerPolicy="no-referrer"
          />

          {/* Subtle vignette border overlay (does not obscure characters) */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/40 pointer-events-none" />

          {/* Top Video Overlay Bar */}
          <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10 pointer-events-auto">
            <div className="flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-purple-500/30 shadow-xs">
              <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-wide truncate max-w-[160px] sm:max-w-[220px]">
                {activeScene.title}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={toggleMute}
                className={`p-1 rounded-full border backdrop-blur-md transition-all flex items-center gap-1 px-2 text-[10px] font-bold cursor-pointer ${
                  isMuted 
                    ? 'bg-rose-950/85 border-rose-500/50 text-rose-300' 
                    : 'bg-emerald-950/85 border-emerald-500/50 text-emerald-300'
                }`}
                title={isMuted ? 'Activar Audio y Narración' : 'Silenciar Audio'}
                aria-label="Silenciar o Activar sonido"
              >
                {isMuted ? <VolumeX className="w-3 h-3 text-rose-400" /> : <Volume2 className="w-3 h-3 text-emerald-400 animate-pulse" />}
                <span>{isMuted ? 'Muted' : 'Audio ON'}</span>
              </button>
              <button
                onClick={() => setIsFullscreenModal(true)}
                className="p-1 rounded-full bg-slate-900/85 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 backdrop-blur-md transition-colors cursor-pointer"
                title="Ver pantalla completa"
                aria-label="Pantalla completa"
              >
                <Maximize2 className="w-3 h-3 text-cyan-300" />
              </button>
            </div>
          </div>

          {/* Center Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-auto">
            <button
              onClick={togglePlay}
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl backdrop-blur-md cursor-pointer ${
                isPlaying 
                  ? 'bg-slate-950/60 border border-white/20 text-white/80 hover:bg-purple-600 hover:text-white opacity-0 hover:opacity-100' 
                  : 'bg-gradient-to-tr from-purple-600 to-cyan-500 border-2 border-white/50 text-white scale-105 shadow-[0_0_25px_rgba(192,132,252,0.6)] animate-pulse'
              }`}
              aria-label={isPlaying ? 'Pausar video' : 'Reproducir video con audio y narración'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
              )}
            </button>
          </div>

        </div>

        {/* 2. DEDICATED READING SECTION (Outside of Image, Cleanly Formatted) */}
        <div className="bg-slate-900/95 border border-purple-500/30 rounded-2xl p-3 sm:p-3.5 space-y-2 backdrop-blur-md shadow-xs">
          
          {/* Header of the narration */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-purple-300 font-bold uppercase tracking-wider border-b border-slate-800/80 pb-1.5">
            <span className="flex items-center gap-1.5 truncate max-w-[240px]">
              <Users className="w-3.5 h-3.5 text-[#C084FC] shrink-0" />
              <span className="text-slate-200">{activeScene.characters}</span>
            </span>
            <span className="font-mono text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded-md border border-purple-500/30 shrink-0">
              {activeScene.timeRange}
            </span>
          </div>

          {/* Reading text: Clear, completely visible and unobstructed */}
          <p className="text-xs sm:text-[13px] text-slate-100 leading-relaxed font-normal">
            "{activeScene.narration}"
          </p>

          {/* Video Progress Scrubber Bar */}
          <div className="space-y-1 pt-1">
            <div 
              className="w-full bg-slate-800 h-2 rounded-full overflow-hidden cursor-pointer relative"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const pct = Math.max(0, Math.min(1, clickX / rect.width));
                const newSec = Math.floor(pct * totalDuration);
                setCurrentSec(newSec);
                if (isPlaying && !isMuted) {
                  const targetSceneIdx = STORY_SCENES.findIndex(
                    (s) => newSec >= s.startSec && newSec < s.endSec
                  );
                  if (targetSceneIdx !== -1) {
                    speakSceneNarration(targetSceneIdx);
                  }
                }
              }}
            >
              <div 
                className="h-full bg-gradient-to-r from-[#C084FC] via-purple-400 to-cyan-400 transition-all duration-300"
                style={{ width: `${(currentSec / totalDuration) * 100}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="text-slate-300">{formatTime(currentSec)}</span>
              <span className="text-[#C084FC] font-semibold truncate px-2">{activeScene.title}</span>
              <span>{formatTime(totalDuration)}</span>
            </div>
          </div>

          {/* Audio Equalizer & Action Controls */}
          <div className="flex items-center justify-between pt-1.5 border-t border-slate-800/80">
            <div className="flex items-center gap-1.5">
              <button
                onClick={togglePlay}
                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-[11px] font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{isPlaying ? 'Pausar' : 'Escuchar Audio'}</span>
              </button>
              <button
                onClick={handleRestart}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Reiniciar historia con audio"
                aria-label="Reiniciar historia"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Audio Status feedback & Animated Waveform */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-slate-400 hidden sm:inline">
                {audioStateLabel}
              </span>
              <div className="flex items-center gap-0.5 h-3.5">
                <span className={`w-1 bg-cyan-400 rounded-full transition-all duration-300 ${isPlaying && !isMuted ? 'h-3.5 animate-pulse' : 'h-1'}`} />
                <span className={`w-1 bg-purple-400 rounded-full transition-all duration-300 ${isPlaying && !isMuted ? 'h-2.5 animate-pulse' : 'h-1.5'}`} />
                <span className={`w-1 bg-[#C084FC] rounded-full transition-all duration-300 ${isPlaying && !isMuted ? 'h-3.5 animate-pulse' : 'h-1'}`} />
                <span className={`w-1 bg-cyan-300 rounded-full transition-all duration-300 ${isPlaying && !isMuted ? 'h-2 animate-pulse' : 'h-1.5'}`} />
              </div>
            </div>
          </div>

        </div>

        {/* 3. INTERACTIVE STORY CHAPTER BADGES */}
        <div className={`grid grid-cols-2 gap-1.5 ${compact ? 'mt-2' : 'mt-2.5'}`}>
          {STORY_SCENES.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => handleSelectScene(idx)}
              className={`text-left ${compact ? 'p-1.5' : 'p-2'} rounded-xl text-[10px] sm:text-[11px] font-medium border transition-all cursor-pointer ${
                activeSceneIndex === idx
                  ? 'bg-purple-950/80 border-[#C084FC] text-white shadow-[0_0_10px_rgba(192,132,252,0.2)]'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="font-bold flex items-center gap-1 truncate">
                <span className="text-[#C084FC]">#{idx + 1}</span> {scene.title}
              </div>
              <div className="text-[9px] font-mono text-slate-500">{scene.timeRange}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Video Story Modal */}
      {isFullscreenModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-slate-900 border border-purple-500/40 rounded-3xl p-5 shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-[#C084FC]" />
                <span className="font-display font-bold text-white text-base">Cifra Flow: El Inventario de Poder</span>
              </div>
              <button
                onClick={() => setIsFullscreenModal(false)}
                className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Screen */}
            <div className="relative aspect-[9/13] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              <img 
                src={activeScene.image} 
                alt={activeScene.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-purple-500/40 rounded-xl p-3.5 backdrop-blur-md space-y-1">
                <div className="text-[10px] font-bold text-purple-300 uppercase tracking-wide">
                  Capítulo {activeScene.id}: {activeScene.title}
                </div>
                <p className="text-xs text-slate-100 leading-relaxed">
                  "{activeScene.narration}"
                </p>
              </div>
            </div>

            {/* Modal Controls */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-2 cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{isPlaying ? 'Pausar' : 'Reproducir'}</span>
                </button>
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                </button>
              </div>

              <div className="text-xs font-mono text-slate-400">
                {formatTime(currentSec)} / {formatTime(totalDuration)}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
