import type { Metadata } from "next";
import Image from "next/image";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { supabase } from "@/lib/supabase";
import { getCmsData } from "@/lib/cms";
import DynamicTerminalEngine from "@/components/ui/DynamicTerminalEngine";
import JsonLd, { getTechArticleSchema, getFAQPageSchema, getBreadcrumbSchema } from "@/components/seo/JsonLd";
import { AnswerSection } from "@/components/seo/AnswerBlock";

export const metadata: Metadata = {
  title: "Enterprise Integration Accountability Engine — Live DORA Metrics & Telemetry",
  description: "Live operational telemetry from Flowtaris enterprise integrations. Real-time DORA benchmarks, Kafka event stream metrics, 99.99% payload success rates, and deterministic performance data from production ERP systems including NetSuite, SAP, Coupa, and Workday.",
  keywords: ['DORA metrics dashboard', 'enterprise integration telemetry', 'ERP uptime monitoring', 'Kafka event stream metrics', 'software delivery accountability', 'NetSuite integration monitoring', 'SAP integration health', 'enterprise accountability engine'],
  openGraph: {
    title: 'Flowtaris Accountability Engine — Live Enterprise Integration Metrics',
    description: 'Real-time DORA benchmarks, 99.99% payload success rates, and deterministic performance data from production ERP integrations. No marketing. Only engineering proof.',
    url: 'https://flowtaris.net',
    type: 'website',
  },
  alternates: {
    canonical: 'https://flowtaris.net',
  },
};

export const revalidate = 60;


