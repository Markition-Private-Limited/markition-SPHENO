import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  PhoneCall, 
  Database, 
  MessageCircle, 
  Sparkles 
} from 'lucide-react';

interface SatelliteNode {
  id: string;
  name: string;
  role: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  position: 'top' | 'left' | 'bottom' | 'right';
  metric: string;
  metricLabel: string;
  flow: string;
}

const satelliteNodes: SatelliteNode[] = [
  {
    id: 'voice',
    name: 'SPHENO VOICE',
    role: 'Autonomous Telephone Receptionist',
    tagline: '380ms Sub-Sec',
    icon: PhoneCall,
    position: 'top',
    metric: '380ms',
    metricLabel: 'Telephone Latency',
    flow: 'PSTN Call → Speech-to-Intent → Instant Voice Generation → CRM Push',
  },
  {
    id: 'chat',
    name: 'SPHENO CHAT',
    role: 'Website Conversational Agent',
    tagline: '24/7 Web Triage',
    icon: MessageSquare,
    position: 'left',
    metric: '94.2%',
    metricLabel: 'Qualification Rate',
    flow: 'Web Query → Clinical Parsing → Slot Verified → Lead Stored',
  },
  {
    id: 'crm',
    name: 'SPHENO CRM',
    role: 'Unified Customer Memory',
    tagline: 'Unified Memory',
    icon: Database,
    position: 'bottom',
    metric: '100%',
    metricLabel: 'Attribution Sync',
    flow: 'Multi-Touch Ingestion → Pipeline Scoring → Nurture Trigger',
  },
  {
    id: 'whatsapp',
    name: 'SPHENO WHATSAPP AI',
    role: 'Proactive Conversion Agent',
    tagline: 'Proactive Nurture',
    icon: MessageCircle,
    position: 'right',
    metric: '89.1%',
    metricLabel: 'Message Open Rate',
    flow: 'Dropout Detected → Personalized WhatsApp Ping → Rescheduled',
  },
];

