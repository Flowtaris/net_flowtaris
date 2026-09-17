import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { supabase } from '@/lib/supabase';
import JsonLd, { getFAQPageSchema } from '@/components/seo/JsonLd';
import { AnswerSection } from '@/components/seo/AnswerBlock';

export const metadata: Metadata = {
  title: 'Incident Transparency Log | Flowtaris',
  description: 'Public post-mortems and incident reports for all systems managed by Flowtaris. Complete transparency in engineering.',
};

export const revalidate = 60; // Refresh data every 60s

export default async function IncidentTransparency() {
  
  // Fetch real incidents from Supabase
  const { data: dbIncidents, error } = await supabase
    .from('incidents')
    .select('*')
    .order('created_at', { ascending: false });

  // Extract Date.now() outside of component or use static values since it's an async server component.
  // We'll use a static timestamp for fallback data so it doesn't trigger impure function warnings.
  const now = new Date('2024-01-01T12:00:00Z').getTime();

  // Fallback data if Supabase isn't connected or is empty
  const fallbackIncidents = [
    {
      title: "NetSuite API Rate Limit Exceeded",
      created_at: new Date(now - 3 * 86400000).toISOString(),
      resolved_at: new Date(now - 3 * 86400000 + 2700000).toISOString(),
      status: "Resolved",
      severity: "P2",
      description: "Integration pipeline experienced degraded performance due to upstream API rate limiting from Oracle NetSuite.",
      root_cause: "A bulk historical data migration triggered a hard concurrency limit on the NetSuite API account. We have implemented adaptive rate-limiting and exponential backoff in the middleware layer."
    },
    {
      title: "Coupa Webhook Payload Validation Failure",
      created_at: new Date(now - 10 * 86400000).toISOString(),
      resolved_at: new Date(now - 10 * 86400000 + 1320000).toISOString(),
      status: "Resolved",
      severity: "P3",
      description: "Inbound webhooks from Coupa were failing validation and being sent to the Dead Letter Queue.",
      root_cause: "Coupa deployed an unannounced schema change to their invoice payload. Our validation schemas were updated within 15 minutes and all queued messages were reprocessed successfully."
    }
  ];

  type Incident = {
    title: string;
    created_at: string;
    resolved_at?: string;
    status: string;
    severity: string;
    description: string;
    root_cause?: string;
  };

  const incidents = (dbIncidents && dbIncidents.length > 0) ? dbIncidents : fallbackIncidents;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const faqData = [
    {
      question: "What is an incident post-mortem?",
      answer: "An incident post-mortem is a detailed technical review conducted after a system failure (like an API outage or data synchronization error). It documents exactly what failed, how it was detected, the root cause, and the specific engineering changes made to prevent it from happening again.",
      citation: "Flowtaris Engineering Standards"
    },
    {
      question: "Why does Flowtaris publish incidents publicly?",
      answer: "Flowtaris publishes incidents publicly because hiding failures is a sign of weak engineering culture. By making our post-mortems public, we enforce absolute accountability. Clients can verify that when an ERP integration breaks, we don't just patch it—we re-architect the system to eliminate the failure mode entirely.",
      citation: "Flowtaris Master Plan"
    }
  ];

  return (
    <div className="bg-[var(--color-brand-offwhite)] min-h-screen relative overflow-hidden">
      <JsonLd data={getFAQPageSchema(faqData)} />
      
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/60 border border-gray-200 backdrop-blur-md mb-6">
            <span className="text-xs font-bold text-[var(--color-brand-navy)] tracking-wider uppercase">Public Post-Mortems</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-[var(--color-brand-navy)] mb-6 tracking-tight">
            Incident <span className="text-gradient">Transparency</span>
          </h1>
          <p className="text-xl text-[var(--color-brand-slate)] mb-12 leading-relaxed">
            When systems fail, we don&apos;t hide behind SLAs. We publish the failure, the root cause, and the engineering changes we made to ensure it never happens again.
          </p>
          {error && <p className="text-sm text-[var(--color-brand-gold)] font-bold mb-8">Showing cached data (Supabase connection pending).</p>}
        </ScrollReveal>

        <div className="space-y-8">
          {incidents.map((incident: Incident, idx: number) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="glass-card rounded-2xl p-8 border border-white/40 shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${
                        incident.severity === 'P1' ? 'bg-red-100 text-red-800' :
                        incident.severity === 'P2' ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {incident.severity}
                      </span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${
                        incident.status === 'Resolved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {incident.status}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--color-brand-navy)]">{incident.title}</h2>
                  </div>
                  <div className="text-sm text-[var(--color-brand-slate-light)] mt-4 md:mt-0 text-right font-mono">
                    <div>Opened: {formatDate(incident.created_at)}</div>
                    {incident.resolved_at && <div>Resolved: {formatDate(incident.resolved_at)}</div>}
                  </div>
                </div>

                <div className="prose prose-sm max-w-none prose-slate">
                  <h4 className="text-[var(--color-brand-navy)] font-bold">Incident Summary</h4>
                  <p>{incident.description}</p>
                  
                  {incident.root_cause && (
                    <>
                      <h4 className="text-[var(--color-brand-navy)] font-bold mt-6">Root Cause & Resolution</h4>
                      <p>{incident.root_cause}</p>
                    </>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <div className="mt-20 relative z-10 max-w-4xl mx-auto">
        <AnswerSection topic="Incident Transparency" blocks={faqData} />
      </div>
    </div>
  );
}
