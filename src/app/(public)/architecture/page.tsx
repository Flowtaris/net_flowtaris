import Image from 'next/image';
import Link from 'next/link';

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-navy)] text-[var(--color-brand-slate)] pt-24 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col">
        
        {/* Header (RFC Style) */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-3xl md:text-5xl font-mono font-bold tracking-tight text-white mb-6">
            Architecture & Infrastructure
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono opacity-70">
            <div>
              <span className="block text-gray-500 mb-1">Status</span>
              <span className="text-emerald-400">Production</span>
            </div>
            <div>
              <span className="block text-gray-500 mb-1">Target SLA</span>
              <span className="text-white">99.99%</span>
            </div>
            <div>
              <span className="block text-gray-500 mb-1">Topology</span>
              <span className="text-white">Event-Driven / Pub-Sub</span>
            </div>
            <div>
              <span className="block text-gray-500 mb-1">Last Updated</span>
              <span className="text-white">2024.Q3</span>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-slate max-w-none font-mono text-sm leading-relaxed mb-16 space-y-8">
          
          <p>
            Flowtaris operates on a decoupled, event-driven topology. The objective is to eliminate synchronous, point-to-point connections between core enterprise systems (e.g., SAP, NetSuite, Salesforce) to prevent cascading failures during localized outages.
          </p>

          {/* Diagram */}
          <div className="w-full bg-[#0a0f18] border border-white/10 rounded-xl p-2 my-12">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden">
              <Image 
                src="/architecture.jpg" 
                alt="Architecture Topology" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center text-[10px] text-gray-500 mt-2">Fig 1. High-level asynchronous message flow.</div>
          </div>

          <h3 className="text-lg text-white font-bold border-b border-white/5 pb-2">1. Core Message Broker</h3>
          <p>
            We utilize distributed message brokers (Kafka or Azure Service Bus) as the central nervous system. Instead of System A directly calling System B via REST, System A publishes a domain event (e.g., <code>InvoiceCreated</code>). This guarantees delivery. If the receiving ERP is undergoing maintenance, the broker retains the payload in a persistent queue. Upon restoration, the consumer resumes processing from its last committed offset.
          </p>

          <h3 className="text-lg text-white font-bold border-b border-white/5 pb-2">2. Observability & Tracing Sidecars</h3>
          <p>
            Observability is not injected into the business logic. We deploy OpenTelemetry sidecars that run alongside the integration workloads. These sidecars intercept ingress/egress traffic to compute schema diffs and measure execution latency. The telemetry is shipped out-of-band to our central data lake via UDP or gRPC, ensuring the primary execution thread is never blocked by logging overhead.
          </p>

          <h3 className="text-lg text-white font-bold border-b border-white/5 pb-2">3. Idempotency & Replayability</h3>
          <p>
            Network partitions happen. To handle retries safely, every consumer in our architecture is strictly idempotent. Payloads are tagged with a unique, cryptographically generated `Idempotency-Key` and stored in a state table (Redis/DynamoDB) for 24 hours. If a webhook is fired twice due to a network timeout, the database rejects the duplicate transaction. This is critical for preventing double-billing in financial integrations.
          </p>

          <h3 className="text-lg text-white font-bold border-b border-white/5 pb-2">4. Security Posture</h3>
          <p>
            All data in transit is encrypted using TLS 1.3. For data at rest within the broker, we rely on AES-256 encryption. We do not store static credentials in application configurations. Services authenticate using short-lived, rotation-based tokens via AWS IAM or HashiCorp Vault. Client payloads can be encrypted using Customer-Managed Keys (CMK), ensuring that even our infrastructure cannot decrypt sensitive payload fields without explicit permission.
          </p>
        </div>

        {/* CTA */}
        <div className="flex gap-4 pt-8 border-t border-white/10 font-mono text-xs">
          <Link href="/integration-observatory" className="px-6 py-3 bg-white text-black font-bold rounded-md hover:bg-gray-200 transition-colors">
            $ view_telemetry
          </Link>
          <Link href="/" className="px-6 py-3 bg-transparent text-white font-bold rounded-md hover:bg-white/5 border border-white/20 transition-colors">
            cd ..
          </Link>
        </div>

      </div>
    </div>
  );
}