export const SphenoSystem: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('voice');

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Viewport intersection observer to pause animations when out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <section ref={sectionRef} id="system" className="py-24 md:py-36 bg-[#050827] text-white border-b border-[#161A35] relative overflow-hidden">
      
      {/* 1. ATMOSPHERIC COSMIC VORTEX & SPHENO NAVY/CYAN AMBIENCE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Center Blue/Cyan Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-[#0018C5]/25 via-[#2563EB]/20 to-[#00F2FE]/15 blur-[180px] rounded-full" />
        
        {/* Top/Side Atmospheric Flares */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[350px] bg-[#6D7CFF]/12 blur-[160px] rounded-full" />
        <div className="absolute top-20 right-1/4 w-[500px] h-[350px] bg-[#00F2FE]/10 blur-[160px] rounded-full" />

        {/* Gravitational Well 3D Perspective Grid */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #38BDF8 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Section Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#091535]/90 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="uppercase tracking-wider">UNIFIED SYSTEM TOPOLOGY</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] text-balance">
            Central core, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc]">
              four synchronized arms.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#B9BFDC] leading-relaxed font-normal text-balance">
            Spheno AI is not four disconnected tools glued together with third-party webhooks. It is a single, unified operating system where context flows seamlessly between chat, voice, customer records, and direct messaging.
          </p>
        </div>

        {/* 2. THE FUTURISTIC AI GRAVITATIONAL VORTEX & SATELLITE NODES */}
        <div className="relative w-full max-w-5xl mx-auto h-[480px] sm:h-[540px] md:h-[600px] flex items-center justify-center mb-16 select-none">
          
          {/* Gravitational Funnel Elliptical Grid Wireframe */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            {/* Concentric Elliptical Wireframe Rings in Cyan/Blue/Indigo */}
            <div className="w-[820px] h-[340px] border border-cyan-500/20 rounded-[50%] animate-pulse" style={{ animationDuration: '6s' }} />
            <div className="absolute w-[660px] h-[260px] border border-[#6D7CFF]/25 rounded-[50%]" />
            <div className="absolute w-[500px] h-[190px] border border-cyan-400/30 rounded-[50%]" />
            <div className="absolute w-[340px] h-[120px] border border-[#0018C5]/40 rounded-[50%]" />
            <div className="absolute w-[180px] h-[70px] border border-cyan-300/50 rounded-[50%]" />

            {/* Radiating Laser Perspective Lines */}
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#6D7CFF]/30 to-transparent rotate-12" />
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent -rotate-12" />
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#818CF8]/30 to-transparent rotate-25" />
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent -rotate-25" />
          </div>

          {/* SVG Connector Lines from Center Core to Satellite Nodes with Live Data Animation */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0018C5" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#2563EB" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#00F2FE" stopOpacity="0.8" />
              </linearGradient>

              {/* Soft luminous glow for moving data pulses */}
              <filter id="laserPulseGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Embedded CSS for GPU-accelerated continuous forward dash-stream & micro-responses */}
            <style>{`
              @keyframes sphenoSignalDash {
                from {
                  stroke-dashoffset: 36;
                }
                to {
                  stroke-dashoffset: 0;
                }
              }
              .spheno-signal-line {
                animation: sphenoSignalDash 5.5s linear infinite;
              }
              @keyframes sphenoCoreHeartbeat {
                0%, 100% { filter: drop-shadow(0 0 50px rgba(0, 210, 255, 0.7)); }
                12% { filter: drop-shadow(0 0 65px rgba(0, 242, 254, 0.9)); }
              }
              .spheno-core-pulse {
                animation: sphenoCoreHeartbeat 3.2s ease-in-out infinite;
              }
              @keyframes sphenoNodeArrival {
                0%, 82%, 100% { opacity: 0.9; }
                90% { opacity: 1; filter: drop-shadow(0 0 10px rgba(0, 242, 254, 0.6)); }
              }
              .spheno-node-pulse-chat { animation: sphenoNodeArrival 3.2s ease-in-out infinite 0s; }
              .spheno-node-pulse-voice { animation: sphenoNodeArrival 3.2s ease-in-out infinite 0.3s; }
              .spheno-node-pulse-crm { animation: sphenoNodeArrival 3.2s ease-in-out infinite 0.6s; }
              .spheno-node-pulse-whatsapp { animation: sphenoNodeArrival 3.2s ease-in-out infinite 0.9s; }
            `}</style>

            {/* 1. Underlying Base Connector Beams (Exact 4 Active Services) */}
            <path d="M 500 300 L 500 90" stroke="url(#laserGrad)" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.45" />
            <path d="M 500 300 L 160 300" stroke="url(#laserGrad)" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.45" />
            <path d="M 500 300 L 500 510" stroke="url(#laserGrad)" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.45" />
            <path d="M 500 300 L 840 300" stroke="url(#laserGrad)" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.45" />

            {/* 2. Forward-Moving Signal Dash Stream (Gentle 5.5s Linear Stream) */}
            <path d="M 500 300 L 500 90" stroke="url(#laserGrad)" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.85" className={!prefersReducedMotion && isVisible ? "spheno-signal-line" : ""} />
            <path d="M 500 300 L 160 300" stroke="url(#laserGrad)" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.85" className={!prefersReducedMotion && isVisible ? "spheno-signal-line" : ""} />
            <path d="M 500 300 L 500 510" stroke="url(#laserGrad)" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.85" className={!prefersReducedMotion && isVisible ? "spheno-signal-line" : ""} />
            <path d="M 500 300 L 840 300" stroke="url(#laserGrad)" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.85" className={!prefersReducedMotion && isVisible ? "spheno-signal-line" : ""} />

            {/* 3. Luminous Data Pulses (Traveling Live Signals: AI Core → Connected Product) */}
            {!prefersReducedMotion && isVisible && (
              <g>
                {/* Node 1: SPHENO CHAT (Starts 0s) */}
                <circle r="2.2" fill="#00F2FE" filter="url(#laserPulseGlow)">
                  <animateMotion path="M 500 300 L 160 300" dur="3.2s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0; 0.95; 0.95; 0" keyTimes="0; 0.12; 0.88; 1" dur="3.2s" begin="0s" repeatCount="indefinite" />
                </circle>
                <circle r="1.3" fill="#38BDF8" opacity="0.5">
                  <animateMotion path="M 500 300 L 160 300" dur="3.2s" begin="0.06s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0; 0.6; 0.6; 0" keyTimes="0; 0.12; 0.88; 1" dur="3.2s" begin="0.06s" repeatCount="indefinite" />
                </circle>

                {/* Node 2: SPHENO VOICE (+300ms) */}
                <circle r="2.2" fill="#00F2FE" filter="url(#laserPulseGlow)">
                  <animateMotion path="M 500 300 L 500 90" dur="3.2s" begin="0.3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0; 0.95; 0.95; 0" keyTimes="0; 0.12; 0.88; 1" dur="3.2s" begin="0.3s" repeatCount="indefinite" />
                </circle>
                <circle r="1.3" fill="#38BDF8" opacity="0.5">
                  <animateMotion path="M 500 300 L 500 90" dur="3.2s" begin="0.36s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0; 0.6; 0.6; 0" keyTimes="0; 0.12; 0.88; 1" dur="3.2s" begin="0.36s" repeatCount="indefinite" />
                </circle>

                {/* Node 3: SPHENO CRM (+600ms) */}
                <circle r="2.2" fill="#00F2FE" filter="url(#laserPulseGlow)">
                  <animateMotion path="M 500 300 L 500 510" dur="3.2s" begin="0.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0; 0.95; 0.95; 0" keyTimes="0; 0.12; 0.88; 1" dur="3.2s" begin="0.6s" repeatCount="indefinite" />
                </circle>
                <circle r="1.3" fill="#38BDF8" opacity="0.5">
                  <animateMotion path="M 500 300 L 500 510" dur="3.2s" begin="0.66s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0; 0.6; 0.6; 0" keyTimes="0; 0.12; 0.88; 1" dur="3.2s" begin="0.66s" repeatCount="indefinite" />
                </circle>

                {/* Node 4: SPHENO WHATSAPP AI (+900ms) */}
                <circle r="2.2" fill="#00F2FE" filter="url(#laserPulseGlow)">
                  <animateMotion path="M 500 300 L 840 300" dur="3.2s" begin="0.9s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0; 0.95; 0.95; 0" keyTimes="0; 0.12; 0.88; 1" dur="3.2s" begin="0.9s" repeatCount="indefinite" />
                </circle>
                <circle r="1.3" fill="#38BDF8" opacity="0.5">
                  <animateMotion path="M 500 300 L 840 300" dur="3.2s" begin="0.96s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0; 0.6; 0.6; 0" keyTimes="0; 0.12; 0.88; 1" dur="3.2s" begin="0.96s" repeatCount="indefinite" />
                </circle>

                {/* 4. Two-Way Signals: Periodic Inbound Telemetry Return (Product → AI Core) */}
                <circle r="1.7" fill="#818CF8" filter="url(#laserPulseGlow)">
                  <animateMotion path="M 160 300 L 500 300" dur="6.4s" begin="2.1s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0; 0.5; 0.5; 0" keyTimes="0; 0.12; 0.88; 1" dur="6.4s" begin="2.1s" repeatCount="indefinite" />
                </circle>
                <circle r="1.7" fill="#818CF8" filter="url(#laserPulseGlow)">
                  <animateMotion path="M 500 90 L 500 300" dur="6.4s" begin="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0; 0.5; 0.5; 0" keyTimes="0; 0.12; 0.88; 1" dur="6.4s" begin="2.5s" repeatCount="indefinite" />
                </circle>
                <circle r="1.7" fill="#818CF8" filter="url(#laserPulseGlow)">
                  <animateMotion path="M 500 510 L 500 300" dur="6.4s" begin="2.9s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0; 0.5; 0.5; 0" keyTimes="0; 0.12; 0.88; 1" dur="6.4s" begin="2.9s" repeatCount="indefinite" />
                </circle>
                <circle r="1.7" fill="#818CF8" filter="url(#laserPulseGlow)">
                  <animateMotion path="M 840 300 L 500 300" dur="6.4s" begin="3.3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0; 0.5; 0.5; 0" keyTimes="0; 0.12; 0.88; 1" dur="6.4s" begin="3.3s" repeatCount="indefinite" />
                </circle>
              </g>
            )}
          </svg>

          {/* RADIANT CENTER "AI" ORB (Spheno Brand Royal Blue / Vibrant Cyan Gradient) */}
          <div className="relative z-20 flex items-center justify-center">
            {/* Outer Glowing Pulsing Aura */}
            <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-r from-[#0018C5] via-[#2563EB] to-[#00F2FE] blur-xl opacity-60 animate-pulse" />
            
            {/* Outer Orbit Border Ring */}
            <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-cyan-400/40 animate-spin" style={{ animationDuration: '30s' }} />

            {/* Center Core Sphere */}
            <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#0018C5] via-[#1D4ED8] to-[#00D2FF] flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,210,255,0.7)] border-2 border-white/40 cursor-default transform hover:scale-105 transition-transform duration-300 ${!prefersReducedMotion && isVisible ? 'spheno-core-pulse' : ''}`}>
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-md">
                AI
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-cyan-200 tracking-widest uppercase mt-0.5">
                SPHENO
              </span>
            </div>
          </div>

          {/* SATELLITE NODES (4 Synchronized Surrounding Service Nodes) */}
          
          {/* Node 1: Top (SPHENO VOICE) */}
          <div 
            onClick={() => setSelectedNodeId('voice')}
            className={`absolute top-2 sm:top-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group transition-all duration-300 ${selectedNodeId === 'voice' ? 'scale-110' : 'hover:scale-105'}`}
          >
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#0018C5] to-[#00F2FE] shadow-[0_0_25px_rgba(0,242,254,0.4)] ${!prefersReducedMotion && isVisible ? 'spheno-node-pulse-voice' : ''}`}>
              <div className="w-full h-full rounded-full bg-[#090E2C] flex items-center justify-center text-white group-hover:bg-[#0D1540] transition-colors">
                <PhoneCall className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="hidden md:block text-center mt-1.5">
              <span className="text-sm font-bold text-white block">SPHENO VOICE</span>
              <span className="text-xs text-cyan-300 font-medium">380ms Sub-Sec</span>
            </div>
          </div>

          {/* Node 2: Left / Mid (SPHENO CHAT) */}
          <div 
            onClick={() => setSelectedNodeId('chat')}
            className={`absolute top-1/2 -translate-y-1/2 left-2 sm:left-14 z-20 flex items-center gap-3 cursor-pointer group transition-all duration-300 ${selectedNodeId === 'chat' ? 'scale-110' : 'hover:scale-105'}`}
          >
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#2563EB] to-[#38BDF8] shadow-[0_0_25px_rgba(56,189,248,0.4)] ${!prefersReducedMotion && isVisible ? 'spheno-node-pulse-chat' : ''}`}>
              <div className="w-full h-full rounded-full bg-[#090E2C] flex items-center justify-center text-white group-hover:bg-[#0D1540] transition-colors">
                <MessageSquare className="w-6 h-6 text-[#38BDF8] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="hidden md:block text-left">
              <span className="text-sm font-bold text-white block">SPHENO CHAT</span>
              <span className="text-xs text-cyan-300 font-medium">24/7 Web Triage</span>
            </div>
          </div>

          {/* Node 3: Bottom (SPHENO CRM) */}
          <div 
            onClick={() => setSelectedNodeId('crm')}
            className={`absolute bottom-2 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group transition-all duration-300 ${selectedNodeId === 'crm' ? 'scale-110' : 'hover:scale-105'}`}
          >
            <div className="hidden md:block text-center mb-1.5">
              <span className="text-sm font-bold text-white block">SPHENO CRM</span>
              <span className="text-xs text-indigo-300 font-medium">Unified Memory</span>
            </div>
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#6366F1] to-[#00F2FE] shadow-[0_0_25px_rgba(99,102,241,0.4)] ${!prefersReducedMotion && isVisible ? 'spheno-node-pulse-crm' : ''}`}>
              <div className="w-full h-full rounded-full bg-[#090E2C] flex items-center justify-center text-white group-hover:bg-[#0D1540] transition-colors">
                <Database className="w-6 h-6 text-[#818CF8] group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>

          {/* Node 4: Right / Mid (SPHENO WHATSAPP AI) */}
          <div 
            onClick={() => setSelectedNodeId('whatsapp')}
            className={`absolute top-1/2 -translate-y-1/2 right-2 sm:right-14 z-20 flex flex-row-reverse items-center gap-3 cursor-pointer group transition-all duration-300 ${selectedNodeId === 'whatsapp' ? 'scale-110' : 'hover:scale-105'}`}
          >
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#0018C5] to-[#00F2FE] shadow-[0_0_25px_rgba(0,242,254,0.4)] ${!prefersReducedMotion && isVisible ? 'spheno-node-pulse-whatsapp' : ''}`}>
              <div className="w-full h-full rounded-full bg-[#090E2C] flex items-center justify-center text-white group-hover:bg-[#0D1540] transition-colors">
                <MessageCircle className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="hidden md:block text-right">
              <span className="text-sm font-bold text-white block">SPHENO WHATSAPP AI</span>
              <span className="text-xs text-cyan-300 font-medium">Proactive Nurture</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
