import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, 
  CheckCheck, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  RotateCcw, 
  Play, 
  Pause, 
  ShieldCheck, 
  Sparkles, 
  Phone, 
  Video, 
  MoreVertical, 
  Paperclip, 
  Smile, 
  Mic, 
  Send, 
  ArrowRight, 
  ChevronRight,
  UserCheck,
  Check,
  Zap,
  Activity,
  MapPin,
  Music,
  ExternalLink,
  Volume2,
  Navigation,
  ChevronLeft
} from 'lucide-react';

interface WorkflowStep {
  id: number;
  label: string;
  title: string;
  timeOffset: string;
  description: string;
  systemAction: string;
  badge: string;
  badgeColor: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    label: '01',
    title: 'Lead Detected',
    timeOffset: 'Day 0 · 8:15 PM',
    description: 'Visitor reviewed Aesthetic Dental Implant pricing page for 4 minutes then exited without submitting booking.',
    systemAction: 'Session Abandonment Triggered · Intent Score: 92/100',
    badge: 'Intent Triggered',
    badgeColor: 'border-amber-500/30 text-amber-300 bg-amber-500/10',
  },
  {
    id: 2,
    label: '02',
    title: 'AI Re-engagement',
    timeOffset: 'Day 1 · 10:00 AM',
    description: 'Spheno AI initiates personalized 1-on-1 outreach referencing the exact treatment guide viewed.',
    systemAction: 'Contextual WhatsApp Dispatch · Sub-Second Delivery',
    badge: 'Outreach Dispatched',
    badgeColor: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10',
  },
  {
    id: 3,
    label: '03',
    title: 'Customer Response',
    timeOffset: 'Day 1 · 10:42 AM',
    description: 'Prospect replies inquiring about procedure duration and Saturday availability.',
    systemAction: 'NLP Semantic Parse · Clinical Extraction Active',
    badge: 'High Intent Reply',
    badgeColor: 'border-blue-400/30 text-blue-300 bg-blue-500/10',
  },
  {
    id: 4,
    label: '04',
    title: 'Qualification & Booking',
    timeOffset: 'Day 1 · 10:43 AM',
    description: 'AI addresses timing concern, queries doctor calendar, and holds the 11:15 AM slot.',
    systemAction: 'Calendar Lock · Sub-400ms Availability Query',
    badge: 'Slot Locked',
    badgeColor: 'border-indigo-400/30 text-indigo-300 bg-indigo-500/10',
  },
  {
    id: 5,
    label: '05',
    title: 'CRM Update',
    timeOffset: 'Day 1 · 10:45 AM',
    description: 'Julian confirms appointment. Spheno automatically commits appointment to EMR and updates CRM pipeline.',
    systemAction: 'EMR Sync Verified · Opportunity Won (+$5,200)',
    badge: 'Conversion Complete',
    badgeColor: 'border-emerald-400/30 text-emerald-300 bg-emerald-500/10',
  },
];

