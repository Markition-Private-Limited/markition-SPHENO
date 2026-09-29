import React from 'react';
import { SphenoLogo } from './SphenoLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05072B] text-[#AEB3D1] border-t border-[#161A35] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#161A35]">
          
          {/* Brand lockup */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block group" aria-label="SPHENO.AI Home">
              <SphenoLogo variant="dark" size="lg" className="h-7 sm:h-8" />
            </a>
            <p className="text-sm text-[#AEB3D1] max-w-sm leading-relaxed">
              Markition&apos;s central AI business system. Bringing Spheno Chat, Spheno Voice, Spheno CRM, and Spheno WhatsApp AI together into one synchronized operating layer.
            </p>
            <div className="text-xs text-[#6D7CFF] font-medium">
              Engineered for appointment-driven practices &amp; high-value service businesses.
            </div>
          </div>

          {/* Navigation Mirrors */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-medium">
            <div>
              <div className="text-white font-semibold mb-3 uppercase tracking-wider">
                System
              </div>
              <ul className="space-y-2">
                <li><a href="#system" className="hover:text-white transition-colors">Architecture</a></li>
                <li><a href="#journey" className="hover:text-white transition-colors">Customer Journey</a></li>
                <li><a href="#architecture" className="hover:text-white transition-colors">Operating Layer</a></li>
                <li><a href="#chat-demo" className="hover:text-white transition-colors">Live Simulator</a></li>
              </ul>
            </div>

            <div>
              <div className="text-white font-semibold mb-3 uppercase tracking-wider">
                Products
              </div>
              <ul className="space-y-2">
                <li><a href="#chat-demo" className="hover:text-white transition-colors">Spheno Chat</a></li>
                <li><a href="#system" className="hover:text-white transition-colors">Spheno Voice</a></li>
                <li><a href="#system" className="hover:text-white transition-colors">Spheno CRM</a></li>
                <li><a href="#system" className="hover:text-white transition-colors">Spheno WhatsApp AI</a></li>
              </ul>
            </div>

            <div>
              <div className="text-white font-semibold mb-3 uppercase tracking-wider">
                Industries
              </div>
              <ul className="space-y-2">
                <li><a href="#industries" className="hover:text-white transition-colors">Dental Clinics</a></li>
                <li><a href="#industries" className="hover:text-white transition-colors">Aesthetician Clinics</a></li>
                <li><a href="#industries" className="hover:text-white transition-colors">Hair Restoration</a></li>
                <li><a href="#industries" className="hover:text-white transition-colors">Luxury Spa &amp; Salons</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AEB3D1]">
          <div>
            © 2026 Markition Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-white">Markition Proprietary Technology</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
