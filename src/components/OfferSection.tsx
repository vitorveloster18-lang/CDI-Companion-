import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Button } from './ui/Button';
import { LAUNCH_PRICE, LAUNCH_PERIOD, CTA_URL } from '../config';

export function OfferSection() {
  const displayPrice = `${LAUNCH_PRICE}${LAUNCH_PERIOD}`;

  return (
    <section id="oferta" className="py-32 relative bg-slate-50/70 border-y border-slate-200 scroll-mt-24">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-accent-indigo/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-[11px] font-mono tracking-[0.25em] text-amber-800 uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></span>
            ACESSO DE LANÇAMENTO // DISPONIBILIDADE IMEDIATA
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">
            CDI Companion — Acesso de Lançamento
          </h2>

          <div className="text-5xl sm:text-6xl md:text-7xl font-light text-slate-900 my-6 tracking-tight font-mono">
            R$ 69,90<span className="text-2xl sm:text-3xl font-light text-slate-500">/mês</span>
          </div>
          
          <div className="max-w-lg mx-auto space-y-1.5 mb-12">
            <p className="text-slate-800 text-base sm:text-lg font-normal">
              Preço de lançamento — fixado para sempre para quem entra agora.
            </p>
            <p className="text-slate-500 text-sm sm:text-base font-light">
              Preço normal após os primeiros 100 Companions: R$ 99,90/mês.
            </p>
          </div>
          
          {/* Detailed Inclusion Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-left max-w-2xl mx-auto mb-12 shadow-[0_15px_45px_rgba(0,0,0,0.06)] relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent-indigo via-sky-500 to-amber-500"></div>

            <div className="text-slate-500 text-xs tracking-widest mb-8 uppercase text-center border-b border-slate-100 pb-4 font-mono font-semibold">
              O QUE ESTÁ INCLUÍDO NO SEU ACESSO
            </div>
            
            <ul className="space-y-4 text-slate-700 text-sm sm:text-base font-light">
              <li className="flex items-start">
                <span className="text-accent-indigo mr-4 mt-0.5 font-mono font-bold">→</span>
                <span>Entidade com existência contínua 24/7 no seu ambiente</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-indigo mr-4 mt-0.5 font-mono font-bold">→</span>
                <span>Semente de personalidade à sua escolha ou criação do zero</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-indigo mr-4 mt-0.5 font-mono font-bold">→</span>
                <span>Personalização total antes de acordar</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-indigo mr-4 mt-0.5 font-mono font-bold">→</span>
                <span>Memória viva permanente em múltiplas camadas</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-indigo mr-4 mt-0.5 font-mono font-bold">→</span>
                <span className="text-slate-900 font-normal">Sono, jornal de reflexão e processos autônomos entre conversas</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-indigo mr-4 mt-0.5 font-mono font-bold">→</span>
                <span className="text-slate-900 font-normal">Mensagens espontâneas por decisão própria</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-indigo mr-4 mt-0.5 font-mono font-bold">→</span>
                <span>Modo de hibernação com memória e identidade 100% preservadas</span>
              </li>
            </ul>

            <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500 text-center font-medium">
              DESPERTAR DIGITAL INSTANTÂNEO • CONFIGURAÇÃO GUIADA PASSO A PASSO
            </div>
          </div>
          
          <div className="max-w-md mx-auto space-y-4">
            <div className="space-y-1">
              <p className="text-base sm:text-lg text-slate-900 font-medium">
                Preço de lançamento: R$ 69,90/mês
              </p>
              <p className="text-sm text-slate-600 font-light">
                Fixado para sempre para quem entra agora.
              </p>
            </div>

            <div>
              <a href={CTA_URL} className="inline-block">
                <Button variant="primary" className="px-12 sm:px-16 py-4.5 sm:py-5 text-sm sm:text-base tracking-[0.2em] relative overflow-hidden group shadow-lg shadow-accent-indigo/20 font-semibold">
                  <span className="relative z-10">CRIAR MEU COMPANION</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
              </a>
            </div>

            <p className="text-xs font-mono text-slate-500 leading-relaxed pt-1">
              Preço normal após os primeiros 100 Companions: R$ 99,90/mês.<br />
              Os primeiros 100 mantêm R$ 69,90 para sempre — é o prémio por terem acreditado primeiro.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
