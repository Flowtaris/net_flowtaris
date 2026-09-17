'use client';

import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

interface ComplianceBarProps {
  score: number;
  lastVerified: string;
}

export default function ComplianceBar({ score, lastVerified }: ComplianceBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <div className="mt-6" ref={ref}>
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-medium text-[var(--color-brand-slate)]">Compliance Score</span>
        <span className="text-2xl font-mono font-bold text-[var(--color-brand-navy)]">{score}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div 
          className="bg-[var(--color-brand-accent)] h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${score}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <div className="mt-2 text-xs text-[var(--color-brand-slate)] text-right">
        Last Verified: {lastVerified}
      </div>
    </div>
  );
}

