import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT_NAME } from '../config';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { num: "01", label: "O Conceito", href: "#conceito", desc: "A premissa da convivência" },
    { num: "02", label: "O Despertar", href: "#despertar", desc: "Sequência de inicialização" },
    { num: "03", label: "Existência & Drives", href: "#existencia", desc: "19 processos endógenos" },
    { num: "04", label: "Telemetria & Status", href: "#status", desc: "Comando nativo em tempo real" },
    { num: "05", label: "Observatório Técnico", href: "#observatorio", desc: "Ciclos cognitivos e CSE" },
    { num: "06", label: "Evolução & Rede", href: "#evolucao", desc: "Divergência biográfica" },
    { num: "07", label: "Personalização", href: "#personalizacao", desc: "Calibração da semente" },
    { num: "08", label: "Templates", href: "#templates", desc: "Sementes conceituais" },
    { num: "09", label: "Diferença & Concorrentes", href: "#diferenca", desc: "Comparação factual de mercado" },
    { num: "10", label: "O Fundador", href: "#fundador", desc: "Relato pessoal e WhatsApp" },
    { num: "11", label: "Como Funciona & FAQ", href: "#como-funciona", desc: "Passo a passo e dúvidas" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] py-3.5'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Brand & Telemetry Indicator */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-indigo shadow-[0_0_12px_rgba(45,78,224,0.6)]"></span>
              <span className="absolute w-4 h-4 rounded-full border border-accent-indigo/60 animate-ping"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm tracking-[0.25em] font-medium text-slate-900 group-hover:text-accent-indigo transition-colors font-mono">
                {PRODUCT_NAME.toUpperCase()}
              </span>
              <span className="text-[9px] tracking-[0.2em] font-mono text-slate-500">
                RUNTIME AUTÔNOMO • 24/7
              </span>
            </div>
          </a>

          {/* Unified Menu Toggle (Desktop & Mobile) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/90 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs text-slate-800 transition-all duration-200 cursor-pointer group"
              aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            >
              <span className="text-xs font-mono tracking-[0.2em] font-medium text-slate-700 group-hover:text-slate-900">
                {menuOpen ? "FECHAR" : "MENU"}
              </span>
              <div className="w-4 h-4 flex flex-col justify-center items-center gap-1">
                <span
                  className={`w-3.5 h-[1.5px] bg-slate-700 transition-transform duration-300 ${
                    menuOpen ? 'rotate-45 translate-y-[3px]' : ''
                  }`}
                ></span>
                <span
                  className={`w-3.5 h-[1.5px] bg-slate-700 transition-transform duration-300 ${
                    menuOpen ? '-rotate-45 -translate-y-[2.5px]' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Dropdown Menu (Unified for Desktop and Mobile) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-2xl overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-8 sm:py-10">
                
                {/* Header label in menu */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 text-xs font-mono text-slate-400 uppercase tracking-widest">
                  <span>ÍNDICE DE NAVEGAÇÃO // SEÇÕES DA PÁGINA</span>
                  <span>10 SEÇÕES</span>
                </div>

                {/* 2-column grid on tablet/desktop, 1-column on mobile */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-indigo-300 hover:shadow-sm transition-all duration-200 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <span className="text-[10px] font-mono text-accent-indigo font-bold px-2 py-0.5 rounded bg-indigo-50 border border-indigo-200/70 shrink-0">
                          {link.num}
                        </span>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-slate-800 group-hover:text-accent-indigo transition-colors truncate">
                            {link.label}
                          </div>
                          <div className="text-[11px] text-slate-500 font-light truncate">
                            {link.desc}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-400 group-hover:text-accent-indigo group-hover:translate-x-1 transition-all pl-2 shrink-0">
                        →
                      </span>
                    </a>
                  ))}
                </div>

                {/* Footer bar inside menu */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs font-mono text-slate-500 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>ACESSO DE LANÇAMENTO • R$ 69,90/MÊS</span>
                  </div>
                  <a
                    href="#oferta"
                    onClick={() => setMenuOpen(false)}
                    className="text-accent-indigo hover:underline font-semibold"
                  >
                    IR PARA A OFERTA ↓
                  </a>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop overlay when menu is open */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-xs z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
}
