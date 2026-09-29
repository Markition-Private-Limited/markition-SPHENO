import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { SphenoLogo } from './SphenoLogo';

interface NavbarProps {
  onOpenConsultation: () => void;
}

const SOLUTIONS_MENU = [
  {
    heading: 'Media',
    description: 'Google Ads, SEO, social media management & paid campaigns.',
    href: '/media',
  },
  {
    heading: 'Technologies',
    description: 'Custom software, web apps, mobile platforms & SaaS products.',
    href: '/tech',
  },
  {
    heading: 'Design Lab',
    description: 'Brand identity, UI/UX design, motion graphics & print.',
    href: '/design-lab',
  },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#030407]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-[68px] flex items-center justify-between">
        
        {/* Official Brand Logo */}
        <a 
          href="#" 
          className="flex items-center group transition-opacity hover:opacity-90 cursor-pointer"
          aria-label="SPHENO.AI Home"
        >
          <SphenoLogo variant="dark" size="md" className="h-6 sm:h-7" />
        </a>

        {/* Clean Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13.5px] font-medium text-[#94A3B8]">
          <a href="#system" className="hover:text-white transition-colors duration-200">
            System
          </a>
          <a href="#products" className="hover:text-white transition-colors duration-200">
            Products
          </a>
          <a href="#industries" className="hover:text-white transition-colors duration-200">
            Industries
          </a>
          <a href="#execution" className="hover:text-white transition-colors duration-200">
            How It Works
          </a>

          {/* Solutions dropdown */}
          <div className="relative" ref={solutionsRef}>
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex items-center gap-1 hover:text-white transition-colors duration-200 cursor-pointer"
              aria-expanded={solutionsOpen}
            >
              Solutions
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[340px] rounded-2xl border border-white/[0.08] bg-[#05060B]/98 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.55)] p-2 z-50">
                {SOLUTIONS_MENU.map((sol) => (
                  <a
                    key={sol.heading}
                    href={sol.href}
                    target="_top"
                    onClick={() => setSolutionsOpen(false)}
                    className="flex flex-col gap-0.5 rounded-xl px-4 py-3 hover:bg-white/[0.05] transition-colors duration-150 group"
                  >
                    <span className="text-[13.5px] font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {sol.heading}
                    </span>
                    <span className="text-[12px] text-[#7A8CA8] leading-snug">
                      {sol.description}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#faq" className="hover:text-white transition-colors duration-200">
            FAQ
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href="#chat-demo"
            className="text-[13px] font-medium text-[#94A3B8] hover:text-white transition-colors px-2 py-1 whitespace-nowrap"
          >
            Live Demo
          </a>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0018C5] hover:bg-[#0024EA] border border-cyan-400/40 rounded-full transition-all shadow-[0_0_18px_rgba(0,242,254,0.2)] hover:shadow-[0_0_24px_rgba(0,242,254,0.4)] whitespace-nowrap group cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#94A3B8] hover:text-white p-2"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#05060B]/98 border-b border-white/[0.08] px-6 py-6 space-y-4 backdrop-blur-2xl">
          <div className="pb-3 border-b border-white/[0.06]">
            <SphenoLogo variant="dark" size="sm" />
          </div>
          <nav className="flex flex-col space-y-3 text-sm font-medium text-[#94A3B8]">
            <a 
              href="#system" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1 transition-colors"
            >
              System
            </a>
            <a 
              href="#products" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1 transition-colors"
            >
              Products
            </a>
            <a 
              href="#industries" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1 transition-colors"
            >
              Industries
            </a>
            <a
              href="#execution"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1 transition-colors"
            >
              How It Works
            </a>

            {/* Mobile Solutions dropdown */}
            <div>
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full flex items-center justify-between hover:text-white py-1 transition-colors"
                aria-expanded={mobileSolutionsOpen}
              >
                Solutions
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileSolutionsOpen && (
                <div className="mt-2 pl-3 border-l border-white/[0.08] flex flex-col gap-3">
                  {SOLUTIONS_MENU.map((sol) => (
                    <a
                      key={sol.heading}
                      href={sol.href}
                      target="_top"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[13px] text-[#94A3B8] hover:text-white transition-colors"
                    >
                      {sol.heading}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1 transition-colors"
            >
              FAQ
            </a>
          </nav>
          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
            <a
              href="#chat-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-medium text-cyan-300 py-1"
            >
              Live Demo
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0018C5] rounded-full border border-cyan-400/40"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
