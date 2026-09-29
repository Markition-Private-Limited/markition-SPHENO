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
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
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

  const navLinks = [
    { label: 'System',       href: '#system' },
    { label: 'Products',     href: '#products' },
    { label: 'Industries',   href: '#industries' },
    { label: 'How It Works', href: '#execution' },
  ];

  return (
    <>
      {/* Subtle top accent line */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(0,242,254,0.45) 30%, rgba(99,102,241,0.5) 60%, rgba(0,24,197,0.4) 85%, transparent 100%)' }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#020308]/92 backdrop-blur-2xl border-b border-white/[0.07] shadow-[0_8px_40px_rgba(0,0,0,0.6)]'
            : 'bg-transparent border-b border-white/[0.03]'
        }`}
      >
        {/* Subtle inner glow on scroll */}
        {scrolled && (
          <div className="absolute inset-x-0 bottom-0 h-px pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,112,243,0.25) 30%, rgba(0,242,254,0.2) 60%, transparent)' }}
          />
        )}

        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-[72px] flex items-center justify-between gap-8">

          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group transition-opacity hover:opacity-85 shrink-0"
            aria-label="SPHENO.AI Home"
          >
            <SphenoLogo variant="dark" size="md" className="h-7 sm:h-[30px]" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 text-[13.5px] font-medium text-[#8A9AB8]">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onMouseEnter={() => setActiveLink(label)}
                onMouseLeave={() => setActiveLink('')}
                className="relative px-3.5 py-2 rounded-lg hover:text-white transition-colors duration-200 group"
              >
                <span className={`absolute inset-0 rounded-lg transition-opacity duration-200 ${activeLink === label ? 'opacity-100' : 'opacity-0'}`}
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                />
                <span className="relative">{label}</span>
              </a>
            ))}

            {/* Solutions dropdown */}
            <div className="relative" ref={solutionsRef}>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                onMouseEnter={() => setActiveLink('Solutions')}
                onMouseLeave={() => setActiveLink('')}
                className="relative px-3.5 py-2 rounded-lg flex items-center gap-1.5 hover:text-white transition-colors duration-200 cursor-pointer"
                aria-expanded={solutionsOpen}
              >
                <span className={`absolute inset-0 rounded-lg transition-opacity duration-200 ${activeLink === 'Solutions' ? 'opacity-100' : 'opacity-0'}`}
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                />
                <span className="relative">Solutions</span>
                <ChevronDown className={`relative w-3.5 h-3.5 transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[360px] rounded-2xl overflow-hidden z-50"
                  style={{
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(5,6,15,0.97)',
                    backdropFilter: 'blur(28px)',
                    boxShadow: '0 28px 70px rgba(0,0,0,0.65), 0 0 0 1px rgba(0,112,243,0.08) inset'
                  }}
                >
                  {/* Top accent */}
                  <div className="h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(0,242,254,0.35), transparent)' }}
                  />
                  <div className="p-2">
                    {SOLUTIONS_MENU.map((sol) => (
                      <a
                        key={sol.heading}
                        href={sol.href}
                        target="_top"
                        onClick={() => setSolutionsOpen(false)}
                        className="flex items-start gap-3 rounded-xl px-4 py-3.5 hover:bg-white/[0.05] transition-all duration-150 group"
                      >
                        <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover:bg-cyan-300 transition-colors shrink-0 mt-2" />
                        <div>
                          <span className="block text-[13px] font-semibold text-white/90 group-hover:text-white transition-colors mb-0.5">
                            {sol.heading}
                          </span>
                          <span className="block text-[11.5px] text-[#6A7A92] leading-snug">
                            {sol.description}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#faq"
              onMouseEnter={() => setActiveLink('FAQ')}
              onMouseLeave={() => setActiveLink('')}
              className="relative px-3.5 py-2 rounded-lg hover:text-white transition-colors duration-200"
            >
              <span className={`absolute inset-0 rounded-lg transition-opacity duration-200 ${activeLink === 'FAQ' ? 'opacity-100' : 'opacity-0'}`}
                style={{ background: 'rgba(255,255,255,0.05)' }}
              />
              <span className="relative">FAQ</span>
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#chat-demo"
              className="px-3.5 py-2 text-[13px] font-medium text-[#8A9AB8] hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
            >
              Live Demo
            </a>

            {/* Divider */}
            <div className="w-px h-4 bg-white/10" />

            <button
              onClick={onOpenConsultation}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white rounded-full transition-all duration-300 cursor-pointer group overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0018C5 0%, #0040FF 60%, #0070F3 100%)',
                boxShadow: '0 0 20px rgba(0,112,243,0.35), 0 1px 0 rgba(255,255,255,0.12) inset',
                border: '1px solid rgba(0,242,254,0.25)',
              }}
            >
              {/* Shimmer sweep */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)' }}
              />
              <span className="relative whitespace-nowrap">Start a Conversation</span>
              <ArrowRight className="relative w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl text-[#8A9AB8] hover:text-white hover:bg-white/[0.07] transition-all duration-200"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/[0.06] px-5 py-5"
            style={{ background: 'rgba(5,6,15,0.98)', backdropFilter: 'blur(28px)' }}
          >
            <div className="pb-4 mb-4 border-b border-white/[0.06]">
              <SphenoLogo variant="dark" size="sm" />
            </div>

            <nav className="flex flex-col gap-0.5 text-[13.5px] font-medium text-[#8A9AB8]">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-xl hover:text-white hover:bg-white/[0.05] transition-all duration-150"
                >
                  {label}
                </a>
              ))}

              {/* Mobile Solutions */}
              <div>
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:text-white hover:bg-white/[0.05] transition-all duration-150"
                  aria-expanded={mobileSolutionsOpen}
                >
                  Solutions
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileSolutionsOpen && (
                  <div className="mt-1 ml-4 pl-3 border-l border-white/[0.08] flex flex-col gap-1">
                    {SOLUTIONS_MENU.map((sol) => (
                      <a
                        key={sol.heading}
                        href={sol.href}
                        target="_top"
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-2 py-2 text-[12.5px] text-[#8A9AB8] hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
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
                className="px-3 py-2.5 rounded-xl hover:text-white hover:bg-white/[0.05] transition-all duration-150"
              >
                FAQ
              </a>
            </nav>

            <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-col gap-2.5">
              <a
                href="#chat-demo"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-[13px] font-medium text-cyan-400 rounded-xl hover:bg-white/[0.05] transition-all"
              >
                Live Demo
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-[13px] font-semibold text-white rounded-full transition-all"
                style={{
                  background: 'linear-gradient(135deg, #0018C5 0%, #0040FF 60%, #0070F3 100%)',
                  boxShadow: '0 0 16px rgba(0,112,243,0.3)',
                  border: '1px solid rgba(0,242,254,0.2)',
                }}
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
