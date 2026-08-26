import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "HR AI — AI for Hiring, Onboarding & Employee Lifecycle | Tattvix.ai",
  description: "Domain-trained AI for the HR function: screening and scheduling, onboarding, policy answers, and employee lifecycle workflows — automated with care and human oversight on sensitive matters.",
  alternates: {
    canonical: "https://tattvix.ai/hr-ai"
  },
  openGraph: {
    type: "website",
    siteName: "Tattvix.ai",
    title: "HR AI — AI for Hiring, Onboarding & Employee Lifecycle | Tattvix.ai",
    description: "Domain-trained AI for the HR function: screening and scheduling, onboarding, policy answers, and employee lifecycle workflows — automated with care and human oversight on sensitive matters.",
    url: "https://tattvix.ai/hr-ai",
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
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Product\",\"name\":\"HR AI\",\"description\":\"Domain-trained AI for the HR function: screening and scheduling, onboarding, policy answers, and employee lifecycle workflows &#8212; automated with care and human oversight on sensitive matters.\",\n\"brand\":{\"@type\":\"Organization\",\"name\":\"Tattvix.ai\"},\"url\":\"https://tattvix.ai/hr-ai\"}" }}
      />
      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb"><Link href="/">Home</Link> <span>/</span> <Link href="/solutions">Solutions</Link> <span>/</span> HR AI</p>
          <div className="hero-split">
            <div>
              <p className="eyebrow">Hr · 05 · Vertical AI · Human Resources</p>
              <div className="section-head">
                <h1>People work, without the paperwork.</h1>
                <p>Domain-trained AI for the HR function: screening and scheduling, onboarding, policy answers, and employee lifecycle workflows — automated with care and human oversight on sensitive matters.</p>
              </div>
              <div className="spec">
                <div className="cell"><span className="k">Runs on</span><span className="v">Autonoma platform</span></div>
                <div className="cell"><span className="k">Oversight</span><span className="v">HR-gated for sensitive cases</span></div>
                <div className="cell"><span className="k">Deploy</span><span className="v">Weeks, on your HRIS</span></div>
              </div>
              <div style={{ marginTop: "26px", display: "flex", gap: "12px", flexWrap: "wrap" }}><Link className="btn btn-copper" href="/request-demo">Request a demo</Link><Link className="btn btn-ghost" href="/solutions">All solutions</Link></div>
            </div>
            <div className="hero-visual reveal in"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HR AI illustration">
      <rect width="520" height="340" fill="#F7F3EC" />
      <polygon points="76,110 118,134 118,182 76,206 34,182 34,134" fill="#2C1D12" />
      <text x="76" y="166" fontFamily="monospace" fontSize="20" fill="#C9973F" textAnchor="middle" fontWeight="bold">Hr</text>
      <line x1="118" y1="158" x2="150" y2="158" stroke="#C9973F" strokeWidth="2" strokeDasharray="5 5" />
      <rect x="150" y="84" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="109" fontFamily="monospace" fontSize="11" fill="#2C1D12">screen & rank applicants</text>
      <circle cx="392" cy="104" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 110)" /><rect x="150" y="140" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="165" fontFamily="monospace" fontSize="11" fill="#2C1D12">onboard new joiner · day 1</text>
      <circle cx="392" cy="160" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 166)" /><rect x="150" y="196" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="221" fontFamily="monospace" fontSize="11" fill="#2C1D12">policy Q&A · instant</text>
      <circle cx="392" cy="216" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 222)" /><rect x="150" y="252" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="277" fontFamily="monospace" fontSize="11" fill="#2C1D12">sensitive case → HR team</text>
      <circle cx="392" cy="272" r="11" fill="#C9973F" /><text x="392" y="283" fontFamily="monospace" fontSize="11" fill="#fff" textAnchor="middle">→</text>
      <text x="260" y="316" fontFamily="monospace" fontSize="11" fill="#A85B34" textAnchor="middle">HR AI · domain-trained · runs on Autonoma</text></svg></div>
          </div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">What HR AI does</p>
            <h2>Capabilities</h2>
          </div>
          <div className="cards">
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Applicant screening</h3><p>Rank and shortlist against your criteria — consistently, transparently, and fast.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Interview scheduling</h3><p>Coordination across panels and calendars handled end-to-end.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Onboarding automation</h3><p>Accounts, equipment, training plans, and day-one readiness without checklists falling through.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Policy Q&A</h3><p>Instant, accurate answers from your policy documents — leave, benefits, expenses.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Lifecycle workflows</h3><p>Transfers, confirmations, and exits run themselves, with records kept clean.</p></article>
            <article className="pcard reveal"><span className="tag">Capability</span><h3>Sensitive-case gating</h3><p>Grievances, performance, and personal matters always route to a human in HR.</p></article>
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
              <h3>Map</h3>
              <p>We map your HR workflows and connect HR AI to your HRIS and policy documentation.</p>
            </div>
            <div className="step reveal">
              <p className="s-label">Step 02</p>
              <h3>Automate</h3>
              <p>High-volume workflows go autonomous first: screening, scheduling, onboarding, Q&A.</p>
            </div>
            <div className="step reveal">
              <p className="s-label">Step 03</p>
              <h3>Extend</h3>
              <p>Lifecycle and analytics workflows follow, with HR always in control of the sensitive edge.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="tight">
        <div className="wrap">
          <div className="cta-box reveal">
            <div>
              <p className="eyebrow" style={{ color: "#fff" }}>Get started</p>
              <h2>See HR AI on your workflow.</h2>
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
