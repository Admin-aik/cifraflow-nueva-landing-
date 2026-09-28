import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface PwaLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (role: string) => void;
}

export const PwaLoginModal: React.FC<PwaLoginModalProps> = ({ 
  isOpen, 
  onClose, 
  onLoginSuccess 
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      onLoginSuccess('student');
    }, 700);
  };

  const handleGoogleLogin = () => {
    setGoogleLoading(true);
    setTimeout(() => {
      setGoogleLoading(false);
      onLoginSuccess('student');
    }, 800);
  };

  const handleForgotPassword = () => {
    setForgotSent(true);
    setTimeout(() => {
      setForgotSent(false);
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-gradient-to-br from-indigo-950/75 via-purple-950/85 to-pink-950/75 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Outer Card matching Image 2 */}
      <div className="relative w-full max-w-[340px] sm:max-w-[370px] bg-white rounded-[32px] sm:rounded-[38px] px-6 sm:px-8 py-8 sm:py-9 shadow-[0_25px_60px_rgba(236,72,153,0.28)] border border-pink-100 flex flex-col items-center">
        
        {/* Subtle Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          title="Cerrar ventana de acceso"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Circular Avatar with Gradient Ring (Exact Match of Image 2) */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2.5px] bg-gradient-to-tr from-[#6366f1] via-[#a855f7] to-[#ec4899] flex items-center justify-center mb-6 shadow-md shadow-pink-500/15">
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
            <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="userGradientAvatar" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <path
                fill="url(#userGradientAvatar)"
                d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zm0 2.2c-3 0-9 1.5-9 4.5V21h18v-2.3c0-3-6-4.5-9-4.5z"
              />
            </svg>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          
          {/* Input 1: login/e-mail (Pill style with pink shadow glow) */}
          <div className="relative">
            <input
              type="text"
              required
              placeholder="login/e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full py-3 px-6 bg-white border border-slate-200/90 shadow-[0_4px_18px_rgba(236,72,153,0.08)] text-slate-800 placeholder:text-slate-400 placeholder:font-light text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all text-center sm:text-left"
            />
          </div>

          {/* Input 2: password (Pill style with pink shadow glow) */}
          <div className="relative">
            <input
              type="password"
              required
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-full py-3 px-6 bg-white border border-slate-200/90 shadow-[0_4px_18px_rgba(236,72,153,0.08)] text-slate-800 placeholder:text-slate-400 placeholder:font-light text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all text-center sm:text-left"
            />
          </div>

          {/* Remember me toggle (Pink dot indicator from Image 2) */}
          <div className="pt-0.5 px-2">
            <label 
              onClick={() => setRememberMe(!rememberMe)}
              className="inline-flex items-center gap-2 cursor-pointer select-none"
            >
              <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all ${
                rememberMe 
                  ? 'bg-[#ec4899] ring-2 ring-pink-200 shadow-xs' 
                  : 'border border-slate-300 bg-white'
              }`}>
                {rememberMe && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </span>
              <span className="text-xs text-slate-400 font-normal">
                Remember me
              </span>
            </label>
          </div>

          {/* Log In Button (Exact match: Gradient from indigo/purple to magenta/pink) */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#5f5bf6] via-[#8c52ff] to-[#f038ab] hover:opacity-95 text-white font-medium text-base shadow-lg shadow-purple-500/30 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center disabled:opacity-75"
            >
              {isLoggingIn ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <span>Log In</span>
              )}
            </button>
          </div>

          {/* Forgot your password? link */}
          <div className="text-center pt-1">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-xs text-[#5b58ea] hover:text-[#4338ca] hover:underline font-normal transition-colors cursor-pointer"
            >
              Forgot your password?
            </button>

            {forgotSent && (
              <p className="text-[11px] text-emerald-600 mt-1.5 animate-in fade-in duration-200 flex items-center justify-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>Instrucciones de recuperación enviadas</span>
              </p>
            )}
          </div>

          {/* Google Sign-in Option as requested */}
          <div className="pt-2 border-t border-slate-100 space-y-2">
            <div className="relative flex items-center justify-center my-1">
              <span className="bg-white px-2 text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                o continúa con
              </span>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={googleLoading}
              className="w-full py-2.5 px-4 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs hover:shadow-xs flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 transition-all cursor-pointer disabled:opacity-75"
            >
              {googleLoading ? (
                <div className="w-4 h-4 border-2 border-purple-300 border-t-purple-600 rounded-full animate-spin" />
              ) : (
                <>
                  {/* Google Multicolor Logo */}
                  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>Continuar con Google</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
