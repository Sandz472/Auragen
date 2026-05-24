import type { MetadataRoute } from 'next';
import { seo } from '@/lib/copy';

// Required for `output: 'export'`.
export const dynamic = 'force-static';

const routes = [
  { path: '', priority: 1.0, changeFrequency: 'monthly' as const },
  { path: 'about', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: 'services', priority: 0.95, changeFrequency: 'monthly' as const },
  { path: 'sectors', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: 'contact', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: 'insights', priority: 0.4, changeFrequency: 'yearly' as const },
  { path: 'careers', priority: 0.5, changeFrequency: 'yearly' as const },
  { path: 'privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: 'terms', priority: 0.3, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: r.path ? `${seo.siteUrl}/${r.path}/` : `${seo.siteUrl}/`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
