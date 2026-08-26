'use client';

import { useRef, useState } from 'react';

/** Personal mailbox providers are rejected: the form asks for a work address. */
const FREE_EMAIL_DOMAINS = [
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.in', 'yahoo.co.in',
  'outlook.com', 'hotmail.com', 'live.com', 'icloud.com', 'aol.com',
  'proton.me', 'protonmail.com', 'rediffmail.com', 'zoho.com', 'mail.com',
  'gmx.com', 'yandex.com',
];

const STORAGE_KEY = 'tattvix_demo_requests';
const RELAY_ENDPOINT = 'https://formsubmit.co/ajax/info@tattvix.ai';

const COMPANY_SIZES = [
  '1 – 50 employees',
  '51 – 200 employees',
  '201 – 1,000 employees',
  '1,000+ employees',
];

type FieldName = 'name' | 'org' | 'email' | 'size' | 'problem';

const EMPTY = { name: '', org: '', email: '', size: '', problem: '' };

export default function DemoForm() {
  const [values, setValues] = useState<Record<FieldName, string>>(EMPTY);
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  const update = (field: FieldName) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setInvalid((s) => ({ ...s, [field]: false }));
  };

  const fieldClass = (field: FieldName) =>
    invalid[field] ? 'field invalid' : 'field';

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const email = values.email.trim().toLowerCase();
    const domain = email.split('@')[1] || '';
    const emailOk =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      FREE_EMAIL_DOMAINS.indexOf(domain) === -1;

    const next: Record<string, boolean> = {
      name: !values.name.trim(),
      org: !values.org.trim(),
      email: !emailOk,
      size: !values.size,
      problem: !values.problem.trim(),
    };
    setInvalid(next);
    if (Object.values(next).some(Boolean)) return;

    const payload = {
      name: values.name.trim(),
      organization: values.org.trim(),
      email,
      company_size: values.size,
      problem: values.problem.trim(),
      submitted: new Date().toISOString(),
    };

    // Store locally so the visit is never lost, even if network submission fails.
    try {
      const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      all.push(payload);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    } catch {
      /* storage unavailable — the relay below is still attempted */
    }

    setSending(true);

    // Deliver to info@tattvix.ai via FormSubmit relay (activate once with a first submission).
    try {
      await fetch(RELAY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'Demo request &#8212; ' + payload.organization,
          Name: payload.name,
          Organization: payload.organization,
          'Organization email': payload.email,
          'Company size': payload.company_size,
          'Problem to solve with AI': payload.problem,
        }),
      });
    } catch {
      /* delivery is best-effort; the request is already stored locally */
    }

    setSent(true);
    requestAnimationFrame(() => {
      successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  return (
    <>
      {!sent && (
        <form id="demo-form" className="demo" noValidate onSubmit={handleSubmit}>
          <div className={fieldClass('name')}>
            <label htmlFor="f-name">Your name</label>
            <input
              type="text"
              id="f-name"
              name="name"
              autoComplete="name"
              placeholder="e.g. Priya Sharma"
              value={values.name}
              onChange={update('name')}
              required
            />
            <p className="err">Please enter your name.</p>
          </div>

          <div className={fieldClass('org')}>
            <label htmlFor="f-org">Organization</label>
            <input
              type="text"
              id="f-org"
              name="organization"
              autoComplete="organization"
              placeholder="e.g. Coastal Retail Pvt Ltd"
              value={values.org}
              onChange={update('org')}
              required
            />
            <p className="err">Please enter your organization.</p>
          </div>

          <div className={fieldClass('email')}>
            <label htmlFor="f-email">Organization email</label>
            <input
              type="email"
              id="f-email"
              name="email"
              autoComplete="email"
              placeholder="you@yourcompany.com"
              value={values.email}
              onChange={update('email')}
              required
            />
            <p className="hint">
              Please use your work email — personal email domains (gmail, yahoo, etc.)
              aren&#39;t accepted.
            </p>
            <p className="err">
              Please enter a valid organization email address (not a personal email
              domain).
            </p>
          </div>

          <div className={fieldClass('size')}>
            <label htmlFor="f-size">Company size</label>
            <select
              id="f-size"
              name="company_size"
              value={values.size}
              onChange={update('size')}
              required
            >
              <option value="" disabled>
                Select company size…
              </option>
              {COMPANY_SIZES.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
            <p className="err">Please select your company size.</p>
          </div>

          <div className={fieldClass('problem')}>
            <label htmlFor="f-problem">
              What problem would you like to solve using AI?
            </label>
            <textarea
              id="f-problem"
              name="problem"
              placeholder="e.g. Our cloud operations team spends hours on patching and incident response every week…"
              value={values.problem}
              onChange={update('problem')}
              required
            />
            <p className="err">Please tell us a little about the problem.</p>
          </div>

          <button
            type="submit"
            id="f-submit"
            className="btn btn-copper"
            style={{ alignSelf: 'flex-start' }}
            disabled={sending}
          >
            {sending ? 'Sending&#8230;' : 'Request my demo'}
          </button>
          <p className="form-note">
            We use these details only to reach back to you about your request. No
            newsletters, no sharing.
          </p>
        </form>
      )}

      <div
        id="demo-success"
        ref={successRef}
        className={sent ? 'success show' : 'success'}
        role="status"
      >
        <div className="tick">✓</div>
        <h3>Thank you — request received.</h3>
        <p>
          We will reach out to you as soon as possible at your organization email to
          schedule your demo. In a hurry? Write to us directly at{' '}
          <a
            href="mailto:info@tattvix.ai"
            style={{ color: 'var(--teal)', fontWeight: '600' }}
          >
            info@tattvix.ai
          </a>
          .
        </p>
      </div>
    </>
  );
}
