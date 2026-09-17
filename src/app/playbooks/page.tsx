import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import JsonLd, { getFAQPageSchema } from '@/components/seo/JsonLd';
import { AnswerSection } from '@/components/seo/AnswerBlock';

export const metadata: Metadata = {
  title: 'Engineering Playbooks | Flowtaris',
  description: 'Downloadable engineering guides for ERP integration and automation.',
};

export default function Playbooks() {
  const playbooks = [
    {
      title: "NetSuite-to-Coupa Integration Playbook",
      description: "The definitive guide to syncing purchase orders, invoices, and payments between NetSuite and Coupa. Includes architectural patterns and common pitfalls.",
      pages: "42 pages",
      schema: "HowTo"
    },
    {
      title: "ERP Migration Risk Checklist",
      description: "A comprehensive pre-flight checklist for migrating from legacy ERPs to cloud platforms without data loss or business interruption.",
      pages: "18 pages",
      schema: "HowTo"
    },
    {
      title: "Finance Automation Readiness Scorecard",
      description: "A self-assessment tool to evaluate your organization's readiness for AP/AR automation and AI-driven reconciliation.",
      pages: "12 pages",
      schema: "HowTo"
    },
    {
      title: "Enterprise Integration Testing Framework",
      description: "How to set up automated end-to-end testing for complex multi-system integrations across different staging environments.",
      pages: "36 pages",
      schema: "HowTo"
    }
  ];

  const faqData = [
    {
      question: "What are Flowtaris Open Playbooks?",
      answer: "Flowtaris Open Playbooks are highly technical, downloadable engineering guides that detail the exact architectural patterns, CI/CD pipelines, and data mapping schemas we use to execute enterprise integrations. Unlike standard whitepapers, these playbooks contain actual system design documentation.",
      citation: "Flowtaris Engineering"
    },
    {
      question: "Why does Flowtaris open-source its integration methodology?",
      answer: "Flowtaris open-sources its methodology because we believe execution is the differentiator, not secrecy. By publishing our playbooks, we raise the standard for enterprise integration. Clients can read exactly how we plan to build their systems before they hire us.",
      citation: "Flowtaris Engineering"
    }
  ];

  return (
    <div className="bg-[var(--color-brand-offwhite)] py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <JsonLd data={getFAQPageSchema(faqData)} />
      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-brand-navy)] mb-6">
          Open Playbooks
        </h1>
        <p className="text-xl text-[var(--color-brand-slate)] mb-16 max-w-3xl">
          We open-source our integration playbooks. Download the exact methodologies, checklists, and frameworks we use to deliver enterprise projects.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {playbooks.map((playbook, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="bg-white border border-[var(--color-brand-slate)]/20 rounded-xl p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": playbook.schema,
                    "name": playbook.title,
                    "description": playbook.description,
                    "author": {
                      "@type": "Organization",
                      "name": "Flowtaris"
                    }
                  })
                }}
              />
              
              <div className="flex items-center space-x-3 mb-4">
                <svg className="h-6 w-6 text-[var(--color-brand-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-xs font-mono font-bold text-[var(--color-brand-slate)] uppercase tracking-wider">
                  {playbook.pages}
                </span>
              </div>
              
              <h2 className="text-2xl font-heading font-bold text-[var(--color-brand-navy)] mb-4">
                {playbook.title}
              </h2>
              
              <p className="text-[var(--color-brand-slate)] mb-8 flex-grow">
                {playbook.description}
              </p>
              
              <form className="mt-auto flex flex-col sm:flex-row gap-3" action="#">
                <input 
                  type="email" 
                  placeholder="Work email" 
                  className="flex-grow px-3 py-2 rounded border border-gray-300 text-sm focus:outline-none focus:border-[var(--color-brand-accent)] focus:ring-1 focus:ring-[var(--color-brand-accent)]"
                  required
                />
                <button 
                  type="submit"
                  className="px-4 py-2 rounded text-sm font-medium bg-[var(--color-brand-navy)] text-white hover:bg-[var(--color-brand-navy)]/90 transition-colors whitespace-nowrap"
                >
                  Download PDF
                </button>
              </form>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-20">
        <AnswerSection topic="Engineering Playbooks" blocks={faqData} />
      </div>

      <ScrollReveal delay={0.4} className="mt-20 text-center border-t border-[var(--color-brand-slate)]/20 pt-12">
        <h2 className="text-2xl font-heading font-bold text-[var(--color-brand-navy)] mb-6">
          Don&apos;t want to build it yourself?
        </h2>
        <a 
          href="https://flowtaris.com/contact" 
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent)]/90 transition-colors"
        >
          Let us implement it &rarr;
        </a>
      </ScrollReveal>
    </div>
  );
}


