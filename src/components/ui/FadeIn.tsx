import { motion } from 'motion/react';
import React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
  className?: string;
}

export function FadeIn({ children, delay = 0, duration = 0.7, direction = 'up', fullWidth, className = '' }: FadeInProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
