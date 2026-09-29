import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  badge: string;
  deliverables: string[];
}

const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Set the direction',
    description: 'Leaders agree on what AI is for, the rules it runs by, and who owns it.',
    badge: 'GOVERNANCE & SCOPE',
    deliverables: ['Executive AI alignment', 'Data boundaries & guardrails', 'Owner assignment'],
  },
  {
    step: '02',
    title: 'Train the team',
    description: 'People use AI in their daily work and know where it does not help.',
    badge: 'HUMAN ENABLEMENT',
    deliverables: ['Staff hands-on workflows', 'Limitation awareness', 'Operational handoff'],
  },
  {
    step: '03',
    title: 'Build what earned its place',
    description: 'One workflow first, then a system your organization owns.',
    badge: 'TARGETED DEPLOYMENT',
    deliverables: ['Single revenue workflow first', 'Sub-400ms telephony & chat', 'Proprietary IP retention'],
  },
  {
    step: '04',
    title: 'Run it and keep improving',
    description: 'Agents are monitored and supported, and they report into your client portal.',
    badge: 'CONTINUOUS OPTIMIZATION',
    deliverables: ['24/7 agent supervision', 'Real-time telemetry portal', 'Closed-loop model tuning'],
  },
];

export const TalkThinkAct: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // =========================================================
  // SCROLL-DRIVEN TIMELINE ANIMATION (EXACT MATCH TO IMAGE 2)
  // Tracks user scroll progress and illuminates steps dynamically
  // =========================================================
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is within the active viewport range
      if (sectionRect.top < windowHeight * 0.75 && sectionRect.bottom > windowHeight * 0.2) {
        // Trigger line around 45% viewport height
        const triggerY = windowHeight * 0.45;
        let bestIndex = 0;
        let minDistance = Infinity;

        stepRefs.current.forEach((el, index) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const stepCenter = rect.top + rect.height * 0.3;
          const dist = Math.abs(stepCenter - triggerY);

          // If step has been reached or passed
          if (stepCenter <= triggerY) {
            bestIndex = Math.max(bestIndex, index);
          }

          if (dist < minDistance) {
            minDistance = dist;
          }
        });

        setActiveStepIndex(bestIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate line height percentage based on activeStepIndex
  const lineProgressHeights = ['12%', '38%', '68%', '100%'];
  const currentLineHeight = lineProgressHeights[activeStepIndex] || '12%';

  return (
    <section 
      ref={sectionRef}
      id="execution" 
      className="py-24 sm:py-32 bg-[#020410] text-white border-b border-[#141A3D] relative overflow-hidden select-none"
    >
      
      {/* Background Ambient Atmosphere (Spheno Electric Cyan & Royal Sapphire) */}
      <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-[#00F2FE]/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-5%] w-[550px] h-[550px] bg-[#0018C5]/20 blur-[160px] rounded-full pointer-events-none" />

      {/* Subtle Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00F2FE 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* ========================================================= */}
        {/* MAIN CONTAINER: 2-COLUMN SPLIT                            */}
        {/* Left: Section Headings & Interactive Status               */}
        {/* Right: The Exact 4-Step Vertical Timeline in Cyan Theme   */}
        {/* ========================================================= */}
        <div className="rounded-[32px] sm:rounded-[40px] bg-[#05071F]/90 border border-white/[0.08] backdrop-blur-2xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ===================================================== */}
            {/* LEFT COLUMN: Headings, Body & Active Step Overview    */}
            {/* ===================================================== */}
            <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-28">
              
              {/* Eyebrow Pill Badge (Spheno Signature Theme) */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#060B24]/90 border border-cyan-400/40 text-xs font-semibold text-cyan-300 mb-6 shadow-[0_0_15px_rgba(0,242,254,0.2)] w-fit">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="uppercase tracking-wider font-mono">HOW IT WORKS · THE PROCESS</span>
              </div>

              {/* Dominant Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-bold text-white tracking-tight leading-[1.12]">
                Our Process. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                  How Spheno builds systems.
                </span>
              </h2>

              {/* Supporting Copy */}
              <p className="mt-6 text-base sm:text-lg text-[#9EA6CA] leading-relaxed font-normal">
                Businesses do not need random chatbots. They need a disciplined progression from leadership clarity to battle-tested autonomous revenue engines.
              </p>

              {/* Active Step Feature Card */}
              <div className="mt-8 p-5 rounded-2xl bg-white/[0.03] border border-cyan-400/20 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-cyan-400 font-bold uppercase tracking-wider">
                    CURRENT PHASE {processSteps[activeStepIndex].step}
                  </span>
                  <span className="text-cyan-300 font-bold bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 rounded">
                    ACTIVE
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {processSteps[activeStepIndex].title}
                </h4>
                <div className="space-y-1.5 mt-3">
                  {processSteps[activeStepIndex].deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Navigation Help */}
              <div className="mt-6 flex items-center gap-3 text-xs text-[#64748B] font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Scroll or click steps to view phase requirements</span>
              </div>

            </div>

            {/* ===================================================== */}
            {/* RIGHT COLUMN: TIMELINE WITH SCROLL LINE (CYAN THEME)  */}
            {/* ===================================================== */}
            <div className="lg:col-span-7 relative pl-2 sm:pl-6">
              
              {/* 1. Base Grey Timeline Spine (Full Height) */}
              <div className="absolute left-[19px] sm:left-[35px] top-6 bottom-10 w-[2px] bg-[#1E293B] pointer-events-none" />

              {/* 2. Active Glowing Gradient Spine (Spheno Cyan Theme) */}
              <div 
                className="absolute left-[19px] sm:left-[35px] top-6 w-[2px] transition-all duration-500 ease-out pointer-events-none"
                style={{
                  height: currentLineHeight,
                  background: 'linear-gradient(to bottom, #FFFFFF 0%, #00F2FE 50%, #0070F3 100%)',
                  boxShadow: '0 0 14px rgba(0, 242, 254, 0.9), 0 0 24px rgba(0, 112, 243, 0.6)',
                }}
              />

              {/* 3. Steps Stack */}
              <div className="space-y-14 sm:space-y-16">
                
                {processSteps.map((stepItem, index) => {
                  const isActive = index === activeStepIndex;
                  const isPassed = index < activeStepIndex;

                  return (
                    <div
                      key={stepItem.step}
                      ref={(el) => { stepRefs.current[index] = el; }}
                      onClick={() => setActiveStepIndex(index)}
                      className="relative pl-12 sm:pl-16 group cursor-pointer transition-all duration-300"
                    >
                      {/* Timeline Node / Bead (Spheno Cyan Theme) */}
                      <div 
                        className={`absolute left-[13px] sm:left-[29px] top-1.5 rounded-full transition-all duration-400 flex items-center justify-center ${
                          isActive
                            ? 'w-4 h-4 -left-[2px] sm:-left-[2px] bg-white border-2 border-cyan-400 shadow-[0_0_16px_#00F2FE] scale-125'
                            : isPassed
                            ? 'w-3.5 h-3.5 bg-cyan-400 border-2 border-white/80 shadow-[0_0_8px_#00F2FE]'
                            : 'w-3 h-3 bg-[#0B0F2A] border border-[#334155] group-hover:border-[#64748B]'
                        }`}
                      >
                        {isActive && (
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0018C5]" />
                        )}
                      </div>

                      {/* Step Number (Spheno Cyan Theme) */}
                      <span 
                        className={`text-xs sm:text-sm font-mono font-bold tracking-widest block uppercase mb-1.5 transition-colors duration-300 ${
                          isActive 
                            ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(0,242,254,0.7)]' 
                            : isPassed
                            ? 'text-cyan-200/80'
                            : 'text-[#475569]'
                        }`}
                      >
                        {stepItem.step}
                      </span>

                      {/* Title */}
                      <h3 
                        className={`text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight transition-colors duration-300 ${
                          isActive 
                            ? 'text-white' 
                            : isPassed
                            ? 'text-[#E2E8F0]'
                            : 'text-[#475569] group-hover:text-[#94A3B8]'
                        }`}
                      >
                        {stepItem.title}
                      </h3>

                      {/* Description */}
                      <p 
                        className={`mt-2 text-sm sm:text-base leading-relaxed max-w-xl transition-colors duration-300 font-normal ${
                          isActive 
                            ? 'text-[#CBD5E1]' 
                            : isPassed
                            ? 'text-[#94A3B8]'
                            : 'text-[#334155] group-hover:text-[#64748B]'
                        }`}
                      >
                        {stepItem.description}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
