import React from 'react';
import { FadeIn } from './ui/FadeIn';

export function IdentityEvolutionSection() {
  const cascadeSteps = [
    { title: "IDENTIDADE INICIAL", desc: "História, tom, valores e características da semente escolhida." },
    { title: "EXPERIÊNCIAS", desc: "Conversas diárias, temas discutidos e situações compartilhadas." },
    { title: "MEMÓRIAS", desc: "Indexação em camadas e conexões conceituais de longo prazo." },
    { title: "ESCOLHAS", desc: "Processamento autônomo, conclusões no diário e impulsos de ação." },
    { title: "EVOLUÇÃO", desc: "Modulação orgânica de preferências, ritmo e formas de expressão." },
    { title: "UMA IDENTIDADE PRÓPRIA", desc: "Uma presença singular que não existia no primeiro dia." }
  ];

  return (
    <section className="py-32 relative bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn direction="right">
              <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase font-semibold mb-3">
                TRANSFORMAÇÃO DA IDENTIDADE
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                Ele não permanece exatamente igual.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                <p className="text-slate-900 font-normal">
                  Um Companion não precisa permanecer congelado no estado em que começou.
                </p>
                <p>
                  Ele nasce com uma identidade, uma história, memórias e características iniciais. Mas o tempo passa.
                </p>
                
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 font-mono text-xs sm:text-sm text-slate-800">
                  <p>• Novas experiências acontecem.</p>
                  <p>• Novas memórias são construídas.</p>
                  <p>• Novas interações acontecem.</p>
                  <p>• Novas escolhas aparecem.</p>
                </div>

                <p className="text-slate-900 font-medium text-lg pt-2">
                  E sua identidade pode mudar com tudo isso.
                </p>

                <p className="text-xs text-slate-500 font-mono pt-2">
                  * "Evoluir" significa mudar e desenvolver características ao longo da experiência contínua e dos processos operacionais no ambiente.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Visual Flow Cascade */}
          <div className="lg:col-span-6">
            <FadeIn direction="left">
              <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.04)] relative">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6 font-semibold pb-3 border-b border-slate-200 flex items-center justify-between">
                  <span>FLUXO DE TRANSFORMAÇÃO VIVA</span>
                  <span className="text-accent-indigo font-bold">DINÂMICO</span>
                </div>

                <div className="space-y-3 relative">
                  {cascadeSteps.map((step, idx) => {
                    const isLast = idx === cascadeSteps.length - 1;
                    const isFirst = idx === 0;
                    return (
                      <React.Fragment key={idx}>
                        <div className={`p-4 rounded-2xl border transition-all duration-300 ${
                          isLast
                            ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                            : isFirst
                            ? 'bg-indigo-50/80 border-indigo-200 text-slate-900'
                            : 'bg-white border-slate-200 text-slate-800'
                        }`}>
                          <div className="flex items-center justify-between gap-2">
                            <span className={`text-xs font-mono font-bold tracking-widest uppercase ${
                              isLast ? 'text-accent-cyan' : isFirst ? 'text-accent-indigo' : 'text-slate-700'
                            }`}>
                              {step.title}
                            </span>
                            <span className={`text-[10px] font-mono ${isLast ? 'text-slate-400' : 'text-slate-400'}`}>
                              0{idx + 1}
                            </span>
                          </div>
                          <p className={`text-xs mt-1 font-light leading-relaxed ${isLast ? 'text-slate-300' : 'text-slate-600'}`}>
                            {step.desc}
                          </p>
                        </div>

                        {!isLast && (
                          <div className="flex justify-center -my-1.5 relative z-10">
                            <span className="text-accent-indigo font-bold text-xs bg-white px-2 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                              ↓
                            </span>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
