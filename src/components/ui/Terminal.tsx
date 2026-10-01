import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';

export function TerminalWindow({ children, title = "CDI RUNTIME" }: { children: React.ReactNode, title?: string }) {
  return (
    <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_15px_45px_rgba(0,0,0,0.06)] font-mono text-xs sm:text-sm w-full max-w-3xl mx-auto">
      <div className="flex items-center px-4 py-3 border-b border-slate-100 bg-slate-50/80">
        <div className="flex space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
        </div>
        <div className="mx-auto text-slate-500 text-xs font-mono tracking-widest">{title}</div>
      </div>
      <div className="p-6 sm:p-8 text-slate-800 space-y-4">
        {children}
      </div>
    </div>
  );
}

export function TerminalTyping({ text, delay = 0, onComplete }: { text: string, delay?: number, onComplete?: () => void }) {
  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasStarted) {
        setHasStarted(true);
      }
    }, { threshold: 0.1 });

    const element = document.getElementById(`typing-${text.substring(0, 5)}`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [hasStarted, text]);

  useEffect(() => {
    if (!hasStarted) return;

    let currentIndex = 0;
    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeNextCharacter, Math.random() * 30 + 20);
      } else if (onComplete) {
        onComplete();
      }
    };

    const initialDelay = setTimeout(typeNextCharacter, delay * 1000);
    return () => clearTimeout(initialDelay);
  }, [hasStarted, text, delay, onComplete]);

  return (
    <span id={`typing-${text.substring(0, 5)}`}>
      {displayedText}
      <span className="inline-block w-1.5 h-3.5 ml-1 bg-slate-400 animate-pulse align-middle" />
    </span>
  );
}
