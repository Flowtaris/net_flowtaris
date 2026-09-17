import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import JsonLd, { getFAQPageSchema } from '@/components/seo/JsonLd';
import { AnswerSection } from '@/components/seo/AnswerBlock';

export const metadata: Metadata = {
  title: 'Open Methodology | Flowtaris Accountability Engine',
  description: 'Our step-by-step engagement model: Discovery Sprint, Architecture, Build, Go-Live, and Operations.',
};

export default function OpenMethodology() {
  const steps = [
    {
      phase: "Phase 1",
      title: "Discovery Sprint",
      timeline: "Weeks 1-2",
      description: "We don't do endless workshops. We do intensive, 2-week deep dives to map your exact architecture, data flows, and bottlenecks.",
      deliverables: ["Current State Architecture Diagram", "Data Flow Analysis", "Risk Register"],
      responsibilities: "Client provides access to current systems and SMEs for 4 hours total."
    },
    {
      phase: "Phase 2",
      title: "Architecture & Design",
      timeline: "Weeks 3-4",
      description: "We design the target state with a focus on zero-downtime migration, data integrity, and API performance. Everything is documented in ADRs.",
      deliverables: ["Target State Architecture", "API Specifications", "Security Threat Model"],
      responsibilities: "Client signs off on target architecture and integration points."
    },
    {
      phase: "Phase 3",
      title: "Build Sprints",
      timeline: "Weeks 5-12+",
      description: "Iterative development with bi-weekly demos. You see working software, not status reports. All code is subject to our strict Delivery Standards.",
      deliverables: ["Working Code (Sprint Demos)", "Automated Test Suites", "CI/CD Pipeline Configuration"],
      responsibilities: "Client participates in bi-weekly sprint reviews and UAT."
    },
    {
      phase: "Phase 4",
      title: "Go-Live Protocol",
      timeline: "Week 13",
      description: "A meticulously orchestrated deployment sequence. We conduct dry-runs of the migration in staging before touching production.",
      deliverables: ["Runbook", "Rollback Plan", "Production Deployment"],
      responsibilities: "Client executes final UAT sign-off."
    },
    {
      phase: "Phase 5",
      title: "Ongoing Operations",
      timeline: "Continuous",
      description: "Post-launch, we monitor your integrations in real-time. We own the uptime. We provide the SLAs.",
      deliverables: ["Live DORA Metrics", "24/7 Monitoring", "Quarterly ROI Ledger"],
      responsibilities: "Client reviews monthly operational reports."
    }
  ];

  const faqData = [
    {
      question: "What is the Flowtaris Delivery Methodology?",
      answer: "The Flowtaris Delivery Methodology is a structured, 5-phase engagement model designed specifically for enterprise ERP integrations. It rejects traditional 'waterfall' consulting in favor of a hybrid approach: rigid architectural design (Phase 2) combined with agile, iterative build sprints (Phase 3) that deliver verifiable code every two weeks.",
      citation: "Flowtaris Open Methodology"
    },
    {
      question: "How long is a typical integration discovery sprint?",
      answer: "Flowtaris Discovery Sprints strictly adhere to a 2-week timeline. Unlike traditional agencies that charge for months of workshops, Flowtaris uses predefined technical questionnaires and automated schema analysis to map current-state architectures and risks in just 14 days, minimizing client SME time requirements to under 4 hours.",
      citation: "Flowtaris Engagement Model"
    }
  ];

  return (
    <div className="bg-[var(--color-brand-offwhite)] relative overflow-hidden">
      <JsonLd data={getFAQPageSchema(faqData)} />
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand-gold)] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "Flowtaris Engagement Methodology",
              "description": "The 5-step process Flowtaris uses to deliver Enterprise ERP and Integration projects.",
              "step": steps.map((s, index) => ({
                "@type": "HowToStep",
                "position": index + 1,
                "name": s.title,
                "text": s.description
              }))
            })
          }}
        />

        <ScrollReveal>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/60 border border-gray-200 backdrop-blur-md mb-6">
            <span className="text-xs font-bold text-[var(--color-brand-navy)] tracking-wider uppercase">Implementation Playbook</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-[var(--color-brand-navy)] mb-6 tracking-tight">
            Open <span className="text-gradient">Methodology</span>
          </h1>
          <p className="text-xl text-[var(--color-brand-slate)] mb-16 max-w-3xl leading-relaxed">
            Consulting shouldn&apos;t be a black box. This is our exact, step-by-step playbook for delivering enterprise transformations. No secrets, just disciplined execution.
          </p>
        </ScrollReveal>

        <div className="relative border-l-2 border-[var(--color-brand-accent)]/30 ml-4 md:ml-8 space-y-16">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1} className="relative pl-8 md:pl-16">
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] top-4 h-5 w-5 rounded-full bg-[var(--color-brand-accent)] border-4 border-[var(--color-brand-offwhite)] shadow-md" />
              
              <div className="glass-card border border-white/40 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-6">
                  <div className="flex items-center space-x-4 mb-2 md:mb-0">
                    <span className="text-sm font-black px-3 py-1 bg-[var(--color-brand-navy)] text-white rounded-md uppercase tracking-widest shadow-sm">
                      {step.phase}
                    </span>
                    <h2 className="text-2xl font-heading font-bold text-[var(--color-brand-navy)] group-hover:text-[var(--color-brand-accent)] transition-colors">
                      {step.title}
                    </h2>
                  </div>
                  <span className="text-[var(--color-brand-gold)] font-mono font-bold bg-[var(--color-brand-gold)]/10 px-3 py-1 rounded-md">
                    {step.timeline}
                  </span>
                </div>
                
                <p className="text-[var(--color-brand-slate)] mb-8 text-lg leading-relaxed max-w-3xl">
                  {step.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[var(--color-brand-slate)]/10">
                  <div className="bg-white/50 rounded-xl p-6 border border-white">
                    <h3 className="text-xs font-black text-[var(--color-brand-navy)] uppercase tracking-widest mb-4">Deliverables</h3>
                    <ul className="space-y-3">
                      {step.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-[var(--color-brand-accent)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm font-medium text-[var(--color-brand-slate)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/50 rounded-xl p-6 border border-white">
                    <h3 className="text-xs font-black text-[var(--color-brand-navy)] uppercase tracking-widest mb-4">Client Responsibilities</h3>
                    <p className="text-sm font-medium text-[var(--color-brand-slate)] leading-relaxed">{step.responsibilities}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="mt-32 bg-gradient-to-br from-[var(--color-brand-navy)] to-[var(--color-brand-navy-light)] rounded-2xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-brand-accent)] to-[var(--color-brand-gold)]"></div>
          <h2 className="text-3xl font-heading font-bold text-white mb-6">
            Ready to experience this process?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Stop guessing about project timelines and deliverables. Engage with a team that executes with precision.
          </p>
          <a 
            href="https://flowtaris.com/contact" 
            className="inline-flex items-center justify-center px-10 py-5 border border-transparent rounded-lg shadow-xl text-lg font-bold text-[var(--color-brand-navy)] bg-white hover:bg-gray-50 hover:-translate-y-1 transition-all"
          >
            Contact our team &rarr;
          </a>
        </ScrollReveal>
      </div>
      <div className="mt-20 relative z-10 max-w-4xl mx-auto">
        <AnswerSection topic="the Flowtaris Delivery Methodology" blocks={faqData} />
      </div>
    </div>
  );
}

