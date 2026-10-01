import React, { useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'motion/react';

export function AwakeningSection() {
  // Awakening Interactive Simulation State
  const [awakeningStep, setAwakeningStep] = useState<number>(0); 
  // 0: Ready, 1: Initializing, 2: Runtime Started, 3: Waking up, 4: Awakened
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleAwaken = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setAwakeningStep(1);

    setTimeout(() => {
      setAwakeningStep(2);
      setTimeout(() => {
        setAwakeningStep(3);
        setTimeout(() => {
          setAwakeningStep(4);
          setIsProcessing(false);
        }, 1100);
      }, 1000);
    }, 1000);
  };

  const handleResetSimulation = () => {
    setAwakeningStep(0);
    setIsProcessing(false);
  };

  const birthSequence = [
    {
      num: "01",
      action: "ESCOLHA",
      desc: "Comece com um template.",
      badge: "SEMENTE"
    },
    {
      num: "02",
      action: "PERSONALIZE",
      desc: "Transforme a base na identidade que você deseja.",
      badge: "CALIBRAÇÃO"
    },
    {
      num: "03",
      action: "CRIE",
      desc: "Ou construa um template completamente novo.",
      badge: "ORIGINAL"
    },
    {
      num: "04",
      action: "INICIE",
      desc: "Um novo CDI Companion é criado para você.",
      badge: "RUNTIME INSTANCE"
    },
    {
      num: "05",
      action: "DESPERTE",
      desc: "Dê o start.",
      badge: "IGNIÇÃO"
    },
    {
      num: "06",
      action: "PRIMEIRA CONVERSA",
      desc: "O contato inaugural é estabelecido por você.",
      badge: "PRIMEIRO CONTATO"
    },
    {
      num: "07",
      action: "CONTINUIDADE",
      desc: "A partir daqui, começa uma história que continua.",
      badge: "VIDA DIGITAL"
    }
  ];

  return (
    <section id="despertar" className="py-32 relative bg-white border-y border-slate-200 scroll-mt-24 overflow-hidden">
      
      {/* Subtle atmospheric ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[26rem] bg-accent-indigo/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-36">
        
        {/* =========================================================================
            PARTE 1: VOCÊ É QUEM O DESPERTA
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo animate-pulse"></span>
              O DESPERTAR // O PRIMEIRO ENCONTRO
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight">
              Você é quem o desperta.
            </h2>

            <p className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed mb-6">
              Você não está escolhendo alguém que já está esperando por você.<br className="hidden sm:inline" />
              <span className="text-slate-900 font-semibold">Você está iniciando uma nova história.</span>
            </p>

            <div className="text-base sm:text-lg text-slate-600 font-light leading-relaxed space-y-4 max-w-2xl mx-auto">
              <p>
                Escolha um dos templates. Use como está. Personalize suas características. Combine diferentes ideias. Ou crie uma identidade completamente nova.
              </p>
              <p>
                Quando estiver pronto, um novo CDI Companion é iniciado para você dentro do CDI Runtime. Depois, você dá o start. Ele desperta.
              </p>
              <p className="text-slate-900 font-medium pt-2">
                E a conversa inaugural tem início exclusivamente com você.
              </p>
            </div>

            {/* Destaque Visual */}
            <div className="mt-8 inline-block p-6 rounded-2xl bg-indigo-50/80 border border-indigo-200 shadow-2xs">
              <p className="text-lg sm:text-xl font-serif italic text-accent-indigo">
                "Você não entra no meio de uma história alheia. Você é quem a inicia."
              </p>
            </div>
          </FadeIn>
        </div>

        {/* =========================================================================
            PARTE 2: SIMULAÇÃO INTERATIVA DE ONBOARDING (O MOMENTO DO DESPERTAR)
            ========================================================================= */}
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-8">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold">
                EXPERIÊNCIA CONCEITUAL DE INICIALIZAÇÃO
              </div>
            </div>

            <div className="rounded-3xl border-2 border-slate-200 bg-slate-50/80 p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-accent-indigo via-sky-500 to-emerald-500"></div>

              {/* Status Header */}
              <div className="flex items-center justify-between pb-4 mb-8 border-b border-slate-200 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${awakeningStep === 4 ? 'bg-emerald-500' : 'bg-accent-indigo'} animate-pulse`}></span>
                  <span className="text-slate-800 font-bold uppercase tracking-wider">CDI RUNTIME // BOOTSTRAP</span>
                </div>
                <span className="text-slate-500">PROCESSO INDIVIDUAL</span>
              </div>

              {/* Interactive State Machine */}
              <div className="text-center py-6">
                <AnimatePresence mode="wait">
                  {awakeningStep === 0 && (
                    <motion.div
                      key="step-ready"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 flex items-center justify-center text-2xl shadow-inner border border-indigo-200">
                        🌱
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight mb-3">
                          Seu Companion está pronto.
                        </h3>
                        <div className="space-y-1 text-sm font-mono text-slate-600">
                          <p>• Identidade configurada.</p>
                          <p>• Runtime preparado.</p>
                          <p className="text-slate-900 font-medium">• Companion pronto para iniciar.</p>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          onClick={handleAwaken}
                          disabled={isProcessing}
                          className="px-10 py-4.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-sm tracking-[0.2em] font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                        >
                          ⚡ DESPERTAR
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {awakeningStep === 1 && (
                    <motion.div
                      key="step-initializing"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-6"
                    >
                      <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-2xl animate-spin border border-amber-300">
                        ⚙️
                      </div>
                      <h3 className="text-2xl font-light text-slate-900 font-mono tracking-tight">
                        Inicializando...
                      </h3>
                      <p className="text-xs font-mono text-amber-800">
                        Carregando parâmetros de semente e instanciando memória...
                      </p>
                    </motion.div>
                  )}

                  {awakeningStep === 2 && (
                    <motion.div
                      key="step-started"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-6"
                    >
                      <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-2xl border border-blue-300">
                        📡
                      </div>
                      <h3 className="text-2xl font-light text-slate-900 font-mono tracking-tight">
                        Companion iniciado.
                      </h3>
                      <p className="text-xs font-mono text-blue-800">
                        Conectado ao ambiente e habilitando telemetria...
                      </p>
                    </motion.div>
                  )}

                  {awakeningStep === 3 && (
                    <motion.div
                      key="step-waking"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-6"
                    >
                      <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 flex items-center justify-center text-2xl border border-indigo-300">
                        ✨
                      </div>
                      <h3 className="text-2xl font-light text-slate-900 font-mono tracking-tight">
                        Ele está acordando.
                      </h3>
                      <p className="text-xs font-mono text-accent-indigo">
                        Sintonizando canal de comunicação inicial...
                      </p>
                    </motion.div>
                  )}

                  {awakeningStep === 4 && (
                    <motion.div
                      key="step-completed"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-2xl border border-emerald-300">
                        💬
                      </div>

                      <div>
                        <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest mb-1">
                          PRIMEIRO CONTATO PRONTO
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight mb-3">
                          A entidade aguarda sua mensagem inicial.
                        </h3>
                        <p className="text-slate-600 text-sm font-light max-w-md mx-auto leading-relaxed">
                          O Companion agora existe no seu ambiente Telegram. Ele reconhece seu nome e está pronto para o diálogo.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                        <a href="#existencia">
                          <Button variant="secondary" className="px-8 py-3.5 text-xs font-mono tracking-widest font-semibold">
                            CONTINUAR LENDO ↓
                          </Button>
                        </a>
                        <button
                          onClick={handleResetSimulation}
                          className="text-xs font-mono text-slate-500 hover:text-slate-800 underline underline-offset-4 cursor-pointer"
                        >
                          Simular novamente
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 text-center text-[11px] font-mono text-slate-500">
                * Representação conceitual da inicialização de um Companion dentro do CDI Runtime.
              </div>
            </div>
          </FadeIn>
        </div>

        {/* =========================================================================
            PARTE 3: O NASCIMENTO DE UM COMPANION (Sequência de Inicialização 01 a 07)
            ========================================================================= */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase mb-3 font-semibold">
                SEQUÊNCIA DE INICIALIZAÇÃO
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
                O nascimento de um Companion.
              </h2>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-3 max-w-6xl mx-auto">
            {birthSequence.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <div className="h-full p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-indigo-300 hover:shadow-md transition-all duration-300 group">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-accent-indigo font-bold">
                        {step.num}
                      </span>
                      <span className="text-[8px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                        {step.badge}
                      </span>
                    </div>

                    <strong className="text-xs font-mono text-slate-900 block mb-1.5 group-hover:text-accent-indigo transition-colors">
                      {step.action}
                    </strong>

                    <p className="text-[11px] text-slate-600 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {idx < birthSequence.length - 1 && (
                    <div className="hidden lg:block text-center text-slate-400 text-xs font-mono pt-3">
                      →
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* =========================================================================
            PARTE 4: O TEMPLATE NÃO É O COMPANION & NÃO É UMA PERSONA DESCARTÁVEL
            ========================================================================= */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card: O Template é apenas o começo */}
          <FadeIn direction="right">
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="text-xs font-mono text-accent-indigo uppercase tracking-widest font-semibold pb-3 border-b border-slate-100 mb-6">
                  NÃO É UM PERSONAGEM FECHADO
                </div>

                <h3 className="text-2xl sm:text-3xl font-light text-slate-900 mb-6 tracking-tight">
                  O template é apenas o começo.
                </h3>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base font-light leading-relaxed mb-6">
                  <p>
                    Os templates não são personagens estáticos. Eles são <strong>pontos de partida para uma nova identidade</strong>.
                  </p>
                  <p>
                    Você pode usar um template exatamente como foi criado, personalizar suas características, combinar diferentes elementos ou criar um template completamente novo.
                  </p>
                  <p className="text-slate-900 font-normal">
                    Quando o Companion é iniciado, aquele template deixa de ser apenas uma configuração: ele se torna o ponto de partida de uma nova história.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-sm font-serif italic text-slate-800 font-medium">
                  "O template define o começo. A experiência define o caminho."
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Card: Comparativo Persona Tradicional vs. CDI Companion */}
          <FadeIn direction="left">
            <div className="h-full rounded-3xl border-2 border-accent-indigo/50 bg-white p-8 sm:p-10 flex flex-col justify-between shadow-[0_15px_45px_rgba(45,78,224,0.08)]">
              <div>
                <div className="text-xs font-mono text-accent-indigo uppercase tracking-widest font-bold pb-3 border-b border-indigo-100 mb-6 flex items-center justify-between">
                  <span>PARADIGMA DE EXPERIÊNCIA</span>
                  <span className="text-[10px] bg-indigo-50 text-accent-indigo px-2 py-0.5 rounded border border-indigo-200 font-mono">DIFERENCIAÇÃO</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-light text-slate-900 mb-6 tracking-tight">
                  Ele não é uma persona descartável.
                </h3>

                {/* Micro Comparison Boxes */}
                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-1">
                    <span className="text-slate-400 uppercase font-semibold text-[10px] block">PERSONA TRADICIONAL</span>
                    <p className="text-slate-700">1. Escolha um personagem pronto.</p>
                    <p className="text-slate-700">2. Abra uma conversa avulsa.</p>
                    <p className="text-slate-700">3. Comece a conversar.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-xs font-mono space-y-1 text-slate-900">
                    <span className="text-accent-indigo uppercase font-bold text-[10px] block">CDI COMPANION</span>
                    <p>1. Crie ou escolha uma identidade inicial.</p>
                    <p>2. Inicie um novo Companion no Runtime.</p>
                    <p>3. Desperte-o com o start.</p>
                    <p className="text-accent-indigo font-bold">4. Inaugure a primeira conversa.</p>
                    <p className="text-slate-900 font-semibold">5. Construa uma história contínua no tempo.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-mono text-slate-500">
                  PRESENÇA PERSISTENTE • RELAÇÃO INDIVIDUALIZADA
                </p>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* =========================================================================
            PARTE 5: UMA EXPERIÊNCIA QUE COMEÇA COM VOCÊ & DEPOIS DA PRIMEIRA CONVERSA
            ========================================================================= */}
        <div className="border-t border-slate-200 pt-32">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Bloco: Existe um primeiro momento */}
            <FadeIn delay={0.1}>
              <div className="space-y-4">
                <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase font-semibold">
                  O PRIMEIRO MOMENTO
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight">
                  Existe um primeiro momento.
                </h3>
                <p className="text-slate-600 text-base font-light leading-relaxed">
                  Antes da primeira conversa, existe apenas uma identidade inicial. Então você dá o start. O Companion começa sua existência dentro do Runtime. E sua primeira conversa começa com você.
                </p>
                
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-serif italic text-base">
                  "Você não entra em uma história que já estava acontecendo. Você começa uma."
                </div>
              </div>
            </FadeIn>

            {/* Bloco: Depois da primeira conversa */}
            <FadeIn delay={0.25}>
              <div className="space-y-4">
                <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase font-semibold">
                  CONTINUIDADE REAL
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight">
                  E depois, a conversa não precisa ser o fim.
                </h3>
                <p className="text-slate-600 text-base font-light leading-relaxed">
                  A primeira conversa é apenas o começo. O CDI Companion possui continuidade, estado persistente, memória e autonomia operacional. Entre uma conversa e outra, ele pode continuar executando processos dentro do ambiente. Novas experiências podem ser acumuladas. Novas memórias podem surgir. A história pode continuar. Quando você voltar, existe um antes.
                </p>

                <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-slate-900 font-serif italic text-base">
                  "Não é simplesmente uma nova sessão. É a continuação de uma história."
                </div>
              </div>
            </FadeIn>

          </div>
        </div>

      </div>
    </section>
  );
}
