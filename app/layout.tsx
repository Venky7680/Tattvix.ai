import type { Metadata, Viewport } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import RevealOnScroll from '@/components/RevealOnScroll';
import { LOGO_DATA_URI } from '@/lib/logo';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tattvix.ai'),
  icons: { icon: [{ url: LOGO_DATA_URI, type: 'image/png' }] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Hoisted into <head> by React. Kept as plain links so the font
            loading behaviour matches the original static pages exactly. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          precedence="default"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
        />
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: '.reveal{opacity:1!important;transform:none!important}',
            }}
          />
        </noscript>

        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <RevealOnScroll />
      </body>
    </html>
  );
}
