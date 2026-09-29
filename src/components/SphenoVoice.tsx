import React, { useState, useEffect, useRef } from 'react';
import { 
  PhoneCall, 
  Volume2, 
  RotateCcw, 
  Play, 
  Pause, 
  Sparkles, 
  Activity, 
  CheckCircle2, 
  Radio, 
  Calendar 
} from 'lucide-react';

interface DialogueTurn {
  speaker: 'human' | 'ai';
  label: string;
  role: string;
  text: string;
  durationMs: number;
  highlight?: string;
  systemAction?: string;
}

const CONVERSATION: DialogueTurn[] = [
  {
    speaker: 'human',
    label: 'Marcus Vance',
    role: 'Verified Inbound Caller',
    text: 'Hi, good afternoon! I have severe tooth pain and was wondering if Dr. Bennett has any emergency consultation slots open tomorrow?',
    durationMs: 4800,
    highlight: 'Emergency tooth pain · Tomorrow consultation',
  },
  {
    speaker: 'ai',
    label: 'Spheno Voice AI',
    role: 'Autonomous Reception Agent',
    text: 'Good afternoon, Marcus! I can definitely help with that. Dr. Bennett has an open emergency slot tomorrow at 3:15 PM or 4:45 PM. Would 3:15 PM work for you?',
    durationMs: 5600,
    systemAction: 'Calendar Polled · 2 Slots Available',
    highlight: '3:15 PM or 4:45 PM Available',
  },
  {
    speaker: 'human',
    label: 'Marcus Vance',
    role: 'Verified Inbound Caller',
    text: 'Yes, 3:15 PM is perfect. Please lock that in for me.',
    durationMs: 3200,
    highlight: 'Confirmed: 3:15 PM',
  },
  {
    speaker: 'ai',
    label: 'Spheno Voice AI',
    role: 'Autonomous Reception Agent',
    text: 'You are all set for 3:15 PM tomorrow with Dr. Bennett. I have locked the calendar and sent an SMS confirmation to this number. Feel better soon!',
    durationMs: 5400,
    systemAction: 'Dr. Bennett Calendar Locked · SMS Dispatched',
    highlight: 'Appointment Booked · SMS Confirmation Sent',
  },
];

