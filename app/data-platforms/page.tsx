import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Data Warehousing & Intelligence Platforms — Microsoft Fabric, Huawei DataArts, Apache Stack | Tattvix.ai",
  description: "AI-based data services from Tattvix.ai: data warehousing and intelligence platforms on Microsoft Fabric, Huawei DataArts, and the Apache open-source stack — lakehouse, pipelines, governance, and BI.",
  alternates: {
    canonical: "https://tattvix.ai/data-platforms"
  },
  openGraph: {
    type: "website",
    siteName: "Tattvix.ai",
    title: "Data Warehousing & Intelligence Platforms — Microsoft Fabric, Huawei DataArts, Apache Stack | Tattvix.ai",
    description: "AI-based data services from Tattvix.ai: data warehousing and intelligence platforms on Microsoft Fabric, Huawei DataArts, and the Apache open-source stack — lakehouse, pipelines, governance, and BI.",
    url: "https://tattvix.ai/data-platforms",
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
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"name\":\"Data Warehousing & Intelligence Platforms\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Tattvix.ai\"},\"serviceType\":\"Data platform engineering\",\"description\":\"Modern data warehouses, lakehouses and intelligence platforms on Microsoft Fabric, Huawei DataArts, and the Apache stack.\",\"areaServed\":\"Worldwide\"}" }}
      />
      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb"><Link href="/">Home</Link> <span>/</span> Data Platforms</p>
          <div className="hero-split">
            <div>
              <p className="eyebrow">Dw · AI-Based Data Services</p>
              <div className="section-head">
                <h1>The data foundation your AI depends on.</h1>
                <p>We design and build modern data warehouses, lakehouses, and intelligence platforms — on Microsoft Fabric, Huawei DataArts, or a fully open-source Apache stack — so every automation and AI decision runs on trusted, timely data.</p>
              </div>
              <div className="platform-row"><span className="platform">Microsoft Fabric</span><span className="platform">Huawei DataArts</span><span className="platform">Apache Spark</span><span className="platform">Apache Kafka</span><span className="platform">Apache Airflow</span><span className="platform">Apache Iceberg</span><span className="platform">Apache Superset</span></div>
              <div style={{ marginTop: "26px" }}><Link className="btn btn-copper" href="/request-demo">Request an assessment</Link></div>
            </div>
            <div className="hero-visual reveal in"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Data platform layers illustration">
      <rect width="520" height="340" fill="#F7F3EC" />
      <g>
      <ellipse cx="260" cy="86" rx="140" ry="26" fill="#fff" stroke="#A85B34" strokeWidth="2" /><text x="260" y="92" fontFamily="monospace" fontSize="11" fill="#7E4021" textAnchor="middle">SOURCES · apps / POS / ERP / IoT</text>
      <line x1="260" y1="112" x2="260" y2="134" stroke="#C9973F" strokeWidth="2" strokeDasharray="4 5" />
      <rect x="110" y="136" width="300" height="44" rx="10" fill="#2C1D12" /><text x="260" y="163" fontFamily="monospace" fontSize="11.5" fill="#EBD3A3" textAnchor="middle">LAKEHOUSE · Fabric / DataArts / Iceberg</text>
      <line x1="260" y1="180" x2="260" y2="202" stroke="#C9973F" strokeWidth="2" strokeDasharray="4 5" />
      <rect x="140" y="204" width="240" height="40" rx="10" fill="#fff" stroke="#17948A" strokeWidth="2" /><text x="260" y="229" fontFamily="monospace" fontSize="11" fill="#0E6B64" textAnchor="middle">GOVERN · catalog / lineage / quality</text>
      <line x1="260" y1="244" x2="260" y2="264" stroke="#C9973F" strokeWidth="2" strokeDasharray="4 5" />
      <g>
      <rect x="96" y="266" width="100" height="38" rx="9" fill="#fff" stroke="#C9973F" strokeWidth="1.8" /><text x="146" y="290" fontFamily="monospace" fontSize="10.5" fill="#7E4021" textAnchor="middle">BI</text>
      <rect x="210" y="266" width="100" height="38" rx="9" fill="#fff" stroke="#C9973F" strokeWidth="1.8" /><text x="260" y="290" fontFamily="monospace" fontSize="10.5" fill="#7E4021" textAnchor="middle">ML</text>
      <rect x="324" y="266" width="100" height="38" rx="9" fill="#fff" stroke="#C9973F" strokeWidth="1.8" /><text x="374" y="290" fontFamily="monospace" fontSize="10.5" fill="#7E4021" textAnchor="middle">AI agents</text>
      </g></g></svg></div>
          </div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Platform tracks</p>
            <h2>Three proven stacks. One that fits you.</h2>
            <p>We're deliberately multi-platform: the right data stack depends on your cloud, your team, and your budget — not our preferences.</p>
          </div>
          <div className="cards">
            <article className="pcard reveal"><span className="tag teal">Track · Microsoft</span><h3>Microsoft Fabric</h3><p>End-to-end analytics on a unified SaaS platform — OneLake lakehouse, Data Factory pipelines, warehouse workloads, and Power BI on top. The fastest route for Azure-centric organisations.</p>
      <ul>
              <li>OneLake lakehouse & warehouse design</li>
              <li>Pipeline & dataflow engineering</li>
              <li>Power BI semantic models & reporting</li>
            </ul></article>
            <article className="pcard reveal"><span className="tag teal">Track · Huawei</span><h3>Huawei DataArts</h3><p>DataArts Studio on Huawei Cloud — one-stop data integration, development, quality, and governance. Ideal where Huawei Cloud is the standard.</p>
      <ul>
              <li>Data integration & migration to Huawei Cloud</li>
              <li>DataArts pipelines, catalog & quality rules</li>
              <li>GaussDB & DWS warehouse implementation</li>
            </ul></article>
            <article className="pcard reveal"><span className="tag teal">Track · Open Source</span><h3>Apache Stack</h3><p>A cloud-neutral, licence-free platform built from proven Apache projects. Maximum control and portability at the lowest licence cost.</p>
      <ul>
              <li>Lakehouse on Spark + Iceberg</li>
              <li>Streaming & CDC with Kafka</li>
              <li>Orchestration with Airflow, BI with Superset</li>
            </ul></article>
          </div>
        </div>
      </section>
      <section id="intelligence" className="band">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">From raw data to intelligence</p>
            <h2>One pipeline, end to end.</h2>
            <p>Whichever stack you choose, the shape is the same — ingest, store, transform, govern, decide — and every stage is monitored by our own OTTO and Autonoma products.</p>
          </div>
          <div className="steps">
            <div className="step reveal">
              <p className="s-label">Foundation</p>
              <h3>Build the platform</h3>
              <p>Lakehouse or warehouse designed for your sources — apps, POS, ERP, IoT — with governance from day one.</p>
            </div>
            <div className="step reveal">
              <p className="s-label">Pipelines</p>
              <h3>Automate the flow</h3>
              <p>Modelled, tested pipelines turn raw feeds into facts your business can trust, on schedule, every time.</p>
            </div>
            <div className="step reveal">
              <p className="s-label">Intelligence</p>
              <h3>Decide with data</h3>
              <p>BI dashboards, ML features, and AI agents consuming trusted data — the payoff of the whole platform.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="tight">
        <div className="wrap">
          <div className="cta-box reveal">
            <div>
              <p className="eyebrow" style={{ color: "#fff" }}>Get started</p>
              <h2>Let's assess your data estate.</h2>
              <p>A short discovery tells us — and you — which platform track fits your cloud, team, and budget. No obligation.</p>
            </div>
            <div className="cta-actions"><Link className="btn btn-gold" href="/request-demo">Request an assessment</Link>
      <p className="mail">or write to <a href="mailto:info@tattvix.ai">info@tattvix.ai</a></p></div>
          </div>
        </div>
      </section>
    </>
  );
}
