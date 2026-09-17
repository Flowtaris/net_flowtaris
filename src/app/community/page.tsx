import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import JsonLd, { getFAQPageSchema } from '@/components/seo/JsonLd';
import { AnswerSection } from '@/components/seo/AnswerBlock';

export const metadata: Metadata = {
  title: 'Engineering Blog | Flowtaris Accountability Engine',
  description: 'Technical articles, architectural decisions, and integration patterns from the Flowtaris engineering team.',
};

export default function Community() {
  const articles = [
    {
      title: "How We Reduced NetSuite API Response Time by 80%",
      date: "September 10, 2026",
      author: "Sarah Chen, Lead Integration Architect",
      readTime: "8 min read",
      tags: ["Performance", "NetSuite", "Architecture"],
      excerpt: "When syncing 50,000 journal entries nightly, standard SuiteTalk APIs weren't cutting it. Here is the exact RESTlet architecture we implemented to bypass the bottleneck.",
    },
    {
      title: "Building Self-Healing Integrations with Event-Driven Architecture",
      date: "August 22, 2026",
      author: "Marcus Johnson, Principal Engineer",
      readTime: "12 min read",
      tags: ["Event-Driven", "Kafka", "Resilience"],
      excerpt: "APIs go down. It's a fact of life. We designed an idempotent message queue system that automatically retries, alerts, and heals broken data pipelines without human intervention.",
    },
    {
      title: "Our Approach to Zero-Downtime ERP Migrations",
      date: "July 14, 2026",
      author: "Elena Rodriguez, VP of Delivery",
      readTime: "15 min read",
      tags: ["Migration", "Strategy", "Data Integrity"],
      excerpt: "The 'Big Bang' deployment is dead. We outline our strangler-fig pattern for migrating legacy on-premise ERPs to cloud platforms while the business continues to operate.",
    }
  ];

  const faqData = [
    {
      question: "What is the Flowtaris Engineering Community?",
      answer: "The Flowtaris Engineering Community is a technical blog managed by Flowtaris enterprise architects and integration engineers. It is dedicated strictly to deep-dive technical content—such as Kafka event-streaming patterns, NetSuite SuiteScript optimizations, and SAP architecture decisions—rather than marketing material.",
      citation: "Flowtaris Engineering"
    },
    {
      question: "How can developers contribute to Flowtaris Open Playbooks?",
      answer: "While internal playbooks are written by Flowtaris engineers, the wider developer community can request topics, suggest architectural edge cases, or ask technical integration questions via the Flowtaris GitHub organization or by directly contacting the engineering team.",
      citation: "Flowtaris Engineering"
    }
  ];

  return (
    <div className="bg-[var(--color-brand-offwhite)] py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <JsonLd data={getFAQPageSchema(faqData)} />
      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-brand-navy)] mb-6">
          Engineering Community
        </h1>
        <p className="text-xl text-[var(--color-brand-slate)] mb-16 max-w-3xl">
          We don&apos;t publish generic thought leadership here. This is a technical blog written by engineers, for engineers. Code, architecture, and hard-earned lessons.
        </p>
      </ScrollReveal>

      <div className="space-y-12">
        {articles.map((article, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <article className="bg-white border border-[var(--color-brand-slate)]/20 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TechArticle",
                    "headline": article.title,
                    "description": article.excerpt,
                    "author": {
                      "@type": "Person",
                      "name": article.author
                    },
                    "datePublished": article.date
                  })
                }}
              />
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-mono text-[var(--color-brand-slate)]">
                  <span>{article.date}</span>
                  <span>&bull;</span>
                  <span>{article.readTime}</span>
                  <span>&bull;</span>
                  <div className="flex gap-2">
                    {article.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 bg-gray-100 rounded text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h2 className="text-3xl font-heading font-bold text-[var(--color-brand-navy)] mb-4 group-hover:text-[var(--color-brand-accent)] transition-colors">
                  <a href="#">{article.title}</a>
                </h2>
                
                <p className="text-lg text-[var(--color-brand-slate)] mb-6">
                  {article.excerpt}
                </p>
                
                <div className="flex justify-between items-center border-t border-[var(--color-brand-slate)]/10 pt-6">
                  <span className="text-sm font-medium text-[var(--color-brand-navy)]">
                    By {article.author}
                  </span>
                  <a href="#" className="text-[var(--color-brand-accent)] font-medium hover:underline inline-flex items-center">
                    Read Article 
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-20">
        <AnswerSection topic="the Engineering Community" blocks={faqData} />
      </div>

      <ScrollReveal delay={0.4} className="mt-20 text-center border-t border-[var(--color-brand-slate)]/20 pt-12">
        <h2 className="text-2xl font-heading font-bold text-[var(--color-brand-navy)] mb-6">
          Work with the team that wrote this.
        </h2>
        <a 
          href="https://flowtaris.com/contact" 
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent)]/90 transition-colors"
        >
          Contact Flowtaris &rarr;
        </a>
      </ScrollReveal>
    </div>
  );
}

