import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import JsonLd, { getFAQPageSchema } from '@/components/seo/JsonLd';
import { AnswerSection } from '@/components/seo/AnswerBlock';

export const metadata: Metadata = {
  title: 'Industry Benchmarks | Flowtaris',
  description: 'Quarterly industry benchmarks for ERP integration error rates and AP automation ROI.',
};

export default function Benchmarks() {
  const benchmarks = [
    {
      title: "Integration Error Rates (NetSuite/Coupa)",
      flowtaris: "0.01%",
      industry: "2.4%",
      metric: "Errors per 10k transactions",
      description: "Our adaptive rate-limiting and validation pipelines catch errors before they hit the ERP."
    },
    {
      title: "AP Automation ROI Timeline",
      flowtaris: "3.5 Months",
      industry: "11 Months",
      metric: "Time to break-even",
      description: "Pre-built templates and AI-driven invoice parsing accelerate the time to value."
    },
    {
      title: "ERP Migration Failure Rate",
      flowtaris: "0%",
      industry: "29%",
      metric: "Projects requiring major rollback",
      description: "Our zero-downtime migration protocol and staging dry-runs eliminate deployment risk."
    },
    {
      title: "Integration Downtime Cost",
      flowtaris: "$0",
      industry: "$14k/hr",
      metric: "Average cost of API outage",
      description: "We guarantee 99.99% uptime with automated failover and self-healing endpoints."
    }
  ];

  const faqData = [
    {
      question: "What are integration error rate benchmarks?",
      answer: "Integration error rate benchmarks measure the percentage of data payloads that fail to process successfully between enterprise systems like NetSuite and Coupa. The industry average error rate is 2.4%, meaning 24 out of every 1,000 transactions fail due to schema mismatches, API rate limits, or network timeouts. Flowtaris maintains an error rate of 0.01%.",
      citation: "Flowtaris Industry Benchmarks Q2 2026"
    },
    {
      question: "How does Flowtaris calculate AP Automation ROI?",
      answer: "Flowtaris calculates Accounts Payable (AP) Automation ROI by measuring the total cost of manual invoice processing (average $15 per invoice) against the automated processing cost (average $2.50) and dividing the annual savings by the total implementation cost. Flowtaris clients typically reach break-even ROI in 3.5 months, compared to the industry average of 11 months.",
      citation: "Flowtaris ROI Ledger"
    }
  ];

  return (
    <div className="bg-[var(--color-brand-offwhite)] py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <JsonLd data={[
        {
          "@context": "https://schema.org",
          "@type": "Dataset",
          "name": "Enterprise ERP & Integration Benchmarks",
          "description": "Quarterly benchmark data comparing Flowtaris delivery metrics against industry averages.",
          "creator": {
            "@type": "Organization",
            "name": "Flowtaris"
          }
        },
        getFAQPageSchema(faqData)
      ]} />

      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-brand-navy)] mb-6">
          Industry Benchmarks
        </h1>
        <p className="text-xl text-[var(--color-brand-slate)] mb-16 max-w-3xl">
          The industry standard isn&apos;t good enough. We track our performance against the market to ensure we remain the most reliable integration partner in the world.
        </p>
      </ScrollReveal>

      <div className="space-y-12 mb-16">
        {benchmarks.map((benchmark, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="bg-white border border-[var(--color-brand-slate)]/20 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-heading font-bold text-[var(--color-brand-navy)] mb-2">
                {benchmark.title}
              </h2>
              <p className="text-[var(--color-brand-slate)] mb-8">{benchmark.description}</p>
              
              <div className="space-y-6">
                {/* Flowtaris Bar */}
                <div>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span className="text-[var(--color-brand-accent)] font-bold">Flowtaris Average</span>
                    <span className="text-[var(--color-brand-accent)] font-mono">{benchmark.flowtaris}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden relative">
                    <div className="bg-[var(--color-brand-accent)] h-4 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                {/* Industry Bar */}
                <div>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span className="text-[var(--color-brand-slate)]">Industry Average</span>
                    <span className="text-[var(--color-brand-slate)] font-mono">{benchmark.industry}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden relative">
                    <div className="bg-gray-300 h-4 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-xs text-right text-[var(--color-brand-slate)] font-mono uppercase tracking-wider">
                Metric: {benchmark.metric}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4} className="bg-[var(--color-brand-navy)] rounded-xl p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl font-heading font-bold mb-4">Download the full Q2 2026 Report</h2>
        <p className="text-[var(--color-brand-slate)] mb-8 max-w-2xl mx-auto">
          Get the complete dataset including methodology, sample sizes, and detailed breakdowns by industry vertical.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" action="#">
          <input 
            type="email" 
            placeholder="Work email address" 
            className="flex-grow px-4 py-3 rounded-md text-[var(--color-brand-navy)] border-0 focus:ring-2 focus:ring-[var(--color-brand-accent)]"
            required
          />
          <button 
            type="submit"
            className="px-6 py-3 rounded-md font-medium bg-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-accent)]/90 transition-colors whitespace-nowrap"
          >
            Download PDF
          </button>
        </form>
      </ScrollReveal>
      <AnswerSection topic="Enterprise Benchmarks" blocks={faqData} />
    </div>
  );
}
