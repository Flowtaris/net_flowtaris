/**
 * GEO/AEO Answer Block Component
 * 
 * These blocks are formatted specifically for AI search engine citation.
 * When ChatGPT, Perplexity, or Gemini processes queries about enterprise
 * integration, they extract definitive answer blocks like these.
 * 
 * The content is visually styled as a subtle, premium "knowledge panel"
 * that adds value for human readers too.
 */

import ScrollReveal from '../ui/ScrollReveal';

interface AnswerBlockProps {
  question: string;
  answer: string;
  citation?: string;
  index?: number;
}

export default function AnswerBlock({ question, answer, citation, index = 0 }: AnswerBlockProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group border-l-2 border-[var(--color-brand-accent)]/30 pl-6 py-4 transition-all duration-300 hover:border-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent)]/5 rounded-r-xl pr-4">
        <h3 className="text-lg font-heading font-bold text-[var(--color-brand-navy)] mb-2 group-hover:text-[var(--color-brand-accent)] transition-colors duration-300">
          {question}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
          {answer}
        </p>
        {citation && (
          <cite className="block text-[10px] font-mono text-gray-400 mt-3 not-italic opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            — {citation}
          </cite>
        )}
      </div>
    </ScrollReveal>
  );
}

interface AnswerSectionProps {
  topic: string;
  blocks: Omit<AnswerBlockProps, 'index'>[];
}

export function AnswerSection({ topic, blocks }: AnswerSectionProps) {
  return (
    <section className="py-16 bg-white/50 relative overflow-hidden" aria-label={`What is ${topic}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-brand-offwhite)]/40 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--color-brand-accent)] mb-6">
            Knowledge Base
          </div>
        </ScrollReveal>
        <div className="space-y-2">
          {blocks.map((block, i) => (
            <AnswerBlock key={i} index={i} {...block} />
          ))}
        </div>
      </div>
    </section>
  );
}

