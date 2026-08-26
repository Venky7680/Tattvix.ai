'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Scroll-reveal behaviour carried over from the original static pages: the
 * `io` class on <html> arms the hidden state, and each `.reveal` element gets
 * `in` once it scrolls into view. Re-runs per route so client-side navigation
 * picks up the newly mounted elements.
 */
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    document.documentElement.classList.add('io');

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
