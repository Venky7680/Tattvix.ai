import type { MetadataRoute } from 'next';

const BASE = 'https://tattvix.ai';

// Mirrors the priorities from the original sitemap.xml, on the new routes.
const ROUTES: { path: string; priority: number }[] = [
  { path: '/', priority: 1.0 },
  { path: '/about', priority: 0.8 },
  { path: '/solutions', priority: 0.9 },
  { path: '/otto', priority: 0.9 },
  { path: '/autonoma', priority: 0.9 },
  { path: '/iraops', priority: 0.9 },
  { path: '/voice-ai', priority: 0.8 },
  { path: '/hr-ai', priority: 0.8 },
  { path: '/finance-ai', priority: 0.8 },
  { path: '/logistics-ai', priority: 0.8 },
  { path: '/sales-ai', priority: 0.8 },
  { path: '/legal-ai', priority: 0.8 },
  { path: '/data-platforms', priority: 0.8 },
  { path: '/ai-services', priority: 0.8 },
  { path: '/request-demo', priority: 0.9 },
  { path: '/contact', priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    changeFrequency: 'weekly',
    priority,
  }));
}
