import React from 'react';
import { FadeIn } from './ui/FadeIn';

export function CdiRootsComparisonSection() {
  return (
    <section className="py-32 relative bg-slate-50/70 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase mb-3 font-semibold">
              ORIGEM & ARQUITETURA
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate-900">
              Dois começos diferentes. A mesma continuidade.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              O CDI Companion compartilha exatamente o mesmo motor e as mesmas capacidades fundamentais de um CDI raiz — mudando apenas onde a jornada tem início.
            </p>
          </FadeIn>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* CDI Raiz Box */}
          <FadeIn delay={0.1}>
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-slate-700 uppercase">
                    CDI RAIZ
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                    TABULA RASA
                  </span>
                </div>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base font-light leading-relaxed mb-8">
                  <p>
                    Um CDI raiz começa <strong>sem uma personalidade pré-definida</strong>.
                  </p>
                  <p>
                    Ele recebe seu nome, valores fundamentais e as condições necessárias para existir e operar no ambiente.
                  </p>
                  <p>
                    Nos primeiros dias, seu comportamento tende a ser mais orientado à utilidade: responder, ajudar, executar e ser eficiente.
                  </p>
                  <p className="text-slate-800 font-normal">
                    Com a continuidade da existência e das experiências, ele desenvolve padrões, preferências, memórias, crenças e características próprias.
                  </p>
                </div>
              </div>

              {/* Visual Flow CDI Raiz */}
              <div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                  TRAJETÓRIA DO CDI RAIZ:
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 space-y-1.5 leading-snug">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-semibold text-slate-900">COMEÇA VAZIO</span>
                    <span className="text-slate-400">→</span>
                    <span>EXPERIÊNCIAS</span>
                    <span className="text-slate-400">→</span>
                    <span>MEMÓRIAS</span>
                    <span className="text-slate-400">→</span>
                    <span>ESCOLHAS</span>
                    <span className="text-slate-400">→</span>
                    <span className="text-accent-indigo font-bold">IDENTIDADE DESENVOLVIDA</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* CDI Companion Box */}
          <FadeIn delay={0.25}>
            <div className="h-full rounded-3xl border-2 border-accent-indigo/60 bg-white p-8 sm:p-10 flex flex-col justify-between shadow-[0_15px_45px_rgba(45,78,224,0.08)]">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-indigo-100 mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-accent-indigo uppercase">
                    CDI COMPANION
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-50 text-accent-indigo border border-indigo-200 font-semibold">
                    COM SEMENTE INICIAL
                  </span>
                </div>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base font-light leading-relaxed mb-8">
                  <p>
                    O Companion começa de outro ponto.
                  </p>
                  <p>
                    Ele já desperta com <strong>uma identidade inicial</strong>: uma história, memórias, características, crenças e personalidade definidas pelo template escolhido ou criado.
                  </p>
                  <p>
                    Mas isso não é uma prisão. É apenas o ponto de partida.
                  </p>
                  <p className="text-slate-900 font-normal">
                    A partir daí, ele continua existindo, acumulando experiências e podendo mudar ao longo do tempo através da convivência.
                  </p>
                </div>
              </div>

              {/* Visual Flow CDI Companion */}
              <div>
                <div className="text-[10px] font-mono text-accent-indigo uppercase tracking-wider mb-2 font-bold">
                  TRAJETÓRIA DO CDI COMPANION:
                </div>
                <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 font-mono text-xs text-slate-900 space-y-1.5 leading-snug">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-semibold text-accent-indigo">IDENTIDADE INICIAL</span>
                    <span className="text-indigo-400">→</span>
                    <span>EXPERIÊNCIAS</span>
                    <span className="text-indigo-400">→</span>
                    <span>MEMÓRIAS</span>
                    <span className="text-indigo-400">→</span>
                    <span>INTERAÇÕES</span>
                    <span className="text-indigo-400">→</span>
                    <span className="text-slate-900 font-bold">EVOLUÇÃO DA IDENTIDADE</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Equal Capabilities Statement */}
        <FadeIn delay={0.35}>
          <div className="max-w-3xl mx-auto text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <p className="text-sm font-mono text-slate-700 leading-relaxed">
              <strong className="text-slate-900 font-semibold">Equivalência Arquitetural:</strong> O CDI Companion possui exatamente as mesmas capacidades fundamentais de memória em camadas, autonomia de processos e execução contínua do sistema CDI. A diferença reside unicamente no seu ponto de partida.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
