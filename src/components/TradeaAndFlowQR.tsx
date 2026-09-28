import React, { useState } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  QrCode, 
  AlertTriangle, 
  BarChart3, 
  DollarSign, 
  RefreshCw, 
  ArrowUpRight, 
  ArrowDownRight,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowUp,
  ExternalLink
} from 'lucide-react';
import { MARKET_TICKERS } from '../data/mockData';

export const TradeaAndFlowQR: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tradea' | 'flowqr'>('tradea');
  const [selectedTicker, setSelectedTicker] = useState(MARKET_TICKERS[0]);
  const [simulatedShares, setSimulatedShares] = useState(10);
  const [vesAmount, setVesAmount] = useState<number>(428); // 10 USD approx

  const bcvRate = 42.80;
  const usdEquivalent = (vesAmount / bcvRate).toFixed(2);

  return (
    <section id="tradea" className="py-24 relative bg-slate-50/80 backdrop-blur-md border-y border-purple-150 overflow-hidden">
      
      {/* Background Accent Lines */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold tracking-wider uppercase">
            <BarChart3 className="w-3.5 h-3.5 text-cyan-600" />
            Simuladores Educativos Bimonetarios
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
            <a
              href="https://tradea.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-700 hover:via-teal-700 hover:to-emerald-700 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-1 active:translate-y-0 group cursor-pointer"
            >
              <span>Tradea Junior & Flow QR</span>
              <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Aprende sobre el Mercado de Valores de Caracas (BVC) y pagos bimonetarios con herramientas interactivas de simulación libres de riesgo financiero real.
          </p>
        </div>

        {/* Scam-Free Pedagogical Guarantee Badge */}
        <div className="mb-10 max-w-4xl mx-auto bg-amber-50/80 border border-amber-200 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-left shadow-sm">
          <div className="p-3 rounded-xl bg-amber-100 text-amber-800 border border-amber-300 shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-extrabold uppercase text-amber-800 tracking-wider flex items-center gap-2">
              <span>Garantía Pedagógica Anti-Esquemas Piramidales</span>
              <ShieldCheck className="w-4 h-4 text-purple-700" />
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Educación objetiva y rigurosa. <strong className="text-slate-900">Cifra Flow prohíbe explícitamente cualquier recomendación de inversión especulativa, esquemas Ponzi o promesas de enriquecimiento rápido ("get-rich-quick schemes")</strong>. Todas las simulaciones utilizan saldos académicos virtuales.
            </p>
          </div>
        </div>

        {/* Main Interface Block */}
        <div className="bg-white/95 rounded-3xl border border-purple-200/90 p-6 sm:p-8 shadow-xl space-y-8 backdrop-blur-xl">
          
          {/* Top Switcher Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-purple-150 pb-6">
            
            <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-purple-150 w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('tradea')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  activeTab === 'tradea'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Simulador Tradea Junior (BVC)</span>
              </button>

              <button
                onClick={() => setActiveTab('flowqr')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  activeTab === 'flowqr'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <QrCode className="w-4 h-4" />
                <span>Cobro Flow QR Bimonetario</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
              <span>Simulación Activa v2.4</span>
            </div>
          </div>

          {/* TAB 1: TRADEA JUNIOR BVC SIMULATOR */}
          {activeTab === 'tradea' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Tickers Sidebar */}
              <div className="lg:col-span-4 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center justify-between">
                  <span>Mercado de Valores Simulado:</span>
                  <RefreshCw className="w-3.5 h-3.5 text-cyan-600 animate-spin" />
                </div>

                <div className="space-y-2">
                  {MARKET_TICKERS.map((ticker) => {
                    const isSelected = selectedTicker.symbol === ticker.symbol;
                    return (
                      <button
                        key={ticker.symbol}
                        onClick={() => setSelectedTicker(ticker)}
                        className={`w-full p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-cyan-50/80 border-cyan-400 shadow-sm ring-1 ring-cyan-300'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
                            {ticker.symbol}
                            {ticker.type === 'bvc' && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 font-mono font-bold">
                                BVC
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-slate-500">{ticker.name}</div>
                        </div>

                        <div className="text-right">
                          <div className="text-xs font-mono font-extrabold text-slate-900">{ticker.price}</div>
                          <div className={`text-[10px] font-mono font-bold flex items-center justify-end gap-0.5 ${
                            ticker.isPositive ? 'text-emerald-700' : 'text-rose-600'
                          }`}>
                            {ticker.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                            {ticker.change}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Trading Chart & Order Simulation */}
              <div className="lg:col-span-8 bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-6 text-white shadow-md">
                
                {/* Active Ticker Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-cyan-400 tracking-wider">Activo Seleccionado</span>
                    <h3 className="font-display font-extrabold text-xl text-white">
                      {selectedTicker.symbol} — <span className="text-slate-300">{selectedTicker.name}</span>
                    </h3>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="text-2xl font-mono font-black text-[#C084FC]">
                      {selectedTicker.price}
                    </div>
                    <div className="text-xs text-slate-400">Tasa de Variación Diaria: {selectedTicker.change}</div>
                  </div>
                </div>

                {/* Simulated Candle Chart Visual */}
                <div className="h-48 bg-[#0B0F19] rounded-xl p-4 border border-slate-800 relative flex items-end justify-between gap-2 overflow-hidden">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 bg-cyber-lines pointer-events-none opacity-40" />

                  {/* Simulated Candles */}
                  {[40, 55, 35, 65, 80, 60, 90, 75, 85, 95, 70, 110, 100, 125].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 z-10 group relative">
                      <div className="w-[1px] h-full bg-slate-800 group-hover:bg-cyan-400/50" />
                      <div 
                        className={`w-full rounded-sm transition-all duration-300 ${
                          i % 2 === 0 ? 'bg-[#C084FC] glow-purple' : 'bg-cyan-400 glow-cyan'
                        }`}
                        style={{ height: `${height}px` }}
                      />
                    </div>
                  ))}
                </div>

                {/* Interactive Simulated Order Controls */}
                <div className="bg-[#0B0F19] p-4 rounded-xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-300">Simulación de Orden de Compra Académica:</span>
                    <span className="text-cyan-400">Saldo Virtual: 2,500 XP</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400">Cantidad de Acciones:</label>
                      <input
                        type="number"
                        value={simulatedShares}
                        onChange={(e) => setSimulatedShares(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full mt-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-right">
                      <div className="text-[10px] text-slate-400 uppercase font-bold">Valor Simulado de Transacción</div>
                      <div className="text-base font-mono font-bold text-[#C084FC]">
                        {(simulatedShares * 18.5).toFixed(2)} XP
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs uppercase tracking-wider glow-cyan transition-all cursor-pointer">
                    Ejecutar Simulación Educativa en Tradea Junior
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: FLOW QR BIMONETARY SIMULATOR */}
          {activeTab === 'flowqr' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Converter Controls */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-700">Herramienta de Cobro Escolar</span>
                  <h3 className="font-display font-black text-2xl text-slate-900 mt-1">
                    Convertidor Instantáneo Tasa BCV & QR
                  </h3>
                  <p className="text-slate-600 text-sm mt-2">
                    Permite a los estudiantes calcular cobros exactos para proyectos escolares de emprendimiento evitando pérdidas por distorsión cambiaria.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-purple-150 space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700">Ingresa Monto en Bolívares (VES):</label>
                    <div className="mt-2 relative">
                      <input
                        type="number"
                        value={vesAmount}
                        onChange={(e) => setVesAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                        className="w-full bg-white border border-slate-300 focus:border-purple-600 rounded-xl px-4 py-3 text-slate-900 font-mono text-lg font-bold focus:outline-none shadow-xs"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-purple-700">
                        Bs.
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-purple-150 space-y-2 shadow-xs">
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span>Tasa Oficial BCV:</span>
                      <span className="font-mono font-bold text-slate-900">1 USD = Bs. {bcvRate}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span>Equivalente exacto en Divisas:</span>
                      <span className="font-mono text-lg font-black text-purple-700">
                        ${usdEquivalent} USD
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-purple-150 flex items-center gap-2 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>Sin Comisiones Ocultas</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-purple-150 flex items-center gap-2 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>Cálculo Ético Transparente</span>
                  </div>
                </div>
              </div>

              {/* Dynamic QR Display */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm bg-gradient-to-b from-purple-50 via-white to-purple-50/50 p-6 rounded-3xl border border-purple-300 text-center space-y-4 shadow-xl">
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-800">
                    Comprobante Bimonetario Generado
                  </div>

                  <div className="bg-white p-4 rounded-2xl mx-auto w-48 h-48 flex items-center justify-center shadow-md border border-purple-100">
                    <div className="w-full h-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between">
                      <div className="flex justify-between">
                        <div className="w-6 h-6 bg-[#C084FC]" />
                        <div className="w-6 h-6 bg-cyan-400" />
                      </div>
                      <div className="font-mono text-[10px] font-bold text-[#C084FC]">
                        Bs. {vesAmount}
                      </div>
                      <div className="flex justify-between">
                        <div className="w-6 h-6 bg-purple-500" />
                        <div className="w-6 h-6 bg-[#C084FC]" />
                      </div>
                    </div>
                  </div>

                  <div className="font-mono text-xl font-extrabold text-slate-900">
                    Bs. {vesAmount} <span className="text-xs font-normal text-slate-600">({usdEquivalent} USD)</span>
                  </div>

                  <div className="text-[11px] text-slate-500">
                    Escanea para validar transacción en simulador Cifra Flow PWA.
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Return to Top / Cover Button */}
        <div className="mt-12 text-center">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-purple-200 text-xs font-bold transition-all shadow-xs hover:shadow-md cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 text-purple-600 group-hover:-translate-y-0.5 transition-transform" />
            <span>Regresar a la Portada</span>
          </a>
        </div>

      </div>
    </section>
  );
};
