import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { SphenoLogo } from './SphenoLogo';

interface NavbarProps {
  onOpenConsultation: () => void;
}

const NAV_LINKS = [
  { label: 'System', href: '#system' },
  { label: 'Products', href: '#products' },
  { label: 'Industries', href: '#industries' },
  { label: 'How It Works', href: '#execution' },
] as const;

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

const floatStyle: React.CSSProperties = {
  // Kept deliberately light: this box is `fixed`, so the browser recomputes
  // its backdrop every scroll frame for the whole session — a heavy blur +
  // saturate here was a major source of site-wide scroll jank. A higher
  // background opacity compensates for the smaller blur radius.
  background: 'rgba(6, 7, 18, 0.86)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 4px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,112,243,0.06) inset',
};

const mobileMenuStyle: React.CSSProperties = {
  background: 'rgba(5, 6, 15, 0.97)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(255,255,255,0.08)',
};

const ctaStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #0018C5 0%, #0040FF 60%, #0070F3 100%)',
  boxShadow: '0 0 20px rgba(0,112,243,0.35), 0 1px 0 rgba(255,255,255,0.12) inset',
  border: '1px solid rgba(0,242,254,0.25)',
};

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSolutionsOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4">

      {/* Floating nav box */}
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3.5 sm:py-4 rounded-2xl gap-4"
        style={floatStyle}
      >
        {/* Logo — links to homepage */}
        <a
          href="#"
          aria-label="SPHENO.AI Home"
          className="flex items-center gap-2.5 flex-shrink-0 hover:opacity-85 transition-opacity"
        >
          <SphenoLogo variant="dark" size="md" className="h-8 sm:h-9" />
        </a>

        {/* Desktop links */}
        <ul
          role="list"
          className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-[13.5px] text-[#8A9AB8] font-medium flex-1 justify-center list-none m-0 p-0"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="flex items-center whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white/[0.06] hover:text-white transition-colors duration-150"
              >
                {label}
              </a>
            </li>
          ))}

          {/* Solutions dropdown */}
          <li className="relative" ref={solutionsRef}>
            <button
              type="button"
              onClick={() => setSolutionsOpen((v) => !v)}
              aria-expanded={solutionsOpen}
              className="flex items-center gap-1.5 whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white/[0.06] hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Solutions
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`} />
            </button>

            {solutionsOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[360px] rounded-2xl overflow-hidden z-50"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(5,6,15,0.97)',
                  backdropFilter: 'blur(28px)',
                  boxShadow: '0 28px 70px rgba(0,0,0,0.65), 0 0 0 1px rgba(0,112,243,0.08) inset',
                }}
              >
                <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,242,254,0.35), transparent)' }} />
                <div className="p-2">
                  {SOLUTIONS_MENU.map((sol) => (
                    <a
                      key={sol.heading}
                      href={sol.href}
                      target="_top"
                      onClick={() => setSolutionsOpen(false)}
                      className="flex items-start gap-3 rounded-xl px-4 py-3.5 hover:bg-white/[0.05] transition-all duration-150 group"
                    >
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover:bg-cyan-300 transition-colors shrink-0" />
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
          </li>

          <li>
            <a
              href="#faq"
              className="flex items-center whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white/[0.06] hover:text-white transition-colors duration-150"
            >
              FAQ
            </a>
          </li>
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="#chat-demo"
            className="hidden sm:flex items-center px-3.5 py-2 text-[13px] font-medium text-[#8A9AB8] hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors duration-150 whitespace-nowrap"
          >
            Live Demo
          </a>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex relative items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white rounded-full transition-all duration-300 cursor-pointer group overflow-hidden whitespace-nowrap"
            style={ctaStyle}
          >
            {/* Shimmer sweep */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)' }}
            />
            <span className="relative">Start a Conversation</span>
            <ArrowRight className="relative w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>

          {/* Hamburger — shown below lg */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-[#8A9AB8] hover:text-white hover:bg-white/[0.08] transition-colors duration-150"
          >
            {mobileOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
          </button>
        </div>
      </nav>

      {/* Mobile slide-down */}
      <div
        id="mobile-nav"
        className="lg:hidden overflow-hidden"
        aria-hidden={!mobileOpen}
        style={{
          maxHeight: mobileOpen ? '640px' : '0px',
          opacity: mobileOpen ? 1 : 0,
          transition: 'max-height 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease',
        }}
      >
        <nav aria-label="Mobile navigation" className="mt-2 rounded-2xl overflow-hidden" style={mobileMenuStyle}>
          <ul role="list" className="list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="border-b border-white/[0.05]">
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-5 py-3.5 text-[13.5px] text-[#8A9AB8] hover:text-white hover:bg-white/[0.05] transition-colors duration-150"
                >
                  <span>{link.label}</span>
                </a>
              </li>
            ))}

            {/* Mobile Solutions accordion */}
            <li className="border-b border-white/[0.05]">
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen((v) => !v)}
                aria-expanded={mobileSolutionsOpen}
                className="w-full flex items-center justify-between px-5 py-3.5 text-[13.5px] text-[#8A9AB8] hover:text-white hover:bg-white/[0.05] transition-colors duration-150"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{ maxHeight: mobileSolutionsOpen ? '280px' : '0px' }}
              >
                <div className="px-4 pb-3 flex flex-col gap-1">
                  {SOLUTIONS_MENU.map((sol) => (
                    <a
                      key={sol.heading}
                      href={sol.href}
                      target="_top"
                      onClick={() => setMobileOpen(false)}
                      className="px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-colors duration-150"
                    >
                      <span className="block text-[12.5px] font-semibold text-white/90">{sol.heading}</span>
                      <span className="block text-[11px] text-[#6A7A92] mt-0.5 leading-snug">{sol.description}</span>
                    </a>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <a
                href="#faq"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-5 py-3.5 text-[13.5px] text-[#8A9AB8] hover:text-white hover:bg-white/[0.05] transition-colors duration-150"
              >
                <span>FAQ</span>
              </a>
            </li>
          </ul>

          <div className="p-4 border-t border-white/[0.05] flex flex-col gap-2.5">
            <a
              href="#chat-demo"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center px-4 py-2.5 text-[13px] font-medium text-cyan-400 rounded-xl hover:bg-white/[0.05] transition-colors duration-150"
            >
              Live Demo
            </a>
            <button
              type="button"
              onClick={() => { setMobileOpen(false); onOpenConsultation(); }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-[13.5px] font-semibold text-white rounded-[6px] transition-all"
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
        </nav>
      </div>
    </header>
  );
};
