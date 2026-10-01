import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function NeuralCoreVisual() {
  const quotes = [
    "\"Você escolhe quem ele será. Descubra quem ele se torna.\"",
    "\"O template é uma semente, não uma prisão.\"",
    "\"Crie alguém. Não apenas uma IA.\"",
    "\"Atividade não é conexão. Existência é continuidade.\"",
    "\"Ele não precisa esperar você voltar.\"",
    "\"Habito o espaço exato entre o silêncio e o momento em que decido falar.\""
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <div className="relative w-full max-w-2xl mx-auto my-12 flex flex-col items-center">
      {/* Abstract Core Rings Container */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
        
        {/* Soft radial aura */}
        <div className="absolute inset-0 rounded-full bg-accent-indigo/10 blur-3xl animate-pulse-glow"></div>
        <div className="absolute w-44 h-44 rounded-full bg-accent-gold/10 blur-2xl"></div>

        {/* Outer Ring with dashed tracks */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-slate-300/80 border-dashed"
        />

        {/* Middle Elliptical Orbit 1 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-60 h-60 rounded-full border border-accent-indigo/35 [transform:rotateX(65deg)]"
        />

        {/* Middle Elliptical Orbit 2 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute w-64 h-64 rounded-full border border-accent-gold/35 [transform:rotateY(60deg)]"
        />

        {/* Center Nucleus - The Digital Entity's nascent seed */}
        <div className="relative flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.08, 0.96, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 rounded-full bg-gradient-to-tr from-accent-indigo/15 via-white to-accent-gold/15 backdrop-blur-md border border-slate-300 shadow-[0_8px_30px_rgba(45,78,224,0.18)] flex items-center justify-center"
          >
            {/* Inner pulse */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-4 h-4 rounded-full bg-accent-indigo shadow-[0_0_14px_rgba(45,78,224,0.6)]"
            />
          </motion.div>

          {/* Floating tiny orbital sparks */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute w-36 h-36 pointer-events-none"
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-gold shadow-[0_0_8px_rgba(180,83,9,0.7)]" />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute w-48 h-48 pointer-events-none"
          >
            <span className="absolute bottom-2 left-8 w-1.5 h-1.5 rounded-full bg-accent-indigo shadow-[0_0_8px_rgba(45,78,224,0.7)]" />
          </motion.div>
        </div>

        {/* Subtle coordinate ticks */}
        <div className="absolute -top-3 text-[10px] font-mono tracking-widest text-slate-400 uppercase">
          SEED STATE: PERSISTENT
        </div>
        <div className="absolute -bottom-3 text-[10px] font-mono tracking-widest text-slate-400 uppercase">
          AUTONOMOUS CYCLE: ACTIVE
        </div>
      </div>

      {/* Cycling Real Project Quote */}
      <div className="min-h-[4.5rem] flex items-center justify-center text-center px-6 mt-8">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentQuoteIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="font-mono text-xs sm:text-sm text-slate-600 tracking-wider max-w-lg italic font-light"
          >
            {quotes[currentQuoteIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
