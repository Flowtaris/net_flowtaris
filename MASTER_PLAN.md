# FLOWTARIS ECOSYSTEM MASTER PLAN — FINAL EXECUTION DOCUMENT

> **Document Purpose:** This is the single source of truth for the entire Flowtaris digital ecosystem. Any developer, designer, strategist, or AI model should be able to read this document alone and execute every aspect of the plan without additional context.

> **Brand Tagline:** *"The Science of Business Flow"*

> **Mission:** Make `flowtaris.com` the undisputed #1 brand in Enterprise ERP & Finance Automation globally, using three support domains as force multipliers that never compete with, but always strengthen, the core.

---

## ⚠️ CRITICAL: DOMAIN STATUS — READ FIRST

| Domain | Status | Codebase Location | What Needs To Be Done |
|--------|--------|-------------------|----------------------|
| **flowtaris.com** | ✅ **FULLY BUILT & LIVE** | `d:\flowtaris` (Next.js 14, Supabase, Sora + Inter fonts) | **Minor updates only:** Add ecosystem section to homepage, add `sameAs` Schema.org, add cross-links in footer |
| **flowtaris.ai** | ✅ **FULLY BUILT** | `d:\flowtaris ai` (Turborepo monorepo, Next.js 14, Sanity CMS) | **Minor updates only:** Add ecosystem footer links, verify Schema.org markup |
| **flowtaris.co** | ✅ **FULLY BUILT** | `d:\Co_Flowtaris` (Next.js, Supabase, Master Admin Panel) | **Minor updates only:** Add ecosystem footer links, add CTAs linking to .com |
| **flowtaris.net** | 🔴 **DOES NOT EXIST — THIS IS THE NEW BUILD** | No codebase exists yet | **Full build from scratch.** This is the primary development work. |

> [!CAUTION]
> **Do NOT rebuild or restructure .com, .ai, or .co.** They are production systems. The only changes to existing domains are small additions (footer links, Schema.org tags, a homepage section on .com). ALL major development effort goes into building `flowtaris.net` from scratch.

---

## TABLE OF CONTENTS

