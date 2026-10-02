import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  TrendingDown,
  Clock,
  Globe,
  AlertTriangle,
  DollarSign,
  Flame,
  Sparkles
} from 'lucide-react';

const STEPS = [
  {
    id: 1,
    icon: DollarSign,
    stepLabel: 'STEP 01',
    title: 'High-Intent Paid Traffic',
    body: 'Google Ads, Meta, and SEO campaigns acquire high-ticket buyers searching with intent.',
    badge: 'Budget Spent: 100%',
    badgeColor: 'text-[#0018C5] bg-blue-50/80 border-blue-100',
    stepColor: 'text-[10px] font-mono font-bold text-[#0018C5] uppercase tracking-wider',
    iconBg: 'bg-blue-50 text-[#0018C5]',
    activeRing: 'border-[#0018C5] shadow-[0_4px_16px_rgba(0,24,197,0.06)]',
    hoverRing: 'hover:border-[#0018C5]/30',
    nodeColor: '#0018C5',
  },
  {
    id: 2,
    icon: Globe,
    stepLabel: 'STEP 02',
    title: 'After-Hours Arrival',
    body: 'Prospect arrives ready to book, but the front desk is closed and staff have gone home.',
    badge: 'Time: 7:45 PM',
    badgeColor: 'text-amber-800 bg-amber-50 border-amber-200/60',
    stepColor: 'text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider',
    iconBg: 'bg-amber-50 text-amber-600',
    activeRing: 'border-amber-500 shadow-[0_4px_16px_rgba(245,158,11,0.08)]',
    hoverRing: 'hover:border-amber-400',
    nodeColor: '#F59E0B',
  },
  {
    id: 3,
    icon: AlertTriangle,
    stepLabel: 'STEP 03 · THE BREAK',
    title: 'Static Web Form / Voicemail',
    body: 'No immediate live answer or booking confirmation. The warm customer intent goes cold.',
    badge: 'Response: 14+ hours',
    badgeColor: 'text-rose-700 bg-rose-100/90 border-rose-300/80',
    stepColor: 'text-[10px] font-mono font-extrabold text-rose-600 uppercase tracking-wider',
    iconBg: 'bg-rose-500 text-white',
    activeRing: 'border-rose-400 shadow-[0_6px_20px_rgba(244,63,94,0.12)]',
    hoverRing: 'hover:border-rose-300',
    nodeColor: '#EF4444',
    critical: true,
  },
  {
    id: 4,
    icon: TrendingDown,
    stepLabel: 'STEP 04 · OUTCOME',
    title: 'Lost to Faster Competitor',
    body: 'Lead calls the next provider on Google who responds in under a minute. Deal lost permanently.',
    badge: 'Conversion: 0%',
    badgeColor: 'text-rose-600 bg-rose-50 border-rose-200/60',
    stepColor: 'text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider',
    iconBg: 'bg-slate-100 text-slate-500',
    activeRing: 'border-slate-500 shadow-xs',
    hoverRing: 'hover:border-slate-300',
    nodeColor: '#94A3B8',
  },
] satisfies {
  id: number; icon: React.ElementType; stepLabel: string; title: string; body: string;
  badge: string; badgeColor: string; stepColor: string; iconBg: string;
  activeRing: string; hoverRing: string; nodeColor: string; critical?: boolean;
}[];

