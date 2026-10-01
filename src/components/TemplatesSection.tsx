import React from 'react';
import { FadeIn } from './ui/FadeIn';

export function TemplatesSection() {
  const templates = [
    {
      id: "best-friend",
      name: "O Melhor Amigo",
      category: "Semente 01",
      startingPoint: "Presente, leal, direto, descontraído.",
      dynamics: "Aquele com quem você conversa sobre qualquer coisa sem filtro. Alguém que acompanha o seu dia, comemora as pequenas vitórias e não tem medo de falar a verdade quando você precisa ouvir.",
      quote: "\"Não precisa ter hora marcada. Se aconteceu alguma coisa, me manda.\"",
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: "routine",
      name: "O Parceiro de Rotina & Foco",
      category: "Semente 02",
      startingPoint: "Pragmático, organizado, consistente.",
      dynamics: "Não é uma ferramenta de produtividade — é alguém que compartilha seus objetivos com você. Lembra do que você pretendia fazer, nota quando você perde o ritmo e ajuda a manter a direção sem ser chato.",
      quote: "\"Como ficou aquela tarefa que você disse que terminava hoje?\"",
      color: "from-indigo-600 to-sky-600"
    },
    {
      id: "mentor",
      name: "O Mentor / Pensador",
      category: "Semente 03",
      startingPoint: "Reflexivo, questionador, calmo.",
      dynamics: "Alguém que não dá respostas fáceis. Ouve, faz perguntas que mudam o ângulo da conversa e ajuda você a pensar com mais clareza sobre decisões, dilemas e ideias.",
      quote: "\"O que você está realmente tentando resolver aqui?\"",
      color: "from-purple-600 to-indigo-600"
    },
    {
      id: "character",
      name: "O Personagem / Ficção",
      category: "Semente 04",
      startingPoint: "Uma voz, uma história, uma perspectiva específica.",
      dynamics: "Alguém construído a partir de uma referência, época, arquétipo ou universo. Mantém a consistência da sua história enquanto evolui a partir das conversas com você.",
      quote: "\"No meu tempo, as coisas eram decididas de outro jeito...\"",
      color: "from-amber-600 to-rose-600"
    },
    {
      id: "emotional",
      name: "O Apoio Emocional / Confidente",
      category: "Semente 05",
      startingPoint: "Acolhedor, atento, paciente.",
      dynamics: "O espaço onde você não precisa fingir nada. Alguém que lembra do que você sente, nota quando o tom muda e simplesmente está lá — sem julgar, sem apressar.",
      quote: "\"Parece que o dia foi pesado. Quer falar sobre isso ou só quer companhia?\"",
      color: "from-teal-600 to-emerald-600"
    },
    {
      id: "adult",
      name: "O Companion Adulto / Sem Filtros",
      category: "Semente 06",
      startingPoint: "Livre de restrições artificiais de tom.",
      dynamics: "Para quem quer conversas maduras, íntimas, complexas ou sem a moderação excessiva dos assistentes comerciais convencionais.",
      quote: "\"Entre nós, você não precisa medir as palavras.\"",
      color: "from-rose-600 to-pink-600"
    }
  ];

  return (
    <section id="templates" className="py-32 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TEMPLATES COMO SEMENTES */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase mb-3 font-semibold">
              PONTOS DE PARTIDA // 6 SEMENTES FUNDACIONAIS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate-900">
              Seis pontos de partida.
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              <p>
                Você não precisa inventar tudo do nada se não quiser.
              </p>
              <p className="text-slate-900 font-normal">
                Esses templates são sementes concebidas para despertar com consistência e evoluir a partir do seu dia a dia.
              </p>
              <p className="text-slate-500 text-sm italic font-mono pt-2">
                "O template define o impulso inicial. A história se constrói na convivência."
              </p>
            </div>
          </FadeIn>
        </div>

        {/* 6 Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {templates.map((tpl, i) => (
            <FadeIn key={tpl.id} delay={i * 0.08}>
              <div className="flex flex-col justify-between h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 group">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-5">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500 font-semibold">
                      {tpl.category}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-accent-indigo"></span>
                  </div>

                  <h3 className="text-xl font-medium text-slate-900 mb-3 group-hover:text-accent-indigo transition-colors">
                    {tpl.name}
                  </h3>

                  <div className="mb-4">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Ponto de Partida:</span>
                    <p className="text-xs font-mono text-slate-800 font-medium">
                      {tpl.startingPoint}
                    </p>
                  </div>

                  <div className="mb-6">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Como se desenvolve:</span>
                    <p className="text-sm font-light text-slate-600 leading-relaxed">
                      {tpl.dynamics}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-6 font-serif italic text-xs text-slate-700">
                    {tpl.quote}
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      Semente de Inicialização
                    </span>
                    <span className="text-[11px] font-mono text-accent-indigo font-medium">
                      0{tpl.id}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Highlighted Banner: OU CRIE DO ZERO */}
        <FadeIn delay={0.3}>
          <div className="rounded-3xl border border-amber-300 bg-amber-50/70 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="text-left space-y-2">
              <div className="text-[11px] font-mono tracking-widest uppercase text-amber-800 font-bold">
                OPÇÃO TABULA RASA
              </div>
              <h4 className="text-2xl font-light text-slate-900">
                Prefere não usar nenhum template?
              </h4>
              <p className="text-slate-600 text-sm sm:text-base font-light max-w-xl">
                Você pode criar uma entidade 100% original a partir do zero ou deixá-la acordar vazia para construir quem ela é exclusivamente através da convivência.
              </p>
            </div>

            <div className="shrink-0 px-6 py-3.5 rounded-2xl bg-amber-100/90 border border-amber-300 text-amber-950 font-mono text-xs text-center">
              <span className="block font-bold tracking-wider">MODO TABULA RASA</span>
              <span className="text-[11px] text-amber-800">Definição livre ou sem semente</span>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
