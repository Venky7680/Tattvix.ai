import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Tattvix.ai — AI Products, AI Services & AI-Based Data Services | Intelligence Built In, Affordability by Design",
  description: "Tattvix.ai builds AI products (OTTO cloud operations, Autonoma agent orchestration, IraOps service desk, Voice AI, Vertical AI), AI-based data services on Microsoft Fabric, Huawei DataArts and Apache stack, and custom AI services on Azure AI Foundry, OpenAI, Huawei ModelArts and AWS Bedrock.",
  openGraph: {
    type: "website",
    siteName: "Tattvix.ai",
    title: "Tattvix.ai — AI Products, AI Services & AI-Based Data Services | Intelligence Built In, Affordability by Design",
    description: "Tattvix.ai builds AI products (OTTO cloud operations, Autonoma agent orchestration, IraOps service desk, Voice AI, Vertical AI), AI-based data services on Microsoft Fabric, Huawei DataArts and Apache stack, and custom AI services on Azure AI Foundry, OpenAI, Huawei ModelArts and AWS Bedrock.",
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
      <link rel="canonical" href="https://tattvix.ai/" />
      <meta property="og:url" content="https://tattvix.ai/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"Tattvix.ai\",\"url\":\"https://tattvix.ai\",\n\"logo\":\"https://tattvix.ai/assets/tattvix-logo-full.png\",\"email\":\"info@tattvix.ai\",\"foundingDate\":\"2026\",\n\"slogan\":\"Intelligence built in. Affordability by design.\",\n\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"Visakhapatnam\",\"addressRegion\":\"Andhra Pradesh\",\"addressCountry\":\"IN\"},\n\"description\":\"Tattvix.ai builds AI products (OTTO, Autonoma, IraOps, Voice AI, Vertical AI), AI-based data services on Microsoft Fabric, Huawei DataArts and Apache stack, and custom AI services on Azure AI Foundry, OpenAI, Huawei ModelArts and AWS Bedrock.\"}" }}
      />
      <style dangerouslySetInnerHTML={{ __html: ".hero{padding:78px 0 62px}\n.hero-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:48px;align-items:center}\n.hero h1{font-family:var(--fd);font-size:clamp(2.3rem,4.8vw,3.6rem);font-weight:800;line-height:1.06;letter-spacing:-.028em;margin:18px 0 18px;color:var(--espresso)}\n.hero h1 em{font-style:normal;color:var(--copper);position:relative;white-space:nowrap}\n.hero h1 em::after{content:\"\";position:absolute;left:0;right:0;bottom:.06em;height:.32em;background:var(--gold-soft);z-index:-1;border-radius:3px}\n.hero .lede{font-size:1.1rem;color:var(--ink-soft);max-width:54ch;margin-bottom:28px}\n.hero-ctas{display:flex;gap:12px;flex-wrap:wrap}\n.hero-note{margin-top:28px;font-family:var(--fm);font-size:.75rem;color:var(--ink-mute)}\n.hero-note b{color:var(--copper)}\n.hero-cluster{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:430px;justify-self:end;width:100%}\n.hero-cluster .el{opacity:0;transform:translateY(14px);animation:rise .6s ease forwards}\n@keyframes rise{to{opacity:1;transform:none}}\n.hero-cluster .caption{grid-column:1/-1;font-family:var(--fm);font-size:.68rem;color:var(--ink-mute);text-align:right;padding-top:2px}\n.ribbon{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--card);padding:15px 0}\n.ribbon .wrap{display:flex;gap:32px;flex-wrap:wrap;justify-content:center}\n.ribbon span{font-family:var(--fm);font-size:.72rem;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-mute)}\n.ribbon b{color:var(--teal)}\n@media(max-width:980px){.hero-grid{grid-template-columns:1fr;gap:40px}.hero-cluster{justify-self:start;max-width:460px}}\n@media(max-width:440px){.hero-cluster{grid-template-columns:repeat(2,1fr)}}\n" }} />
      <style dangerouslySetInnerHTML={{ __html: "@media(max-width:980px){#vert-cards{grid-template-columns:repeat(3,1fr)!important}}@media(max-width:700px){#vert-cards{grid-template-columns:repeat(2,1fr)!important}}" }} />
      <div className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">AI Products · AI Services · AI-Based Data Services</p>
            <h1>Intelligence <em>built in</em>. Affordability by design.</h1>
            <p className="lede">Tattvix.ai builds the AI your business runs on — products like OTTO, Autonoma, and IraOps that automate operations end-to-end, data platforms that turn your information into advantage, and custom AI services on the platforms you already trust. Enterprise-grade intelligence, priced for growing businesses.</p>
            <div className="hero-ctas"><Link className="btn btn-copper" href="/request-demo">Request a demo</Link><a className="btn btn-ghost" href="#solutions-index">Explore all solutions</a></div>
            <p className="hero-note"><b>tattva</b> · Sanskrit — element; a fundamental principle. We build the elements of business AI.</p>
          </div>
          <div className="hero-cluster" aria-label="Tattvix product elements"><Link className="el dark" style={{ animationDelay: ".05s" }} href="/otto"><span className="num">01</span><span className="sym">Ot</span><span className="name">OTTO</span></Link><Link className="el gold" style={{ animationDelay: ".11s" }} href="/autonoma"><span className="num">02</span><span className="sym">An</span><span className="name">Autonoma</span></Link><Link className="el " style={{ animationDelay: ".17s" }} href="/iraops"><span className="num">03</span><span className="sym">Ir</span><span className="name">IraOps</span></Link><Link className="el " style={{ animationDelay: ".23s" }} href="/voice-ai"><span className="num">04</span><span className="sym">Vx</span><span className="name">Voice AI</span></Link><Link className="el " style={{ animationDelay: ".29s" }} href="/hr-ai"><span className="num">05</span><span className="sym">Hr</span><span className="name">HR AI</span></Link><Link className="el " style={{ animationDelay: ".35s" }} href="/finance-ai"><span className="num">06</span><span className="sym">Fi</span><span className="name">Finance AI</span></Link><Link className="el " style={{ animationDelay: ".41s" }} href="/logistics-ai"><span className="num">07</span><span className="sym">Lg</span><span className="name">Logistics</span></Link><Link className="el teal" style={{ animationDelay: ".47s" }} href="/data-platforms"><span className="num">10</span><span className="sym">Dw</span><span className="name">Data</span></Link><Link className="el teal" style={{ animationDelay: ".53s" }} href="/ai-services"><span className="num">11</span><span className="sym">Ai</span><span className="name">AI Services</span></Link>
      <p className="caption">the tattvix table — click any element to explore</p></div>
        </div>
      </div>
      <div className="ribbon" role="presentation">
        <div className="wrap">
      <span>Est. <b>2026</b></span><span>AWS / Azure / GCP / Huawei Cloud</span><span>Built for SMB & retail</span><span>Human-in-the-loop by design</span>
      </div>
      </div>
      <section id="products">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Flagship AI products</p>
            <h2>Meet OTTO, Autonoma, and IraOps.</h2>
            <p>Three products that take over the operations every business runs on — each with a dedicated page and a live demo on request.</p>
          </div>
          <div className="cards">
            <article className="pcard reveal"><div className="visual" aria-hidden="true"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="OTTO automated cloud operations illustration">
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
      </g></svg></div><span className="tag">Ot · 01 · Cloud Ops</span><h3>OTTO</h3><p>Not a dashboard — a workforce. Eight coordinated AI agents unify CloudOps, FinOps, SecOps, DataOps and AIOps across AWS, Azure, GCP, OCI, Huawei, Fabric and on-prem.</p><Link className="more" href="/otto">Explore OTTO →</Link></article>
            <article className="pcard reveal"><div className="visual" aria-hidden="true"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Autonoma agent orchestration illustration">
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
      </g></svg></div><span className="tag">An · 02 · Agentic Platform</span><h3>Autonoma</h3><p>The enterprise AI orchestration platform: an Agent Builder, 300+ ready automations, data intelligence and chatbots — governed end to end.</p><Link className="more" href="/autonoma">Explore Autonoma →</Link></article>
            <article className="pcard reveal"><div className="visual" aria-hidden="true"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="IraOps AI service desk illustration">
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
      <text x="260" y="312" fontFamily="monospace" fontSize="11" fill="#A85B34" textAnchor="middle">resolution rate 86% · human-gated where it matters</text></svg></div><span className="tag">Ir · 03 · Service Desk</span><h3>IraOps</h3><p>Enterprise ITSM reimagined around an AI that acts: 13 integrated modules, 77 capabilities, and Ira — an embedded agent that resolves, routes and answers.</p><Link className="more" href="/iraops">Explore IraOps →</Link></article>
          </div>
          <div className="cards two" style={{ marginTop: "18px" }}>
            <article className="pcard reveal"><div className="visual" aria-hidden="true"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Voice AI conversation illustration">
      <rect width="520" height="340" fill="#F7F3EC" />
      <circle cx="52" cy="170" r="30" fill="#2C1D12" /><path d="M44 162 a8 8 0 0 1 16 0 v8 a8 8 0 0 1 -16 0z" fill="#C9973F" /><rect x="50" y="182" width="4" height="8" fill="#C9973F" /><rect x="44" y="190" width="16" height="3" rx="1.5" fill="#C9973F" />
      <rect x="90" y="161" width="6" height="18" rx="3" fill="#C9973F" opacity=".92" /><rect x="102" y="153" width="6" height="34" rx="3" fill="#17948A" opacity=".92" /><rect x="114" y="144" width="6" height="52" rx="3" fill="#17948A" opacity=".92" /><rect x="126" y="135" width="6" height="70" rx="3" fill="#C9973F" opacity=".92" /><rect x="138" y="141" width="6" height="58" rx="3" fill="#17948A" opacity=".92" /><rect x="150" y="150" width="6" height="40" rx="3" fill="#17948A" opacity=".92" /><rect x="162" y="157" width="6" height="26" rx="3" fill="#C9973F" opacity=".92" /><rect x="174" y="148" width="6" height="44" rx="3" fill="#17948A" opacity=".92" /><rect x="186" y="137" width="6" height="66" rx="3" fill="#17948A" opacity=".92" /><rect x="198" y="128" width="6" height="84" rx="3" fill="#C9973F" opacity=".92" /><rect x="210" y="138" width="6" height="64" rx="3" fill="#17948A" opacity=".92" /><rect x="222" y="149" width="6" height="42" rx="3" fill="#17948A" opacity=".92" /><rect x="234" y="155" width="6" height="30" rx="3" fill="#C9973F" opacity=".92" /><rect x="246" y="145" width="6" height="50" rx="3" fill="#17948A" opacity=".92" /><rect x="258" y="133" width="6" height="74" rx="3" fill="#17948A" opacity=".92" /><rect x="270" y="124" width="6" height="92" rx="3" fill="#C9973F" opacity=".92" /><rect x="282" y="135" width="6" height="70" rx="3" fill="#17948A" opacity=".92" /><rect x="294" y="146" width="6" height="48" rx="3" fill="#17948A" opacity=".92" /><rect x="306" y="154" width="6" height="32" rx="3" fill="#C9973F" opacity=".92" /><rect x="318" y="144" width="6" height="52" rx="3" fill="#17948A" opacity=".92" /><rect x="330" y="134" width="6" height="72" rx="3" fill="#17948A" opacity=".92" /><rect x="342" y="141" width="6" height="58" rx="3" fill="#C9973F" opacity=".92" /><rect x="354" y="150" width="6" height="40" rx="3" fill="#17948A" opacity=".92" /><rect x="366" y="156" width="6" height="28" rx="3" fill="#17948A" opacity=".92" /><rect x="378" y="147" width="6" height="46" rx="3" fill="#C9973F" opacity=".92" /><rect x="390" y="139" width="6" height="62" rx="3" fill="#17948A" opacity=".92" /><rect x="402" y="145" width="6" height="50" rx="3" fill="#17948A" opacity=".92" /><rect x="414" y="152" width="6" height="36" rx="3" fill="#C9973F" opacity=".92" /><rect x="426" y="158" width="6" height="24" rx="3" fill="#17948A" opacity=".92" /><rect x="438" y="162" width="6" height="16" rx="3" fill="#17948A" opacity=".92" />
      <circle cx="470" cy="170" r="30" fill="#fff" stroke="#17948A" strokeWidth="2.5" /><path d="M458 162 q0-8 12-8 q12 0 12 8 v6 q0 8-12 8 q-3 0-5 -1 l-6 5 v-8 q-1-2-1-4z" fill="#17948A" />
      <g fontFamily="monospace" fontSize="10.5">
      <rect x="90" y="52" width="196" height="30" rx="9" fill="#fff" stroke="#E4DACB" /><text x="102" y="71" fill="#2C1D12">"I'd like to reschedule…"</text>
      <rect x="240" y="252" width="216" height="30" rx="9" fill="#2C1D12" /><text x="252" y="271" fill="#EBD3A3">"Done — moved to Friday 4pm."</text>
      </g>
      <text x="260" y="318" fontFamily="monospace" fontSize="11" fill="#A85B34" textAnchor="middle">natural voice · your language · your brand's tone</text></svg></div><span className="tag">Vx · 04 · Voice</span><h3>Voice AI</h3><p>Natural voice agents for inbound and outbound calls — in your customers' language and your brand's tone, with seamless human handoff.</p><Link className="more" href="/voice-ai">Explore Voice AI →</Link></article>
            <article className="pcard reveal"><div className="visual" aria-hidden="true"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Data platform layers illustration">
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
      </g></g></svg></div><span className="tag teal">Dw · Data Services</span><h3>Data Warehousing & Intelligence</h3><p>Modern lakehouse and warehouse builds on Microsoft Fabric, Huawei DataArts, and the Apache stack — the data foundation your AI depends on.</p><Link className="more" href="/data-platforms">Explore Data Platforms →</Link></article>
          </div>
        </div>
      </section>
      <section className="band" id="verticals">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Vertical AI</p>
            <h2>Deep AI for the functions that run your business.</h2>
            <p>Five domain-trained solutions, each with its own page — all running on the Autonoma platform so they can collaborate on the same workflow.</p>
          </div>
          <div className="cards" style={{ gridTemplateColumns: "repeat(5,1fr)" }} id="vert-cards">
      <Link className="el reveal" href="/hr-ai"><span className="num">05</span><span className="sym">Hr</span><span className="name">HR AI</span></Link>
      <Link className="el reveal" href="/finance-ai"><span className="num">06</span><span className="sym">Fi</span><span className="name">Finance AI</span></Link>
      <Link className="el reveal" href="/logistics-ai"><span className="num">07</span><span className="sym">Lg</span><span className="name">Logistics AI</span></Link>
      <Link className="el reveal" href="/sales-ai"><span className="num">08</span><span className="sym">Sa</span><span className="name">Sales AI</span></Link>
      <Link className="el reveal" href="/legal-ai"><span className="num">09</span><span className="sym">Le</span><span className="name">Legal AI</span></Link>
      </div>
        </div>
      </section>
      <section id="solutions-index">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Everything we build</p>
            <h2>The complete portfolio, at a glance.</h2>
            <p>Every product and service, its category, the platforms it runs on, and a direct link to its dedicated page.</p>
          </div>
          <div className="sol-table-wrap reveal">
            <table className="sol">
              <caption>tattvix.ai · solutions index</caption>
              <thead>
                <tr>
                  <th scope="col">El.</th>
                  <th scope="col">Solution</th>
                  <th scope="col">Category</th>
                  <th scope="col">Platforms & technology</th>
                  <th scope="col">Explore</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="sym-cell">Ot</td>
                  <td><b>OTTO</b> — automated cloud managed services</td>
                  <td className="cat">AI Product · Cloud Ops</td>
                  <td className="tech">AWS · Azure · GCP · Huawei Cloud</td>
                  <td><Link className="tlink" href="/otto">View OTTO →</Link></td>
                </tr>
                <tr>
                  <td className="sym-cell">An</td>
                  <td><b>Autonoma</b> — AI agent builder & orchestration platform</td>
                  <td className="cat">AI Product · Agentic</td>
                  <td className="tech">Multi-agent orchestration, governance & observability</td>
                  <td><Link className="tlink" href="/autonoma">View Autonoma →</Link></td>
                </tr>
                <tr>
                  <td className="sym-cell">Ir</td>
                  <td><b>IraOps</b> — AI service desk</td>
                  <td className="cat">AI Product · Service Desk</td>
                  <td className="tech">Integrates with your existing ITSM & knowledge systems</td>
                  <td><Link className="tlink" href="/iraops">View IraOps →</Link></td>
                </tr>
                <tr>
                  <td className="sym-cell">Vx</td>
                  <td><b>Voice AI</b> — automated voice-based solutions</td>
                  <td className="cat">AI Product · CX</td>
                  <td className="tech">Conversational voice, telephony & contact-centre integration</td>
                  <td><Link className="tlink" href="/voice-ai">View Voice AI →</Link></td>
                </tr>
                <tr>
                  <td className="sym-cell">Hr</td>
                  <td><b>HR AI</b> — hiring, onboarding & employee lifecycle</td>
                  <td className="cat">Vertical AI</td>
                  <td className="tech">Domain-trained agents on Autonoma</td>
                  <td><Link className="tlink" href="/hr-ai">View HR AI →</Link></td>
                </tr>
                <tr>
                  <td className="sym-cell">Fi</td>
                  <td><b>Finance AI</b> — close, reconciliation & reporting</td>
                  <td className="cat">Vertical AI</td>
                  <td className="tech">Audit-ready trails on your ERP</td>
                  <td><Link className="tlink" href="/finance-ai">View Finance AI →</Link></td>
                </tr>
                <tr>
                  <td className="sym-cell">Lg</td>
                  <td><b>Logistics AI</b> — demand, routing & supply chain</td>
                  <td className="cat">Vertical AI</td>
                  <td className="tech">POS, ERP & telematics signals</td>
                  <td><Link className="tlink" href="/logistics-ai">View Logistics AI →</Link></td>
                </tr>
                <tr>
                  <td className="sym-cell">Sa</td>
                  <td><b>Sales AI</b> — pipeline, outreach & quote-to-cash</td>
                  <td className="cat">Vertical AI</td>
                  <td className="tech">Your CRM & CPQ</td>
                  <td><Link className="tlink" href="/sales-ai">View Sales AI →</Link></td>
                </tr>
                <tr>
                  <td className="sym-cell">Le</td>
                  <td><b>Legal AI</b> — contract review & compliance</td>
                  <td className="cat">Vertical AI</td>
                  <td className="tech">Playbook-driven, counsel in the loop</td>
                  <td><Link className="tlink" href="/legal-ai">View Legal AI →</Link></td>
                </tr>
                <tr>
                  <td className="sym-cell">Dw</td>
                  <td><b>Data Warehousing & Intelligence</b> — modern data platforms</td>
                  <td className="cat">AI Data Services</td>
                  <td className="tech">Microsoft Fabric · Huawei DataArts · Apache stack</td>
                  <td><Link className="tlink" href="/data-platforms">View Data Platforms →</Link></td>
                </tr>
                <tr>
                  <td className="sym-cell">Ai</td>
                  <td><b>Custom AI Solutions</b> — build-to-suit AI services</td>
                  <td className="cat">AI Services</td>
                  <td className="tech">Azure AI Foundry · OpenAI · Huawei ModelArts · AWS Bedrock</td>
                  <td><Link className="tlink" href="/ai-services">View AI Services →</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="tight">
        <div className="wrap">
          <div className="cta-box reveal">
            <div>
              <p className="eyebrow" style={{ color: "#fff" }}>Get started</p>
              <h2>See your first workflow run itself.</h2>
              <p>Tell us where the friction is — cloud ops, voice, data, or a business function — and we'll show you a working solution against it.</p>
            </div>
            <div className="cta-actions"><Link className="btn btn-gold" href="/request-demo">Request a demo</Link>
      <p className="mail">or write to <a href="mailto:info@tattvix.ai">info@tattvix.ai</a></p></div>
          </div>
        </div>
      </section>
    </>
  );
}
