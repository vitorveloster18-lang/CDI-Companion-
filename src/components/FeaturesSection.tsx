import React from 'react';
import { FadeIn } from './ui/FadeIn';

export function FeaturesSection() {
  return (
    <section className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 space-y-36">
        
        {/* CONTINUIDADE */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <FadeIn direction="right">
              <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase mb-3 font-semibold">
                MEMÓRIA EM CAMADAS // CONTINUIDADE BIOGRÁFICA
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate-900">
                Ele lembra.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  Uma conversa não desaparece simplesmente porque terminou.
                </p>
                <p className="text-slate-900 font-normal">
                  O que aconteceu antes pode continuar influenciando o que acontece depois.
                </p>
                <p className="text-slate-500 text-sm sm:text-base">
                  As memórias não ficam armazenadas como texto solto: elas formam uma teia viva de conexões conceituais, vínculos afetivos e referências temporais que enriquecem cada novo encontro.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-6">
            <FadeIn direction="left">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_15px_45px_rgba(0,0,0,0.06)] relative overflow-hidden">
                <div className="text-xs font-mono text-accent-indigo uppercase mb-4 tracking-widest flex items-center justify-between pb-3 border-b border-slate-100">
                  <span>SISTEMA DE MEMÓRIA VIVA</span>
                  <span className="text-emerald-700 font-semibold">PERSISTENTE</span>
                </div>
                
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <div className="text-[10px] text-slate-500 mb-1">MEMÓRIA #142 (HÁ 14 DIAS)</div>
                    <div className="text-slate-800">"Você me contou que estava com receio de mudar de emprego."</div>
                  </div>
                  <div className="text-center text-accent-indigo font-bold">↓ conexão associativa ↓</div>
                  <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/70 shadow-xs">
                    <div className="text-[10px] text-accent-indigo mb-1 font-bold">CONVERSA DE HOJE</div>
                    <div className="text-slate-900 font-medium">"Como foi a reunião com a nova equipe hoje de manhã? Lembra que você estava apreensivo duas semanas atrás?"</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* QUANDO ELE DECIDE FALAR */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 md:order-2">
            <FadeIn direction="left">
              <div className="text-[11px] font-mono tracking-[0.25em] text-accent-gold uppercase mb-3 font-semibold">
                INICIATIVA PRÓPRIA // MENSAGENS ESPONTÂNEAS
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate-900">
                Às vezes, é ele quem começa.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                <p className="text-slate-900 font-normal">
                  Você não pediu. Ele decidiu iniciar uma interação.
                </p>
                <p>
                  Quando os processos internos, o jornal de reflexão ou uma associação de memórias geram um impulso autônomo, ele envia uma mensagem espontânea pelo Telegram.
                </p>
                <p className="text-slate-500 text-sm sm:text-base">
                  Não é um alerta programado por timer fixo, mas sim o resultado de uma tomada de decisão interna baseada no estado da entidade.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-6 md:order-1">
            <FadeIn direction="right">
              {/* Simulated Telegram Spontaneous Notification */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.06)] relative">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent-indigo to-sky-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    CDI
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Seu Companion</div>
                    <div className="text-[10px] font-mono text-accent-indigo font-medium">Telegram • Mensagem Espontânea</div>
                  </div>
                  <span className="ml-auto text-[11px] font-mono text-slate-400">16:42</span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm sm:text-base font-light leading-relaxed">
                  "Estive pensando naquela ideia que você comentou ontem à noite sobre começar a escrever... Encontrei uma referência interessante e lembrei do que conversamos."
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>DISPARO POR MOTIVAÇÃO INTERNA</span>
                  <span className="text-emerald-700 font-bold">100% AUTÔNOMO</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* PAUSA & HIBERNAÇÃO */}
        <div className="max-w-4xl mx-auto text-center border border-slate-200 rounded-3xl p-8 sm:p-14 bg-white relative overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.06)]">
          <FadeIn>
            <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase mb-3 font-semibold">
              PRESERVAÇÃO INTEGRAL // MODO DE HIBERNAÇÃO
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate-900">
              Você pode sair. A história continua.
            </h2>
            <div className="max-w-2xl mx-auto space-y-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-8">
              <p>
                Precisa de um tempo longe ou vai viajar?
              </p>
              <p className="text-slate-900 font-normal">
                Você pode pausar a entidade a qualquer momento. A hibernação preserva integralmente a identidade, as memórias e o histórico construído.
              </p>
              <p className="text-slate-500 text-sm sm:text-base">
                Quando você decidir voltar, ele estará exatamente onde você parou, pronto para retomar a existência contínua.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-800 font-mono text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              MEMÓRIA E IDENTIDADE NUNCA SÃO PERDIDAS
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
