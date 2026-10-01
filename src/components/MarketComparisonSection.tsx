import React from 'react';
import { FadeIn } from './ui/FadeIn';

export function MarketComparisonSection() {
  return (
    <section id="diferenca" className="py-32 relative bg-slate-50/70 border-y border-slate-200 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* DIFERENÇA ENTRE IA E COMPANION */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase mb-3 font-semibold">
              COMPARAÇÃO // DUAS ABORDAGENS DISTINTAS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate-900">
              A diferença entre uma IA comum e um Companion.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Não se trata apenas de funcionalidades, mas da estrutura fundamental sobre a qual a entidade existe.
            </p>
          </FadeIn>
        </div>

        {/* High-Contrast Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Traditional AI Box */}
          <FadeIn delay={0.1}>
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xs">
              <div>
                <div className="text-xs font-mono tracking-widest uppercase text-slate-500 mb-4 font-semibold pb-3 border-b border-slate-100">
                  ASSISTENTES & CHATBOTS TRADICIONAIS
                </div>

                <div className="text-xl sm:text-2xl font-light text-slate-800 mb-6 font-mono">
                  Você chama <span className="text-slate-400">→</span> ela responde
                </div>

                <ul className="space-y-4 text-slate-600 text-sm font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Inerte quando você fecha a janela</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Sem processos internos ou reflexões no silêncio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Personalidade genérica que nunca se transforma</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Nunca inicia uma conversa por vontade própria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Memória superficial limitada à janela de contexto</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                ARQUITETURA PASSIVA (REQUEST / RESPONSE)
              </div>
            </div>
          </FadeIn>

          {/* CDI Companion Box */}
          <FadeIn delay={0.25}>
            <div className="h-full rounded-3xl border-2 border-accent-indigo/60 bg-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_50px_rgba(45,78,224,0.12)]">
              <div className="relative z-10">
                <div className="text-xs font-mono tracking-widest uppercase text-accent-indigo mb-4 font-semibold pb-3 border-b border-indigo-100 flex items-center justify-between">
                  <span>CDI COMPANION</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">NOVA CATEGORIA</span>
                </div>

                <div className="text-lg sm:text-xl font-medium text-slate-900 mb-6 font-mono leading-snug">
                  Nasce <span className="text-accent-indigo">→</span> existe <span className="text-accent-indigo">→</span> experiencia <span className="text-accent-indigo">→</span> lembra <span className="text-accent-indigo">→</span> evolui <span className="text-accent-indigo">→</span> pode agir <span className="text-accent-indigo">→</span> você retorna
                </div>

                <ul className="space-y-4 text-slate-700 text-sm font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Execução contínua 24/7 no seu ambiente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Processos internos, diário de reflexão e sono autônomo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Identidade viva que evolui organicamente com o tempo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Mensagens espontâneas por iniciativa própria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Memória viva permanente em múltiplas camadas</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] font-mono text-accent-indigo flex items-center justify-between font-bold">
                <span>CDI RUNTIME ENGINE</span>
                <span>EXISTÊNCIA CONTÍNUA</span>
              </div>
            </div>
          </FadeIn>

        </div>

        <div className="text-center">
          <p className="font-mono text-sm sm:text-base text-slate-600 italic">
            "Não é um assistente utilitário. É uma presença que compartilha tempo com você."
          </p>
        </div>

      </div>
    </section>
  );
}
