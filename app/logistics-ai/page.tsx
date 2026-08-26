import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Logistics AI — AI for Demand, Routing & Supply Chain | Tattvix.ai",
  description: "Domain-trained AI for logistics and supply chain: demand forecasting, route optimisation, exception handling, and supplier coordination across your network.",
  alternates: {
    canonical: "https://tattvix.ai/logistics-ai"
  },
  openGraph: {
    type: "website",
    siteName: "Tattvix.ai",
    title: "Logistics AI — AI for Demand, Routing & Supply Chain | Tattvix.ai",
    description: "Domain-trained AI for logistics and supply chain: demand forecasting, route optimisation, exception handling, and supplier coordination across your network.",
    url: "https://tattvix.ai/logistics-ai",
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
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Product\",\"name\":\"Logistics AI\",\"description\":\"Domain-trained AI for logistics and supply chain: demand forecasting, route optimisation, exception handling, and supplier coordination across your network.\",\n\"brand\":{\"@type\":\"Organization\",\"name\":\"Tattvix.ai\"},\"url\":\"https://tattvix.ai/logistics-ai\"}" }}
      />
      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb"><Link href="/">Home</Link> <span>/</span> <Link href="/solutions">Solutions</Link> <span>/</span> Logistics AI</p>
          <div className="hero-split">
            <div>
              <p className="eyebrow">Lg · 07 · Vertical AI · Supply Chain</p>
              <div className="section-head">
                <h1>Supply chains that steer themselves.</h1>
                <p>Domain-trained AI for logistics and supply chain: demand forecasting, route optimisation, exception handling, and supplier coordination across your network.</p>
              </div>
              <div className="spec">
                <div className="cell"><span className="k">Runs on</span><span className="v">Autonoma platform</span></div>
                <div className="cell"><span className="k">Signals</span><span className="v">POS, ERP, telematics</span></div>
                <div className="cell"><span className="k">Focus</span><span className="v">SMB & retail networks</span></div>
              </div>
              <div style={{ marginTop: "26px", display: "flex", gap: "12px", flexWrap: "wrap" }}><Link className="btn btn-copper" href="/request-demo">Request a demo</Link><Link className="btn btn-ghost" href="/solutions">All solutions</Link></div>
            </div>
            <div className="hero-visual reveal in"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logistics AI illustration">
      <rect width="520" height="340" fill="#F7F3EC" />
      <polygon points="76,110 118,134 118,182 76,206 34,182 34,134" fill="#2C1D12" />
      <text x="76" y="166" fontFamily="monospace" fontSize="20" fill="#C9973F" textAnchor="middle" fontWeight="bold">Lg</text>
      <line x1="118" y1="158" x2="150" y2="158" stroke="#C9973F" strokeWidth="2" strokeDasharray="5 5" />
      <rect x="150" y="84" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="109" fontFamily="monospace" fontSize="11" fill="#2C1D12">demand forecast · weekly</text>
      <circle cx="392" cy="104" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 110)" /><rect x="150" y="140" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="165" fontFamily="monospace" fontSize="11" fill="#2C1D12">route plan optimised</text>
      <circle cx="392" cy="160" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 166)" /><rect x="150" y="196" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="221" fontFamily="monospace" fontSize="11" fill="#2C1D12">delay exception handled</text>
      <circle cx="392" cy="216" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 222)" /><rect x="150" y="252" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="277" fontFamily="monospace" fontSize="11" fill="#2C1D12">supplier dispute → ops lead</text>
      <circle cx="392" cy="272" r="11" fill="#C9973F" /><text x="392" y="283" fontFamily="monospace" fontSize="11" fill="#fff" textAnchor="middle">→</text>
      <text x="260" y="316" fontFamily="monospace" fontSize="11" fill="#A85B34" textAnchor="middle">Logistics AI · domain-trained · runs on Autonoma</text></svg></div>
          </div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">What Logistics AI does</p>
            <h2>Capabilities</h2>
          </div>
          <div className="cards">
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Demand forecasting</h3><p>Store- and SKU-level forecasts from your own sales signals — not generic curves.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Route optimisation</h3><p>Daily plans that respect vehicles, windows, and costs — replanned when reality changes.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Exception handling</h3><p>Delays, shortages, and failures handled by playbook, escalated when they matter.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Supplier coordination</h3><p>POs, confirmations, and follow-ups run automatically across your vendor base.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Inventory balance</h3><p>Replenishment suggestions that cut both stockouts and dead stock.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Ops-lead gating</h3><p>Disputes and high-value calls always land with your operations lead.</p></article>
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
              <h3>Learn</h3>
              <p>Logistics AI learns your network from POS, ERP, and movement data.</p>
            </div>
            <div className="step reveal">
              <p className="s-label">Step 02</p>
              <h3>Plan</h3>
              <p>Forecasts and route plans go live alongside your planners, measured for accuracy.</p>
            </div>
            <div className="step reveal">
              <p className="s-label">Step 03</p>
              <h3>Run</h3>
              <p>Day-to-day exceptions and supplier loops run autonomously; strategy stays with you.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="tight">
        <div className="wrap">
          <div className="cta-box reveal">
            <div>
              <p className="eyebrow" style={{ color: "#fff" }}>Get started</p>
              <h2>See Logistics AI on your workflow.</h2>
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
