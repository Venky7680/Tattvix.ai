import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Custom AI Solutions — Azure AI Foundry, OpenAI, Huawei ModelArts, AWS Bedrock | Tattvix.ai",
  description: "Tattvix.ai builds custom AI solutions on Azure AI Foundry, OpenAI, Huawei ModelArts, and AWS Bedrock — copilots, RAG systems, document intelligence, and fine-tuned domain models.",
  alternates: {
    canonical: "https://tattvix.ai/ai-services"
  },
  openGraph: {
    type: "website",
    siteName: "Tattvix.ai",
    title: "Custom AI Solutions — Azure AI Foundry, OpenAI, Huawei ModelArts, AWS Bedrock | Tattvix.ai",
    description: "Tattvix.ai builds custom AI solutions on Azure AI Foundry, OpenAI, Huawei ModelArts, and AWS Bedrock — copilots, RAG systems, document intelligence, and fine-tuned domain models.",
    url: "https://tattvix.ai/ai-services",
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
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"name\":\"Custom AI Solutions\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Tattvix.ai\"},\"serviceType\":\"AI solution engineering\",\"description\":\"Custom AI solutions on Azure AI Foundry, OpenAI, Huawei ModelArts, and AWS Bedrock.\",\"areaServed\":\"Worldwide\"}" }}
      />
      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb"><Link href="/">Home</Link> <span>/</span> AI Services</p>
          <div className="hero-split">
            <div>
              <p className="eyebrow">Ai · Custom AI Solutions</p>
              <div className="section-head">
                <h1>AI built around your workflows — not the other way round.</h1>
                <p>Beyond our products, we build custom AI solutions on the platform your organisation already trusts — Azure AI Foundry, OpenAI, Huawei ModelArts, or AWS Bedrock — from first prototype to production.</p>
              </div>
              <div className="platform-row"><span className="platform">Azure AI Foundry</span><span className="platform">OpenAI</span><span className="platform">Huawei ModelArts</span><span className="platform">AWS Bedrock</span></div>
              <div style={{ marginTop: "26px" }}><Link className="btn btn-copper" href="/request-demo">Scope a prototype</Link></div>
            </div>
            <div className="hero-visual reveal in"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Custom AI solutions on four platforms">
      <rect width="520" height="340" fill="#F7F3EC" />
      <g><rect x="12" y="43" width="146" height="34" rx="9" fill="#fff" stroke="#17948A" strokeWidth="1.8" /><text x="85" y="65" fontFamily="monospace" fontSize="10.5" fill="#0E6B64" textAnchor="middle">Azure AI Foundry</text><line x1="85" y1="77" x2="260" y2="124" stroke="#C9973F" strokeWidth="1.8" strokeDasharray="5 6" opacity=".7" /></g><g><rect x="322" y="43" width="146" height="34" rx="9" fill="#fff" stroke="#17948A" strokeWidth="1.8" /><text x="395" y="65" fontFamily="monospace" fontSize="10.5" fill="#0E6B64" textAnchor="middle">OpenAI</text><line x1="395" y1="77" x2="260" y2="124" stroke="#C9973F" strokeWidth="1.8" strokeDasharray="5 6" opacity=".7" /></g><g><rect x="12" y="263" width="146" height="34" rx="9" fill="#fff" stroke="#17948A" strokeWidth="1.8" /><text x="85" y="285" fontFamily="monospace" fontSize="10.5" fill="#0E6B64" textAnchor="middle">ModelArts</text><line x1="85" y1="263" x2="260" y2="216" stroke="#C9973F" strokeWidth="1.8" strokeDasharray="5 6" opacity=".7" /></g><g><rect x="322" y="263" width="146" height="34" rx="9" fill="#fff" stroke="#17948A" strokeWidth="1.8" /><text x="395" y="285" fontFamily="monospace" fontSize="10.5" fill="#0E6B64" textAnchor="middle">AWS Bedrock</text><line x1="395" y1="263" x2="260" y2="216" stroke="#C9973F" strokeWidth="1.8" strokeDasharray="5 6" opacity=".7" /></g>
      <polygon points="260,116 312,146 312,194 260,224 208,194 208,146" fill="#2C1D12" />
      <polygon points="260,127 302,151 302,189 260,213 218,189 218,151" fill="none" stroke="#C9973F" strokeWidth="2" />
      <text x="260" y="164" fontFamily="monospace" fontSize="11" fill="#EBD3A3" textAnchor="middle">your custom</text>
      <text x="260" y="182" fontFamily="monospace" fontSize="11" fill="#C9973F" textAnchor="middle" fontWeight="bold">AI solution</text>
      <text x="260" y="322" fontFamily="monospace" fontSize="11" fill="#A85B34" textAnchor="middle">copilots · RAG · document intelligence · fine-tuned models</text></svg></div>
          </div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">What we build</p>
            <h2>From copilots to fine-tuned domain models.</h2>
          </div>
          <div className="cards four">
            <article className="pcard reveal"><span className="tag">Build · 01</span><h3>Copilots & assistants</h3><p>Role-specific AI assistants embedded in the tools your team already uses — grounded in your data, governed by your policies.</p></article>
            <article className="pcard reveal"><span className="tag">Build · 02</span><h3>RAG & knowledge systems</h3><p>Retrieval-augmented systems that answer from your documents and databases — with citations, not guesses.</p></article>
            <article className="pcard reveal"><span className="tag">Build · 03</span><h3>Document intelligence</h3><p>Extraction, classification, and summarisation across invoices, contracts, and forms — feeding straight into workflows.</p></article>
            <article className="pcard reveal"><span className="tag">Build · 04</span><h3>Fine-tuned models</h3><p>Models tuned on your domain's language and decisions, deployed privately on your platform of choice.</p></article>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Platform expertise</p>
            <h2>Four platforms, deep on each.</h2>
            <p>We recommend the platform that fits your cloud estate, data residency needs, and cost profile — then build natively on it.</p>
          </div>
          <div className="cards two">
            <article className="pcard reveal"><span className="tag teal">Azure</span><h3>Azure AI Foundry</h3><p>Enterprise AI on Azure — model catalog, prompt flows, evaluations, and content safety in one governed environment. Pairs directly with the Fabric data platforms we build.</p></article>
            <article className="pcard reveal"><span className="tag teal">OpenAI</span><h3>OpenAI</h3><p>Frontier model capability via the OpenAI platform — assistants, structured outputs, and function calling where reasoning quality matters most.</p></article>
            <article className="pcard reveal"><span className="tag teal">Huawei</span><h3>Huawei ModelArts</h3><p>Full-lifecycle AI development on Huawei Cloud — data labelling, training, and one-click deployment, integrating cleanly with DataArts pipelines.</p></article>
            <article className="pcard reveal"><span className="tag teal">AWS</span><h3>AWS Bedrock</h3><p>Managed access to leading foundation models on AWS — Knowledge Bases, Agents, and Guardrails — inside your existing AWS security perimeter.</p></article>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">How an engagement runs</p>
            <h2>Prototype fast. Productionise properly.</h2>
          </div>
          <div className="steps">
            <div className="step reveal">
              <p className="s-label">Weeks 1–2</p>
              <h3>Scope & prototype</h3>
              <p>One use case, wired to real (sampled) data, working prototype in your hands — decisions made on evidence.</p>
            </div>
            <div className="step reveal">
              <p className="s-label">Weeks 3–6</p>
              <h3>Harden & evaluate</h3>
              <p>Evaluation suites, guardrails, security review, and integration — the unglamorous work that makes AI dependable.</p>
            </div>
            <div className="step reveal">
              <p className="s-label">Ongoing</p>
              <h3>Operate & improve</h3>
              <p>Monitored in production by our own OTTO tooling, with usage analytics and continuous improvement built in.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="tight">
        <div className="wrap">
          <div className="cta-box reveal">
            <div>
              <p className="eyebrow" style={{ color: "#fff" }}>Get started</p>
              <h2>Bring us a use case.</h2>
              <p>Tell us the workflow and the platform you prefer — or let us recommend one — and we'll scope a prototype.</p>
            </div>
            <div className="cta-actions"><Link className="btn btn-gold" href="/request-demo">Scope a prototype</Link>
      <p className="mail">or write to <a href="mailto:info@tattvix.ai">info@tattvix.ai</a></p></div>
          </div>
        </div>
      </section>
    </>
  );
}
