import React, { useState } from 'react';
import { MessageSquare, Calendar, CheckCircle2, ArrowRight, Sparkles, Send, RefreshCw, UserCheck } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'visitor' | 'ai';
  text: string;
  time: string;
  options?: string[];
  slots?: string[];
  isBadge?: boolean;
}

export const SphenoChat: React.FC = () => {
  const [chatStep, setChatStep] = useState<number>(3); // Default shows interactive progressed state
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [leadQualified, setLeadQualified] = useState<boolean>(true);
  const [crmSynced, setCrmSynced] = useState<boolean>(true);

  // Steps in the conversation
  const steps: ChatMessage[][] = [
    // Step 0: Initial
    [
      { id: '1', sender: 'visitor', text: 'Hi! Do you offer private dental implant consultations?', time: '7:42 PM' },
      { id: '2', sender: 'ai', text: 'Hello! Yes, we offer comprehensive 45-minute dental implant assessments with 3D digital CT imaging included. Are you looking to replace a single tooth or multiple teeth?', time: '7:42 PM', options: ['Single tooth replacement', 'Full arch / Multiple teeth', 'General pricing inquiry'] },
    ],
    // Step 1: Visitor responded
    [
      { id: '1', sender: 'visitor', text: 'Hi! Do you offer private dental implant consultations?', time: '7:42 PM' },
      { id: '2', sender: 'ai', text: 'Hello! Yes, we offer comprehensive 45-minute dental implant assessments with 3D digital CT imaging included. Are you looking to replace a single tooth or multiple teeth?', time: '7:42 PM' },
      { id: '3', sender: 'visitor', text: 'Looking to replace two lower molars.', time: '7:43 PM' },
      { id: '4', sender: 'ai', text: 'Understood. Dr. Bennett specializes in targeted dual-molar restorations with titanium-grade implants. I can reserve an assessment slot for you with Dr. Bennett. Which of these works best?', time: '7:43 PM', slots: ['Thursday 11:30 AM', 'Thursday 3:15 PM', 'Friday 10:00 AM'] },
    ],
    // Step 2: Booked
    [
      { id: '1', sender: 'visitor', text: 'Hi! Do you offer private dental implant consultations?', time: '7:42 PM' },
      { id: '2', sender: 'ai', text: 'Hello! Yes, we offer comprehensive 45-minute dental implant assessments with 3D digital CT imaging included. Are you looking to replace a single tooth or multiple teeth?', time: '7:42 PM' },
      { id: '3', sender: 'visitor', text: 'Looking to replace two lower molars.', time: '7:43 PM' },
      { id: '4', sender: 'ai', text: 'Understood. Dr. Bennett specializes in targeted dual-molar restorations with titanium-grade implants. I can reserve an assessment slot for you with Dr. Bennett. Which of these works best?', time: '7:43 PM' },
      { id: '5', sender: 'visitor', text: 'Thursday at 3:15 PM works great for me.', time: '7:43 PM' },
      { id: '6', sender: 'ai', text: 'Confirmed! You are reserved for Thursday, Oct 2nd at 3:15 PM with Dr. Bennett. A digital calendar invite and SMS confirmation have been dispatched.', time: '7:44 PM' },
    ],
  ];

  const handleSelectOption = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setChatStep(1);
      setIsTyping(false);
    }, 450);
  };

  const handleSelectSlot = (slot: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setChatStep(2);
      setLeadQualified(true);
      setCrmSynced(true);
      setIsTyping(false);
    }, 450);
  };

  const handleReset = () => {
    setChatStep(0);
    setLeadQualified(false);
    setCrmSynced(false);
  };

  const currentMessages = steps[chatStep] || steps[0];

  return (
    <section id="chat-demo" className="py-20 md:py-28 bg-white text-[#080C42] border-b border-[#DEDED8]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 md:mb-16 items-end">
          <div className="lg:col-span-8">
            <div className="label-eyebrow text-[#0018C5] mb-3 flex items-center gap-2">
              <span>01</span>
              <span className="text-[#6D7CFF]">·</span>
              <span>SPHENO CHAT</span>
            </div>
            <h2 className="headline-section text-[#080C42] text-balance">
              Your website can answer. <br className="hidden sm:inline" />
              Even when your team can&apos;t.
            </h2>
            <p className="body-lead text-[#6E706D] mt-4">
              Spheno Chat replaces passive FAQ accordions and rigid rule-based chatbots with an intelligent agent that understands clinical and commercial nuances, recommends tailored options, and books customers on the spot.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row items-start sm:items-center lg:justify-end gap-3">
            <div className="flex items-center gap-2 bg-[#F5F5F2] px-3 py-1.5 rounded-lg border border-[#DEDED8]">
              <span className="data-telemetry text-[#6E706D] whitespace-nowrap">Dialogue:</span>
              <input
                type="range"
                min="0"
                max="2"
                value={Math.min(chatStep, 2)}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setChatStep(val);
                  setLeadQualified(val === 2);
                  setCrmSynced(val === 2);
                }}
                className="spheno-slider-light w-24"
                aria-label="Chat step scrubber"
              />
              <span className="data-telemetry font-bold text-[#0018C5]">
                0{Math.min(chatStep + 1, 3)}/03
              </span>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-[#0018C5] hover:bg-[#EEF0FF] rounded-lg transition-colors border border-[#BBC4FF] cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Browser Mockup + Live Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Browser Window */}
          <div className="lg:col-span-8 bg-[#F5F5F2] rounded-2xl border border-[#DEDED8] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] overflow-hidden">
            
            {/* Browser Window Header */}
            <div className="px-5 py-3.5 bg-[#EFEFEA] border-b border-[#DEDED8] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E07A5F]/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#E9C46A]/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#2A9D8F]/80 inline-block" />
                <span className="text-xs text-[#6E706D] ml-2">
                  https://premier-clinic.com/consultations
                </span>
              </div>
              <div className="flex items-center gap-2 data-telemetry text-emerald-700 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Spheno Agent Active</span>
              </div>
            </div>

            {/* Chat Viewport */}
            <div className="p-6 md:p-8 min-h-[460px] flex flex-col justify-between bg-white">
              
              {/* Messages Container */}
              <div className="space-y-4">
                {currentMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'visitor' ? 'items-end' : 'items-start'}`}
                  >
                    <div className="flex items-center gap-2 mb-1 text-xs text-[#6E706D]">
                      <span>{msg.sender === 'visitor' ? 'High-Intent Visitor' : 'Spheno Chat Agent'}</span>
                      <span aria-hidden="true">·</span>
                      <span>{msg.time}</span>
                    </div>

                    <div
                      className={`max-w-md p-4 rounded-xl text-[15px] leading-relaxed ${
                        msg.sender === 'visitor'
                          ? 'bg-[#080C42] text-white rounded-br-none shadow-sm'
                          : 'bg-[#F5F5F2] text-[#080C42] border border-[#DEDED8] rounded-bl-none'
                      }`}
                    >
                      {msg.text}

                      {/* Interactive Options if available */}
                      {msg.options && (
                        <div className="mt-3 pt-3 border-t border-[#DEDED8] space-y-1.5">
                          <div className="text-xs text-[#0018C5] font-semibold">
                            Select to test agent response:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {msg.options.map((opt, i) => (
                              <button
                                key={i}
                                onClick={() => handleSelectOption(opt)}
                                className="px-3 py-1.5 text-xs font-medium bg-white hover:bg-[#0018C5] hover:text-white border border-[#DEDED8] hover:border-[#0018C5] rounded-md transition-colors cursor-pointer text-left"
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Interactive Calendar Slots if available */}
                      {msg.slots && (
                        <div className="mt-3 pt-3 border-t border-[#DEDED8] space-y-2">
                          <div className="text-xs text-[#0018C5] font-semibold flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Live Openings Found (Dr. Bennett):</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {msg.slots.map((slot, i) => (
                              <button
                                key={i}
                                onClick={() => handleSelectSlot(slot)}
                                className="px-3 py-2 text-xs font-semibold bg-white hover:bg-[#0018C5] hover:text-white border border-[#0018C5]/30 rounded-md transition-all text-center cursor-pointer shadow-xs"
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-xs text-[#6E706D] bg-[#F5F5F2] p-3 rounded-lg max-w-[160px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0018C5] animate-bounce" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0018C5] animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0018C5] animate-bounce [animation-delay:0.4s]" />
                    <span>Analyzing intent...</span>
                  </div>
                )}
              </div>

              {/* Chat Input Bar */}
              <div className="mt-8 pt-4 border-t border-[#DEDED8] flex items-center gap-3">
                <input
                  type="text"
                  readOnly
                  value="Looking to replace two lower molars this month..."
                  className="w-full bg-[#F5F5F2] border border-[#DEDED8] rounded-lg px-4 py-2.5 text-xs text-[#6E706D] focus:outline-none"
                />
                <button 
                  onClick={() => handleSelectOption('Looking to replace two lower molars.')}
                  className="px-4 py-2.5 bg-[#0018C5] text-white rounded-lg text-xs font-semibold hover:bg-[#1524BD] transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Status Panel: Lead Qualification & Real-Time CRM Push */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Qualification Card */}
            <div className="bg-[#F5F5F2] rounded-xl border border-[#DEDED8] p-6">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DEDED8]">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#6E706D]">
                  Spheno Intelligence Engine
                </div>
                <UserCheck className="w-4 h-4 text-[#0018C5]" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#6E706D]">Intent Category:</span>
                  <span className="text-xs font-semibold text-[#080C42]">Dental Restorative</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#6E706D]">Buyer Urgency:</span>
                  <span className="text-xs font-semibold text-emerald-700">Immediate (&lt; 7 Days)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#6E706D]">Estimated Value:</span>
                  <span className="text-sm font-bold tabular-nums text-[#080C42]">$3,800 – $5,200</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#6E706D]">Qualification Score:</span>
                  <span className="text-sm font-bold tabular-nums text-[#0018C5]">98 / 100</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#DEDED8]">
                <div className="text-xs text-emerald-700 flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Consultation Booking</span>
                </div>
              </div>
            </div>

            {/* Instant Push to Spheno CRM */}
            <div className="bg-[#080C42] text-white rounded-xl border border-[#202449] p-6 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-[#BBC4FF] uppercase tracking-wider font-semibold">
                  Direct Conduit → Spheno CRM
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <div className="text-sm font-semibold text-white">
                Live Data Synchronized
              </div>
              <p className="text-sm text-[#B9BFDC] mt-1.5 leading-relaxed">
                Contact profile created, calendar invitation dispatched, and clinical intake notes appended automatically to customer timeline.
              </p>

              <div className="mt-4 p-3 rounded-lg bg-[#090C39] border border-[#202449] text-xs space-y-1 font-medium">
                <div className="text-[#9EA6CA]">RECORD: #LEAD-84920</div>
                <div className="text-white">ASSIGNED: Dr. Bennett · 45m</div>
                <div className="text-emerald-400">STATUS: CONFIRMED & SYNCED</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
