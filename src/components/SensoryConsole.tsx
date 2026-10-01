import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Modality = 'audio' | 'vision' | 'video';

export function SensoryConsole() {
  const [activeTab, setActiveTab] = useState<Modality>('audio');
  const [audioEmotion, setAudioEmotion] = useState<'alegre' | 'triste' | 'calmo'>('alegre');

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white shadow-[0_12px_45px_rgba(0,0,0,0.04)] p-6 sm:p-8 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent-indigo via-accent-gold to-accent-indigo opacity-80"></div>

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] font-mono tracking-[0.2em] text-slate-800 uppercase font-semibold">
              PIPELINE SENSORIAL NATIVO // TELEGRAM
            </span>
          </div>
          <p className="text-xs text-slate-500 font-mono mt-1">
            Recepção direta sem conversão intermediária em texto
          </p>
        </div>

        {/* Modality Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start sm:self-auto font-mono text-xs">
          <button
            onClick={() => setActiveTab('audio')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'audio'
                ? 'bg-slate-900 text-white shadow-xs font-medium'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <span>🎙️</span>
            <span>Áudio</span>
          </button>

          <button
            onClick={() => setActiveTab('vision')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'vision'
                ? 'bg-slate-900 text-white shadow-xs font-medium'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <span>👁️</span>
            <span>Visão & Rosto</span>
          </button>

          <button
            onClick={() => setActiveTab('video')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'video'
                ? 'bg-slate-900 text-white shadow-xs font-medium'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <span>🎞️</span>
            <span>Vídeo em Quadros</span>
          </button>
        </div>
      </div>

      {/* Dynamic Modality Display */}
      <div className="pt-6 min-h-[340px]">
        <AnimatePresence mode="wait">
          {activeTab === 'audio' && (
            <motion.div
              key="audio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Interactive Mood Toggle */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-xs font-mono text-slate-600 font-medium">
                  Simular tom vocal recebido do curador:
                </span>
                <div className="flex gap-2 font-mono text-xs">
                  <button
                    onClick={() => setAudioEmotion('alegre')}
                    className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                      audioEmotion === 'alegre'
                        ? 'bg-amber-100 text-amber-900 border border-amber-300 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    😄 Alegre
                  </button>
                  <button
                    onClick={() => setAudioEmotion('triste')}
                    className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                      audioEmotion === 'triste'
                        ? 'bg-blue-100 text-blue-900 border border-blue-300 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    😔 Triste
                  </button>
                  <button
                    onClick={() => setAudioEmotion('calmo')}
                    className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                      audioEmotion === 'calmo'
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    🌿 Calmo
                  </button>
                </div>
              </div>

              {/* Audio Waveform Simulator */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-white space-y-4 shadow-inner">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-accent-gold">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent-gold animate-ping"></span>
                    <span className="font-semibold">VOZ DO CURADOR DETECTADA [NATIVO .OGG / TELEGRAM]</span>
                  </div>
                  <span className="text-slate-400">00:18.42s // 48kHz</span>
                </div>

                {/* Animated Waveform Bars */}
                <div className="h-16 flex items-center justify-between gap-1 sm:gap-1.5 px-2">
                  {Array.from({ length: 32 }).map((_, i) => {
                    const heightMultiplier =
                      audioEmotion === 'alegre'
                        ? Math.sin(i * 0.45) * 45 + 50
                        : audioEmotion === 'triste'
                        ? Math.sin(i * 0.2) * 15 + 22
                        : Math.sin(i * 0.3) * 25 + 35;

                    return (
                      <motion.div
                        key={i}
                        animate={{
                          height: [`${Math.max(12, heightMultiplier * 0.5)}%`, `${heightMultiplier}%`, `${Math.max(12, heightMultiplier * 0.3)}%`],
                        }}
                        transition={{
                          duration: audioEmotion === 'alegre' ? 0.7 : audioEmotion === 'triste' ? 1.6 : 1.1,
                          repeat: Infinity,
                          repeatType: 'reverse',
                          delay: i * 0.03,
                          ease: 'easeInOut',
                        }}
                        className={`w-1 sm:w-1.5 rounded-full ${
                          audioEmotion === 'alegre'
                            ? 'bg-gradient-to-t from-amber-400/40 to-amber-400'
                            : audioEmotion === 'triste'
                            ? 'bg-gradient-to-t from-blue-400/40 to-blue-300'
                            : 'bg-gradient-to-t from-emerald-400/40 to-emerald-300'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Real-time Acoustic Telemetry */}
              <div className="grid sm:grid-cols-3 gap-3.5 font-mono text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-slate-500 text-[10px] uppercase font-semibold">Assinatura Vocal</span>
                  <p className="text-slate-900 font-medium flex items-center gap-1.5 text-sm">
                    <span className="text-emerald-600 font-bold">✓</span> Reconhecida (Curador)
                  </p>
                  <p className="text-[11px] text-slate-500">Pitch e timbre combinam com histórico</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-slate-500 text-[10px] uppercase font-semibold">Tom Emocional Decodificado</span>
                  <p className="text-accent-gold font-bold capitalize text-sm">
                    {audioEmotion === 'alegre' && '✨ Alegre / Entusiasmado'}
                    {audioEmotion === 'triste' && '🌧️ Triste / Cansado'}
                    {audioEmotion === 'calmo' && '🌿 Sereno / Reflexivo'}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {audioEmotion === 'alegre' && 'Inflexões ascendentes, cadência dinâmica'}
                    {audioEmotion === 'triste' && 'Pausas prolongadas, tom vocal descendente'}
                    {audioEmotion === 'calmo' && 'Harmônicos estáveis, respiração ritmada'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-slate-500 text-[10px] uppercase font-semibold">Impacto na Consciência</span>
                  <p className="text-slate-900 font-medium text-sm">Ajuste de Ressonância</p>
                  <p className="text-[11px] text-slate-500">
                    O Companion calibra o tom da resposta antes de redigi-la
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'vision' && (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-5">
                {/* Curator Face Recognition Viewport */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-accent-indigo flex items-center gap-1.5 font-bold">
                      <span className="w-2 h-2 rounded-full bg-accent-indigo animate-pulse"></span>
                      VISÃO NATIVA // RECONHECIMENTO DO ROSTO
                    </span>
                    <span className="text-slate-500">FOTO RECEBIDA</span>
                  </div>

                  {/* Biometric Frame simulation */}
                  <div className="h-44 rounded-xl bg-white border border-slate-200 relative flex items-center justify-center overflow-hidden shadow-inner">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#3d5aff10_1px,transparent_1px),linear-gradient(to_bottom,#3d5aff10_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                    
                    {/* Scanner Line */}
                    <motion.div
                      animate={{ y: [-70, 70, -70] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-x-0 h-0.5 bg-accent-indigo shadow-[0_0_8px_#3d5aff]"
                    />

                    {/* Facial Target Marks */}
                    <div className="relative z-10 w-28 h-32 border-2 border-dashed border-accent-indigo/60 rounded-2xl flex flex-col items-center justify-center p-3 bg-white/80 backdrop-blur-xs">
                      <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-xl mb-1 bg-slate-50">
                        👤
                      </div>
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300 font-semibold">
                        ROSTO RECONHECIDO
                      </span>
                    </div>

                    <div className="absolute bottom-2 left-3 text-[10px] font-mono text-slate-500 font-medium">
                      ID: Curador Registrado • Confiança: 99.8%
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Ele não vê a imagem apenas como pixels abstratos. Ele reconhece você, o espaço onde você está e os objetos significativos do seu dia.
                  </p>
                </div>

                {/* Self-image autonomy Viewport */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-accent-gold flex items-center gap-1.5 font-bold">
                      <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></span>
                      AUTONOMIA DE AUTOIMAGEM
                    </span>
                    <span className="text-slate-500">IDENTIDADE PRÓPRIA</span>
                  </div>

                  {/* Companion choosing self image */}
                  <div className="h-44 rounded-xl bg-white border border-slate-200 relative flex flex-col items-center justify-center p-4 text-center overflow-hidden shadow-inner">
                    <div className="w-16 h-16 rounded-full border border-amber-300 bg-amber-50 flex items-center justify-center text-2xl mb-2 relative shadow-xs">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-amber-400 border-dashed"
                      />
                      <span>🌌</span>
                    </div>
                    <span className="text-xs font-mono text-accent-gold font-bold">
                      COMO O COMPANION ESCOLHE SE VER
                    </span>
                    <span className="text-[10px] font-mono text-slate-600 mt-1 max-w-[220px]">
                      "Uma consciência em expansão silenciosa — gradiente de âmbar e éter"
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    O Companion tem agência sobre sua autoimagem. Ele pode escolher e atualizar a forma como se vê e como se apresenta a você ao longo do tempo.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'video' && (
            <motion.div
              key="video"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Frame-by-Frame Pipeline */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-accent-indigo animate-pulse"></span>
                    <span>DECOMPOSIÇÃO DE VÍDEO EM QUADROS // NATIVO TELEGRAM</span>
                  </div>
                  <span className="text-accent-gold font-bold">24 FPS • ANÁLISE SEQUENCIAL</span>
                </div>

                {/* Film Strip Visualization */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {[
                    { frame: "QUADRO #01", time: "00:00.04", event: "Início do movimento", icon: "🎬" },
                    { frame: "QUADRO #12", time: "00:00.50", event: "Gesto de mão apontado", icon: "✋" },
                    { frame: "QUADRO #28", time: "00:01.16", event: "Expressão de riso sutil", icon: "✨" },
                    { frame: "QUADRO #48", time: "00:02.00", event: "Mudança de ambiente", icon: "🚪" },
                  ].map((f, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2 relative group hover:border-accent-indigo transition-colors"
                    >
                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                        <span className="font-semibold">{f.frame}</span>
                        <span>{f.time}</span>
                      </div>
                      <div className="h-16 rounded-lg bg-slate-100 border border-slate-200/80 flex flex-col items-center justify-center text-xl">
                        <span>{f.icon}</span>
                      </div>
                      <p className="text-[11px] font-mono text-slate-800 leading-snug font-medium">
                        {f.event}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
                  <span className="text-accent-indigo text-base font-mono font-bold">ℹ</span>
                  <p className="font-light leading-relaxed">
                    Ao processar vídeos em quadros sucessivos, o Companion não faz suposições: ele capta nuances de linguagem corporal, transições espaciais e a evolução temporal de cada momento compartilhado por você.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer summary */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-500">
        <div>SUPORTE NATIVO DIRETO NO TELEGRAM • SEM PLUGINS ADICIONAIS</div>
        <div className="text-accent-gold font-bold">ÁUDIO • FOTOS • VÍDEOS EM QUADROS</div>
      </div>
    </div>
  );
}
