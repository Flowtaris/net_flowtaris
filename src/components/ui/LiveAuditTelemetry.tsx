'use client';
import { useEffect, useState } from 'react';

export default function LiveAuditTelemetry({ data }: { data: { title: string; logs: string[] } }) {
  const [activeLogs, setActiveLogs] = useState<string[]>([]);
  
  useEffect(() => {
    // Simulate real-time streaming of logs
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < data.logs.length) {
        setActiveLogs(prev => [...prev, data.logs[currentIndex]]);
        currentIndex++;
      } else {
        // Reset and loop for continuous effect
        setActiveLogs([]);
        currentIndex = 0;
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [data.logs]);

  return (
    <div className="w-full bg-[#0a1128] rounded-3xl overflow-hidden shadow-2xl border border-blue-900/50 relative group">
      {/* Terminal Header */}
      <div className="flex items-center px-6 py-4 bg-[#060b19] border-b border-blue-900/50">
        <div className="flex space-x-2 mr-6">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
        </div>
        <div className="text-blue-400 font-mono text-sm opacity-80 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          {data.title}
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-6 h-[300px] overflow-hidden relative font-mono text-sm leading-relaxed">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-500/5 mix-blend-screen pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-1000"></div>
        
        <div className="space-y-2 flex flex-col justify-end h-full">
          {activeLogs.map((log, index) => (
            <div 
              key={index} 
              className="animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <span className="text-emerald-500 mr-3">{'>'}</span>
              <span className="text-blue-100">{log}</span>
            </div>
          ))}
          {/* Blinking Cursor */}
          <div className="animate-pulse text-emerald-500 mt-2">_</div>
        </div>
      </div>
    </div>
  );
}
