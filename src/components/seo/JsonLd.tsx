export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const jsonLdArray = Array.isArray(data) ? data : [data];

  return (
    <>
      {jsonLdArray.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

// ===== Reusable Schema Generators =====

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Flowtaris",
    "url": "https://flowtaris.com",
    "logo": "https://flowtaris.net/logo.png",
    "description": "Enterprise ERP & Integration Consulting for NetSuite, Coupa, SAP, and Workday. The Science of Business Flow.",
    "sameAs": [
      "https://flowtaris.com",
      "https://flowtaris.ai",
      "https://flowtaris.co",
      "https://flowtaris.net"
    ],
    "knowsAbout": [
      "Enterprise Resource Planning",
      "ERP Integration",
      "NetSuite Consulting",
      "SAP Integration",
      "Coupa Implementation",
      "Workday Integration",
      "Enterprise Automation",
      "Kafka Event Streaming",
      "DORA Metrics",
      "DevOps Engineering"
    ]
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Flowtaris Accountability Engine",
    "url": "https://flowtaris.net",
    "description": "The operational transparency and engineering accountability layer of Flowtaris — live DORA metrics, delivery standards, compliance documentation, and integration telemetry.",
    "publisher": {
      "@type": "Organization",
      "name": "Flowtaris",
      "url": "https://flowtaris.com"
    }
  };
}

export function getTechArticleSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": opts.title,
    "description": opts.description,
    "url": opts.url,
    "datePublished": opts.datePublished || "2026-09-15",
    "dateModified": opts.dateModified || new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Organization",
      "name": "Flowtaris",
      "url": "https://flowtaris.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Flowtaris",
      "url": "https://flowtaris.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://flowtaris.net/logo.png"
      }
    }
  };
}

export function getFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
