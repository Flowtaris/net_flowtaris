'use client';
import { useState } from 'react';

export default function TCOCalculator() {
  const [endpoints, setEndpoints] = useState(10);
  const [engineers, setEngineers] = useState(3);
  
  const inHouseCost = (endpoints * 25000) + (engineers * 180000);
  const flowtarisCost = (endpoints * 5000) + (engineers * 40000); // Massive reduction
  
  const capex = inHouseCost;
  const opex = flowtarisCost;
  const savings = inHouseCost - flowtarisCost;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="w-full bg-[#151c2f] rounded-[3rem] p-8 md:p-12 mb-32 border border-emerald-900/30 shadow-2xl relative overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-500/5 blur-[100px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-1000"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Controls */}
        <div className="space-y-10">
          <div>
            <h3 className="text-3xl font-heading font-black text-white mb-2">Interactive TCO Engine</h3>
            <p className="text-emerald-400/80">Adjust your enterprise parameters to calculate the mathematical advantage of the Accountability Engine.</p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Number of Integration Endpoints</label>
                <span className="text-2xl font-mono font-bold text-white">{endpoints}</span>
              </div>
              <input 
                type="range" 
                min="5" max="100" 
                value={endpoints}
                onChange={(e) => setEndpoints(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Dedicated Backend Engineers</label>
                <span className="text-2xl font-mono font-bold text-white">{engineers}</span>
              </div>
              <input 
                type="range" 
                min="1" max="20" 
                value={engineers}
                onChange={(e) => setEngineers(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Results Dashboard */}
        <div className="bg-[#0a1128] rounded-3xl p-8 border border-white/5 flex flex-col justify-center">
          <div className="space-y-8">
            
            <div className="flex justify-between items-center border-b border-white/10 pb-6">
              <div className="space-y-1">
                <h4 className="text-gray-400 font-bold uppercase tracking-wider text-xs">In-House Build (Capex)</h4>
                <p className="text-red-400/80 text-xs">Maintenance + Infrastructure</p>
              </div>
              <div className="text-3xl font-mono font-bold text-white opacity-50 line-through decoration-red-500/50">
                {formatCurrency(capex)}
              </div>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-6">
              <div className="space-y-1">
                <h4 className="text-gray-400 font-bold uppercase tracking-wider text-xs">Flowtaris (Opex)</h4>
                <p className="text-emerald-400/80 text-xs">Zero Maintenance Overhead</p>
              </div>
              <div className="text-3xl font-mono font-bold text-emerald-400">
                {formatCurrency(opex)}
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-2 text-center">Annual Enterprise Savings</h4>
              <div className="text-5xl md:text-7xl font-mono font-black text-white text-center drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                {formatCurrency(savings)}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
