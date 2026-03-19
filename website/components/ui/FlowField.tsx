"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  history: { x: number; y: number }[];
}

export const FlowField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    const particleCount = 2000;

    const initParticles = () => {
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        history: [],
      }));
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const getNoise = (x: number, y: number) => {
      // Simple pseudo-random/noise function for flow
      const scale = 0.01;
      return Math.sin(x * scale) * Math.cos(y * scale) * Math.PI * 2;
    };

    const animate = () => {
      // Darker, more persistent trails for high-contrast look
      ctx.fillStyle = resolvedTheme === "dark" ? "rgba(2, 2, 4, 0.08)" : "rgba(250, 250, 250, 0.05)";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        const angle = getNoise(p.x, p.y);
        
        // Attraction/Swerve logic
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distSq = dx * dx + dy * dy;
        const maxDist = 300;
        
        let forceX = Math.cos(angle);
        let forceY = Math.sin(angle);

        if (distSq < maxDist * maxDist) {
          const dist = Math.sqrt(distSq);
          const strength = (1 - dist / maxDist) * 0.5;
          forceX += (dx / dist) * strength;
          forceY += (dy / dist) * strength;
        }

        p.vx += forceX * 0.1;
        p.vy += forceY * 0.1;

        // Friction/Speed limit
        p.vx *= 0.95;
        p.vy *= 0.95;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.strokeStyle = resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)";
        ctx.lineWidth = 1;
        
        // Use history for smoother trails if needed, or just lines
        const prevX = p.x - p.vx;
        const prevY = p.y - p.vy;
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 h-full w-full pointer-events-none"
    />
  );
};
