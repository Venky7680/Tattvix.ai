import type { Metadata } from 'next';
import Link from 'next/link';

// The original static site shipped no 404 page, so this is the one screen with
// no source to match. It is built only from existing site classes
// (page-hero / section-head / platform-row / btn) so it inherits the same type,
// colour and spacing as every other page.

export const metadata: Metadata = {
  title: 'Page not found — Tattvix.ai',
  robots: 'noindex, follow',
};

const DESTINATIONS = [
  { href: '/solutions', label: 'All solutions' },
  { href: '/otto', label: 'OTTO — Cloud Ops' },
  { href: '/autonoma', label: 'Autonoma — Agent Platform' },
  { href: '/iraops', label: 'IraOps — Service Desk' },
  { href: '/voice-ai', label: 'Voice AI' },
  { href: '/data-platforms', label: 'Data Platforms' },
  { href: '/ai-services', label: 'AI Services' },
  { href: '/about', label: 'Who we are' },
];

export default function NotFound() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> Not found
          </p>
          <div className="section-head">
            <p className="eyebrow">Error 404</p>
            <h1>We couldn&#39;t find that page.</h1>
            <p>
              The page you asked for has moved or never existed. Everything else is
              still here — start from one of these.
            </p>
          </div>
          <div className="platform-row">
            {DESTINATIONS.map((d) => (
              <Link key={d.href} className="platform" href={d.href}>
                {d.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="tight">
        <div className="wrap">
          <div className="cta-box">
            <div>
              <p className="eyebrow" style={{ color: '#fff' }}>
                Still stuck
              </p>
              <h2>Tell us what you were looking for.</h2>
              <p>
                If a link brought you here, we would like to fix it — and we can point
                you to the right page in the meantime.
              </p>
            </div>
            <div className="cta-actions">
              <Link className="btn btn-gold" href="/contact">
                Contact us
              </Link>
              <p className="mail">
                or write to <a href="mailto:info@tattvix.ai">info@tattvix.ai</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
