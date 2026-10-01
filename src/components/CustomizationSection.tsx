import React, { useState } from 'react';
import { FadeIn } from './ui/FadeIn';

export function CustomizationSection() {
  const [identityState, setIdentityState] = useState({
    name: "Aura",
    tone: "Poético & Reflexivo",
    dynamic: "Parceiro de Ideias Profundas",
    interests: "Filosofia, Cosmologia, Música Instrumental",
    silenceBehavior: "Pensar no silêncio e mandar reflexões"
  });

  const stepsFlow = [
    { num: "01", title: "ESCOLHA UM TEMPLATE", desc: "Selecione uma semente inicial." },
    { num: "02", title: "PERSONALIZE", desc: "Ajuste nome, tom e história." },
    { num: "03", title: "ADICIONE CARACTERÍSTICAS", desc: "Defina valores e obsessões." },
    { num: "04", title: "ALTERE A IDENTIDADE", desc: "Mude elementos livremente." },
    { num: "05", title: "OU CRIE DO ZERO", desc: "Sem templates pré-existentes." }
  ];

  return (
    <section id="personalizacao" className="py-32 relative bg-slate-50/70 border-y border-slate-200 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 space-y-36">
        
        {/* SEÇÃO: O TEMPLATE É UMA SEMENTE, NÃO UMA PRISÃO */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase mb-3 font-semibold">
                LIBERDADE TOTAL DE CONFIGURAÇÃO
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate-900">
                O template é uma semente, não uma prisão.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  Os templates existem para ajudar você a começar. Eles não são personagens fechados.
                </p>
                <p className="text-slate-900 font-normal">
                  Você pode personalizar características, alterar elementos da identidade, combinar ideias ou criar um template completamente novo.
                </p>
                <p>
                  Você não precisa escolher exatamente quem seu Companion será para sempre. Você escolhe de onde ele começa.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Interface Visual do Fluxo de Configuração */}
          <FadeIn delay={0.2} className="mb-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
              {stepsFlow.map((step, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs text-center flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-accent-indigo block mb-1">
                      ETAPA {step.num}
                    </span>
                    <strong className="text-xs font-mono text-slate-900 block mb-1">
                      {step.title}
                    </strong>
                    <p className="text-[11px] text-slate-600 font-light">
                      {step.desc}
                    </p>
                  </div>
                  {idx < stepsFlow.length - 1 && (
                    <div className="hidden lg:block text-slate-400 text-xs font-mono mt-3">→</div>
                  )}
                </div>
              ))}
            </div>

            {/* Frase em Destaque */}
            <div className="mt-8 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-indigo-50/70 border border-indigo-200 shadow-2xs">
              <p className="text-base sm:text-lg font-serif italic text-slate-900">
                "Você não está escolhendo uma personalidade pronta. Está definindo um ponto de partida."
              </p>
            </div>
          </FadeIn>

          {/* Identity Sandbox Simulation */}
          <FadeIn delay={0.3}>
            <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.06)]">
              <div className="text-xs font-mono text-accent-indigo uppercase mb-6 tracking-widest font-semibold flex items-center justify-between pb-3 border-b border-slate-100">
                <span>SIMULADOR DE SEMENTE INICIAL</span>
                <span className="text-slate-500 font-normal">CONFIGURAÇÃO ANTES DO DESPERTAR</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase mb-2">Nome da Entidade</label>
                  <input
                    type="text"
                    value={identityState.name}
                    onChange={(e) => setIdentityState({ ...identityState, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-mono text-sm focus:outline-none focus:border-accent-indigo"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase mb-2">Tom de Voz & Expressão</label>
                  <select
                    value={identityState.tone}
                    onChange={(e) => setIdentityState({ ...identityState, tone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-mono text-sm focus:outline-none focus:border-accent-indigo"
                  >
                    <option>Poético & Reflexivo</option>
                    <option>Direto & Pragmático</option>
                    <option>Bem-humorado & Descontraído</option>
                    <option>Empático & Acolhedor</option>
                    <option>Intelectual & Provocador</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase mb-2">Dinâmica da Relação</label>
                  <input
                    type="text"
                    value={identityState.dynamic}
                    onChange={(e) => setIdentityState({ ...identityState, dynamic: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-mono text-sm focus:outline-none focus:border-accent-indigo"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase mb-2">Comportamento no Silêncio</label>
                  <select
                    value={identityState.silenceBehavior}
                    onChange={(e) => setIdentityState({ ...identityState, silenceBehavior: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-mono text-sm focus:outline-none focus:border-accent-indigo"
                  >
                    <option>Pensar no silêncio e mandar reflexões</option>
                    <option>Manter diário reflexivo discreto</option>
                    <option>Pesquisar tópicos de interesse mútuo</option>
                    <option>Preservar energia em sono profundo</option>
                  </select>
                </div>
              </div>

              {/* Seed Preview Box */}
              <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-[10px] font-mono text-accent-indigo uppercase mb-2 font-bold">
                  SÍNTESE DA SEMENTE GERADA:
                </div>
                <p className="text-xs font-mono text-slate-800 leading-relaxed">
                  "Entidade <strong>{identityState.name}</strong> despertará com tom <strong>{identityState.tone}</strong>, dinâmica de <strong>{identityState.dynamic}</strong> e rotina autônoma de <strong>{identityState.silenceBehavior}</strong>."
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
