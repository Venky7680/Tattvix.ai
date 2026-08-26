/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { LOGO_DATA_URI } from '@/lib/logo';

const PRODUCTS = [
  { href: '/otto', label: 'OTTO — Cloud Ops' },
  { href: '/autonoma', label: 'Autonoma — Agent Platform' },
  { href: '/iraops', label: 'IraOps — Service Desk' },
  { href: '/voice-ai', label: 'Voice AI' },
];

const VERTICALS = [
  { href: '/hr-ai', label: 'HR AI' },
  { href: '/finance-ai', label: 'Finance AI' },
  { href: '/logistics-ai', label: 'Logistics AI' },
  { href: '/sales-ai', label: 'Sales AI' },
  { href: '/legal-ai', label: 'Legal AI' },
];

const COMPANY = [
  { href: '/about', label: 'Who we are' },
  { href: '/data-platforms', label: 'Data Platforms' },
  { href: '/ai-services', label: 'AI Services' },
  { href: '/request-demo', label: 'Request a demo' },
  { href: '/contact', label: 'Contact' },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="foot-col">
      <h4>{title}</h4>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="logo" href="/">
              <img src={LOGO_DATA_URI} alt="Tattvix.ai logo" width={36} height={36} />
              <span>
                tattvix<b>.ai</b>
              </span>
            </Link>
            <p>
              Intelligence built in. Affordability by design. AI products, AI services, and
              AI-based data services. Est. 2026 &#183; Visakhapatnam, India.
            </p>
          </div>
          <FooterColumn title="AI Products" links={PRODUCTS} />
          <FooterColumn title="Vertical AI" links={VERTICALS} />
          <FooterColumn title="Company" links={COMPANY} />
        </div>
        <div className="foot-base">
          <p className="small">
            © 2026 Tattvix.ai &#183; Visakhapatnam, Andhra Pradesh, India
          </p>
          <p className="small">
            <a href="mailto:info@tattvix.ai">info@tattvix.ai</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
