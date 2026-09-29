import React, { useState } from 'react';
import { Sparkles, ArrowRight, Volume2, Mic, Play, Pause } from 'lucide-react';
import { VoiceBotAvatar } from './VoiceBotAvatar';
import { WhatsAppProductMockup } from './WhatsAppProductMockup';
import { ChatProductMockup } from './ChatProductMockup';
import { CrmProductMockup } from './CrmProductMockup';

interface ServiceItem {
  id: string;
  pill: string;
  title: string;
  description: string;
  bullet1: string;
  bullet2: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  badgeNote?: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'spheno-chat',
    pill: '01 · SPHENO CHAT',
    title: "Your website can answer. Even when your team can't.",
    description: 'Spheno Chat replaces passive FAQ accordions and rigid rule-based chatbots with an intelligent agent that understands clinical and commercial nuances, recommends tailored options, and books customers on the spot.',
    bullet1: '24/7 Availability & Instant Responses',
    bullet2: '94.2% Lead Qualification Rate',
    imageSrc: '/images/spheno-chat-light.svg',
    imageAlt: 'Spheno Chat AI Interface Mockup - Light Theme',
    imagePosition: 'left',
  },
  {
    id: 'spheno-voice',
    pill: '02 · SPHENO VOICE TELEPHONY',
    title: 'Every call feels like a conversation. Not an IVR.',
    description: 'Ultra-low latency voice agents that handle inbound phone calls, schedule appointments directly onto your calendar, answer complex inquiries, and speak with human inflection.',
    bullet1: '380ms Sub-Second Voice Latency',
    bullet2: 'Zero Missed Phone Calls After Hours',
    imageSrc: '/images/spheno-voice-light.svg',
    imageAlt: 'Spheno 3D AI Voice Avatar Bot - Light Theme',
    imagePosition: 'right',
    badgeNote: 'Interactive AI SpeechBot',
  },
  {
    id: 'spheno-crm',
    pill: '03 · SPHENO CRM',
    title: 'Business intelligence & customer management, unified.',
    description: 'Every conversation from Spheno Chat, Spheno Voice, and Spheno WhatsApp automatically feeds into one central intelligence layer. No manual entry, no fragmented spreadsheets, and zero lost pipeline.',
    bullet1: '100% Attribution & Multi-Touch Sync',
    bullet2: 'Autonomous Lead Pipeline Scoring',
    imageSrc: '/images/spheno-crm-light.svg',
    imageAlt: 'Spheno CRM Analytics Dashboard Mockup - Light Theme',
    imagePosition: 'left',
  },
  {
    id: 'spheno-whatsapp',
    pill: '04 · SPHENO WHATSAPP AI',
    title: 'Proactive conversations that turn abandoned clicks into revenue.',
    description: 'Two-way automated WhatsApp workflows that re-engage dropped website visitors, deliver immediate booking confirmations, and execute follow-up sequences that convert leads into confirmed customers.',
    bullet1: '68% Re-engagement Recovery Rate',
    bullet2: 'Official WhatsApp Business API Automation',
    imageSrc: '/images/spheno-whatsapp-light.svg',
    imageAlt: 'Spheno WhatsApp AI Automation Mockup - Light Theme',
    imagePosition: 'right',
  },
];

