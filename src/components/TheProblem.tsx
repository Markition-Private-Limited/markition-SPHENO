import React, { useState } from 'react';
import { 
  ArrowRight, 
  TrendingDown, 
  Clock, 
  Globe, 
  AlertTriangle,
  DollarSign,
  Flame,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const TheProblem: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3); // Default on the critical break step

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FBFBFA] text-[#0A0D2C] border-b border-[#ECECE6] relative overflow-hidden">
      
      {/* Subtle Creative Architectural Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-1/4 w-[450px] h-[450px] bg-rose-500/[0.03] rounded-full blur-[140px]" />
        <div className="absolute -bottom-24 left-1/4 w-[500px] h-[500px] bg-[#0018C5]/[0.03] rounded-full blur-[140px]" />
        
        {/* Architectural Dot Grid */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #080C42 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* ========================================================= */}
        {/* 2-COLUMN BALANCED EDITORIAL COMPOSITION                   */}
        {/* Both columns start aligned and match in visual weight    */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ======================================================= */}
          {/* LEFT COLUMN: Clean, proportional, sticky & balanced     */}
          {/* ======================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-6 lg:sticky lg:top-28">
            
            {/* Pill Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E2DC] shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-[#0018C5] text-xs font-mono font-semibold tracking-wider uppercase w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
              <span>THE INBOUND BOTTLENECK</span>
            </div>

            {/* Dominant Clean Headline */}
            <div className="space-y-3.5">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#080C42] tracking-tight leading-[1.12]">
                Your ads drive the lead. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0018C5] to-[#2563EB]">
                  Who answers in 60s?
                </span>
              </h2>

              <p className="text-base sm:text-[17px] text-[#555A68] leading-relaxed font-normal">
                Businesses invest heavily in clicks, only to lose high-intent buyers after 5 PM to static web forms, slow follow-ups, and unanswered phone calls.
              </p>
            </div>

            {/* Micro-Metric Insight Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EAEAE4] shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 text-rose-600 mt-0.5">
                <Flame className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-600">
                  Lead Decay Velocity
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#080C42] leading-snug">
                  Prospects are <strong className="text-rose-600 font-bold">21x less likely</strong> to convert after 30 minutes of silence.
                </div>
              </div>
            </div>

            {/* Value Proof Mini-List */}
            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#484D5E]">
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-blue-100/80 flex items-center justify-center text-[#0018C5] shrink-0 font-bold text-[10px]">✓</div>
                <span>Average competitor takes <strong>14.2 hours</strong> to reply to web forms.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-blue-100/80 flex items-center justify-center text-[#0018C5] shrink-0 font-bold text-[10px]">✓</div>
                <span>Over <strong>62%</strong> of calls after 5:00 PM go to voicemail and abandon.</span>
              </div>
            </div>

            {/* Action Button & Trust Guarantee */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="#system"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#080C42] hover:bg-[#0018C5] text-white font-semibold text-sm shadow-sm hover:shadow-[0_8px_20px_rgba(0,24,197,0.25)] transition-all duration-200 group cursor-pointer w-fit"
              >
                <span>Explore the Spheno Fix</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-xs text-[#7B8092] font-medium">
                Autonomous across Web, Voice &amp; WhatsApp
              </span>
            </div>

          </div>

          {/* ======================================================= */}
          {/* RIGHT COLUMN: Balanced, Clean Visual Pipeline Card        */}
          {/* ======================================================= */}
          <div className="lg:col-span-7">
            <div className="rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-[#FDFDFB] to-[#F5F4EE] border border-[#E4E3DB] p-5 sm:p-7 lg:p-8 shadow-[0_16px_40px_rgba(8,12,66,0.05)] relative backdrop-blur-sm">
              
              {/* Top Bar: Status + Dominant 62% Stat */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-5 border-b border-[#E6E5DE] gap-4">
                
                {/* Status Indicator */}
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-600 text-xs font-mono font-bold tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    <span>STATUS: REVENUE LEAK DETECTED</span>
                  </div>
                  <div className="text-[11px] text-[#717684] font-medium pl-1">
                    Standard Lead Qualification Funnel
                  </div>
                </div>

                {/* Big Stat Box */}
                <div className="flex items-center gap-3 bg-white/90 border border-[#EAEAE4] px-4 py-2.5 rounded-xl shadow-2xs">
                  <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#080C42] font-mono">
                    62<span className="text-rose-500 font-bold">%</span>
                  </span>
                  <span className="text-xs text-[#555A68] leading-tight font-medium max-w-[120px]">
                    of qualified inbound inquiries abandoned
                  </span>
                </div>
              </div>

              {/* TIMELINE TRACK WITH BALANCED COMPACT PROPORTIONS */}
              <div className="relative pl-5 sm:pl-7 space-y-4 sm:space-y-4 before:absolute before:left-[15px] sm:before:left-[21px] before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-[#0018C5]/30 before:via-rose-400 before:to-slate-300">
                
                {/* -------------------------------------------------- */}
                {/* STEP 01: PAID MARKETING                           */}
                {/* -------------------------------------------------- */}
                <div 
                  onClick={() => setActiveStep(1)}
                  className={`relative cursor-pointer transition-all duration-200 rounded-xl p-3.5 sm:p-4 ${
                    activeStep === 1 
                      ? 'bg-white border-2 border-[#0018C5] shadow-[0_4px_16px_rgba(0,24,197,0.06)] scale-[1.005]' 
                      : 'bg-white/90 border border-[#E6E5DF] hover:border-[#0018C5]/30 hover:bg-white shadow-2xs'
                  }`}
                >
                  {/* Step Connector Marker on Track */}
                  <div className="absolute -left-[27px] sm:-left-[35px] top-4 sm:top-5 w-4 h-4 rounded-full bg-white border-2 border-[#0018C5] flex items-center justify-center shadow-2xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0018C5]" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0018C5] flex items-center justify-center shrink-0 font-bold">
                        <DollarSign className="w-4 h-4" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-[#0018C5] uppercase tracking-wider">
                          STEP 01
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-[#080C42]">
                          High-Intent Paid Traffic
                        </h4>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono font-semibold text-[#0018C5] bg-blue-50/80 border border-blue-100 px-2.5 py-0.5 rounded-full w-fit">
                      Budget Spent: 100%
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#555A68] pl-9 sm:pl-9 leading-relaxed">
                    Google Ads, Meta, and SEO campaigns acquire high-ticket buyers searching with intent.
                  </p>
                </div>

                {/* -------------------------------------------------- */}
                {/* STEP 02: WEBSITE TRAFFIC                           */}
                {/* -------------------------------------------------- */}
                <div 
                  onClick={() => setActiveStep(2)}
                  className={`relative cursor-pointer transition-all duration-200 rounded-xl p-3.5 sm:p-4 ${
                    activeStep === 2 
                      ? 'bg-white border-2 border-amber-500 shadow-[0_4px_16px_rgba(245,158,11,0.08)] scale-[1.005]' 
                      : 'bg-white/90 border border-[#E6E5DF] hover:border-amber-400 hover:bg-white shadow-2xs'
                  }`}
                >
                  {/* Step Connector Marker on Track */}
                  <div className="absolute -left-[27px] sm:-left-[35px] top-4 sm:top-5 w-4 h-4 rounded-full bg-white border-2 border-amber-500 flex items-center justify-center shadow-2xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider">
                          STEP 02
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-[#080C42]">
                          After-Hours Arrival
                        </h4>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono font-semibold text-amber-800 bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-full w-fit">
                      Time: 7:45 PM
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#555A68] pl-9 sm:pl-9 leading-relaxed">
                    Prospect arrives ready to book, but the front desk is closed and staff have gone home.
                  </p>
                </div>

                {/* -------------------------------------------------- */}
                {/* STEP 03: THE CRITICAL BREAK (FOCAL POINT)         */}
                {/* -------------------------------------------------- */}
                <div 
                  onClick={() => setActiveStep(3)}
                  className="relative cursor-pointer transition-all duration-200 rounded-xl p-3.5 sm:p-4 bg-gradient-to-r from-rose-50/95 to-red-50/70 border-2 border-rose-300 shadow-[0_6px_20px_rgba(244,63,94,0.1)] scale-[1.005]"
                >
                  {/* Glowing Pulse Marker on Track */}
                  <div className="absolute -left-[27px] sm:-left-[35px] top-4 sm:top-5 w-4 h-4 rounded-full bg-rose-500 border-2 border-white flex items-center justify-center shadow-xs animate-pulse">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-extrabold text-rose-600 uppercase tracking-wider">
                          STEP 03 · THE BREAK
                        </span>
                        <h4 className="text-sm sm:text-base font-extrabold text-rose-950">
                          Static Web Form / Voicemail
                        </h4>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono font-bold text-rose-700 bg-rose-100/90 border border-rose-300/80 px-2.5 py-0.5 rounded-full w-fit flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-rose-600" />
                      <span>Response: 14+ hours</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-rose-900/90 pl-9 sm:pl-9 leading-relaxed font-medium">
                    No immediate live answer or booking confirmation. The warm customer intent goes cold.
                  </p>
                </div>

                {/* -------------------------------------------------- */}
                {/* STEP 04: THE OUTCOME                               */}
                {/* -------------------------------------------------- */}
                <div 
                  onClick={() => setActiveStep(4)}
                  className={`relative cursor-pointer transition-all duration-200 rounded-xl p-3.5 sm:p-4 ${
                    activeStep === 4 
                      ? 'bg-white border-2 border-slate-500 shadow-xs scale-[1.005]' 
                      : 'bg-white/70 border border-[#E6E5DF] hover:bg-white shadow-2xs'
                  }`}
                >
                  {/* Step Connector Marker on Track */}
                  <div className="absolute -left-[27px] sm:-left-[35px] top-4 sm:top-5 w-4 h-4 rounded-full bg-white border-2 border-slate-400 flex items-center justify-center shadow-2xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                        <TrendingDown className="w-4 h-4" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
                          STEP 04 · OUTCOME
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-slate-800">
                          Lost to Faster Competitor
                        </h4>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono font-bold text-rose-600 bg-rose-50 border border-rose-200/60 px-2.5 py-0.5 rounded-full w-fit">
                      Conversion: 0%
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 pl-9 sm:pl-9 leading-relaxed">
                    Lead calls the next provider on Google who responds in under a minute. Deal lost permanently.
                  </p>
                </div>

              </div>

              {/* BOTTOM CALLOUT FOOTER: THE SPHENO CONTRAST */}
              <div className="mt-6 pt-4 border-t border-[#E6E5DE] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-[#646A7A]">
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
    </section>
  );
};

