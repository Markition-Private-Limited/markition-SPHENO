import React from 'react';
import { SphenoLogo } from './SphenoLogo';

const TwitterIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#03040C] text-[#8A9AB8]">
      {/* Top gradient border */}
      <div className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,112,243,0.4) 25%, rgba(0,242,254,0.3) 50%, rgba(99,102,241,0.4) 75%, transparent)' }}
      />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,24,197,0.1) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/[0.06]">

          {/* Col 1: Brand + about + contact */}
          <div className="md:col-span-4 space-y-5">
            <a href="#" aria-label="SPHENO.AI Home" className="inline-block hover:opacity-80 transition-opacity">
              <SphenoLogo variant="dark" size="lg" className="h-7 sm:h-8" />
            </a>

            <p className="text-sm text-[#6A7A92] leading-relaxed max-w-xs">
              Markition&apos;s central AI business system — bringing Spheno Chat, Voice, CRM, and WhatsApp AI into one synchronized operating layer.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-3 pt-1">
              <a
                href="https://maps.google.com/?q=Houston,Texas,USA"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[12.5px] text-[#6A7A92] hover:text-[#94A3B8] transition-colors"
              >
                <span className="text-cyan-500/70 shrink-0"><PinIcon /></span>
                Houston, Texas, USA
              </a>
              <a
                href="tel:+17138947727"
                className="flex items-center gap-2.5 text-[12.5px] text-[#6A7A92] hover:text-[#94A3B8] transition-colors"
              >
                <span className="text-cyan-500/70 shrink-0"><PhoneIcon /></span>
                +1 (713) 894-7727
              </a>
              <a
                href="mailto:hey@markition.com"
                className="flex items-center gap-2.5 text-[12.5px] text-[#6A7A92] hover:text-[#94A3B8] transition-colors"
              >
                <span className="text-cyan-500/70 shrink-0"><MailIcon /></span>
                hey@markition.com
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { href: 'https://twitter.com',   label: 'Twitter',   icon: <TwitterIcon /> },
                { href: 'https://facebook.com',  label: 'Facebook',  icon: <FacebookIcon /> },
                { href: 'https://linkedin.com',  label: 'LinkedIn',  icon: <LinkedInIcon /> },
                { href: 'https://instagram.com', label: 'Instagram', icon: <InstagramIcon /> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-[#4A5A72] hover:text-cyan-400 hover:bg-white/[0.06] transition-all duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2–4: Nav columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-[12.5px]">

            {/* Company */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/50 mb-4">Company</p>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: 'About Us',  href: '/about' },
                  { label: 'Services',  href: '/services' },
                  { label: 'Portfolio', href: '/portfolio' },
                  { label: 'Blog',      href: '/blog' },
                  { label: 'Contact',   href: '/contact' },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_top"
                      className="text-[#6A7A92] hover:text-[#C8D8EE] transition-colors duration-150"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/50 mb-4">Services</p>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: 'Web Design',          href: '/services/web-design' },
                  { label: 'SEO Optimization',    href: '/services/seo' },
                  { label: 'Social Media',        href: '/services/social-media' },
                  { label: 'Paid Advertising',    href: '/services/paid-ads' },
                  { label: 'Content Marketing',   href: '/services/content' },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_top"
                      className="text-[#6A7A92] hover:text-[#C8D8EE] transition-colors duration-150"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/50 mb-4">Products</p>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: 'Spheno Chat',       href: '#products' },
                  { label: 'Spheno Voice',      href: '#products' },
                  { label: 'Spheno CRM',        href: '#products' },
                  { label: 'Spheno WhatsApp',   href: '#products' },
                  { label: 'Live Demo',         href: '#chat-demo' },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[#6A7A92] hover:text-[#C8D8EE] transition-colors duration-150"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/50 mb-4">Industries</p>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: 'Dental Clinics',     href: '#industries' },
                  { label: 'Aesthetic Clinics',  href: '#industries' },
                  { label: 'Hair Restoration',   href: '#industries' },
                  { label: 'Luxury Spa & Salons',href: '#industries' },
                  { label: 'Medical Practices',  href: '#industries' },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[#6A7A92] hover:text-[#C8D8EE] transition-colors duration-150"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11.5px] text-[#4A5A72]">
          <span>© 2026 Markition Private Limited. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="/terms"   target="_top" className="hover:text-[#8A9AB8] transition-colors">Terms of Use</a>
            <a href="/privacy" target="_top" className="hover:text-[#8A9AB8] transition-colors">Privacy Policy</a>
            <span className="text-white/30">Markition Proprietary Technology</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