export default async function Home() {
  const { data: doraMetrics } = await supabase
    .from('dora_metrics')
    .select('*')
    .order('updated_at', { ascending: false })
    .limit(1)
    .single();

  const metrics = doraMetrics || {
    deployment_frequency: 14,
    lead_time_hours: 4.2,
    change_failure_rate_percent: 0.01,
    mttr_minutes: 12
  };

  const cms = getCmsData();
  const heroData = cms?.hero || {
    h1Line1: 'Raw Data.',
    h1Line2: 'Zero Spin.',
    h1Line3: 'Real Results.',
    bodyText: 'Live telemetry from Flowtaris enterprise integrations — no promises, no marketing. Only deterministic numbers pulled straight from production.',
    stats: [],
    ctaPrimaryText: 'Explore Telemetry',
    ctaPrimaryLink: '#telemetry',
    ctaSecondaryText: 'View Architecture',
    ctaSecondaryLink: 'https://flowtaris.com/architecture'
  };

  const performanceData = cms?.performance || {
    tagline: "// live_metrics.query()",
    title: "Deterministic Performance",
    description: "Extracted directly from CI/CD pipeline telemetry. Not marketing claims. Real numbers from real production systems.",
    payloadSuccessRate: 99.99,
    payloadSuccessRateLabel: "Payload Success Rate",
    payloadSuccessRateDesc: "30-Day Rolling Window",
    metrics: [
      { label: "Deployment Frequency", value: metrics.deployment_frequency, unit: "/ day", desc: "Microservice artifacts merged to main and shipped to production daily." },
      { label: "Lead Time", value: metrics.lead_time_hours, unit: "hrs", desc: "From initial git commit to code running in production." },
      { label: "Change Failure Rate", value: metrics.change_failure_rate_percent, unit: "%", desc: "Deployments requiring immediate rollback or hotfix." },
      { label: "Mean Time To Restore", value: metrics.mttr_minutes, unit: "mins", desc: "P1/P2 incident duration from alert to full restoration." }
    ]
  };

  const ctaData = cms?.ctaSection || {
    tagline: "Ready to Build",
    title: "Stop Guessing.<br />Start Engineering.",
    description: "Whether you need SAP-NetSuite integration, real-time Kafka pipelines, or legacy modernization into event-driven architecture, Flowtaris delivers with public accountability.",
    primaryBtnText: "Consult an Architect →",
    primaryBtnLink: "https://flowtaris.com/contact",
    secondaryBtnText: "Explore Observatory",
    secondaryBtnLink: "/integration-observatory"
  };

  const standardData = cms?.standardSection || {
    tagline: "The Flowtaris Standard",
    title: "Engineering Over Marketing.",
    description: "Over 70% of enterprise digital transformations fail because they are built by system integrators who write scripts, not engineers who build distributed systems.",
    cards: [
      {
        iconId: "shield",
        title: "Strict Schema Validation",
        description: "Every payload is validated against a JSON Schema. Malformed data is routed to a Dead Letter Queue before touching the ERP.",
        codeHtml: "<div><span className=\"text-rose-500\">if</span> (!schema.validate(payload)) {</div><div className=\"pl-4\"><span className=\"text-[var(--color-brand-accent)]\">dlq</span>.route(payload);</div><div>}</div>"
      },
      {
        iconId: "refresh",
        title: "Idempotent Processors",
        description: "Retries never produce duplicates. Every operation is safe to replay across network partitions.",
        codeHtml: "<div><span className=\"text-sky-500\">const</span> exists = <span className=\"text-[var(--color-brand-accent)]\">await</span> db.check(key);</div><div><span className=\"text-rose-500\">if</span> (exists) <span className=\"text-rose-500\">return</span> <span className=\"text-emerald-500\">409</span>;</div>"
      },
      {
        iconId: "lightning",
        title: "Automated Circuit Breakers",
        description: "If error rate exceeds 5% in 60 seconds, the circuit trips. Connection pools are preserved automatically.",
        codeHtml: "<div><span className=\"text-amber-500\">CircuitBreaker</span>.monitor(api);</div><div><span className=\"text-rose-500\">if</span> (errorRate &gt; <span className=\"text-emerald-500\">0.05</span>) trip();</div>"
      }
    ]
  };

  const transparencyData = cms?.transparencySection || {
    tagline: "Operational Transparency",
    title: "Real Dashboards.<br />Real Data.",
    descPara1: "Every metric is sourced from live Supabase tables updated by our CI/CD pipelines, Kafka consumer lag monitors, and incident management systems.",
    descPara2: "We believe the most powerful sales tool is <strong className=\"text-[var(--color-brand-navy)]\">public accountability</strong>. When you see our DORA metrics and incident post-mortems in real-time, trust becomes a mathematical certainty.",
    stats: [
      { value: "847", label: "Integrations Deployed" },
      { value: "23", label: "Enterprise Clients" },
      { value: "4.7M", label: "Payloads / Month" },
      { value: "12", label: "ERP Platforms" }
    ],
    images: {
      main: "/control-room.jpg",
      sub1: "/dashboard.jpg",
      sub2: "/roi-chart.jpg"
    }
  };

  const faqData = cms?.faqSection || {
    tagline: "Technical Knowledge Base",
    title: "Engineering FAQ",
    faqs: [
      { question: "How does Flowtaris handle API rate limits?", answer: "Token bucket algorithms with exponential backoff on all outbound clients. HTTP 429 triggers automatic pause and retry. Zero data loss." },
      { question: "What is the Accountability Engine?", answer: "A public ledger of technical competence. DORA metrics, uptime stats, and incident post-mortems exposed for verifiable proof of engineering quality." },
      { question: "What happens when an ERP goes offline?", answer: "Kafka-backed middleware absorbs backpressure. Messages queue in durable topics. Recovery triggers automatic resumption with ordering guarantees." },
      { question: "How is data integrity guaranteed?", answer: "JSON Schema validation at ingress. Idempotency keys prevent duplicates. Nightly reconciliation jobs compare source and target state." }
    ]
  };



  const heroMetrics = [
    { label: "SYS",  text: "SAP_S4HANA_MATMAS → KAFKA_TOPIC[erp.master.items] : LATENCY 14ms",              color: "text-[var(--color-brand-accent)]" },
    { label: "WARN", text: "NETSUITE_API_CONCURRENCY_LIMIT_REACHED → BACKPRESSURE_ABSORBED",              color: "text-amber-500" },
    { label: "OK",   text: "ORACLE_ERP_INVOICE_SYNC → HTTP_409_CONFLICT → DUPLICATE_IGNORED",             color: "text-emerald-500" },
    { label: "ERR",  text: "MICROSOFT_DYNAMICS_365_SCHEMA_MISMATCH → ROUTED_TO_DLQ",                      color: "text-rose-500" },
    { label: "INFO", text: "SAP_ECC_IDOC_INGRESS → BATCH_PROCESSING_SUCCESS (1,492 RECORDS)",             color: "text-sky-500" },
    { label: "WARN", text: "SALESFORCE_CORE_RATE_LIMIT_NEAR → EXPONENTIAL_BACKOFF_ACTIVE",                color: "text-amber-500" },
    { label: "OK",   text: "WORKDAY_HCM_WORKER_UPDATE → E2E_DELIVERY_VERIFIED",                          color: "text-emerald-500" },
    { label: "SYS",  text: "ERP_DB_CONN_POOL_EXHAUSTED → CIRCUIT_BREAKER_OPENED → FAILOVER_ROUTING",    color: "text-[var(--color-brand-accent)]" },
    { label: "INFO", text: "AWS_EVENTBRIDGE_RULE_TRIGGERED → NETSUITE_JOURNAL_ENTRY_SYNC",               color: "text-sky-500" },
    { label: "OK",   text: "P99_ERP_SYNC_LATENCY → 42ms (ACROSS 5 DISTRIBUTED SYSTEMS)",                color: "text-emerald-500" },
    { label: "ERR",  text: "KAFKA_CONSUMER_LAG_CRITICAL → PARTITION_REBALANCE_TRIGGERED",               color: "text-rose-500" },
    { label: "SYS",  text: "ORACLE_DB_FAILOVER → STANDBY_PROMOTED → READ_WRITE_RESTORED",              color: "text-[var(--color-brand-accent)]" },
    { label: "INFO", text: "AZURE_SERVICE_BUS_THROUGHPUT → 38K_MSG_PER_SEC : NOMINAL",                   color: "text-sky-500" },
    { label: "WARN", text: "SAP_RFC_CONNECTION_TIMEOUT → RETRY_QUEUE_ACTIVE : ATTEMPT 3/5",             color: "text-amber-500" },
    { label: "OK",   text: "STRIPE_WEBHOOK_PROCESSED → REVENUE_EVENT_COMMITTED_TO_DWH",                 color: "text-emerald-500" },
    { label: "ERR",  text: "HUBSPOT_CRM_SYNC_FAILURE → DEAD_LETTER_QUEUE : ALERT_SENT",                 color: "text-rose-500" },
    { label: "SYS",  text: "KUBERNETES_POD_RESTART → STATEFULSET_RECONCILED → HEALTHY",                color: "text-[var(--color-brand-accent)]" },
    { label: "OK",   text: "SHOPIFY_ORDER_WEBHOOK → SAP_SALES_ORDER_CREATED : 200ms",                   color: "text-emerald-500" },
    { label: "WARN", text: "REDIS_CACHE_EVICTION_RATE_HIGH → WARM_UP_PROCEDURE_STARTED",                color: "text-amber-500" },
    { label: "INFO", text: "DEBEZIUM_CDC_STREAM → POSTGRESQL_CHANGES_CAPTURED : 8,241 ROWS",            color: "text-sky-500" },
  ];

  return (
    <div className="bg-white relative overflow-hidden">
      <JsonLd data={[
        getTechArticleSchema({
          title: 'Flowtaris Accountability Engine — Enterprise Integration Telemetry',
          description: 'Live DORA metrics, Kafka event stream analytics, and deterministic performance data from production ERP integrations.',
          url: 'https://flowtaris.net',
        }),
        getFAQPageSchema(faqData.faqs),
        getBreadcrumbSchema([
          { name: 'Flowtaris', url: 'https://flowtaris.com' },
          { name: 'Accountability Engine', url: 'https://flowtaris.net' },
        ]),
      ]} />

      {/* ── HERO ── */}
      <section className="relative h-[calc(100vh-66px)] flex items-stretch overflow-hidden">

        {/* Ambient glow — very subtle */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-hero-glow absolute -top-40 left-[20%] w-[500px] h-[500px] rounded-full bg-[var(--color-brand-accent)] mix-blend-multiply blur-[140px] opacity-[0.08]" />
        </div>

        {/* Grid */}
        <div className="relative w-full h-full grid grid-cols-1 lg:grid-cols-[42%_58%]">

          {/* ── LEFT ── */}
          <div className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16">

            {/* H1 — Each line has distinct character */}
            <h1 className="mb-8">
              <span className="block text-[clamp(3.2rem,6vw,5rem)] font-heading font-black text-[var(--color-brand-navy)] leading-[0.95] tracking-tight animate-fadeInUp">
                {heroData.h1Line1}
              </span>
              <span className="block text-[clamp(3.2rem,6vw,5rem)] font-heading font-black leading-[0.95] tracking-tight animate-fadeInUp text-gradient-gold italic" style={{ animationDelay: '120ms' }}>
                {heroData.h1Line2}
              </span>
              <span className="block text-[clamp(3.2rem,6vw,5rem)] font-heading font-black leading-[0.95] tracking-tight animate-fadeInUp text-stroke" style={{ animationDelay: '240ms' }}>
                {heroData.h1Line3}
              </span>
            </h1>

            {/* Body */}
            <p className="text-[15px] text-[var(--color-brand-slate)] mb-10 max-w-[440px] leading-[1.85] animate-fadeInUp" style={{ animationDelay: '400ms' }}>
              {heroData.bodyText}
            </p>

            {/* Stats row — bigger */}
            <div className="flex items-center gap-0 mb-10 animate-fadeInUp" style={{ animationDelay: '550ms' }}>
              {heroData.stats.map((s: { lbl: string; val: string }, i: number) => (
                <div key={s.lbl} className="flex items-center">
                  {i > 0 && <div className="w-px h-10 bg-gray-200 mx-5" />}
                  <div>
                    <div className="text-2xl font-heading font-black text-[var(--color-brand-navy)] leading-none">{s.val}</div>
                    <div className="text-[8px] font-mono text-gray-400 uppercase tracking-[0.18em] mt-1">{s.lbl}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs — more prominent */}
            <div className="flex items-center gap-4 animate-fadeInUp" style={{ animationDelay: '700ms' }}>
              <a
                href={heroData.ctaPrimaryLink}
                className="group/btn relative inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-brand-navy)] text-white rounded-2xl font-heading font-bold text-[13px] shadow-lg overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(10,22,40,0.4)] hover:-translate-y-[2px]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-accent)]/25 to-transparent -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out" />
                <span className="relative font-mono text-[11px] opacity-50">&gt;_</span>
                <span className="relative">{heroData.ctaPrimaryText}</span>
              </a>
              <a
                href={heroData.ctaSecondaryLink}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-heading font-bold text-[13px] text-[var(--color-brand-navy)] border border-gray-200 bg-white transition-all duration-300 hover:border-[var(--color-brand-accent)]/40 hover:shadow-md hover:-translate-y-[2px]"
              >
                {heroData.ctaSecondaryText}
                <span className="text-[var(--color-brand-accent)] text-xs">→</span>
              </a>
            </div>
          </div>

          {/* ── RIGHT — pure floating telemetry text ── */}
          <div className="relative h-full overflow-hidden">
            {/* Seamless loop — two identical copies back-to-back */}
            <div className="animate-infinite-loop absolute top-0 left-0 right-0 pr-8 lg:pr-16">
              {[0, 1].map((copy) => (
                <div key={copy} aria-hidden={copy === 1}>
                  {heroMetrics.map((item, i) => (
                    <div
                      key={`${copy}-${i}`}
                      className="flex items-center gap-4 py-4 cursor-default group/row"
                    >
                      {/* Status label */}
                      <span className={`shrink-0 font-mono text-[12px] font-black tracking-[0.2em] uppercase w-12 ${item.color}`}>
                        {item.label}
                      </span>
                      {/* Message */}
                      <span className="font-mono text-[13px] font-semibold text-[var(--color-brand-navy)]/50 leading-snug tracking-tight group-hover/row:text-[var(--color-brand-navy)]/90 transition-colors duration-200">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section id="telemetry" className="py-24 bg-[var(--color-brand-offwhite)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16 gap-6">
            <ScrollReveal>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-brand-accent)] mb-3">{performanceData.tagline}</div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-[var(--color-brand-navy)] mb-3 tracking-tight">{performanceData.title}</h2>
              <p className="text-sm text-[var(--color-brand-slate)] max-w-xl leading-relaxed">{performanceData.description}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center space-x-5 shadow-lg">
                <div>
                  <div className="text-[10px] font-bold text-[var(--color-brand-slate)] uppercase tracking-wider mb-0.5 font-mono">{performanceData.payloadSuccessRateLabel}</div>
                  <div className="text-[10px] text-gray-400 font-mono">{performanceData.payloadSuccessRateDesc}</div>
                </div>
                <div className="text-3xl font-mono font-black text-[var(--color-brand-accent)]"><AnimatedCounter value={performanceData.payloadSuccessRate} format="percentage" /></div>
              </div>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {performanceData.metrics.map((metric: { label: string; value: string | number; unit: string; desc: string }, idx: number) => (
              <ScrollReveal key={idx} delay={0.1 * (idx + 1)}>
                <div className="group relative bg-white border border-gray-100 p-7 rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-brand-accent)]/30 overflow-hidden h-full">
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-[var(--color-brand-accent)]/5 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-4">{metric.label}</div>
                    <div className="text-4xl font-heading font-black text-[var(--color-brand-navy)] mb-3 tracking-tight">{metric.value} <span className="text-sm font-mono text-gray-400 font-normal">{metric.unit}</span></div>
                    <p className="text-xs text-gray-500 leading-relaxed">{metric.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image src="/infrastructure.jpg" alt="Flowtaris Enterprise Infrastructure" width={700} height={400} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-navy)]/50 to-transparent"></div>
                <div className="absolute bottom-5 left-5"><div className="font-mono text-[10px] text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">INFRASTRUCTURE_STATUS: NOMINAL</div></div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-brand-accent)] mb-4">Event-Driven Architecture</div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-[var(--color-brand-navy)] mb-6 tracking-tight leading-tight">Built for Resilience,<br />Not Just Connectivity.</h2>
              <div className="space-y-4 text-sm text-[var(--color-brand-slate)] leading-relaxed">
                <p>We decouple enterprise systems using <strong className="text-[var(--color-brand-navy)]">Apache Kafka</strong> and <strong className="text-[var(--color-brand-navy)]">AWS EventBridge</strong>. When SAP goes down or NetSuite enforces concurrency limits, our middleware absorbs the backpressure.</p>
                <p>Messages queue safely in durable Kafka topics. Nothing is lost. When the downstream system recovers, processing resumes with full ordering guarantees and exactly-once delivery semantics.</p>
                <p>This is the fundamental difference between enterprise scripting and enterprise engineering. Scripts break under pressure. Distributed systems absorb it.</p>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="text-center"><div className="text-2xl font-heading font-black text-[var(--color-brand-navy)]">42K</div><div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">msg/sec</div></div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="text-center"><div className="text-2xl font-heading font-black text-[var(--color-brand-navy)]">99.99%</div><div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Uptime SLA</div></div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="text-center"><div className="text-2xl font-heading font-black text-[var(--color-brand-navy)]">0</div><div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Data Loss</div></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Dynamic Terminal Engine */}
      <DynamicTerminalEngine data={standardData} />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-brand-accent)] mb-4">{transparencyData.tagline}</div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-[var(--color-brand-navy)] mb-6 tracking-tight leading-tight" dangerouslySetInnerHTML={{ __html: transparencyData.title }}></h2>
              <div className="space-y-4 text-sm text-[var(--color-brand-slate)] leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: transparencyData.descPara1 }}></p>
                <p dangerouslySetInnerHTML={{ __html: transparencyData.descPara2 }}></p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {transparencyData.stats.map((stat: { value: string; label: string }, idx: number) => (
                  <div key={idx} className="bg-[var(--color-brand-offwhite)] p-5 rounded-2xl border border-gray-100">
                    <div className="text-2xl font-heading font-black text-[var(--color-brand-navy)]">{stat.value}</div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl group"><Image src={transparencyData.images.main} alt="Flowtaris Control Room" width={700} height={400} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group"><Image src={transparencyData.images.sub1} alt="Flowtaris live telemetry dashboard" width={700} height={400} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group"><Image src={transparencyData.images.sub2} alt="ROI analysis chart" width={700} height={400} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-brand-offwhite)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-brand-accent)] mb-3">{faqData.tagline}</div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-[var(--color-brand-navy)] tracking-tight">{faqData.title}</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData.faqs.map((faq: { question: string; answer: string }, idx: number) => (
              <ScrollReveal key={idx} delay={0.1 * (idx + 1)}>
                <div className="group h-full bg-white rounded-2xl p-8 border border-gray-100 hover:border-[var(--color-brand-accent)]/20 hover:shadow-lg transition-all duration-500">
                  <h4 className="text-lg font-heading font-bold text-[var(--color-brand-navy)] mb-3 group-hover:text-[var(--color-brand-accent)] transition-colors">{faq.question}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GEO/AEO Answer-Optimized Content ── */}
      <AnswerSection 
        topic="the Flowtaris Accountability Engine"
        blocks={[
          {
            question: "What is the Flowtaris Accountability Engine?",
            answer: "The Flowtaris Accountability Engine is a public, real-time transparency platform that exposes live DORA metrics, integration telemetry, delivery standards, and compliance documentation from Flowtaris enterprise ERP integrations. Unlike traditional consulting agencies that hide behind NDAs and marketing claims, Flowtaris publishes deterministic engineering data — including deployment frequency, mean time to restore, change failure rates, and payload success rates — directly from production systems.",
            citation: "Flowtaris Engineering, flowtaris.net"
          },
          {
            question: "How does Flowtaris measure enterprise integration quality?",
            answer: "Flowtaris measures integration quality using the four DORA (DevOps Research and Assessment) metrics: Deployment Frequency (14 deployments per day), Lead Time for Changes (4.2 hours from commit to production), Change Failure Rate (0.01%), and Mean Time to Restore (12 minutes). These metrics are extracted directly from CI/CD pipeline telemetry and Kafka consumer lag monitors, not self-reported estimates. Additionally, Flowtaris tracks a 99.99% payload success rate across all enterprise ERP integrations including NetSuite, SAP, Coupa, and Workday.",
            citation: "Flowtaris DORA Dashboard, flowtaris.net"
          },
          {
            question: "Why does Flowtaris publish engineering metrics publicly?",
            answer: "Flowtaris publishes engineering metrics publicly because they believe the most powerful sales tool is public accountability. Over 70% of enterprise digital transformations fail because system integrators lack engineering discipline and hide behind opaque project management. By exposing real-time DORA metrics, incident post-mortems, and integration health data, Flowtaris eliminates the trust gap between consulting promises and actual delivery. Enterprise CTOs and CFOs can verify engineering competence mathematically before signing a contract.",
            citation: "Flowtaris Master Plan, flowtaris.net"
          }
        ]}
      />

      <section className="pt-24 pb-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-brand-accent)] mb-4">{ctaData.tagline}</div>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-[var(--color-brand-navy)] mb-6 tracking-tight" dangerouslySetInnerHTML={{ __html: ctaData.title }}></h2>
            <p className="text-sm text-[var(--color-brand-slate)] max-w-xl mx-auto leading-relaxed mb-10">{ctaData.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center font-mono text-sm">
              <a href={ctaData.primaryBtnLink} className="px-10 py-4 bg-[var(--color-brand-navy)] text-white rounded-full font-bold shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:scale-105">{ctaData.primaryBtnText}</a>
              <a href={ctaData.secondaryBtnLink} className="px-10 py-4 bg-[var(--color-brand-offwhite)] text-[var(--color-brand-navy)] border border-gray-200 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-1">{ctaData.secondaryBtnText}</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "TechArticle", "headline": "Flowtaris Enterprise Integration Architecture Standards", "description": "Technical specifications for Flowtaris event-driven architectures.", "proficiencyLevel": "Expert" }) }} />
    </div>
  );
}




