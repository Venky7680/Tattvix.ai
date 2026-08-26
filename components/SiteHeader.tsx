/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOGO_DATA_URI } from '@/lib/logo';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/data-platforms', label: 'Data Platforms' },
  { href: '/ai-services', label: 'AI Services' },
  { href: '/contact', label: 'Contact' },
];

/**
 * Which nav entry is marked `aria-current` for a given route. Product and
 * vertical pages sit under Solutions, and /request-demo highlights nothing —
 * matching the original static pages.
 */
const SOLUTION_ROUTES = [
  '/solutions', '/otto', '/autonoma', '/iraops', '/voice-ai',
  '/hr-ai', '/finance-ai', '/logistics-ai', '/sales-ai', '/legal-ai',
];

function currentNavHref(pathname: string): string | null {
  if (SOLUTION_ROUTES.includes(pathname)) return '/solutions';
  return NAV.some((n) => n.href === pathname) ? pathname : null;
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const current = currentNavHref(pathname);

  return (
    <header className="site">
      <div className="wrap nav">
        <Link className="logo" href="/" aria-label="Tattvix.ai home">
          <img src={LOGO_DATA_URI} alt="Tattvix.ai logo" width={36} height={36} />
          <span>
            tattvix<b>.ai</b>
          </span>
        </Link>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
        <nav
          className={open ? 'nav-links open' : 'nav-links'}
          id="nav-links"
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={current === item.href ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="btn btn-copper nav-cta" href="/request-demo">
          Request a demo
        </Link>
      </div>
    </header>
  );
}
