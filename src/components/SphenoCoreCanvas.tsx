import React, { useEffect, useRef, useState } from 'react';

interface SphenoCoreCanvasProps {
  activeNode?: string;
  onSelectNode?: (nodeName: string) => void;
}

export const SphenoCoreCanvas: React.FC<SphenoCoreCanvasProps> = ({
  activeNode,
  onSelectNode,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mouseTarget = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseTarget.current = {
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      };
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    let currentX = 0;
    let currentY = 0;
    let visible = true;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.parentElement?.clientWidth || 600;
      const height = canvas.parentElement?.clientHeight || 600;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const io =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { rootMargin: '200px' })
        : null;
    if (io && containerRef.current) io.observe(containerRef.current);

    // Nodes definition: 4 connected products
    const nodes = [
      { name: 'Spheno Chat', angle: -Math.PI / 4, dist: 180, tag: '01' },
      { name: 'Spheno Voice', angle: (3 * Math.PI) / 4, dist: 180, tag: '02' },
      { name: 'Spheno CRM', angle: Math.PI / 4, dist: 190, tag: '03' },
      { name: 'Spheno WhatsApp AI', angle: (-3 * Math.PI) / 4, dist: 190, tag: '04' },
    ];

    const particles: { r: number; theta: number; speed: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        r: 60 + Math.random() * 140,
        theta: Math.random() * Math.PI * 2,
        speed: (Math.random() - 0.5) * 0.008,
        size: 1 + Math.random() * 2,
        alpha: 0.2 + Math.random() * 0.6,
      });
    }

    const render = () => {
      if (!visible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.012;
      currentX += (mouseTarget.current.x - currentX) * 0.05;
      currentY += (mouseTarget.current.y - currentY) * 0.05;

      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      const cx = w / 2 + currentX * 18;
      const cy = h / 2 + currentY * 18;

      ctx.clearRect(0, 0, w, h);

      // 1. Ambient blue glow gradient in center
      const radialGlow = ctx.createRadialGradient(cx, cy, 10, cx, cy, 260);
      radialGlow.addColorStop(0, 'rgba(0, 24, 197, 0.35)');
      radialGlow.addColorStop(0.4, 'rgba(109, 124, 255, 0.12)');
      radialGlow.addColorStop(1, 'rgba(8, 12, 66, 0)');
      ctx.fillStyle = radialGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, 260, 0, Math.PI * 2);
      ctx.fill();

      // 2. Concentric geometric technical rings
      const rings = [
        { radius: 65, dash: [4, 8], speed: 0.004, stroke: 'rgba(187, 196, 255, 0.25)', width: 1 },
        { radius: 110, dash: [2, 12], speed: -0.003, stroke: 'rgba(109, 124, 255, 0.2)', width: 1 },
        { radius: 155, dash: [1, 16], speed: 0.002, stroke: 'rgba(0, 24, 197, 0.35)', width: 1.2 },
        { radius: 215, dash: [6, 20], speed: -0.0015, stroke: 'rgba(255, 255, 255, 0.12)', width: 1 },
      ];

      rings.forEach((ring) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * ring.speed * 20);
        ctx.beginPath();
        ctx.arc(0, 0, ring.radius, 0, Math.PI * 2);
        ctx.strokeStyle = ring.stroke;
        ctx.lineWidth = ring.width;
        ctx.setLineDash(ring.dash);
        ctx.stroke();
        ctx.restore();
      });

      // 3. Technical ticks around the middle ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-time * 0.05);
      for (let i = 0; i < 36; i++) {
        const rad = (i * Math.PI * 2) / 36;
        const innerR = i % 3 === 0 ? 104 : 107;
        const outerR = 112;
        ctx.beginPath();
        ctx.moveTo(Math.cos(rad) * innerR, Math.sin(rad) * innerR);
        ctx.lineTo(Math.cos(rad) * outerR, Math.sin(rad) * outerR);
        ctx.strokeStyle = i % 3 === 0 ? 'rgba(187, 196, 255, 0.45)' : 'rgba(109, 124, 255, 0.15)';
        ctx.lineWidth = i % 3 === 0 ? 1.5 : 1;
        ctx.stroke();
      }
      ctx.restore();

      // 4. Subtle particles orbiting
      particles.forEach((p) => {
        p.theta += p.speed;
        const px = cx + Math.cos(p.theta) * p.r;
        const py = cy + Math.sin(p.theta) * p.r;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(187, 196, 255, ${p.alpha})`;
        ctx.fill();
      });

      // 5. Connecting lines and nodes to 4 Products
      nodes.forEach((n, idx) => {
        const currentAngle = n.angle + Math.sin(time * 0.5 + idx) * 0.05;
        const nx = cx + Math.cos(currentAngle) * n.dist;
        const ny = cy + Math.sin(currentAngle) * n.dist;

        // Dynamic connection line
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = 'rgba(109, 124, 255, 0.28)';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([3, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Animated traveling data packet along vector
        const progress = (time * 0.6 + idx * 0.25) % 1;
        const packetX = cx + (nx - cx) * progress;
        const packetY = cy + (ny - cy) * progress;

        ctx.beginPath();
        ctx.arc(packetX, packetY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = '#6D7CFF';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Satellite Node Box
        const isSelected = activeNode === n.name;
        ctx.save();
        ctx.translate(nx, ny);

        // Node halo
        ctx.beginPath();
        ctx.arc(0, 0, isSelected ? 22 : 18, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? 'rgba(0, 24, 197, 0.6)' : 'rgba(9, 12, 57, 0.85)';
        ctx.strokeStyle = isSelected ? '#BBC4FF' : 'rgba(109, 124, 255, 0.4)';
        ctx.lineWidth = isSelected ? 2 : 1.2;
        ctx.fill();
        ctx.stroke();

        // Node center pip
        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? '#FFFFFF' : '#6D7CFF';
        ctx.fill();

        ctx.restore();
      });

      // 6. Central SPHENO AI CORE
      // Outer core shell
      ctx.beginPath();
      ctx.arc(cx, cy, 48, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(9, 12, 57, 0.95)';
      ctx.strokeStyle = 'rgba(187, 196, 255, 0.5)';
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();

      // Inner glowing core
      const coreGradient = ctx.createRadialGradient(cx, cy, 2, cx, cy, 38);
      coreGradient.addColorStop(0, '#FFFFFF');
      coreGradient.addColorStop(0.3, '#6D7CFF');
      coreGradient.addColorStop(0.8, '#0018C5');
      coreGradient.addColorStop(1, '#080C42');

      ctx.beginPath();
      ctx.arc(cx, cy, 36 + Math.sin(time * 2) * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = coreGradient;
      ctx.fill();

      // Subtle core geometric facet lines
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(time * 0.2);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const rad = (i * Math.PI) / 3;
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(rad) * 32, Math.sin(rad) * 32);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      if (io) io.disconnect();
    };
  }, [activeNode]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[540px] mx-auto flex items-center justify-center select-none"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-crosshair" />

      {/* HTML Overlays for crisp Node Labels */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Chat - Top Right */}
        <div 
          onClick={() => onSelectNode && onSelectNode('Spheno Chat')}
          className="absolute top-[16%] right-[10%] pointer-events-auto cursor-pointer group"
        >
          <div className="bg-[#090C39]/90 backdrop-blur-sm border border-[#202449] hover:border-[#6D7CFF] px-3 py-1.5 rounded-md transition-all shadow-lg group-hover:scale-105">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#BBC4FF]">01 · AGENT</div>
            <div className="text-xs font-semibold text-white whitespace-nowrap">Spheno Chat</div>
          </div>
        </div>

        {/* Voice - Bottom Left */}
        <div 
          onClick={() => onSelectNode && onSelectNode('Spheno Voice')}
          className="absolute bottom-[16%] left-[8%] pointer-events-auto cursor-pointer group"
        >
          <div className="bg-[#090C39]/90 backdrop-blur-sm border border-[#202449] hover:border-[#6D7CFF] px-3 py-1.5 rounded-md transition-all shadow-lg group-hover:scale-105">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#BBC4FF]">02 · VOICE</div>
            <div className="text-xs font-semibold text-white whitespace-nowrap">Spheno Voice</div>
          </div>
        </div>

        {/* CRM - Bottom Right */}
        <div 
          onClick={() => onSelectNode && onSelectNode('Spheno CRM')}
          className="absolute bottom-[18%] right-[12%] pointer-events-auto cursor-pointer group"
        >
          <div className="bg-[#090C39]/90 backdrop-blur-sm border border-[#202449] hover:border-[#6D7CFF] px-3 py-1.5 rounded-md transition-all shadow-lg group-hover:scale-105">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#BBC4FF]">03 · INTELLIGENCE</div>
            <div className="text-xs font-semibold text-white whitespace-nowrap">Spheno CRM</div>
          </div>
        </div>

        {/* WhatsApp - Top Left */}
        <div 
          onClick={() => onSelectNode && onSelectNode('Spheno WhatsApp AI')}
          className="absolute top-[18%] left-[10%] pointer-events-auto cursor-pointer group"
        >
          <div className="bg-[#090C39]/90 backdrop-blur-sm border border-[#202449] hover:border-[#6D7CFF] px-3 py-1.5 rounded-md transition-all shadow-lg group-hover:scale-105">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#BBC4FF]">04 · ENGAGEMENT</div>
            <div className="text-xs font-semibold text-white whitespace-nowrap">Spheno WhatsApp AI</div>
          </div>
        </div>

        {/* Center Label Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-14 pointer-events-none">
          <div className="text-xs tracking-wider text-[#BBC4FF] font-semibold uppercase bg-[#080C42]/80 px-2 py-0.5 rounded border border-[#161A35]">
            Core System
          </div>
        </div>
      </div>
    </div>
  );
};
