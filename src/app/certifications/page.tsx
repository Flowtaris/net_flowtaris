import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import JsonLd, { getFAQPageSchema } from '@/components/seo/JsonLd';
import { AnswerSection } from '@/components/seo/AnswerBlock';

export const metadata: Metadata = {
  title: 'Partner Certifications | Flowtaris',
  description: 'Our verified engineering certifications for NetSuite, Coupa, SAP, and Workday.',
};

export default function Certifications() {
  const certs = [
    {
      platform: "Oracle NetSuite",
      title: "SuiteCloud Developer II",
      date: "Valid through 2027",
      description: "Certified to architect and develop complex SuiteScripts, SuiteTalk integrations, and custom Suitelets.",
      link: "https://flowtaris.com/services"
    },
    {
      platform: "Coupa",
      title: "Platform Integration Specialist",
      date: "Valid through 2027",
      description: "Certified to build high-volume transactional integrations between Coupa BSM and major ERPs.",
      link: "https://flowtaris.com/services"
    },
    {
      platform: "SAP",
      title: "Certified Technology Associate",
      date: "Valid through 2026",
      description: "System administration and integration architecture for SAP S/4HANA.",
      link: "https://flowtaris.com/services"
    },
    {
      platform: "Workday",
      title: "Integration Certified",
      date: "Valid through 2027",
      description: "Expertise in Workday Studio, Core Connectors, and EIBs.",
      link: "https://flowtaris.com/services"
    }
  ];

  const faqData = [
    {
      question: "What is a NetSuite SuiteCloud Developer Certification?",
      answer: "A NetSuite SuiteCloud Developer II Certification proves that an engineer has mastered the advanced architecture of SuiteScript, SuiteTalk, and SuiteFlow. It ensures that Flowtaris engineers write integrations that respect NetSuite governance limits and perform reliably at scale.",
      citation: "Oracle NetSuite Certification Guidelines"
    },
    {
      question: "Why do ERP certifications matter for enterprise integration?",
      answer: "ERP certifications guarantee that an integration partner understands the deep data models, proprietary APIs (like SAP RFCs or Workday Core Connectors), and security protocols of the systems they are connecting. Flowtaris requires platform-specific certifications to prevent the architectural mistakes common among generalist agencies.",
      citation: "Flowtaris Engineering Standards"
    }
  ];

  return (
    <div className="bg-[var(--color-brand-offwhite)] py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <JsonLd data={getFAQPageSchema(faqData)} />
      
      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-brand-navy)] mb-6">
          Partner Certifications
        </h1>
        <p className="text-xl text-[var(--color-brand-slate)] mb-16 max-w-3xl">
          We do not hire generalists. Our engineering teams hold the highest technical certifications for the platforms we integrate.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {certs.map((cert, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="bg-white border border-[var(--color-brand-slate)]/20 rounded-xl p-8 shadow-sm flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-bold px-2 py-1 bg-[var(--color-brand-navy)] text-white rounded uppercase tracking-wider mb-2 inline-block">
                    {cert.platform}
                  </span>
                  <h2 className="text-xl font-heading font-bold text-[var(--color-brand-navy)] mt-2">
                    {cert.title}
                  </h2>
                </div>
                <svg className="h-10 w-10 text-[var(--color-brand-accent)] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              
              <p className="text-[var(--color-brand-slate)] mb-6 flex-grow">
                {cert.description}
              </p>
              
              <div className="flex justify-between items-center border-t border-[var(--color-brand-slate)]/10 pt-4 mt-auto">
                <span className="text-xs font-mono text-[var(--color-brand-slate)]">{cert.date}</span>
                <a href={cert.link} className="text-sm font-medium text-[var(--color-brand-accent)] hover:underline">
                  View capabilities &rarr;
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      
      <AnswerSection topic="Engineering Certifications" blocks={faqData} />
    </div>
  );
}

