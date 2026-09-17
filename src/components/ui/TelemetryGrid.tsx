'use client';

import { useEffect, useRef, useState } from 'react';

export default function TelemetryGrid({ nodes }: { nodes: { id: string; title: string; content: string; metricLabel: string; metric: string }[] }) {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const elements = containerRef.current.querySelectorAll('.telemetry-node');
      const viewportHeight = window.innerHeight;
      
      const newActive: number[] = [];
      
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.85) {
          newActive.push(index);
        }
      });
      
      setActiveIndices(newActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-7xl mx-auto py-20 px-4 md:px-0">
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {nodes.map((node, index) => {
          const isActive = activeIndices.includes(index);
          const isOffset = index % 2 !== 0;
          
          return (
            <div 
              key={index} 
              className={`telemetry-node relative transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isOffset ? 'md:mt-32' : ''} ${
                isActive 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-24 scale-95'
              }`}
            >
              {/* Premium White Glass Panel */}
              <div className="group h-full bg-white/70 backdrop-blur-2xl border border-white/60 hover:border-[#D97706]/40 rounded-[2rem] p-8 md:p-12 transition-all duration-500 overflow-hidden shadow-[0_20px_40px_rgba(44,30,22,0.05)] hover:shadow-[0_30px_60px_rgba(217,119,6,0.1)]">
                
                {/* Abstract Topographic Data Pattern (SVG Background) */}
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83v58.34h-58.34l-.83-.83V0h58.34zM29.83 31.17c-1.47 0-2.66-1.19-2.66-2.66s1.19-2.66 2.66-2.66 2.66 1.19 2.66 2.66-1.19 2.66-2.66 2.66zm0-1.33c.735 0 1.33-.595 1.33-1.33s-.595-1.33-1.33-1.33-1.33.595-1.33 1.33.595 1.33 1.33 1.33z\' fill=\'%23D97706\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>

                {/* Soft Amber Glow on Hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D97706]/0 group-hover:bg-[#D97706]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 transition-colors duration-700 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-[#D97706] font-mono text-sm tracking-widest font-bold">
                      {node.id}
                    </div>
                    {/* Pulsing indicator */}
                    <div className="w-2 h-2 rounded-full bg-[#D97706] shadow-[0_0_10px_rgba(217,119,6,0.5)] animate-pulse"></div>
                  </div>

                  {/* Espresso Typography */}
                  <h3 className="text-3xl font-heading font-black text-[#2C1E16] mb-6 leading-tight">
                    {node.title}
                  </h3>
                  
                  <p className="text-[#2C1E16]/70 text-lg leading-relaxed flex-grow">
                    {node.content}
                  </p>

                  <div className="mt-12 pt-8 border-t border-[#2C1E16]/10 flex items-end justify-between">
                    <div>
                      <div className="text-[#2C1E16]/50 text-xs font-mono uppercase tracking-widest mb-2">{node.metricLabel}</div>
                      <div className="text-4xl font-mono font-black text-[#D97706]">{node.metric}</div>
                    </div>
                    {/* Abstract graph decoration */}
                    <div className="flex space-x-1 items-end h-12 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                      {[40, 70, 45, 90, 60].map((h, i) => (
                        <div key={i} className="w-1.5 bg-[#D97706] rounded-t-sm" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
