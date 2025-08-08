// Sitemap Generator for SEO
export const generateSitemap = (posts, baseUrl = 'https://kodezacademy.com') => {
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/courses', priority: '0.9', changefreq: 'weekly' },
    { url: '/about', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog', priority: '0.8', changefreq: 'daily' },
    { url: '/notes', priority: '0.8', changefreq: 'weekly' },
    { url: '/tasks', priority: '0.8', changefreq: 'weekly' },
    { url: '/assessments', priority: '0.8', changefreq: 'weekly' },
    { url: '/assign-projects', priority: '0.8', changefreq: 'weekly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
  ${posts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.slug || post.id}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

  return sitemap;
};

// Robots.txt generator
export const generateRobotsTxt = (baseUrl = 'https://kodezacademy.com') => {
  return `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1`;
}; 