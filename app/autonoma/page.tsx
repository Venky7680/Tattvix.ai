import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Autonoma — Enterprise AI Orchestration Platform & Agent Builder | Tattvix.ai",
  description: "Autonoma by Tattvix.ai: build, orchestrate and govern AI agents on one platform. 300+ ready automations for AWS, Azure, OCI, OS, networking and security, an Agent Builder for business processes, built-in data intelligence and chatbots — governed end to end.",
  alternates: {
    canonical: "https://tattvix.ai/autonoma"
  },
  openGraph: {
    type: "website",
    siteName: "Tattvix.ai",
    title: "Autonoma — Enterprise AI Orchestration Platform & Agent Builder | Tattvix.ai",
    description: "Autonoma by Tattvix.ai: build, orchestrate and govern AI agents on one platform. 300+ ready automations for AWS, Azure, OCI, OS, networking and security, an Agent Builder for business processes, built-in data intelligence and chatbots — governed end to end.",
    url: "https://tattvix.ai/autonoma",
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
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Product\",\"name\":\"Autonoma\",\"description\":\"Enterprise AI orchestration platform: agent builder, 300+ automation library, orchestration engine, data intelligence, integrated chatbots, and enterprise governance.\",\"brand\":{\"@type\":\"Organization\",\"name\":\"Tattvix.ai\"},\"url\":\"https://tattvix.ai/autonoma\"}" }}
      />
      <style dangerouslySetInnerHTML={{ __html: ".stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:34px}\n.stat{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:20px 18px;text-align:left}\n.stat .n{font-family:var(--fd);font-weight:800;font-size:1.9rem;letter-spacing:-.03em;color:var(--copper);line-height:1.05}\n.stat .d{font-size:.82rem;color:var(--ink-mute);margin-top:6px;line-height:1.45}\n.stat.teal .n{color:var(--teal)}\n.stat.gold .n{color:var(--gold)}\n.agents-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:40px}\n.agent-card{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:20px 18px;transition:transform .2s,border-color .2s,box-shadow .2s}\n.agent-card:hover{transform:translateY(-4px);border-color:var(--copper);box-shadow:0 14px 28px rgba(44,29,18,.09)}\n.agent-card .a-sym{width:40px;height:40px;border-radius:10px;background:var(--espresso);color:var(--gold);font-family:var(--fm);font-weight:600;font-size:.8rem;display:grid;place-items:center;margin-bottom:12px}\n.agent-card.hl .a-sym{background:var(--gold);color:var(--espresso)}\n.agent-card h4{font-family:var(--fd);font-weight:700;font-size:1rem;color:var(--espresso);margin-bottom:5px}\n.agent-card p{font-size:.83rem;color:var(--ink-mute);line-height:1.5}\n.layers{margin-top:40px;display:flex;flex-direction:column;gap:8px}\n.layer{display:grid;grid-template-columns:64px 200px 1fr;gap:18px;align-items:center;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px 20px}\n.layer .l-num{font-family:var(--fd);font-weight:800;font-size:1.3rem;color:var(--gold);text-align:center}\n.layer .l-name{font-family:var(--fm);font-size:.72rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--copper)}\n.layer .l-desc{font-size:.87rem;color:var(--ink-mute)}\n.layer.hl{background:var(--espresso);border-color:var(--espresso)}\n.layer.hl .l-name{color:var(--gold)}\n.layer.hl .l-desc{color:rgba(255,255,255,.7)}\n.loop{display:grid;grid-template-columns:repeat(7,1fr);gap:8px;margin-top:36px}\n.loop .lp{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:14px 10px;text-align:center;position:relative}\n.loop .lp::after{content:\"\\2192\";position:absolute;right:-11px;top:50%;transform:translateY(-50%);color:var(--gold);font-weight:700;z-index:1}\n.loop .lp:last-child::after{content:\"\\21BA\";color:var(--teal)}\n.loop .lp .k{font-family:var(--fd);font-weight:800;font-size:1.05rem;color:var(--copper)}\n.loop .lp .t{font-family:var(--fm);font-size:.62rem;letter-spacing:.05em;text-transform:uppercase;color:var(--ink-mute);margin-top:5px;display:block}\n.tiers{display:flex;flex-direction:column;gap:10px;margin-top:36px}\n.tier{display:grid;grid-template-columns:76px 230px 1fr 150px;gap:16px;align-items:center;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px 20px}\n.tier .t-lvl{font-family:var(--fd);font-weight:800;font-size:1.35rem;color:var(--copper)}\n.tier .t-name{font-family:var(--fm);font-size:.72rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--espresso)}\n.tier .t-desc{font-size:.86rem;color:var(--ink-mute)}\n.tier .t-mode{font-family:var(--fm);font-size:.64rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;padding:6px 10px;border-radius:999px;text-align:center}\n.tier .t-mode.auto{background:rgba(23,148,138,.12);color:var(--teal-deep)}\n.tier .t-mode.aug{background:rgba(201,151,63,.16);color:#8a6420}\n.cov{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:36px}\n.cov .cv{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px}\n.cov .cv h4{font-family:var(--fd);font-weight:700;font-size:1rem;color:var(--espresso);margin-bottom:5px}\n.cov .cv p{font-size:.82rem;color:var(--ink-mute);line-height:1.5}\n.persona{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:36px}\n.pv{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:20px 18px}\n.pv .who{font-family:var(--fm);font-size:.66rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--teal);margin-bottom:8px;display:block}\n.pv h4{font-family:var(--fd);font-weight:700;font-size:1.02rem;color:var(--espresso);margin-bottom:5px;line-height:1.35}\n.pv p{font-size:.84rem;color:var(--ink-mute)}\n.modgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:36px}\n.mod{background:var(--card);border:1px solid var(--line);border-radius:11px;padding:16px 15px;transition:border-color .2s,transform .2s}\n.mod:hover{border-color:var(--gold);transform:translateY(-3px)}\n.mod h4{font-family:var(--fd);font-weight:700;font-size:.95rem;color:var(--espresso);margin-bottom:4px}\n.mod p{font-size:.78rem;color:var(--ink-mute);line-height:1.45}\n.proof{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:30px}\n.proof .pd{background:rgba(255,255,255,.06);border:1px solid var(--line-dark);border-radius:12px;padding:20px 18px}\n.proof .pd .d0{font-family:var(--fm);font-size:.66rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:8px}\n.proof .pd h4{font-family:var(--fd);font-weight:700;font-size:1.05rem;color:#fff;margin-bottom:4px}\n.proof .pd p{font-size:.85rem;color:rgba(255,255,255,.65)}\n.dual{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:36px}\n.dual .side{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:26px 24px}\n.dual .side.d2{border-color:var(--gold)}\n.dual .side .s-tag{font-family:var(--fm);font-size:.66rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--copper);display:block;margin-bottom:8px}\n.dual .side h3{font-family:var(--fd);font-weight:700;font-size:1.2rem;color:var(--espresso);margin-bottom:4px}\n.dual .side .s-sub{font-size:.86rem;color:var(--ink-mute);margin-bottom:14px}\n.dual .side ul{list-style:none;display:flex;flex-direction:column;gap:8px;font-size:.88rem;color:var(--ink-soft)}\n.dual .side ul li{display:flex;gap:10px;align-items:baseline}\n.dual .side ul li::before{content:\"\\25B8\";color:var(--gold);font-size:.7rem}\n.pains{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:36px}\n.pain{background:var(--card);border:1px solid var(--line);border-radius:11px;padding:16px 18px;display:flex;gap:12px;align-items:baseline}\n.pain .x{color:#A33B2A;font-weight:700;font-family:var(--fm)}\n.pain p{font-size:.88rem;color:var(--ink-soft)}\n.pain p b{color:var(--espresso)}\n@media(max-width:980px){\n.stats,.agents-grid,.modgrid{grid-template-columns:1fr 1fr}\n.loop{grid-template-columns:repeat(4,1fr)}\n.loop .lp:nth-child(4)::after{content:\"\"}\n.cov,.persona{grid-template-columns:1fr 1fr}\n.tier{grid-template-columns:60px 1fr;grid-template-rows:auto auto}\n.tier .t-desc{grid-column:1/-1}\n.tier .t-mode{grid-column:2;justify-self:start}\n.layer{grid-template-columns:48px 1fr}\n.layer .l-desc{grid-column:1/-1}\n.dual,.pains{grid-template-columns:1fr}}\n@media(max-width:700px){\n.stats,.agents-grid,.modgrid,.cov,.persona,.proof,.loop{grid-template-columns:1fr 1fr}\n.loop .lp::after{display:none}}\n" }} />
      <style dangerouslySetInnerHTML={{ __html: "@media(max-width:980px){#pillar-cards{grid-template-columns:1fr 1fr!important}}@media(max-width:700px){#pillar-cards{grid-template-columns:1fr!important}}" }} />
      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb"><Link href="/">Home</Link> <span>/</span> <Link href="/solutions">Solutions</Link> <span>/</span> Autonoma</p>
          <div className="hero-split">
            <div>
              <p className="eyebrow">An · 02 · AI Product · Enterprise AI Orchestration</p>
              <div className="section-head">
                <h1>Automate IT. Orchestrate agents. Transform every business process.</h1>
                <p>Autonoma is the enterprise AI orchestration platform: build, orchestrate, and govern AI agents and automations on one platform — 300+ ready-made automations for cloud, infrastructure and security, plus purpose-built agents for every business process.</p>
              </div>
              <div className="spec">
                <div className="cell"><span className="k">Automations</span><span className="v">300+ ready on day one</span></div>
                <div className="cell"><span className="k">Architecture</span><span className="v">2 layers: framework + agentic</span></div>
                <div className="cell"><span className="k">Runs on</span><span className="v">AWS · Azure · OCI · on-prem</span></div>
              </div>
              <div style={{ marginTop: "26px", display: "flex", gap: "12px", flexWrap: "wrap" }}><Link className="btn btn-copper" href="/request-demo">Request a demo</Link><Link className="btn btn-ghost" href="/solutions">All solutions</Link></div>
            </div>
            <div className="hero-visual reveal in"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Autonoma agent orchestration illustration">
      <rect width="520" height="340" fill="#F7F3EC" />
      <circle cx="260" cy="170" r="120" fill="none" stroke="#E4DACB" strokeWidth="1.5" />
      <line x1="260" y1="170" x2="120" y2="80" stroke="#C9973F" strokeWidth="1.8" strokeDasharray="5 6" opacity=".75" /><line x1="260" y1="170" x2="400" y2="80" stroke="#C9973F" strokeWidth="1.8" strokeDasharray="5 6" opacity=".75" /><line x1="260" y1="170" x2="80" y2="220" stroke="#C9973F" strokeWidth="1.8" strokeDasharray="5 6" opacity=".75" /><line x1="260" y1="170" x2="440" y2="220" stroke="#C9973F" strokeWidth="1.8" strokeDasharray="5 6" opacity=".75" /><line x1="260" y1="170" x2="180" y2="290" stroke="#C9973F" strokeWidth="1.8" strokeDasharray="5 6" opacity=".75" /><line x1="260" y1="170" x2="340" y2="290" stroke="#C9973F" strokeWidth="1.8" strokeDasharray="5 6" opacity=".75" />
      <circle cx="260" cy="170" r="52" fill="#2C1D12" />
      <circle cx="260" cy="170" r="52" fill="none" stroke="#C9973F" strokeWidth="2.5" />
      <circle cx="260" cy="170" r="64" fill="none" stroke="#C9973F" strokeWidth="1" opacity=".4" />
      <text x="260" y="165" fontFamily="monospace" fontSize="13" fill="#EBD3A3" textAnchor="middle" fontWeight="bold">Autonoma</text>
      <text x="260" y="184" fontFamily="monospace" fontSize="10" fill="#C9973F" textAnchor="middle">core</text>
      <g><circle cx="120" cy="80" r="26" fill="#fff" stroke="#17948A" strokeWidth="2.2" /><text x="120" y="85" fontFamily="monospace" fontSize="14" fill="#0E6B64" textAnchor="middle" fontWeight="bold">Vx</text></g><g><circle cx="400" cy="80" r="26" fill="#fff" stroke="#17948A" strokeWidth="2.2" /><text x="400" y="85" fontFamily="monospace" fontSize="14" fill="#0E6B64" textAnchor="middle" fontWeight="bold">Sd</text></g><g><circle cx="80" cy="220" r="26" fill="#fff" stroke="#17948A" strokeWidth="2.2" /><text x="80" y="225" fontFamily="monospace" fontSize="14" fill="#0E6B64" textAnchor="middle" fontWeight="bold">Hr</text></g><g><circle cx="440" cy="220" r="26" fill="#fff" stroke="#17948A" strokeWidth="2.2" /><text x="440" y="225" fontFamily="monospace" fontSize="14" fill="#0E6B64" textAnchor="middle" fontWeight="bold">Fi</text></g><g><circle cx="180" cy="290" r="26" fill="#fff" stroke="#17948A" strokeWidth="2.2" /><text x="180" y="295" fontFamily="monospace" fontSize="14" fill="#0E6B64" textAnchor="middle" fontWeight="bold">Lg</text></g><g><circle cx="340" cy="290" r="26" fill="#fff" stroke="#17948A" strokeWidth="2.2" /><text x="340" y="295" fontFamily="monospace" fontSize="14" fill="#0E6B64" textAnchor="middle" fontWeight="bold">Le</text></g>
      <g fontFamily="monospace" fontSize="10">
      <rect x="14" y="14" width="150" height="24" rx="6" fill="#fff" stroke="#E4DACB" /><text x="24" y="30" fill="#2C1D12">workflow · orchestrated</text>
      <rect x="356" y="302" width="150" height="24" rx="6" fill="#fff" stroke="#E4DACB" /><text x="366" y="318" fill="#2C1D12">audit log · complete</text>
      </g></svg></div>
          </div>
        </div>
      </div>
      <section className="tight">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">The problem</p>
            <h2>Enterprises automate in fragments.</h2>
            <p>Scripts here, point tools there, manual business processes everywhere — and none of it talks to each other.</p>
          </div>
          <div className="pains reveal">
            <div className="pain"><span className="x">✕</span><p><b>IT toil never ends.</b> Restarts, patching, backups, rotations and cost reviews still depend on engineers' time and tribal knowledge.</p></div>
            <div className="pain"><span className="x">✕</span><p><b>Scripts without governance.</b> Automation lives in scattered scripts across teams and clouds — no approvals, no audit trail, no reuse.</p></div>
            <div className="pain"><span className="x">✕</span><p><b>Business processes left behind.</b> HR, procurement, logistics and sales still run on forms, email chains and re-keyed documents.</p></div>
            <div className="pain"><span className="x">✕</span><p><b>Data everywhere, insight nowhere.</b> Operational and business data sits in silos, so every decision waits on a manually built report.</p></div>
          </div>
          <p className="reveal" style={{ marginTop: "20px", fontFamily: "var(--fm)", fontSize: ".8rem", color: "var(--copper)" }}>The gap isn't more tools — it's one platform where AI agents can automate both IT and the business.</p>
        </div>
      </section>
      <section className="band" id="platform">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">The platform</p>
            <h2>One platform, every layer of automation.</h2>
            <p>Autonoma builds agents, runs automations, manages data, and talks to your teams — all under one governance model.</p>
          </div>
          <div className="cards" style={{ gridTemplateColumns: "repeat(5,1fr)" }} id="pillar-cards">
            <article className="pcard reveal"><span className="tag">Engine</span><h3 style={{ fontSize: "1.05rem" }}>AI Orchestration Engine</h3><p style={{ fontSize: ".85rem" }}>Schedules, dispatches and monitors every job and agent across clouds — reliably, at scale.</p></article>
            <article className="pcard reveal"><span className="tag">Builder</span><h3 style={{ fontSize: "1.05rem" }}>Agent Builder</h3><p style={{ fontSize: ".85rem" }}>Design your own AI agents — goals, tools, knowledge and guardrails — without heavy engineering.</p></article>
            <article className="pcard reveal"><span className="tag">Library</span><h3 style={{ fontSize: "1.05rem" }}>300+ Automation Library</h3><p style={{ fontSize: ".85rem" }}>Out-of-the-box scripts for AWS, Azure, OCI, operating systems, networking and security.</p></article>
            <article className="pcard reveal"><span className="tag">Data</span><h3 style={{ fontSize: "1.05rem" }}>Data Intelligence</h3><p style={{ fontSize: ".85rem" }}>Built-in data management and visualisation for every signal the platform touches.</p></article>
            <article className="pcard reveal"><span className="tag">Chat</span><h3 style={{ fontSize: "1.05rem" }}>Integrated Chatbots</h3><p style={{ fontSize: ".85rem" }}>Conversational access to agents, automations and answers — wherever your teams work.</p></article>
          </div>
          <p className="reveal" style={{ marginTop: "20px", fontFamily: "var(--fm)", fontSize: ".8rem", color: "var(--ink-mute)" }}><b style={{ color: "var(--teal)" }}>Governed end to end.</b> Role-based access, approval gates, an encrypted key vault and verifiable audit trails wrap every capability above.</p>
        </div>
      </section>
      <section id="architecture">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Architecture</p>
            <h2>Two layers. One platform.</h2>
            <p>Adopt the framework for instant automation coverage — then build agents around your own business processes.</p>
          </div>
          <div className="dual reveal">
            <div className="side"><span className="s-tag">Layer 1</span><h3>AI Automation Framework</h3><p className="s-sub">Ready on day one — the horizontal automation backbone.</p>
      <ul>
              <li>300+ out-of-the-box automation scripts</li>
              <li>Job orchestration, scheduling & real-time observability</li>
              <li>Multi-cloud execution clusters — AWS, Azure, OCI</li>
              <li>OS, networking, security & database operations</li>
              <li>Governance: approvals, key vault, audit trail</li>
            </ul></div>
            <div className="side d2"><span className="s-tag">Layer 2</span><h3>Agentic Business Solutions</h3><p className="s-sub">Built with you — agents designed around your processes.</p>
      <ul>
              <li>Custom AI agents modelled on your business workflows</li>
              <li>HR, logistics, sales, procurement & finance automation</li>
              <li>Document intelligence for complex paperwork</li>
              <li>Complex business applications, agent-orchestrated</li>
              <li>Composed in the Agent Builder on framework services</li>
            </ul></div>
          </div>
          <p className="reveal" style={{ marginTop: "18px", fontFamily: "var(--fm)", fontSize: ".78rem", color: "var(--ink-mute)" }}>Shared foundation: data intelligence · integrated chatbots · governance & security · multi-cloud runtime.</p>
        </div>
      </section>
      <section className="band" id="library">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Automation library</p>
            <h2>300+ automations, ready out of the box.</h2>
            <p>Curated, versioned and governed. Run them on demand, on a schedule — or let an agent invoke them as tools. Every script ships with parameters, rollback guidance and audit logging.</p>
          </div>
          <div className="modgrid reveal">
            <div className="mod">
              <h4>AWS</h4>
              <p>EC2, S3, RDS operations, cost & backup jobs</p>
            </div>
            <div className="mod">
              <h4>Azure</h4>
              <p>VM, storage, Entra ID & policy automation</p>
            </div>
            <div className="mod">
              <h4>OCI</h4>
              <p>Compute, tenancy & database housekeeping</p>
            </div>
            <div className="mod">
              <h4>Operating systems</h4>
              <p>Linux & Windows patching, services, health</p>
            </div>
            <div className="mod">
              <h4>Networking</h4>
              <p>DNS, load balancers, VPN, firewall & routing</p>
            </div>
            <div className="mod">
              <h4>Security</h4>
              <p>Key rotation, CIS scans, hardening, secrets</p>
            </div>
            <div className="mod">
              <h4>Databases</h4>
              <p>Backups, indexing, replication & tuning</p>
            </div>
            <div className="mod">
              <h4>Backup & DR</h4>
              <p>Snapshots, restore drills, DR failover</p>
            </div>
          </div>
        </div>
      </section>
      <section id="builder">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Agent Builder</p>
            <h2>Build an AI agent the way you'd brief an employee.</h2>
            <p>A guided builder turns a business requirement into a governed, production agent — typical build measured in days, not months.</p>
          </div>
          <div className="loop reveal" style={{ gridTemplateColumns: "repeat(5,1fr)" }}>
            <div className="lp"><span className="k">01</span><span className="t">Define</span></div>
            <div className="lp"><span className="k">02</span><span className="t">Equip</span></div>
            <div className="lp"><span className="k">03</span><span className="t">Ground</span></div>
            <div className="lp"><span className="k">04</span><span className="t">Govern</span></div>
            <div className="lp"><span className="k">05</span><span className="t">Deploy</span></div>
          </div>
          <div className="cov reveal" style={{ marginTop: "22px" }}>
            <div className="cv">
              <h4>Define & equip</h4>
              <p>Give the agent a goal, scope and triggers — schedule, event or chat — then attach its tools: automation scripts, APIs, connectors and actions.</p>
            </div>
            <div className="cv">
              <h4>Ground & govern</h4>
              <p>Connect the knowledge it may cite — documents, runbooks and data — and set guardrails: roles, approval gates, budgets and boundaries.</p>
            </div>
            <div className="cv">
              <h4>Deploy & observe</h4>
              <p>Ship to production and watch every run, decision and action live. Every agent inherits platform governance, observability, scheduling and the full automation library.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="band" id="in-action">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Layer 1 in action</p>
            <h2>The IT operations workforce, pre-built.</h2>
            <p>Framework agents that start delivering from the first week — before any custom build begins.</p>
          </div>
          <div className="cards four">
            <article className="pcard reveal"><span className="tag teal">Active</span><h3 style={{ fontSize: "1.05rem" }}>Cloud Cost Optimizer</h3><p style={{ fontSize: ".86rem" }}>Detects idle resources, rightsizing wins and commitment gaps across AWS, Azure & OCI — then remediates.</p></article>
            <article className="pcard reveal"><span className="tag teal">Active</span><h3 style={{ fontSize: "1.05rem" }}>Knowledge Agent</h3><p style={{ fontSize: ".86rem" }}>RAG-powered ops intelligence grounded in your runbooks, ADRs and execution history — answers with citations.</p></article>
            <article className="pcard reveal"><span className="tag teal">Active</span><h3 style={{ fontSize: "1.05rem" }}>Incident Response Agent</h3><p style={{ fontSize: ".86rem" }}>Triages alerts, pages on-call, executes the matching runbook — including rollback — with a full audit trail.</p></article>
            <article className="pcard reveal"><span className="tag teal">Active</span><h3 style={{ fontSize: "1.05rem" }}>Security Posture Agent</h3><p style={{ fontSize: ".86rem" }}>Scans for misconfigurations, exposed secrets and policy violations; maps findings to CIS benchmarks.</p></article>
          </div>
          <div className="section-head reveal" style={{ marginTop: "52px" }}>
            <p className="eyebrow">Layer 2 in action</p>
            <h2>AI agents for every business process.</h2>
            <p>Custom-built on your workflows in the Agent Builder — the same governed platform, pointed at the business.</p>
          </div>
          <div className="cards">
            <article className="pcard reveal"><span className="tag">HR</span><h3 style={{ fontSize: "1.05rem" }}>Human Resources</h3><p style={{ fontSize: ".86rem" }}>Onboarding & offboarding, leave requests, HR letters and policy Q&A — handled end to end.</p></article>
            <article className="pcard reveal"><span className="tag">Procurement</span><h3 style={{ fontSize: "1.05rem" }}>Procurement</h3><p style={{ fontSize: ".86rem" }}>PO creation, three-way matching, vendor quote comparison and contract renewal alerts.</p></article>
            <article className="pcard reveal"><span className="tag">Sales</span><h3 style={{ fontSize: "1.05rem" }}>Sales</h3><p style={{ fontSize: ".86rem" }}>Lead qualification and enrichment, quote generation and CRM hygiene — on autopilot.</p></article>
            <article className="pcard reveal"><span className="tag">Logistics</span><h3 style={{ fontSize: "1.05rem" }}>Logistics</h3><p style={{ fontSize: ".86rem" }}>Shipment tracking, exception handling, delivery documentation and fleet alerts.</p></article>
            <article className="pcard reveal"><span className="tag">Documents</span><h3 style={{ fontSize: "1.05rem" }}>Document Intelligence</h3><p style={{ fontSize: ".86rem" }}>Extracts, classifies and validates invoices, contracts and forms — at enterprise scale.</p></article>
            <article className="pcard reveal"><span className="tag">Applications</span><h3 style={{ fontSize: "1.05rem" }}>Complex Applications</h3><p style={{ fontSize: ".86rem" }}>Multi-step, multi-system business workflows orchestrated by cooperating agents.</p></article>
          </div>
        </div>
      </section>
      <section id="engine">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Orchestration engine</p>
            <h2>Industrial-grade execution underneath it all.</h2>
            <p>Everything an agent decides — and everything a human schedules — runs through one reliable engine.</p>
          </div>
          <div className="stats">
            <div className="stat reveal">
              <p className="n">50K+</p>
              <p className="d">executions a month, dispatched asynchronously through a Kafka backbone</p>
            </div>
            <div className="stat teal reveal">
              <p className="n">99.9%</p>
              <p className="d">uptime SLA on the orchestration engine</p>
            </div>
            <div className="stat gold reveal">
              <p className="n">12ms</p>
              <p className="d">average dispatch latency at scale</p>
            </div>
            <div className="stat reveal">
              <p className="n">Live</p>
              <p className="d">every run streamed in real time: status, duration, retries and trigger — filter, search, export</p>
            </div>
          </div>
          <div className="cov reveal" style={{ marginTop: "22px" }}>
            <div className="cv">
              <h4>Central job library</h4>
              <p>Every automation searchable in one place — one-click execution, parameters and full history per project.</p>
            </div>
            <div className="cv">
              <h4>Set-and-forget scheduling</h4>
              <p>Cron-driven cadences for rotations, scans, backups and exports — visible and editable per project.</p>
            </div>
            <div className="cv">
              <h4>Isolated workspaces</h4>
              <p>Multi-project spaces give every team, environment or business unit its own dashboard, job library and access controls.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="band" id="governance">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Governance & security</p>
            <h2>Enterprise controls, built in — not bolted on.</h2>
            <p>The same guardrails apply to every human, every script and every AI agent on the platform. AI with a seatbelt: agents act autonomously only inside the boundaries you define.</p>
          </div>
          <div className="cards four">
            <article className="pcard reveal"><span className="tag">Vault</span><h3 style={{ fontSize: "1.02rem" }}>Encrypted key vault</h3><p style={{ fontSize: ".85rem" }}>A global, directory-like vault for keys, certificates and passwords used in secure node execution.</p></article>
            <article className="pcard reveal"><span className="tag">Approvals</span><h3 style={{ fontSize: "1.02rem" }}>Approvals inbox</h3><p style={{ fontSize: ".85rem" }}>Sensitive executions route through an approval queue before they run — high-risk actions stay under human review.</p></article>
            <article className="pcard reveal"><span className="tag">Audit</span><h3 style={{ fontSize: "1.02rem" }}>Verifiable audit trail</h3><p style={{ fontSize: ".85rem" }}>A chronological, cryptographically verifiable ledger of every change and action: who, what, and when.</p></article>
            <article className="pcard reveal"><span className="tag">Compliance</span><h3 style={{ fontSize: "1.02rem" }}>Compliance reports</h3><p style={{ fontSize: ".85rem" }}>Execution-history reports for any date range, generated on demand in the format your auditors need.</p></article>
          </div>
        </div>
      </section>
      <section className="band-dark">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Getting started</p>
            <h2>Let's put an AI workforce behind your business.</h2>
          </div>
          <div className="proof reveal">
            <div className="pd"><span className="d0">Step 1</span><h4>Start with the framework</h4><p>Connect your clouds and switch on the automation library — live coverage in days.</p></div>
            <div className="pd"><span className="d0">Step 2</span><h4>Co-build your first agents</h4><p>Pick two high-friction business processes; we design and ship the agents with you.</p></div>
            <div className="pd"><span className="d0">Step 3</span><h4>Scale across the enterprise</h4><p>Roll out data intelligence, chatbots and new agents — under one governance model.</p></div>
          </div>
          <div style={{ marginTop: "30px" }}><Link className="btn btn-gold" href="/request-demo">Request a demo</Link></div>
        </div>
      </section>
      <section className="tight">
        <div className="wrap">
          <div className="cta-box reveal">
            <div>
              <p className="eyebrow" style={{ color: "#fff" }}>Get started</p>
              <h2>Automation that thinks.</h2>
              <p>Agents don't just run scripts — they observe, reason, decide and act. See the Agent Builder turn a business requirement into a governed production agent.</p>
            </div>
            <div className="cta-actions"><Link className="btn btn-gold" href="/request-demo">Request a demo</Link>
      <p className="mail">or write to <a href="mailto:info@tattvix.ai">info@tattvix.ai</a></p></div>
          </div>
        </div>
      </section>
    </>
  );
}
