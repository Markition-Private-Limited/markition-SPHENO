import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { TheProblem } from './components/TheProblem';
import { SphenoSystem } from './components/SphenoSystem';
import { SphenoProducts } from './components/SphenoProducts';
import { AiWorkforce } from './components/AiWorkforce';
import { Industries } from './components/Industries';
import { TalkThinkAct } from './components/TalkThinkAct';
import { WhySpheno } from './components/WhySpheno';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080C42] text-slate-100 selection:bg-[#0018C5] selection:text-white">
      {/* 01 Navigation */}
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main>
        {/* 02 Hero (Dark #050827) + Trust Strip — fills the first viewport so the Marquee always sits flush against the fold */}
        <div className="flex flex-col min-h-screen">
          <Hero onOpenConsultation={() => setConsultationOpen(true)} />

          {/* 03 Marquee (Dark full-width infinite ticker) */}
          <Marquee />
        </div>

        {/* 04 The Problem (Editorial Light #F5F5F2) */}
        <TheProblem />

        {/* 05 The Spheno AI System (Signature Dark #050827) */}
        <SphenoSystem />

        {/* 06 The 4 Spheno Intelligent Products (Matching Reference Layout) */}
        <SphenoProducts />

        {/* 07 Meet Your AI Workforce (Editorial Light #F5F5F2) */}
        <AiWorkforce />

        {/* 11 Industries (Dark #050625) */}
        <Industries />

        {/* 13 AI Workflow Section: Talk · Think · Act (Dark #050827) */}
        <TalkThinkAct />

        {/* 14 Why Spheno AI (Architectural Advantage, Dark #080C42) */}
        <WhySpheno />

        {/* 15 FAQ (Editorial Light #F5F5F2) */}
        <Faq />

        {/* 16 Final CTA (Cinematic Dark #080C42) */}
        <FinalCta onOpenConsultation={() => setConsultationOpen(true)} />
      </main>

      {/* 17 Footer (Dark #05072B) */}
      <Footer />

      {/* Interactive Consultation Request Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
