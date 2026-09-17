'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import LogoImage from '@/components/ui/LogoImage';

export default function FooterInteractive({ data }: { data: any }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (footerRef.current && !footerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <footer 
      ref={footerRef}
      className={`group absolute bottom-0 flex flex-col items-center w-[400px] bg-white rounded-[2rem] border border-gray-200 shadow-[0_5px_20px_rgba(0,0,0,0.05)] transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] z-50 ${isExpanded ? 'w-full shadow-[0_-15px_40px_rgba(218,165,32,0.15)] border-[var(--color-brand-accent)]/50' : 'hover:w-full hover:shadow-[0_-15px_40px_rgba(218,165,32,0.15)] hover:border-[var(--color-brand-accent)]/50'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      
      {/* Revealed Content */}
      <div className={`w-full transition-[grid-template-rows] duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] grid ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] group-hover:grid-rows-[1fr]'}`}>
        <div className="overflow-hidden">
          <div className={`bg-[var(--color-brand-offwhite)] rounded-t-[2rem] transition-opacity duration-500 delay-100 ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            
            <div className="px-8 pb-4 pt-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
              
              {/* Platform */}
              <div>
                <div className="font-black text-[var(--color-brand-navy)] uppercase tracking-widest text-[10px] mb-4">Platform</div>
                <div className="flex flex-col space-y-3 font-medium text-[var(--color-brand-slate)] text-xs">
                  {data.platformLinks.map((link: { label: string; href: string }) => (
                    <Link key={link.label} href={link.href} className="hover:text-[var(--color-brand-accent)] transition-colors">{link.label}</Link>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <div className="font-black text-[var(--color-brand-navy)] uppercase tracking-widest text-[10px] mb-4">Company</div>
                <div className="flex flex-col space-y-3 font-medium text-[var(--color-brand-slate)] text-xs">
                  {data.companyLinks.map((link: { label: string; href: string }) => (
                    <a key={link.label} href={link.href} className="hover:text-[var(--color-brand-accent)] transition-colors">{link.label}</a>
                  ))}
                </div>
              </div>

              {/* Ecosystem & Connect */}
              <div>
                <div className="font-black text-[var(--color-brand-navy)] uppercase tracking-widest text-[10px] mb-4">Ecosystem</div>
                <div className="flex flex-col space-y-3 font-medium text-[var(--color-brand-slate)] text-xs mb-6">
                  {data.ecosystemLinks.map((link: { label: string; href: string }) => (
                    <a key={link.label} href={link.href} className="hover:text-[var(--color-brand-accent)] transition-colors">{link.label}</a>
                  ))}
                </div>
                
                <a href={data.contactBtnLink} className="inline-block px-5 py-2.5 bg-[var(--color-brand-navy)] text-white rounded-full font-bold hover:scale-105 transition-transform shadow-md text-[11px]">
                  {data.contactBtnText}
                </a>
              </div>

            </div>

            {/* Bottom line */}
            <div className="px-8 pb-8 pt-4 space-y-3">
              <div className="text-[10px] font-mono text-gray-400 text-center leading-relaxed">
                Flowtaris.net is the operational transparency layer of{' '}
                <a href="https://flowtaris.com" className="text-[var(--color-brand-accent)] hover:underline font-semibold" rel="noopener">Flowtaris</a>
                {' '}— Enterprise ERP &amp; Integration Consulting.{' '}
                <a href="https://flowtaris.com/contact" className="text-[var(--color-brand-accent)] hover:underline font-semibold" rel="noopener">Hire this team →</a>
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
                <span>© {new Date().getFullYear()} Flowtaris. All rights reserved.</span>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
                  <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Closed State (Handle) - ALWAYS AT THE BOTTOM */}
      <div className="flex flex-col items-center justify-center h-[90px] w-full cursor-pointer relative shrink-0 border-t border-transparent group-hover:border-gray-200/50 transition-colors duration-500 bg-white rounded-b-[2rem]">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-sm border border-gray-100 transition-all duration-500 group-hover:border-[var(--color-brand-accent)]">
            <LogoImage className="w-8 h-8 object-contain" />
          </div>
          <span className="text-3xl font-heading font-black text-[var(--color-brand-navy)] tracking-tight transition-colors duration-500 group-hover:text-[var(--color-brand-accent)]">
            Flowtaris
          </span>
        </div>
        {/* Hide the 'Hover to Expand' text on hover */}
        <div className={`absolute -bottom-5 flex items-center space-x-2 transition-opacity duration-300 pointer-events-none ${isExpanded ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}>
          <div className="w-1 h-1 rounded-full bg-[var(--color-brand-accent)] animate-pulse"></div>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-400 whitespace-nowrap">
            Hover or Tap to Expand
          </span>
          <div className="w-1 h-1 rounded-full bg-[var(--color-brand-accent)] animate-pulse"></div>
        </div>
      </div>

    </footer>
  );
}
