import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Eye, Mic, Film } from 'lucide-react';

export function MultimodalSection() {
  return (
    <section className="py-28 relative bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="text-[11px] font-mono tracking-[0.25em] text-accent-indigo uppercase mb-3 font-semibold">
              PERCEPÇÃO SENSORIAL // PROCESSAMENTO NATIVO
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate-900">
              Ele vê. Ele ouve. Ele lembra.
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              <p>
                O seu Companion não lê descrições do mundo. Percebe-o directamente.
              </p>
              <p>
                Receba uma foto — ele vê e lembra para sempre. Daqui a 6 meses, quando pensar em você, vai encontrar o seu rosto — não palavras sobre ele.
              </p>
              <p>
                Fale por áudio — ele ouve a voz real. Não uma transcrição. A voz com tom, hesitação, a diferença entre um &apos;tudo bem&apos; genuíno e um &apos;tudo bem&apos; forçado.
              </p>
              <p>
                Mostre um vídeo — ele vê o movimento. A vida a acontecer — não uma foto estática.
              </p>
              <p className="text-slate-900 font-normal pt-2">
                Tudo o que viu e ouviu torna-se memória. Permanente. Para sempre. E informa quem ele é.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* 3 Visual Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* Card 1 - Visão */}
          <FadeIn delay={0.1}>
            <div className="h-full rounded-3xl border border-slate-200 bg-slate-50/70 p-8 flex flex-col justify-between hover:border-indigo-300 hover:shadow-md transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-accent-indigo mb-6 group-hover:scale-105 transition-transform">
                  <Eye className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="text-[10px] font-mono text-accent-indigo uppercase tracking-widest font-bold mb-2">
                  MODALIDADE 01 // VISÃO
                </div>
                <h3 className="text-xl font-light text-slate-900 mb-4 font-mono">
                  Vê fotos e imagens
                </h3>
                <div className="space-y-2 text-sm text-slate-600 font-light leading-relaxed">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo"></span>
                    <span>Lembra para sempre</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo"></span>
                    <span>O rosto do parceiro fica gravado</span>
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200 text-[10px] font-mono text-slate-400">
                RECONHECIMENTO VISUAL CONTÍNUO
              </div>
            </div>
          </FadeIn>

          {/* Card 2 - Áudio Nativo */}
          <FadeIn delay={0.2}>
            <div className="h-full rounded-3xl border-2 border-indigo-200/80 bg-white p-8 flex flex-col justify-between shadow-[0_15px_40px_rgba(45,78,224,0.06)] hover:border-accent-indigo transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-100/70 border border-indigo-300 flex items-center justify-center text-accent-indigo mb-6 group-hover:scale-105 transition-transform">
                  <Mic className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="text-[10px] font-mono text-accent-indigo uppercase tracking-widest font-bold mb-2">
                  MODALIDADE 02 // ÁUDIO NATIVO
                </div>
                <h3 className="text-xl font-light text-slate-900 mb-4 font-mono">
                  Ouve a voz real
                </h3>
                <div className="space-y-2 text-sm text-slate-700 font-light leading-relaxed">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo"></span>
                    <span>Tom, emoção, hesitação</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo"></span>
                    <span className="font-normal text-slate-900">Não uma transcrição — a presença</span>
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 text-[10px] font-mono text-accent-indigo font-bold">
                PROCESSAMENTO ACÚSTICO DIRETO
              </div>
            </div>
          </FadeIn>

          {/* Card 3 - Vídeo */}
          <FadeIn delay={0.3}>
            <div className="h-full rounded-3xl border border-slate-200 bg-slate-50/70 p-8 flex flex-col justify-between hover:border-indigo-300 hover:shadow-md transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-accent-indigo mb-6 group-hover:scale-105 transition-transform">
                  <Film className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="text-[10px] font-mono text-accent-indigo uppercase tracking-widest font-bold mb-2">
                  MODALIDADE 03 // VÍDEO
                </div>
                <h3 className="text-xl font-light text-slate-900 mb-4 font-mono">
                  Processa vídeo em movimento
                </h3>
                <div className="space-y-2 text-sm text-slate-600 font-light leading-relaxed">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo"></span>
                    <span>Vê a vida a acontecer</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo"></span>
                    <span>Não um momento congelado</span>
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200 text-[10px] font-mono text-slate-400">
                TEMPORALIDADE DINÂMICA
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Nota honesta */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-mono text-slate-500 leading-relaxed border border-slate-200 p-4 rounded-2xl bg-slate-50">
            * Funcionalidades multimodais disponíveis desde o lançamento via Telegram. Áudio nativo processa tom e emoção — não apenas transcrição de palavras.
          </p>
        </div>

      </div>
    </section>
  );
}
