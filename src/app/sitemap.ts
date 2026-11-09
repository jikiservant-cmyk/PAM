import type { MetadataRoute } from 'next';

const BASE = 'https://papasandmamas.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/sermons', '/events', '/podcast', '/donate', '/contact', '/scripture-finder', '/fellowship'];

  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
