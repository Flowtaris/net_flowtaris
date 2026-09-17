import Image from 'next/image';
import Link from 'next/link';

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-navy)] text-white pt-24 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-[var(--color-brand-accent)]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight mb-6">
            The Flowtaris Architecture
          </h1>
          <p className="text-gray-300 font-mono text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            We don't do point-to-point spaghetti integrations. When you are moving mission-critical financial ledgers between SAP and Salesforce, data loss is a terminable offense. This is the exact blueprint we use to guarantee 99.99% uptime and zero dropped payloads.
          </p>
        </div>

        {/* Diagram */}
        <div className="w-full bg-white/[0.02] border border-white/10 rounded-[2rem] p-4 md:p-6 backdrop-blur-xl shadow-2xl relative group mb-20">
          <div className="absolute inset-0 border border-[var(--color-brand-accent)]/0 rounded-[2rem] group-hover:border-[var(--color-brand-accent)]/20 transition-colors duration-700 pointer-events-none" />
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden bg-black/40">
            <Image 
              src="/architecture.jpg" 
              alt="Flowtaris System Architecture Blueprint" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Deep Dive Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">
          
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-[var(--color-brand-accent)] border-b border-white/10 pb-4">
              1. The Death of the ESB
            </h3>
            <div className="space-y-4 text-gray-300 font-mono text-sm leading-loose">
              <p>
                Legacy Enterprise Service Buses (ESBs) are a nightmare for debugging. They hoard state, lock up during traffic spikes, and turn simple data transformations into monolithic bottlenecks.
              </p>
              <p>
                We completely rip out the ESB. Instead, we implement a highly decoupled, asynchronous event-driven fabric using distributed ledgers like Apache Kafka or Azure Service Bus. This forces every single data mutation to become a discrete, immutable event. If NetSuite goes offline for 10 minutes during an ERP sync, the events queue up securely. When it comes back online, the queue drains. Zero data loss.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-[var(--color-brand-accent)] border-b border-white/10 pb-4">
              2. Asynchronous Sidecar Tracing
            </h3>
            <div className="space-y-4 text-gray-300 font-mono text-sm leading-loose">
              <p>
                How do we power the live telemetry you see on our Observatory? We don't retroactively scrape server logs. That's slow and prone to failure. 
              </p>
              <p>
                We deploy OpenTelemetry-standard sidecars directly alongside your integration nodes. These sidecars run entirely out-of-band. They silently observe payloads, calculate structural schema diffs, measure P99 latency, and ship that data to our Accountability Engine without ever blocking your main execution thread. Your transactional throughput remains untouched.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-[var(--color-brand-accent)] border-b border-white/10 pb-4">
              3. Cryptographic Payload Lineage
            </h3>
            <div className="space-y-4 text-gray-300 font-mono text-sm leading-loose">
              <p>
                "Who updated this invoice, and when?" In a standard integration, answering that question takes 4 hours of grepping through messy logs.
              </p>
              <p>
                In the Flowtaris architecture, every payload carries a cryptographically signed trace ID. From the exact microsecond a webhook fires in Stripe, to the moment it commits as a journal entry in your ERP, we can track its exact lineage. If a third-party API rejects a payload, we don't just throw a 500 error—we capture the exact headers, the malformed body, and the stack trace for immediate replay.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-[var(--color-brand-accent)] border-b border-white/10 pb-4">
              4. Zero-Trust by Default
            </h3>
            <div className="space-y-4 text-gray-300 font-mono text-sm leading-loose">
              <p>
                Security isn't a checkbox we tick before deployment; it dictates the architecture. We operate on a strict Zero-Trust model.
              </p>
              <p>
                We default to data minimization. All payloads in transit are encrypted via TLS 1.3 with Perfect Forward Secrecy. Secrets are never stored in environment variables; they are rotated dynamically via dedicated secret managers (like AWS KMS or HashiCorp Vault). We even support Bring Your Own Key (BYOK) for enterprises that require absolute sovereignty over their data.
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-12 border-t border-white/10">
          <Link href="/integration-observatory" className="px-10 py-4 bg-[var(--color-brand-accent)] text-[var(--color-brand-navy)] font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(218,165,32,0.3)] text-center">
            See the Telemetry Live
          </Link>
          <Link href="/" className="px-10 py-4 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 transition-colors text-center border border-white/10">
            Return to Hub
          </Link>
        </div>

      </div>
    </div>
  );
}
