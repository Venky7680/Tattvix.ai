import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "IraOps — AI-Powered ITSM & Agentic Service Management Platform | Tattvix.ai",
  description: "IraOps by Tattvix.ai: 13 integrated ITSM modules and 77 capabilities — incident, problem, change, CMDB, SLA, catalog, knowledge, event and security — with Ira, an embedded AI agent that reasons, retrieves and acts across every module.",
  alternates: {
    canonical: "https://tattvix.ai/iraops"
  },
  openGraph: {
    type: "website",
    siteName: "Tattvix.ai",
    title: "IraOps — AI-Powered ITSM & Agentic Service Management Platform | Tattvix.ai",
    description: "IraOps by Tattvix.ai: 13 integrated ITSM modules and 77 capabilities — incident, problem, change, CMDB, SLA, catalog, knowledge, event and security — with Ira, an embedded AI agent that reasons, retrieves and acts across every module.",
    url: "https://tattvix.ai/iraops",
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
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Product\",\"name\":\"IraOps\",\"description\":\"AI-powered ITSM platform: 13 integrated modules with an embedded AI agent that understands context, retrieves knowledge, and takes action &#8212; predictive, secure, enterprise-ready.\",\"brand\":{\"@type\":\"Organization\",\"name\":\"Tattvix.ai\"},\"url\":\"https://tattvix.ai/iraops\"}" }}
      />
      <style dangerouslySetInnerHTML={{ __html: ".stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:34px}\n.stat{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:20px 18px;text-align:left}\n.stat .n{font-family:var(--fd);font-weight:800;font-size:1.9rem;letter-spacing:-.03em;color:var(--copper);line-height:1.05}\n.stat .d{font-size:.82rem;color:var(--ink-mute);margin-top:6px;line-height:1.45}\n.stat.teal .n{color:var(--teal)}\n.stat.gold .n{color:var(--gold)}\n.agents-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:40px}\n.agent-card{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:20px 18px;transition:transform .2s,border-color .2s,box-shadow .2s}\n.agent-card:hover{transform:translateY(-4px);border-color:var(--copper);box-shadow:0 14px 28px rgba(44,29,18,.09)}\n.agent-card .a-sym{width:40px;height:40px;border-radius:10px;background:var(--espresso);color:var(--gold);font-family:var(--fm);font-weight:600;font-size:.8rem;display:grid;place-items:center;margin-bottom:12px}\n.agent-card.hl .a-sym{background:var(--gold);color:var(--espresso)}\n.agent-card h4{font-family:var(--fd);font-weight:700;font-size:1rem;color:var(--espresso);margin-bottom:5px}\n.agent-card p{font-size:.83rem;color:var(--ink-mute);line-height:1.5}\n.layers{margin-top:40px;display:flex;flex-direction:column;gap:8px}\n.layer{display:grid;grid-template-columns:64px 200px 1fr;gap:18px;align-items:center;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px 20px}\n.layer .l-num{font-family:var(--fd);font-weight:800;font-size:1.3rem;color:var(--gold);text-align:center}\n.layer .l-name{font-family:var(--fm);font-size:.72rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--copper)}\n.layer .l-desc{font-size:.87rem;color:var(--ink-mute)}\n.layer.hl{background:var(--espresso);border-color:var(--espresso)}\n.layer.hl .l-name{color:var(--gold)}\n.layer.hl .l-desc{color:rgba(255,255,255,.7)}\n.loop{display:grid;grid-template-columns:repeat(7,1fr);gap:8px;margin-top:36px}\n.loop .lp{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:14px 10px;text-align:center;position:relative}\n.loop .lp::after{content:\"\\2192\";position:absolute;right:-11px;top:50%;transform:translateY(-50%);color:var(--gold);font-weight:700;z-index:1}\n.loop .lp:last-child::after{content:\"\\21BA\";color:var(--teal)}\n.loop .lp .k{font-family:var(--fd);font-weight:800;font-size:1.05rem;color:var(--copper)}\n.loop .lp .t{font-family:var(--fm);font-size:.62rem;letter-spacing:.05em;text-transform:uppercase;color:var(--ink-mute);margin-top:5px;display:block}\n.tiers{display:flex;flex-direction:column;gap:10px;margin-top:36px}\n.tier{display:grid;grid-template-columns:76px 230px 1fr 150px;gap:16px;align-items:center;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px 20px}\n.tier .t-lvl{font-family:var(--fd);font-weight:800;font-size:1.35rem;color:var(--copper)}\n.tier .t-name{font-family:var(--fm);font-size:.72rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--espresso)}\n.tier .t-desc{font-size:.86rem;color:var(--ink-mute)}\n.tier .t-mode{font-family:var(--fm);font-size:.64rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;padding:6px 10px;border-radius:999px;text-align:center}\n.tier .t-mode.auto{background:rgba(23,148,138,.12);color:var(--teal-deep)}\n.tier .t-mode.aug{background:rgba(201,151,63,.16);color:#8a6420}\n.cov{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:36px}\n.cov .cv{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px}\n.cov .cv h4{font-family:var(--fd);font-weight:700;font-size:1rem;color:var(--espresso);margin-bottom:5px}\n.cov .cv p{font-size:.82rem;color:var(--ink-mute);line-height:1.5}\n.persona{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:36px}\n.pv{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:20px 18px}\n.pv .who{font-family:var(--fm);font-size:.66rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--teal);margin-bottom:8px;display:block}\n.pv h4{font-family:var(--fd);font-weight:700;font-size:1.02rem;color:var(--espresso);margin-bottom:5px;line-height:1.35}\n.pv p{font-size:.84rem;color:var(--ink-mute)}\n.modgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:36px}\n.mod{background:var(--card);border:1px solid var(--line);border-radius:11px;padding:16px 15px;transition:border-color .2s,transform .2s}\n.mod:hover{border-color:var(--gold);transform:translateY(-3px)}\n.mod h4{font-family:var(--fd);font-weight:700;font-size:.95rem;color:var(--espresso);margin-bottom:4px}\n.mod p{font-size:.78rem;color:var(--ink-mute);line-height:1.45}\n.proof{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:30px}\n.proof .pd{background:rgba(255,255,255,.06);border:1px solid var(--line-dark);border-radius:12px;padding:20px 18px}\n.proof .pd .d0{font-family:var(--fm);font-size:.66rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:8px}\n.proof .pd h4{font-family:var(--fd);font-weight:700;font-size:1.05rem;color:#fff;margin-bottom:4px}\n.proof .pd p{font-size:.85rem;color:rgba(255,255,255,.65)}\n.dual{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:36px}\n.dual .side{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:26px 24px}\n.dual .side.d2{border-color:var(--gold)}\n.dual .side .s-tag{font-family:var(--fm);font-size:.66rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--copper);display:block;margin-bottom:8px}\n.dual .side h3{font-family:var(--fd);font-weight:700;font-size:1.2rem;color:var(--espresso);margin-bottom:4px}\n.dual .side .s-sub{font-size:.86rem;color:var(--ink-mute);margin-bottom:14px}\n.dual .side ul{list-style:none;display:flex;flex-direction:column;gap:8px;font-size:.88rem;color:var(--ink-soft)}\n.dual .side ul li{display:flex;gap:10px;align-items:baseline}\n.dual .side ul li::before{content:\"\\25B8\";color:var(--gold);font-size:.7rem}\n.pains{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:36px}\n.pain{background:var(--card);border:1px solid var(--line);border-radius:11px;padding:16px 18px;display:flex;gap:12px;align-items:baseline}\n.pain .x{color:#A33B2A;font-weight:700;font-family:var(--fm)}\n.pain p{font-size:.88rem;color:var(--ink-soft)}\n.pain p b{color:var(--espresso)}\n@media(max-width:980px){\n.stats,.agents-grid,.modgrid{grid-template-columns:1fr 1fr}\n.loop{grid-template-columns:repeat(4,1fr)}\n.loop .lp:nth-child(4)::after{content:\"\"}\n.cov,.persona{grid-template-columns:1fr 1fr}\n.tier{grid-template-columns:60px 1fr;grid-template-rows:auto auto}\n.tier .t-desc{grid-column:1/-1}\n.tier .t-mode{grid-column:2;justify-self:start}\n.layer{grid-template-columns:48px 1fr}\n.layer .l-desc{grid-column:1/-1}\n.dual,.pains{grid-template-columns:1fr}}\n@media(max-width:700px){\n.stats,.agents-grid,.modgrid,.cov,.persona,.proof,.loop{grid-template-columns:1fr 1fr}\n.loop .lp::after{display:none}}\n" }} />
      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb"><Link href="/">Home</Link> <span>/</span> <Link href="/solutions">Solutions</Link> <span>/</span> IraOps</p>
          <div className="hero-split">
            <div>
              <p className="eyebrow">Ir · 03 · AI Product · AI-Powered ITSM</p>
              <div className="section-head">
                <h1>Enterprise service management — reimagined around an AI that acts.</h1>
                <p>IraOps unifies the full ITSM stack — incident, problem, change, CMDB, SLA, catalog, knowledge, event, security and analytics — into one platform, with Ira, an embedded AI agent that understands context, retrieves knowledge, and takes action across every module.</p>
              </div>
              <div className="spec">
                <div className="cell"><span className="k">Modules</span><span className="v">13 integrated ITSM modules</span></div>
                <div className="cell"><span className="k">Capabilities</span><span className="v">77 built-in capabilities</span></div>
                <div className="cell"><span className="k">AI agent</span><span className="v">1, platform-wide — it acts</span></div>
              </div>
              <div style={{ marginTop: "26px", display: "flex", gap: "12px", flexWrap: "wrap" }}><Link className="btn btn-copper" href="/request-demo">Book a live walkthrough</Link><Link className="btn btn-ghost" href="/solutions">All solutions</Link></div>
            </div>
            <div className="hero-visual reveal in"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="IraOps AI service desk illustration">
      <rect width="520" height="340" fill="#F7F3EC" />
      <g fontFamily="monospace" fontSize="10.5">
      <text x="60" y="46" fill="#A85B34" fontWeight="bold" letterSpacing="2">INCOMING</text>
      <text x="230" y="46" fill="#C9973F" fontWeight="bold" letterSpacing="2">IRAOPS AI</text>
      <text x="408" y="46" fill="#0E6B64" fontWeight="bold" letterSpacing="2">RESOLVED</text>
      </g>
      <g>
      <rect x="30" y="70" width="130" height="52" rx="9" fill="#fff" stroke="#E4DACB" /><text x="44" y="92" fontFamily="monospace" fontSize="10" fill="#2C1D12">#4312 access</text><rect x="44" y="102" width="70" height="6" rx="3" fill="#E4DACB" />
      <rect x="30" y="136" width="130" height="52" rx="9" fill="#fff" stroke="#E4DACB" /><text x="44" y="158" fontFamily="monospace" fontSize="10" fill="#2C1D12">#4313 laptop</text><rect x="44" y="168" width="88" height="6" rx="3" fill="#E4DACB" />
      <rect x="30" y="202" width="130" height="52" rx="9" fill="#fff" stroke="#E4DACB" /><text x="44" y="224" fontFamily="monospace" fontSize="10" fill="#2C1D12">#4314 billing</text><rect x="44" y="234" width="60" height="6" rx="3" fill="#E4DACB" />
      </g>
      <g stroke="#C9973F" strokeWidth="2" strokeDasharray="5 6"><line x1="164" y1="96" x2="212" y2="150" /><line x1="164" y1="162" x2="212" y2="164" /><line x1="164" y1="228" x2="212" y2="180" /></g>
      <g><rect x="214" y="122" width="94" height="86" rx="14" fill="#2C1D12" /><circle cx="245" cy="156" r="6" fill="#C9973F" /><circle cx="277" cy="156" r="6" fill="#C9973F" /><rect x="243" y="176" width="36" height="5" rx="2.5" fill="#17948A" /><text x="261" y="200" fontFamily="monospace" fontSize="9" fill="#EBD3A3" textAnchor="middle">Ira · L1/L2</text></g>
      <g stroke="#17948A" strokeWidth="2"><line x1="312" y1="150" x2="368" y2="102" strokeDasharray="5 6" /><line x1="312" y1="165" x2="368" y2="168" strokeDasharray="5 6" /><line x1="312" y1="180" x2="368" y2="234" strokeDasharray="5 6" /></g>
      <g>
      <rect x="370" y="76" width="122" height="52" rx="9" fill="#fff" stroke="#17948A" strokeWidth="1.6" /><circle cx="390" cy="102" r="9" fill="#17948A" /><path d="M386 102 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" /><text x="406" y="106" fontFamily="monospace" fontSize="10" fill="#0E6B64">auto · 41s</text>
      <rect x="370" y="142" width="122" height="52" rx="9" fill="#fff" stroke="#17948A" strokeWidth="1.6" /><circle cx="390" cy="168" r="9" fill="#17948A" /><path d="M386 168 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" /><text x="406" y="172" fontFamily="monospace" fontSize="10" fill="#0E6B64">auto · 2m</text>
      <rect x="370" y="208" width="122" height="52" rx="9" fill="#fff" stroke="#C9973F" strokeWidth="1.6" /><circle cx="390" cy="234" r="9" fill="#C9973F" /><text x="390" y="238" fontFamily="monospace" fontSize="10" fill="#fff" textAnchor="middle">H</text><text x="406" y="238" fontFamily="monospace" fontSize="10" fill="#7E4021">escalated</text>
      </g>
      <text x="260" y="312" fontFamily="monospace" fontSize="11" fill="#A85B34" textAnchor="middle">resolution rate 86% · human-gated where it matters</text></svg></div>
          </div>
        </div>
      </div>
      <section className="tight">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Why IraOps</p>
            <h2>Full ITSM depth — with AI built into the core, not bolted on.</h2>
          </div>
          <div className="pains reveal">
            <div className="pain"><span className="x">✕</span><p><b>Tool sprawl.</b> Incidents, assets, changes, knowledge and monitoring scattered across disconnected systems.</p></div>
            <div className="pain"><span className="x">✕</span><p><b>Slow resolution.</b> Agents jump between screens hunting the context that should already be in front of them.</p></div>
            <div className="pain"><span className="x">✕</span><p><b>Reactive operations.</b> Teams find out about outages from users — not from correlated events and predictive signals.</p></div>
            <div className="pain"><span className="x">✕</span><p><b>AI as a bolt-on.</b> “AI” that only answers FAQs and can't see your data or actually resolve anything.</p></div>
          </div>
          <div className="cov reveal" style={{ marginTop: "22px" }}>
            <div className="cv">
              <h4>Unified operations</h4>
              <p>Thirteen ITSM modules running on one connected data model instead of a stack of tools.</p>
            </div>
            <div className="cv">
              <h4>Agentic AI</h4>
              <p>A conversational agent and predictive-intelligence layer embedded platform-wide: it reasons, retrieves grounded answers, and takes action.</p>
            </div>
            <div className="cv">
              <h4>Enterprise governance</h4>
              <p>RBAC down to the row, MFA, encryption, and a tamper-evident audit trail — the AI operates within the same permission boundaries as your people.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="band" id="modules">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Capability map</p>
            <h2>Thirteen modules. One platform.</h2>
            <p>77 capabilities, scoped to enterprise ITSM parity. Predictive Intelligence and Ira run across all of them — auto-categorisation, assignment, breach prediction, AI search, event correlation & conversational action.</p>
          </div>
          <div className="modgrid reveal">
            <div className="mod">
              <h4>Incident</h4>
              <p>Multi-channel intake, major-incident mgmt, playbooks</p>
            </div>
            <div className="mod">
              <h4>Problem</h4>
              <p>RCA workspace, KEDB, trend analysis</p>
            </div>
            <div className="mod">
              <h4>Change</h4>
              <p>Lifecycle, CAB workbench, collision detection</p>
            </div>
            <div className="mod">
              <h4>CMDB</h4>
              <p>Discovery, dependency mapping, IRE, health scoring</p>
            </div>
            <div className="mod">
              <h4>SLA management</h4>
              <p>Real-time timers, OLA/UC, breach prediction</p>
            </div>
            <div className="mod">
              <h4>Service catalog</h4>
              <p>Catalog, approvals, self-service portal</p>
            </div>
            <div className="mod">
              <h4>Knowledge</h4>
              <p>KCS authoring, AI search, feedback analytics</p>
            </div>
            <div className="mod">
              <h4>Event mgmt</h4>
              <p>Ingestion, correlation, AIOps</p>
            </div>
            <div className="mod">
              <h4>Automation</h4>
              <p>Flow Designer, runbooks, connectors</p>
            </div>
            <div className="mod">
              <h4>Integrations</h4>
              <p>Monitoring, DevOps, IAM</p>
            </div>
            <div className="mod">
              <h4>Security</h4>
              <p>RBAC, MFA, encryption, SecOps</p>
            </div>
            <div className="mod">
              <h4>Dashboards</h4>
              <p>Exec views, analytics, BI export</p>
            </div>
            <div className="mod" style={{ borderColor: "var(--gold)" }}>
              <h4>Ira — the AI agent</h4>
              <p>Embedded platform-wide; reasons, retrieves and acts</p>
            </div>
          </div>
        </div>
      </section>
      <section id="agent">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">The embedded AI agent</p>
            <h2>Ira reasons, retrieves, and acts.</h2>
            <p>Predictive Intelligence powers auto-categorisation, assignment and breach prediction — while Ira, the conversational agent, completes the task, not just describes it.</p>
          </div>
          <div className="loop reveal" style={{ gridTemplateColumns: "repeat(6,1fr)" }}>
            <div className="lp"><span className="k">1</span><span className="t">Query</span></div>
            <div className="lp"><span className="k">2</span><span className="t">Understand</span></div>
            <div className="lp"><span className="k">3</span><span className="t">Retrieve (RAG)</span></div>
            <div className="lp"><span className="k">4</span><span className="t">Reason & plan</span></div>
            <div className="lp"><span className="k">5</span><span className="t">Act (tool-call)</span></div>
            <div className="lp"><span className="k">6</span><span className="t">Respond</span></div>
          </div>
          <div className="cov reveal" style={{ marginTop: "22px" }}>
            <div className="cv">
              <h4>Grounded in your data</h4>
              <p>Ira pulls the knowledge base, CMDB, incidents and history as grounding — answers come with the record, not from thin air.</p>
            </div>
            <div className="cv">
              <h4>Action, not description</h4>
              <p>Ira creates, routes, updates or resolves the record — a grounded answer, a completed action, or both.</p>
            </div>
            <div className="cv">
              <h4>Bounded by permissions</h4>
              <p>Ira operates within the same role-based access as the signed-in user — it can only see and act on data that user may access.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="band" id="depth">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Module depth</p>
            <h2>Enterprise-grade in every module.</h2>
          </div>
          <div className="cards two">
            <article className="pcard reveal"><span className="tag">Incident management</span><h3 style={{ fontSize: "1.1rem" }}>From multi-channel intake to major-incident command</h3>
      <ul>
              <li>Omnichannel intake: portal, email, phone, chat & API with ML auto-categorisation</li>
              <li>Major Incident Mgmt: bridge calls, war-room view, auto-notify, PIR on closure</li>
              <li>AI-suggested category, assignee & resolution notes, with a similar-incidents widget</li>
              <li>Impact × urgency priority matrix, skill-based routing, CSAT on closure</li>
            </ul></article>
            <article className="pcard reveal"><span className="tag">Problem & change</span><h3 style={{ fontSize: "1.1rem" }}>Root-cause discipline, change without collisions</h3>
      <ul>
              <li>Auto-created problems from recurring incidents and event correlation</li>
              <li>RCA workspace: 5-Why, Fishbone & Fault Tree; searchable KEDB in triage</li>
              <li>Standard / Normal / Emergency change models with auto-approval for low risk</li>
              <li>CAB workbench: auto-agenda, voting, conflict calendar, risk scoring & collision detection</li>
            </ul></article>
            <article className="pcard reveal"><span className="tag">CMDB & SLA</span><h3 style={{ fontSize: "1.1rem" }}>A trusted source of truth; SLAs that never slip quietly</h3>
      <ul>
              <li>Agent-based & agentless discovery plus AWS / Azure / GCP resource import</li>
              <li>Visual dependency maps and a health dashboard with IRE de-duplication</li>
              <li>Real-time SLA timers with holiday calendars; OLA and vendor UC in parallel</li>
              <li>Predictive breach warnings at 50 / 75 / 90% with auto re-assignment</li>
            </ul></article>
            <article className="pcard reveal"><span className="tag">Self-service & knowledge</span><h3 style={{ fontSize: "1.1rem" }}>Deflect demand with a portal that learns</h3>
      <ul>
              <li>Multi-category catalog with dynamic forms and multi-level approvals</li>
              <li>Branded self-service portal with an NLU chatbot and live-agent handoff</li>
              <li>KCS capture-in-context authoring; AI search with ML relevance ranking</li>
              <li>Feedback analytics with stale-article retirement — deflection tracked live</li>
            </ul></article>
            <article className="pcard reveal"><span className="tag">Event mgmt & AIOps</span><h3 style={{ fontSize: "1.1rem" }}>Cut the noise — see problems before users do</h3>
      <ul>
              <li>Ingest via REST, SNMP, syslog, email & tool connectors</li>
              <li>Rule + ML correlation, suppression and grouping collapse alert storms</li>
              <li>Event-to-incident thresholds with CI enrichment & priority</li>
              <li>Anomaly detection surfaces emerging issues before SLA breach</li>
            </ul></article>
            <article className="pcard reveal"><span className="tag">Automation & integrations</span><h3 style={{ fontSize: "1.1rem" }}>Automate the busywork, connect the whole stack</h3>
      <ul>
              <li>Low-code Flow Designer: drag-and-drop actions, branches & reusable subflows</li>
              <li>Orchestration runbooks: SSH, PowerShell, REST & cloud-API steps with rollback</li>
              <li>Monitoring: Splunk, Datadog, PagerDuty, Dynatrace, CloudWatch, Azure Monitor</li>
              <li>DevOps & IAM: Jira, Azure DevOps, GitHub, Teams, Slack; Entra, Okta, LDAP</li>
            </ul></article>
          </div>
        </div>
      </section>
      <section id="security">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Security & compliance</p>
            <h2>Enterprise-grade security, built into every layer.</h2>
            <p>RBAC · MFA · AES-256 · audit trail · DLP — the same boundaries govern every module and the AI agent alike.</p>
          </div>
          <div className="cov reveal">
            <div className="cv">
              <h4>Access control</h4>
              <p>Role hierarchy with table-, field- and row-level ACLs, delegated admin and separation of duties.</p>
            </div>
            <div className="cv">
              <h4>Authentication</h4>
              <p>Native MFA, adaptive auth, SAML 2.0 / OIDC SSO and certificate-based auth.</p>
            </div>
            <div className="cv">
              <h4>Encryption</h4>
              <p>AES-256 at rest, TLS 1.2+ in transit, field-level encryption and BYOK support.</p>
            </div>
            <div className="cv">
              <h4>Audit & logging</h4>
              <p>Full CRUD audit trail, retention policy, SIEM export and tamper-evident storage.</p>
            </div>
            <div className="cv">
              <h4>SecOps & vulnerability mgmt</h4>
              <p>SOAR-style playbooks, NVD/CVE feeds, vuln-to-CI mapping and risk scoring.</p>
            </div>
            <div className="cv">
              <h4>API security</h4>
              <p>OAuth 2.0, API key management, rate limiting and per-integration IP allow-listing.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="band" id="analytics">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Dashboards & analytics</p>
            <h2>Decision-ready insight, from the exec suite to the ops floor.</h2>
            <p>Eight purpose-built dashboards — Executive IT, Incident Ops, Change Calendar, CMDB Health, Self-Service, Security Ops and more — plus a drag-and-drop report builder, scheduled distribution, and CSV / Excel / PDF export with ODBC/JDBC access for Power BI, Tableau and Qlik.</p>
          </div>
          <div className="stats">
            <div className="stat reveal">
              <p className="n">8</p>
              <p className="d">purpose-built dashboards: SLA %, P1/P2, MTTR, CSAT, breach risk, deflection & more</p>
            </div>
            <div className="stat teal reveal">
              <p className="n">↓</p>
              <p className="d">ticket volume — chatbot deflection & self-resolution tracked live</p>
            </div>
            <div className="stat gold reveal">
              <p className="n">↑</p>
              <p className="d">first-contact fix — knowledge surfaced in-context to agents</p>
            </div>
            <div className="stat reveal">
              <p className="n">BI</p>
              <p className="d">time-series KPIs with real-time widgets and open BI export</p>
            </div>
          </div>
        </div>
      </section>
      <section className="band-dark" id="roadmap">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Delivery roadmap</p>
            <h2>A phased 24-week path to enterprise ITSM parity.</h2>
          </div>
          <div className="proof reveal">
            <div className="pd"><span className="d0">Release 1 · weeks 1–10</span><h4>Foundation & core ITSM</h4><p>Incident, Problem, Change, CMDB & SLA live end-to-end on real data; SLA timers accurate, CAB functional, CI mapping across classes.</p></div>
            <div className="pd"><span className="d0">Release 2 · weeks 8–18</span><h4>Catalog, automation & integrations</h4><p>Self-service catalog with Flow Designer fulfilment; monitoring tools auto-create incidents; SSO enforced, knowledge search live.</p></div>
            <div className="pd"><span className="d0">Release 3 · weeks 16–24</span><h4>Security, reporting & go-live</h4><p>RBAC / MFA / audit enforced and pen-test cleared; executive dashboards live; data migrated, UAT sign-off & cutover.</p></div>
          </div>
          <div style={{ marginTop: "30px" }}><Link className="btn btn-gold" href="/request-demo">Book a live walkthrough</Link></div>
        </div>
      </section>
      <section className="tight">
        <div className="wrap">
          <div className="cta-box reveal">
            <div>
              <p className="eyebrow" style={{ color: "#fff" }}>Get started</p>
              <h2>Enterprise ITSM depth, with an AI agent inside every module.</h2>
              <p>IraOps reduces time-to-resolution, deflects demand, predicts failures before they land, and gives IT one governed place to run service delivery — from event to resolution to release.</p>
            </div>
            <div className="cta-actions"><Link className="btn btn-gold" href="/request-demo">Book a live walkthrough</Link>
      <p className="mail">or write to <a href="mailto:info@tattvix.ai">info@tattvix.ai</a></p></div>
          </div>
        </div>
      </section>
    </>
  );
}
