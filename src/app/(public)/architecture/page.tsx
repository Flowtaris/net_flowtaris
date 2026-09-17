import Image from 'next/image';
import Link from 'next/link';

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-navy)] text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--color-brand-accent)]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-4">
            Flowtaris Architecture
          </h1>
          <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
            Our zero-trust, event-driven integration architecture. Designed for 99.99% SLA, absolute cryptographic lineage, and sub-50ms P99 latency across distributed enterprise systems.
          </p>
        </div>

        <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-4 md:p-8 backdrop-blur-md shadow-2xl relative group">
          <div className="absolute inset-0 border border-[var(--color-brand-accent)]/0 rounded-3xl group-hover:border-[var(--color-brand-accent)]/30 transition-colors duration-500 pointer-events-none" />
          
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden bg-black/50">
            <Image 
              src="/architecture.jpg" 
              alt="Flowtaris System Architecture Diagram" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/integration-observatory" className="px-8 py-3 bg-[var(--color-brand-accent)] text-[var(--color-brand-navy)] font-bold rounded-full hover:bg-white transition-colors text-center">
            View Live Telemetry
          </Link>
          <Link href="/" className="px-8 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors text-center backdrop-blur-md border border-white/10">
            Back to Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
