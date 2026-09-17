'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Activity, ShieldCheck, LineChart, Shield, LayoutGrid } from 'lucide-react';

interface MobileNavProps {
  links: { href: string; label: string }[];
  ctaText: string;
  ctaLink: string;
}

const getIcon = (label: string) => {
  const lower = label.toLowerCase();
  if (lower.includes('observatory')) return <Activity className="w-6 h-6" />;
  if (lower.includes('standards')) return <ShieldCheck className="w-6 h-6" />;
  if (lower.includes('roi')) return <LineChart className="w-6 h-6" />;
  if (lower.includes('compliance')) return <Shield className="w-6 h-6" />;
  return <LayoutGrid className="w-6 h-6" />;
};

export default function MobileNav({ links, ctaText, ctaLink }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Three Dots Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 flex flex-col items-center justify-center gap-1 rounded-full hover:bg-gray-100 transition-colors z-50"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className={`block bg-[var(--color-brand-navy)] rounded-full transition-all duration-300 ${isOpen ? 'absolute w-5 h-[2px] rotate-45' : 'w-1.5 h-1.5'}`} />
        <span className={`block bg-[var(--color-brand-navy)] rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 w-5 h-[2px]' : 'w-1.5 h-1.5'}`} />
        <span className={`block bg-[var(--color-brand-navy)] rounded-full transition-all duration-300 ${isOpen ? 'absolute w-5 h-[2px] -rotate-45' : 'w-1.5 h-1.5'}`} />
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-[64px] right-0 w-full h-[100vh] z-40 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 w-[300px] h-full bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full overflow-y-auto">
            
            {/* App Icon Grid */}
            <div className="grid grid-cols-2 gap-4 p-6 pt-10">
              {links.map((link, i) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col items-center justify-center p-5 gap-3 bg-[var(--color-brand-offwhite)] rounded-[1.5rem] active:scale-[0.95] transition-transform shadow-sm border border-gray-100"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[var(--color-brand-navy)]">
                    {getIcon(link.label)}
                  </div>
                  <span className="text-[12px] font-bold text-[var(--color-brand-navy)] text-center leading-tight tracking-tight">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="h-px bg-gray-100 mx-6 my-2" />

            <div className="p-6">
              <a
                href={ctaLink}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 bg-[var(--color-brand-navy)] text-white rounded-2xl font-bold text-sm shadow-lg active:scale-[0.97] transition-transform"
              >
                {ctaText}
                <span className="text-[var(--color-brand-accent)]">→</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
