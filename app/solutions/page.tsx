import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "All Solutions — AI Products, Vertical AI, Data & AI Services | Tattvix.ai",
  description: "Browse every Tattvix.ai solution: OTTO, Autonoma, IraOps, Voice AI, HR AI, Finance AI, Logistics AI, Sales AI, Legal AI, data platforms, and custom AI services — each with a dedicated page.",
  alternates: {
    canonical: "https://tattvix.ai/solutions"
  },
  openGraph: {
    type: "website",
    siteName: "Tattvix.ai",
    title: "All Solutions — AI Products, Vertical AI, Data & AI Services | Tattvix.ai",
    description: "Browse every Tattvix.ai solution: OTTO, Autonoma, IraOps, Voice AI, HR AI, Finance AI, Logistics AI, Sales AI, Legal AI, data platforms, and custom AI services — each with a dedicated page.",
    url: "https://tattvix.ai/solutions",
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

      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb"><Link href="/">Home</Link> <span>/</span> Solutions</p>
          <div className="section-head">
            <p className="eyebrow">Solutions</p>
            <h1>Every Tattvix solution, on its own page.</h1>
            <p>Four flagship AI products, five vertical AI solutions, plus data platforms and custom AI services — each with capabilities, how-it-works, and a demo on request.</p>
          </div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">AI Products & Vertical AI</p>
            <h2>The product line.</h2>
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
      </g></svg></div><span className="tag">Ot · 01 · AI Product</span><h3>OTTO</h3><p>OTTO turns manual cloud operations — provisioning, monitoring, patching, cost governance, and incident response — into automated, always-on …</p><Link className="more" href="/otto">Explore OTTO →</Link></article>
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
      </g></svg></div><span className="tag">An · 02 · AI Product</span><h3>Autonoma</h3><p>Autonoma is the orchestration platform underneath everything Tattvix builds — and the agent builder your teams use to compose, govern, and o…</p><Link className="more" href="/autonoma">Explore Autonoma →</Link></article>
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
      <text x="260" y="312" fontFamily="monospace" fontSize="11" fill="#A85B34" textAnchor="middle">resolution rate 86% · human-gated where it matters</text></svg></div><span className="tag">Ir · 03 · AI Product</span><h3>IraOps</h3><p>IraOps is an AI-first service desk that resolves employee and customer requests end-to-end — from password resets to complex tickets — with …</p><Link className="more" href="/iraops">Explore IraOps →</Link></article>
            <article className="pcard reveal"><div className="visual" aria-hidden="true"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Voice AI conversation illustration">
      <rect width="520" height="340" fill="#F7F3EC" />
      <circle cx="52" cy="170" r="30" fill="#2C1D12" /><path d="M44 162 a8 8 0 0 1 16 0 v8 a8 8 0 0 1 -16 0z" fill="#C9973F" /><rect x="50" y="182" width="4" height="8" fill="#C9973F" /><rect x="44" y="190" width="16" height="3" rx="1.5" fill="#C9973F" />
      <rect x="90" y="161" width="6" height="18" rx="3" fill="#C9973F" opacity=".92" /><rect x="102" y="153" width="6" height="34" rx="3" fill="#17948A" opacity=".92" /><rect x="114" y="144" width="6" height="52" rx="3" fill="#17948A" opacity=".92" /><rect x="126" y="135" width="6" height="70" rx="3" fill="#C9973F" opacity=".92" /><rect x="138" y="141" width="6" height="58" rx="3" fill="#17948A" opacity=".92" /><rect x="150" y="150" width="6" height="40" rx="3" fill="#17948A" opacity=".92" /><rect x="162" y="157" width="6" height="26" rx="3" fill="#C9973F" opacity=".92" /><rect x="174" y="148" width="6" height="44" rx="3" fill="#17948A" opacity=".92" /><rect x="186" y="137" width="6" height="66" rx="3" fill="#17948A" opacity=".92" /><rect x="198" y="128" width="6" height="84" rx="3" fill="#C9973F" opacity=".92" /><rect x="210" y="138" width="6" height="64" rx="3" fill="#17948A" opacity=".92" /><rect x="222" y="149" width="6" height="42" rx="3" fill="#17948A" opacity=".92" /><rect x="234" y="155" width="6" height="30" rx="3" fill="#C9973F" opacity=".92" /><rect x="246" y="145" width="6" height="50" rx="3" fill="#17948A" opacity=".92" /><rect x="258" y="133" width="6" height="74" rx="3" fill="#17948A" opacity=".92" /><rect x="270" y="124" width="6" height="92" rx="3" fill="#C9973F" opacity=".92" /><rect x="282" y="135" width="6" height="70" rx="3" fill="#17948A" opacity=".92" /><rect x="294" y="146" width="6" height="48" rx="3" fill="#17948A" opacity=".92" /><rect x="306" y="154" width="6" height="32" rx="3" fill="#C9973F" opacity=".92" /><rect x="318" y="144" width="6" height="52" rx="3" fill="#17948A" opacity=".92" /><rect x="330" y="134" width="6" height="72" rx="3" fill="#17948A" opacity=".92" /><rect x="342" y="141" width="6" height="58" rx="3" fill="#C9973F" opacity=".92" /><rect x="354" y="150" width="6" height="40" rx="3" fill="#17948A" opacity=".92" /><rect x="366" y="156" width="6" height="28" rx="3" fill="#17948A" opacity=".92" /><rect x="378" y="147" width="6" height="46" rx="3" fill="#C9973F" opacity=".92" /><rect x="390" y="139" width="6" height="62" rx="3" fill="#17948A" opacity=".92" /><rect x="402" y="145" width="6" height="50" rx="3" fill="#17948A" opacity=".92" /><rect x="414" y="152" width="6" height="36" rx="3" fill="#C9973F" opacity=".92" /><rect x="426" y="158" width="6" height="24" rx="3" fill="#17948A" opacity=".92" /><rect x="438" y="162" width="6" height="16" rx="3" fill="#17948A" opacity=".92" />
      <circle cx="470" cy="170" r="30" fill="#fff" stroke="#17948A" strokeWidth="2.5" /><path d="M458 162 q0-8 12-8 q12 0 12 8 v6 q0 8-12 8 q-3 0-5 -1 l-6 5 v-8 q-1-2-1-4z" fill="#17948A" />
      <g fontFamily="monospace" fontSize="10.5">
      <rect x="90" y="52" width="196" height="30" rx="9" fill="#fff" stroke="#E4DACB" /><text x="102" y="71" fill="#2C1D12">"I'd like to reschedule…"</text>
      <rect x="240" y="252" width="216" height="30" rx="9" fill="#2C1D12" /><text x="252" y="271" fill="#EBD3A3">"Done — moved to Friday 4pm."</text>
      </g>
      <text x="260" y="318" fontFamily="monospace" fontSize="11" fill="#A85B34" textAnchor="middle">natural voice · your language · your brand's tone</text></svg></div><span className="tag">Vx · 04 · AI Product</span><h3>Voice AI</h3><p>Natural, low-latency voice agents that hold real conversations — inbound support, outbound engagement, appointment handling, and voice-drive…</p><Link className="more" href="/voice-ai">Explore Voice AI →</Link></article>
            <article className="pcard reveal"><div className="visual" aria-hidden="true"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HR AI illustration">
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
      <text x="260" y="316" fontFamily="monospace" fontSize="11" fill="#A85B34" textAnchor="middle">HR AI · domain-trained · runs on Autonoma</text></svg></div><span className="tag">Hr · 05 · Vertical AI</span><h3>HR AI</h3><p>Domain-trained AI for the HR function: screening and scheduling, onboarding, policy answers, and employee lifecycle workflows — automated wi…</p><Link className="more" href="/hr-ai">Explore HR AI →</Link></article>
            <article className="pcard reveal"><div className="visual" aria-hidden="true"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Finance AI illustration">
      <rect width="520" height="340" fill="#F7F3EC" />
      <polygon points="76,110 118,134 118,182 76,206 34,182 34,134" fill="#2C1D12" />
      <text x="76" y="166" fontFamily="monospace" fontSize="20" fill="#C9973F" textAnchor="middle" fontWeight="bold">Fi</text>
      <line x1="118" y1="158" x2="150" y2="158" stroke="#C9973F" strokeWidth="2" strokeDasharray="5 5" />
      <rect x="150" y="84" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="109" fontFamily="monospace" fontSize="11" fill="#2C1D12">bank reconciliation · daily</text>
      <circle cx="392" cy="104" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 110)" /><rect x="150" y="140" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="165" fontFamily="monospace" fontSize="11" fill="#2C1D12">AP invoice matched & queued</text>
      <circle cx="392" cy="160" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 166)" /><rect x="150" y="196" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="221" fontFamily="monospace" fontSize="11" fill="#2C1D12">month-end close checklist</text>
      <circle cx="392" cy="216" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 222)" /><rect x="150" y="252" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="277" fontFamily="monospace" fontSize="11" fill="#2C1D12">exception → controller</text>
      <circle cx="392" cy="272" r="11" fill="#C9973F" /><text x="392" y="283" fontFamily="monospace" fontSize="11" fill="#fff" textAnchor="middle">→</text>
      <text x="260" y="316" fontFamily="monospace" fontSize="11" fill="#A85B34" textAnchor="middle">Finance AI · domain-trained · runs on Autonoma</text></svg></div><span className="tag">Fi · 06 · Vertical AI</span><h3>Finance AI</h3><p>Domain-trained AI for the finance function: reconciliation, AP/AR, month-end close, and reporting workflows — every action logged to an audi…</p><Link className="more" href="/finance-ai">Explore Finance AI →</Link></article>
            <article className="pcard reveal"><div className="visual" aria-hidden="true"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logistics AI illustration">
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
      <text x="260" y="316" fontFamily="monospace" fontSize="11" fill="#A85B34" textAnchor="middle">Logistics AI · domain-trained · runs on Autonoma</text></svg></div><span className="tag">Lg · 07 · Vertical AI</span><h3>Logistics AI</h3><p>Domain-trained AI for logistics and supply chain: demand forecasting, route optimisation, exception handling, and supplier coordination acro…</p><Link className="more" href="/logistics-ai">Explore Logistics AI →</Link></article>
            <article className="pcard reveal"><div className="visual" aria-hidden="true"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sales AI illustration">
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
      <text x="260" y="316" fontFamily="monospace" fontSize="11" fill="#A85B34" textAnchor="middle">Sales AI · domain-trained · runs on Autonoma</text></svg></div><span className="tag">Sa · 08 · Vertical AI</span><h3>Sales AI</h3><p>Domain-trained AI for the revenue function: lead scoring and routing, outreach, pipeline hygiene, and quote-to-cash automation that sellers …</p><Link className="more" href="/sales-ai">Explore Sales AI →</Link></article>
            <article className="pcard reveal"><div className="visual" aria-hidden="true"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Legal AI illustration">
      <rect width="520" height="340" fill="#F7F3EC" />
      <polygon points="76,110 118,134 118,182 76,206 34,182 34,134" fill="#2C1D12" />
      <text x="76" y="166" fontFamily="monospace" fontSize="20" fill="#C9973F" textAnchor="middle" fontWeight="bold">Le</text>
      <line x1="118" y1="158" x2="150" y2="158" stroke="#C9973F" strokeWidth="2" strokeDasharray="5 5" />
      <rect x="150" y="84" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="109" fontFamily="monospace" fontSize="11" fill="#2C1D12">contract clauses extracted</text>
      <circle cx="392" cy="104" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 110)" /><rect x="150" y="140" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="165" fontFamily="monospace" fontSize="11" fill="#2C1D12">deviations vs playbook flagged</text>
      <circle cx="392" cy="160" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 166)" /><rect x="150" y="196" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="221" fontFamily="monospace" fontSize="11" fill="#2C1D12">renewal calendar updated</text>
      <circle cx="392" cy="216" r="11" fill="#17948A" /><path d="M-4 0 l3 3 l6 -7" stroke="#fff" strokeWidth="2" fill="none" transform="translate(392 222)" /><rect x="150" y="252" width="300" height="40" rx="9" fill="#fff" stroke="#E4DACB" />
      <text x="166" y="277" fontFamily="monospace" fontSize="11" fill="#2C1D12">negotiation → counsel</text>
      <circle cx="392" cy="272" r="11" fill="#C9973F" /><text x="392" y="283" fontFamily="monospace" fontSize="11" fill="#fff" textAnchor="middle">→</text>
      <text x="260" y="316" fontFamily="monospace" fontSize="11" fill="#A85B34" textAnchor="middle">Legal AI · domain-trained · runs on Autonoma</text></svg></div><span className="tag">Le · 09 · Vertical AI</span><h3>Legal AI</h3><p>Domain-trained AI for the legal function: contract review, clause intelligence, deviation flagging against your playbook, and compliance wor…</p><Link className="more" href="/legal-ai">Explore Legal AI →</Link></article>
          </div>
          <div className="cards two" style={{ marginTop: "18px" }}>
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
      </g></g></svg></div><span className="tag teal">Dw · AI Data Services</span><h3>Data Warehousing & Intelligence</h3><p>Modern data platforms on Microsoft Fabric, Huawei DataArts, and the Apache stack.</p><Link className="more" href="/data-platforms">Explore Data Platforms →</Link></article>
            <article className="pcard reveal"><div className="visual" aria-hidden="true"><svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Custom AI solutions on four platforms">
      <rect width="520" height="340" fill="#F7F3EC" />
      <g><rect x="12" y="43" width="146" height="34" rx="9" fill="#fff" stroke="#17948A" strokeWidth="1.8" /><text x="85" y="65" fontFamily="monospace" fontSize="10.5" fill="#0E6B64" textAnchor="middle">Azure AI Foundry</text><line x1="85" y1="77" x2="260" y2="124" stroke="#C9973F" strokeWidth="1.8" strokeDasharray="5 6" opacity=".7" /></g><g><rect x="322" y="43" width="146" height="34" rx="9" fill="#fff" stroke="#17948A" strokeWidth="1.8" /><text x="395" y="65" fontFamily="monospace" fontSize="10.5" fill="#0E6B64" textAnchor="middle">OpenAI</text><line x1="395" y1="77" x2="260" y2="124" stroke="#C9973F" strokeWidth="1.8" strokeDasharray="5 6" opacity=".7" /></g><g><rect x="12" y="263" width="146" height="34" rx="9" fill="#fff" stroke="#17948A" strokeWidth="1.8" /><text x="85" y="285" fontFamily="monospace" fontSize="10.5" fill="#0E6B64" textAnchor="middle">ModelArts</text><line x1="85" y1="263" x2="260" y2="216" stroke="#C9973F" strokeWidth="1.8" strokeDasharray="5 6" opacity=".7" /></g><g><rect x="322" y="263" width="146" height="34" rx="9" fill="#fff" stroke="#17948A" strokeWidth="1.8" /><text x="395" y="285" fontFamily="monospace" fontSize="10.5" fill="#0E6B64" textAnchor="middle">AWS Bedrock</text><line x1="395" y1="263" x2="260" y2="216" stroke="#C9973F" strokeWidth="1.8" strokeDasharray="5 6" opacity=".7" /></g>
      <polygon points="260,116 312,146 312,194 260,224 208,194 208,146" fill="#2C1D12" />
      <polygon points="260,127 302,151 302,189 260,213 218,189 218,151" fill="none" stroke="#C9973F" strokeWidth="2" />
      <text x="260" y="164" fontFamily="monospace" fontSize="11" fill="#EBD3A3" textAnchor="middle">your custom</text>
      <text x="260" y="182" fontFamily="monospace" fontSize="11" fill="#C9973F" textAnchor="middle" fontWeight="bold">AI solution</text>
      <text x="260" y="322" fontFamily="monospace" fontSize="11" fill="#A85B34" textAnchor="middle">copilots · RAG · document intelligence · fine-tuned models</text></svg></div><span className="tag teal">Ai · AI Services</span><h3>Custom AI Solutions</h3><p>Build-to-suit AI on Azure AI Foundry, OpenAI, Huawei ModelArts, and AWS Bedrock.</p><Link className="more" href="/ai-services">Explore AI Services →</Link></article>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Index</p>
            <h2>The complete portfolio table.</h2>
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
              <h2>Ready to see it work?</h2>
              <p>Tell us the workflow — we'll show you a working solution against it in weeks.</p>
            </div>
            <div className="cta-actions"><Link className="btn btn-gold" href="/request-demo">Request a demo</Link>
      <p className="mail">or write to <a href="mailto:info@tattvix.ai">info@tattvix.ai</a></p></div>
          </div>
        </div>
      </section>
    </>
  );
}
