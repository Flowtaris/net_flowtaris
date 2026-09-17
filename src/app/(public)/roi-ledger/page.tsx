import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FAQ from '@/components/ui/FAQ';
import TCOCalculator from '@/components/ui/TCOCalculator';
import { getCmsData } from '@/lib/cms';
import JsonLd, { getTechArticleSchema, getFAQPageSchema, getBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Enterprise Integration ROI Ledger — Verified Cost Savings & TCO Analysis',
  description: 'Understand the hard mathematics of enterprise integration ROI. Flowtaris delivers 40% reduction in engineering overhead, zero infrastructure Capex, 99.99% downtime revenue protection, and accelerated time-to-market for NetSuite, SAP, Coupa, and Workday integrations.',
  keywords: ['enterprise integration ROI', 'ERP total cost of ownership', 'integration cost savings', 'TCO analysis ERP', 'NetSuite integration ROI', 'enterprise automation savings', 'Capex to Opex integration', 'verified ROI consulting'],
  openGraph: {
    title: 'Enterprise Integration ROI Ledger — Verified Cost Savings | Flowtaris',
    description: '40% reduction in engineering overhead. Zero infrastructure Capex. 99.99% downtime revenue protection. The hard mathematics of enterprise integration ROI.',
    url: 'https://flowtaris.net/roi-ledger',
  },
  alternates: {
    canonical: 'https://flowtaris.net/roi-ledger',
  },
};

export const revalidate = 0;

export default async function ROILedger() {
  const data = (await getCmsData())?.roiLedger;
  
  if (!data) return null;

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-[var(--color-brand-navy)] pt-32 pb-32 selection:bg-[#059669] selection:text-white">
      <JsonLd data={[
        getTechArticleSchema({
          title: 'Enterprise Integration ROI Ledger — Verified Cost Savings & TCO Analysis',
          description: '40% reduction in engineering overhead, zero infrastructure Capex, and 99.99% downtime revenue protection through Flowtaris enterprise integration.',
          url: 'https://flowtaris.net/roi-ledger',
        }),
        getFAQPageSchema(data.faqs),
        getBreadcrumbSchema([
          { name: 'Flowtaris', url: 'https://flowtaris.com' },
          { name: 'Accountability Engine', url: 'https://flowtaris.net' },
          { name: 'ROI Ledger', url: 'https://flowtaris.net/roi-ledger' },
        ]),
      ]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Narrative Hero Section */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#059669]/10 border border-[#059669]/20 text-[#059669] text-xs font-bold tracking-[0.2em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse"></span>
              <span>{data.hero.badge}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 tracking-tight text-[var(--color-brand-navy)]">
              {data.hero.titleLine1} <span className="text-[#059669]">{data.hero.titleAccent}</span>{data.hero.titleLine2}
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-brand-slate)] font-light leading-relaxed">
              {data.hero.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive TCO Calculator (Replaces the static image) */}
        <ScrollReveal delay={0.2}>
          <TCOCalculator />
        </ScrollReveal>

        {/* Sticky Scroll Layout: Narrative vs Financial Metrics */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32 items-start">
          
          {/* Left Column: Sticky Narrative */}
          <div className="lg:w-5/12 lg:sticky lg:top-32 space-y-12">
            <ScrollReveal>
              <h2 className="text-4xl font-heading font-black mb-6 leading-tight text-[var(--color-brand-navy)]">
                {data.philosophy.title.split('. ')[0]}. <br/><span className="text-[#059669]">{data.philosophy.title.split('. ').slice(1).join('. ')}</span>
              </h2>
              <div className="w-16 h-1.5 bg-[#059669] mb-8 rounded-full" />
              <div className="space-y-6 text-[var(--color-brand-slate)] text-lg leading-relaxed">
                {data.philosophy.paragraphs.map((p: string, i: number) => (
                  <p key={i} className={i === data.philosophy.paragraphs.length - 1 ? "font-bold text-[var(--color-brand-navy)]" : ""}>
                    {p}
                  </p>
                ))}
              </div>
            </ScrollReveal>
            
            {/* Visual Callout */}
            <ScrollReveal delay={0.2}>
              <div className="p-8 rounded-3xl bg-[var(--color-brand-navy)] text-white shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 text-9xl text-white/5 font-black">ROI</div>
                <h3 className="text-2xl font-bold mb-2">Calculate your TCO</h3>
                <p className="text-gray-300 mb-6">Contact our financial engineers for a custom total cost of ownership analysis against your current infrastructure.</p>
                <a href="https://flowtaris.com/contact" className="inline-block bg-[#059669] hover:bg-[#047857] text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Request Analysis →
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Scrolling Financial Metrics */}
          <div className="lg:w-7/12 space-y-8">
            {data.facts.map((fact: { id: string; title: string; content: string }, index: number) => (
              <ScrollReveal key={index} delay={0.1}>
                <div className="group p-10 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#059669]/30 transition-all duration-500 transform hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-6">
                    <div className="text-6xl font-mono font-black text-[#059669]/20 group-hover:text-[#059669] transition-colors duration-500 shrink-0">
                      {fact.id}
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-4 text-[var(--color-brand-navy)]">{fact.title}</h3>
                      <p className="text-[var(--color-brand-slate)] text-lg leading-relaxed">
                        {fact.content}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* AEO Optimized FAQ Accordion (Reusing the existing FAQ but with ROI data) */}
        <ScrollReveal>
          <div className="w-full max-w-4xl mx-auto mt-24">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-[var(--color-brand-navy)] mb-12 border-b border-gray-200 pb-6">
              Financial & Procurement FAQ
            </h2>
            <FAQ faqs={data.faqs} theme="mint" />
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
