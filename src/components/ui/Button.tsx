import { motion, type HTMLMotionProps } from 'motion/react';
import React from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 rounded-xl cursor-pointer font-mono';
  
  const variants = {
    primary: 'bg-accent-indigo text-white hover:bg-indigo-700 shadow-md shadow-accent-indigo/20 hover:shadow-lg hover:shadow-accent-indigo/30 font-semibold',
    secondary: 'bg-white text-slate-800 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 shadow-xs',
    outline: 'bg-transparent text-accent-gold border border-accent-gold/60 hover:border-accent-gold hover:bg-accent-gold/10 font-semibold',
    accent: 'bg-slate-900 text-white hover:bg-slate-800 shadow-md font-semibold'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