export const TheProblem: React.FC = () => {
  const outerRef  = useRef<HTMLDivElement | null>(null);
  const leftRef   = useRef<HTMLDivElement | null>(null);
  const spineEl   = useRef<HTMLDivElement | null>(null); // the .relative.pl-5 spine container
  const fillEl    = useRef<HTMLDivElement | null>(null); // animated fill bar
  const nodeEls   = useRef<(HTMLDivElement | null)[]>([]); // each node dot

  const [progress, setProgress]       = useState(0);
  const [leftVisible, setLeftVisible] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);

  // ── Scroll-jacked progress ─────────────────────────────────────────────────
  const segmentWeights = [1, 1, 1, 0.35];
  const totalWeight = segmentWeights.reduce((a, b) => a + b, 0);
  const segmentBounds = (() => {
    let cum = 0;
    return segmentWeights.map((w) => { cum += w; return cum / totalWeight; });
  })();

  useEffect(() => {
    let ticking = false;
    const compute = () => {
      ticking = false;
      const outer = outerRef.current;
      if (!outer) return;
      const rect = outer.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) { setProgress(rect.top <= 0 ? 1 : 0); return; }
      setProgress(Math.min(1, Math.max(0, -rect.top / scrollable)));
    };
    const onScroll = () => { if (ticking) return; ticking = true; requestAnimationFrame(compute); };
    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  // ── Entrance observer for left column ─────────────────────────────────────
  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLeftVisible(true); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // ── Count-up for 62% ───────────────────────────────────────────────────────
  useEffect(() => {
    if (!leftVisible) return;
    let n = 0;
    const id = setInterval(() => {
      n += 2;
      if (n >= 62) { setDisplayCount(62); clearInterval(id); return; }
      setDisplayCount(n);
    }, 28);
    return () => clearInterval(id);
  }, [leftVisible]);

  // ── Drive fill step-by-step so no node is ever skipped ───────────────────
  // If activeIdx jumps 0→2 (fast scroll), we animate 0→1 first, wait 220ms,
  // then 1→2. The fill always passes through every node dot.
  let activeIdx = segmentBounds.findIndex((b) => progress < b);
  if (activeIdx === -1) activeIdx = STEPS.length - 1;

  const displayedIdxRef = useRef(0);
  const animTimerRef    = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const fill  = fillEl.current;
    const spine = spineEl.current;
    if (!fill || !spine) return;

    const moveTo = (target: number) => {
      const cur  = displayedIdxRef.current;
      if (cur === target) return;

      const next = cur < target ? cur + 1 : cur - 1;
      const node = nodeEls.current[next];
      if (!node) return;

      const spineTop = spine.getBoundingClientRect().top;
      const nr       = node.getBoundingClientRect();
      const px       = nr.top + nr.height / 2 - spineTop;

      if (px > 0) fill.style.height = `${px}px`;
      displayedIdxRef.current = next;

      if (next !== target) {
        animTimerRef.current = setTimeout(() => moveTo(target), 220);
      }
    };

    clearTimeout(animTimerRef.current);
    moveTo(activeIdx);
    return () => clearTimeout(animTimerRef.current);
  }, [activeIdx]);

  // Entrance animation helper
  const enterStyle = (delayMs: number): React.CSSProperties => ({
    opacity: leftVisible ? 1 : 0,
    transform: leftVisible ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.55s ease ${delayMs}ms, transform 0.55s ease ${delayMs}ms`,
  });

  return (
    <section
      className="bg-[#FBFBFA] text-[#0A0D2C] border-b border-[#ECECE6] relative overflow-x-clip"
    >
      {/* Scroll-jack outer track */}
      <div ref={outerRef} className="relative" style={{ height: '300vh' }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">

          {/* Background accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-1/4 w-[450px] h-[450px] rounded-full" style={{ background: 'radial-gradient(ellipse closest-side, rgba(239,68,68,0.04) 0%, transparent 100%)' }} />
            <div className="absolute -bottom-24 left-1/4 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(ellipse closest-side, rgba(0,24,197,0.04) 0%, transparent 100%)' }} />
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, #080C42 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

              {/* ─── LEFT COLUMN (entrance-animated) ─────────────────── */}
              <div ref={leftRef} className="lg:col-span-5 flex flex-col justify-start space-y-3.5">

                {/* Eyebrow */}
                <div style={enterStyle(0)}>
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E2DC] shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-[#0018C5] text-xs font-mono font-semibold tracking-wider uppercase w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                    <span>THE INBOUND BOTTLENECK</span>
                  </div>
                </div>

                {/* Headline */}
                <div className="space-y-2" style={enterStyle(90)}>
                  <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#080C42] tracking-tight leading-[1.13]">
                    Your ads drive the lead. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0018C5] to-[#2563EB]">
                      Who answers in 60s?
                    </span>
                  </h2>
                  <p className="text-sm text-[#555A68] leading-relaxed font-normal">
                    Businesses invest heavily in clicks, only to lose high-intent buyers after 5 PM to static web forms, slow follow-ups, and unanswered phone calls.
                  </p>
                </div>

                {/* Stat card + count-up + bullets */}
                <div style={enterStyle(200)}>
                  <div className="p-3 rounded-xl bg-white border border-[#EAEAE4] shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 text-rose-600">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-600">Lead Decay Velocity</div>
                      <div className="text-xs font-medium text-[#080C42] leading-snug">
                        Prospects are <strong className="text-rose-600 font-bold">21x less likely</strong> to convert after 30 minutes of silence.
                      </div>
                    </div>
                  </div>

                  {/* Counter row */}
                  <div className="flex items-baseline gap-1.5 mb-2.5">
                    <span className="text-4xl font-black font-mono text-[#080C42] tabular-nums leading-none">{displayCount}</span>
                    <span className="text-2xl font-black text-rose-500 leading-none">%</span>
                    <span className="text-xs text-[#717684] font-medium ml-1 max-w-[140px] leading-snug">of qualified inbound inquiries abandoned</span>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#484D5E]">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-100/80 flex items-center justify-center text-[#0018C5] shrink-0 font-bold text-[10px]">✓</div>
                      <span>Average competitor takes <strong>14.2 hours</strong> to reply to web forms.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-100/80 flex items-center justify-center text-[#0018C5] shrink-0 font-bold text-[10px]">✓</div>
                      <span>Over <strong>62%</strong> of calls after 5:00 PM go to voicemail and abandon.</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3" style={enterStyle(340)}>
                  <a
                    href="#system"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#080C42] hover:bg-[#0018C5] text-white font-semibold text-sm shadow-sm hover:shadow-[0_8px_20px_rgba(0,24,197,0.25)] transition-all duration-200 group cursor-pointer w-fit"
                  >
                    <span>Explore the Spheno Fix</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-xs text-[#7B8092] font-medium">
                    Autonomous across Web, Voice &amp; WhatsApp
                  </span>
                </div>

              </div>

              {/* ─── RIGHT COLUMN: scroll-animated timeline ───────────── */}
              <div className="lg:col-span-7">
                <div className="rounded-[20px] sm:rounded-[24px] bg-gradient-to-b from-[#FDFDFB] to-[#F5F4EE] border border-[#E4E3DB] p-4 sm:p-5 shadow-[0_16px_40px_rgba(8,12,66,0.05)] relative"
                  style={{
                    opacity: leftVisible ? 1 : 0,
                    transform: leftVisible ? 'translateY(0)' : 'translateY(28px)',
                    transition: 'opacity 0.6s ease 180ms, transform 0.6s ease 180ms',
                  }}
                >
                  {/* Top bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-[#E6E5DE] gap-2.5">
                    <div className="space-y-0.5">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-600 text-[10px] font-mono font-bold tracking-wider uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                        <span>STATUS: REVENUE LEAK DETECTED</span>
                      </div>
                      <div className="text-[10px] text-[#717684] font-medium pl-1">
                        Standard Lead Qualification Funnel
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 bg-white/90 border border-[#EAEAE4] px-3 py-2 rounded-xl shadow-2xs">
                      <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#080C42] font-mono tabular-nums">
                        {displayCount}<span className="text-rose-500 font-bold">%</span>
                      </span>
                      <span className="text-[11px] text-[#555A68] leading-tight font-medium max-w-[100px]">
                        of qualified inbound inquiries abandoned
                      </span>
                    </div>
                  </div>

                  {/* Timeline with animated fill spine */}
                  <div ref={spineEl} className="relative pl-5 sm:pl-7">

                    {/* Base track — full height of the spine container */}
                    <div className="absolute left-[13px] sm:left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0018C5]/15 via-rose-200/30 to-slate-200/50" />

                    {/* Animated fill — top-0, height driven via ref to exact node px */}
                    <div
                      ref={fillEl}
                      className="absolute left-[13px] sm:left-[19px] top-0 w-[2px] pointer-events-none"
                      style={{
                        height: 0,
                        background: 'linear-gradient(to bottom, #0018C5 0%, #2563EB 40%, #EF4444 80%, #94A3B8 100%)',
                        boxShadow: '0 0 8px rgba(0,24,197,0.5), 0 0 16px rgba(239,68,68,0.2)',
                        transition: 'height 0.2s cubic-bezier(0.4,0,0.2,1)',
                      }}
                    />

                    <div className="space-y-2">
                      {STEPS.map((step, index) => {
                        const isActive = index === activeIdx;
                        const isPassed = index < activeIdx;
                        const Icon = step.icon;

                        return (
                          <div
                            key={step.id}
                            className={`relative cursor-pointer transition-all duration-300 rounded-xl p-2.5 sm:p-3 ${
                              isActive
                                ? `bg-white border-2 ${step.activeRing} scale-[1.01]`
                                : isPassed
                                ? 'bg-white/90 border border-[#E6E5DF] opacity-75'
                                : `bg-white/70 border border-[#E6E5DF] ${step.hoverRing} hover:bg-white`
                            } ${step.critical && isActive ? 'bg-gradient-to-r from-rose-50/95 to-red-50/70' : ''}`}
                            style={{
                              opacity: leftVisible ? (isPassed ? 0.75 : 1) : 0,
                              transform: leftVisible ? 'translateY(0)' : 'translateY(16px)',
                              transition: `opacity 0.5s ease ${140 + index * 80}ms, transform 0.5s ease ${140 + index * 80}ms, border-color 0.3s, box-shadow 0.3s, background-color 0.3s, scale 0.3s`,
                            }}
                          >
                            {/* Node marker */}
                            <div
                              ref={(el) => { nodeEls.current[index] = el; }}
                              className={`absolute -left-[25px] sm:-left-[33px] top-3 w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center transition-all duration-400 ${
                                isActive
                                  ? 'bg-white scale-125'
                                  : isPassed
                                  ? 'bg-white scale-100'
                                  : 'bg-white scale-90'
                              }`}
                              style={{
                                borderColor: isActive || isPassed ? step.nodeColor : '#CBD5E1',
                                boxShadow: isActive ? `0 0 14px ${step.nodeColor}80, 0 0 28px ${step.nodeColor}30` : isPassed ? `0 0 6px ${step.nodeColor}40` : 'none',
                              }}
                            >
                              <div
                                className={`rounded-full transition-all duration-300 ${isActive ? 'w-2 h-2' : 'w-1.5 h-1.5'}`}
                                style={{ background: isActive || isPassed ? step.nodeColor : '#94A3B8' }}
                              />
                            </div>

                            {/* Active pulse ring */}
                            {isActive && (
                              <div
                                className="absolute -left-[29px] sm:-left-[37px] top-[10px] w-[22px] h-[22px] rounded-full animate-ping opacity-30 pointer-events-none"
                                style={{ background: step.nodeColor, transform: 'scale(1.25)' }}
                              />
                            )}

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-0.5">
                              <div className="flex items-center gap-2">
                                <div className={`w-6 h-6 rounded-lg ${step.iconBg} flex items-center justify-center shrink-0 transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <span className={step.stepColor}>{step.stepLabel}</span>
                                  <h4 className={`text-xs sm:text-sm font-bold transition-colors duration-300 ${isActive ? (step.critical ? 'text-rose-950' : 'text-[#080C42]') : 'text-[#080C42]'}`}>
                                    {step.title}
                                  </h4>
                                </div>
                              </div>
                              <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full w-fit border ${step.badgeColor} flex items-center gap-1`}>
                                {step.id === 3 && <Clock className="w-2.5 h-2.5" />}
                                {step.badge}
                              </span>
                            </div>

                            <p className={`text-[11px] sm:text-xs pl-8 leading-relaxed transition-colors duration-300 ${
                              isActive
                                ? (step.critical ? 'text-rose-900/90 font-medium' : 'text-[#555A68]')
                                : 'text-[#555A68]'
                            }`}>
                              {step.body}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Footer callout */}
                  <div
                    className="mt-3 pt-3 border-t border-[#E6E5DE] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-[#646A7A]"
                    style={{
                      opacity: leftVisible ? 1 : 0,
                      transition: 'opacity 0.5s ease 500ms',
                    }}
                  >
                    <div className="flex items-center gap-2 font-medium">
                      <Sparkles className="w-4 h-4 text-[#0018C5]" />
                      <span>Spheno intercepts at <strong>Step 03</strong> in &lt;1.2s across Chat, Voice &amp; WhatsApp.</span>
                    </div>
                    <span className="font-mono font-bold text-[#0018C5] uppercase tracking-wider">
                      Zero Missed Revenue
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
