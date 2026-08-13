import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

const claimed = (host: string | null | undefined): boolean =>
  process.env.SITESMITH_INDEX === 'allow' || !!(host && !host.endsWith('.vercel.app'));

export default function robots(): MetadataRoute.Robots {
  const host = headers().get('host') || '';
  if (!claimed(host)) return { rules: { userAgent: '*', disallow: '/' } };
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://' + host + '/sitemap.xml',
  };
}
