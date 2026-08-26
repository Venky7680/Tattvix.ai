import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Legal AI — AI for Contract Review & Compliance | Tattvix.ai",
  description: "Domain-trained AI for the legal function: contract review, clause intelligence, deviation flagging against your playbook, and compliance workflows — with counsel always in the loop.",
  alternates: {
    canonical: "https://tattvix.ai/legal-ai"
  },
  openGraph: {
    type: "website",
    siteName: "Tattvix.ai",
    title: "Legal AI — AI for Contract Review & Compliance | Tattvix.ai",
    description: "Domain-trained AI for the legal function: contract review, clause intelligence, deviation flagging against your playbook, and compliance workflows — with counsel always in the loop.",
    url: "https://tattvix.ai/legal-ai",
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
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Product\",\"name\":\"Legal AI\",\"description\":\"Domain-trained AI for the legal function: contract review, clause intelligence, deviation flagging against your playbook, and compliance workflows &#8212; with counsel always in the loop.\",\n\"brand\":{\"@type\":\"Organization\",\"name\":\"Tattvix.ai\"},\"url\":\"https://tattvix.ai/legal-ai\"}" }}
      />
      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb"><Link href="/">Home</Link> <span>/</span> <Link href="/solutions">Solutions</Link> <span>/</span> Legal AI</p>
          <div className="hero-split">
            <div>
              <p className="eyebrow">Le · 09 · Vertical AI · Legal</p>
              <div className="section-head">
                <h1>Counsel-grade review, at machine speed.</h1>
                <p>Domain-trained AI for the legal function: contract review, clause intelligence, deviation flagging against your playbook, and compliance workflows — with counsel always in the loop.</p>
              </div>
              <div className="spec">
                <div className="cell"><span className="k">Runs on</span><span className="v">Autonoma platform</span></div>
                <div className="cell"><span className="k">Review</span><span className="v">Against your playbook</span></div>
                <div className="cell"><span className="k">Loop</span><span className="v">Counsel-gated, always</span></div>
              </div>
              <div style={{ marginTop: "26px", display: "flex", gap: "12px", flexWrap: "wrap" }}><Link className="btn btn-copper" href="/request-demo">Request a demo</Link><Link className="btn btn-ghost" href="/solutions">All solutions</Link></div>
            </div>
            <div className="hero-visual reveal in"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Legal AI illustration">
      <rect width="520" height="340" fill="#F7F3EC" />
      <polygon points="76,110 118,134 118,182 76,206 34,182 34,134" fill="#2C1D12" />
      <text x="76" y="166" fontFamily="monospace" fontSize="20" fill="#C9973F" textAnchor="middle" fontWeight="bold">Le</text>
      <line x1="118" y1="158" x2="150" y2="158" stroke="#C9973F" strokeWidth="2" strokeDasharray="5 5" />
      <rect x="150" y="84" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="109" fontFamily="monospace" fontSize="11" fill="#2C1D12">contract clauses extracted</text>
      <circle cx="392" cy="104" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 110)" /><rect x="150" y="140" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="165" fontFamily="monospace" fontSize="11" fill="#2C1D12">deviations vs playbook flagged</text>
      <circle cx="392" cy="160" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 166)" /><rect x="150" y="196" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="221" fontFamily="monospace" fontSize="11" fill="#2C1D12">renewal calendar updated</text>
      <circle cx="392" cy="216" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 222)" /><rect x="150" y="252" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="277" fontFamily="monospace" fontSize="11" fill="#2C1D12">negotiation → counsel</text>
      <circle cx="392" cy="272" r="11" fill="#C9973F" /><text x="392" y="283" fontFamily="monospace" fontSize="11" fill="#fff" textAnchor="middle">→</text>
      <text x="260" y="316" fontFamily="monospace" fontSize="11" fill="#A85B34" textAnchor="middle">Legal AI · domain-trained · runs on Autonoma</text></svg></div>
          </div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">What Legal AI does</p>
            <h2>Capabilities</h2>
          </div>
          <div className="cards">
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Contract review</h3><p>First-pass review of NDAs, MSAs, and vendor paper in minutes, not days.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Clause intelligence</h3><p>Extraction and comparison of key clauses across your whole contract base.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Playbook deviations</h3><p>Non-standard terms flagged against your negotiating positions.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Obligation tracking</h3><p>Renewals, notice periods, and commitments tracked and surfaced in time.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Compliance workflows</h3><p>Policy attestations and regulatory checklists run on schedule.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Counsel-in-the-loop</h3><p>Every judgment and negotiation decision routes to your legal team.</p></article>
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
              <h3>Ingest</h3>
              <p>Legal AI ingests your templates, playbook, and contract repository.</p>
            </div>
            <div className="step reveal">
              <p className="s-label">Step 02</p>
              <h3>Review</h3>
              <p>New paper gets first-pass review and deviation flags automatically.</p>
            </div>
            <div className="step reveal">
              <p className="s-label">Step 03</p>
              <h3>Track</h3>
              <p>Obligations and renewals surface on time; counsel decides, Legal AI executes.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="tight">
        <div className="wrap">
          <div className="cta-box reveal">
            <div>
              <p className="eyebrow" style={{ color: "#fff" }}>Get started</p>
              <h2>See Legal AI on your workflow.</h2>
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
