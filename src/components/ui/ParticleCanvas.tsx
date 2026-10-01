import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  phase: number;
  layer: number;
  hue: string;
}

interface PulseWave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
}

export function ParticleCanvas({ interactive = true }: { interactive?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let pulseWaves: PulseWave[] = [];
    let mouse = { x: -1000, y: -1000, active: false };
    let lastPulseTime = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor(window.innerWidth / 15), 85);
      const w = window.innerWidth;
      const h = window.innerHeight;

      for (let i = 0; i < count; i++) {
        const layer = Math.random() > 0.4 ? 1 : 0;
        const colorType = Math.random();
        let hue = '100, 116, 139'; // slate-500
        if (colorType > 0.8) {
          hue = '45, 78, 224'; // accent-indigo
        } else if (colorType > 0.65) {
          hue = '180, 83, 9'; // accent-gold
        }

        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * (layer === 1 ? 0.35 : 0.15),
          vy: (Math.random() - 0.5) * (layer === 1 ? 0.35 : 0.15),
          size: layer === 1 ? Math.random() * 1.6 + 0.8 : Math.random() * 1.0 + 0.4,
          baseAlpha: layer === 1 ? Math.random() * 0.45 + 0.2 : Math.random() * 0.22 + 0.08,
          alpha: 0.25,
          phase: Math.random() * Math.PI * 2,
          layer,
          hue,
        });
      }
    };

    const triggerPulse = (x: number, y: number) => {
      pulseWaves.push({
        x,
        y,
        radius: 0,
        maxRadius: Math.max(window.innerWidth, window.innerHeight) * 0.6,
        alpha: 0.22,
        speed: 1.8,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      triggerPulse(e.clientX - rect.left, e.clientY - rect.top);
    };

    let time = 0;
    const draw = () => {
      time += 0.016;
      const w = window.innerWidth;
      const h = window.innerHeight;

      if (time - lastPulseTime > 7) {
        lastPulseTime = time;
        triggerPulse(w * (0.3 + Math.random() * 0.4), h * (0.3 + Math.random() * 0.4));
      }

      ctx.clearRect(0, 0, w, h);

      const bgRadial = ctx.createRadialGradient(
        w / 2, h / 2, 0,
        w / 2, h / 2, Math.max(w, h) * 0.8
      );
      bgRadial.addColorStop(0, 'rgba(45, 78, 224, 0.05)');
      bgRadial.addColorStop(0.5, 'rgba(180, 83, 9, 0.03)');
      bgRadial.addColorStop(1, 'rgba(248, 249, 252, 0)');
      ctx.fillStyle = bgRadial;
      ctx.fillRect(0, 0, w, h);

      for (let pIdx = pulseWaves.length - 1; pIdx >= 0; pIdx--) {
        const pulse = pulseWaves[pIdx];
        pulse.radius += pulse.speed;
        pulse.alpha = Math.max(0, pulse.alpha - 0.0012);

        ctx.save();
        ctx.beginPath();
        ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(45, 78, 224, ${pulse.alpha * 0.7})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();

        if (pulse.alpha <= 0 || pulse.radius >= pulse.maxRadius) {
          pulseWaves.splice(pIdx, 1);
        }
      }

      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const p = particles[i];

        p.x += p.vx + Math.sin(time + p.phase) * 0.1;
        p.y += p.vy + Math.cos(time + p.phase) * 0.1;

        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            p.x -= (dx / dist) * force * 1.5;
            p.y -= (dy / dist) * force * 1.5;
          }
        }

        p.alpha = p.baseAlpha + Math.sin(time * 1.5 + p.phase) * 0.15;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue}, ${Math.max(0.05, p.alpha)})`;
        ctx.fill();

        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 95;
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.15 * Math.min(p.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(100, 116, 139, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('click', handleClick);
    }

    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('click', handleClick);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto opacity-75 transition-opacity duration-1000"
    />
  );
}
