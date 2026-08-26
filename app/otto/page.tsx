import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "OTTO — Multi-Agent AI Platform for Autonomous Cloud Operations | Tattvix.ai",
  description: "OTTO by Tattvix.ai: a multi-agent AI platform unifying CloudOps, FinOps, FinOps for AI, SecOps, DataOps, AIOps and Well-Architected Reviews across AWS, Azure, GCP, OCI, Huawei Cloud, Microsoft Fabric and on-prem. L0–L2 fully automated, self-healing, approval-gated.",
  alternates: {
    canonical: "https://tattvix.ai/otto"
  },
  openGraph: {
    type: "website",
    siteName: "Tattvix.ai",
    title: "OTTO — Multi-Agent AI Platform for Autonomous Cloud Operations | Tattvix.ai",
    description: "OTTO by Tattvix.ai: a multi-agent AI platform unifying CloudOps, FinOps, FinOps for AI, SecOps, DataOps, AIOps and Well-Architected Reviews across AWS, Azure, GCP, OCI, Huawei Cloud, Microsoft Fabric and on-prem. L0–L2 fully automated, self-healing, approval-gated.",
    url: "https://tattvix.ai/otto",
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
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Product\",\"name\":\"OTTO\",\"description\":\"Multi-agent AI platform for autonomous cloud operations: CloudOps, FinOps, SecOps, DataOps, AIOps and Well-Architected Reviews across multi-cloud and on-premises.\",\"brand\":{\"@type\":\"Organization\",\"name\":\"Tattvix.ai\"},\"url\":\"https://tattvix.ai/otto\"}" }}
      />
      <style dangerouslySetInnerHTML={{ __html: ".stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:34px}\n.stat{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:20px 18px;text-align:left}\n.stat .n{font-family:var(--fd);font-weight:800;font-size:1.9rem;letter-spacing:-.03em;color:var(--copper);line-height:1.05}\n.stat .d{font-size:.82rem;color:var(--ink-mute);margin-top:6px;line-height:1.45}\n.stat.teal .n{color:var(--teal)}\n.stat.gold .n{color:var(--gold)}\n.agents-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:40px}\n.agent-card{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:20px 18px;transition:transform .2s,border-color .2s,box-shadow .2s}\n.agent-card:hover{transform:translateY(-4px);border-color:var(--copper);box-shadow:0 14px 28px rgba(44,29,18,.09)}\n.agent-card .a-sym{width:40px;height:40px;border-radius:10px;background:var(--espresso);color:var(--gold);font-family:var(--fm);font-weight:600;font-size:.8rem;display:grid;place-items:center;margin-bottom:12px}\n.agent-card.hl .a-sym{background:var(--gold);color:var(--espresso)}\n.agent-card h4{font-family:var(--fd);font-weight:700;font-size:1rem;color:var(--espresso);margin-bottom:5px}\n.agent-card p{font-size:.83rem;color:var(--ink-mute);line-height:1.5}\n.layers{margin-top:40px;display:flex;flex-direction:column;gap:8px}\n.layer{display:grid;grid-template-columns:64px 200px 1fr;gap:18px;align-items:center;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px 20px}\n.layer .l-num{font-family:var(--fd);font-weight:800;font-size:1.3rem;color:var(--gold);text-align:center}\n.layer .l-name{font-family:var(--fm);font-size:.72rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--copper)}\n.layer .l-desc{font-size:.87rem;color:var(--ink-mute)}\n.layer.hl{background:var(--espresso);border-color:var(--espresso)}\n.layer.hl .l-name{color:var(--gold)}\n.layer.hl .l-desc{color:rgba(255,255,255,.7)}\n.loop{display:grid;grid-template-columns:repeat(7,1fr);gap:8px;margin-top:36px}\n.loop .lp{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:14px 10px;text-align:center;position:relative}\n.loop .lp::after{content:\"\\2192\";position:absolute;right:-11px;top:50%;transform:translateY(-50%);color:var(--gold);font-weight:700;z-index:1}\n.loop .lp:last-child::after{content:\"\\21BA\";color:var(--teal)}\n.loop .lp .k{font-family:var(--fd);font-weight:800;font-size:1.05rem;color:var(--copper)}\n.loop .lp .t{font-family:var(--fm);font-size:.62rem;letter-spacing:.05em;text-transform:uppercase;color:var(--ink-mute);margin-top:5px;display:block}\n.tiers{display:flex;flex-direction:column;gap:10px;margin-top:36px}\n.tier{display:grid;grid-template-columns:76px 230px 1fr 150px;gap:16px;align-items:center;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px 20px}\n.tier .t-lvl{font-family:var(--fd);font-weight:800;font-size:1.35rem;color:var(--copper)}\n.tier .t-name{font-family:var(--fm);font-size:.72rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--espresso)}\n.tier .t-desc{font-size:.86rem;color:var(--ink-mute)}\n.tier .t-mode{font-family:var(--fm);font-size:.64rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;padding:6px 10px;border-radius:999px;text-align:center}\n.tier .t-mode.auto{background:rgba(23,148,138,.12);color:var(--teal-deep)}\n.tier .t-mode.aug{background:rgba(201,151,63,.16);color:#8a6420}\n.cov{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:36px}\n.cov .cv{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px}\n.cov .cv h4{font-family:var(--fd);font-weight:700;font-size:1rem;color:var(--espresso);margin-bottom:5px}\n.cov .cv p{font-size:.82rem;color:var(--ink-mute);line-height:1.5}\n.persona{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:36px}\n.pv{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:20px 18px}\n.pv .who{font-family:var(--fm);font-size:.66rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--teal);margin-bottom:8px;display:block}\n.pv h4{font-family:var(--fd);font-weight:700;font-size:1.02rem;color:var(--espresso);margin-bottom:5px;line-height:1.35}\n.pv p{font-size:.84rem;color:var(--ink-mute)}\n.modgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:36px}\n.mod{background:var(--card);border:1px solid var(--line);border-radius:11px;padding:16px 15px;transition:border-color .2s,transform .2s}\n.mod:hover{border-color:var(--gold);transform:translateY(-3px)}\n.mod h4{font-family:var(--fd);font-weight:700;font-size:.95rem;color:var(--espresso);margin-bottom:4px}\n.mod p{font-size:.78rem;color:var(--ink-mute);line-height:1.45}\n.proof{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:30px}\n.proof .pd{background:rgba(255,255,255,.06);border:1px solid var(--line-dark);border-radius:12px;padding:20px 18px}\n.proof .pd .d0{font-family:var(--fm);font-size:.66rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:8px}\n.proof .pd h4{font-family:var(--fd);font-weight:700;font-size:1.05rem;color:#fff;margin-bottom:4px}\n.proof .pd p{font-size:.85rem;color:rgba(255,255,255,.65)}\n.dual{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:36px}\n.dual .side{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:26px 24px}\n.dual .side.d2{border-color:var(--gold)}\n.dual .side .s-tag{font-family:var(--fm);font-size:.66rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--copper);display:block;margin-bottom:8px}\n.dual .side h3{font-family:var(--fd);font-weight:700;font-size:1.2rem;color:var(--espresso);margin-bottom:4px}\n.dual .side .s-sub{font-size:.86rem;color:var(--ink-mute);margin-bottom:14px}\n.dual .side ul{list-style:none;display:flex;flex-direction:column;gap:8px;font-size:.88rem;color:var(--ink-soft)}\n.dual .side ul li{display:flex;gap:10px;align-items:baseline}\n.dual .side ul li::before{content:\"\\25B8\";color:var(--gold);font-size:.7rem}\n.pains{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:36px}\n.pain{background:var(--card);border:1px solid var(--line);border-radius:11px;padding:16px 18px;display:flex;gap:12px;align-items:baseline}\n.pain .x{color:#A33B2A;font-weight:700;font-family:var(--fm)}\n.pain p{font-size:.88rem;color:var(--ink-soft)}\n.pain p b{color:var(--espresso)}\n@media(max-width:980px){\n.stats,.agents-grid,.modgrid{grid-template-columns:1fr 1fr}\n.loop{grid-template-columns:repeat(4,1fr)}\n.loop .lp:nth-child(4)::after{content:\"\"}\n.cov,.persona{grid-template-columns:1fr 1fr}\n.tier{grid-template-columns:60px 1fr;grid-template-rows:auto auto}\n.tier .t-desc{grid-column:1/-1}\n.tier .t-mode{grid-column:2;justify-self:start}\n.layer{grid-template-columns:48px 1fr}\n.layer .l-desc{grid-column:1/-1}\n.dual,.pains{grid-template-columns:1fr}}\n@media(max-width:700px){\n.stats,.agents-grid,.modgrid,.cov,.persona,.proof,.loop{grid-template-columns:1fr 1fr}\n.loop .lp::after{display:none}}\n" }} />
      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb"><Link href="/">Home</Link> <span>/</span> <Link href="/solutions">Solutions</Link> <span>/</span> OTTO</p>
          <div className="hero-split">
            <div>
              <p className="eyebrow">Ot · 01 · AI Product · Autonomous Cloud Operations</p>
              <div className="section-head">
                <h1>Not a dashboard. A workforce.</h1>
                <p>OTTO is a multi-agent AI platform that runs your cloud and on-prem estate: coordinated agents discover, diagnose, plan, remediate and validate — unifying CloudOps, FinOps, SecOps, DataOps, AIOps and Well-Architected Reviews. You set the policy and approve.</p>
              </div>
              <div className="platform-row"><span className="platform">AWS</span><span className="platform">Azure</span><span className="platform">Google Cloud</span><span className="platform">OCI</span><span className="platform">Huawei Cloud</span><span className="platform">MS Fabric</span><span className="platform">On-Prem</span></div>
              <div style={{ marginTop: "26px", display: "flex", gap: "12px", flexWrap: "wrap" }}><Link className="btn btn-copper" href="/request-demo">Start the 10-day proof</Link><Link className="btn btn-ghost" href="/solutions">All solutions</Link></div>
            </div>
            <div className="hero-visual reveal in"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="OTTO automated cloud operations illustration">
      <rect width="520" height="340" fill="#F7F3EC" />
      <g opacity=".5" stroke="#E4DACB"><line x1="0" y1="85" x2="520" y2="85" /><line x1="0" y1="170" x2="520" y2="170" /><line x1="0" y1="255" x2="520" y2="255" /></g>
      <g><path d="M70 90 q0-26 26-26 q8-20 32-20 q26 0 32 22 q22 2 22 24 q0 22-24 22 h-64 q-24 0-24-22z" fill="#fff" stroke="#A85B34" strokeWidth="2.5" /><text x="126" y="86" fontFamily="monospace" fontSize="13" fill="#A85B34" textAnchor="middle" fontWeight="bold">AWS</text></g>
      <g><path d="M330 74 q0-26 26-26 q8-20 32-20 q26 0 32 22 q22 2 22 24 q0 22-24 22 h-64 q-24 0-24-22z" fill="#fff" stroke="#17948A" strokeWidth="2.5" /><text x="386" y="70" fontFamily="monospace" fontSize="13" fill="#0E6B64" textAnchor="middle" fontWeight="bold">Azure</text></g>
      <g><path d="M200 300 q0-24 24-24 q8-18 30-18 q24 0 30 20 q20 2 20 22 q0 20-22 20 h-60 q-22 0-22-20z" fill="#fff" stroke="#C9973F" strokeWidth="2.5" /><text x="252" y="300" fontFamily="monospace" fontSize="12" fill="#7E4021" textAnchor="middle" fontWeight="bold">GCP</text></g>
      <g stroke="#C9973F" strokeWidth="2" strokeDasharray="6 6" opacity=".8"><line x1="150" y1="105" x2="225" y2="150" /><line x1="380" y1="95" x2="295" y2="148" /><line x1="255" y1="255" x2="258" y2="215" /></g>
      <g><polygon points="260,120 312,150 312,210 260,240 208,210 208,150" fill="#2C1D12" /><polygon points="260,132 300,155 300,205 260,228 220,205 220,155" fill="none" stroke="#C9973F" strokeWidth="2" /><text x="260" y="188" fontFamily="monospace" fontSize="22" fill="#C9973F" textAnchor="middle" fontWeight="bold">Ot</text></g>
      <circle cx="260" cy="180" r="78" fill="none" stroke="#17948A" strokeWidth="1.5" opacity=".45" strokeDasharray="4 7" />
      <circle cx="260" cy="180" r="98" fill="none" stroke="#A85B34" strokeWidth="1.5" opacity=".3" strokeDasharray="4 9" />
      <g fontFamily="monospace" fontSize="10.5">
      <rect x="386" y="188" width="120" height="26" rx="6" fill="#fff" stroke="#E4DACB" /><circle cx="400" cy="201" r="4" fill="#17948A" /><text x="410" y="205" fill="#2C1D12">patched · auto</text>
      <rect x="386" y="222" width="120" height="26" rx="6" fill="#fff" stroke="#E4DACB" /><circle cx="400" cy="235" r="4" fill="#C9973F" /><text x="410" y="239" fill="#2C1D12">cost -18%</text>
      <rect x="14" y="188" width="122" height="26" rx="6" fill="#fff" stroke="#E4DACB" /><circle cx="28" cy="201" r="4" fill="#17948A" /><text x="38" y="205" fill="#2C1D12">healed 02:14</text>
      <rect x="14" y="222" width="122" height="26" rx="6" fill="#fff" stroke="#E4DACB" /><circle cx="28" cy="235" r="4" fill="#A85B34" /><text x="38" y="239" fill="#2C1D12">drift · gated</text>
      </g></svg></div>
          </div>
        </div>
      </div>
      <section className="tight">
        <div className="wrap">
          <div className="stats">
            <div className="stat reveal">
              <p className="n">L0–L2</p>
              <p className="d">operations fully automated — monitoring, triage, ticketing, remediation</p>
            </div>
            <div className="stat teal reveal">
              <p className="n">6</p>
              <p className="d">disciplines unified on one data foundation and one agentic engine</p>
            </div>
            <div className="stat gold reveal">
              <p className="n">7</p>
              <p className="d">environments: AWS, Azure, GCP, OCI, Huawei, Fabric & on-prem</p>
            </div>
            <div className="stat reveal">
              <p className="n">24×7</p>
              <p className="d">consistent agent execution — every action approved, audited, reversible</p>
            </div>
          </div>
          <p className="reveal" style={{ marginTop: "22px", fontFamily: "var(--fm)", fontSize: ".8rem", color: "var(--ink-mute)" }}><b style={{ color: "var(--copper)" }}>The compounding difference  </b>Every incident outcome — success, failure, or human rejection — retrains the models. New self-healing patterns are discovered, validated and promoted continuously. The platform you buy today is the least capable it will ever be.</p>
        </div>
      </section>
      <section className="band" id="workforce">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">The workforce</p>
            <h2>Meet the agents.</h2>
            <p>Orchestrated by a Supervisor Agent with one shared memory — so what any agent learns, every agent knows.</p>
          </div>
          <div className="agents-grid">
            <div className="agent-card reveal">
              <div className="a-sym">Dsc</div>
              <h4>Discovery Agent</h4>
              <p>Continuous discovery, inventory, topology & dependency mapping, drift detection.</p>
            </div>
            <div className="agent-card reveal">
              <div className="a-sym">Ctx</div>
              <h4>Context Agent</h4>
              <p>Normalises & correlates data; enriches with ownership, tags and CMDB context.</p>
            </div>
            <div className="agent-card reveal">
              <div className="a-sym">Dgn</div>
              <h4>Diagnosis Agent</h4>
              <p>Symptom analysis and root cause using knowledge, policies & past outcomes.</p>
            </div>
            <div className="agent-card reveal">
              <div className="a-sym">Pln</div>
              <h4>Planner Agent</h4>
              <p>Generates remediation options with risk, impact, cost & rollback awareness.</p>
            </div>
            <div className="agent-card reveal">
              <div className="a-sym">Ntf</div>
              <h4>Notification Agent</h4>
              <p>Status to users via Slack, Teams & email; stakeholder updates and escalation.</p>
            </div>
            <div className="agent-card reveal">
              <div className="a-sym">Rmd</div>
              <h4>Remediation Agent</h4>
              <p>Executes approved actions through governed tools & workflows only.</p>
            </div>
            <div className="agent-card reveal">
              <div className="a-sym">Val</div>
              <h4>Validation Agent</h4>
              <p>Health checks, service tests and confirmation before any ticket closes.</p>
            </div>
            <div className="agent-card hl reveal">
              <div className="a-sym">Cop</div>
              <h4>OTTO Copilot</h4>
              <p>The voice of the whole team — ask anything, approve fixes in one thread.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="architecture">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Agentic architecture</p>
            <h2>Nine layers, one governed autonomy loop.</h2>
          </div>
          <div className="layers reveal">
            <div className="layer"><span className="l-num">1</span><span className="l-name">Experience</span><span className="l-desc">Users & operators · chat UI · APIs · alerts & events · schedules · ITSM/CMDB events</span></div>
            <div className="layer hl"><span className="l-num">2</span><span className="l-name">Agent orchestration</span><span className="l-desc">Supervisor Agent understands intent, decomposes goals, assigns tasks to Discovery, Context, Diagnosis, Planner & Notification agents, synthesises results</span></div>
            <div className="layer"><span className="l-num">3</span><span className="l-name">Policy & risk</span><span className="l-desc">Guardrails · environment restrictions · compliance checks · risk scoring · change windows</span></div>
            <div className="layer"><span className="l-num">4</span><span className="l-name">Approval</span><span className="l-desc">Human approval (review / approve / reject) · auto-approval for low-risk, pre-approved policies</span></div>
            <div className="layer"><span className="l-num">5</span><span className="l-name">Execution</span><span className="l-desc">Remediation Agent via governed tools: Terraform, Ansible, SSM, ServiceNow, n8n, cloud APIs</span></div>
            <div className="layer"><span className="l-num">6</span><span className="l-name">Validation</span><span className="l-desc">Automated tests · health & synthetic checks · compliance & business validation</span></div>
            <div className="layer"><span className="l-num">7</span><span className="l-name">Knowledge & memory</span><span className="l-desc">Asset graph · runbooks & SOPs · incident history · outcome memory · audit logs</span></div>
            <div className="layer"><span className="l-num">8</span><span className="l-name">Data sources</span><span className="l-desc">AWS · Azure · GCP · OCI · Huawei · on-prem servers, network, storage, DBs, apps · ITSM, CMDB, monitoring, logs</span></div>
            <div className="layer"><span className="l-num">9</span><span className="l-name">Governance & security</span><span className="l-desc">Identity & access · guardrails & policy · audit & compliance (SOC 2, ISO) · encryption · observability · FinOps insights</span></div>
          </div>
        </div>
      </section>
      <section className="band" id="operating-model">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">The operating model</p>
            <h2>L0–L2 fully automated. L3 with GenAI.</h2>
          </div>
          <div className="tiers reveal">
            <div className="tier"><span className="t-lvl">L0</span><span className="t-name">Monitoring & event intake</span><span className="t-desc">24×7 telemetry, alert dedup, noise suppression, anomalies surfaced in under 15 minutes.</span><span className="t-mode auto">Fully automated</span></div>
            <div className="tier"><span className="t-lvl">L1</span><span className="t-name">Triage & ticketing</span><span className="t-desc">Tickets auto-created in ServiceNow/Jira, enriched, correlated and prioritised by business impact.</span><span className="t-mode auto">Fully automated</span></div>
            <div className="tier"><span className="t-lvl">L2</span><span className="t-name">Diagnosis & remediation</span><span className="t-desc">Playbook selected, self-healing executed, fix verified, ticket auto-closed — rollback snapshot always.</span><span className="t-mode auto">Fully automated</span></div>
            <div className="tier"><span className="t-lvl">L3</span><span className="t-name">Engineering & architecture</span><span className="t-desc">OTTO Copilot hands engineers root cause, history & suggested fixes — humans handle only the novel.</span><span className="t-mode aug">AI-augmented</span></div>
          </div>
          <div className="section-head reveal" style={{ marginTop: "44px" }}>
            <p className="eyebrow">The self-healing loop</p>
            <h2 style={{ fontSize: "1.4rem" }}>Step 7 feeds step 1 — autonomy that compounds.</h2>
          </div>
          <div className="loop reveal">
            <div className="lp"><span className="k">1</span><span className="t">Detect</span></div>
            <div className="lp"><span className="k">2</span><span className="t">Correlate</span></div>
            <div className="lp"><span className="k">3</span><span className="t">Ticket</span></div>
            <div className="lp"><span className="k">4</span><span className="t">Plan & approve</span></div>
            <div className="lp"><span className="k">5</span><span className="t">Self-heal</span></div>
            <div className="lp"><span className="k">6</span><span className="t">Validate & close</span></div>
            <div className="lp"><span className="k">7</span><span className="t">Learn</span></div>
          </div>
          <p className="reveal" style={{ marginTop: "18px", fontFamily: "var(--fm)", fontSize: ".78rem", color: "var(--ink-mute)" }}>Reinforcement learning promotes new self-healing patterns after validation.</p>
        </div>
      </section>
      <section id="capabilities">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Eight capabilities</p>
            <h2>One platform. Every ops discipline.</h2>
          </div>
          <div className="cards">
            <article className="pcard reveal"><span className="tag">01 · CloudOps</span><h3>Autonomous operations across the estate</h3>
      <ul>
              <li>Zero-touch ticket lifecycle — enriched, self-healed, verified, auto-closed with audit trail</li>
              <li>AI event correlation collapses alert storms into single root-cause incidents</li>
              <li>150+ self-healing playbooks: restart, resize, patch, fail over — dry-run first, rollback always</li>
              <li>Unified inventory & topology across 6 clouds and on-prem, drift-detected</li>
              <li>200+ configuration rules in real time; patch, backup & DR oversight</li>
            </ul></article>
            <article className="pcard reveal"><span className="tag">02 · FinOps</span><h3>Cost intelligence on the FOCUS 1.2 standard</h3>
      <ul>
              <li>One unified cost model: AWS CUR 2.0, Azure, GCP, OCI, Huawei & Kubernetes (OpenCost)</li>
              <li>30/60/90-day ML forecasting, burn-rate alerts, what-if scenarios</li>
              <li>Cost anomalies detected in under 15 minutes with false-positive suppression</li>
              <li>ML rightsizing, RI/SP/Spot advisory, auto-commitments under budget guardrails</li>
              <li>Tag governance, showback & invoice-ready chargeback, carbon tracking</li>
            </ul></article>
            <article className="pcard reveal"><span className="tag">03 · FinOps for AI</span><h3>The AI bill, finally under control</h3>
      <ul>
              <li>Real-time GPU utilisation and cost attribution per model & experiment</li>
              <li>Cost-per-token analytics across OpenAI, Anthropic, Bedrock, Azure OpenAI, Vertex & self-hosted LLMs</li>
              <li>AI/ML spend allocated to teams, projects and experiments</li>
              <li>Spot-instance orchestration for training; per-team AI budgets with self-healing throttles</li>
              <li>The board-ready answer to “what is our AI costing us — and earning us?”</li>
            </ul></article>
            <article className="pcard reveal"><span className="tag">04 · SecOps</span><h3>Every security domain, covered & self-healing</h3>
      <ul>
              <li>CSPM with 800+ checks across compute, containers, storage, network & encryption</li>
              <li>Identity & access governance: MFA, key rotation, exposed credentials, least privilege</li>
              <li>AI-correlated threat detection across GuardDuty, Sentinel, Chronicle & SecMaster</li>
              <li>Unified 0–100 compliance score: CIS, ISO 27001, SOC 2, NIST, GDPR</li>
              <li>80+ misconfigurations fixed automatically — approval-gated, snapshot-backed</li>
            </ul></article>
            <article className="pcard reveal"><span className="tag">05 · DataOps</span><h3>Pipeline observability, Fabric-first</h3>
      <ul>
              <li>14 Microsoft Fabric capabilities: Spark health, OneLake freshness, CU burn, Power BI SLAs, lineage & PII</li>
              <li>Every cloud's pipelines: Glue, Data Factory, OCI Data Integration, Huawei DLF & DWS</li>
              <li>Cross-cloud data quality: row-count reconciliation, schema-drift alerts</li>
              <li>Pipeline FinOps — every CU, DPU and warehouse hour in the FOCUS cost model</li>
              <li>Predictive failure alerts before SLA breach, tickets auto-assigned</li>
            </ul></article>
            <article className="pcard reveal"><span className="tag">06 · AIOps</span><h3>The intelligence behind the autonomy</h3>
      <ul>
              <li>Anomaly detection with deploy-aware false-positive suppression</li>
              <li>Forecasting ensembles with confidence bands across cost, capacity & performance</li>
              <li>Graph-based incident correlation across cost, security, performance & pipelines</li>
              <li>Reinforcement learning promotes new playbooks without degrading latency</li>
              <li>Private LLMs — natural-language ops without data leaving the platform</li>
            </ul></article>
            <article className="pcard reveal"><span className="tag">07 · Well-Architected</span><h3>Consultant-grade reviews, on demand</h3>
      <ul>
              <li>AWS: 200+ checks across 6 pillars; Azure: 180+ incl. Zero Trust & AZ resilience</li>
              <li>GCP Architecture Framework, OCI Best Practices, Huawei: 120+ checks</li>
              <li>Branded PDF/DOCX reports with risk heat maps</li>
              <li>A prioritised roadmap the agents can then execute</li>
              <li>Run on demand — or automatically every week</li>
            </ul></article>
            <article className="pcard reveal"><span className="tag">08 · Copilot</span><h3>A copilot that acts, not just answers</h3>
      <ul>
              <li>Ask anything: inventory, cost, posture, incidents — grounded in your telemetry</li>
              <li>Root-cause narratives; retrieves runbooks, past resolutions & docs</li>
              <li>Proposes, simulates & executes fixes — with approval</li>
              <li>In the portal, Slack and Microsoft Teams, with conversation memory</li>
              <li>Every answer traceable, every action audited</li>
            </ul></article>
          </div>
        </div>
      </section>
      <section className="band" id="coverage">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Coverage</p>
            <h2>The whole estate. One control plane.</h2>
            <p>Read-only, least-privilege connectors — write actions only through the governed execution layer under your approval policy.</p>
          </div>
          <div className="cov reveal">
            <div className="cv">
              <h4>AWS</h4>
              <p>CUR 2.0/FOCUS, Trusted Advisor, GuardDuty, Config, Bedrock & SageMaker AI costs</p>
            </div>
            <div className="cv">
              <h4>Microsoft Azure</h4>
              <p>Cost Mgmt, Defender, Sentinel, Resource Graph, Azure OpenAI cost tracking</p>
            </div>
            <div className="cv">
              <h4>Google Cloud</h4>
              <p>BigQuery billing, Recommender, Security Command Center, Chronicle, Vertex AI</p>
            </div>
            <div className="cv">
              <h4>Oracle Cloud (OCI)</h4>
              <p>FOCUS-format cost reports, Cloud Advisor, Cloud Guard, Security Zones, Vault</p>
            </div>
            <div className="cv">
              <h4>Huawei Cloud</h4>
              <p>CES 1-minute metrics, HSS, SecMaster, CFW, CTS audit</p>
            </div>
            <div className="cv">
              <h4>Microsoft Fabric</h4>
              <p>All 7 workloads — CU cost governance inside the FinOps model</p>
            </div>
            <div className="cv">
              <h4>On-premises</h4>
              <p>Servers, network, storage, DBs, apps, middleware — same agents, same policy</p>
            </div>
            <div className="cv">
              <h4>Kubernetes</h4>
              <p>OpenCost real-time allocation, cluster health, per-namespace attribution</p>
            </div>
            <div className="cv">
              <h4>ITSM & tooling</h4>
              <p>ServiceNow, Jira, CMDB, Slack, Teams, PagerDuty; Terraform, Ansible, SSM, n8n</p>
            </div>
          </div>
        </div>
      </section>
      <section id="value">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Customer value</p>
            <h2>A number for every seat at the table.</h2>
          </div>
          <div className="persona reveal">
            <div className="pv"><span className="who">CFO / Finance</span><h4>20–30% lower cloud bill — and the AI bill visible at last</h4><p>The cost agent hunts waste daily and executes approved savings; FOCUS reporting plus GPU/token attribution for AI spend.</p></div>
            <div className="pv"><span className="who">CISO / Security</span><h4>Continuous posture, not audit panic</h4><p>Live 0–100 score, 800+ checks, compliance mapping — and misconfigurations that fix themselves under policy.</p></div>
            <div className="pv"><span className="who">Head of Ops</span><h4>60–80% of L1/L2 ticket effort automated away</h4><p>Agents monitor, triage, ticket, remediate, validate and close — 24×7, across cloud and on-prem.</p></div>
            <div className="pv"><span className="who">CIO / CTO</span><h4>Five tools become one; engineers return to the roadmap</h4><p>Unified disciplines, open core with no lock-in, and a copilot the whole organisation can ask.</p></div>
            <div className="pv"><span className="who">Data & AI leaders</span><h4>Pipeline reliability and AI ROI visibility</h4><p>Fabric-first DataOps plus FinOps for AI — cost-per-token, per-model, per-team economics.</p></div>
            <div className="pv"><span className="who">Sustainability</span><h4>Carbon per cloud, region and service</h4><p>Emissions tracked alongside cost — optimisation recommendations account for both.</p></div>
          </div>
        </div>
      </section>
      <section className="band-dark" id="proof">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Path to value</p>
            <h2>Start this week — the 10-day proof.</h2>
            <p>One account, read-only, this week — and in ten days you watch a ticket close itself on your own estate.</p>
          </div>
          <div className="proof reveal">
            <div className="pd"><span className="d0">Day 0</span><h4>Connect read-only</h4><p>The Discovery Agent maps the estate — nothing touched.</p></div>
            <div className="pd"><span className="d0">Day 3</span><h4>Your findings, live</h4><p>Your waste, risks & noise — ask OTTO Copilot anything.</p></div>
            <div className="pd"><span className="d0">Day 10</span><h4>First self-heal</h4><p>An approved playbook closes a real ticket, live.</p></div>
          </div>
          <div style={{ marginTop: "30px" }}><Link className="btn btn-gold" href="/request-demo">Start the 10-day proof</Link></div>
        </div>
      </section>
      <section className="tight">
        <div className="wrap">
          <div className="cta-box reveal">
            <div>
              <p className="eyebrow" style={{ color: "#fff" }}>Get started</p>
              <h2>One platform. Eight agents. Your entire estate, running itself.</h2>
              <p>CloudOps, FinOps, FinOps for AI, SecOps, DataOps, AIOps and Well-Architected Reviews — governed by your policies and improving every week.</p>
            </div>
            <div className="cta-actions"><Link className="btn btn-gold" href="/request-demo">Request a demo</Link>
      <p className="mail">or write to <a href="mailto:info@tattvix.ai">info@tattvix.ai</a></p></div>
          </div>
        </div>
      </section>
    </>
  );
}
