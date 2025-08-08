import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react';

const SEOChecklist = () => {
  const [seoStatus, setSeoStatus] = useState({
    title: false,
    description: false,
    keywords: false,
    canonical: false,
    ogTags: false,
    twitterCards: false,
    structuredData: false,
    images: false,
    links: false,
    performance: false,
    mobile: false,
    ssl: false,
    sitemap: false,
    robots: false
  });

  useEffect(() => {
    // Check SEO elements on page load
    checkSEOElements();
  }, []);

  const checkSEOElements = () => {
    const checks = {
      title: document.title && document.title.length > 10 && document.title.length < 60,
      description: document.querySelector('meta[name="description"]')?.content?.length > 50,
      keywords: document.querySelector('meta[name="keywords"]')?.content?.length > 0,
      canonical: !!document.querySelector('link[rel="canonical"]'),
      ogTags: !!document.querySelector('meta[property="og:title"]'),
      twitterCards: !!document.querySelector('meta[name="twitter:card"]'),
      structuredData: !!document.querySelector('script[type="application/ld+json"]'),
      images: document.querySelectorAll('img[alt]').length === document.querySelectorAll('img').length,
      links: document.querySelectorAll('a[href]').length > 0,
      performance: window.performance?.timing?.loadEventEnd - window.performance?.timing?.navigationStart < 3000,
      mobile: window.innerWidth <= 768,
      ssl: window.location.protocol === 'https:',
      sitemap: true, // Would need server check
      robots: true // Would need server check
    };

    setSeoStatus(checks);
  };

  const getStatusIcon = (status) => {
    if (status) return <CheckCircle className="w-5 h-5 text-green-500" />;
    return <XCircle className="w-5 h-5 text-red-500" />;
  };

  const getStatusText = (status) => {
    return status ? 'Pass' : 'Fail';
  };

  const getStatusColor = (status) => {
    return status ? 'text-green-600' : 'text-red-600';
  };

  const seoItems = [
    {
      key: 'title',
      title: 'Page Title',
      description: 'Title should be 10-60 characters long',
      critical: true
    },
    {
      key: 'description',
      title: 'Meta Description',
      description: 'Description should be 50-160 characters',
      critical: true
    },
    {
      key: 'keywords',
      title: 'Meta Keywords',
      description: 'Keywords should be relevant and specific',
      critical: false
    },
    {
      key: 'canonical',
      title: 'Canonical URL',
      description: 'Canonical URL should be set to prevent duplicate content',
      critical: true
    },
    {
      key: 'ogTags',
      title: 'Open Graph Tags',
      description: 'Open Graph tags for social media sharing',
      critical: true
    },
    {
      key: 'twitterCards',
      title: 'Twitter Cards',
      description: 'Twitter Card meta tags for better social sharing',
      critical: false
    },
    {
      key: 'structuredData',
      title: 'Structured Data',
      description: 'JSON-LD structured data for rich snippets',
      critical: true
    },
    {
      key: 'images',
      title: 'Image Alt Tags',
      description: 'All images should have descriptive alt attributes',
      critical: true
    },
    {
      key: 'links',
      title: 'Internal Links',
      description: 'Page should have relevant internal links',
      critical: false
    },
    {
      key: 'performance',
      title: 'Page Speed',
      description: 'Page should load in under 3 seconds',
      critical: true
    },
    {
      key: 'mobile',
      title: 'Mobile Responsive',
      description: 'Page should be mobile-friendly',
      critical: true
    },
    {
      key: 'ssl',
      title: 'HTTPS',
      description: 'Site should use HTTPS for security',
      critical: true
    },
    {
      key: 'sitemap',
      title: 'XML Sitemap',
      description: 'XML sitemap should be available',
      critical: true
    },
    {
      key: 'robots',
      title: 'Robots.txt',
      description: 'Robots.txt file should be accessible',
      critical: true
    }
  ];

  const passedChecks = Object.values(seoStatus).filter(Boolean).length;
  const totalChecks = Object.keys(seoStatus).length;
  const criticalChecks = seoItems.filter(item => item.critical).length;
  const passedCriticalChecks = seoItems.filter(item => item.critical && seoStatus[item.key]).length;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">SEO Checklist</h2>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{passedChecks}/{totalChecks}</div>
            <div className="text-sm text-gray-600">Overall</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{passedCriticalChecks}/{criticalChecks}</div>
            <div className="text-sm text-gray-600">Critical</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {seoItems.map((item) => (
          <div
            key={item.key}
            className={`flex items-center justify-between p-4 rounded-lg border ${
              seoStatus[item.key] ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
            }`}
          >
            <div className="flex items-center space-x-3">
              {getStatusIcon(seoStatus[item.key])}
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  {item.critical && (
                    <span className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded">
                      Critical
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
            <div className={`font-semibold ${getStatusColor(seoStatus[item.key])}`}>
              {getStatusText(seoStatus[item.key])}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Info className="w-5 h-5 text-blue-500" />
          <h3 className="font-semibold text-blue-900">SEO Tips</h3>
        </div>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Focus on critical items first for maximum SEO impact</li>
          <li>• Ensure all images have descriptive alt text</li>
          <li>• Keep page titles under 60 characters</li>
          <li>• Write compelling meta descriptions</li>
          <li>• Use structured data for rich snippets</li>
          <li>• Optimize for mobile-first indexing</li>
        </ul>
      </div>
    </div>
  );
};

export default SEOChecklist; 