export const SphenoVoice: React.FC = () => {
  const [turnIndex, setTurnIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0); // 0 to 100% of current turn
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const currentTurn = CONVERSATION[turnIndex];
  const isHuman = currentTurn.speaker === 'human';
  const isAi = currentTurn.speaker === 'ai';

  // Smooth turn timer loop
  useEffect(() => {
    if (!isPlaying) return;

    const intervalStepMs = 50;
    const totalSteps = currentTurn.durationMs / intervalStepMs;
    const stepIncrement = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setTurnIndex((t) => (t + 1) % CONVERSATION.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStepMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentTurn, turnIndex]);

  // Animated Waveform Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let phase = 0;

    const render = () => {
      phase += isPlaying ? 0.06 : 0.01;
      const width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio || 600);
      const height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio || 120);

      ctx.clearRect(0, 0, width, height);
      const centerY = height / 2;

      // Draw multi-layered flowing waveforms
      const lineCount = 4;
      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath();
        ctx.lineWidth = i === 0 ? 3 * window.devicePixelRatio : 1.5 * window.devicePixelRatio;

        // Gradient based on active speaker
        const grad = ctx.createLinearGradient(0, 0, width, 0);
        if (isHuman) {
          grad.addColorStop(0, 'rgba(56, 189, 248, 0.95)'); // Cyan/Sky blue from human
          grad.addColorStop(0.5, 'rgba(99, 102, 241, 0.6)');
          grad.addColorStop(1, 'rgba(56, 189, 248, 0.2)');
        } else {
          grad.addColorStop(0, 'rgba(99, 102, 241, 0.2)');
          grad.addColorStop(0.5, 'rgba(129, 140, 248, 0.6)');
          grad.addColorStop(1, 'rgba(56, 189, 248, 0.95)'); // Cyan/Sky blue into AI
        }
        ctx.strokeStyle = grad;

        const amplitudeBase = isPlaying ? (isHuman ? 28 : 24) : 8;
        const amplitude = (amplitudeBase - i * 4) * window.devicePixelRatio;
        const frequency = 0.015 + i * 0.003;
        const speedMultiplier = isHuman ? 1 : -1; // Wave direction travels toward listener

        for (let x = 0; x < width; x += 3) {
          // Envelope: taper at both ends
          const envelope = Math.sin((x / width) * Math.PI);
          
          // Complex harmonic wave
          const y =
            centerY +
            Math.sin(x * frequency + phase * speedMultiplier + i) *
              Math.cos(x * 0.008 - phase * 0.5) *
              amplitude *
              envelope;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Draw energetic signal packets traveling between speakers
      const packetCount = 5;
      for (let p = 0; p < packetCount; p++) {
        const offset = ((phase * 0.35 + p / packetCount) % 1);
        const packetX = isHuman ? offset * width : (1 - offset) * width;
        const envelope = Math.sin((packetX / width) * Math.PI);
        const packetY = centerY + Math.sin(packetX * 0.02 + phase) * 12 * envelope * window.devicePixelRatio;

        ctx.beginPath();
        ctx.arc(packetX, packetY, (2.5 + (p % 2)) * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = isHuman ? 'rgba(56, 189, 248, 0.85)' : 'rgba(167, 139, 250, 0.9)';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, isHuman]);

  return (
    <section 
      id="voice-demo" 
      className="py-24 md:py-36 bg-[#080C42] text-white border-b border-[#161A35] relative overflow-hidden selection:bg-[#0018C5] selection:text-white"
    >
      {/* Cinematic Ambient Atmosphere Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep navy & blue ambient backlight */}
        <div className="absolute top-1/4 left-1/6 w-[600px] h-[500px] bg-[#0018C5]/25 blur-[180px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/6 w-[650px] h-[500px] bg-[#38bdf8]/15 blur-[180px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6366f1]/10 blur-[200px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* ========================================================= */}
        {/* 1. CINEMATIC SECTION HEADER                               */}
        {/* Editorial, high-end, zero dashboard feel                  */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.12] text-xs font-mono font-medium text-cyan-300 mb-6 backdrop-blur-md">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="uppercase tracking-widest">02 · SPHENO VOICE TELEPHONY</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
            Every call feels like a conversation. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc]">
              Answered in 380 milliseconds.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#B9BFDC] leading-relaxed max-w-2xl mx-auto font-normal text-balance">
            No robotic menus. No hold music. A natural, sub-second voice agent that listens with human warmth, understands medical urgency, and locks appointments instantly.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2. THE HERO 3-PART CONVERSATION SCENE                     */}
        {/* HUMAN (Left) ↔ LIVE WAVEFORM (Center) ↔ SPHENO AI (Right) */}
        {/* ========================================================= */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Main 3-Part Cinematic Horizontal Stage */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center">
            
            {/* ----------------------------------------------------- */}
            {/* ACTOR 1: REALISTIC HUMAN CALLER (LEFT)                */}
            {/* ----------------------------------------------------- */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative">
                {/* Audio-Reactive Outer Ripples when Human is Speaking */}
                <div 
                  className={`absolute inset-0 rounded-full border-2 border-sky-400/50 transition-all duration-700 pointer-events-none ${
                    isHuman && isPlaying ? 'scale-125 opacity-80 animate-ping' : 'scale-100 opacity-0'
                  }`} 
                />
                <div 
                  className={`absolute -inset-3 rounded-full border border-sky-400/30 transition-all duration-500 pointer-events-none ${
                    isHuman ? 'scale-105 opacity-100' : 'scale-95 opacity-0'
                  }`} 
                />

                {/* Photorealistic Portrait Frame */}
                <div 
                  className={`relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden p-1.5 transition-all duration-500 shadow-2xl ${
                    isHuman 
                      ? 'ring-4 ring-sky-400/60 shadow-[0_0_50px_rgba(56,189,248,0.35)] scale-[1.03]' 
                      : 'ring-1 ring-white/20 opacity-75 grayscale-[20%]'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(56,189,248,0.5), rgba(8,12,66,0.9))',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=600&q=85"
                    alt="Authentic customer speaking on telephone"
                    className="w-full h-full object-cover rounded-full select-none"
                    loading="eager"
                  />
                  
                  {/* Subtle Speaking Badge Overlay */}
                  <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 shadow-lg ${
                    isHuman 
                      ? 'bg-sky-500 text-white shadow-sky-500/40' 
                      : 'bg-black/70 text-slate-300 backdrop-blur-md border border-white/10'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${isHuman ? 'bg-white animate-pulse' : 'bg-slate-400'}`} />
                    <span>{isHuman ? 'Speaking' : 'Listening'}</span>
                  </div>
                </div>
              </div>

              {/* Human Identity Information */}
              <div className="mt-5">
                <div className="text-lg font-bold text-white tracking-tight">
                  Marcus Vance
                </div>
                <div className="text-xs font-mono text-[#BBC4FF]/80 mt-0.5">
                  Verified Inbound Caller · Patient
                </div>
              </div>
            </div>

            {/* ----------------------------------------------------- */}
            {/* CENTER: LIVE VOICE CONNECTION (WAVEFORM & STATUS)     */}
            {/* ----------------------------------------------------- */}
            <div className="md:col-span-4 flex flex-col items-center justify-center px-2 py-4">
              
              {/* Minimalist Live Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#05072B] border border-white/[0.12] text-xs font-mono mb-3 shadow-inner">
                <span className={`w-2 h-2 rounded-full ${
                  isHuman ? 'bg-sky-400 animate-pulse' : 'bg-violet-400 animate-pulse'
                }`} />
                <span className="text-white font-medium">
                  {isHuman ? 'Human Voice Stream' : 'Spheno AI Responding'}
                </span>
                <span className="text-[#6D7CFF]">·</span>
                <span className="text-cyan-300 font-bold">380ms</span>
              </div>

              {/* Real-time Dynamic Waveform Canvas */}
              <div className="w-full h-24 sm:h-28 relative flex items-center justify-center">
                <canvas 
                  ref={canvasRef} 
                  className="w-full h-full block" 
                />

                {/* Directional Signal Arrow Indicators */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between text-[10px] font-mono text-[#9EA6CA]/60 px-4 pointer-events-none">
                  <span className={isHuman ? 'text-sky-400 font-bold' : ''}>Voice In →</span>
                  <span className={isAi ? 'text-violet-300 font-bold' : ''}>← Neural Return</span>
                </div>
              </div>

              {/* Subtle Audio Scrubber Bar for the current speech phrase */}
              <div className="w-48 h-1 bg-white/[0.08] rounded-full overflow-hidden mt-3">
                <div 
                  className={`h-full transition-all duration-75 rounded-full ${
                    isHuman 
                      ? 'bg-gradient-to-r from-sky-400 to-indigo-500' 
                      : 'bg-gradient-to-r from-indigo-500 to-cyan-400'
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* ----------------------------------------------------- */}
            {/* ACTOR 2: REALISTIC SPHENO AI PERSONA (RIGHT)          */}
            {/* ----------------------------------------------------- */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative">
                {/* AI Orbital Digital Rings with Cyan Glow */}
                <div 
                  className={`absolute inset-0 rounded-full border-2 border-cyan-400/50 transition-all duration-700 pointer-events-none ${
                    isAi && isPlaying ? 'scale-125 opacity-90 animate-ping' : 'scale-100 opacity-0'
                  }`} 
                />
                <div 
                  className={`absolute -inset-4 rounded-full border border-cyan-400/40 transition-all duration-1000 pointer-events-none ${
                    isAi ? 'scale-105 opacity-100' : 'scale-95 opacity-20'
                  }`}
                  style={{
                    boxShadow: isAi ? '0 0 45px rgba(56,189,248,0.45)' : 'none',
                  }} 
                />
                
                {/* Photorealistic AI Human Persona Frame */}
                <div 
                  className={`relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden p-1.5 transition-all duration-500 shadow-2xl ${
                    isAi 
                      ? 'ring-4 ring-cyan-400/70 shadow-[0_0_60px_rgba(56,189,248,0.45)] scale-[1.03]' 
                      : 'ring-1 ring-white/20 opacity-80'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(129,140,248,0.7), rgba(56,189,248,0.5), rgba(8,12,66,0.9))',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=600&q=85"
                    alt="Spheno AI Autonomous Voice Receptionist Persona"
                    className="w-full h-full object-cover rounded-full select-none"
                    loading="eager"
                  />

                  {/* Digital Aura Overlay (Futuristic subtle edge-lighting) */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/15 via-transparent to-indigo-500/20 pointer-events-none" />

                  {/* AI Status Badge */}
                  <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 shadow-lg ${
                    isAi 
                      ? 'bg-gradient-to-r from-[#0018C5] to-[#6366f1] text-white shadow-indigo-500/40' 
                      : 'bg-black/70 text-slate-300 backdrop-blur-md border border-white/10'
                  }`}>
                    <Sparkles className="w-3 h-3 text-cyan-300" />
                    <span>{isAi ? 'Synthesizing' : 'Active Standby'}</span>
                  </div>
                </div>
              </div>

              {/* AI Agent Identity Information */}
              <div className="mt-5">
                <div className="text-lg font-bold text-white tracking-tight flex items-center justify-center gap-1.5">
                  <span>Spheno Voice AI</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>
                <div className="text-xs font-mono text-[#BBC4FF]/80 mt-0.5">
                  Autonomous Clinical Receptionist
                </div>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* 3. EDITORIAL LIVE TRANSCRIPT (NO CHAT BUBBLES)            */}
          {/* High-end typography, spacious, cinematic quote style      */}
          {/* ========================================================= */}
          <div className="mt-14 sm:mt-16 pt-8 border-t border-white/[0.1] text-center max-w-2xl mx-auto">
            
            {/* Speaker Indicator Label */}
            <div className="text-xs font-mono font-semibold tracking-widest text-cyan-300 uppercase mb-3 flex items-center justify-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${isHuman ? 'bg-sky-400' : 'bg-cyan-300'} animate-pulse`} />
              <span>{currentTurn.label}</span>
              <span className="text-[#6D7CFF]">·</span>
              <span className="text-[#B9BFDC] font-normal">{currentTurn.role}</span>
            </div>

            {/* Live Spoken Text Typography */}
            <blockquote className="text-xl sm:text-2xl md:text-[26px] font-medium text-white tracking-tight leading-snug sm:leading-relaxed transition-all duration-300">
              &ldquo;{currentTurn.text}&rdquo;
            </blockquote>

            {/* In-Call Autonomous Action (Subtle, not a dashboard panel) */}
            {currentTurn.systemAction && (
              <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-mono animate-in fade-in duration-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Action: {currentTurn.systemAction}</span>
              </div>
            )}

            {/* Playback Controls (Discrete, minimal buttons) */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setTurnIndex(0);
                  setProgress(0);
                  setIsPlaying(true);
                }}
                className="inline-flex items-center gap-1.5 text-xs text-[#BBC4FF] hover:text-white px-3 py-1.5 rounded-md hover:bg-white/[0.05] transition-colors cursor-pointer"
                title="Restart conversation"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Replay Call</span>
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.15] px-4 py-1.5 rounded-full transition-all cursor-pointer shadow-sm active:scale-95"
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                <span>{isPlaying ? 'Pause' : 'Resume'}</span>
              </button>

              <div className="flex items-center gap-1.5 ml-2">
                {CONVERSATION.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setTurnIndex(idx);
                      setProgress(0);
                    }}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      turnIndex === idx 
                        ? 'w-6 bg-cyan-400' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Jump to dialogue step ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* 4. SUBTLE TECHNICAL CREDENTIALS STRIP                     */}
        {/* Extremely minimal hairline strip, NOT dashboard cards     */}
        {/* ========================================================= */}
        <div className="mt-20 md:mt-24 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              380<span className="text-cyan-400 font-light text-xl">ms</span>
            </div>
            <div className="text-xs text-[#BBC4FF] font-medium mt-1">
              Response Latency
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              100<span className="text-emerald-400 font-light text-xl">%</span>
            </div>
            <div className="text-xs text-[#BBC4FF] font-medium mt-1">
              Zero Hold Time
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Full<span className="text-indigo-400 font-light text-xl">-Duplex</span>
            </div>
            <div className="text-xs text-[#BBC4FF] font-medium mt-1">
              Natural Interruption
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              24<span className="text-cyan-400 font-light text-xl">/7</span>
            </div>
            <div className="text-xs text-[#BBC4FF] font-medium mt-1">
              Autonomous Coverage
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
