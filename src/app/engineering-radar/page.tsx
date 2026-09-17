import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import JsonLd, { getFAQPageSchema } from '@/components/seo/JsonLd';
import { AnswerSection } from '@/components/seo/AnswerBlock';

export const metadata: Metadata = {
  title: 'Engineering Technology Radar | Flowtaris',
  description: 'Our interactive technology radar: what we Adopt, Trial, Assess, and Hold.',
};

export default function EngineeringRadar() {
  const categories = [
    {
      name: "Adopt",
      description: "Technologies we have high confidence in to serve our purpose, also in large scale. Technologies with a ring of Adopt are highly recommended for use.",
      color: "bg-[var(--color-brand-accent)] text-white",
      items: [
        { name: "Next.js (App Router)", rationale: "Standard for all web frontends." },
        { name: "TypeScript", rationale: "Strict type safety across the stack." },
        { name: "Supabase", rationale: "PostgreSQL with excellent DX." },
        { name: "Vercel", rationale: "Zero-config global edge deployments." }
      ]
    },
    {
      name: "Trial",
      description: "Technologies we have seen work with success in project work to solve a real problem. They are safe to use on a risk-reward basis.",
      color: "bg-blue-600 text-white",
      items: [
        { name: "Deno 2", rationale: "Evaluating for edge-native API performance." },
        { name: "AI Agents (LangChain)", rationale: "Automating routine integration tasks." }
      ]
    },
    {
      name: "Assess",
      description: "Technologies that are promising and have clear potential value-add for us; technologies worth investing some research and prototyping efforts in.",
      color: "bg-[var(--color-brand-gold)] text-[var(--color-brand-navy)]",
      items: [
        { name: "WebAssembly (Wasm)", rationale: "High-performance browser computing." }
      ]
    },
    {
      name: "Hold",
      description: "Technologies not recommended to be used for new projects. Technologies that we think are not (yet) worth to (further) invest in.",
      color: "bg-red-500 text-white",
      items: [
        { name: "Legacy REST APIs (without OpenAPI)", rationale: "Moving entirely to tRPC or documented REST." },
        { name: "jQuery", rationale: "Replaced by native APIs and React." }
      ]
    }
  ];

  const faqData = [
    {
      question: "What is an Engineering Technology Radar?",
      answer: "An Engineering Technology Radar is a visual framework pioneered by ThoughtWorks that categorizes technical platforms, tools, and languages into four rings: Adopt, Trial, Assess, and Hold. It provides a transparent, living document of an engineering organization's technology strategy.",
      citation: "Flowtaris Architecture Standards"
    },
    {
      question: "How does Flowtaris evaluate new ERP technologies?",
      answer: "Flowtaris evaluates new ERP technologies through structured Proof of Concepts (PoCs) managed by the Architecture Board. A technology moves from 'Assess' to 'Trial' when it solves a verified integration bottleneck (like Kafka for event streaming). It only moves to 'Adopt' after succeeding in a production environment with at least 99.99% uptime.",
      citation: "Flowtaris Engineering"
    }
  ];

  return (
    <div className="bg-[var(--color-brand-offwhite)] py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <JsonLd data={getFAQPageSchema(faqData)} />
      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-brand-navy)] mb-6">
          Engineering Tech Radar
        </h1>
        <p className="text-xl text-[var(--color-brand-slate)] mb-12 max-w-3xl">
          We don&apos;t use technology because it&apos;s trendy. We use it because it solves enterprise problems. Here is exactly what we use, what we&apos;re testing, and what we&apos;re moving away from.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="bg-white border border-[var(--color-brand-slate)]/20 rounded-xl overflow-hidden shadow-sm h-full flex flex-col">
              <div className={`px-6 py-4 ${category.color} flex justify-between items-center`}>
                <h2 className="text-2xl font-heading font-bold uppercase tracking-wider">
                  {category.name}
                </h2>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-sm text-[var(--color-brand-slate)] mb-6 border-b border-[var(--color-brand-slate)]/20 pb-4">
                  {category.description}
                </p>
                <ul className="space-y-4 flex-grow">
                  {category.items.map((item, i) => (
                    <li key={i} className="group">
                      <div className="font-bold text-[var(--color-brand-navy)] group-hover:text-[var(--color-brand-accent)] transition-colors">
                        {item.name}
                      </div>
                      <div className="text-sm text-[var(--color-brand-slate)] mt-1">
                        {item.rationale}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-20">
        <AnswerSection topic="the Engineering Radar" blocks={faqData} />
      </div>

      <ScrollReveal delay={0.4} className="mt-16 text-center border-t border-[var(--color-brand-slate)]/20 pt-12">
        <h2 className="text-2xl font-heading font-bold text-[var(--color-brand-navy)] mb-4">
          Want the detailed analysis behind these choices?
        </h2>
        <p className="text-[var(--color-brand-slate)] mb-8">
          We publish our Architectural Decision Records (ADRs) on our thought-leadership platform.
        </p>
        <a 
          href="https://flowtaris.co/judgment" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[var(--color-brand-navy)] hover:bg-[var(--color-brand-navy)]/90 transition-colors"
        >
          Read the Decision Logs &rarr;
        </a>
      </ScrollReveal>
    </div>
  );
}

