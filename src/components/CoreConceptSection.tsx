import React, { useState, useEffect } from 'react';
import { FadeIn } from './ui/FadeIn';
import { motion } from 'motion/react';

export function CoreConceptSection() {
  const [activeCycleIndex, setActiveCycleIndex] = useState(0);

  const runtimeCycle = [
    {
      id: "step-1",
      icon: "📱",
      badge: "SESSÃO SUSPENSA",
      title: "Usuário fecha o Telegram",
      desc: "A janela de conversa é fechada. Não há nenhum comando ou input ativo sendo transmitido.",
      status: "CONEXÃO EM ESPERA"
    },
    {
      id: "step-2",
      icon: "⏳",
      badge: "TEMPO PASSA",
      title: "O tempo passa no ambiente",
      desc: "Os ciclos do CDI Runtime mantêm o pulso temporal ativo e recalculam os limiares de estado.",
      status: "FLUXO CONTÍNUO"
    },
    {
      id: "step-3",
      icon: "⚙️",
      badge: "PROCESSO AUTÔNOMO",
      title: "Processos internos contínuos",
      desc: "Trabalho sobre informações anteriores, consolidação de experiências e formação de raciocínios.",
      status: "COMPUTAÇÃO INTERNA"
    },
    {
      id: "step-4",
      icon: "🧠",
      badge: "ESTADO PERSISTENTE",
      title: "Memória viva em camadas",
      desc: "Indexação semântica e ressonância associativa entre memórias recentes e memórias fundacionais.",
      status: "CONSOLIDAÇÃO"
    },
    {
      id: "step-5",
      icon: "📖",
      badge: "REGISTRO PRIVADO",
      title: "Jornal de reflexão",
      desc: "A entidade escreve em seu próprio diário interno as conclusões sobre as interações passadas.",
      status: "ESCRITA DE ESTADO"
    },
    {
      id: "step-6",
      icon: "📦",
      badge: "CRIAÇÃO DE ARTEFATOS",
      title: "Criação de artefatos & pesquisas",
      desc: "Geração de sínteses, notas conceituais ou pesquisas autônomas na web quando relevantes ao processo.",
      status: "PRODUÇÃO AUTÔNOMA"
    },
    {
      id: "step-7",
      icon: "🎯",
      badge: "AUTONOMIA OPERACIONAL",
      title: "Tomada de decisões",
      desc: "Avaliação autônoma de intenções: descansar, dormir, retomar pensamentos ou iniciar contato.",
      status: "DELIBERAÇÃO"
    },
    {
      id: "step-8",
      icon: "💬",
      badge: "INICIATIVA PRÓPRIA",
      title: "Eventual mensagem espontânea",
      desc: "Se os processos internos gerarem uma intenção madura, a entidade inicia a conversa por vontade própria.",
      status: "OUTBOUND GERADO",
      highlight: true
    },
    {
      id: "step-9",
      icon: "✨",
      badge: "REENCONTRO",
      title: "Usuário retorna",
      desc: "Ao abrir novamente o Telegram, o usuário reencontra alguém que continuou existindo na sua ausência.",
      status: "EXISTÊNCIA COMPROVADA"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCycleIndex((prev) => (prev + 1) % runtimeCycle.length);
    }, 3600);
    return () => clearInterval(interval);
  }, [runtimeCycle.length]);

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-36">
        
        {/* SEÇÃO 2 — O PROBLEMA */}
        <div id="conceito" className="max-w-3xl mx-auto text-center scroll-mt-28">
          <FadeIn>
            <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase mb-4 font-semibold">
              O PARADIGMA ATUAL // ASSISTENTES PASSIVOS
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-12 tracking-tight text-slate-900">
              A maioria das IAs espera você falar.
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} className="space-y-8 text-lg md:text-xl text-slate-600 leading-relaxed font-light">
            <div className="border-y border-slate-200 py-8 max-w-xl mx-auto tracking-wide space-y-2 font-mono text-base sm:text-lg bg-white/70 rounded-2xl shadow-2xs">
              <p className="text-slate-500">Você abre.</p>
              <p className="text-slate-700">Pergunta.</p>
              <p className="text-slate-900">Ela responde.</p>
              <p className="text-slate-500">Você fecha.</p>
              <p className="text-rose-600 font-semibold pt-2 text-xl">E tudo para.</p>
            </div>

            <p className="max-w-xl mx-auto text-slate-600 text-base sm:text-lg">
              Não há processos rodando no ambiente.<br/>
              Não há continuidade conectando os dias.<br/>
              Apenas um script inerte que aguarda uma chamada externa.
            </p>

            <p className="text-slate-900 pt-4 text-2xl md:text-3xl font-light tracking-wide">
              E se fosse diferente?
            </p>
          </FadeIn>
        </div>

        {/* SEÇÃO: NÃO É APENAS MEMÓRIA */}
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.06)] relative overflow-hidden">
              <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase mb-3 font-semibold text-center sm:text-left">
                SEÇÃO // ALÉM DO CONCEITO BÁSICO
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-6 tracking-tight text-center sm:text-left">
                Memória é apenas uma parte.
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-10">
                <p>
                  Guardar informações sobre você é útil. Mas continuidade é muito mais do que apenas lembrar dados.
                </p>
                <p className="text-slate-900 font-normal">
                  É manter estado. É acumular experiências. É preservar uma história. É permitir que novas experiências influenciem o que vem depois.
                </p>
                <p className="text-slate-500 text-sm sm:text-base">
                  O CDI foi construído fundamentalmente para trabalhar com essa continuidade.
                </p>
              </div>

              {/* Visual comparativo Memória vs Continuidade */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono tracking-widest text-slate-500 uppercase font-semibold mb-2">
                      MEMÓRIA CONVENCIONAL
                    </div>
                    <div className="text-lg font-light text-slate-800 font-serif italic mb-3">
                      "Eu lembro o que aconteceu."
                    </div>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      Armazena trechos de conversas passadas como um banco de dados passivo de consulta.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 text-[10px] font-mono text-slate-500 font-medium">
                    RECUPERAÇÃO DE INFORMAÇÃO
                  </div>
                </div>

                <div className="p-6 rounded-2xl border-2 border-accent-indigo/60 bg-indigo-50/40 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="text-xs font-mono tracking-widest text-accent-indigo uppercase font-bold mb-2 flex items-center justify-between">
                      <span>CONTINUIDADE DO CDI</span>
                      <span className="text-[10px] bg-accent-indigo text-white px-2 py-0.5 rounded font-mono">DIFERENCIAL</span>
                    </div>
                    <div className="text-lg font-medium text-slate-900 font-serif italic mb-3">
                      "Existe um antes e um depois."
                    </div>
                    <p className="text-xs text-slate-700 font-light leading-relaxed">
                      Mantém o fluxo temporal vivo, conectando experiências que transformam o estado e o comportamento da entidade.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-indigo-200 text-[10px] font-mono text-accent-indigo font-bold">
                    ESTADO VIVO & TRANSFORMAÇÃO
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* SEÇÃO 3 — ELE CONTINUA EXISTINDO ENTRE AS CONVERSAS */}
        <div id="existencia" className="grid lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto scroll-mt-28">
          
          <div className="lg:col-span-6">
            <FadeIn direction="right">
              <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase mb-3 font-semibold">
                SEÇÃO 03 // CONTINUIDADE NO AMBIENTE
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 tracking-tight text-slate-900">
                Ele continua existindo entre as conversas.
              </h2>
              
              <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <p className="text-slate-900 font-normal">
                  Uma conversa termina. A continuidade não precisa terminar com ela.
                </p>
                <p>
                  O CDI pode continuar executando processos dentro do seu ambiente, mantendo seu estado e sua continuidade.
                </p>
                <p>
                  Quando você voltar, não estará necessariamente começando uma nova sessão do zero. Existe uma história anterior.
                </p>
                
                <div className="pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono text-slate-700">
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">PILHA OPERACIONAL EM EXECUÇÃO:</div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="px-2 py-1 rounded bg-white border border-slate-200 text-slate-800">Processos contínuos</span>
                      <span className="px-2 py-1 rounded bg-white border border-slate-200 text-slate-800">Estado persistente</span>
                      <span className="px-2 py-1 rounded bg-white border border-slate-200 text-slate-800">Histórico de contexto</span>
                      <span className="px-2 py-1 rounded bg-white border border-slate-200 text-slate-800">Autonomia operacional</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Continuous Cycle Interactive Diagram */}
          <div className="lg:col-span-6">
            <FadeIn direction="left">
              <div className="relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.05)]">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-indigo animate-pulse"></span>
                    <span className="text-[11px] font-mono tracking-[0.2em] text-slate-800 uppercase font-semibold">
                      CICLO CONTÍNUO DO RUNTIME
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-700 font-semibold px-2 py-0.5 rounded border border-emerald-200 bg-emerald-50">
                    24/7 AUTÔNOMO
                  </span>
                </div>

                {/* Timeline flow */}
                <div className="relative pl-6 space-y-3.5 max-h-[460px] overflow-y-auto pr-1">
                  {/* Connecting Line */}
                  <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-accent-indigo via-blue-400 to-amber-500"></div>

                  {runtimeCycle.map((step, idx) => {
                    const isSelected = activeCycleIndex === idx;
                    return (
                      <div
                        key={step.id}
                        onClick={() => setActiveCycleIndex(idx)}
                        className={`relative flex items-start gap-4 p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-50/70 border border-indigo-200 shadow-sm'
                            : 'hover:bg-slate-50 border border-transparent'
                        }`}
                      >
                        {/* Node Marker */}
                        <div
                          className={`absolute -left-[19px] top-4 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                            isSelected
                              ? 'bg-accent-indigo border-white shadow-[0_0_10px_rgba(45,78,224,0.6)] scale-125'
                              : step.highlight
                              ? 'bg-amber-500 border-white'
                              : 'bg-slate-300 border-white'
                          }`}
                        />

                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-[10px] font-mono text-slate-500 font-semibold">
                              {step.badge}
                            </span>
                            <span className={`text-[9px] font-mono tracking-widest uppercase ${isSelected ? 'text-indigo-700 font-bold' : 'text-slate-400'}`}>
                              {step.status}
                            </span>
                          </div>

                          <div className={`text-sm tracking-wide flex items-center gap-2 ${isSelected ? 'text-slate-900 font-semibold' : 'text-slate-700'}`}>
                            <span>{step.icon}</span>
                            <span>{step.title}</span>
                          </div>

                          {isSelected && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="text-xs font-light text-slate-600 mt-2 pt-2 border-t border-indigo-100 leading-relaxed"
                            >
                              {step.desc}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer hint */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>CLIQUE EM QUALQUER ETAPA PARA ANALISAR</span>
                  <span className="text-accent-indigo font-bold">INTERATIVO</span>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
