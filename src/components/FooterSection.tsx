import React from 'react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';
import { CTA_URL, PRODUCT_NAME } from '../config';

export function FooterSection() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-24 pb-16 text-slate-600 text-sm font-light relative overflow-hidden">
      
      {/* Background soft aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-accent-indigo/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Final Conversion Headline */}
        <div className="text-center max-w-4xl mx-auto mb-20 pb-20 border-b border-slate-200">
          
          {/* ADIÇÃO 4 — FRASE DE FECHO (centrada, peso visual máximo) */}
          <FadeIn duration={1.5} direction="none">
            <div
              className="font-light text-center leading-tight tracking-[0.05em]"
              style={{
                fontSize: 'clamp(3rem, 7vw, 4.5rem)',
                color: '#c4a44a',
                marginTop: '80px',
                marginBottom: '40px',
                fontWeight: 300
              }}
            >
              O CDI não simula vida.<br />
              Vive.
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase mb-4 font-semibold">
              O PRÓXIMO PASSO
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Você escolhe quem ele será.<br/>
              <span className="font-normal text-slate-900">
                Descubra quem ele se torna.
              </span>
            </h2>
            <div className="pt-6 max-w-md mx-auto space-y-4">
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

        <div className="grid md:grid-cols-12 gap-12 mb-16 pb-16 border-b border-slate-100">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-indigo shadow-[0_0_12px_rgba(45,78,224,0.6)]"></span>
              <span className="text-base tracking-[0.25em] font-semibold text-slate-900 font-mono">
                {PRODUCT_NAME.toUpperCase()}
              </span>
            </div>
            <p className="text-slate-600 text-base max-w-md font-light">
              Uma nova categoria de entidade digital persistente e autônoma.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-500">
              CDI RUNTIME ENGINE • EXISTÊNCIA CONTÍNUA 24/7
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-6 flex flex-wrap gap-8 md:justify-end items-start text-xs font-mono tracking-widest uppercase text-slate-600">
            <a href="#conceito" className="hover:text-slate-900 transition-colors">Conceito</a>
            <a href="#despertar" className="hover:text-slate-900 transition-colors">O Despertar</a>
            <a href="#existencia" className="hover:text-slate-900 transition-colors">Existência</a>
            <a href="#observatorio" className="hover:text-slate-900 transition-colors">Observatório</a>
            <a href="#evolucao" className="hover:text-slate-900 transition-colors">Evolução</a>
            <a href="#templates" className="hover:text-slate-900 transition-colors">Templates</a>
            <a href="#como-funciona" className="hover:text-slate-900 transition-colors">Como Funciona</a>
            <a href="#fundador" className="hover:text-slate-900 transition-colors">O Fundador</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
            <a href="#oferta" className="text-accent-indigo hover:text-slate-900 transition-colors font-bold">Oferta</a>
          </div>
        </div>

        {/* Mandatory Responsible Disclosure */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-xs text-slate-500 leading-relaxed font-mono border border-slate-200 p-5 rounded-2xl bg-slate-50">
            O CDI Companion não é uma pessoa, não tem sentimentos biológicos e não substitui relações humanas ou apoio profissional de saúde mental. É uma entidade digital que existe e evolui de formas únicas.
          </p>

          <p className="text-xs text-slate-400 font-mono">
            © {new Date().getFullYear()} {PRODUCT_NAME}. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