1. [Brand Architecture — The Four Pillars](#1-brand-architecture)
2. [What flowtaris.com Already Has](#2-what-flowtariscom-already-has)
3. [The Buyer Journey — How All 4 Domains Work Together](#3-the-buyer-journey)
4. [Domain-by-Domain: Pages, Content, Keywords, UI](#4-domain-by-domain-breakdown)
5. [The Cross-Linking Architecture](#5-the-cross-linking-architecture)
6. [SEO Domination Strategy — Traditional Search](#6-seo-domination-strategy)
7. [AEO/GEO Strategy — AI Search Engines](#7-aeogeo-strategy)
8. [Social, PR & Backlink Strategy](#8-social-pr--backlink-strategy)
9. [UI/UX Design Direction — Unique & Animated](#9-uiux-design-direction)
10. [The Differentiation Matrix — Why Nobody Can Copy This](#10-the-differentiation-matrix)
11. [Authority Protection Rules — Non-Negotiable](#11-authority-protection-rules)
12. [Execution Roadmap — Phased Delivery](#12-execution-roadmap)
13. [Success Metrics & Verification](#13-success-metrics)

---

## 1. BRAND ARCHITECTURE

### The Hierarchy (Non-Negotiable)

```
                    ┌────────────────────────────────┐
                    │       FLOWTARIS (Parent)        
                    │  "The Science of Business Flow" 
                    └───────────────┬────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
              ┌─────▼─────┐  ┌─────▼─────┐  ┌─────▼─────┐
              │  .co       │  │  .ai       │  │  .net      │
              │ THE BRAIN  │  │ THE SPEAR  │  │ THE PROOF  │
              │            │  │            │  │            │
              │ Decisions  │  │ AI Product │  │ Metrics &  │
              │ Principles │  │ Platforms  │  │ Standards  │
              │ Culture    │  │ ROI Tools  │  │ Benchmarks │
              └─────┬──────┘  └─────┬──────┘  └─────┬──────┘
                    │               │               │
                    └───────────────┼───────────────┘
                                    │
                                    ▼
                    ┌────────────────────────────────┐
                    │        flowtaris.com            │
                    │        THE THRONE               │
                    │                                │
                    │  Services · Industries          │
                    │  Integrations · Case Studies    │
                    │  Contact · Hire · Convert       │
                    └────────────────────────────────┘
```

### The Rule

**Every single piece of content, every link, every page across `.co`, `.ai`, and `.net` exists for ONE purpose: to make someone hire Flowtaris through `flowtaris.com`.** If a page doesn't ultimately lead to `.com`, it should not exist.

---

## 2. WHAT FLOWTARIS.COM ALREADY HAS

| Section | Pages | SEO Keywords Targeted |
|---------|-------|-----------------------|
| **Homepage** | Hero, Services Stack, Why Choose Us, Case Study Highlights, Integrations, How We Work, Finance CTA | "Enterprise ERP consulting," "Flowtaris" |
| **Services** | Dynamic CMS pages for each service | "NetSuite consulting," "Coupa implementation," "Workday integration" |
| **Industries** | Technology & SaaS, Healthcare, Manufacturing, Financial Services, Professional Services | "ERP for healthcare," "NetSuite for SaaS companies" |
| **Integrations** | Contract Lifecycle, HCM Sync, Identity Provisioning, iDoc Management, Procurement-to-GL, SaaS Governance | "NetSuite Coupa integration," "SAP iDoc management" |
| **Case Studies** | Dynamic with slugs, client stories with metrics | "ERP implementation case study" |
| **Blog + Insights** | Thought leadership articles | Long-tail business keywords |
| **Resources** | Downloadable guides | Lead capture |
| **About** | Company story, team, methodology, CMS-driven topics | "About Flowtaris" |
| **Contact** | Lead capture form | "Hire ERP consultants" |

### What `.com` MUST Own (Keywords That Never Go To Other Domains)
- "Flowtaris" (brand)
- "Enterprise ERP consulting"
- "Enterprise integration services"
- "Hire NetSuite consultants"
- "Coupa implementation partner"
- "SAP integration services"
- "Workday integration consulting"
- All industry-specific service queries ("Healthcare ERP consulting")
- All contact/hire intent queries

---

## 3. THE BUYER JOURNEY — HOW ALL 4 DOMAINS WORK TOGETHER

### Stage-by-Stage Mapping

| # | Buyer Stage | What They Search | Who Ranks | What They See | Where They Go Next |
|---|------------|-----------------|-----------|---------------|-------------------|
| 1 | **Unaware** | "Why do ERP integrations fail" | **.co** | A Decision Log about a real integration crisis | Link: "See how we prevent this → flowtaris.com/services" |
| 2 | **Problem Aware** | "Cost of manual invoice processing" | **.ai** | Cost of Inaction calculator | Link: "Automate this → flowtaris.com/contact" |
| 3 | **Solution Aware** | "AI automation for NetSuite AP" | **.ai** | GenAI Document Intelligence capability page | Link: "Deploy this → flowtaris.com/contact" |
| 4 | **Vendor Comparing** | "Best ERP consulting company metrics" | **.net** | Live DORA dashboard, 99.97% uptime | Link: "Hire this team → flowtaris.com" |
| 5 | **Evaluating Flowtaris** | "Flowtaris ERP consulting" | **.com** | Services, Case Studies, About | Contact form submission |
| 6 | **Final Validation** | "Flowtaris engineering standards" | **.net** | Delivery Standards, Incident Reports | Confidence confirmed → signs contract |

**Result:** Flowtaris appears at EVERY stage. The buyer encounters the brand 4-5 times before ever filling out a form. By the time they contact `.com`, they're already sold.

---

## 4. DOMAIN-BY-DOMAIN BREAKDOWN

---

### 4A. FLOWTARIS.CO — "THE BRAIN"

**One-line purpose:** Show HOW Flowtaris thinks. Build intellectual trust.

#### Pages

| Page | Route | Content Summary | Primary Keyword Target |
|------|-------|----------------|----------------------|
| **Home** | `/` | Hero: "We don't just deliver systems. We make the decisions behind them visible." + Three Systems of Trust (Judgment, Evidence, Leverage) + Featured Decision Log + PDF Resources | "Engineering decision transparency" |
| **Judgment** | `/judgment` | Full archive of Decision Logs with search, filter by tag/author/year. Each log: context, choice, alternatives rejected, outcome, principle extracted. | "Software decision logs," "ERP crisis management" |
| **Judgment Detail** | `/judgment/[slug]` | Full decision story: The NetSuite API Crisis, Why We Moved to Outcome-Based Pricing, Why We Hired a Principal Before We Needed One | Long-tail per decision topic |
| **Principles** | `/principles` | Principles extracted from decisions, filterable by category and year. Timeline showing evolution. Relationship diagram: Decision → Outcome → Principle → Future Decisions | "Engineering principles ERP" |
| **Evidence** | `/evidence` | Governance frameworks, security posture, operational evidence | "Enterprise governance consulting" |
| **Leverage** | `/leverage` | Partnerships, alliances, specialist network, scaling model | "Enterprise technology alliances" |
| **Contact** | `/contact` | Redirects to flowtaris.com/contact | — |

#### Content Voice
- Philosophical, reflective, raw
- First-person ("We chose… We rejected… Here's what happened.")
- No sales language. Pure thought leadership.

#### CTA on Every Page
> *"This is how Flowtaris thinks. See what we build → [flowtaris.com](https://flowtaris.com)"*

---

### 4B. FLOWTARIS.AI — "THE SPEAR"

**One-line purpose:** Show WHAT Flowtaris builds with AI. Generate qualified leads.

#### Pages

| Page | Route | Content Summary | Primary Keyword Target |
|------|-------|----------------|----------------------|
| **Home** | `/` | Cinematic hero, trust signals (20+ clients, 99.9% accuracy), Intelligence Suite preview, Capabilities cards, Cost of Inaction CTA | "Enterprise AI automation finance" |
| **Capabilities Index** | `/capabilities` | 6 capability cards with scroll animations | "AI automation capabilities ERP" |
| **GenAI Document Intelligence** | `/capabilities/genai-document-intelligence` | Invoice/PO extraction, enterprise accuracy, platform compatibility | "AI invoice processing NetSuite" |
| **Autonomous Workflow Engine** | `/capabilities/autonomous-workflow-engine` | End-to-end AP/AR automation, exception routing, ERP posting | "Autonomous AP automation" |
| **Predictive Analytics** | `/capabilities/predictive-analytics` | Cash flow forecasting, anomaly detection, spend analytics | "AI predictive analytics finance" |
| **Conversational ERP** | `/capabilities/conversational-erp` | Natural language ERP queries via Slack/web | "Conversational AI ERP NetSuite" |
| **Integration Monitoring** | `/capabilities/integration-health-monitoring` | Self-healing integrations, drift detection | "Self-healing ERP integrations" |
| **AI Governance** | `/capabilities/ai-governance-compliance` | Audit trails, bias monitoring, explainability | "AI governance enterprise compliance" |
| **NetSuite Platform** | `/platforms/netsuite` | Entity page: overview, AI capabilities for NetSuite, integrations, FAQ | "NetSuite AI automation" |
| **Coupa Platform** | `/platforms/coupa` | Entity page for Coupa | "Coupa AI procurement" |
| **SAP Platform** | `/platforms/sap` | Entity page for SAP | "SAP AI automation" |
| **Workday Platform** | `/platforms/workday` | Entity page for Workday | "Workday AI integration" |
| **Case Studies** | `/case-studies` | Grid with animated metric highlights | "AI automation case study finance" |
| **Case Study Detail** | `/case-studies/[slug]` | Challenge → Solution → Results with animated data viz | Per-client long-tail |
| **ROI Calculator** | `/roi-calculator` | Interactive tool: input volume → projected savings | "AP automation ROI calculator" |
| **Cost of Inaction** | `/cost-of-inaction` | Risk calculator: what manual processes cost per month | "Cost of manual invoice processing" |
| **Assessment** | `/assessment` | Guided wizard: 6 questions → personalized recommendation | "AI readiness assessment ERP" |
| **Innovation Lab** | `/innovation-lab` | Future capabilities preview, design partner program | "Enterprise AI innovation lab" |
| **Insights** | `/insights` | Technical articles optimized for GEO/AEO | Per-article long-tail |
| **About** | `/about-flowtaris-ai` | AI practice team, methodology, partners | "Flowtaris AI team" |
| **Contact** | `/contact` | Demo request form (also routes leads to .com pipeline) | "Enterprise AI demo request" |
| **Privacy / Terms** | `/privacy`, `/terms` | Legal pages | — |

#### Content Voice
- Confident, data-driven, product-like
- Specific metrics: "4 days → 3 minutes," "$4.5M recovered," "99.9% accuracy"
- Apple product-page feel

#### CTA on Every Page
> *"Flowtaris AI is the automation practice of [Flowtaris](https://flowtaris.com) — Enterprise ERP & Integration Consulting"*

---

### 4C. FLOWTARIS.NET — "THE PROOF"

**One-line purpose:** Show that Flowtaris DELIVERS what it promises. Irrefutable proof.

#### Pages

| Page | Route | Content Summary | Primary Keyword Target |
|------|-------|----------------|----------------------|
| **Accountability Dashboard** | `/` | Live DORA metrics: Deployment Frequency, MTTR, Change Failure Rate, System Uptime. Each metric shows Flowtaris value vs. Industry Average (from DORA Research). Live deployment counter. "Days since last P1 incident" timer. Monthly NPS score. | "Engineering accountability metrics," "Software delivery transparency" |
| **Delivery Standards** | `/delivery-standards` | Code Review Policy (2 reviewers, <4hr turnaround), Testing Standards (80%+ coverage), Security Baseline (OWASP Top 10 every release), Documentation Standard, Incident Response SLA (P1 ack <15min, RCA <48hr). Each standard with live compliance score and "Last Verified" timestamp. | "Software engineering standards agency" |
| **Integration Observatory** | `/integration-observatory` | Real-time dashboard (anonymized): NetSuite↔Coupa sync (12,847 records, 0 errors), SAP↔Workday HCM (3,219 records, 2 auto-resolved warnings), Custom API Gateway (99.99% uptime, 2.3M requests/month, 89ms avg latency). 90-day health timeline per integration. | "ERP integration monitoring live" |
| **Incident Transparency** | `/incident-transparency` | Public post-mortem log: What happened, When detected, How resolved, Root cause, Preventive measures, Time to resolution. Each incident has a severity badge and resolution timeline. | "Software incident transparency," "Public post-mortem agency" |
| **Engineering Radar** | `/engineering-radar` | Technology radar visualization: Adopt (Next.js 14, Supabase, Vercel Edge), Trial (Deno 2, AI Agents), Assess (WebAssembly for ERP), Hold (Legacy REST, jQuery). Each entry links to a Decision Log on .co explaining why. | "Technology radar ERP consulting" |
| **ROI Ledger** | `/roi-ledger` | Cumulative verified impact: 14,200 hours/year processing time reduced, 89% manual data entry eliminated, $12.7M cost savings delivered, 847 hours downtime prevented, 23,419 integration errors caught. Updated quarterly. | "Verified ROI enterprise consulting" |
| **Open Methodology** | `/open-methodology` | Step-by-step engagement model: Discovery Sprint (Weeks 1-2), Architecture & Design (Weeks 3-4), Build Sprints (Week 5+), Go-Live Protocol, Ongoing Operations. Each phase includes specific artifacts, templates, and client responsibilities. | "Enterprise software delivery methodology" |
| **Compliance Vault** | `/compliance-vault` | Security certifications, GDPR/SOC 2 readiness, vendor risk assessment (pre-filled), data handling policies, insurance docs, business continuity plan, disaster recovery plan. | "Software vendor compliance documentation" |
| **Industry Benchmarks** | `/benchmarks` | Quarterly published data: Average NetSuite integration error rates, AP automation ROI timelines by platform, ERP migration failure rates, integration downtime cost per hour by industry. Downloadable PDF report. | "ERP integration benchmark report," "AP automation industry data" |
| **Open Playbooks** | `/playbooks` | Downloadable engineering guides: "NetSuite-to-Coupa Integration Playbook," "ERP Migration Risk Checklist," "Finance Automation Readiness Scorecard," "Enterprise Integration Testing Framework." Email-gated. | "NetSuite Coupa integration guide," "ERP migration checklist" |
| **Partner Certifications** | `/certifications` | NetSuite SuiteCloud Developer Certified, Coupa Integration Specialist, SAP Certified Technology Associate, Workday Integration Certified. Each cert links to corresponding .com service page. | "Certified NetSuite partner," "Certified Coupa partner" |
| **Engineering Community** | `/community` | Technical blog targeting developer searches: "How we reduced NetSuite API response time by 80%," "Building self-healing integrations with Celigo," "Zero-downtime ERP migrations." | Developer long-tail keywords |

#### Content Voice
- Factual, metric-driven, no-nonsense
- Numbers, timestamps, compliance scores
- Zero marketing fluff. Pure data and standards.

#### CTA on Every Page
> *"Flowtaris.net is the operational transparency layer of [Flowtaris](https://flowtaris.com) — Enterprise ERP & Integration Consulting. [Hire this team →](https://flowtaris.com/contact)"*

---

## 5. THE CROSS-LINKING ARCHITECTURE

### Global Rules (Apply to ALL Support Domains)

1. **Footer on .co, .ai, .net must contain:**
   ```
   "Part of the Flowtaris Engineering Group"
   [flowtaris.com](https://flowtaris.com) · [flowtaris.ai](https://flowtaris.ai) · [flowtaris.co](https://flowtaris.co) · [flowtaris.net](https://flowtaris.net)
   ```

2. **Schema.org `sameAs` on every domain:**
   ```json
   {
     "@type": "Organization",
     "name": "Flowtaris",
     "url": "https://flowtaris.com",
     "sameAs": [
       "https://flowtaris.ai",
       "https://flowtaris.co",
       "https://flowtaris.net"
     ]
   }
   ```
   This tells Google: *"These four domains are the same entity."* Authority flows between them.

3. **Every page on .co, .ai, .net must have at least ONE link to flowtaris.com.** No exceptions.

### Specific Cross-Links

| From | Link Text | To |
|------|-----------|-----|
| .co Decision Log → | "See this principle in action" | .com/case-studies |
| .co Principles → | "Explore our services" | .com/services |
| .ai Capability → | "Deploy this capability" | .com/contact |
| .ai ROI Calculator results → | "Start a project" | .com/contact |
| .ai Platform Page → | "Our NetSuite consulting services" | .com/services/netsuite |
| .net Delivery Standards → | "See our service offerings" | .com/services |
| .net Integration Observatory → | "Our integration expertise" | .com/integrations |
| .net Engineering Radar → | "Why we chose this" | .co/judgment/[slug] |
| .net Benchmarks → | "Our industry experience" | .com/industries |
| .net Playbooks (after download) → | "Let us implement this for you" | .com/contact |
| .net Certifications → | "Our certified services" | .com/services/[platform] |
| .com Homepage → | "Flowtaris Ecosystem" section | Links to .co, .ai, .net |
| .com About → | "Our engineering standards" | .net/delivery-standards |
| .com Services → | "AI-powered capabilities" | .ai/capabilities |
| .com Blog → | "Read the decision behind this" | .co/judgment/[slug] |

### The Link Authority Flow Diagram

```
    ┌──────┐        ┌──────┐        ┌──────┐
    │  .co │───────→│      │←───────│ .ai  │
    │      │        │ .com │        │      │
    │      │───────→│      │←───────│      │
    └──┬───┘        └──┬───┘        └──┬───┘
       │               ↑               │
       │               │               │
       │            ┌──┴───┐           │
       └───────────→│ .net │←──────────┘
                    │      │
                    └──────┘

    Arrows = direction of link authority flow
    ALL arrows ultimately point to .com
```

---

## 6. SEO DOMINATION STRATEGY — TRADITIONAL SEARCH (GOOGLE/BING)

### The Complete Keyword Ownership Map

| Keyword Category | Example Queries | Owner | Backup | Priority |
|-----------------|----------------|-------|--------|----------|
| **Brand** | "Flowtaris," "Flowtaris reviews," "Flowtaris careers" | .com | .co | Critical |
| **Service (broad)** | "ERP consulting," "Enterprise integration services" | .com | — | Critical |
| **Service (platform)** | "NetSuite consulting services," "Coupa implementation partner" | .com | .ai | Critical |
| **Industry** | "Healthcare ERP consulting," "Manufacturing NetSuite" | .com | — | High |
| **AI Product** | "AI accounts payable automation," "GenAI invoice processing" | .ai | — | High |
| **AI + Platform** | "NetSuite AI automation," "SAP AI accounts payable" | .ai | .com | High |
| **Thought Leadership** | "ERP migration decisions," "Agency pricing models" | .co | .com blog | Medium |
| **Crisis/Problem** | "ERP integration failure," "NetSuite API issues" | .co | .net community | Medium |
| **Proof/Trust** | "Software delivery metrics," "Agency transparency" | .net | — | Medium |
| **Technical/Developer** | "SuiteScript optimization," "Celigo error handling" | .net community | — | Medium |
| **Benchmark/Data** | "ERP integration failure rate," "AP automation ROI data" | .net benchmarks | .ai ROI calc | High |
| **Guides/How-to** | "NetSuite Coupa integration guide," "ERP migration checklist" | .net playbooks | .com resources | High |
| **Compliance** | "SOC 2 ERP vendor," "GDPR compliant ERP partner" | .net vault | .com | Medium |
| **Tools** | "AP automation ROI calculator," "AI readiness assessment" | .ai | — | High |
| **Certification** | "Certified NetSuite partner," "Coupa certified integrator" | .net | .com | Medium |

### The "Surround Sound" Effect — Example SERP

**Search: "NetSuite automation consulting"**

| Position | Title | Domain | Type |
|----------|-------|--------|------|
| #1 | "Enterprise NetSuite Services — Flowtaris" | flowtaris.com | Service page |
| #3 | "NetSuite AI Automation Platform — Flowtaris AI" | flowtaris.ai | Platform page |
| #6 | "The NetSuite 2024.2 API Crisis — What We Learned" | flowtaris.co | Decision Log |
| #8 | "NetSuite Integration Health — Live Monitoring" | flowtaris.net | Observatory |

**4 out of 10 results = Total SERP dominance.** The buyer cannot scroll without encountering Flowtaris.

### Topical Authority Strategy

Google rewards "topical authority" — owning a topic so comprehensively that you're the default result for any related query. Here's how the ecosystem builds it:

```
                    TOPIC: "NetSuite"
                         │
    ┌────────────────────┼────────────────────┐
    │                    │                    │
flowtaris.com        flowtaris.ai         flowtaris.co
/services/netsuite   /platforms/netsuite   /judgment/netsuite
/industries/*        /capabilities/*       (API crisis log)
/integrations/*      /case-studies/*
/case-studies/*      /roi-calculator
                     /assessment

flowtaris.net
/integration-observatory (live NetSuite health)
/playbooks/netsuite-coupa-integration
/community/netsuite-api-optimization
/benchmarks (NetSuite error rate data)
/certifications (NetSuite SuiteCloud Certified)
```

**15+ pages across 4 domains, all about NetSuite, all interlinked.** Google has no choice but to consider Flowtaris the #1 authority on NetSuite. Repeat this for Coupa, SAP, and Workday.

---

## 7. AEO/GEO STRATEGY — AI SEARCH ENGINES (ChatGPT, Perplexity, Gemini)

### Why This Matters

By 2026, 40%+ of enterprise research starts in an AI search engine. When a CTO asks ChatGPT "Who does NetSuite AI automation?", the answer is generated from structured data, Schema.org markup, and authoritative content.

### Schema.org Implementation Per Domain

#### flowtaris.com
```json
{
  "@type": "Organization",
  "name": "Flowtaris",
  "description": "Enterprise ERP & Integration Consulting for NetSuite, Coupa, SAP, Workday",
  "url": "https://flowtaris.com",
  "sameAs": ["https://flowtaris.ai", "https://flowtaris.co", "https://flowtaris.net"],
  "knowsAbout": ["NetSuite", "Coupa", "SAP", "Workday", "ERP Consulting", "Enterprise Integration"],
  "hasOfferCatalog": { "@type": "OfferCatalog", ... }
}
```

#### flowtaris.ai
```json
{
  "@type": "ItemList",
  "name": "Flowtaris AI Capabilities",
  "itemListElement": [
    { "@type": "ListItem", "name": "GenAI Document Intelligence", "url": ".../capabilities/genai-document-intelligence" },
    { "@type": "ListItem", "name": "Autonomous Workflow Engine", ... },
    ...
  ]
}
```
Plus `FAQPage` schema on every platform page. Plus `SoftwareApplication` schema for each capability.

#### flowtaris.co
```json
{
  "@type": "Article",
  "headline": "The NetSuite 2024.2 API Crisis — Decision Log",
  "author": { "@type": "Person", "name": "CTO, Flowtaris" },
  "publisher": { "@type": "Organization", "name": "Flowtaris" }
}
```

#### flowtaris.net
```json
{
  "@type": "TechArticle",
  "headline": "Flowtaris Delivery Standards",
  "publisher": { "@type": "Organization", "name": "Flowtaris" }
}
```
Plus `Dataset` schema for benchmark reports. Plus `HowTo` schema for playbooks.

### Answer-Optimized Content Blocks

Every page on `.ai` and `.net` must include a section formatted specifically for AI citation:

```
## What is [Topic]?
[2-3 sentence definitive answer that AI engines can extract as a citation]

## How does Flowtaris approach [Topic]?
[2-3 sentence answer with specific metric]

## FAQ
Q: [Common question]?
A: [Concise, authoritative answer]
```

This ensures that when AI search engines process queries about ERP automation, they extract and cite Flowtaris content as the authoritative source.

---

## 8. SOCIAL, PR & BACKLINK STRATEGY

### Content Distribution Rules

| Content Type | Created On | Shared To | Links Back To |
|-------------|-----------|-----------|--------------|
| Decision Log | .co | LinkedIn (CEO/CTO personal), Twitter, HackerNews | .com/services |
| AI Capability Deep-Dive | .ai | LinkedIn company page, Product Hunt | .com/contact |
| Incident Post-Mortem | .net | HackerNews, Reddit r/programming, Dev.to | .com |
| Benchmark Report | .net | Industry press, analyst emails, LinkedIn | .com |
| Technical Blog Post | .net/community | Dev.to, Medium, HackerNews | .com |
| Playbook Launch | .net | LinkedIn, Email list, Twitter | .com/contact |

### PR Magnet Strategy

**These stories write themselves for journalists:**
- "This consulting firm publishes its failures publicly" → .net/incident-transparency
- "Why this agency shares its DORA metrics with the world" → .net
- "An engineering consultancy that doesn't hide behind NDAs" → .co + .net
- "This firm's ROI calculator predicted $2M savings — then they delivered $2.4M" → .ai + .net/roi-ledger

**Target Publications:** TechCrunch, The Information, CIO Magazine, Forbes Tech Council, CFO.com, ERPNews

**Every press mention includes a reference to Flowtaris (the parent brand at .com). That's a high-authority backlink from a major publication directly to `.com`.**

---

## 9. UI/UX DESIGN DIRECTION — UNIQUE & ANIMATED

### Design Philosophy

The entire Flowtaris ecosystem should feel like **one brand, four expressions.** Like how Apple's website, Apple TV+, and Apple Developer site feel different but unmistakably Apple.

### Brand Design Tokens (Shared Across All Domains)

```css
:root {
  /* Colors */
  --brand-navy: #0A1628;
  --brand-gold: #E8A020;
  --brand-blue: #0066CC;
  --brand-teal: #00B4A6;
  --brand-white: #FFFFFF;
  --brand-offwhite: #FAFAFA;
  --brand-slate-100: #F1F5F9;
  --brand-slate-500: #64748B;

  /* Typography */
  --font-heading: 'Sora', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Motion */
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-cinematic: 800ms;
}
```

### Domain-Specific Expression

| Domain | Color Accent | Feel | Unique Element |
|--------|-------------|------|----------------|
| **.com** | Gold (#E8A020) | Institutional, premium, trust | Subtle gold accents on navy. Serif-influenced headings. Minimal animation. Feels like a top-tier law firm or investment bank. |
| **.co** | White on Dark | Raw, editorial, intellectual | Dark backgrounds, monospaced typography for Decision Logs, newspaper-style layouts. Feels like reading The Economist or Monocle. |
| **.ai** | Blue (#0066CC) + Teal (#00B4A6) | Cinematic, futuristic, product-like | Parallax scroll, floating product UI, animated counters, gradient glows. Feels like an Apple product launch page. |
| **.net** | Green accents on Light | Data-driven, dashboard-like, engineering | Real-time counters, progress bars, status badges, monospaced metrics. Feels like a premium engineering dashboard (Vercel/Linear style). |

### Animation Standards

#### Global (All Domains)
- **Scroll-reveal:** Elements fade in + slide up 20px on viewport entry. Duration: 500ms. Ease: smooth.
- **Hover states:** All interactive elements have a 150ms transition.
- **Page transitions:** Fade in on route change. Duration: 300ms.
- **Reduced motion:** ALL animations disabled when `prefers-reduced-motion: reduce` is active. No exceptions.

#### .ai Specific (Cinematic)
- **Hero:** 6-layer parallax with depth-based movement. Floating platform logos orbit the central AI canvas.
- **Capability cards:** Cascading stack animation on scroll. Cards rise from behind each other.
- **Metric counters:** Animated number count-up when entering viewport. Duration: 1.5s. Ease: expressive.
- **ROI Calculator:** Real-time bar chart animation as user adjusts inputs. Results fade in with scale-up.
- **Innovation Lab:** "Iris window" effect — circular viewport that reveals future capabilities.

#### .net Specific (Dashboard)
- **DORA metrics:** Large animated counters with decimal precision. Pulse animation on live data points.
- **Integration Observatory:** Heartbeat pulse on each integration row (green/amber/red). Status changes animate smoothly.
- **Compliance badges:** Check-mark animations that draw on scroll. "Last Verified" timestamps count up in real-time.
- **Engineering Radar:** Interactive circular visualization. Hover reveals technology details. Click navigates to .co Decision Log.
- **Benchmark charts:** Animated bar comparisons (Flowtaris vs. Industry Average). Bars grow from left. Flowtaris bar is always brand-teal, industry average is grey.

#### .co Specific (Editorial)
- **Decision Logs:** Typewriter effect on key quotes. Subtle fade for section transitions.
- **Principles:** Numbered principles slide in from the left with staggered delays.
- **Timeline:** Horizontal scrolling timeline for "How Principles Evolved." Active year highlights with scale-up.

### Mobile-First Responsive Rules

| Breakpoint | Behavior |
|------------|----------|
| **Desktop (≥1440px)** | Full experience — all animations, parallax, floating elements |
| **Laptop (1024-1439px)** | Full experience, reduced particle density |
| **Tablet (768-1023px)** | Parallax depth reduced 50%, floating loops disabled, cards stack vertically |
| **Mobile (<768px)** | Hero parallax only, all other animations become simple fades, calculator inputs stack, single-column layouts |
| **Reduced Motion** | ALL parallax/float/counter animations disabled → instant show. Static hero. No `will-change` layers. |

---

## 10. THE DIFFERENTIATION MATRIX — WHY NOBODY CAN COPY THIS

| What Flowtaris Has | What Competitors Have | Time to Copy | Can It Be Faked? |
|-------------------|-----------------------|-------------|-----------------|
| **4-domain ecosystem with cross-linked authority** | 1 website | 2+ years | No — requires genuine content investment |
| **Public DORA metrics** (.net) | Hidden internal metrics (if tracked at all) | Can't copy without real discipline | No — fake metrics are immediately exposed |
| **Decision Logs with failures** (.co) | Polished case studies showing only success | Requires executive courage | No — publishing sanitized logs is transparent and damages trust |
| **Live Integration Observatory** (.net) | Monthly status reports (PDF) | Requires real production monitoring infrastructure | No — needs actual running systems |
| **ROI Calculator + Cost of Inaction + Assessment** (.ai) | "Contact us for a demo" | 3-6 months | Partially — but Flowtaris has 3 tools, competitors have 0 |
| **Industry Benchmark Reports** (.net) | No original data published | 1-2 years of data collection | No — requires real engagement data over time |
| **Open Methodology with templates** (.net) | "We use agile" | Quick to publish, but exposes weak processes | Partially — but weak methodology exposed publicly hurts more than helps |
| **Engineering Radar linked to Decision Logs** (.net ↔ .co) | "We use modern tech" | Requires thoughtful tech evaluation process | No — a radar without rationale is empty |
| **Platform Entity Pages with GEO/AEO markup** (.ai) | Generic "platforms we support" page | 2-3 months per platform | Partially — but depth + Schema.org + FAQ is hard to match |
| **Technical community blog** (.net) | Company blog mixing business + tech | 6+ months of consistent publishing | No — quality technical content requires real engineering expertise |

**The sum of all these pieces is the moat.** One piece can be imitated. The interconnected system — four domains, each with deep authentic content, all pointing to a single commercial engine, optimized for every search engine (traditional + AI) — cannot.

---

## 11. AUTHORITY PROTECTION RULES — NON-NEGOTIABLE

These rules MUST be followed at all times. Violating any of them risks splitting `.com`'s authority.

### Rule 1: NO Sales Content on Support Domains
- ❌ .co, .ai, .net must NEVER have pricing pages
- ❌ .co, .ai, .net must NEVER have service listing pages (that's .com)
- ❌ .co, .ai, .net must NEVER have "Hire Us" or "Get a Quote" CTAs
- ✅ They CAN have "Contact" forms that route to .com's pipeline
- ✅ They CAN have links that say "Explore our services at flowtaris.com"

### Rule 2: NO Duplicate Content Across Domains
- ❌ Never publish the same blog post on .com and .co
- ❌ Never copy case study text from .com to .ai
- ✅ Each domain has unique content that links to related content on other domains
- ✅ If content overlaps, use `rel="canonical"` pointing to .com

### Rule 3: ALL External Marketing Points to .com
- ❌ Never run paid ads to .ai, .co, or .net
- ❌ Never list .ai, .co, or .net as your website on LinkedIn/directory profiles
- ✅ Always run ads to .com
- ✅ LinkedIn company page URL = flowtaris.com
- ✅ Google Business Profile URL = flowtaris.com

### Rule 4: Support Domains Drive Organic Only
- .co earns organic traffic through thought leadership shared on social
- .ai earns organic traffic through SEO and AI search citations
- .net earns organic traffic through benchmark reports and technical content
- All organic traffic encounters links back to .com

### Rule 5: One Google Search Console Property Per Domain
- Verify all four domains in Google Search Console
- Set .com as the "preferred" domain
- Monitor for keyword cannibalization monthly (if .co starts ranking for a .com keyword, add canonical or adjust content)

---

## 12. EXECUTION ROADMAP — PHASED DELIVERY

### Phase 0: Foundation (Week 1-2)
- [ ] Add `sameAs` Schema.org to .com, .co, .ai pointing to all four domains
- [ ] Add "Flowtaris Ecosystem" section to .com homepage
- [ ] Add cross-domain footer to .co and .ai
- [ ] Set up Google Search Console for all four domains
- [ ] Create shared design token package

### Phase 1: .net Core Launch (Week 3-6)
- [ ] Build Accountability Dashboard (home)
- [ ] Build Delivery Standards page
- [ ] Build Open Methodology page
- [ ] Build Compliance Vault
- [ ] Build Engineering Radar (link to .co Decision Logs)
- [ ] Deploy to Vercel, configure flowtaris.net domain

### Phase 2: .net Authority Pages (Week 7-10)
- [ ] Build Integration Observatory
- [ ] Build Incident Transparency page
- [ ] Build ROI Ledger
- [ ] Build Partner Certifications page
- [ ] Publish first Industry Benchmark report
- [ ] Publish first 3 Open Playbooks

### Phase 3: .net Community & Content (Week 11-14)
- [ ] Launch Engineering Community (technical blog)
- [ ] Publish 5+ technical articles
- [ ] Build all cross-links between .net and other domains
- [ ] Submit benchmark report to industry publications for coverage

### Phase 4: Ecosystem Optimization (Ongoing)
- [ ] Monthly keyword cannibalization audit
- [ ] Quarterly benchmark report updates
- [ ] Continuous technical blog publishing (2x/month minimum)
- [ ] Monitor AI search citations (Perplexity, ChatGPT) monthly
- [ ] A/B test cross-domain CTAs for conversion optimization

---

## 13. SUCCESS METRICS & VERIFICATION

### How to Know This Plan Is Working

| Metric | Target (6 Months) | How to Measure |
|--------|--------------------|----------------|
| **flowtaris.com organic traffic** | +50% increase | Google Analytics |
| **flowtaris.com Domain Authority** | +10 points | Ahrefs/Moz |
| **Total keywords ranked (all domains)** | 500+ | Ahrefs/Semrush |
| **Page 1 rankings for "NetSuite consulting"** | Top 3 | Google Search Console |
| **Page 1 rankings for "ERP AI automation"** | Top 3 | Google Search Console |
| **AI search citations (ChatGPT/Perplexity)** | 10+ per quarter | Manual monitoring + citation tracking tools |
| **Backlinks from press/publications** | 20+ | Ahrefs |
| **Demo requests via .ai** | 25+/month | Form submissions |
| **Playbook downloads via .net** | 50+/month | Download tracking |
| **Time from first Flowtaris encounter to .com contact** | <14 days average | Cross-domain analytics |
| **Sales cycle length** | Reduced by 30% | CRM data |

### The Ultimate Test

Ask ChatGPT, Perplexity, or Gemini:
> *"Who is the best enterprise ERP and finance automation consultancy?"*

If the answer includes **Flowtaris** — with citations from multiple domains — this plan has succeeded.

---

> **This document is the final execution plan. Every page, every link, every keyword, every animation, every cross-domain connection is defined here. Any developer, designer, or AI model can pick this up and build it. No additional context required.**

---

## 14. DEVELOPER KICKOFF PROMPT

> [!IMPORTANT]
> **How to use this prompt:** After creating your project folder (e.g., `d:\flowtaris-net`), open it in your IDE, paste this prompt into the AI chat, and it will start building.

### The Prompt (Copy Everything Below the Line)

---

```
I am building flowtaris.net — "The Accountability Engine" — a new Next.js 14 website for the Flowtaris brand ecosystem.

## CONTEXT
Flowtaris is an Enterprise ERP & Integration Consulting company. We already have 3 fully built domains:
- flowtaris.com (d:\flowtaris) — The main storefront. Services, Industries, Integrations, Case Studies, Contact.
- flowtaris.ai (d:\flowtaris ai) — AI automation for Finance/ERP. Capabilities, ROI Calculator, Platform pages.
- flowtaris.co (d:\Co_Flowtaris) — Thought leadership. Decision Logs, Principles, Culture.

flowtaris.net is the NEW domain. It does NOT exist yet. We are building it from scratch in this folder.

## PURPOSE
flowtaris.net is "The Proof Engine." It publishes live operational metrics, engineering standards, and accountability data that PROVE Flowtaris delivers what it promises. No other agency in the world does this.

## TECH STACK
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with custom design tokens
- Framer Motion for animations
- Fonts: Sora (headings), Inter (body), JetBrains Mono (metrics/code)
- Supabase for backend data
- Vercel for deployment

## BRAND DESIGN TOKENS
```css
--brand-navy: #0A1628;
--brand-gold: #E8A020;
--brand-teal: #00B4A6;
--brand-white: #FFFFFF;
--brand-offwhite: #FAFAFA;
--brand-slate-500: #64748B;
```
The .net domain uses a GREEN accent on light backgrounds with a dashboard/engineering feel (like Vercel or Linear). Monospaced metrics. Status badges. Progress bars. Real-time counters.

## PAGES TO BUILD (IN ORDER)

### Phase 1 — Core
1. `/` — Accountability Dashboard: Live DORA metrics (Deployment Frequency, MTTR, Change Failure Rate, Uptime) with animated counters. Each metric shows Flowtaris value vs Industry Average. "Days since last P1 incident" timer. Monthly NPS score.
2. `/delivery-standards` — Engineering Playbook: Code Review Policy, Testing Standards (80%+ coverage), Security Baseline (OWASP Top 10), Documentation Standard, Incident Response SLA. Each standard has a live compliance score and "Last Verified" timestamp.
3. `/open-methodology` — Step-by-step engagement model: Discovery Sprint, Architecture & Design, Build Sprints, Go-Live Protocol, Ongoing Operations. Each phase with deliverable artifacts and templates.
4. `/compliance-vault` — Security certifications, GDPR/SOC 2 readiness, vendor risk assessment, data handling policies, business continuity plans.
5. `/engineering-radar` — Interactive technology radar: Adopt/Trial/Assess/Hold categories. Each technology entry links to flowtaris.co Decision Logs.

### Phase 2 — Authority
6. `/integration-observatory` — Real-time integration health dashboard (anonymized). NetSuite↔Coupa sync status, SAP↔Workday HCM, Custom API Gateway. 90-day health timeline. Heartbeat pulse animations.
7. `/incident-transparency` — Public post-mortem log. What happened, when detected, how resolved, root cause, preventive measures, time to resolution. Severity badges.
8. `/roi-ledger` — Cumulative verified financial impact: hours saved, manual work eliminated, cost savings, downtime prevented. Updated quarterly.
9. `/certifications` — Partner certifications: NetSuite SuiteCloud, Coupa Integration Specialist, SAP Certified, Workday Integration Certified. Links to flowtaris.com service pages.

### Phase 3 — Content
10. `/benchmarks` — Quarterly industry benchmark reports: NetSuite integration error rates, AP automation ROI timelines, ERP migration failure rates. Downloadable PDF. Email-gated.
11. `/playbooks` — Downloadable engineering guides: "NetSuite-to-Coupa Integration Playbook," "ERP Migration Risk Checklist." Email-gated.
12. `/community` — Technical blog: "How we reduced NetSuite API response time by 80%," "Building self-healing integrations."

## CROSS-LINKING RULES (CRITICAL)
- Every page footer: "Flowtaris.net is the operational transparency layer of Flowtaris — Enterprise ERP & Integration Consulting" with link to https://flowtaris.com
- Every page must have at least ONE link to flowtaris.com
- NO pricing pages, NO service listings, NO "Hire Us" CTAs on this domain — all conversion goes to flowtaris.com/contact
- Add Schema.org Organization markup with sameAs pointing to all 4 domains

## ANIMATION STANDARDS
- Scroll-reveal: Elements fade in + slide up 20px on viewport entry. Duration 500ms.
- DORA metric counters: Animated count-up when entering viewport. Duration 1.5s.
- Integration Observatory: Heartbeat pulse (green/amber/red) on each row.
- Compliance badges: Check-mark draw animation on scroll.
- Benchmark charts: Animated bars growing from left (Flowtaris = teal, Industry = grey).
- ALL animations disabled when prefers-reduced-motion: reduce is active.

## SEO REQUIREMENTS
- Unique meta title and description per page
- Schema.org TechArticle for standards pages, Dataset for benchmarks, HowTo for playbooks
- FAQ sections with FAQPage schema on key pages
- Dynamic sitemap
- All images with descriptive alt text

Start by initializing the Next.js 14 project with TypeScript and Tailwind CSS in this folder, then build Phase 1 pages one by one. After each page, verify it renders correctly before moving to the next.
```

---

*Document Version: FINAL*
*Last Updated: September 15, 2026*

