import type { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FAQ from '@/components/ui/FAQ';
import LiveAuditTelemetry from '@/components/ui/LiveAuditTelemetry';
import { getCmsData } from '@/lib/cms';
import JsonLd, { getTechArticleSchema, getFAQPageSchema, getBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Enterprise Compliance Vault — SOC 2, GDPR & Zero-Trust Security Architecture',
  description: 'Flowtaris enterprise security architecture: SOC 2 Type II certified, GDPR/CCPA compliant, zero-trust infrastructure with AES-256 encryption, BYOK options, and pre-filled SIG Core vendor risk assessments. Accelerate your enterprise procurement today.',
  keywords: ['enterprise compliance vault', 'SOC 2 Type II ERP', 'GDPR compliant integration', 'zero trust architecture', 'vendor risk assessment', 'enterprise security documentation', 'AES-256 data encryption', 'CCPA compliance ERP', 'SIG Core questionnaire'],
  openGraph: {
    title: 'Enterprise Compliance Vault — SOC 2, GDPR & Zero-Trust Security | Flowtaris',
    description: 'SOC 2 Type II certified. GDPR/CCPA compliant. Zero-trust architecture with AES-256 encryption. Accelerate enterprise procurement with Flowtaris.',
    url: 'https://flowtaris.net/compliance-vault',
  },
  alternates: {
    canonical: 'https://flowtaris.net/compliance-vault',
  },
};

export const revalidate = 60;

export default async function ComplianceVault() {
  const data = (await getCmsData())?.complianceVault;
  
  if (!data) return null;

  return (
    <div className="bg-[#FDFBF7] min-h-screen text-[var(--color-brand-navy)] pt-32 pb-32 selection:bg-[var(--color-brand-navy)] selection:text-[#FDFBF7]">
      <JsonLd data={[
        getTechArticleSchema({
          title: 'Enterprise Compliance Vault — SOC 2, GDPR & Zero-Trust Security Architecture',
          description: 'SOC 2 Type II certified, GDPR/CCPA compliant, zero-trust infrastructure with AES-256 encryption and pre-filled SIG Core vendor risk assessments.',
          url: 'https://flowtaris.net/compliance-vault',
        }),
        getFAQPageSchema(data.faqs || []),
        getBreadcrumbSchema([
          { name: 'Flowtaris', url: 'https://flowtaris.com' },
          { name: 'Accountability Engine', url: 'https://flowtaris.net' },
          { name: 'Compliance Vault', url: 'https://flowtaris.net/compliance-vault' },
        ]),
      ]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Narrative Hero Section */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[var(--color-brand-accent)]/10 border border-[var(--color-brand-accent)]/20 text-[var(--color-brand-accent)] text-xs font-bold tracking-[0.2em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)] animate-pulse"></span>
              <span>{data.hero.badge}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 tracking-tight">
              {data.hero.titleLine1} <span className="text-[var(--color-brand-accent)]">{data.hero.titleAccent}</span>{data.hero.titleLine2}
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-brand-slate)] font-light leading-relaxed">
              {data.hero.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Graphics: Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <ScrollReveal delay={0.2} className="relative w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden border border-gray-200 shadow-lg group bg-white">
            <Image 
              src="/images/compliance_cert_shield.jpg"
              alt="Security Certification Shield"
              fill
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              priority
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="relative w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden border border-gray-200 shadow-lg group bg-white">
            <Image 
              src="/images/compliance_dpa_document.jpg"
              alt="Data Processing Agreement Document"
              fill
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              priority
            />
          </ScrollReveal>
        </div>

        {/* Sticky Scroll Layout: Philosophy vs Facts */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32 items-start">
          
          {/* Left Column: Sticky Philosophy & Telemetry */}
          <div className="lg:w-5/12 lg:sticky lg:top-32 space-y-12">
            <ScrollReveal>
              <h2 className="text-4xl font-heading font-black mb-6 leading-tight">
                {data.philosophy.title.split('. ')[0]}. <br/><span className="text-[var(--color-brand-accent)]">{data.philosophy.title.split('. ').slice(1).join('. ')}</span>
              </h2>
              <div className="w-16 h-1.5 bg-[var(--color-brand-accent)] mb-8 rounded-full" />
              <div className="space-y-6 text-[var(--color-brand-slate)] text-lg leading-relaxed">
                {data.philosophy.paragraphs.map((p: string, i: number) => (
                  <p key={i} className={i === data.philosophy.paragraphs.length - 1 ? "font-bold text-[var(--color-brand-navy)]" : ""}>
                    {p}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            {/* LIVE AUDIT TELEMETRY COMPONENT */}
            <ScrollReveal delay={0.2}>
              <LiveAuditTelemetry data={data.telemetry} />
            </ScrollReveal>
          </div>

          {/* Right Column: Scrolling Hard Facts */}
          <div className="lg:w-7/12 space-y-8">
            {data.policies.map((policy: { id: string; title: string; content: string }, index: number) => (
              <ScrollReveal key={index} delay={0.1}>
                <div className="group p-10 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[var(--color-brand-accent)]/30 transition-all duration-500 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-6">
                    <div className="text-5xl font-mono font-black text-[var(--color-brand-accent)]/30 group-hover:text-[var(--color-brand-accent)] transition-colors duration-500">
                      {policy.id}
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-4">{policy.title}</h3>
                      <p className="text-[var(--color-brand-slate)] text-lg leading-relaxed">
                        {policy.content}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* AEO Optimized FAQ Accordion */}
        <ScrollReveal>
          <div className="w-full max-w-4xl mx-auto mt-24">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-[var(--color-brand-navy)] mb-12 border-b border-gray-200 pb-6">
              Procurement FAQ
            </h2>
            <FAQ faqs={data.faqs} theme="gold" />
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
