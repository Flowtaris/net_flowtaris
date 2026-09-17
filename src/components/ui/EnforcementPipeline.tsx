'use client';

import { useEffect, useRef, useState } from 'react';
import LogoImage from './LogoImage';

export default function EnforcementPipeline({ nodes }: { nodes: { id: string; title: string; content: string }[] }) {
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
  const pipelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!pipelineRef.current) return;
      
      // Calculate how far down the pipeline the user has scrolled
      const rect = pipelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // The line should "draw" as they scroll down
      const scrollPercentage = Math.max(0, Math.min(1, (viewportHeight * 0.75 - rect.top) / rect.height));
      
      // Determine which nodes should be active based on scroll
      const totalNodes = nodes.length;
      const newActiveNodes = [];
      
      for (let i = 0; i < totalNodes; i++) {
        // Threshold is evenly distributed along the pipeline
        const threshold = i / totalNodes;
        if (scrollPercentage > threshold) {
          newActiveNodes.push(i);
        }
      }
      
      setActiveNodes(newActiveNodes);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [nodes.length]);

  return (
    <div ref={pipelineRef} className="max-w-4xl mx-auto py-10">
      
      {/* Wrapper for the line and nodes so the line doesn't extend to the bottom text */}
      <div className="relative pb-12">
        {/* The Central Pipeline Line - bottom stops exactly at the logo */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2">
          <div 
            className="absolute top-0 left-0 w-full bg-[#E11D48] transition-all duration-300 ease-out shadow-[0_0_15px_rgba(225,29,72,0.5)]"
            style={{ height: `${activeNodes.length > 0 ? (activeNodes.length / nodes.length) * 100 : 0}%` }}
          />
        </div>

        <div className="space-y-16 relative z-10">
          {nodes.map((node, index) => {
            const isActive = activeNodes.includes(index);
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="relative flex items-center w-full">
                {/* Pipeline Node (Circle) */}
                <div 
                  className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10 ${
                    isActive 
                      ? 'bg-[#E11D48] border-white shadow-[0_0_20px_rgba(225,29,72,0.8)] scale-125' 
                      : 'bg-white border-gray-300 scale-100'
                  }`}
                />
                
                {/* Content Box */}
                <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <div 
                    className={`p-8 rounded-2xl border transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                      isActive 
                        ? 'bg-white border-[#E11D48]/30 shadow-2xl shadow-[#E11D48]/10 scale-100 opacity-100 translate-y-0' 
                        : 'bg-gray-50 border-gray-100 scale-90 opacity-40 translate-y-6'
                    }`}
                  >
                    <div className={`text-sm font-mono font-black mb-2 transition-colors duration-700 ${isActive ? 'text-[#E11D48]' : 'text-gray-400'}`}>
                      {node.id}
                    </div>
                    <h3 className="text-2xl font-bold text-[#111827] mb-4">{node.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {node.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Flowtaris Logo (placed at the bottom of the line wrapper) */}
        <div className="relative mt-16 flex flex-col items-center justify-center text-center">
          {/* Pulse effect behind the logo when fully scrolled */}
          <div className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-[#E11D48]/5 blur-xl transition-opacity duration-1000 ${activeNodes.length === nodes.length ? 'opacity-100' : 'opacity-0'}`}></div>
          
          <div className={`w-16 h-16 rounded-full bg-white border-4 flex items-center justify-center z-10 relative transition-all duration-700 ${activeNodes.length === nodes.length ? 'border-[#E11D48] shadow-[0_0_25px_rgba(225,29,72,0.4)]' : 'border-gray-200 shadow-md'}`}>
            <div className={`w-10 h-10 flex items-center justify-center transition-opacity duration-700 ${activeNodes.length === nodes.length ? 'opacity-100' : 'opacity-50'}`}>
              <LogoImage className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Text placed completely OUTSIDE the line wrapper so it can NEVER be overlapped */}
      <div className="flex flex-col items-center justify-center text-center mt-6">
        <h4 className="font-heading font-black text-3xl text-[#111827] tracking-tight uppercase">
          FLOWTARIS
        </h4>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#E11D48] mt-3 font-bold">
          The Science of Business Flow
        </p>
      </div>
    </div>
  );
}
