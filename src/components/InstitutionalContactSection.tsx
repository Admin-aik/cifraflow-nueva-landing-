import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  Lock, 
  FolderOpen, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  Mail, 
  Sparkles,
  Phone,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { BRAND_ASSETS } from '../data/mockData';

interface InstitutionalContactSectionProps {
  initialPlanName?: string;
  onOpenDemos?: () => void;
}

export const InstitutionalContactSection: React.FC<InstitutionalContactSectionProps> = ({
  initialPlanName,
  onOpenDemos
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    role: 'Director / Docente de Colegio',
    institution: '',
    email: '',
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
    <section id="contacto-institucional" className="py-12 md:py-16 bg-white/70 backdrop-blur-md relative z-10">
      
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Container Card matching the user's uploaded screenshot */}
        <div className="bg-white/95 rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-purple-200/90 shadow-[0_20px_50px_rgba(147,51,234,0.12)] backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Information, Credentials and Press Kit Button */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-black uppercase tracking-wider shadow-2xs">
                <Mail className="w-3.5 h-3.5 text-purple-600" />
                <span>CONTACTO INSTITUCIONAL</span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-slate-900 tracking-tight leading-[1.2]">
                Lleva Cifra Flow a Tu{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-600">
                  Colegio o Empresa
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Atención directa para Directores de Planteles, Comités de Padres, Representantes de RSE y Fundaciones de Impacto Educativo.
              </p>

              {/* Verified Trust Badges */}
              <div className="space-y-3 pt-3 text-xs text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Impulsado por Consorcio AIK Soluciones, Akuri & Tradea.io</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-200 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Caracas, Venezuela • Cobertura Nacional</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Resguardo Estricto de Datos Estudiantiles (LOPNNA Compliant)</span>
                </div>
              </div>

            </div>

            {/* Quick Drive Press & Logos Kit Button */}
            <div className="pt-6 border-t border-purple-100">
              <a
                href={BRAND_ASSETS.logosFolder}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-purple-50 hover:bg-purple-100/90 text-purple-900 border border-purple-200 text-xs font-bold transition-all shadow-xs group"
              >
                <FolderOpen className="w-4 h-4 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>Descargar Kit de Prensa & Logos en Drive</span>
                <ExternalLink className="w-3.5 h-3.5 text-purple-600 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Exact Institutional Form */}
          <div className="lg:col-span-7 bg-purple-50/50 p-6 sm:p-8 rounded-2xl border border-purple-200/90 shadow-sm flex flex-col justify-center">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-800">Nombre y Apellido *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Dra. María Rodríguez"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full mt-1.5 bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 shadow-2xs transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800">Rol o Cargo *</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full mt-1.5 bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 shadow-2xs transition-all cursor-pointer"
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
                    <label className="text-xs font-bold text-slate-800">Institución o Empresa *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. U.E. Colegio San José"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full mt-1.5 bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 shadow-2xs transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      placeholder="contacto@colegio.edu.ve"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full mt-1.5 bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 shadow-2xs transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800">Mensaje o Requerimiento Específico</label>
                  <textarea
                    rows={4}
                    placeholder="Escribe aquí los detalles del plantel o plan de apadrinamiento de tu interés..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full mt-1.5 bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 shadow-2xs transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:via-indigo-700 hover:to-purple-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-purple-500/25 hover:shadow-purple-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>ENVIAR SOLICITUD INSTITUCIONAL</span>
                    </>
                  )}
                </button>

              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display font-extrabold text-xl text-slate-900">
                  ¡Solicitud Enviada con Éxito!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Gracias por tu interés en Cifra Flow. Un consultor académico e institucional se comunicará contigo en menos de 24 horas hábiles.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        role: 'Director / Docente de Colegio',
                        institution: '',
                        email: '',
                        message: ''
                      });
                    }}
                    className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                  {onOpenDemos && (
                    <button
                      onClick={onOpenDemos}
                      className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-700 transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Explorar Demos</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
