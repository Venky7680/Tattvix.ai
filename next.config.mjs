/** @type {import('next').NextConfig} */

// The static site served /about.html, /otto.html, and so on. The App Router
// serves extensionless routes, so every old URL is permanently redirected to
// keep existing links and search-engine results intact.
const LEGACY_SLUGS = [
  'about', 'solutions', 'otto', 'autonoma', 'iraops', 'voice-ai', 'hr-ai',
  'finance-ai', 'logistics-ai', 'sales-ai', 'legal-ai', 'data-platforms',
  'ai-services', 'request-demo', 'contact',
];

const nextConfig = {
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      ...LEGACY_SLUGS.map((slug) => ({
        source: `/${slug}.html`,
        destination: `/${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
