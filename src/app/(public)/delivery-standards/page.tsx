import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FAQ from '@/components/ui/FAQ';
import EnforcementPipeline from '@/components/ui/EnforcementPipeline';
import { getCmsData } from '../../../lib/cms';
import JsonLd, { getTechArticleSchema, getFAQPageSchema, getBreadcrumbSchema } from '@/components/seo/JsonLd';
import { AnswerSection } from '@/components/seo/AnswerBlock';

export const metadata: Metadata = {
  title: 'Enterprise Delivery Standards & SLA Guarantees — Fixed-Cost Integration',
  description: 'Flowtaris eliminates scope creep through mathematically rigid delivery standards. Fixed-cost architecture locks, zero-downtime rollback guarantees, mandatory SLA validation gates, and financial accountability audits for enterprise ERP integrations.',
  keywords: ['enterprise delivery standards', 'fixed-cost integration', 'SLA guarantees ERP', 'scope creep prevention', 'software delivery accountability', 'enterprise SLA validation', 'integration deployment standards'],
  openGraph: {
    title: 'Enterprise Delivery Standards — Fixed-Cost Integration & SLA Guarantees | Flowtaris',
    description: 'Zero scope creep. Absolute enforcement. Fixed-cost integrations with guaranteed SLAs and rigid delivery pipelines for enterprise ERP systems.',
    url: 'https://flowtaris.net/delivery-standards',
  },
  alternates: {
    canonical: 'https://flowtaris.net/delivery-standards',
  },
};

export default function DeliveryStandards() {
  const data = getCmsData()?.deliveryStandards;
  
  if (!data) return null;

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-[#111827] pt-24 pb-24 selection:bg-[#E11D48] selection:text-white">
      <JsonLd data={[
        getTechArticleSchema({
          title: 'Enterprise Delivery Standards & SLA Guarantees — Fixed-Cost Integration',
          description: 'Flowtaris eliminates scope creep through mathematically rigid delivery standards. Fixed-cost architecture locks, zero-downtime rollback guarantees, and mandatory SLA validation gates.',
          url: 'https://flowtaris.net/delivery-standards',
        }),
        getFAQPageSchema(data.faqs),
        getBreadcrumbSchema([
          { name: 'Flowtaris', url: 'https://flowtaris.com' },
          { name: 'Accountability Engine', url: 'https://flowtaris.net' },
          { name: 'Delivery Standards', url: 'https://flowtaris.net/delivery-standards' },
        ]),
      ]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Narrative Hero Section */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#E11D48]/10 border border-[#E11D48]/20 text-[#E11D48] text-xs font-bold tracking-[0.2em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse"></span>
              <span>{data.hero.badge}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 tracking-tight text-[#111827]">
              {data.hero.titleLine1} <span className="text-[#E11D48]">{data.hero.titleAccent}</span>{data.hero.titleLine2}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
              {data.hero.description}
            </p>
          </div>
        </ScrollReveal>

        {/* The Manifesto Section */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto mb-16 text-center space-y-6">
            <h2 className="text-3xl font-heading font-black text-[#111827] uppercase tracking-wider mb-8">
              {data.manifesto.title}
            </h2>
            {data.manifesto.paragraphs.map((p: string, i: number) => (
              <p key={i} className={`text-lg text-gray-600 leading-relaxed ${i === data.manifesto.paragraphs.length -1 ? 'font-bold text-[#E11D48]' : ''}`}>
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* The Interactive Enforcement Pipeline */}
        <EnforcementPipeline nodes={data.nodes} />

        {/* CFO-Targeted Procurement FAQ */}
        <ScrollReveal>
          <div className="w-full max-w-4xl mx-auto mt-24">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-[#111827] mb-12 border-b border-gray-200 pb-6 text-center">
              Procurement & SLA Accountability
            </h2>
            <FAQ faqs={data.faqs} theme="red" />
          </div>
        </ScrollReveal>

        {/* GEO/AEO Answer-Optimized Content */}
        <div className="max-w-4xl mx-auto mt-20">
          <AnswerSection 
            topic="Delivery Standards"
            blocks={[
              {
                question: "What are Flowtaris Delivery Standards?",
                answer: "Flowtaris Delivery Standards are a set of mathematically rigid, non-negotiable engineering policies that govern every enterprise ERP integration project. They include Fixed-Cost Architecture Locks (eliminating scope creep by cryptographically locking schemas before development begins), Zero-Downtime Rollback Guarantees (using Blue/Green deployment with automatic reversion on anomalous telemetry), Mandatory SLA Validation Gates (automated latency and load testing during CI/CD that rejects builds exceeding 15ms degradation), and Financial Accountability Audits (real-time CFO dashboards showing exact compute and bandwidth consumption per integration).",
                citation: "Flowtaris Enforcement Pipeline, flowtaris.net/delivery-standards"
              },
              {
                question: "How does Flowtaris guarantee fixed-cost enterprise integration?",
                answer: "Flowtaris guarantees fixed-cost integration through a model called the \"Fixed-Cost Architecture Lock.\" Before any code is written, the complete event schemas and integration pipeline architecture are mathematically mapped and cryptographically locked. If the integration takes longer than quoted, Flowtaris absorbs the cost overrun entirely — the client pays only the original fixed contract price. This is enforced through the Enforcement Pipeline, which requires every schema change and infrastructure deployment to pass rigid, non-negotiable validation gates before reaching production.",
                citation: "Flowtaris Delivery Standards, flowtaris.net/delivery-standards"
              }
            ]}
          />
        </div>

      </div>
    </div>
  );
}
