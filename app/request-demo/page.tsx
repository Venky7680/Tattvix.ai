import type { Metadata } from 'next';
import Link from 'next/link';
import DemoForm from '@/components/DemoForm';

export const metadata: Metadata = {
  title: "Request a Demo — Tattvix.ai",
  description: "Request a live demo of Tattvix.ai solutions — OTTO, Autonoma, IraOps, Voice AI, vertical AI, data platforms, or custom AI. Tell us your problem and we'll reach out asap.",
  alternates: {
    canonical: "https://tattvix.ai/request-demo"
  },
  openGraph: {
    type: "website",
    siteName: "Tattvix.ai",
    title: "Request a Demo — Tattvix.ai",
    description: "Request a live demo of Tattvix.ai solutions — OTTO, Autonoma, IraOps, Voice AI, vertical AI, data platforms, or custom AI. Tell us your problem and we'll reach out asap.",
    url: "https://tattvix.ai/request-demo",
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
          <p className="breadcrumb"><Link href="/">Home</Link> <span>/</span> Request a demo</p>
          <div className="section-head">
            <p className="eyebrow">Request a demo</p>
            <h1>See Tattvix on your workflow.</h1>
            <p>Tell us a little about your organization and the problem you'd like to solve with AI. We'll come back with a live demo against your scenario — no slideware.</p>
          </div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="form-grid">
            <div>
      <DemoForm />
      </div>
            <div>
              <div className="info-card reveal in">
                <h3>What happens next</h3>
                <p>1 · We review your problem statement and match it to the right solution — OTTO, Autonoma, IraOps, Voice AI, a vertical AI, a data platform, or a custom build.</p>
                <p style={{ marginTop: "10px" }}>2 · We reach out within two business days to schedule a 30-minute call.</p>
                <p style={{ marginTop: "10px" }}>3 · You see a live demo against your scenario — and a clear view of effort, timeline, and cost.</p>
              </div>
              <div className="info-card reveal in" style={{ marginTop: "16px" }}><h3>Prefer email?</h3>
      <p>Write to us with the same details and we'll take it from there.</p>
      <a className="big-mail" href="mailto:info@tattvix.ai?subject=Demo%20request">info@tattvix.ai</a></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
