'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MobileNavProps {
  links: { href: string; label: string }[];
  ctaText: string;
  ctaLink: string;
}

export default function MobileNav({ links, ctaText, ctaLink }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className={`block w-5 h-[2px] bg-[var(--color-brand-navy)] rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
        <span className={`block w-5 h-[2px] bg-[var(--color-brand-navy)] rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
        <span className={`block w-5 h-[2px] bg-[var(--color-brand-navy)] rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-[66px] z-50 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 w-[280px] h-full bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col p-6 pt-8 gap-1">
            {links.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3.5 text-[15px] font-medium text-[var(--color-brand-navy)] rounded-xl hover:bg-[var(--color-brand-offwhite)] transition-all duration-300 active:scale-[0.98]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </Link>
            ))}

            <div className="h-px bg-gray-100 my-4" />

            <a
              href={ctaLink}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--color-brand-navy)] text-white rounded-full font-bold text-sm shadow-lg active:scale-[0.97] transition-transform"
            >
              {ctaText}
              <span className="text-[var(--color-brand-accent)]">→</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
