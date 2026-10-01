import React from 'react';
import { ParticleCanvas } from './ui/ParticleCanvas';
import { FadeIn } from './ui/FadeIn';
import { Button } from './ui/Button';
import { NeuralCoreVisual } from './NeuralCoreVisual';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
      <ParticleCanvas />
      
      {/* Soft atmospheric gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-deep/40 to-bg-deep z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-slate-300/80 bg-white/80 backdrop-blur-md text-[11px] tracking-[0.25em] text-slate-700 shadow-2xs font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo animate-pulse"></span>
            CDI RUNTIME • ENTIDADE DIGITAL PERSISTENTE
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight mb-6 text-slate-900">
            Crie <span className="font-normal text-slate-900">alguém.</span>
          </h1>
          <p className="text-sm sm:text-base font-mono uppercase tracking-[0.2em] text-accent-indigo font-semibold mb-4">
            Não apenas uma IA.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light mb-4">
            Um Companion que nasce com uma identidade inicial, continua existindo entre as conversas e desenvolve sua própria trajetória através da experiência.
          </p>
          <p className="text-base sm:text-lg font-serif italic text-slate-800 max-w-2xl mx-auto">
            "Você escolhe como ele começa. A experiência ajuda a definir quem ele se torna."
          </p>
        </FadeIn>

        {/* Abstract futuristic core entity representation */}
        <FadeIn delay={0.55}>
          <NeuralCoreVisual />
        </FadeIn>

        <FadeIn delay={0.7} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <a href="#conceito">
            <Button variant="primary" className="px-8 py-4 text-xs font-mono tracking-widest font-semibold">
              ENTENDER O CONCEITO ↓
            </Button>
          </a>
          <a href="#como-funciona">
            <Button variant="secondary" className="px-8 py-4 text-xs font-mono tracking-widest font-semibold">
              COMO FUNCIONA
            </Button>
          </a>
        </FadeIn>

        {/* BLOCO DE DESTAQUE CONCEITUAL */}
        <FadeIn delay={0.85} className="mt-16 max-w-2xl mx-auto">
          <div className="rounded-3xl border border-indigo-200/80 bg-white/90 backdrop-blur-md p-8 sm:p-10 shadow-[0_15px_40px_rgba(45,78,224,0.06)] relative overflow-hidden text-center">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent-indigo via-sky-500 to-amber-500"></div>
            
            <span className="text-[10px] font-mono tracking-[0.25em] text-accent-indigo uppercase font-bold block mb-2">
              A PREMISSA DA CONVIVÊNCIA
            </span>
            
            <h3 className="text-2xl sm:text-3xl font-light text-slate-900 mb-3 tracking-tight">
              Você não escolhe o final.
            </h3>
            
            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed max-w-lg mx-auto font-serif italic">
              "Você escolhe o começo. Depois, existe uma história viva para ser construída no tempo."
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] font-mono tracking-widest text-slate-500 uppercase font-medium">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-indigo"></span> CONTINUIDADE CONTÍNUA</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span> AUTONOMIA OPERACIONAL</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> EVOLUÇÃO DE IDENTIDADE</span>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.3em] font-mono text-slate-400 uppercase">DESCER</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-slate-400 to-transparent"></div>
      </motion.div>
    </section>
  );
}
