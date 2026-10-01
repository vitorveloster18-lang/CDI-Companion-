import React from 'react';
import { FadeIn } from './ui/FadeIn';

interface QuoteSeparatorProps {
  quote: string;
  author: string;
  details: string[];
}

export function QuoteSeparator({ quote, author, details }: QuoteSeparatorProps) {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div
            className="rounded-2xl shadow-xl relative overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: '#0f0f1a',
              padding: '48px',
              borderLeft: '2px solid #3d5aff',
            }}
          >
            {/* Ambient light glow inside dark container */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3d5aff]/5 rounded-full blur-3xl pointer-events-none"></div>

            <blockquote
              className="text-xl sm:text-2xl md:text-3xl italic font-light leading-relaxed mb-6 whitespace-pre-line tracking-tight"
              style={{ color: '#c4a44a' }}
            >
              &ldquo;{quote}&rdquo;
            </blockquote>

            <div className="space-y-1 text-xs sm:text-sm font-mono" style={{ color: '#888899' }}>
              <div className="font-semibold text-slate-300">
                — {author}
              </div>
              {details.map((detail, idx) => (
                <div key={idx} className="leading-snug">
                  {detail}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
