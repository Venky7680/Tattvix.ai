import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Sales AI — AI for Pipeline, Outreach & Quote-to-Cash | Tattvix.ai",
  description: "Domain-trained AI for the revenue function: lead scoring and routing, outreach, pipeline hygiene, and quote-to-cash automation that sellers actually trust.",
  alternates: {
    canonical: "https://tattvix.ai/sales-ai"
  },
  openGraph: {
    type: "website",
    siteName: "Tattvix.ai",
    title: "Sales AI — AI for Pipeline, Outreach & Quote-to-Cash | Tattvix.ai",
    description: "Domain-trained AI for the revenue function: lead scoring and routing, outreach, pipeline hygiene, and quote-to-cash automation that sellers actually trust.",
    url: "https://tattvix.ai/sales-ai",
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
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Product\",\"name\":\"Sales AI\",\"description\":\"Domain-trained AI for the revenue function: lead scoring and routing, outreach, pipeline hygiene, and quote-to-cash automation that sellers actually trust.\",\n\"brand\":{\"@type\":\"Organization\",\"name\":\"Tattvix.ai\"},\"url\":\"https://tattvix.ai/sales-ai\"}" }}
      />
      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb"><Link href="/">Home</Link> <span>/</span> <Link href="/solutions">Solutions</Link> <span>/</span> Sales AI</p>
          <div className="hero-split">
            <div>
              <p className="eyebrow">Sa · 08 · Vertical AI · Revenue</p>
              <div className="section-head">
                <h1>Sellers sell. Sales AI does the rest.</h1>
                <p>Domain-trained AI for the revenue function: lead scoring and routing, outreach, pipeline hygiene, and quote-to-cash automation that sellers actually trust.</p>
              </div>
              <div className="spec">
                <div className="cell"><span className="k">Runs on</span><span className="v">Autonoma platform</span></div>
                <div className="cell"><span className="k">Fits</span><span className="v">Your CRM & CPQ</span></div>
                <div className="cell"><span className="k">Gating</span><span className="v">Big deals stay human</span></div>
              </div>
              <div style={{ marginTop: "26px", display: "flex", gap: "12px", flexWrap: "wrap" }}><Link className="btn btn-copper" href="/request-demo">Request a demo</Link><Link className="btn btn-ghost" href="/solutions">All solutions</Link></div>
            </div>
            <div className="hero-visual reveal in"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sales AI illustration">
      <rect width="520" height="340" fill="#F7F3EC" />
      <polygon points="76,110 118,134 118,182 76,206 34,182 34,134" fill="#2C1D12" />
      <text x="76" y="166" fontFamily="monospace" fontSize="20" fill="#C9973F" textAnchor="middle" fontWeight="bold">Sa</text>
      <line x1="118" y1="158" x2="150" y2="158" stroke="#C9973F" strokeWidth="2" strokeDasharray="5 5" />
      <rect x="150" y="84" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="109" fontFamily="monospace" fontSize="11" fill="#2C1D12">leads scored & routed</text>
      <circle cx="392" cy="104" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 110)" /><rect x="150" y="140" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="165" fontFamily="monospace" fontSize="11" fill="#2C1D12">follow-ups drafted & sent</text>
      <circle cx="392" cy="160" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 166)" /><rect x="150" y="196" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="221" fontFamily="monospace" fontSize="11" fill="#2C1D12">quote generated from CPQ</text>
      <circle cx="392" cy="216" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 222)" /><rect x="150" y="252" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="277" fontFamily="monospace" fontSize="11" fill="#2C1D12">big deal → account exec</text>
      <circle cx="392" cy="272" r="11" fill="#C9973F" /><text x="392" y="283" fontFamily="monospace" fontSize="11" fill="#fff" textAnchor="middle">→</text>
      <text x="260" y="316" fontFamily="monospace" fontSize="11" fill="#A85B34" textAnchor="middle">Sales AI · domain-trained · runs on Autonoma</text></svg></div>
          </div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">What Sales AI does</p>
            <h2>Capabilities</h2>
          </div>
          <div className="cards">
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Lead scoring & routing</h3><p>Every lead scored on your real win patterns and routed to the right rep in minutes.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Outreach automation</h3><p>Personalised follow-ups drafted and sent — persistent without being spammy.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Pipeline hygiene</h3><p>Stages, next steps, and close dates kept honest automatically.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Quote generation</h3><p>CPQ-driven quotes assembled and approved by policy, not by waiting.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Forecast signals</h3><p>Deal-level risk flags from activity, engagement, and history.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Rep-first design</h3><p>Sales AI works for your sellers; strategic deals always stay in their hands.</p></article>
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
              <h3>Sync</h3>
              <p>Sales AI connects to your CRM and learns your historical win/loss patterns.</p>
            </div>
            <div className="step reveal">
              <p className="s-label">Step 02</p>
              <h3>Assist</h3>
              <p>Scoring, hygiene, and follow-ups run autonomously; reps see the lift immediately.</p>
            </div>
            <div className="step reveal">
              <p className="s-label">Step 03</p>
              <h3>Accelerate</h3>
              <p>Quote-to-cash automation follows, cutting cycle time where deals used to stall.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="tight">
        <div className="wrap">
          <div className="cta-box reveal">
            <div>
              <p className="eyebrow" style={{ color: "#fff" }}>Get started</p>
              <h2>See Sales AI on your workflow.</h2>
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
