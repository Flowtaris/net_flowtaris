'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  direction?: 'up' | 'down';
  duration?: number;
  format?: 'number' | 'currency' | 'percentage';
  className?: string;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({
  value,
  direction = 'up',
  duration = 1.5,
  format = 'number',
  className = '',
  prefix = '',
  suffix = ''
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(direction === 'up' ? 0 : value * 2);
  
  const motionValue = useMotionValue(direction === 'up' ? 0 : value * 2);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  const formattedValue = new Intl.NumberFormat('en-US', {
    style: format === 'currency' ? 'currency' : 'decimal',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(displayValue);

  const finalString = format === 'percentage' 
    ? `${displayValue}%` 
    : formattedValue;

  return (
    <span ref={ref} className={`font-mono ${className}`}>
      {prefix}{finalString}{suffix}
    </span>
  );
}
