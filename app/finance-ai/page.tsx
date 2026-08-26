import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Finance AI — AI for Close, Reconciliation & Reporting | Tattvix.ai",
  description: "Domain-trained AI for the finance function: reconciliation, AP/AR, month-end close, and reporting workflows — every action logged to an audit-ready trail.",
  alternates: {
    canonical: "https://tattvix.ai/finance-ai"
  },
  openGraph: {
    type: "website",
    siteName: "Tattvix.ai",
    title: "Finance AI — AI for Close, Reconciliation & Reporting | Tattvix.ai",
    description: "Domain-trained AI for the finance function: reconciliation, AP/AR, month-end close, and reporting workflows — every action logged to an audit-ready trail.",
    url: "https://tattvix.ai/finance-ai",
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
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Product\",\"name\":\"Finance AI\",\"description\":\"Domain-trained AI for the finance function: reconciliation, AP/AR, month-end close, and reporting workflows &#8212; every action logged to an audit-ready trail.\",\n\"brand\":{\"@type\":\"Organization\",\"name\":\"Tattvix.ai\"},\"url\":\"https://tattvix.ai/finance-ai\"}" }}
      />
      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb"><Link href="/">Home</Link> <span>/</span> <Link href="/solutions">Solutions</Link> <span>/</span> Finance AI</p>
          <div className="hero-split">
            <div>
              <p className="eyebrow">Fi · 06 · Vertical AI · Finance</p>
              <div className="section-head">
                <h1>Close faster. Audit cleaner.</h1>
                <p>Domain-trained AI for the finance function: reconciliation, AP/AR, month-end close, and reporting workflows — every action logged to an audit-ready trail.</p>
              </div>
              <div className="spec">
                <div className="cell"><span className="k">Runs on</span><span className="v">Autonoma platform</span></div>
                <div className="cell"><span className="k">Trail</span><span className="v">Audit-ready, always</span></div>
                <div className="cell"><span className="k">Fits</span><span className="v">Your ERP & books</span></div>
              </div>
              <div style={{ marginTop: "26px", display: "flex", gap: "12px", flexWrap: "wrap" }}><Link className="btn btn-copper" href="/request-demo">Request a demo</Link><Link className="btn btn-ghost" href="/solutions">All solutions</Link></div>
            </div>
            <div className="hero-visual reveal in"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Finance AI illustration">
      <rect width="520" height="340" fill="#F7F3EC" />
      <polygon points="76,110 118,134 118,182 76,206 34,182 34,134" fill="#2C1D12" />
      <text x="76" y="166" fontFamily="monospace" fontSize="20" fill="#C9973F" textAnchor="middle" fontWeight="bold">Fi</text>
      <line x1="118" y1="158" x2="150" y2="158" stroke="#C9973F" strokeWidth="2" strokeDasharray="5 5" />
      <rect x="150" y="84" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="109" fontFamily="monospace" fontSize="11" fill="#2C1D12">bank reconciliation · daily</text>
      <circle cx="392" cy="104" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 110)" /><rect x="150" y="140" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="165" fontFamily="monospace" fontSize="11" fill="#2C1D12">AP invoice matched & queued</text>
      <circle cx="392" cy="160" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 166)" /><rect x="150" y="196" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="221" fontFamily="monospace" fontSize="11" fill="#2C1D12">month-end close checklist</text>
      <circle cx="392" cy="216" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 222)" /><rect x="150" y="252" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="277" fontFamily="monospace" fontSize="11" fill="#2C1D12">exception → controller</text>
      <circle cx="392" cy="272" r="11" fill="#C9973F" /><text x="392" y="283" fontFamily="monospace" fontSize="11" fill="#fff" textAnchor="middle">→</text>
      <text x="260" y="316" fontFamily="monospace" fontSize="11" fill="#A85B34" textAnchor="middle">Finance AI · domain-trained · runs on Autonoma</text></svg></div>
          </div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">What Finance AI does</p>
            <h2>Capabilities</h2>
          </div>
          <div className="cards">
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Bank reconciliation</h3><p>Daily, automatic matching with exceptions surfaced — not buried.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>AP automation</h3><p>Invoice capture, three-way match, and approval routing without manual keying.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>AR follow-up</h3><p>Polite, persistent receivables chasing that improves days-sales-outstanding.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Month-end close</h3><p>A checklist that runs itself — journals, accruals, and sign-offs orchestrated.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Reporting</h3><p>Management packs and statutory schedules assembled from live, reconciled data.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Controller gates</h3><p>Judgment calls and threshold breaches always route to your finance leads.</p></article>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">How it works</p>
            <h2>Three steps to autonomous.</h2>
          </div>
          <div className="steps">
            <div className="step reveal">
              <p className="s-label">Step 01</p>
              <h3>Connect</h3>
              <p>Finance AI connects to your ERP, banks, and ledgers — read-first, with your controls.</p>
            </div>
            <div className="step reveal">
              <p className="s-label">Step 02</p>
              <h3>Automate</h3>
              <p>Reconciliation and AP/AR go autonomous; close orchestration follows.</p>
            </div>
            <div className="step reveal">
              <p className="s-label">Step 03</p>
              <h3>Assure</h3>
              <p>Every action is logged for audit; exceptions and judgment stay with your team.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="tight">
        <div className="wrap">
          <div className="cta-box reveal">
            <div>
              <p className="eyebrow" style={{ color: "#fff" }}>Get started</p>
              <h2>See Finance AI on your workflow.</h2>
              <p>A short demo against your real scenario — no slideware.</p>
            </div>
            <div className="cta-actions"><Link className="btn btn-gold" href="/request-demo">Request a demo</Link>
      <p className="mail">or write to <a href="mailto:info@tattvix.ai">info@tattvix.ai</a></p></div>
          </div>
        </div>
      </section>
    </>
  );
}
