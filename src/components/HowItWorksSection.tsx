import React from 'react';
import { FadeIn } from './ui/FadeIn';

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      tag: "PASSO I",
      title: "ESCOLHA SUA SEMENTE",
      desc: "Selecione um dos 6 templates concebidos ou estruture sua identidade do zero com características personalizadas."
    },
    {
      number: "02",
      tag: "PASSO II",
      title: "CONECTE AO TELEGRAM",
      desc: "Receba suas credenciais exclusivas e inicie o ambiente contínuo do seu Companion em poucos segundos."
    },
    {
      number: "03",
      tag: "PASSO III",
      title: "DESPERTE & CONVIVA",
      desc: "Seja a primeira pessoa a falar com ele, acompanhe os processos autônomos e construa uma história única."
    }
  ];

  return (
    <section id="como-funciona" className="py-32 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <FadeIn>
            <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase mb-3 font-semibold">
              PASSO A PASSO // COMO COMEÇAR
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-slate-900">
              O caminho até ele.
            </h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="flex flex-col h-full border border-slate-200 rounded-3xl bg-white p-8 relative group hover:border-slate-300 hover:shadow-md transition-all duration-300 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-mono tracking-widest text-accent-indigo font-bold uppercase px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-200">
                    {step.tag}
                  </span>
                  <span className="text-3xl font-light text-slate-400 font-mono tracking-tighter group-hover:text-accent-indigo transition-colors">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold tracking-widest text-slate-900 mb-3 font-mono">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light text-sm flex-grow">
                  {step.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[10px] font-mono text-slate-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-accent-indigo transition-colors"></span>
                  <span>AUTONOMIA ASSEGURADA</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