export const SphenoWhatsApp: React.FC = () => {
  // Current active step in workflow & chat (1 to 5)
  const [activeStep, setActiveStep] = useState<number>(5);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  
  // Interactive voice note player state
  const [isVoicePlaying, setIsVoicePlaying] = useState<boolean>(false);
  const [voiceProgress, setVoiceProgress] = useState<number>(38);
  
  // Interactive list selection state
  const [selectedOption, setSelectedOption] = useState<string>('sat-1115');

  const chatScrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-play timer for presentation simulation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= 5) {
            setIsPlaying(false);
            return 5;
          }
          return prev + 1;
        });
      }, 3400);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Handle voice note animation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isVoicePlaying) {
      interval = setInterval(() => {
        setVoiceProgress((prev) => (prev >= 100 ? 0 : prev + 6));
      }, 250);
    }
    return () => clearInterval(interval);
  }, [isVoicePlaying]);

  // Show realistic typing indicator briefly when changing step forward
  const handleSelectStep = (stepNumber: number) => {
    if (stepNumber > activeStep) {
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 800);
    } else {
      setIsTyping(false);
    }
    setActiveStep(stepNumber);
    setIsPlaying(false);
  };

  const handleRestart = () => {
    setActiveStep(1);
    setIsPlaying(true);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1200);
  };

  // Scroll chat bottom smoothly when activeStep advances
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTo({
        top: chatScrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [activeStep, isTyping]);

  return (
    <section 
      id="whatsapp-agent"
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#080C42] text-white border-b border-[#161A35] relative overflow-hidden selection:bg-[#0018C5] selection:text-white"
    >
      {/* 1. ATMOSPHERIC AMBIENT GLOW & TECH SUB-GRID */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Indigo / Blue Central Glow */}
        <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-[#0018C5]/20 blur-[180px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-[#6C2CFF]/15 blur-[160px] rounded-full" />

        {/* Micro Technical Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* 2. SECTION HEADER (Editorial & Preserved Brand Content) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-3xl">
            {/* Numbered Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050625] border border-[#6D7CFF]/30 text-xs font-semibold text-[#BBC4FF] mb-4 shadow-sm">
              <span className="font-mono text-[#6D7CFF] font-bold">04</span>
              <span className="text-[#6D7CFF]">·</span>
              <span className="uppercase tracking-wider font-mono">SPHENO WHATSAPP AI</span>
            </div>

            {/* Headline with Signature Gradient */}
            <h2 className="headline-section text-white text-balance text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1]">
              Turn passive inquiries into <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc]">
                booked appointments on WhatsApp.
              </span>
            </h2>

            {/* Lead Paragraph */}
            <p className="body-lead text-[#B9BFDC] mt-4 max-w-2xl leading-relaxed text-base sm:text-lg">
              When a visitor leaves without booking, Spheno WhatsApp AI automatically re-engages them on their preferred channel. No generic blast spam—only context-aware, 1-on-1 conversations that overcome hesitations and lock in the consultation.
            </p>
          </div>

          {/* Interactive Simulation Controls */}
          <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-[#050625]/80 border border-[#6D7CFF]/20 backdrop-blur-md self-start lg:self-end">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3.5 py-2 rounded-xl bg-[#0018C5] hover:bg-[#0015b0] text-white text-xs font-bold font-mono inline-flex items-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-[0_0_15px_rgba(0,24,197,0.6)]"
              aria-label={isPlaying ? 'Pause conversation simulation' : 'Auto play conversation simulation'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>PAUSE FLOW</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>SIMULATE FLOW</span>
                </>
              )}
            </button>

            <button
              onClick={handleRestart}
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#BBC4FF] hover:text-white text-xs transition-colors cursor-pointer"
              title="Restart from Step 1"
              aria-label="Restart simulation from Step 1"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-[#080C42] rounded-lg border border-white/[0.06] text-xs font-mono text-[#8B98D9]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>STAGE 0{activeStep}/05</span>
            </div>
          </div>
        </div>

        {/* 3. CORE ARCHITECTURE: LEFT WORKFLOW ↔ RIGHT AUTHENTIC WHATSAPP PHONE MOCKUP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN (Cols 1-5): ONE CLEAN VERTICAL TIMELINE       */}
          {/* ========================================================= */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col space-y-7">
            
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-[16px] font-semibold text-white tracking-normal">
                    Autonomous Workflow Pipeline
                  </span>
                </div>
                <span className="text-[12px] font-medium text-[#8B98D9]">
                  Step {activeStep} of 5
                </span>
              </div>

              {/* Thin 5-Segment Progress Indicator */}
              <div className="grid grid-cols-5 gap-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSelectStep(s)}
                    className={`h-[2px] rounded-full transition-all duration-300 cursor-pointer ${
                      activeStep >= s ? 'bg-cyan-400' : 'bg-white/10 hover:bg-white/20'
                    }`}
                    title={`Step ${s}`}
                  />
                ))}
              </div>
            </div>

            {/* ONE Clean Vertical Timeline (No Cards) */}
            <div className="relative pl-6 space-y-6 before:absolute before:left-[4px] before:top-2 before:bottom-3 before:w-[1px] before:bg-gradient-to-b before:from-cyan-400/40 before:via-[#0018C5]/30 before:to-cyan-400/80">
              
              {/* Step 01 */}
              <div 
                onClick={() => handleSelectStep(1)}
                className="relative cursor-pointer select-none group"
              >
                <div className="absolute -left-[24px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 transition-all" />
                <div>
                  <div className="text-[15px] font-semibold text-white">
                    01 · Lead Detected
                  </div>
                  <div className="flex items-center justify-between gap-4 mt-0.5">
                    <span className="text-[12px] text-[#8B98D9] font-normal">
                      Day 0 · 8:15 PM
                    </span>
                    <span className="text-[12px] text-amber-300/90 font-medium">
                      Intent Triggered
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 02 */}
              <div 
                onClick={() => handleSelectStep(2)}
                className="relative cursor-pointer select-none group"
              >
                <div className="absolute -left-[24px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 transition-all" />
                <div>
                  <div className="text-[15px] font-semibold text-white">
                    02 · AI Re-engagement
                  </div>
                  <div className="flex items-center justify-between gap-4 mt-0.5">
                    <span className="text-[12px] text-[#8B98D9] font-normal">
                      Day 1 · 10:00 AM
                    </span>
                    <span className="text-[12px] text-cyan-300/90 font-medium">
                      Outreach Dispatched
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 03 */}
              <div 
                onClick={() => handleSelectStep(3)}
                className="relative cursor-pointer select-none group"
              >
                <div className="absolute -left-[24px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 transition-all" />
                <div>
                  <div className="text-[15px] font-semibold text-white">
                    03 · Customer Response
                  </div>
                  <div className="flex items-center justify-between gap-4 mt-0.5">
                    <span className="text-[12px] text-[#8B98D9] font-normal">
                      Day 1 · 10:42 AM
                    </span>
                    <span className="text-[12px] text-blue-300/90 font-medium">
                      High Intent Reply
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 04 */}
              <div 
                onClick={() => handleSelectStep(4)}
                className="relative cursor-pointer select-none group"
              >
                <div className="absolute -left-[24px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 transition-all" />
                <div>
                  <div className="text-[15px] font-semibold text-white">
                    04 · Qualification & Booking
                  </div>
                  <div className="flex items-center justify-between gap-4 mt-0.5">
                    <span className="text-[12px] text-[#8B98D9] font-normal">
                      Day 1 · 10:43 AM
                    </span>
                    <span className="text-[12px] text-[#BBC4FF] font-medium">
                      Slot Locked
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 05 - ACTIVE STEP */}
              <div 
                onClick={() => handleSelectStep(5)}
                className="relative cursor-pointer select-none"
              >
                <div className="absolute -left-[25px] top-3.5 w-3.5 h-3.5 rounded-full border-2 border-white bg-cyan-400 shadow-[0_0_10px_#00F2FE]" />
                
                {/* Subtle dark-blue highlight */}
                <div className="p-4 rounded-xl bg-[#0B133A]/90 border border-cyan-500/30 shadow-[0_0_20px_rgba(0,242,254,0.1)]">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-[15px] font-semibold text-white">
                      05 · CRM Update
                    </div>
                    <span className="text-[12px] text-[#8B98D9] font-normal">
                      Day 1 · 10:45 AM
                    </span>
                  </div>

                  <p className="text-[14px] text-slate-300 font-normal leading-relaxed mt-2.5">
                    Appointment confirmed. <br />
                    Spheno automatically updates the CRM.
                  </p>

                  <div className="text-[12px] text-emerald-400 font-medium mt-3">
                    EMR Sync Verified · Conversion Complete
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN (Cols 6-12): LIGHT-THEMED WHATSAPP SMARTPHONE */}
          {/* Authentic Light Theme, Floating Interactive Cards & Badge  */}
          {/* ========================================================= */}
          <div className="order-1 lg:order-2 lg:col-span-7 w-full">
            
            {/* Outer Light Container with Subtle Dot Matrix & Floating WhatsApp Elements */}
            <div className="relative rounded-[32px] sm:rounded-[36px] border border-[#6D7CFF]/30 bg-gradient-to-b from-[#F7F9FD] to-[#EDF2F8] p-5 sm:p-8 lg:p-10 shadow-[0_25px_80px_-15px_rgba(0,18,120,0.65)] overflow-hidden">
              
              {/* Mint & Slate Ambient Dot Matrix Background (Matching Reference Image) */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.45]"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1.2px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }}
              />

              {/* Soft Gradient Sheen */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-400/15 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

              {/* -------------------------------------------------------- */}
              {/* FLOATING WHATSAPP 3D ICON BADGE (Top Right, Like Reference) */}
              {/* -------------------------------------------------------- */}
              <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-30 animate-bounce duration-1000" style={{ animationDuration: '4s' }}>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[20px] bg-gradient-to-tr from-[#25D366] to-[#128C7E] p-3 flex items-center justify-center shadow-[0_12px_30px_rgba(37,211,102,0.45)] border-2 border-white">
                  <svg className="w-full h-full text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.996.586 3.86 1.6 5.432L2.348 22l4.736-1.228A9.96 9.96 0 0012.004 22C17.528 22 22 17.52 22 12.004 22 6.48 17.528 2 12.004 2zm5.72 14.288c-.24.672-1.388 1.288-1.924 1.348-.512.056-1.164.08-3.412-.852-2.884-1.196-4.736-4.14-4.88-4.332-.144-.192-1.16-1.544-1.16-2.944 0-1.4.732-2.088.992-2.376.26-.288.568-.36.76-.36.192 0 .384.004.548.012.176.008.412-.068.644.488.24.58.816 1.996.888 2.14.072.144.12.316.024.508-.096.192-.144.312-.288.484-.144.172-.304.384-.436.516-.144.144-.296.3-.128.588.168.288.748 1.232 1.604 1.992 1.104.984 2.032 1.288 2.32 1.432.288.144.456.12.624-.072.168-.192.72-.84.912-1.128.192-.288.384-.24.644-.144.26.096 1.656.78 1.94.924.288.144.48.216.552.336.072.12.072.7-.168 1.372z" />
                  </svg>
                </div>
              </div>

              {/* -------------------------------------------------------- */}
              {/* FLOATING CARD 1: TOP GREETING BUBBLE (Popping Out)       */}
              {/* -------------------------------------------------------- */}
              <div className="relative z-20 max-w-[280px] sm:max-w-[320px] mb-4 sm:-mb-6 sm:ml-2 animate-in fade-in slide-in-from-left-4 duration-500">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl rounded-bl-sm p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.12)] border border-slate-200/90 text-slate-800 text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#128C7E] font-mono">
                      Spheno AI · Smart Outreach
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="font-medium text-[13px] sm:text-[14px] text-slate-700 leading-snug">
                    Hey Julian! Nice to connect with you here 👋
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[11px] text-slate-400 font-mono">
                    <span>10:00 AM</span>
                    <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------------- */}
              {/* CENTRAL REALISTIC IPHONE MOCKUP (Light Theme)           */}
              {/* -------------------------------------------------------- */}
              <div className="relative z-10 max-w-[340px] sm:max-w-[360px] mx-auto">
                
                {/* Phone Titanium Outer Bezel */}
                <div className="rounded-[44px] p-2.5 sm:p-3 bg-[#1A1F2C] border-2 border-slate-700/60 shadow-[0_30px_90px_-20px_rgba(15,23,42,0.45)]">
                  
                  {/* Phone Inner Glass Frame */}
                  <div className="relative rounded-[36px] overflow-hidden bg-[#ECE5DD] border border-black/10">
                    
                    {/* Dynamic Island Pill & iOS Status Bar */}
                    <div className="bg-[#F0F2F5] px-6 pt-3 pb-2 flex items-center justify-between text-slate-800 text-xs font-semibold select-none border-b border-slate-200/80">
                      <span className="font-mono text-[11px]">10:42</span>
                      
                      {/* Dynamic Island */}
                      <div className="w-24 h-5 bg-black rounded-full flex items-center justify-center gap-1.5 px-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400/80 animate-pulse" />
                        <span className="text-[9px] text-white font-mono tracking-tight">SPHENO</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold text-slate-500">5G</span>
                        <div className="w-5 h-2.5 border border-slate-700 rounded-sm p-0.5 flex items-center">
                          <div className="h-full w-full bg-slate-800 rounded-2xs" />
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Top Navigation Bar (Authentic Light WhatsApp Style) */}
                    <div className="bg-[#F0F2F5] px-4 py-2.5 border-b border-slate-200/90 flex items-center justify-between text-slate-800">
                      <div className="flex items-center gap-2">
                        <ChevronLeft className="w-5 h-5 text-[#007AFF] -ml-1 cursor-pointer" />
                        
                        {/* Profile Avatar with Verified Badge */}
                        <div className="relative">
                          <img
                            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&h=120&q=80"
                            alt="Dr. Bennett Clinic"
                            className="w-9 h-9 rounded-full object-cover border border-slate-300 shadow-sm"
                          />
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#F0F2F5]" />
                        </div>

                        <div className="leading-tight">
                          <div className="flex items-center gap-1">
                            <span className="text-xs sm:text-sm font-bold text-slate-900 truncate max-w-[130px]">
                              Dr. Bennett Clinic
                            </span>
                            {/* WhatsApp Green Verified Tick */}
                            <svg className="w-3.5 h-3.5 text-[#25D366] fill-current" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                          <span className="text-[11px] text-slate-500 font-medium">
                            Official AI Assistant
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-[#007AFF]">
                        <Video className="w-4 h-4 cursor-pointer hover:opacity-80" />
                        <Phone className="w-4 h-4 cursor-pointer hover:opacity-80" />
                      </div>
                    </div>

                    {/* Chat Stream Body with WhatsApp Wallpaper Texture */}
                    <div 
                      ref={chatScrollRef}
                      className="p-3.5 space-y-3 min-h-[360px] max-h-[400px] overflow-y-auto relative"
                      style={{
                        backgroundColor: '#EFEAE2',
                        backgroundImage: `radial-gradient(#d1c7b7 1px, transparent 1px)`,
                        backgroundSize: '18px 18px'
                      }}
                    >
                      {/* Date Badge */}
                      <div className="text-center my-1">
                        <span className="px-2.5 py-0.5 rounded-md bg-white/80 shadow-2xs text-[10px] font-semibold text-slate-600 uppercase tracking-wide">
                          Today
                        </span>
                      </div>

                      {/* Message 1: Initial AI Welcome (Incoming) */}
                      {activeStep >= 2 && (
                        <div className="flex flex-col items-start max-w-[88%] animate-in fade-in duration-300">
                          <div className="bg-white text-slate-800 p-3 rounded-2xl rounded-tl-xs shadow-xs text-xs leading-relaxed border border-slate-100">
                            <p className="text-slate-800 font-medium">
                              Hi Julian! We saw you reviewing our 3D smile restoration guide. Would you like a copy of our treatment timeline and 0% financing breakdown?
                            </p>
                            <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-slate-400 font-mono">
                              <span>10:00 AM</span>
                              <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Message 2: Julian Response (Outgoing) */}
                      {activeStep >= 3 && (
                        <div className="flex flex-col items-end max-w-[88%] ml-auto animate-in fade-in duration-300">
                          <div className="bg-[#D9FDD3] text-slate-800 p-3 rounded-2xl rounded-tr-xs shadow-xs text-xs leading-relaxed border border-emerald-100">
                            <p className="text-slate-800">
                              Yes please! How long does the initial scan take, and can I do Saturday?
                            </p>
                            <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-slate-500 font-mono">
                              <span>10:42 AM</span>
                              <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Message 3: Spheno AI Schedule Offer (Incoming) */}
                      {activeStep >= 4 && (
                        <div className="flex flex-col items-start max-w-[90%] animate-in fade-in duration-300">
                          <div className="bg-white text-slate-800 p-3 rounded-2xl rounded-tl-xs shadow-xs text-xs leading-relaxed border border-slate-100">
                            <p className="text-slate-800 font-medium">
                              The 3D scan takes only 30 mins! We have an opening this Saturday at 11:15 AM with Dr. Bennett. Shall I hold this spot?
                            </p>
                            
                            {/* In-chat quick pill */}
                            <div className="mt-2 p-2 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between text-[11px]">
                              <span className="font-bold text-emerald-800 flex items-center gap-1">
                                <Calendar className="w-3 h-3 text-emerald-600" />
                                <span>Sat, 11:15 AM</span>
                              </span>
                              <span className="text-[10px] bg-emerald-600 text-white font-bold px-1.5 py-0.5 rounded">
                                OPEN
                              </span>
                            </div>

                            <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-slate-400 font-mono">
                              <span>10:43 AM</span>
                              <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Message 4: Confirmation (Outgoing) */}
                      {activeStep >= 5 && (
                        <div className="flex flex-col items-end max-w-[88%] ml-auto animate-in fade-in duration-300">
                          <div className="bg-[#D9FDD3] text-slate-800 p-3 rounded-2xl rounded-tr-xs shadow-xs text-xs leading-relaxed border border-emerald-100">
                            <p className="text-slate-800 font-medium">
                              Please book 11:15 AM Saturday! Thanks Spheno.
                            </p>
                            <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-slate-500 font-mono">
                              <span>10:45 AM</span>
                              <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Typing indicator inside phone */}
                      {isTyping && (
                        <div className="flex items-center gap-1.5 p-2 bg-white rounded-xl rounded-tl-xs w-fit shadow-xs">
                          <span className="text-[10px] text-slate-500 font-medium">Spheno AI is typing</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      )}
                    </div>

                    {/* WhatsApp Input Bar */}
                    <div className="bg-[#F0F2F5] px-3 py-2 border-t border-slate-200 flex items-center gap-2">
                      <Smile className="w-4 h-4 text-slate-500 cursor-pointer" />
                      <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-xs text-slate-500 border border-slate-200">
                        Type a message...
                      </div>
                      <Mic className="w-4 h-4 text-slate-500 cursor-pointer" />
                    </div>

                  </div>
                </div>
              </div>

              {/* -------------------------------------------------------- */}
              {/* FLOATING CARD 2: INTERACTIVE VOICE NOTE PLAYER (Left)    */}
              {/* Matching Image 1 with Audio Wave & Play/Pause            */}
              {/* -------------------------------------------------------- */}
              <div className="relative sm:absolute sm:top-[210px] sm:left-4 z-20 mt-4 sm:mt-0 max-w-[290px] sm:max-w-[310px] animate-in fade-in duration-700">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.12)] border border-slate-200/90 flex items-center gap-3">
                  {/* Play / Pause Toggle Button */}
                  <button
                    onClick={() => setIsVoicePlaying(!isVoicePlaying)}
                    className="w-10 h-10 rounded-full bg-[#34B7F1] hover:bg-[#209dd6] text-white flex items-center justify-center transition-transform active:scale-95 cursor-pointer shadow-sm shrink-0"
                    title={isVoicePlaying ? 'Pause Voice Note' : 'Play Voice Note'}
                    aria-label="Play voice note preview"
                  >
                    {isVoicePlaying ? (
                      <Pause className="w-4 h-4 fill-white" />
                    ) : (
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    )}
                  </button>

                  {/* Audio Waveform Scrubber with Progress */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-1">
                      <span className="font-semibold text-slate-700">0:18 Voice Note</span>
                      <span>{isVoicePlaying ? 'Playing...' : 'Audio message'}</span>
                    </div>

                    {/* Dynamic animated equalizer bars */}
                    <div className="h-4 flex items-center gap-0.5">
                      {[12, 24, 16, 32, 28, 14, 26, 36, 20, 30, 18, 25, 34, 15, 22].map((height, i) => {
                        const isBarActive = (i / 15) * 100 <= voiceProgress;
                        return (
                          <span
                            key={i}
                            className={`w-1 rounded-full transition-all duration-150 ${
                              isBarActive
                                ? 'bg-[#34B7F1]'
                                : 'bg-slate-200'
                            }`}
                            style={{
                              height: isVoicePlaying ? `${Math.max(6, (height * (voiceProgress % 10 + 5)) / 10)}px` : `${height / 2}px`
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Red/Coral Voice/Music Note Icon from Reference */}
                  <div className="w-9 h-9 rounded-full bg-[#FF6B6B] flex items-center justify-center text-white shrink-0 shadow-xs">
                    <Music className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------------- */}
              {/* FLOATING CARD 3: INTERACTIVE QUICK-CHOICE LIST (Right)   */}
              {/* Matching Image 1 Questionnaire / Selectable Options     */}
              {/* -------------------------------------------------------- */}
              <div className="relative sm:absolute sm:top-[280px] sm:right-4 z-20 mt-4 sm:mt-0 max-w-[310px] sm:max-w-[325px] animate-in fade-in duration-700">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-slate-200/90 overflow-hidden">
                  
                  <div className="p-3.5 pb-2.5 border-b border-slate-100">
                    <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase tracking-wider block mb-0.5">
                      Interactive WhatsApp Choice
                    </span>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
                      Which consultation slot works best for your 3D digital scan?
                    </h4>
                  </div>

                  <div className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                    <button
                      onClick={() => setSelectedOption('sat-1115')}
                      className={`w-full p-3 text-left flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer ${
                        selectedOption === 'sat-1115' ? 'bg-emerald-50/70 text-[#128C7E]' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>🦷</span>
                        <span>Saturday @ 11:15 AM (Dr. Bennett)</span>
                      </div>
                      {selectedOption === 'sat-1115' && (
                        <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                      )}
                    </button>

                    <button
                      onClick={() => setSelectedOption('mon-0930')}
                      className={`w-full p-3 text-left flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer ${
                        selectedOption === 'mon-0930' ? 'bg-emerald-50/70 text-[#128C7E]' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>✨</span>
                        <span>Monday @ 2:30 PM (Review)</span>
                      </div>
                      {selectedOption === 'mon-0930' && (
                        <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                      )}
                    </button>

                    <button
                      onClick={() => setSelectedOption('eve-next')}
                      className={`w-full p-3 text-left flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer ${
                        selectedOption === 'eve-next' ? 'bg-emerald-50/70 text-[#128C7E]' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>⚡</span>
                        <span>Next Evening Opening</span>
                      </div>
                      {selectedOption === 'eve-next' && (
                        <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                      )}
                    </button>
                  </div>

                </div>
              </div>

              {/* -------------------------------------------------------- */}
              {/* FLOATING CARD 4: MAP & CLINIC LOCATION CARD (Bottom Left) */}
              {/* Matching Image 1 Location Card with Pin & Open Maps      */}
              {/* -------------------------------------------------------- */}
              <div className="relative sm:absolute sm:bottom-6 sm:left-6 z-20 mt-4 sm:mt-0 max-w-[290px] sm:max-w-[310px] animate-in fade-in duration-700">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.14)] border border-slate-200/90 overflow-hidden">
                  
                  {/* Stylized Clean SVG Map Preview */}
                  <div className="relative h-24 bg-[#E8ECEF] overflow-hidden">
                    {/* SVG Map Lines */}
                    <svg className="w-full h-full opacity-60" viewBox="0 0 300 120" preserveAspectRatio="none">
                      <line x1="0" y1="40" x2="300" y2="40" stroke="#CBD5E1" strokeWidth="6" />
                      <line x1="60" y1="0" x2="60" y2="120" stroke="#CBD5E1" strokeWidth="5" />
                      <line x1="180" y1="0" x2="180" y2="120" stroke="#CBD5E1" strokeWidth="8" />
                      <line x1="0" y1="85" x2="300" y2="85" stroke="#CBD5E1" strokeWidth="4" />
                      <path d="M 120 0 L 220 120" stroke="#E2E8F0" strokeWidth="5" />
                    </svg>

                    {/* Street Labels */}
                    <span className="absolute top-2 left-3 text-[9px] font-mono text-slate-500 font-bold uppercase">
                      North Bedford Dr.
                    </span>
                    <span className="absolute bottom-2 right-3 text-[9px] font-mono text-slate-500 font-bold uppercase">
                      Wilshire Blvd.
                    </span>

                    {/* Red Map Pin Pointing to Clinic */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-rose-500 border-2 border-white shadow-md flex items-center justify-center text-white">
                        <MapPin className="w-4 h-4 fill-white" />
                      </div>
                      <div className="w-2.5 h-1 bg-black/20 rounded-full blur-2xs mt-0.5" />
                    </div>
                  </div>

                  {/* Card Content & Open Maps Action */}
                  <div className="p-3.5">
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      Here&apos;s where Dr. Bennett&apos;s clinic is located for your Saturday 11:15 AM appointment!
                    </p>

                    <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-[#007AFF] font-bold flex items-center gap-1.5 hover:underline cursor-pointer">
                        <Navigation className="w-3.5 h-3.5 rotate-45" />
                        <span>Open in Maps</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Suite 300 · Valet
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Bottom Business Outcome Strip (Preserved Exact Recovered Value & EMR Status) */}
            <div className="mt-4 p-4 rounded-2xl bg-[#050625]/90 border border-white/[0.08] flex items-center justify-between flex-wrap gap-4 text-xs text-[#BBC4FF]">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-white font-semibold">
                  Appointment Confirmed on WhatsApp · EMR Synced in Real-Time
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#8B98D9] font-mono">RECOVERED PIPELINE:</span>
                <span className="text-white font-black text-sm sm:text-base font-mono tabular-nums text-emerald-300">
                  +$5,200 Won Opportunity
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
