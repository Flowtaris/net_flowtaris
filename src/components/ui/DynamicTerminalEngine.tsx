'use client';

import { useState, useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';

import cmsFallback from '@/data/cms.json';

type CardType = { iconId: string; title: string; description: string; codeHtml: string };

export default function DynamicTerminalEngine({ data }: { data: { tagline: string; title: string; description: string; cards: CardType[] } }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [typedStates, setTypedStates] = useState<boolean[]>([false, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const getFallbackCode = (title: string) => {
    const defaultCard = cmsFallback?.standardSection?.cards?.find((c: any) => c.title === title);
    return defaultCard ? defaultCard.codeHtml : '<div>No code available</div>';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Stagger the typing animations when the section comes into view
          setTimeout(() => setTypedStates(prev => { const n = [...prev]; n[0] = true; return n; }), 600);
          setTimeout(() => setTypedStates(prev => { const n = [...prev]; n[1] = true; return n; }), 1400);
          setTimeout(() => setTypedStates(prev => { const n = [...prev]; n[2] = true; return n; }), 2200);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderIcon = (iconId: string) => {
    if (iconId === 'shield') return <svg className="w-8 h-8 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>;
    if (iconId === 'refresh') return <svg className="w-8 h-8 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" /></svg>;
    if (iconId === 'lightning') return <svg className="w-8 h-8 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>;
    return <svg className="w-8 h-8 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>;
  };

  return (
    <section ref={sectionRef} className="py-32 bg-[var(--color-brand-offwhite)] relative overflow-hidden">
      {/* Super premium, subtle geometric grid in the background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-brand-navy) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-12 h-px bg-[#059669]"></div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#059669]">{data.tagline}</span>
              <div className="w-12 h-px bg-[#059669]"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-[var(--color-brand-navy)] tracking-tight mb-6">{data.title}</h2>
            <p className="text-base text-[var(--color-brand-slate)] max-w-2xl mx-auto leading-relaxed">{data.description}</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.cards.map((card: CardType, idx: number) => {
            const isHovered = hoveredIdx === idx;
            const isTyped = typedStates[idx];
            
            return (
              <ScrollReveal key={idx} delay={0.1 * (idx + 1)}>
                <div 
                  className={`group relative h-full bg-white rounded-[2rem] p-8 border transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden ${
                    isHovered 
                      ? 'border-[#059669]/30 shadow-[0_20px_60px_rgba(5,150,105,0.08)] -translate-y-2' 
                      : 'border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
                  }`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  
                  {/* Elegant Topographic Reveal on Hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-1000 pointer-events-none bg-[url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83v58.34h-58.34l-.83-.83V0h58.34zM29.83 31.17c-1.47 0-2.66-1.19-2.66-2.66s1.19-2.66 2.66-2.66 2.66 1.19 2.66 2.66-1.19 2.66-2.66 2.66zm0-1.33c.735 0 1.33-.595 1.33-1.33s-.595-1.33-1.33-1.33-1.33.595-1.33 1.33.595 1.33 1.33 1.33z\' fill=\'%23059669\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")]`}></div>

                  {/* Sleek numbering */}
                  <div className={`absolute -top-6 -right-6 text-[120px] font-heading font-black select-none pointer-events-none transition-colors duration-700 ${isHovered ? 'text-[#059669]/5' : 'text-gray-50'}`}>
                    0{idx + 1}
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-[#059669]/5 flex items-center justify-center border border-[#059669]/10 group-hover:bg-[#059669]/10 group-hover:scale-110 transition-all duration-500 mb-8">
                      {renderIcon(card.iconId)}
                    </div>
                    
                    <h3 className="text-2xl font-heading font-black mb-4 text-[var(--color-brand-navy)] group-hover:text-[#059669] transition-colors duration-500">{card.title}</h3>
                    <p className="text-[var(--color-brand-slate)] text-sm leading-relaxed mb-8 flex-grow">{card.description}</p>
                    
                    {/* The Clean Technical Code Block */}
                    <div className={`relative rounded-xl border overflow-hidden group/block transition-colors duration-500 ${isHovered ? 'bg-[#F9FAFB] border-[#059669]/20' : 'bg-gray-50 border-gray-100'}`}>
                      {/* Code Content */}
                      <div className="p-6 font-mono text-[12px] md:text-[13px] leading-[1.8] relative min-h-[220px] text-slate-900">
                        {/* The HTML from CMS or Fallback */}
                        <div dangerouslySetInnerHTML={{ __html: (!card.codeHtml || card.codeHtml.trim() === '...' || card.codeHtml.trim() === '<div>code here</div>') ? getFallbackCode(card.title) : card.codeHtml }}></div>
                        
                        {/* Typewriter Reveal Mask */}
                        <div 
                          className={`absolute inset-0 bg-gray-50 transition-all duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] z-10 ${
                            isTyped ? 'w-0' : 'w-full'
                          }`}
                          style={{ left: 'auto', right: 0 }}
                        >
                          {/* Elegant Cursor - keeps blinking while typing or hovered */}
                          {(!isTyped || isHovered) && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-[#059669] animate-pulse shadow-[0_0_8px_rgba(5,150,105,0.6)]"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
