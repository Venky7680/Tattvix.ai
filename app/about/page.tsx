import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About Tattvix.ai — Who We Are, Mission, Vision & Founders",
  description: "Tattvix.ai: founded 2026 by industry veterans with 25+ years delivering complex engagements. Our mission: build intelligence into every business operation through AI products, AI services, and AI-based data services — affordably.",
  alternates: {
    canonical: "https://tattvix.ai/about"
  },
  openGraph: {
    type: "website",
    siteName: "Tattvix.ai",
    title: "About Tattvix.ai — Who We Are, Mission, Vision & Founders",
    description: "Tattvix.ai: founded 2026 by industry veterans with 25+ years delivering complex engagements. Our mission: build intelligence into every business operation through AI products, AI services, and AI-based data services — affordably.",
    url: "https://tattvix.ai/about",
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
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"Tattvix.ai\",\"url\":\"https://tattvix.ai\",\n\"logo\":\"https://tattvix.ai/assets/tattvix-logo-full.png\",\"email\":\"info@tattvix.ai\",\"foundingDate\":\"2026\",\n\"slogan\":\"Intelligence built in. Affordability by design.\",\n\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"Visakhapatnam\",\"addressRegion\":\"Andhra Pradesh\",\"addressCountry\":\"IN\"},\n\"description\":\"Tattvix.ai builds AI products (OTTO, Autonoma, IraOps, Voice AI, Vertical AI), AI-based data services on Microsoft Fabric, Huawei DataArts and Apache stack, and custom AI services on Azure AI Foundry, OpenAI, Huawei ModelArts and AWS Bedrock.\"}" }}
      />
      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb"><Link href="/">Home</Link> <span>/</span> About</p>
          <div className="section-head">
            <p className="eyebrow">About Tattvix.ai</p>
            <h1>Intelligence for the businesses that build everything else.</h1>
            <p>Established in 2026 in Visakhapatnam, India — a core AI products and solutions company with one belief: intelligence should be built in, and affordability should be by design.</p>
          </div>
        </div>
      </div>
      <section id="who-we-are">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Who we are</p>
            <h2>A product company, not a project shop.</h2>
          </div>
          <div className="prose reveal" style={{ marginTop: "24px" }}>
            <p><strong>Tattvix.ai is a core AI products and solutions company.</strong> The name comes from <em>tattva</em> — Sanskrit for "element", a fundamental principle. It's how we think about our work: every business runs on a set of elemental operations — keeping infrastructure healthy, answering customers, moving data, closing books — and each of those elements can now run itself.</p>
            <p>Our portfolio spans three connected pillars. <strong>AI products</strong>: OTTO for automated cloud operations, Autonoma for agent orchestration, IraOps for the service desk, Voice AI, and five vertical AI solutions. <strong>AI-based data services</strong>: data warehousing and intelligence platforms on Microsoft Fabric, Huawei DataArts, and the Apache stack. <strong>AI services</strong>: custom-built solutions on Azure AI Foundry, OpenAI, Huawei ModelArts, and AWS Bedrock.</p>
            <p>Enterprise-grade automation has historically demanded enterprise-grade budgets. We exist to break that link — building intelligence into daily operations at a price that makes adoption a certainty, not a luxury.</p>
          </div>
          <div className="chips">
            <div className="chip reveal"><span className="c-label">Value 01</span><h4>Intelligence built in</h4><p>AI isn't a bolt-on feature — it's the operating principle of everything we ship.</p></div>
            <div className="chip reveal"><span className="c-label">Value 02</span><h4>Affordability by design</h4><p>Priced and packaged so growing businesses can say yes.</p></div>
            <div className="chip reveal"><span className="c-label">Value 03</span><h4>Human-in-the-loop</h4><p>Automation with approval gates, full audit trails, and people in control.</p></div>
            <div className="chip reveal"><span className="c-label">Value 04</span><h4>Platform-agnostic</h4><p>AWS, Azure, GCP, Huawei — we meet you where you already run.</p></div>
          </div>
        </div>
      </section>
      <section id="mission" className="band">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Mission & Vision</p>
            <h2>Why Tattvix exists.</h2>
          </div>
          <div className="mv-grid">
            <div className="mv mission reveal"><span className="mv-label">Our Mission</span>
      <h3>To build intelligence into every business operation — through AI products, AI services, and AI-based data services that any growing company can afford.</h3>
      <p>We replace manual, repetitive operational effort with reliable, always-on intelligent systems — making enterprise-grade AI a certainty for SMBs and retail businesses, not a luxury.</p></div>
            <div className="mv vision reveal"><span className="mv-label">Our Vision</span>
      <h3>A world where every business — whatever its size — runs on intelligence: self-managing operations, self-serving data, and AI woven into every decision.</h3>
      <p>Where affordability is never the reason a business is left behind, and teams spend their time on growth instead of upkeep.</p></div>
          </div>
        </div>
      </section>
      <section id="founders">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">From the founders</p>
            <h2>Built by people who've done this before.</h2>
          </div>
          <div className="founder-box reveal">
            <div className="prose">
              <p><strong>Tattvix.ai is founded and led by proven industry leaders and technology veterans, each with over 25 years of experience delivering across complex, large-scale engagements</strong> — spanning global cloud transformations, enterprise data platforms, managed services operations, and AI programmes for some of the world's most demanding organisations.</p>
              <p>We've spent our careers building this capability for the largest enterprises — and watching everyone else get priced out of it. Tattvix exists to change that. The same AI that runs a Fortune 500 cloud estate can keep a fifty-person company's infrastructure healthy overnight. The same data platforms that power global supply chains can tell a regional retailer exactly what to stock next week. Our job is to package that capability into products that deploy in weeks, run reliably, and cost what they should.</p>
              <p>Every product we ship is measured against one question: did it give a team their time back? If the answer is yes, we're doing our job. Thank you for being part of the beginning.</p>
            </div>
            <div className="founder-sign"><img src="data:image/png;base64,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" alt="" width="42" height="42" />
      <div>
              <p className="who">The Founders</p>
              <p className="role">INDUSTRY VETERANS · 25+ YEARS · COMPLEX ENGAGEMENTS WORLDWIDE</p>
            </div></div>
          </div>
        </div>
      </section>
      <section className="tight">
        <div className="wrap">
          <div className="cta-box reveal">
            <div>
              <p className="eyebrow" style={{ color: "#fff" }}>Get started</p>
              <h2>Let's automate your first workflow.</h2>
              <p>We'd love to hear what's consuming your team's time — and show you what running it autonomously looks like.</p>
            </div>
            <div className="cta-actions"><Link className="btn btn-gold" href="/request-demo">Request a demo</Link>
      <p className="mail">or write to <a href="mailto:info@tattvix.ai">info@tattvix.ai</a></p></div>
          </div>
        </div>
      </section>
    </>
  );
}
