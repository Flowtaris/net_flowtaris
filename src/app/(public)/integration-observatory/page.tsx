import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FAQ from '@/components/ui/FAQ';
import TelemetryGrid from '@/components/ui/TelemetryGrid';
import { getCmsData } from '@/lib/cms';
import JsonLd, { getTechArticleSchema, getFAQPageSchema, getBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Integration Observatory — Real-Time Payload Telemetry & Distributed Tracing',
  description: 'End the black box problem forever. Flowtaris Integration Observatory provides cryptographic payload lineage, microscopic latency profiling, intelligent dead-letter diagnostics, and OpenTelemetry-standard distributed tracing across enterprise ERP integrations.',
  keywords: ['integration observatory', 'payload telemetry', 'distributed tracing ERP', 'OpenTelemetry enterprise', 'cryptographic audit trail', 'integration monitoring dashboard', 'ERP latency profiling', 'dead letter queue diagnostics'],
  openGraph: {
    title: 'Integration Observatory — Real-Time Payload Telemetry | Flowtaris',
    description: 'Cryptographic payload lineage, microscopic latency profiling, and distributed tracing. End integration black boxes forever with Flowtaris.',
    url: 'https://flowtaris.net/integration-observatory',
  },
  alternates: {
    canonical: 'https://flowtaris.net/integration-observatory',
  },
};

export const revalidate = 60;

export default async function IntegrationObservatory() {
  const data = (await getCmsData())?.observatory;
  
  if (!data) return null;

  return (
    <div className="bg-[#FDFBF7] min-h-screen text-[#2C1E16] pt-32 pb-32 selection:bg-[#D97706] selection:text-white">
      <JsonLd data={[
        getTechArticleSchema({
          title: 'Integration Observatory — Real-Time Payload Telemetry & Distributed Tracing',
          description: 'Cryptographic payload lineage, microscopic latency profiling, and OpenTelemetry-standard distributed tracing across enterprise ERP integrations.',
          url: 'https://flowtaris.net/integration-observatory',
        }),
        getFAQPageSchema(data.faqs),
        getBreadcrumbSchema([
          { name: 'Flowtaris', url: 'https://flowtaris.com' },
          { name: 'Accountability Engine', url: 'https://flowtaris.net' },
          { name: 'Integration Observatory', url: 'https://flowtaris.net/integration-observatory' },
        ]),
      ]} />
      {/* Subtle radial gradient background for depth in light mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#D97706]/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Narrative Hero Section */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#D97706]/10 border border-[#D97706]/20 text-[#D97706] text-xs font-mono tracking-[0.2em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#D97706] shadow-[0_0_8px_rgba(217,119,6,0.5)] animate-pulse"></span>
              <span>{data.hero.badge}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 tracking-tight text-[#2C1E16]">
              {data.hero.titleLine1} <span className="text-[#D97706]">{data.hero.titleAccent}</span>{data.hero.titleLine2}
            </h1>
            <p className="text-xl md:text-2xl text-[#2C1E16]/70 font-light leading-relaxed">
              {data.hero.description}
            </p>
          </div>
        </ScrollReveal>

        {/* The Architecture Narrative Section */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto mb-20 text-center space-y-6">
            <h2 className="text-3xl font-heading font-black text-[#2C1E16] uppercase tracking-wider mb-8">
              {data.architecture.title}
            </h2>
            {data.architecture.paragraphs.map((p: string, i: number) => (
              <p key={i} className={`text-lg text-[#2C1E16]/80 leading-relaxed ${i === data.architecture.paragraphs.length -1 ? 'font-bold text-[#D97706]' : ''}`}>
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* The Interactive Telemetry Grid */}
        <TelemetryGrid nodes={data.gridNodes} />

        {/* AEO Optimized Technical FAQ */}
        <ScrollReveal>
          <div className="w-full max-w-4xl mx-auto mt-40">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-[#2C1E16] mb-12 border-b border-[#2C1E16]/10 pb-6 text-center">
              Observatory Architecture FAQ
            </h2>
            <div className="opacity-90">
              <FAQ faqs={data.faqs} theme="amber" />
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
