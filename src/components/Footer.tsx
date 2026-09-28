import React, { useState } from 'react';
import { 
  Shield, 
  Send, 
  CheckCircle2, 
  FolderOpen, 
  ExternalLink, 
  Heart, 
  Lock, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  Building,
  ArrowUp,
  Sparkles
} from 'lucide-react';
import { BRAND_ASSETS } from '../data/mockData';

interface FooterProps {
  initialPlanName?: string;
  onOpenDemosPage?: () => void;
  onBackToHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ initialPlanName, onOpenDemosPage, onBackToHome }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    role: 'Director / Docente de Colegio',
    institution: '',
    email: '',
    phone: '',
    message: initialPlanName ? `Deseo solicitar información sobre: ${initialPlanName}` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <footer className="bg-slate-50/90 text-slate-700 border-t border-purple-200/80 pt-20 pb-12 relative overflow-hidden backdrop-blur-md">
      
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Contact Form Section */}
        <div id="contacto" className="bg-white/95 rounded-3xl p-8 sm:p-12 border border-purple-200 grid grid-cols-1 lg:grid-cols-12 gap-12 backdrop-blur-xl shadow-xl">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-bold uppercase shadow-xs">
              <Mail className="w-3.5 h-3.5 text-purple-600" />
              Contacto Institucional
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Lleva Cifra Flow a Tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-600">Colegio o Empresa</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Atención directa para Directores de Planteles, Comités de Padres, Representantes de RSE y Fundaciones de Impacto Educativo.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-50 text-purple-700 border border-purple-200">
                  <Building className="w-4 h-4" />
                </div>
                <span>Impulsado por Consorcio AIK Soluciones, Akuri & Tradea.io</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-50 text-cyan-700 border border-cyan-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Caracas, Venezuela • Cobertura Nacional</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-50 text-purple-700 border border-purple-200">
                  <Lock className="w-4 h-4" />
                </div>
                <span>Resguardo Estricto de Datos Estudiantiles (LOPNNA Compliant)</span>
              </div>
            </div>

            {/* Quick Drive Asset Folder Button */}
            <div className="pt-4 border-t border-purple-100">
              <a
                href={BRAND_ASSETS.logosFolder}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 text-xs font-bold transition-colors shadow-xs"
              >
                <FolderOpen className="w-4 h-4 text-purple-700" />
                <span>Descargar Kit de Prensa & Logos en Drive</span>
                <ExternalLink className="w-3 h-3 text-purple-600" />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-purple-50/40 p-6 sm:p-8 rounded-2xl border border-purple-200/80 shadow-xs">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700">Nombre y Apellido *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Dra. María Rodríguez"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full mt-1.5 bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-500 shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700">Rol o Cargo *</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full mt-1.5 bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-500 shadow-2xs"
                    >
                      <option>Director / Docente de Colegio</option>
                      <option>Gerente de RSE / Empresa</option>
                      <option>Comité de Padres / Representante</option>
                      <option>Fundación / Aliado Institucional</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700">Institución o Empresa *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. U.E. Colegio San José"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full mt-1.5 bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-500 shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      placeholder="contacto@colegio.edu.ve"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full mt-1.5 bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-500 shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700">Mensaje o Requerimiento Específico</label>
                  <textarea
                    rows={3}
                    placeholder="Escribe aquí los detalles del plantel o plan de apadrinamiento de tu interés..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full mt-1.5 bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-500 shadow-2xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 hover:opacity-95 transition-all cursor-pointer"
                >
                  {loading ? (
                    <span>Enviando Solicitud...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Enviar Solicitud Institucional</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display font-extrabold text-xl text-slate-900">
                  ¡Solicitud Recibida Exitosamente!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Gracias, <strong className="text-slate-900">{formData.fullName}</strong>. Un especialista en alianzas educativas de Cifra Flow se comunicará con <strong className="text-slate-900">{formData.institution}</strong> a través de {formData.email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-purple-700 underline font-bold pt-2 cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Footer Bottom Credits & Branding */}
        <div className="pt-10 border-t border-purple-200/80 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-600">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 font-extrabold border border-purple-200">
              C;
            </div>
            <div>
              <div className="font-bold text-slate-900">Cifra Flow Financiero © {new Date().getFullYear()}</div>
              <div className="text-[11px] text-slate-500">Plataforma PWA de Educación Financiera & Ciberseguridad.</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <span>Desarrollo e Impulso Pedagógico:</span>
            <span className="text-slate-800 font-semibold">Consorcio AIK Soluciones y Estrategias</span>
            <span className="text-purple-300">•</span>
            <span className="text-cyan-700 font-semibold">Akuri</span>
            <span className="text-purple-300">•</span>
            <span className="text-purple-700 font-semibold">Tradea.io</span>
          </div>

        </div>

        {/* Return to Top / Cover Button and Demos Quick Link */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-center">
          {onOpenDemosPage && (
            <button
              onClick={onOpenDemosPage}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-100 to-cyan-100 hover:from-purple-200 hover:to-cyan-200 text-purple-900 border border-purple-300 text-xs font-bold transition-all shadow-xs cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
              <span>Ver Catálogo de Demos en Vivo (3)</span>
            </button>
          )}

          <button
            onClick={() => {
              if (onBackToHome) {
                onBackToHome();
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-purple-50 text-slate-700 hover:text-purple-900 border border-purple-200 hover:border-purple-300 text-xs font-bold transition-all shadow-xs cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 text-purple-600 group-hover:-translate-y-0.5 transition-transform" />
            <span>Regresar a la Portada</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
