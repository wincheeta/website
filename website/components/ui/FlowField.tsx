"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
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
    const particleCount = 1200; // Increased for "busyness"

    const initParticles = () => {
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
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
      const scale = 0.015;
      return Math.sin(x * scale) * Math.cos(y * scale) * Math.PI * 4;
    };

    const animate = () => {
      // More aggressive clearing for a more stable background
      ctx.fillStyle = resolvedTheme === "dark" ? "rgba(2, 2, 4, 0.15)" : "rgba(255, 255, 255, 0.15)";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        const currentAngle = getNoise(p.x, p.y);

        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distSq = dx * dx + dy * dy;
        const maxDist = 350;
        
        let forceX = Math.cos(currentAngle);
        let forceY = Math.sin(currentAngle);

        if (distSq < maxDist * maxDist) {
          const dist = Math.sqrt(distSq);
          const strength = Math.pow(1 - dist / maxDist, 2) * 2.5;
          // Epsilon (0.1) added to dist to prevent NaN (Division by Zero)
          forceX += (dx / (dist + 0.1)) * strength;
          forceY += (dy / (dist + 0.1)) * strength;
        }

        p.vx += forceX * 0.15;
        p.vy += forceY * 0.15;

        p.vx *= 0.92;
        p.vy *= 0.92;

        // Speed floor: Keep them busy
        const speedSq = p.vx * p.vx + p.vy * p.vy;
        if (speedSq < 0.25) { // speed < 0.5
          p.vx += (Math.random() - 0.5) * 0.5;
          p.vy += (Math.random() - 0.5) * 0.5;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
// Draw particle
ctx.beginPath();
// Fainter particles to ensure text readability
ctx.strokeStyle = resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(59, 130, 246, 0.05)";
ctx.lineWidth = 1;

        
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
