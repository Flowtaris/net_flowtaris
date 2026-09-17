import { ReactNode } from 'react';
import ScrollReveal from './ScrollReveal';

interface MetricCardProps {
  title: string;
  value: ReactNode;
  industryAverage: string;
  description: string;
  delay?: number;
}

export default function MetricCard({ title, value, industryAverage, description, delay = 0 }: MetricCardProps) {
  return (
    <ScrollReveal delay={delay} className="bg-white border border-[var(--color-brand-slate)]/20 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-sm font-medium text-[var(--color-brand-slate)] uppercase tracking-wider mb-2">{title}</h3>
      <div className="text-4xl font-mono text-[var(--color-brand-navy)] mb-4">{value}</div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-[var(--color-brand-accent)] font-medium">Industry: {industryAverage}</span>
      </div>
      <p className="text-xs text-[var(--color-brand-slate)] mt-4">{description}</p>
    </ScrollReveal>
  );
}