export const SphenoProducts: React.FC = () => {
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  return (
    <section id="products" className="py-24 sm:py-32 bg-[#020412] text-white border-b border-[#141A3D] relative overflow-hidden select-none">
      
      {/* Background Ambient Sapphire & Cyan Glows */}
      <div className="absolute top-1/4 left-[-10%] w-[650px] h-[650px] bg-[#0018C5]/18 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-[-10%] w-[650px] h-[650px] bg-[#00F2FE]/12 blur-[170px] rounded-full pointer-events-none" />

      {/* Micro-dot Background Matrix */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00F2FE 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Exact Badge from User's Image */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          
          {/* Exact Badge from User's Screenshot: Rounded pill, blue border, dark fill, glowing cyan text */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#03061A] border border-[#0055FF] text-xs sm:text-sm font-bold text-[#00F2FE] mb-6 shadow-[0_0_18px_rgba(0,85,255,0.45)]">
            <span className="inline-flex items-center justify-center relative shrink-0">
              <svg 
                className="w-4 h-4 text-[#00F2FE] drop-shadow-[0_0_8px_#00F2FE]" 
                viewBox="0 0 100 100" 
                fill="currentColor"
              >
                <path d="M50 0 C50 30 70 50 100 50 C70 50 50 70 50 100 C50 70 30 50 0 50 C30 50 50 30 50 0 Z" />
              </svg>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] absolute -bottom-0.5 -right-0.5 shadow-[0_0_4px_#00F2FE]" />
              <span className="w-0.5 h-0.5 rounded-full bg-[#E0F7FF] absolute -top-0.5 -left-0.5" />
            </span>
            <span className="uppercase tracking-widest font-mono">INTELLIGENT SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.12]">
            Four specialized products. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
              One unified AI revenue engine.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#9EA6CA] leading-relaxed">
            Every solution is tailored to capture, qualify, and convert your inbound pipeline without human latency.
          </p>
        </div>

        {/* 4 Stacked Services Cards with Crisp Light Theme Product Displays */}
        <div className="space-y-8 sm:space-y-10">
          {servicesData.map((service) => {
            const isImageLeft = service.imagePosition === 'left';
            const isVoiceService = service.id === 'spheno-voice';

            return (
              <div
                key={service.id}
                id={service.id}
                className={`relative rounded-3xl bg-[#06092A]/85 border transition-all duration-500 backdrop-blur-xl p-6 sm:p-10 lg:p-12 group cursor-default hover:-translate-y-2 hover:scale-[1.012] ${
                  isVoiceService
                    ? 'border-cyan-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(0,242,254,0.12)] hover:border-cyan-400/80 hover:shadow-[0_40px_90px_rgba(0,0,0,0.6),0_0_80px_rgba(0,242,254,0.35),inset_0_1px_0_rgba(0,242,254,0.2)]'
                    : 'border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-cyan-400/50 hover:shadow-[0_40px_90px_rgba(0,0,0,0.6),0_0_60px_rgba(0,180,255,0.25),inset_0_1px_0_rgba(0,242,254,0.12)]'
                }`}
              >
                {/* Hover shimmer overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/0 via-cyan-400/[0.05] to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top edge glow line */}
                <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/60 transition-all duration-500 pointer-events-none" />

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Visual Image Mockup (Light Theme UI Preview Screen) */}
                  <div className={`lg:col-span-7 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                    {isVoiceService ? (
                      <VoiceBotAvatar
                        isPlaying={isPlayingVoice}
                        onTogglePlay={() => setIsPlayingVoice(!isPlayingVoice)}
                      />
                    ) : service.id === 'spheno-whatsapp' ? (
                      <WhatsAppProductMockup />
                    ) : service.id === 'spheno-chat' ? (
                      <ChatProductMockup />
                    ) : service.id === 'spheno-crm' ? (
                      <CrmProductMockup />
                    ) : (
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl group-hover:border-cyan-400/60 group-hover:shadow-[0_20px_60px_rgba(0,180,255,0.3)] transition-all duration-500 bg-white">
                        <img
                          src={service.imageSrc}
                          alt={service.imageAlt}
                          className="w-full h-auto object-cover transform group-hover:scale-[1.035] transition-transform duration-700 block"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  {/* Text Details & Metrics */}
                  <div className={`lg:col-span-5 flex flex-col justify-center ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Pill Eyebrow Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08103A] border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold tracking-wider uppercase mb-5 w-fit shadow-[0_0_12px_rgba(0,242,254,0.15)] transition-all duration-500 group-hover:border-cyan-400/70 group-hover:shadow-[0_0_22px_rgba(0,242,254,0.4)] group-hover:-translate-y-0.5">
                      <span>{service.pill}</span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-[1.2] transition-colors duration-500 group-hover:text-cyan-50">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="mt-4 text-sm sm:text-base text-[#9EA6CA] leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* 2 Bullet Metrics with Glowing Cyan Dots */}
                    <div className="mt-6 pt-6 border-t border-white/[0.08] space-y-3">
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F2FE] transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_16px_#00F2FE]" />
                        <span>{service.bullet1}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
                        <span className="w-2 h-2 rounded-full bg-[#0070F3] shadow-[0_0_8px_#0070F3] transition-all duration-500 delay-75 group-hover:scale-150 group-hover:shadow-[0_0_16px_#0070F3]" />
                        <span>{service.bullet2}</span>
                      </div>
                    </div>

                    {/* Interactive Action Controls */}
                    <div className="mt-8 pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
                      {isVoiceService ? (
                        <button
                          type="button"
                          onClick={() => setIsPlayingVoice(!isPlayingVoice)}
                          className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#0018C5] via-[#1D4ED8] to-[#0284C7] hover:from-[#0024EA] hover:via-[#2563EB] hover:to-[#00F2FE] text-xs sm:text-sm font-bold text-white border border-cyan-400/40 shadow-[0_0_24px_rgba(0,180,255,0.35)] hover:shadow-[0_0_36px_rgba(0,242,254,0.6)] active:scale-95 transition-all duration-200 cursor-pointer shrink-0"
                        >
                          <Volume2 className={`w-4 h-4 text-cyan-200 shrink-0 ${isPlayingVoice ? 'animate-pulse text-cyan-300' : ''}`} />
                          <span className="whitespace-nowrap tracking-wide">
                            {isPlayingVoice ? 'Pause Voice Demo' : "Let's Try It Out"}
                          </span>
                        </button>
                      ) : null}

                      <a
                        href="#execution"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4 transition-colors group cursor-pointer"
                      >
                        <span>Learn how {service.pill.split('·')[1]?.trim() || 'it'} executes</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
