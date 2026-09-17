'use client';
import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({ faqs, theme = "gold" }: { faqs: FAQItem[], theme?: "gold" | "mint" | "red" | "cyan" | "amber" }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accentColor = theme === "mint" ? "text-[#059669]" : theme === "red" ? "text-[#E11D48]" : theme === "cyan" ? "text-[#06B6D4]" : theme === "amber" ? "text-[#D97706]" : "text-[var(--color-brand-accent)]";
  const bgAccentColor = theme === "mint" ? "bg-[#059669]" : theme === "red" ? "bg-[#E11D48]" : theme === "cyan" ? "bg-[#06B6D4]" : theme === "amber" ? "bg-[#D97706]" : "bg-[var(--color-brand-accent)]";
  const borderAccentColor = theme === "mint" ? "border-[#059669]" : theme === "red" ? "border-[#E11D48]" : theme === "cyan" ? "border-[#06B6D4]" : theme === "amber" ? "border-[#D97706]" : "border-[var(--color-brand-accent)]";
  
  const isDark = theme === "cyan"; // Since Observatory is pure black
  const panelBg = isDark ? "bg-white/5 backdrop-blur-xl border-white/10" : "bg-white border-gray-200";
  const panelHover = isDark ? "hover:border-white/20" : "hover:border-gray-300";
  const textPrimary = isDark ? "text-white" : "text-[var(--color-brand-navy)]";
  const textSecondary = isDark ? "text-gray-300" : "text-[var(--color-brand-slate)]";
  const iconBg = isDark ? "bg-white/10 border-white/10" : "bg-gray-50 border-gray-200";

  return (
    <div className="w-full">
      <div className="flex flex-col space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? `${borderAccentColor} shadow-[0_0_15px_rgba(6,182,212,0.1)] ${isDark ? 'bg-white/10' : 'bg-white'}` : `${panelBg} ${panelHover} shadow-sm`}`}
          >
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className={`font-heading font-bold text-lg pr-8 transition-colors duration-300 ${openIndex === index ? accentColor : textPrimary}`}>
                {faq.question}
              </span>
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 shrink-0 ${openIndex === index ? `rotate-180 ${bgAccentColor} border-transparent` : iconBg}`}>
                <svg className={`w-4 h-4 transition-colors duration-300 ${openIndex === index ? (isDark ? 'text-black' : 'text-white') : textPrimary}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{ maxHeight: openIndex === index ? '400px' : '0px', opacity: openIndex === index ? 1 : 0 }}
            >
              <div className={`p-6 pt-0 ${textSecondary} text-lg leading-relaxed font-medium`}>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
