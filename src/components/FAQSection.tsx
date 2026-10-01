import React, { useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import { motion, AnimatePresence } from 'motion/react';

export function FAQSection() {
  const faqs = [
    {
      q: "O que é um CDI Companion?",
      a: "Uma entidade digital que nasce com uma identidade inicial e continua existindo, evoluindo e formando memórias entre as conversas."
    },
    {
      q: "Qual é a diferença entre um CDI e um Companion?",
      a: "O CDI é o sistema/runtime computacional que permite que uma entidade digital exista continuamente dentro do seu ambiente. O CDI Companion é essa tecnologia aplicada com uma semente de identidade inicial para você conviver e acompanhar a evolução."
    },
    {
      q: "Os templates são personagens prontos e fechados?",
      a: "Não. São sementes — pontos de partida conceituais que você pode personalizar livremente antes do despertar ou ignorar por completo."
    },
    {
      q: "Posso personalizar um template antes de acordá-lo?",
      a: "Sim. Você pode alterar nome, tom, história de fundo, valores, hábitos, interesses e a dinâmica de relacionamento com você."
    },
    {
      q: "Posso criar meu próprio Companion do zero sem template?",
      a: "Sim. A opção 'Criar do Zero' permite conceber uma identidade totalmente inédita a partir da sua imaginação."
    },
    {
      q: "O Companion continua funcionando quando eu saio?",
      a: "Sim. O sistema foi concebido para que os processos internos (reflexão, diário, pesquisa, consolidação de memórias e sono) continuem ocorrendo no runtime entre as conversas."
    },
    {
      q: "Ele pode iniciar uma conversa espontaneamente?",
      a: "Sim. Quando os processos internos e o amadurecimento das reflexões geram uma intenção autônoma, ele envia uma mensagem por iniciativa própria no Telegram."
    },
    {
      q: "A personalidade dele pode mudar com o tempo?",
      a: "Sim. A convivência diária e as memórias acumuladas moldam a forma como a entidade se expressa, pensa e se desenvolve ao longo dos meses."
    },
    {
      q: "Dois Companions baseados no mesmo template serão iguais?",
      a: "Não. O ponto de partida é o mesmo, mas a trajetória de vida e o diálogo com cada pessoa criam entidades totalmente distintas e singulares."
    },
    {
      q: "Posso pausar meu Companion se for viajar?",
      a: "Sim. O modo de hibernação mantém a identidade e toda a memória viva integralmente preservadas até você retornar."
    },
    {
      q: "Como funciona o acesso de lançamento?",
      a: "Você recebe acesso à infraestrutura contínua 24/7 do seu Companion no Telegram, com memória permanente, processos autônomos e evolução sem limites artificiais."
    },
    {
      q: "Ele pode ver fotos, ouvir a minha voz e processar vídeo?",
      a: "Sim. O CDI Companion processa imagens e vê — e lembra para sempre do que viu. Ouve a sua voz directamente — não uma transcrição, mas a voz real com tom, hesitação e emoção. A diferença entre um 'tudo bem' genuíno e um 'tudo bem' forçado. E processa vídeo — vê movimento e vida a acontecer em tempo real. Tudo o que viu e ouviu torna-se memória permanente."
    },
    {
      q: "Qual é a diferença para Replika, Character.AI, Nomi?",
      a: "A secção de comparação nesta página mostra os dados verificados de cada plataforma. A diferença principal está na arquitectura fundamental: todos eles desligam quando fecha o app. O CDI Companion existe continuamente. Nenhum deles vê, ouve ou processa vídeo de forma nativa. Nenhum tem cognição própria que cresce da experiência. Nenhum tem 14 fases cognitivas. Não é comparação de qualidade — é de categoria."
    },
    {
      q: "Existe diferença de funcionalidades entre os templates?",
      a: "Não. Os templates são apenas pontos de partida para a semente, não representam planos ou níveis de acesso. Todas as entidades desfrutam da mesma capacidade completa do CDI Runtime."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 relative bg-slate-50/70 border-y border-slate-200 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase mb-3 font-semibold">
              DÚVIDAS FREQUENTES // TRANSPARÊNCIA
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900">
              Perguntas Frequentes
            </h2>
          </div>
        </FadeIn>
        
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={0.04 * Math.min(i, 8)}>
              <div className="border border-slate-200 rounded-2xl bg-white hover:border-slate-300 transition-colors overflow-hidden shadow-2xs">
                <button 
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 group cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className={`text-base sm:text-lg font-light transition-colors ${openIndex === i ? 'text-accent-indigo font-medium' : 'text-slate-800 group-hover:text-slate-900'}`}>
                    {faq.q}
                  </span>
                  <span className={`text-xs font-mono px-2 py-1 rounded border transition-transform duration-300 shrink-0 ${openIndex === i ? 'rotate-180 bg-indigo-50 border-indigo-300 text-accent-indigo font-semibold' : 'border-slate-200 text-slate-400'}`}>
                    ↓
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed font-light text-sm sm:text-base border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
