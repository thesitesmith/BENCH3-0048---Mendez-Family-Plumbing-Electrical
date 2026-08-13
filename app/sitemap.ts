import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

const claimed = (host: string | null | undefined): boolean =>
  process.env.SITESMITH_INDEX === 'allow' || !!(host && !host.endsWith('.vercel.app'));

export default function sitemap(): MetadataRoute.Sitemap {
  const host = headers().get('host') || '';
  if (!claimed(host)) return [];
  return [{ url: 'https://' + host, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }];
}
