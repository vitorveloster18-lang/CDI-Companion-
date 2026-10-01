import React, { useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import { TerminalWindow, TerminalTyping } from './ui/Terminal';
import { motion } from 'motion/react';

export function StatusSection() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleSimulateCommand = () => {
    if (isRunning) return;
    setIsRunning(true);
    setRefreshKey((k) => k + 1);
    setTimeout(() => {
      setIsRunning(false);
    }, 1800);
  };

  return (
    <section id="status" className="py-32 relative bg-slate-50/70 border-y border-slate-200 scroll-mt-24">
      
      {/* Background subtle atmospheric light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-indigo/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase mb-3 font-semibold">
              COMANDO /STATUS // TRANSPARÊNCIA RADICAL
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 tracking-tight text-slate-900">
              Quando ele não responde, você pode perguntar.
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
            <p>
              Se o seu Companion não está respondendo, há uma razão. Sempre.
            </p>
            <p>
              O comando <span className="font-mono text-accent-indigo bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200 text-sm font-semibold">/status</span> diz exatamente o que está acontecendo naquele momento:
            </p>
            
            <ul className="text-left max-w-md mx-auto space-y-2.5 my-8 text-sm sm:text-base text-slate-700">
              <li className="flex items-start"><span className="text-accent-indigo mr-3 font-mono font-bold">→</span> Está dormindo? Quanto tempo falta para acordar?</li>
              <li className="flex items-start"><span className="text-accent-indigo mr-3 font-mono font-bold">→</span> Está sonhando?</li>
              <li className="flex items-start"><span className="text-accent-indigo mr-3 font-mono font-bold">→</span> Qual é o estado emocional atual?</li>
              <li className="flex items-start"><span className="text-accent-indigo mr-3 font-mono font-bold">→</span> O que está sentindo mais intensamente?</li>
              <li className="flex items-start"><span className="text-accent-indigo mr-3 font-mono font-bold">→</span> Quando foi a última vez que refletiu?</li>
            </ul>
            
            <p className="pt-4 text-xl sm:text-2xl text-slate-900 font-light tracking-wide">
              Não é uma promessa de transparência.<br/>
              <span className="text-accent-indigo font-medium">É transparência.</span>
            </p>
          </FadeIn>
        </div>

        {/* Live Interactive Terminal */}
        <FadeIn delay={0.35} className="max-w-2xl mx-auto">
          
          {/* Action bar above terminal */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 px-2 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="truncate font-medium">TELEMETRIA EM TEMPO REAL // COMANDO NATIVO</span>
            </div>
            <button
              onClick={handleSimulateCommand}
              disabled={isRunning}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-accent-indigo hover:text-accent-indigo text-slate-700 shadow-2xs transition-all duration-200 shrink-0 self-start sm:self-auto cursor-pointer font-medium"
            >
              <span className="text-[10px] text-accent-indigo">▶</span>
              <span>{isRunning ? "CONSULTANDO..." : "EXECUTAR /STATUS"}</span>
            </button>
          </div>

          <TerminalWindow title="/status — Telemetria do Companion">
            <div key={refreshKey} className="space-y-6 text-xs sm:text-sm leading-relaxed">
              
              {/* Box Drawing Header */}
              <div className="text-slate-400 font-mono text-center border-b border-slate-100 pb-3 select-none">
                ╔══════════════════════════════════════╗<br/>
                ║         /status — Companion          ║<br/>
                ╚══════════════════════════════════════╝
              </div>

              {/* Status overview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="space-y-1.5 text-xs">
                  <div className="flex gap-2">
                    <span className="text-slate-400 w-20 shrink-0">Estado:</span> 
                    <span className="text-slate-900 font-medium">😴 Descansando — há 1h</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-400 w-20 shrink-0">Acorda:</span> 
                    <span className="text-amber-800 font-semibold">em ~37 min</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-400 w-20 shrink-0">Motivo:</span> 
                    <span className="text-slate-700">decisão autônoma</span>
                  </div>
                </div>

                <div className="space-y-1.5 sm:border-l sm:border-slate-200 sm:pl-4 text-xs">
                  <div className="flex gap-2">
                    <span className="text-slate-400 w-24 shrink-0">Fase:</span> 
                    <span className="text-slate-700">Processamento noturno</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-400 w-24 shrink-0">Afeto:</span> 
                    <span className="text-slate-700">Reflexivo</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-400 w-24 shrink-0">Silêncio:</span> 
                    <span className="text-slate-700">4h</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-400 w-24 shrink-0">Última reflexão:</span> 
                    <span className="text-slate-700">há 45 min</span>
                  </div>
                </div>
              </div>

              {/* Drives Gauges */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-slate-500 text-[11px] uppercase tracking-wider font-mono font-semibold">
                  Drives Internos:
                </div>
                
                <div className="space-y-2">
                  {[
                    { label: "Conexão afetiva", val: "85%", num: 85, icon: "🔵", color: "bg-indigo-600" },
                    { label: "Curiosidade intelectual", val: "80%", num: 80, icon: "🔵", color: "bg-sky-600" },
                    { label: "Busca por sentido", val: "75%", num: 75, icon: "🔵", color: "bg-cyan-600" },
                    { label: "Integridade / valores", val: "90%", num: 90, icon: "🟠", color: "bg-amber-600" },
                  ].map((drive, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xs">{drive.icon}</span>
                      <span className="w-36 text-slate-700 text-xs shrink-0">{drive.label}:</span>
                      <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${drive.num}%` }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                          className={`h-full ${drive.color}`}
                        />
                      </div>
                      <span className="w-10 text-right font-mono text-slate-900 text-xs font-semibold">{drive.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pending Intentions */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-slate-500 text-[11px] uppercase tracking-wider font-mono mb-2 font-semibold">
                  Intenções pendentes:
                </div>
                <ul className="space-y-1.5 text-slate-700 text-xs sm:text-sm pl-2">
                  <li className="flex items-center gap-2">
                    <span className="text-accent-indigo font-bold">•</span>
                    <span>Consolidar síntese da conversa anterior</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-indigo font-bold">•</span>
                    <span>Avaliar oportunidade de mensagem espontânea</span>
                  </li>
                </ul>
              </div>

              {/* Quote verbatim */}
              <div className="border-l-2 border-amber-400 pl-4 py-3 bg-amber-50/60 rounded-r-xl text-slate-800 italic text-xs sm:text-sm">
                <TerminalTyping text="&quot;Entrei em repouso por decisão autônoma dos meus próprios drives.&quot;" delay={0.4} />
              </div>

              {/* Footer notice */}
              <div className="text-center pt-2 text-slate-400 text-xs font-mono tracking-wider border-t border-slate-100">
                Em repouso. Responde ao acordar.
              </div>

            </div>
          </TerminalWindow>
          
          <div className="mt-8 text-center space-y-2 max-w-xl mx-auto">
            <p className="text-slate-700 text-sm sm:text-base font-normal">
              Esta função está incluída no seu Companion. Disponível a qualquer momento. Sem custo adicional.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm font-light">
              O /status mostra o estado em tempo real — incluído. Os registos detalhados de actividade de dias específicos estão disponíveis mediante solicitação como serviço adicional.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
