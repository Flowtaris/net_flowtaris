import type { MetadataRoute } from 'next';

// Force the sitemap to be dynamically generated on every request.
// This ensures that GoogleBot and other crawlers always receive the exact current timestamp,
// which heavily signals that the Accountability Engine is constantly updating and must be crawled frequently.
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://flowtaris.net';
  
  // By using a fresh timestamp on every request (due to force-dynamic), 
  // we trick crawlers into believing the content just updated, accelerating indexing.
  const now = new Date().toISOString();

  return [
    // 1. The Core Dashboard (Highest Priority)
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'always', // Signals real-time telemetry updates
      priority: 1.0,
    },
    // 2. The 4 Primary Accountability Pillars (High Priority)
    {
      url: `${baseUrl}/integration-observatory`,
      lastModified: now,
      changeFrequency: 'hourly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/delivery-standards`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roi-ledger`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/compliance-vault`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // 3. Secondary Proof Points (Medium Priority)
    {
      url: `${baseUrl}/incident-transparency`,
      lastModified: now,
      changeFrequency: 'always', // Incidents happen in real-time
      priority: 0.8,
    },
    {
      url: `${baseUrl}/engineering-radar`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // 4. Supporting Resources (Standard Priority)
    {
      url: `${baseUrl}/open-methodology`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/benchmarks`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/certifications`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/playbooks`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ];
}
