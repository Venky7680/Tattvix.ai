import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Contact Tattvix.ai — info@tattvix.ai | Visakhapatnam, India",
  description: "Contact Tattvix.ai at info@tattvix.ai for demos of OTTO, Autonoma, IraOps, Voice AI, data platforms, or custom AI solutions. Based in Visakhapatnam, Andhra Pradesh, India.",
  alternates: {
    canonical: "https://tattvix.ai/contact"
  },
  openGraph: {
    type: "website",
    siteName: "Tattvix.ai",
    title: "Contact Tattvix.ai — info@tattvix.ai | Visakhapatnam, India",
    description: "Contact Tattvix.ai at info@tattvix.ai for demos of OTTO, Autonoma, IraOps, Voice AI, data platforms, or custom AI solutions. Based in Visakhapatnam, Andhra Pradesh, India.",
    url: "https://tattvix.ai/contact",
    images: [
      "https://tattvix.ai/assets/tattvix-logo-full.png"
    ]
  },
  twitter: {
    card: "summary_large_image"
  },
  robots: "index, follow"
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ContactPage\",\"name\":\"Contact Tattvix.ai\",\"url\":\"https://tattvix.ai/contact\",\"mainEntity\":{\"@type\":\"Organization\",\"name\":\"Tattvix.ai\",\"email\":\"info@tattvix.ai\",\"contactPoint\":{\"@type\":\"ContactPoint\",\"email\":\"info@tattvix.ai\",\"contactType\":\"sales\",\"areaServed\":\"Worldwide\"},\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"Visakhapatnam\",\"addressRegion\":\"Andhra Pradesh\",\"addressCountry\":\"IN\"}}}" }}
      />
      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb"><Link href="/">Home</Link> <span>/</span> Contact</p>
          <div className="section-head">
            <p className="eyebrow">Contact us</p>
            <h1>Tell us where the friction is.</h1>
            <p>Whether it's cloud operations, a call queue, a data backlog, or a business function running on spreadsheets — one email starts the conversation.</p>
          </div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="contact-grid">
            <div className="info-card reveal"><h3>Contact us</h3>
      <p>For demos, partnerships, or anything else — write to us and we reply within two business days.</p>
      <a className="big-mail" href="mailto:info@tattvix.ai">info@tattvix.ai</a>
      <div className="platform-row" style={{ marginTop: "20px" }}>
      <a className="platform" href="mailto:info@tattvix.ai?subject=Demo%20request%20—%20OTTO">OTTO demo</a>
      <a className="platform" href="mailto:info@tattvix.ai?subject=Demo%20request%20—%20Autonoma">Autonoma demo</a>
      <a className="platform" href="mailto:info@tattvix.ai?subject=Demo%20request%20—%20IraOps">IraOps demo</a>
      <a className="platform" href="mailto:info@tattvix.ai?subject=Enquiry%20—%20Data%20Platforms">Data platforms</a>
      <a className="platform" href="mailto:info@tattvix.ai?subject=Enquiry%20—%20Custom%20AI">Custom AI</a>
      </div>
      <div style={{ marginTop: "22px" }}><Link className="btn btn-copper" href="/request-demo">Or use the demo request form →</Link></div>
      </div>
            <div className="info-card reveal">
              <h3>Where we are</h3>
              <p>Tattvix.ai is headquartered in Visakhapatnam, on India's east coast — and works with clients wherever their clouds run.</p>
              <address><strong>Tattvix.ai</strong><br />Visakhapatnam, Andhra Pradesh<br />India</address>
              <p style={{ marginTop: "14px", fontFamily: "var(--fm)", fontSize: ".74rem", letterSpacing: ".03em" }}>EST. 2026 · AI PRODUCTS ▪ AI SERVICES ▪ AI-BASED DATA SERVICES</p>
            </div>
          </div>
        </div>
      </section>
      <section className="tight">
        <div className="wrap">
          <div className="cta-box reveal">
            <div>
              <p className="eyebrow" style={{ color: "#fff" }}>Get started</p>
              <h2>Not sure where to start?</h2>
              <p>Browse the full portfolio — every solution, its category, and the platforms it runs on, in one table.</p>
            </div>
            <div className="cta-actions"><Link className="btn btn-gold" href="/solutions">See the solutions index</Link>
      <p className="mail">or write to <a href="mailto:info@tattvix.ai">info@tattvix.ai</a></p></div>
          </div>
        </div>
      </section>
    </>
  );
}
