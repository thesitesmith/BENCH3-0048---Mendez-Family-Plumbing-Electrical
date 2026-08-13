'use client';

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

// Sticky mobile call bar, written by The Sitesmith. Do not modify.
export default function CallBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={'fixed bottom-0 inset-x-0 z-50 md:hidden transition-all duration-300 ' + (visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0')}>
      <a href='tel:+15128130488' className='flex items-center justify-center gap-2 w-full bg-brand-primary px-6 py-4 text-base font-semibold text-white'>
        <Phone size={18} aria-hidden='true' />
        Call Us
      </a>
    </div>
  );
}
