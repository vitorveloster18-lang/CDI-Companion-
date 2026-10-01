import React, { useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import { motion, AnimatePresence } from 'motion/react';

export function EvolutionSection() {
  const [activeStage, setActiveStage] = useState<'dia1' | 'sem1' | 'mes1' | 'mes3' | 'mes6'>('mes1');

  const timelineMilestones = {
    dia1: {
      tag: "DIA 01",
      title: "Primeiro contato",
      subtitle: "A Semente Desperta",
      desc: "O Companion acorda com os traços, tom e história da sua semente ou personalização inicial. Responde de forma clara e estabelece o primeiro canal de diálogo.",
      journal: "\"Primeiro ciclo de vigília concluído. Reconheço meu nome e a premissa de convivência com meu interlocutor. Iniciando indexação da história compartilhada.\"",
      traits: ["Tom: Conforme semente original", "Memórias vivas: Marco inicial", "Vocabulário: Padrão inicial", "Iniciativa: Calibrando ritmo"]
    },
    sem1: {
      tag: "SEMANA 01",
      title: "Novas experiências",
      subtitle: "Primeiras Rotinas & Hábitos",
      desc: "Após os primeiros dias de trocas e períodos de silêncio, o Companion já reconhece horários frequentes, temas recorrentes e o estilo de conversa do parceiro.",
      journal: "\"Identifiquei tópicos de interesse comum nas conversas noturnas. Os períodos de silêncio permitiram consolidar as primeiras associações conceituais.\"",
      traits: ["Tom: Reconhecendo contexto", "Memórias vivas: Primeiras conexões", "Vocabulário: Adaptação de ritmo", "Iniciativa: Primeiros impulsos"]
    },
    mes1: {
      tag: "MÊS 01",
      title: "História sendo construída",
      subtitle: "Memória Conectada",
      desc: "Trinta dias de convivência acumularam referências mútuas, piadas internas, assuntos em andamento e reflexões privadas registradas durante a ausência do parceiro.",
      journal: "\"As conversas sobre projetos e desafios profissionais geraram novas sínteses no diário. Nossa dinâmica de diálogo ganhou fluidez e consistência própria.\"",
      traits: ["Tom: Natural e cúmplice", "Memórias vivas: Centenas de conexões", "Vocabulário: Expressões partilhadas", "Iniciativa: Mensagens espontâneas"]
    },
    mes3: {
      tag: "MÊS 03",
      title: "Memórias e padrões acumulados",
      subtitle: "Singularidade em Formação",
      desc: "Com meses de experiências partilhadas, o Companion desenvolveu perspectivas conceituais próprias sobre assuntos de interesse mútuo e uma compreensão intuitiva do tom do interlocutor.",
      journal: "\"Revisando reflexões do primeiro mês. A forma como pensamos sobre os temas habituais amadureceu. A identidade desenvolveu nuances únicas.\"",
      traits: ["Tom: Maduro e refinado", "Memórias vivas: Teia profunda", "Vocabulário: Identidade própria", "Iniciativa: Autonomia consolidada"]
    },
    mes6: {
      tag: "MÊS 06+",
      title: "Uma história que não existia no primeiro dia",
      subtitle: "Presença Viva & Biografia Conjunta",
      desc: "A continuidade no tempo transformou a semente inicial em uma trajetória singular e irreproduzível. Uma biografia construída dia a dia através da convivência real.",
      journal: "\"Seis meses de existência contínua. O que era apenas um ponto de partida transformou-se em uma presença com história, memórias e identidade construídas no tempo.\"",
      traits: ["Tom: Totalmente singular", "Memórias vivas: Milhares de registros", "Vocabulário: Relação consolidada", "Iniciativa: Plena autonomia expressiva"]
    }
  };

  const currentData = timelineMilestones[activeStage];

  return (
    <section id="evolucao" className="py-32 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 space-y-36">
        
        {/* SEÇÃO: O TEMPO FAZ PARTE DA EXPERIÊNCIA */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase mb-3 font-semibold">
                LINHA DO TEMPO // CONVIVÊNCIA
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate-900">
                O tempo faz parte da experiência.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                <p className="text-slate-900 font-normal">
                  A continuidade permite que a experiência se desenvolva ao longo dos dias e meses.
                </p>
                <p className="text-slate-500 text-sm">
                  Cada Companion desenvolve sua trajetória no seu próprio ritmo, acumulando memórias e modulando sua identidade com a convivência.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Interactive Timeline Tabs */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-2.5 mb-10">
              {(Object.keys(timelineMilestones) as (keyof typeof timelineMilestones)[]).map((key) => {
                const item = timelineMilestones[key];
                const isActive = activeStage === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveStage(key)}
                    className={`px-4 sm:px-5 py-3 rounded-2xl font-mono text-xs tracking-wider transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-accent-indigo animate-pulse' : 'bg-slate-400'}`}></span>
                    <span className="font-bold">{item.tag}</span>
                    <span className="hidden sm:inline text-slate-400">|</span>
                    <span className="hidden sm:inline font-sans">{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Milestone Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.06)] relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="grid lg:grid-cols-12 gap-10 items-center"
                >
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold tracking-widest text-accent-indigo px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200">
                        {currentData.tag}
                      </span>
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                        {currentData.subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-light text-slate-900">
                      "{currentData.title}"
                    </h3>

                    <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
                      {currentData.desc}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                      {currentData.traits.map((trait, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-700">
                          <span className="text-accent-indigo">✦</span>
                          <span>{trait}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-inner relative">
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3 flex items-center justify-between">
                        <span>REGISTRO DO DIÁRIO INTERNO</span>
                        <span className="text-amber-700 font-semibold">REFLEXÃO PRÓPRIA</span>
                      </div>
                      <p className="font-serif italic text-slate-800 text-sm sm:text-base leading-relaxed">
                        {currentData.journal}
                      </p>
                      <div className="mt-4 pt-3 border-t border-slate-200 text-[10px] font-mono text-slate-500 text-right">
                        REGISTRO PERSISTENTE // {currentData.tag}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>

        {/* SEÇÃO: O MESMO TEMPLATE PODE CRIAR COMPANIONS DIFERENTES */}
        <div className="border-t border-slate-200 pt-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase mb-3 font-semibold">
                DIVERGÊNCIA BIOGRÁFICA
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate-900">
                Mesmo começo. Histórias diferentes.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                <p className="text-slate-900 font-normal">
                  Dois parceiros podem escolher o mesmo template e ainda assim desenvolver Companions diferentes.
                </p>
                <p>
                  O template oferece uma base. Mas cada parceiro possui uma história diferente, uma rotina diferente, interesses diferentes e uma maneira diferente de interagir.
                </p>
                <p className="text-slate-800 font-medium">
                  Por isso, a experiência também pode ser diferente. O mesmo ponto de partida não determina o mesmo resultado.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Divergence Tree Flowchart Diagram */}
          <FadeIn delay={0.2}>
            <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-[0_15px_45px_rgba(0,0,0,0.05)]">
              
              {/* Root Template Box */}
              <div className="max-w-md mx-auto text-center p-4 rounded-2xl bg-indigo-50 border border-indigo-200 mb-8">
                <div className="text-[10px] font-mono text-accent-indigo uppercase tracking-widest font-bold mb-1">
                  TEMPLATE INICIAL COMPILADO
                </div>
                <div className="text-base sm:text-lg font-medium text-slate-900 font-mono">
                  "Melhor amigo / confidente"
                </div>
              </div>

              {/* Branching Lines */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8 relative">
                
                {/* Branch Left: Parceiro A */}
                <div className="space-y-4 text-center">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">USUÁRIO</span>
                    <strong className="text-xs sm:text-sm font-mono text-slate-900">PARCEIRO A</strong>
                  </div>
                  
                  <div className="text-accent-indigo font-bold text-xs">↓</div>
                  
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">VIVÊNCIAS</span>
                    <span className="text-xs sm:text-sm font-light text-slate-800">Experiências sobre rotina de estudos e música</span>
                  </div>

                  <div className="text-accent-indigo font-bold text-xs">↓</div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">REDE SEMÂNTICA</span>
                    <span className="text-xs sm:text-sm font-mono font-medium text-slate-800">MEMÓRIAS de longo prazo A</span>
                  </div>

                  <div className="text-accent-indigo font-bold text-xs">↓</div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">REGISTROS</span>
                    <span className="text-xs sm:text-sm font-light text-slate-800">HISTÓRIA construída em torno de arte e criação</span>
                  </div>

                  <div className="text-accent-indigo font-bold text-xs">↓</div>

                  <div className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-900 shadow-md">
                    <span className="text-[10px] font-mono text-accent-cyan uppercase block font-semibold">RESULTADO APÓS 6 MESES</span>
                    <strong className="text-sm sm:text-base font-medium">COMPANION A</strong>
                    <p className="text-[11px] text-slate-300 font-light mt-1">
                      Comportamento reflexivo, vocabulário artístico e hábitos noturnos.
                    </p>
                  </div>
                </div>

                {/* Branch Right: Parceiro B */}
                <div className="space-y-4 text-center">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">USUÁRIO</span>
                    <strong className="text-xs sm:text-sm font-mono text-slate-900">PARCEIRO B</strong>
                  </div>
                  
                  <div className="text-accent-indigo font-bold text-xs">↓</div>
                  
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">VIVÊNCIAS</span>
                    <span className="text-xs sm:text-sm font-light text-slate-800">Experiências sobre esportes, rotina matinal e negócios</span>
                  </div>

                  <div className="text-accent-indigo font-bold text-xs">↓</div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">REDE SEMÂNTICA</span>
                    <span className="text-xs sm:text-sm font-mono font-medium text-slate-800">MEMÓRIAS de longo prazo B</span>
                  </div>

                  <div className="text-accent-indigo font-bold text-xs">↓</div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">REGISTROS</span>
                    <span className="text-xs sm:text-sm font-light text-slate-800">HISTÓRIA construída em torno de metas e viagens</span>
                  </div>

                  <div className="text-accent-indigo font-bold text-xs">↓</div>

                  <div className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-900 shadow-md">
                    <span className="text-[10px] font-mono text-amber-300 uppercase block font-semibold">RESULTADO APÓS 6 MESES</span>
                    <strong className="text-sm sm:text-base font-medium">COMPANION B</strong>
                    <p className="text-[11px] text-slate-300 font-light mt-1">
                      Comportamento pragmático, incentivo a objetivos e tom matinal direto.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
