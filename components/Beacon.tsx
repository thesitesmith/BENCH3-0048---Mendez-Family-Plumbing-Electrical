'use client';

import { useEffect } from 'react';

// Analytics for the site owner, written by The Sitesmith. Do not modify.
const LEAD = "BENCH3-0048";
const ENDPOINT = "https://www.thesitesmith.co/api/beacon";

function send(event: string) {
  try {
    const body = JSON.stringify({ l: LEAD, e: event });
    // text/plain on purpose: it is CORS-safelisted, so neither path triggers
    // a preflight, and the endpoint parses the body as JSON regardless.
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      navigator.sendBeacon(ENDPOINT, new Blob([body], { type: 'text/plain' }));
      return;
    }
    fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body, keepalive: true }).catch(() => {});
  } catch {
    // Tracking must never break the page it is measuring.
  }
}

export default function Beacon() {
  useEffect(() => {
    send('view');
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target && target.closest ? target.closest('a[href^="tel:"]') : null;
      if (link) send('call');
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);
  return null;
}
